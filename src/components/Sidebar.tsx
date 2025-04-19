import Link from "next/link";
import { HomeIcon, ActivityIcon } from "lucide-react";

const navItems = [
    { name: 'Overview', icon: HomeIcon, href: '/dashboard' },
    { name: 'Workouts', icon: ActivityIcon, href: '/dashboard/workouts'},
]

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white shadow-md p-4">
            <h2 className="text-xl font-bold mb-6">
                B<span className="text-lime-500">oo</span>mFit
            </h2>
            <nav>
                <ul className="space-y-4">
                    {navItems.map(({name, icon: Icon, href }) => (
                        <li key={name}>
                            <Link href={href} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                                <Icon className="w-5 h-5" />
                                <span>{name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}