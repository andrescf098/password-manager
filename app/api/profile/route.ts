import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const { name, email, username, profileImage, id } = await req.json();
    if (!name || !email || !username || !profileImage || !id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const profile = await db.user.update({
      where: {
        id,
      },
      data: {
        name: name,
        email: email,
        username: username,
        profileImage: profileImage,
      },
    });
    return NextResponse.json(profile);
  } catch {
    return new NextResponse("Error", { status: 500 });
  }
}
