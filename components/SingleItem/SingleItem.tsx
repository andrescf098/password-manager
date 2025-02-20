import Link from "next/link";
import { SingleItemProps } from "./SingleItem.types";

export function SingleItem(props: SingleItemProps) {
  const { href, icon: Icon, label, onClick } = props;
  return (
    <Link
      href={href}
      className="flex gap-2 items-center p-2 hover:bg-gray-400 hover:text-white duration-300 transition-all rounded-md"
      onClick={onClick}
    >
      <div className="p-2 rounded-md">
        <Icon size={20} />
      </div>
      {label}
    </Link>
  );
}
