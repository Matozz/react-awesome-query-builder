import React from "react";
import { InputNumber } from "@douyinfe/semi-ui";
import { sizeToSemiSize } from "../../utils/stuff";

export default (props) => {
  const { value, setValue, config, readonly, min, max, step, placeholder, customProps } = props;

  const { renderSize: _size } = config.settings;

  const renderSize = sizeToSemiSize(_size);

  const onChange = (val) => {
    if (val === "" || val === null) val = undefined;
    else val = Number(val);
    setValue(val);
  };

  const numberValue = value == undefined ? "" : value;

  return (
    <InputNumber
      size={renderSize}
      value={numberValue}
      placeholder={placeholder}
      disabled={readonly}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      {...(customProps || {})}
    />
  );
};
