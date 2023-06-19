import React from "react";
import { TextArea } from "@douyinfe/semi-ui";

export default (props) => {
  const {
    value,
    setValue,
    config,
    readonly,
    placeholder,
    maxLength,
    maxRows,
    fullWidth,
    customProps,
  } = props;

  const onChange = (val) => {
    if (val === "") val = undefined; // don't allow empty value
    setValue(val);
  };
  const textValue = value || "";

  return (
    <TextArea
      rows={1}
      showClear
      autosize
      value={textValue}
      placeholder={placeholder}
      disabled={readonly}
      onChange={onChange}
      maxLength={maxLength}
      {...(customProps || {})}
      style={{
        width: fullWidth ? "100%" : undefined,
        ...(customProps?.style ?? {}),
      }}
    />
  );
};
