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
    placeholder,
    readonly,
    config,
    customProps,
    customValuesIsNumber,
  } = props;
  const { renderSize: _size, defaultSelectWidth } = config.settings;
  const { errorTooltipProps } = customProps || {};

  const renderSize = sizeToSemiSize(_size);

  const renderOptions = (selectedValues) =>
    mapListValues(listValues, ({ title, value }) => {
      return (
        <Select.Option key={value} value={value}>
          {title}
        </Select.Option>
      );
    });

  const hasValue = value != null && value.length > 0;

  const onChange = (v) => {
    // empty array is not allowed
    if (v && !v.length) {
      v = undefined;
      setValue(v);
      return;
    }

    if (customValuesIsNumber) {
      if (isNumeric(v[v.length - 1])) {
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

  const customValuesProps = {
    filter: true,
    defaultActiveFirstOption: true,
  };

  const style = {
    width: undefined,
    minWidth: defaultSelectWidth,
  };

  return (
    <Select
      multiple
      allowCreate={allowCustomValues}
      {...(allowCustomValues ? customValuesProps : {})}
      placeholder={placeholder}
      onChange={onChange}
      size={renderSize}
      value={hasValue ? value : []}
      disabled={readonly}
      {...(customProps || {})}
      style={{ ...style, ...(customProps?.style ?? {}) }}
    >
      {renderOptions(hasValue ? value : [])}
    </Select>
  );
};
