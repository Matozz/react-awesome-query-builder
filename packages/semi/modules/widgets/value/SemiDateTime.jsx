import React from "react";
import { DatePicker } from "@douyinfe/semi-ui";
import dayjs from "dayjs";
import { sizeToSemiSize } from "../../utils/stuff";

export default (props) => {
  const { value, setValue, config, valueFormat, use12Hours, readonly, customProps } = props;
  const { renderSize: _size } = config.settings;

  const renderSize = sizeToSemiSize(_size);

  const onChange = (date, dateString) => {
    let value = date;
    if (value == "") value = undefined;
    else value = dayjs(new Date(value)).format(valueFormat);
    setValue(value);
  };

  let dtValue = value;
  if (!value) dtValue = "";
  else dtValue = dayjs(value).format("YYYY-MM-DDTHH:mm");

  return (
    <DatePicker
      size={renderSize}
      type="dateTime"
      value={dtValue}
      disabled={readonly}
      onChange={onChange}
      {...(customProps || {})}
    />
  );
};
