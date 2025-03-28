import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { itemId: string } }
) {
  try {
    // const { itemId } = params;
    // if (!itemId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }
    // const element = await db.element.findUnique({
    //   where: { id: itemId },
    // });
    // return NextResponse.json(element);
    const element = await db.element.findUnique({
      where: { id: params.itemId },
    });
    return NextResponse.json(element);
  } catch {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { itemId: string } }
) {
  try {
    const { itemId } = params;
    const values = await req.json();
    if (!itemId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const element = await db.element.update({
      where: { id: itemId },
      data: { ...values },
    });
    return NextResponse.json(element);
  } catch {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
