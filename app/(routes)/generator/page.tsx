import { FormGenerator } from "./FormGenerator";
import { HeaderGenerator } from "./HeaderGenerator";

export default function GeneratorPage() {
  return (
    <div className="p-4">
      <HeaderGenerator />
      <FormGenerator />
    </div>
  );
}
