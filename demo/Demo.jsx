import React from "react";

const Demo = ({ actions, value }) => {
  document.title = "Upload/Download Demo";

  const handleChange = ({ target }) => actions.emitInputUpdate(target.value);

  return (
    <div style={{ width: "75%", textAlign: "center", fontFamily: "Arial" }}>
      <h2>Redux DevTools Upload/Download Monitor Demo</h2>
      <h4>ctrl+q to change DevTools visibility</h4>
      <h4>ctrl+w to change DevTools monitor</h4>
      <h4>ctrl+e to change DevTools position</h4>
      <textarea
        style={{ margin: "auto", height: "400px", width: "400px" }}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Demo;
