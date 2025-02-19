type TypeElement = "" | "sesion" | "creditCard" | "idCard" | "folder";

export type DataHeaderMainItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  typeElement: TypeElement;
  text: string;
};

export type HeaderMainProps = {
  userId: string;
};
