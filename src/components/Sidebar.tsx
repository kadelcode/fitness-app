"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
    HomeIcon, 
    ActivityIcon, 
    UtensilsIcon, 
    BarChartIcon, 
    ClipboardListIcon, 
    UsersIcon, 
    FlameIcon, 
    SettingsIcon,
    UserCircle2,
  } from "lucide-react";
import LogoutButton from "./LogoutButton";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


const navItems = [
    { name: 'Overview', icon: HomeIcon, href: '/dashboard' },
    { name: 'Workouts', icon: ActivityIcon, href: '/dashboard/workouts' },
    { name: 'Nutrition', icon: UtensilsIcon, href: '/dashboard/nutrition' }, // Track meals, calories, macros
    { name: 'Progress', icon: BarChartIcon, href: '/dashboard/progress' },   // Track weight, measurements, goals
    { name: 'Plans', icon: ClipboardListIcon, href: '/dashboard/plans' },    // Pre-made or custom workout plans
    { name: 'Community', icon: UsersIcon, href: '/dashboard/community' },    // Social or group features
    { name: 'Challenges', icon: FlameIcon, href: '/dashboard/challenges' },   // Daily/weekly challenges to keep users engaged
    { name: 'Settings', icon: SettingsIcon, href: '/dashboard/settings' },   // Profile, preferences
]

export default function Sidebar({ isOpen, close }: { isOpen: boolean; close: () => void }) {
    const { data: session, status } = useSession()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();

    const toggleDropdown = () => setDropdownOpen(prev => !prev)
    const pathname = usePathname() // Get the current path

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                className="fixed inset-0 bg-black/50 z-30 md:hidden"
                onClick={close}
                />
            )}

            {/* Sidebar */}
            <aside 
            className={`
                fixed flex flex-col justify-between top-0 left-0 h-full w-64 bg-white shadow-md p-4 z-40
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static
            `}
            >
                <div>
                    <h2 className="text-xl font-bold mb-6">
                        B<span className="text-lime-500">oo</span>mFit
                    </h2>
                    <nav>
                        <ul className="space-y-4">
                            {navItems.map(({name, icon: Icon, href }) => {
                                const isActive = pathname === href;

                                return (
                                <li key={name}>
                                    <Link 
                                      href={href} 
                                      className={`
                                        flex items-center space-x-2
                                        ${isActive ? 'text-green-400 font-semibold' :
                                            'text-gray-700 hover:text-gray-500'
                                        }
                                      `}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span>{name}</span>
                                    </Link>
                                </li>
                            )})}
                        </ul>
                    </nav>
                </div>
                
                {/* Bottom Avatar + Dropdown */}
                <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center gap-2 p-2 w-full rounded hover:bg-gray-100"
                    >
                        { status === "loading" ? (
                            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
                        ) : (
                        <>
                        <Image
                          key={session?.user?.avatar}
                          src={session?.user?.avatar || '/avatars/avataaars.png' }
                          alt="Avatar"
                          className="w-8 h-8 rounded-full object-cover"
                          unoptimized
                          width={32}
                          height={32}
                        />
                        <span className="text-sm font-medium text-gray-700 truncate">
                            {session?.user?.name || 'User'}
                        </span>
                        </>
                        )}
                    </button>

                    <AnimatePresence>
                        {dropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 bottom-12 w-full bg-white border rounded shadow-lg py-2 z-50"
                            >
                                <button
                                  onClick={() => {
                                    router.push('/dashboard/profile')
                                    setDropdownOpen(false)
                                    close()
                                  }}
                                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                                >
                                    <UserCircle2 className="w-4 h-4" />
                                    Profile
                                </button>
                                <LogoutButton />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </aside>
        </>
    )
}