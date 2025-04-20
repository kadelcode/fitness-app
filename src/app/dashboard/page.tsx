import { authOptions } from "@/lib/auth-options"; // OR use getServerSession
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type SummaryCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
}

import {
  DumbbellIcon,
  FlameIcon,
  ActivityIcon,
} from "lucide-react"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions); // await the Promise

  if (!session) {
    return redirect("/login");
  }

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold">Welcome back {session?.user.name || "User"}</h1>
        <p className="text-sm mt-1">Stay consistent. You&apos;re doing great!</p>
      </div>

      {/* Today's Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard
            icon={<DumbbellIcon className="text-blue-500" />}
            title="Workout"
            value="Completed"
          />
          <SummaryCard
            icon={<FlameIcon className="text-red-500" />}
            title="Calories Burned"
            value="550 kcal"
          />
          <SummaryCard
            icon={<ActivityIcon className="text-green-500" />}
            title="Steps Today"
            value="8,420"
          />
      </div>
    </div>
  );
}

function SummaryCard({ icon, title, value }: SummaryCardProps) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md flex items-center space-x-4">
      <div className="p-2 bg-gray-100 rounded-full">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  )
}
