"use client"

import { useState } from 'react'
import Sidebar from "@/components/Sidebar"
import MobileNav from '@/components/MobileNav'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className='flex h-screen'>
            <Sidebar isOpen={sidebarOpen} close={() => setSidebarOpen(false)} />

            <div className='flex-1 flex flex-col'>
                <header className='flex items-center justify-between px-4 py-3 bg-white shadow-md md:hidden'>
                    <MobileNav onOpen={() => setSidebarOpen(true)} />
                    <h1>B<span className='text-lime-500'>oo</span>Fit</h1>
                </header>
                <main className='flex-1 p-6 overflow-y-auto bg-gray-50'>
                    {children}
                </main>
            </div>
        </div>
    )
}