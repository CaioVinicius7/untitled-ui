"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useFileInputContext } from "./Root";
import { FileItem } from "./FileItem";

export function FileList() {
  const { files } = useFileInputContext();
  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return <FileItem key={file.name} name={file.name} size={file.size} />;
      })}
    </div>
  );
}
