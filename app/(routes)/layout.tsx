import { Logo } from "@/components/shared/Logo/Logo";
import { Sidebar } from "@/components/shared/Sidebar/Sidebar";
import { SidebarMobile } from "@/components/shared/SidebarMobile";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-full">
      <div className="flex justify-between lg:hidden px-6 py-3 items-center border-b border-gray-300">
        <div className="py-1 text-white">
          <Logo />
        </div>
        <SidebarMobile />
      </div>
      <div className="flex h-full ">
        <div className="max-w-lg hidden fixed lg:flex h-full w-72 flex-col px-4 text-black border-r border-gray-300">
          <Sidebar />
        </div>
        <div className="w-full lg:pl-72">
          <div className="py-6">{children}</div>
        </div>
      </div>
    </main>
  );
}
