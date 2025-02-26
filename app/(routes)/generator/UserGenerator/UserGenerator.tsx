import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UserGeneratorProps } from "./UserGenerator.type";
import { Label } from "@/components/ui/label";

export function UserGenerator(props: UserGeneratorProps) {
  const { setUserTypeSelected } = props;
  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <p className="mb-4 text-slate-500">¿Qué quieres generar?</p>
      <RadioGroup
        defaultValue="username"
        onValueChange={(e) => setUserTypeSelected(e)}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="username" id="r2" />
          <Label htmlFor="r2">Username</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
