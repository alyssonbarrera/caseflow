import { memo } from "react";
import { useInlineEditableTitleModel } from "./inline-editable-title-model";
import { InlineEditableTitleView } from "./inline-editable-title-view";

type ViewProps = Parameters<typeof InlineEditableTitleView>[0];
type ModelProps = Parameters<typeof useInlineEditableTitleModel>[0];

type InlineEditableTitleViewProps = Omit<
  ViewProps,
  keyof ReturnType<typeof useInlineEditableTitleModel>
> &
  ModelProps;

function InlineEditableTitleComponent({
  value,
  onSave,
  placeholder,
  ...props
}: InlineEditableTitleViewProps) {
  return (
    <InlineEditableTitleView
      {...props}
      {...useInlineEditableTitleModel({
        onSave,
        value,
        placeholder,
      })}
    />
  );
}

export const InlineEditableTitle = memo(InlineEditableTitleComponent);
