import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized"}, { status: 401 });

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        select: { id:true, name: true, email: true, avatar: true, bio: true },
    })

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json(user)
}

export async function PUT(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return NextResponse.json({}, { status: 401 });

    const body = await req.json();

    const updatedUser = await prisma.user.update({
        where: { email: session.user.email },
        data: {
            name: body.name,
            bio: body.bio,
            avatar: body.avatar,
        }   
    })

    return NextResponse.json({ success: true, user: updatedUser })
}