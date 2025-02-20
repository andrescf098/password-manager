"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarRoutes } from "@/components/shared/SidebarRoutes/SidebarRoutes";
import { Button } from "@/components/ui/button";

export function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-white text-black">
        <SheetHeader className="text-left mb-5">
          <SheetTitle className="text-black">PassManager</SheetTitle>
          <SheetDescription className="text-slate-600">
            Create and manage your passwords
          </SheetDescription>
        </SheetHeader>
        <SidebarRoutes />
      </SheetContent>
    </Sheet>
  );
}
