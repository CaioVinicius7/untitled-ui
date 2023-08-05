import { Cog, LifeBuoy, Search } from "lucide-react";

import { Input } from "../Input";

import { Logo } from "./Logo";
import { MainNavigation } from "./MainNavigation";
import { NavItem } from "./MainNavigation/NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>

        <Input.Control type="text" placeholder="Search" />
      </Input.Root>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem
            href="#"
            title="Support"
            icon={LifeBuoy}
            withExpandIndicator={false}
          />
          <NavItem
            href="#"
            title="Settings"
            icon={Cog}
            withExpandIndicator={false}
          />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  );
}
