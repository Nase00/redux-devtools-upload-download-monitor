import React from "react";
import { createDevTools } from "redux-devtools";
import DockMonitor from "redux-devtools-dock-monitor";
import LogMonitor from "redux-devtools-log-monitor";
import SliderMonitor from "redux-slider-monitor";

import UploadDownloadMonitor from "../src";

const DevTools = createDevTools(
  <DockMonitor
    defaultIsVisible={true}
    toggleVisibilityKey="ctrl-q"
    changeMonitorKey="ctrl-w"
    changePositionKey="ctrl-e"
  >
    <UploadDownloadMonitor />
    <LogMonitor />
    <SliderMonitor />
  </DockMonitor>
);

export default DevTools;
