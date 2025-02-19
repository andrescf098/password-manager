import { CardData } from "./components/CardData";
import { DataBodyProps } from "./DataBody.type";

export function DataBody(props: DataBodyProps) {
  const { elements } = props;
  console.log(elements);
  return (
    <div className="grid grid-cols-3 gap-4 pt-4">
      {elements.map((element) => (
        <CardData key={element.id} element={element} />
      ))}
    </div>
  );
}
