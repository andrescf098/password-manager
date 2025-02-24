import { FormEditElement } from "@/components/shared/FormEditElement";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function EditElement({
  params,
}: {
  params: { elementId: string };
}) {
  const { elementId } = await params;
  const session = await getServerSession();
  if (!session || !session.user?.email) return redirect("/");
  const element = await db.element.findUnique({
    where: { id: elementId },
  });
  if (!element) return redirect("/");
  return (
    <div className="h-dvh gird place-items-center">
      <div className=" sm:max-w-[825px] border border-gray-300 p-4 rounded-md">
        <h1>Editar elemento</h1>
        <div>
          <FormEditElement dataElement={element} />
        </div>
      </div>
    </div>
  );
}
