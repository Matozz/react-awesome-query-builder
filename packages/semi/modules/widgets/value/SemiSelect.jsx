import React from "react";
import { Select, Toast } from "@douyinfe/semi-ui";
import { Utils } from "@react-awesome-query-builder/ui";
const { mapListValues } = Utils.ListUtils;
import { isNumeric, sizeToSemiSize } from "../../utils/stuff";

export default (props) => {
  const {
    listValues,
    value,
    setValue,
    allowCustomValues,
    readonly,
    placeholder,
    config,
    customProps,
    customValuesIsNumber,
  } = props;
  const { renderSize: _size, defaultSelectWidth } = config.settings;
  const { errorTooltipProps } = customProps || {};

  const renderSize = sizeToSemiSize(_size);

  const renderOptions = () =>
    mapListValues(listValues, ({ title, value }) => {
      return (
        <Select.Option key={value} value={value}>
          {title}
        </Select.Option>
      );
    });

  const onChange = (v) => {
    if (customValuesIsNumber && v) {
      if (isNumeric(v)) {
        setValue(v);
      } else {
        Toast.info({
          content: "Numeric type only",
          duration: 1,
          ...(errorTooltipProps || {}),
        });
      }
    } else {
      setValue(v);
    }
  };

  const hasValue = value != null;

  const customValuesProps = {
    filter: true,
    defaultActiveFirstOption: true,
  };

  const style = {
    width: defaultSelectWidth,
    minWidth: defaultSelectWidth,
  };

  return (
    <Select
      allowCreate={allowCustomValues}
      {...(allowCustomValues ? customValuesProps : {})}
      placeholder={placeholder}
      onChange={onChange}
      // specific size is not compatible with default, overide to undefined if you need
      size={renderSize}
      value={hasValue ? value : ""}
      disabled={readonly}
      {...(customProps || {})}
      style={{ ...style, ...(customProps?.style ?? {}) }}
    >
      {renderOptions()}
    </Select>
  );
};
