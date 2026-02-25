import {
  type ChangeEvent,
  type KeyboardEvent,
  type MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type InlineEditableTitleModelProps = {
  value: string;
  placeholder?: string;
  onSave: (newValue: string) => void;
};

export function useInlineEditableTitleModel({
  value,
  onSave,
  placeholder = "Digite o título...",
}: InlineEditableTitleModelProps) {
  const [editValue, setEditValue] = useState(value);
  const isSpacePressedRef = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const trimmedValue = editValue.trim();

    if (trimmedValue !== value) {
      onSave(trimmedValue);
    }
  };

  const handleCancel = () => {
    setEditValue(value);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
      inputRef.current?.blur();
    }

    if (e.key === "Escape") {
      e.preventDefault();
      handleCancel();
      inputRef.current?.blur();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleMouseDown = (e: MouseEvent<HTMLInputElement>) => {
    if (isSpacePressedRef.current) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.code === "Space" && !event.repeat) {
        isSpacePressedRef.current = true;
      }
    };

    const handleGlobalKeyUp = (event: globalThis.KeyboardEvent) => {
      if (event.code === "Space") {
        isSpacePressedRef.current = false;
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    window.addEventListener("keyup", handleGlobalKeyUp);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
      window.removeEventListener("keyup", handleGlobalKeyUp);
    };
  }, []);

  return {
    inputRef,
    editValue,
    handleSave,
    placeholder,
    handleChange,
    handleKeyDown,
    handleMouseDown,
  };
}
