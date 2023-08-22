import Image from "next/image";
import { LogOut } from "lucide-react";

import { Button } from "../Button";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/caiovinicius7.png"
        alt=""
        className="h-10 w-10 rounded-full"
        width={40}
        height={40}
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Caio Vinícius
        </span>

        <span className="truncate text-sm text-zinc-500">
          caio1525pereira@gmail.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  );
}
