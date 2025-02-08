import { Logo } from "@/components/shared/Logo/Logo";
import { Sidebar } from "@/components/shared/Sidebar/Sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-full">
      <div className="flex justify-between lg:hidden px-6 py-3 items-center bg-blue-800">
        <div className="py-1 text-white">
          <Logo />
        </div>
        <div>SidebarMobile</div>
      </div>
      <div className="flex h-full">
        <div className="max-w-lg hidden fixed lg:flex h-full w-72 flex-col bg-blue-800 px-4 text-white">
          <Sidebar />
        </div>
        <div className="w-full lg:pl-72">
          <div className="p-6">{children}</div>
        </div>
      </div>
    </main>
  );
}
