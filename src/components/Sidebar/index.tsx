import { Cog, LifeBuoy, Search } from "lucide-react";

import { Logo } from "./Logo";
import { MainNavigation } from "./MainNavigation";
import { NavItem } from "./MainNavigation/NavItem";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-3 shadow-sm focus-within:border-zinc-900">
        <Search className="h-5 w-5 text-zinc-500" />

        <input
          type="text"
          placeholder="Search"
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
        />
      </div>

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
      </div>
    </aside>
  );
}
