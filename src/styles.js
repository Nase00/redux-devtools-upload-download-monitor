const WHITE = "#FFFFFF";
const LIGHT_GREY = "#B0B0B0";
const DARK_GREY = "#2A2F3A";
const PUKE_GREEN = "#A1C659";

export const base = {
  textAlign: "center",
  textTransform: "uppercase",
  background: DARK_GREY,
  padding: "20px 0",
  fontFamily: 'monaco, Consolas, "Lucida Console", monospace',
  height: "100%",
  color: WHITE
};

export const header = {
  display: "block"
};

export const fileSize = {
  margin: "10px 0",
  fontSize: "22px",
  display: "block",
  color: PUKE_GREEN,
  textTransform: "initial",
  fontFamily: "monospace"
};

const notification = {
  color: "#FFFFFF",
  padding: "10px"
};

export const error = { background: "#FF0000", ...notification };
export const success = { background: "#00FF00", ...notification };

export const buttonsContainer = {
  padding: "0 10px 10px"
};

const button = {
  margin: "0 8px 8px",
  padding: "10px",
  border: `1px solid ${LIGHT_GREY}`,
  borderRadius: "10px",
  fontFamily: "Arial"
};
export const buttonUpload = { ...button };
export const buttonDownload = { ...button };

export const hidden = { display: "none" };
