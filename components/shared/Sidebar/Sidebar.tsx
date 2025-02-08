import { Logo } from "../Logo/Logo";
import { SidebarRoutes } from "../SidebarRoutes/SidebarRoutes";

export function Sidebar() {
  return (
    <>
      <div className="p-6">
        <Logo />
      </div>
      <SidebarRoutes />
    </>
  );
}
