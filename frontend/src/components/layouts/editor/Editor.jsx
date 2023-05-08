import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import "./editor.css";

const Editor = (props) => {
  return (
    <SunEditor
      height={500}
      placeholder="Write your post content here"
      autoFocus={true}
      setDefaultStyle="font-family: jetBrains Mono; font-size: 16px;"
      setOptions={{
        buttonList: [
          [
            "bold",
            "italic",
            "link",
            "list",
            "blockquote",
            "paragraphStyle",
            "image",
          ],
        ],
        resizingBar: false,
      }}
      onChange={props.handleOnChangeText}
      defaultValue={props.defaultValue}
    />
  );
};

export default Editor;