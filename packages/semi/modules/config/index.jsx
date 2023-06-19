import SemiWidgets from "../widgets";
import { BasicConfig } from "@react-awesome-query-builder/ui";
import React from "react";

const settings = {
  ...BasicConfig.settings,

  renderField: (props, { RCE, W: { SemiFieldSelect } }) => RCE(SemiFieldSelect, props),
  renderOperator: (props, { RCE, W: { SemiFieldSelect } }) => RCE(SemiFieldSelect, props),
  renderFunc: (props, { RCE, W: { SemiFieldSelect } }) => RCE(SemiFieldSelect, props),
  renderConjs: (props, { RCE, W: { SemiConjs } }) => RCE(SemiConjs, props),
  renderButton: (props, { RCE, W: { SemiButton } }) => RCE(SemiButton, props),
  renderButtonGroup: (props, { RCE, W: { SemiButtonGroup } }) => RCE(SemiButtonGroup, props),
  renderSwitch: (props, { RCE, W: { SemiSwitch } }) => RCE(SemiSwitch, props),
  renderValueSources: (props, { RCE, W: { SemiValueSources } }) => RCE(SemiValueSources, props),
  renderProvider: (props, { RCE, W: { SemiProvider } }) => RCE(SemiProvider, props),
  renderConfirm: (props, { W: { SemiConfirm } }) => SemiConfirm(props),
};

const widgets = {
  ...BasicConfig.widgets,
  text: {
    ...BasicConfig.widgets.text,
    factory: (props, { RCE, W: { SemiTextWidget } }) => RCE(SemiTextWidget, props),
  },
  textarea: {
    ...BasicConfig.widgets.textarea,
    factory: (props, { RCE, W: { SemiTextAreaWidget } }) => RCE(SemiTextAreaWidget, props),
  },
  number: {
    ...BasicConfig.widgets.number,
    factory: (props, { RCE, W: { SemiNumberWidget } }) => RCE(SemiNumberWidget, props),
  },
  multiselect: {
    ...BasicConfig.widgets.multiselect,
    factory: (props, { RCE, W: { SemiMultiSelectWidget } }) => RCE(SemiMultiSelectWidget, props),
  },
  select: {
    ...BasicConfig.widgets.select,
    factory: (props, { RCE, W: { SemiSelectWidget } }) => RCE(SemiSelectWidget, props),
  },
  slider: {
    ...BasicConfig.widgets.slider,
    factory: (props, { RCE, W: { SemiSliderWidget } }) => RCE(SemiSliderWidget, props),
  },
  boolean: {
    ...BasicConfig.widgets.boolean,
    factory: (props, { RCE, W: { SemiBooleanWidget } }) => RCE(SemiBooleanWidget, props),
  },
  date: {
    ...BasicConfig.widgets.date,
    factory: (props, { RCE, W: { SemiDateWidget } }) => RCE(SemiDateWidget, props),
  },
  time: {
    ...BasicConfig.widgets.time,
    factory: (props, { RCE, W: { SemiTimeWidget } }) => RCE(SemiTimeWidget, props),
  },
  datetime: {
    ...BasicConfig.widgets.datetime,
    factory: (props, { RCE, W: { SemiDateTimeWidget } }) => RCE(SemiDateTimeWidget, props),
  },
};

const types = {
  ...BasicConfig.types,
};

const ctx = {
  ...BasicConfig.ctx,
  W: {
    ...BasicConfig.ctx.W,
    ...SemiWidgets,
  },
};

let config = {
  ...BasicConfig,
  ctx,
  types,
  widgets,
  settings,
};

export default config;
