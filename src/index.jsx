import React, { Component, Children, cloneElement } from "react";
import PropTypes from "prop-types";
import { ActionCreators } from "redux-devtools";
import filesize from "filesize";

import reducer from "./reducer";
import * as styles from "./styles";

class UploadDownloadMonitor extends Component {
  static update = reducer;

  static propTypes = {
    dispatch: PropTypes.func,
    computedStates: PropTypes.array,
    stagedActionIds: PropTypes.array,
    actionsById: PropTypes.object,
    committedState: PropTypes.object,
    monitorState: PropTypes.shape({
      initialScrollTop: PropTypes.number
    }),
    skippedActionIds: PropTypes.array,
    nextActionId: PropTypes.number,
    currentStateIndex: PropTypes.number
  };

  constructor(props) {
    super(props);

    this.state = {
      fileError: false
    };

    this.validateChildren = this.validateChildren.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
  }

  componentDidMount() {
    this.getFileInputEl().addEventListener("change", this.handleFiles, false);

    this.validateChildren();
  }

  validateChildren() {
    const { children } = this.props;

    const isValid = !children || children.type.name === "SliderMonitor";

    if (!isValid) {
      console.warn(
        "UploadDownloadMonitor was passed a child other than SliderMonitor. This may cause problems!"
      );
    }
  }

  getFileInputEl = () => document.getElementById("file-upload");

  handleFiles() {
    const fileReader = new FileReader();

    fileReader.onload = evt => {
      const originalAppState = this.getAppState();

      try {
        const newAppState = JSON.parse(evt.target.result);
        this.setState({ fileError: false, fileSuccess: true });
        this.props.dispatch(ActionCreators.importState(newAppState));
      } catch (e) {
        this.setState({ fileError: true, fileSuccess: false });
        this.props.dispatch(ActionCreators.importState(originalAppState));
      }
    };

    const file = this.getFileInputEl().files[0];
    fileReader.readAsText(file);
  }

  getAppState = () => ({
    monitorState: this.props.monitorState,
    actionsById: this.props.actionsById,
    nextActionId: this.props.nextActionId,
    stagedActionIds: this.props.stagedActionIds,
    skippedActionIds: this.props.skippedActionIds,
    committedState: this.props.committedState,
    computedStates: [],
    currentStateIndex: this.props.currentStateIndex
  });

  renderFileError = () => (
    <div style={styles.error}>
      Error parsing file, please upload a valid application state
    </div>
  );

  renderFileSuccess = () => (
    <div style={styles.success}>
      State successfully uploaded and imported into application
    </div>
  );

  renderInfo(stringifiedAppState) {
    const appStateFilesize = filesize(stringifiedAppState.length);
    const { fileError, fileSuccess } = this.state;
    return (
      <span style={styles.fileSize}>
        {fileError ? this.renderFileError() : null}
        {fileSuccess ? this.renderFileSuccess() : null}
        {!(fileError || fileSuccess) ? appStateFilesize : null}
      </span>
    );
  }

  renderChildren() {
    const cloneChild = child => cloneElement(child, { ...this.props });
    const childrenWithProps = Children.map(this.props.children, cloneChild);

    return <div style={styles.child}>{childrenWithProps}</div>;
  }

  render() {
    const stringifiedAppState = JSON.stringify(this.getAppState());
    const fileLink = `data:text/json;charset=utf-8, ${encodeURIComponent(stringifiedAppState)}`;

    const genFileName = () => `${document.title || "app"}-state.json`;
    const promptDownload = () => this.refs.fileDownload.click();
    const promptUpload = () => this.refs.fileUpload.click();
    const resetNotifications = () =>
      this.setState({ fileError: false, fileSuccess: false });

    return (
      <div style={styles.wrapper}>
        <div style={styles.base(this.props)} onClick={resetNotifications}>
          <span style={styles.header}>Current state filesize</span>
          {this.renderInfo(stringifiedAppState)}
          <div style={styles.buttonsContainer}>
            <div style={styles.buttonDownload} onClick={promptDownload}>
              <label htmlFor="file-download">
                Download
              </label>
              <a
                ref="fileDownload"
                id="file-download"
                href={fileLink}
                download={genFileName()}
                style={styles.hidden}
              />
            </div>
            <div style={styles.buttonUpload} onClick={promptUpload}>
              <label htmlFor="file-upload" style={styles.clickThrough}>
                Upload
              </label>
              <input
                ref="fileUpload"
                id="file-upload"
                type="file"
                style={styles.hidden}
              />
            </div>
          </div>
        </div>
        {this.props.children ? this.renderChildren() : null}
      </div>
    );
  }
}

export default UploadDownloadMonitor;
