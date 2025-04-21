"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const workoutData = [
    { day: 'Mon', workouts: 1 },
    { day: 'Tue', workouts: 0 },
    { day: 'Wed', workouts: 1 },
    { day: 'Thu', workouts: 0 },
    { day: 'Fri', workouts: 1 },
  ];



export default function WorkoutCharts() {
    return (
        <Card className='shadow-md'>
            <CardHeader>Weekly Workout Overview</CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={workoutData}>
                        <XAxis dataKey="day" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="workouts" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}