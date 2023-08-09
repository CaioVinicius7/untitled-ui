import type { ComponentProps } from "react";

interface InputPrefixProps extends ComponentProps<"div"> {}

function InputPrefix({ ...props }: InputPrefixProps) {
  return <div {...props} />;
}

interface InputControlProps extends ComponentProps<"input"> {}

function InputControl({ ...props }: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  );
}

interface InputRootProps extends ComponentProps<"div"> {}

function InputRoot({ ...props }: InputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-3 shadow-sm focus-within:border-zinc-900"
      {...props}
    />
  );
}

export const Input = {
  Root: InputRoot,
  Prefix: InputPrefix,
  Control: InputControl
};
