import React from "react";
import { Select } from "@douyinfe/semi-ui";
import { SELECT_WIDTH_OFFSET_RIGHT, calcTextWidth } from "../../utils/domUtils";
import { sizeToSemiSize } from "../../utils/stuff";

export default (props) => {
  const { items, setField, selectedKey, selectedLabel, readonly, placeholder, config, customProps } = props;

  const { renderSize: _size } = config.settings;

  const renderSize = sizeToSemiSize(_size);

  const selectText = selectedLabel || placeholder;
  const selectWidth = calcTextWidth(selectText);
  const isFieldSelected = !!selectedKey;
  const width = isFieldSelected ? null : selectWidth + SELECT_WIDTH_OFFSET_RIGHT;

  const onChange = (v) => {
    if (v === undefined) return;
    setField(v);
  };

  const renderOptions = (fields, isGroupItem = false) =>
    Object.keys(fields).map((fieldKey) => {
      const field = fields[fieldKey];
      const { items, path, label, disabled } = field;
      if (items) {
        return (
          <Select.OptGroup label={label} key={`${path}-header`}>
            {renderOptions(items, true)}
          </Select.OptGroup>
        );
      } else {
        return (
          <Select.Option
            className={isGroupItem ? "semi-select-group-option" : ""}
            disabled={disabled}
            key={path}
            value={path}
          >
            {label}
          </Select.Option>
        );
      }
    });

  const hasValue = selectedKey != null;

  return (
    <Select
      disabled={readonly}
      size={renderSize}
      placeholder={placeholder}
      onChange={onChange}
      value={hasValue ? selectedKey : ""}
      filter
      {...(customProps || {})}
      style={{ width, ...(customProps?.style ?? {}) }}
    >
      {renderOptions(items)}
    </Select>
  );
};
