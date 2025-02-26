"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { copyClipboard } from "@/lib/copyClipboard";
import { Copy, Shuffle } from "lucide-react";
import { useEffect, useState } from "react";
import { PasswordGenerator } from "../PasswordGenerator";
import { generateCustomPassword } from "@/lib/generateCustomPassword";
import { generateRandomUsername } from "@/lib/generateRandomUser";

export function FormGenerator() {
  const [itemValueInput, setItemValueInput] = useState("");
  const [userTypeSelected, setuserTypeSelected] = useState("username");
  const [lengthPassword, setLengthPassword] = useState(11);
  const [isMayusSelected, setIsMayusSelected] = useState(true);
  const [isMinusSelected, setIsMinusSelected] = useState(true);
  const [isNumberSelected, setIsNumberSelected] = useState(true);
  const [isSpecialCharSelected, setIsSpecialCharSelected] = useState(true);
  const [selectedValue, setSelectedValue] = useState<"password" | "user" | "">(
    "password",
  );
  useEffect(() => {
    if (selectedValue === "password") {
      const newPassword = generateCustomPassword({
        length: lengthPassword,
        mayus: isMayusSelected,
        minus: isMinusSelected,
        numbers: isNumberSelected,
        specialCharacters: isSpecialCharSelected,
      });
      setItemValueInput(newPassword);
    }
  }, [
    lengthPassword,
    isMayusSelected,
    isMinusSelected,
    isSpecialCharSelected,
    isNumberSelected,
    selectedValue,
  ]);

  const handleShuffleClick = () => {
    if (selectedValue === "password") {
      const password = generateCustomPassword({
        length: lengthPassword,
        mayus: isMayusSelected,
        minus: isMinusSelected,
        numbers: isNumberSelected,
        specialCharacters: isSpecialCharSelected,
      });
      setItemValueInput(password);
    } else {
      const newUserGenerated = generateRandomUsername();
      setItemValueInput(newUserGenerated);
    }
  };

  useEffect(() => {
    if (selectedValue === "user") {
      const newUserGenerated = generateRandomUsername();
      setItemValueInput(newUserGenerated);
    }
  }, [selectedValue, userTypeSelected]);

  return (
    <div className="mt-5 max-w-2xl">
      <div className="relative w-full">
        <Input placeholder="Contraseña" value={itemValueInput} />
        <Copy
          className="absolute right-12 top-3 cursor-pointer h-5 w-5"
          onClick={() => copyClipboard(itemValueInput)}
        />
        <Shuffle
          className="absolute top-3 right-2 cursor-pointer h-5 w-5"
          onClick={handleShuffleClick}
        />
        <div className="bg-slate-100 rounded-md shadow-md my-4 p-4">
          <p className="mb-5 text-slate-500">¿Qué quieres generar?</p>
          <RadioGroup
            defaultValue="password"
            onValueChange={(e: "password" | "user" | "") => setSelectedValue(e)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="password" id="r1" />
              <Label htmlFor="r1">Password</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="user" id="r2" />
              <Label htmlFor="r2">Usuario</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      {selectedValue === "password" && (
        <PasswordGenerator
          lengthPassword={lengthPassword}
          setLengthPassword={setLengthPassword}
          isMayusSelected={isMayusSelected}
          setIsMayusSelected={setIsMayusSelected}
          isMinusSelected={isMinusSelected}
          setIsMinusSelected={setIsMinusSelected}
          isNumberSelected={isNumberSelected}
          setIsNumberSelected={setIsNumberSelected}
          isSpecialCharSelected={isSpecialCharSelected}
          setIsSpecialCharSelected={setIsSpecialCharSelected}
        />
      )}
    </div>
  );
}
