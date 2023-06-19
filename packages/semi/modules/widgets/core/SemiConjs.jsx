import React from "react";
import { Button, Space } from "@douyinfe/semi-ui";
import { sizeToSemiSize } from "../../utils/stuff";

export default ({
  id,
  not,
  setNot,
  conjunctionOptions,
  setConjunction,
  disabled,
  readonly,
  config,
  showNot,
  notLabel,
}) => {
  const conjsCount = Object.keys(conjunctionOptions).length;
  const lessThenTwo = disabled;
  const { forceShowConj, renderSize: _size } = config.settings;
  const showConj = forceShowConj || (conjsCount > 1 && !lessThenTwo);

  const renderSize = sizeToSemiSize(_size);

  const renderOptions = () =>
    Object.keys(conjunctionOptions).map((key) => {
      const { id, name, label, checked } = conjunctionOptions[key];
      let postfix = setConjunction.isDummyFn ? "__dummy" : "";
      if ((readonly || disabled) && !checked) return null;
      return (
        <Button
          key={id + postfix}
          id={id + postfix}
          theme={checked ? "solid" : "borderless"}
          size={renderSize}
          type={checked ? "primary" : "tertiary"}
          value={key}
          onClick={onClick.bind(null, key)}
          disabled={readonly || disabled}
        >
          {label}
        </Button>
      );
    });

  const renderNot = () => {
    if (readonly && !not) return null;
    return (
      <Button
        key={id}
        id={id + "__not"}
        theme={not ? "solid" : "borderless"}
        size={renderSize}
        type={not ? "danger" : "tertiary"}
        onClick={onNotClick.bind(null, !not)}
        disabled={readonly}
      >
        {notLabel || "NOT"}
      </Button>
    );
  };

  const onClick = (value) => setConjunction(value);
  const onNotClick = (checked) => setNot(checked);

  return (
    <Space spacing={0} disabled={readonly}>
      {showNot && renderNot()}
      {showConj && renderOptions()}
    </Space>
  );
};
