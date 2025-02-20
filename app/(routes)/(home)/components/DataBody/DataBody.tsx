import { CardData } from "./components/CardData";
import { Element } from "@prisma/client";

export type DataBodyProps = {
  elements: Element[];
};

export function DataBody(props: DataBodyProps) {
  const { elements } = props;
  return (
    <div className="h-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 place-items-center gap-4 p-6">
        {elements.map((element) => (
          <CardData key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
}
