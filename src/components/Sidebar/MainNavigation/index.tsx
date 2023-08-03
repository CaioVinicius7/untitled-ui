import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users
} from "lucide-react";

import { NavItem } from "./NavItem";

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem href="#" title="Home" icon={Home} />
      <NavItem href="#" title="Dashboard" icon={BarChart} />
      <NavItem href="#" title="Projects" icon={SquareStack} />
      <NavItem href="#" title="Tasks" icon={CheckSquare} />
      <NavItem href="#" title="Reporting" icon={Flag} />
      <NavItem href="#" title="Users" icon={Users} />
    </nav>
  );
}
