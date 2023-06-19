import React from "react";
import { DatePicker } from "@douyinfe/semi-ui";
import { sizeToSemiSize } from "../../utils/stuff";

export default (props) => {
  const { value, setValue, config, valueFormat, readonly, customProps } = props;
  const { renderSize: _size } = config.settings;

  const renderSize = sizeToSemiSize(_size);

  const onChange = (date, dateString) => {
    let value = dateString;
    if (value == "" || value == null) value = undefined;
    setValue(value);
  };

  return (
    <DatePicker
      size={renderSize}
      type="date"
      value={value || ""}
      disabled={readonly}
      onChange={onChange}
      {...(customProps || {})}
    />
  );
};
