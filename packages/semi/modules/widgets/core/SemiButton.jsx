import React from "react";
import { Button } from "@douyinfe/semi-ui";
import { IconDelete, IconPlus } from "@douyinfe/semi-icons";
import { sizeToSemiSize } from "../../utils/stuff";

export default ({ type, label, onClick, config }) => {
  const typeToOnlyIcon = {
    delGroup: <IconDelete />,
    delRuleGroup: <IconDelete />,
    delRule: <IconDelete />,
    addRuleGroup: <IconPlus />,
    addRuleGroupExt: <IconPlus />,
  };
  const typeToIcon = {
    addRule: <IconPlus />,
    addGroup: <IconPlus />,
  };
  const typeToColor = {
    addRule: "primary",
    addGroup: "primary",
    delGroup: "danger",
    delRuleGroup: "danger",
    delRule: "danger",
  };

  let isOnlyIcon = typeToOnlyIcon[type];

  const { renderSize: _size } = config.settings;

  const renderSize = sizeToSemiSize(_size);

  return isOnlyIcon ? (
    <Button type={typeToColor[type]} onClick={onClick} icon={typeToOnlyIcon[type]} size={renderSize} />
  ) : (
    <Button type={typeToColor[type]} onClick={onClick} icon={typeToIcon[type]} size={renderSize}>
      {label}
    </Button>
  );
};
