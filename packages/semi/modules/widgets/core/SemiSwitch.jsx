import React from "react";
import { Switch, Button } from "@douyinfe/semi-ui";
import { IconLock, IconUnlock } from "@douyinfe/semi-icons";
import { sizeToSemiSize } from "../../utils/stuff";

export default ({ value, setValue, label, checkedLabel, hideLabel, id, config, type }) => {
  const { renderSize: _size } = config.settings;
  const onSwitch = (switchValue) => setValue(switchValue);
  const onClick = () => setValue(!value);
  const postfix = type;
  const showLabel = hideLabel ? null : value ? checkedLabel || label : label;

  const renderSize = sizeToSemiSize(_size);

  if (type == "lock") {
    return (
      <Button
        key={id + postfix}
        type={value ? "danger" : undefined}
        icon={value ? <IconLock /> : <IconUnlock />}
        onClick={onClick}
        theme={value ? "borderless" : "light"}
        size={renderSize}
      >
        {showLabel}
      </Button>
    );
  }

  return (
    <Switch
      key={id + postfix}
      checkedText={checkedLabel || label}
      uncheckedText={value ? checkedLabel || label : label}
      onChange={onSwitch}
      checked={!!value}
      size={renderSize}
    />
  );
};
