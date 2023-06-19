import { ElementType } from "react";
import {
  FieldProps,
  ConjsProps,
  SwitchProps,
  ButtonProps,
  ButtonGroupProps,
  ProviderProps,
  ValueSourcesProps,
  ConfirmFunc,
  BooleanWidgetProps,
  TextWidgetProps,
  DateTimeWidgetProps,
  SelectWidgetProps,
  NumberWidgetProps,
  RangeSliderWidgetProps,
} from "@react-awesome-query-builder/ui";

export interface SemiWidgets {
  // Semi core widgets
  SemiFieldSelect: ElementType<FieldProps>;
  SemiFieldAutocomplete: ElementType<FieldProps>;
  SemiConjs: ElementType<ConjsProps>;
  SemiSwitch: ElementType<SwitchProps>;
  SemiButton: ElementType<ButtonProps>;
  SemiButtonGroup: ElementType<ButtonGroupProps>;
  SemiProvider: ElementType<ProviderProps>;
  SemiValueSources: ElementType<ValueSourcesProps>;
  SemiConfirm: ConfirmFunc;
  SemiUseConfirm: () => Function;

  // Semi core widgets
  SemiBooleanWidget: ElementType<BooleanWidgetProps>;
  SemiTextWidget: ElementType<TextWidgetProps>;
  SemiTextAreaWidget: ElementType<TextWidgetProps>;
  SemiDateWidget: ElementType<DateTimeWidgetProps>;
  SemiTimeWidget: ElementType<DateTimeWidgetProps>;
  SemiDateTimeWidget: ElementType<DateTimeWidgetProps>;
  SemiMultiSelectWidget: ElementType<SelectWidgetProps>;
  SemiSelectWidget: ElementType<SelectWidgetProps>;
  SemiNumberWidget: ElementType<NumberWidgetProps>;
  SemiSliderWidget: ElementType<NumberWidgetProps>;
  SemiRangeWidget: ElementType<RangeSliderWidgetProps>;
  SemiAutocompleteWidget: ElementType<SelectWidgetProps>;
}

declare const SemiWidgets: SemiWidgets;
export default SemiWidgets;
