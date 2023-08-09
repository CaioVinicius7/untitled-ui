"use client";

import type { ChangeEvent, ComponentProps } from "react";

import { useFileInputContext } from "./Root";

interface ControlProps extends ComponentProps<"input"> {}

export function Control({ ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInputContext();

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return;
    }

    const files = Array.from(event.target.files);

    onFilesSelected(files);
  }

  return (
    <input
      id={id}
      type="file"
      onChange={handleFilesSelected}
      className="sr-only"
      {...props}
    />
  );
}
