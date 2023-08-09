"use client";

import type { ChangeEvent, ComponentProps } from "react";

import { useFileInputContext } from "./Root";

interface ControlProps extends ComponentProps<"input"> {}

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInputContext();

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return;
    }

    const files = Array.from(event.target.files);

    onFilesSelected(files, multiple);
  }

  return (
    <input
      id={id}
      type="file"
      onChange={handleFilesSelected}
      multiple={multiple}
      className="sr-only"
      {...props}
    />
  );
}
