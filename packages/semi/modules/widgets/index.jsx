import React from "react";

// value widgets
import SemiTextWidget from "./value/SemiText";
import SemiTextAreaWidget from "./value/SemiTextArea";
import SemiDateWidget from "./value/SemiDate";
import SemiDateTimeWidget from "./value/SemiDateTime";
import SemiTimeWidget from "./value/SemiTime";
import SemiSelectWidget from "./value/SemiSelect";
import SemiNumberWidget from "./value/SemiNumber";
import SemiSliderWidget from "./value/SemiSlider";
import SemiBooleanWidget from "./value/SemiBoolean";
import SemiMultiSelectWidget from "./value/SemiMultiSelect";

// field select widgets
import SemiFieldSelect from "./core/SemiFieldSelect";

// core components
import SemiButton from "./core/SemiButton";
import SemiButtonGroup from "./core/SemiButtonGroup";
import SemiSwitch from "./core/SemiSwitch";
import SemiConjs from "./core/SemiConjs";
import SemiValueSources from "./core/SemiValueSources";
import SemiConfirm from "./core/SemiConfirm";
import { ConfigProvider } from "@douyinfe/semi-ui";

// provider
const SemiProvider = ({ config, children }) => (
  <ConfigProvider
    locale={config.settings?.locale?.semi}
    timeZone={config.settings?.timezone?.semi}
    direction={config.settings?.direction?.semi}
  >
    {children}
  </ConfigProvider>
);

export default {
  SemiTextWidget,
  SemiTextAreaWidget,
  SemiDateWidget,
  SemiDateTimeWidget,
  SemiTimeWidget,
  SemiSelectWidget,
  SemiNumberWidget,
  SemiSliderWidget,
  SemiBooleanWidget,
  SemiMultiSelectWidget,

  SemiFieldSelect,

  SemiButton,
  SemiButtonGroup,
  SemiSwitch,
  SemiConjs,
  SemiValueSources,
  SemiConfirm,

  SemiProvider,
};
