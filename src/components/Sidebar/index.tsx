"use client";

import { Cog, LifeBuoy, Menu, Search, X } from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";

import { Input } from "../Form/Input";

import { Logo } from "./Logo";
import { MainNavigation } from "./MainNavigation";
import { NavItem } from "./MainNavigation/NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { Button } from "../Button";

export function Sidebar() {
  return (
    <Collapsible.Root className="group fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen">
      <div className="flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-2">
          <ToggleThemeButton />

          <Collapsible.Trigger className="lg:hidden" asChild>
            <Button variant="ghost">
              <Menu className="h-6 w-6 group-data-[state=open]:hidden" />

              <X className="h-6 w-6 group-data-[state=closed]:hidden" />
            </Button>
          </Collapsible.Trigger>
        </div>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
