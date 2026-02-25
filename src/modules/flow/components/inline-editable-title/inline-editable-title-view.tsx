import type { ComponentProps } from "react";
import { cn } from "@/core/lib/utils";
import type { useInlineEditableTitleModel } from "./inline-editable-title-model";

type InlineEditableTitleViewProps = ReturnType<
  typeof useInlineEditableTitleModel
> &
  ComponentProps<"input">;

export function InlineEditableTitleView({
  inputRef,
  editValue,
  handleSave,
  placeholder,
  handleChange,
  handleKeyDown,
  handleMouseDown,
  ...props
}: InlineEditableTitleViewProps) {
  return (
    <input
      {...props}
      className={cn(
        "nodrag nopan w-full bg-transparent font-headline font-medium text-base outline-none transition-all duration-200",
        "border-transparent px-1 py-0.5",
        props.className
      )}
      onBlur={handleSave}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      placeholder={placeholder}
      ref={inputRef}
      value={editValue}
    />
  );
}
