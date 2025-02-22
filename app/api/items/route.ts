import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      typeElement,
      isFavourite,
      name,
      directory,
      username,
      password,
      urlWebsite,
      note,
      userId,
    } = await req.json();
    const element = await db.element.create({
      data: {
        typeElement,
        isFavourite,
        name,
        directory,
        username,
        password,
        urlWebsite,
        note,
        userId,
      },
    });
    return NextResponse.json(element);
  } catch {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
