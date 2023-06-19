import React from "react";
import { Input } from "@douyinfe/semi-ui";
import { sizeToSemiSize } from "../../utils/stuff";

export default (props) => {
  const { value, setValue, config, readonly, placeholder, maxLength, customProps } = props;

  const { renderSize: _size } = config.settings;

  const renderSize = sizeToSemiSize(_size);

  const onChange = (val) => {
    if (val === "") val = undefined; // don't allow empty value
    setValue(val);
  };

  const textValue = value || "";

  return (
    <Input
      value={textValue}
      size={renderSize}
      placeholder={placeholder}
      disabled={readonly}
      onChange={onChange}
      maxLength={maxLength}
      {...(customProps || {})}
    />
  );
};
