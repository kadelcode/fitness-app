import { authOptions } from "@/lib/auth-options"; // OR use getServerSession
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions); // await the Promise

  if (!session) {
    return redirect("/login");
  }

  return (
    <>
      <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold">Welcome, {session.user?.name || "User" }!</h1>
      <p className="mt-4">Your dashboard content goes here.</p>
      </div>
      <LogoutButton />
    </>
  );
}
