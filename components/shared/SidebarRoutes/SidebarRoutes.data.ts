import {
  CreditCard,
  Earth,
  LayoutList,
  Settings,
  Star,
  UserPen,
} from "lucide-react";

export const dataSidebarElements = [
  {
    title: "Elementos",
    icon: LayoutList,
    children: [
      {
        item: "Favoritos",
        href: "/favourites",
        icon: Star,
      },
      {
        item: "Inicios de sesión",
        href: "/sessions",
        icon: Earth,
      },
      {
        item: "Tarjetas de crédito",
        href: "/credit-cards",
        icon: CreditCard,
      },
    ],
  },
];

export const dataSidebarConfiguration = [
  {
    title: "Configuration",
    icon: Settings,
    children: [
      {
        item: "Perfil",
        href: "/profile",
        icon: UserPen,
        premium: false,
      },
    ],
  },
];
