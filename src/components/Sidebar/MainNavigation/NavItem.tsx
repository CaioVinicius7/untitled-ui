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
      className="group/nav flex items-center gap-3 rounded border border-transparent px-3 py-2 outline-none hover:bg-violet-50 focus-visible:border-violet-300 focus-visible:bg-violet-50 dark:hover:bg-zinc-800 dark:focus-visible:border-violet-500 dark:focus-visible:bg-zinc-800"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover/nav:text-violet-500 group-focus-visible/nav:text-violet-500 dark:text-zinc-100 dark:group-hover/nav:text-violet-300">
        {title}
      </span>

      {withExpandIndicator && (
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover/nav:text-violet-300 dark:text-zinc-600" />
      )}
    </a>
  );
}
