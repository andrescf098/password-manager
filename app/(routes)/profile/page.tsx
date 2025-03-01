import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FormProfile } from "./components/FormProfile";

export default async function ProfilePage() {
  const session = await getServerSession();
  if (!session?.user?.email) redirect("/");
  const userdb = await db.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  if (!userdb) redirect("/");
  return (
    <div className="px-6">
      <h1 className="text-xl md:text-2xl font-semibold pb-6">
        Detalles del perfil
      </h1>
      <FormProfile user={userdb} />
    </div>
  );
}
