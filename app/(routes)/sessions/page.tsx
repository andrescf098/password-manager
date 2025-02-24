import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { DataBody } from "@/components/shared/DataBody";

export default async function SessionsPage() {
  const session = await getServerSession();
  if (!session || !session.user?.email) return redirect("/");
  const user = await db.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      elements: {
        where: {
          typeElement: "Inicio de sesión",
        },
        orderBy: {
          createAt: "desc",
        },
      },
    },
  });
  if (!user) return redirect("/");
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold border-b border-gray-300 px-6 pb-6">
        Lista de inicios de sesión
      </h1>
      <DataBody elements={user.elements} />
    </div>
  );
}
