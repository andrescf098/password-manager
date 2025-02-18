"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { dataHeaderMain } from "./HeaderMain.data";
import { useState } from "react";
import { FormAddElement } from "../FormAddElement";
import { HeaderMainProps } from "./HeaderMain.types";

export function HeaderMain(props: HeaderMainProps) {
  const { userId } = props;
  const [typeElement, setTypeElement] = useState<"password" | "folder" | "">();
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const closeDialogAndDropdown = () => {
    setIsOpenDialog(false);
    setIsOpenDropdown(false);
  };
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl md:text-2xl font-semibold">
        Todas las cajas fuertes
      </h1>
      <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DropdownMenu open={isOpenDropdown} onOpenChange={setIsOpenDropdown}>
          <DropdownMenuTrigger asChild>
            <Button>
              Nueva <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0">
            <DropdownMenuLabel>
              <DialogTrigger asChild>
                <div className="flex flex-col">
                  {dataHeaderMain.map(({ icon: Icon, typeElement, text }) => (
                    <Button
                      key={typeElement}
                      className="justify-center"
                      variant="ghost"
                      onClick={() => setTypeElement(typeElement)}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {text}
                    </Button>
                  ))}
                </div>
              </DialogTrigger>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent className="sm:max-w-[825px]">
          <DialogHeader>
            <DialogTitle>Nueva Elemento</DialogTitle>
            {typeElement === "password" && <FormAddElement userId={userId} />}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
