const WHITE = "#FFFFFF";
const LIGHT_GREY = "#FBFCFF";
const DARK_GREY = "#2A2F3A";
const CYAN = "#2BAAD8";
const DARK_BLUE = "#274156";

export const wrapper = {
  position: "relative",
  height: "100%",
  width: "100%"
};

export const base = ({ children }) => ({
  position: "absolute",
  display: "inline-block",
  textAlign: "center",
  textTransform: "uppercase",
  background: DARK_GREY,
  fontFamily: 'monaco, Consolas, "Lucida Console", monospace',
  width: children ? "20%" : "100%",
  height: "100%",
  color: WHITE,
  border: "none"
});

export const child = {
  position: "absolute",
  height: "100%",
  width: "80%",
  display: "inline-block",
  left: "20%",
  top: "0",
  border: "none"
};

export const header = {
  margin: "8px 0 0",
  display: "block",
  fontSize: "12px"
};

export const fileSize = {
  margin: "10px 0",
  fontSize: "24px",
  display: "block",
  color: CYAN,
  textTransform: "initial",
  fontFamily: "monospace"
};

const notification = {
  margin: "4px 0 0",
  color: "#FFFFFF",
  padding: "2px",
  fontSize: "10px"
};

export const error = { background: "#9A031E", ...notification };
export const success = { background: "#6BAB90", ...notification };

export const buttonsContainer = {
  padding: "0 10px"
};

const button = {
  margin: "0 8px 4px",
  padding: "10px",
  background: DARK_BLUE,
  color: LIGHT_GREY,
  border: `1px solid ${LIGHT_GREY}`,
  fontFamily: "Arial",
  fontSize: "14px"
};
export const buttonUpload = { ...button };
export const buttonDownload = { ...button };

export const hidden = { display: "none" };
export const clickThrough = { pointerEvents: "none" };
