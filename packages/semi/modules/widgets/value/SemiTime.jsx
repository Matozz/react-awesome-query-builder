import React from "react";
import { TimePicker } from "@douyinfe/semi-ui";
import dayjs from "dayjs";
import { sizeToSemiSize } from "../../utils/stuff";

export default (props) => {
  const { value, setValue, config, valueFormat, use12Hours, readonly, customProps } = props;

  const { renderSize: _size } = config.settings;

  const renderSize = sizeToSemiSize(_size);

  const onChange = (value) => {
    if (value == "" || value == null) value = undefined;
    else value = dayjs(value).format("hh:mm:ss");
    setValue(value);
  };

  return (
    <TimePicker
      type="time"
      size={renderSize}
      use12Hours={use12Hours}
      value={value || ""}
      disabled={readonly}
      onChange={onChange}
      {...(customProps || {})}
    />
  );
};
