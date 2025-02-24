"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy, EllipsisVertical, Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { CardDataProps } from "./CardData.type";
import { toast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function CardData(props: CardDataProps) {
  const { name, username, password, urlWebsite } = props.element;
  const [showPassword, setShowPassword] = useState(false);

  const copyItemClipboard = (item: string, name: string) => {
    navigator.clipboard.writeText(item);
    toast({ title: `${name} copied to clipboard` });
  };
  const editElement = () => {
    window.location.href = `/element/${props.element.id}`;
  };
  return (
    <Card className="relative w-80 border-gray-300 shadow-slate-50">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="space-y-2">{urlWebsite}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1">
              <div className="relative">
                <Input
                  value={username ?? ""}
                  readOnly
                  placeholder="Name of your project"
                />
                <Copy
                  className="absolute top-3 right-4 cursor-pointer"
                  size={18}
                  onClick={() => copyItemClipboard(username ?? "", "Username")}
                />
              </div>
              <div className="relative">
                <Input
                  value={password ?? ""}
                  readOnly
                  type={showPassword ? "text" : "password"}
                />
                <Eye
                  className="absolute top-3 right-10 cursor-pointer"
                  size={18}
                  onClick={() => setShowPassword(!showPassword)}
                />
                <Copy
                  className="absolute top-3 right-4 cursor-pointer"
                  size={18}
                  onClick={() => copyItemClipboard(password ?? "", "Password")}
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="absolute top-4 right-4 cursor-pointer h-8 w-8 p-0"
        >
          <Button variant="ghost">
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-30 flex flex-col space-y-1">
          <DropdownMenuLabel className="text-center">
            Acciones
          </DropdownMenuLabel>
          <Button
            onClick={editElement}
            className="w-full flex justify-around hover:bg-gray-400 hover:text-white cursor-pointer"
          >
            <Pencil />
            Editar
          </Button>
          <Button className="w-full flex justify-around hover:bg-gray-400 hover:text-white cursor-pointer">
            <Trash2 />
            Eliminar
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  );
}
