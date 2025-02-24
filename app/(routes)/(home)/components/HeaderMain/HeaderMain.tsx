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
import { ChevronDown, Plus } from "lucide-react";
import { dataHeaderMain } from "./HeaderMain.data";
import { useState } from "react";
import { FormAddElement } from "../FormAddElement";
import { HeaderMainProps } from "./HeaderMain.types";

export function HeaderMain(props: HeaderMainProps) {
  const { userId } = props;
  const [typeElement, setTypeElement] = useState<
    "sesion" | "creditCard" | "idCard" | "folder" | ""
  >();
  const [text, setText] = useState("");
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  // const closeDialogAndDropdown = () => {
  //   setIsOpenDialog(false);
  //   setIsOpenDropdown(false);
  // };
  const openDialog = (
    text: string,
    typeElement: "sesion" | "creditCard" | "idCard" | "folder" | ""
  ) => {
    setTypeElement(typeElement);
    setText(text);
  };
  return (
    <div className="flex justify-between items-center border-b border-gray-300 px-6 pb-6">
      <h1 className="text-xl md:text-2xl font-semibold">
        Todas las cajas fuertes
      </h1>
      <div className="flex items-center gap-x-2">
        <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
          <DropdownMenu open={isOpenDropdown} onOpenChange={setIsOpenDropdown}>
            <DropdownMenuTrigger asChild>
              <Button className="duration-300 transition-al bg-green-500 hover:bg-green-600">
                <Plus /> Agregar <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-0">
              <DropdownMenuLabel>
                <DialogTrigger asChild>
                  <div className="flex flex-col">
                    {dataHeaderMain.map(({ icon: Icon, typeElement, text }) => (
                      <Button
                        key={typeElement}
                        className="justify-start"
                        variant="ghost"
                        onClick={() => openDialog(text, typeElement)}
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
              <DialogTitle>Agregar {text}</DialogTitle>
              {typeElement !== undefined && typeElement !== "" && (
                <FormAddElement typeElement={text} userId={userId} />
              )}
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {/* <Dialog>
          <Button className="bg-white text-black border hover:bg-gray-400 hover:text-white border-slate-300 px-3">
            <FolderPlus />
          </Button>
        </Dialog> */}
      </div>
    </div>
  );
}
