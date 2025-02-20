"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy, Eye } from "lucide-react";
import { useState } from "react";
import { CardDataProps } from "./CardData.type";

export function CardData(props: CardDataProps) {
  const { name, username, password, urlWebsite } = props.element;
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Card className="w-80 border-gray-300 shadow-slate-50">
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
                  placeholder="Name of your project"
                />
                <Copy
                  className="absolute top-3 right-4 cursor-pointer"
                  size={18}
                  onClick={() => console.log("copy")}
                />
              </div>
              <div className="relative">
                <Input
                  value={password ?? ""}
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
                  onClick={() => console.log("copy")}
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
