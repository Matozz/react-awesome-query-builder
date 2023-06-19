import React from "react";
import { RadioGroup, Radio } from "@douyinfe/semi-ui";
import { sizeToSemiSize } from "../../utils/stuff";

export default (props) => {
  const { value, setValue, config, labelYes, labelNo, readonly, customProps } = props;
  const { renderSize: _size } = config.settings;

  const renderSize = sizeToSemiSize(_size);

  const { customYesProps, customNoProps } = customProps || {};

  const onRadioChange = (e) => setValue(e.target.value);

  return (
    <RadioGroup
      type="button"
      value={Boolean(value)}
      disabled={readonly}
      buttonSize={renderSize}
      onChange={onRadioChange}
      {...(customProps || {})}
      style={{
        display: "flex",
        maxHeight: 32,
        alignItems: "center",
        ...(customProps?.style ?? {}),
      }}
    >
      <Radio value={true} {...(customYesProps || {})}>
        {labelYes || "正确"}
      </Radio>
      <Radio value={false} {...(customNoProps || {})}>
        {labelNo || "错误"}
      </Radio>
    </RadioGroup>
  );
};
