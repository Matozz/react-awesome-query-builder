import React from "react";
import { Slider, InputNumber } from "@douyinfe/semi-ui";
import { sizeToSemiSize } from "../../utils/stuff";

export default (props) => {
  const { value, setValue, config, readonly, min, max, step, placeholder, customProps } = props;

  const { renderSize: _size, defaultSliderWidth } = config.settings;
  const { customInputProps, customSliderProps } = customProps || {};

  const renderSize = sizeToSemiSize(_size);

  const onChange = (val) => {
    if (val === "" || val === null || isNaN(Number(val))) val = undefined;
    else val = Number(val);
    setValue(val / 1);
  };

  const stylesWrapper = {
    display: "inline-flex",
    gap: 8,
  };

  const numberValue = value == undefined ? "" : value;
  return (
    <div style={stylesWrapper}>
      <InputNumber
        key={"number"}
        size={renderSize}
        style={{ width: 100 }}
        value={numberValue}
        placeholder={placeholder}
        disabled={readonly}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        {...(customInputProps || {})}
      />
      <Slider
        key={"range"}
        style={{ width: 160 || defaultSliderWidth }}
        value={numberValue}
        disabled={readonly}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        {...(customSliderProps || {})}
      />
    </div>
  );
};
