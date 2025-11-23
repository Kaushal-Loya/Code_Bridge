import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST() {
  const user = await currentUser();

  // if the user already there
  const email = user?.primaryEmailAddress?.emailAddress;
  if (!email) {
    throw new Error("User email is undefined");
  }

  const users = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  // if not add him and create new user
  if (users.length <= 0) {
    const newUser = {
      name: user?.fullName ?? "",
      email: email,
      points: 0,
    };

    const result = await db.insert(usersTable).values(newUser).returning();

    return NextResponse.json(result[0]);
  }

  return NextResponse.json(users[0]);
}
