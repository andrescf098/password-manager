"use client";
import { SingleItem } from "@/components/SingleItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DoorClosed, House, RectangleEllipsis } from "lucide-react";
import Link from "next/link";
import {
  dataSidebarElements,
  dataSidebarConfiguration,
} from "./SidebarRoutes.data";

export function SidebarRoutes() {
  return (
    <div>
      <SingleItem href="/" icon={House} label="Inicio" />
      {dataSidebarElements.map(({ title, icon: Icon, children }) => (
        <Accordion
          type="single"
          collapsible
          key={title}
          className="w-full px-2"
        >
          <AccordionItem value="item-1" className="border-b-0 ">
            <AccordionTrigger>
              <div className="flex gap-2 items-center ">
                <div className="p-2 rounded-md">
                  <Icon size={20} />
                </div>
                {title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {children.map(({ item, href, icon: Icon }) => (
                <div key={item}>
                  <Link
                    href={href}
                    className="px-6 py-2 flex gap-2 items-center hover:bg-gray-400 hover:text-white transition-all rounded-md"
                  >
                    <Icon size={20} />
                    {item}
                  </Link>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <SingleItem
        href="/generator"
        label="Generador"
        icon={RectangleEllipsis}
      />
      {dataSidebarConfiguration.map(({ title, icon: Icon, children }) => (
        <Accordion
          type="single"
          collapsible
          key={title}
          className="w-full px-2"
        >
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger>
              <div className="flex gap-2 items-center">
                <div className="p-2 rounded-md ">
                  <Icon size={20} />
                </div>
                {title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {children.map(({ item, href, icon: Icon }) => (
                <div
                  key={item}
                  className="flex items-center justify-between mt-2 hover:bg-gray-400 hover:text-white duration-300 transition-all rounded-md pr-1"
                >
                  <Link
                    href={href}
                    className="px-6 py-2 flex gap-2 items-center rounded-md"
                  >
                    <Icon size={20} />
                    {item}
                  </Link>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <SingleItem
        href="#"
        label="Cerrar sesión"
        icon={DoorClosed}
        onClick={() => console.log("Close session")}
      />
    </div>
  );
}
