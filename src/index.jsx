import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActionCreators } from "redux-devtools";
import { Button, Notification } from "devui";
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

  getFileInputEl = () => document.getElementById("upload-file");

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
    <Notification type="error">
      Error parsing file. Please upload a valid application state
    </Notification>
  );

  renderFileSuccess = () => (
    <Notification type="success">
      State successfully uploaded and imported into application
    </Notification>
  );

  render() {
    const stringifiedAppState = JSON.stringify(this.getAppState());
    const fileLink = `data: text/json;charset=utf-8, ${encodeURIComponent(stringifiedAppState)}`;
    const genFileName = () => `${document.title || "app"}-state.json`;

    return (
      <div style={styles.base}>
        Size of current application state:
        <h1>
          {filesize(stringifiedAppState.length)}
        </h1>
        {this.state.fileError ? this.renderFileError() : null}
        {this.state.fileSuccess ? this.renderFileSuccess() : null}
        <div>
          <a href={fileLink} download={genFileName()}>
            Download
          </a>
        </div>
        <input id="upload-file" type="file" />
      </div>
    );
  }
}

export default UploadDownloadMonitor;
