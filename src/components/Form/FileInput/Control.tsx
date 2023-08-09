import { ComponentProps } from "react";

interface ControlProps extends ComponentProps<"input"> {}

export function Control({ ...props }: ControlProps) {
  return <input id="photo" type="file" className="sr-only" {...props} />;
}
