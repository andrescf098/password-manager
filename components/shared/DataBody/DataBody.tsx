"use client";
import { Input } from "@/components/ui/input";
import { CardData } from "./components/CardData";
import { Element } from "@prisma/client";
import { Search } from "lucide-react";
import { useState } from "react";

export type DataBodyProps = {
  elements: Element[];
};

export function DataBody(props: DataBodyProps) {
  const { elements } = props;
  const [filterElements, setFilterElements] = useState<Element[]>(elements);

  const searchElements = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();

    const filtered = elements.filter((element) =>
      Object.values(element).some((value) => {
        if (value instanceof Date) {
          return value.toString().toLowerCase().includes(searchQuery);
        } else if (typeof value === "string" || typeof value === "number") {
          return value.toString().toLowerCase().includes(searchQuery);
        }
        return false;
      })
    );

    setFilterElements(filtered);
  };
  return (
    <div className="h-auto pt-6">
      <div className="relative w-full flex justify-center items-center gap-4">
        <Search className="absolute w-4 h-4 left-[calc(50%-9.35rem)]" />
        <Input
          placeholder="Buscar"
          className="w-80 pl-8"
          onChange={(event) => searchElements(event)}
        />
      </div>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-4 p-6">
        {filterElements.length < 1
          ? elements.map((element) => (
              <CardData key={element.id} element={element} />
            ))
          : filterElements.map((element) => (
              <CardData key={element.id} element={element} />
            ))}
      </div>
    </div>
  );
}
