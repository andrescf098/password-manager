import { Checkbox } from "@/components/ui/checkbox";
import { PasswordGeneratorProps } from "./PasswordGenerator.type";

export function PasswordGenerator(props: PasswordGeneratorProps) {
  const {
    lengthPassword,
    setLengthPassword,
    isMayusSelected,
    setIsMayusSelected,
    isMinusSelected,
    setIsMinusSelected,
    isSpecialCharSelected,
    setIsSpecialCharSelected,
    isNumberSelected,
    setIsNumberSelected,
  } = props;
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLengthPassword(Number(e.target.value));
  };
  return (
    <div>
      <div className="border border-gray-300 rounded-md">
        <div className="w-full p-4 flex gap-2 items-center">
          <label className="block text-sm font-medium text-gay-700 min-w-32">
            Longitud: {lengthPassword}
          </label>
          <input
            type="range"
            id="range"
            min="8"
            max="50"
            className="w-full h-2 bg-gray-200 rounded-md appearance-none cursor-pointer"
            value={lengthPassword}
            onChange={handleRangeChange}
          />
        </div>
        <div className="flex flex-row gap-4 p-4">
          <div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="mayus"
                checked={isMayusSelected}
                onCheckedChange={() => setIsMayusSelected((prev) => !prev)}
              />
              <label
                htmlFor="mayus"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                A-Z
              </label>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="minus"
                checked={isMinusSelected}
                onCheckedChange={() => setIsMinusSelected((prev) => !prev)}
              />
              <label
                htmlFor="minus"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                a-z
              </label>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="numbers"
                checked={isNumberSelected}
                onCheckedChange={() => setIsNumberSelected((prev) => !prev)}
              />
              <label
                htmlFor="numbers"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                0-9
              </label>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="special"
                checked={isSpecialCharSelected}
                onCheckedChange={() =>
                  setIsSpecialCharSelected((prev) => !prev)
                }
              />
              <label
                htmlFor="special"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                !@#$%^&
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
