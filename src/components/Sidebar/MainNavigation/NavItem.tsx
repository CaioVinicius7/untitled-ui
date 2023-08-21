import { ElementType } from "react";
import { ChevronDown } from "lucide-react";

interface NavItemProps {
  href: string;
  title: string;
  icon: ElementType;
  withExpandIndicator?: boolean;
}

export function NavItem({
  href,
  title,
  icon: Icon,
  withExpandIndicator = true
}: NavItemProps) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 rounded border border-transparent px-3 py-2 outline-none hover:bg-violet-50 focus-visible:border-violet-300 focus-visible:bg-violet-50"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 group-focus-visible:text-violet-500">
        {title}
      </span>

      {withExpandIndicator && (
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
      )}
    </a>
  );
}
