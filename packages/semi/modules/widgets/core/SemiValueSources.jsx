import React, { useState } from "react";
import { Dropdown, Button } from "@douyinfe/semi-ui";
import { IconChevronUpDown } from "@douyinfe/semi-icons";
import { sizeToSemiSize } from "../../utils/stuff";

export default (props) => {
  const { config, valueSources, valueSrc, title, setValueSrc, readonly, customProps } = props;

  const { customDropDownProps, customTriggerBtnProps } = customProps || {};

  const { renderSize: _size } = config.settings;

  const renderSize = sizeToSemiSize(_size);

  const onChange = (v) => {
    if (v === undefined) return;
    setValueSrc(v);
  };

  const renderOptions = (valueSources) =>
    valueSources.map(([srcKey, info]) => (
      <Dropdown.Item key={srcKey} onClick={() => onChange(srcKey)} active={valueSrc == srcKey}>
        {info.label || srcKey}
      </Dropdown.Item>
    ));

  return (
    <Dropdown
      showTick
      trigger="click"
      position="bottomLeft"
      clickToHide={true}
      disabled={readonly}
      render={<Dropdown.Menu>{renderOptions(valueSources)}</Dropdown.Menu>}
      {...(customDropDownProps || {})}
    >
      <Button size={renderSize} style={{ width: 24 }} icon={<IconChevronUpDown />} {...(customTriggerBtnProps || {})} />
    </Dropdown>
  );
};
