"use client"

import { useState } from "react"
import Sidebar from "./Sidebar"
import MobileNav from "./MobileNav"

export default function DashboardShell({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={sidebarOpen} close={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col">
                <header className="md:hidden p-4 bg-white border-b">
                    <MobileNav onOpen={() => setSidebarOpen(true)} /> 
                </header>
                <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
                    {children}
                </main>
            </div>
        </div>
    )
}