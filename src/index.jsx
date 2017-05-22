import React, { Component } from "react";
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

    this.handleFiles = this.handleFiles.bind(this);
  }

  componentDidMount() {
    this.getFileInputEl().addEventListener("change", this.handleFiles, false);
  }

  getFileInputEl = () => document.getElementById("file-upload");

  handleFiles() {
    const fileReader = new FileReader();

    fileReader.onload = evt => {
      const originalAppState = this.getAppState();
      const newAppState = JSON.parse(evt.target.result);

      try {
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

  render() {
    const stringifiedAppState = JSON.stringify(this.getAppState());
    const fileLink = `data:text/json;charset=utf-8, ${encodeURIComponent(stringifiedAppState)}`;
    const genFileName = () => `${document.title || "app"}-state.json`;
    const promptDownload = () => this.refs.fileDownload.click();
    const promptUpload = () => this.refs.fileUpload.click();

    const resetNotifications = () =>
      this.setState({
        fileError: false,
        fileSuccess: false
      });

    return (
      <div style={styles.base} onClick={resetNotifications}>
        <span style={styles.header}>Current state filesize</span>
        <span style={styles.fileSize}>
          {filesize(stringifiedAppState.length)}
        </span>
        {this.state.fileError ? this.renderFileError() : null}
        {this.state.fileSuccess ? this.renderFileSuccess() : null}
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
            <label htmlFor="file-upload">Upload</label>
            <input
              ref="fileUpload"
              id="file-upload"
              type="file"
              style={styles.hidden}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UploadDownloadMonitor;
