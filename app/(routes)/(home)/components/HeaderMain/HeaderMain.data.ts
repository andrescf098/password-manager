import { CircleUserRound, CreditCard, IdCard } from "lucide-react";
import { DataHeaderMainItemProps } from "./HeaderMain.types";

export const dataHeaderMain: DataHeaderMainItemProps[] = [
  {
    icon: CircleUserRound,
    text: "Inicio de sesión",
    typeElement: "sesion",
  },
  {
    icon: CreditCard,
    text: "Tarjeta de crédito",
    typeElement: "creditCard",
  },
  {
    icon: IdCard,
    text: "Identidad",
    typeElement: "idCard",
  },
];
