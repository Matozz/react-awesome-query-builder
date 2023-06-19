import React from "react";
import { ButtonGroup } from "@douyinfe/semi-ui";
import { sizeToSemiSize } from "../../utils/stuff";

export default ({ children, config }) => {
  const { renderSize: _size } = config.settings;
  const renderSize = sizeToSemiSize(_size);

  return (
    <ButtonGroup size={renderSize} style={{ flexWrap: "nowrap" }}>
      {children}
    </ButtonGroup>
  );
};
