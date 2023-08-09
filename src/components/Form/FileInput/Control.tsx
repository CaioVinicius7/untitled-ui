"use client";

import type { ComponentProps } from "react";

import { useFileInputContext } from "./Root";

interface ControlProps extends ComponentProps<"input"> {}

export function Control({ ...props }: ControlProps) {
  const { id } = useFileInputContext();

  return <input id={id} type="file" className="sr-only" {...props} />;
}
