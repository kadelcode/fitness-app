import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import WorkoutCharts from "@/components/WorkoutCharts";

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

const workoutData = [
  { day: 'Mon', workouts: 1 },
  { day: 'Tue', workouts: 0 },
  { day: 'Wed', workouts: 1 },
  { day: 'Thu', workouts: 0 },
  { day: 'Fri', workouts: 1 },
];

const nutritionData = [
  { name: 'Calories', value: 1800, goal: 2200 },
  { name: 'Protein', value: 110, goal: 150 },
  { name: 'Carbs', value: 200, goal: 250 },
  { name: 'Fats', value: 70, goal: 80 },
];

export default async function DashboardPage() {

  // Retrive session information
  const session = await getServerSession(authOptions);

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-green-400 text-white p-6 rounded-2xl shadow-md">
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

      {/* Today's Workout */}
      <Card>
        <CardHeader>Today's Workout</CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <p className="text-xl font-medium">Full Body HIIT</p>
              <p className="text-gray-500">45 mins | Strength | Intermediate</p>
            </div>
            <Button className="mt-4 md:mt-0">Start Workout</Button>
          </div>
        </CardContent>
      </Card>

      {/* Nutrition Section */}
      <Card>
        <CardHeader>Today's Nutrition</CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {nutritionData.map((item) => (
              <div key={item.name}>
                <p className="font-medium">{item.name}</p>
                <p>{item.value} / {item.goal}</p>
                <Progress value={(item.value / item.goal) * 100} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts */}
      <WorkoutCharts />
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
