"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="w-full z-50 fixed top-0 bg-white shadow-sm">
            <div className="max-w-7xl z-50 bg-white mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link onClick={() => setIsOpen(false)} href="/" className="text-2xl font-bold text-gray-800">
                    ForceFit
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
                    <Link href="#features">Features</Link>
                    <Link href="#plans">Plans</Link>
                    <Link href="#testimonials">Testimonials</Link>
                    <Link href="/auth/login">
                        <Button variant="outline">Login</Button>
                    </Link>
                    <Link href="/auth/register">
                        <Button>Join Now</Button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button onClick={toggleMenu} className="md:hidden">
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <>
                <div onClick={toggleMenu} className="inset-0 fixed bg-gray-900/50 -z-20"></div>
                <div className="md:hidden z-50 flex flex-col bg-white border-t px-6 py-4 space-y-4 space-x-4">
                    <Link href="#features" onClick={toggleMenu}>Features</Link>
                    <Link href="#plans" onClick={toggleMenu}>Plans</Link>
                    <Link href="#testimonials" onClick={toggleMenu}>Testimonials</Link>
                    <Link href="/auth/login" onClick={toggleMenu}>
                        <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                    <Link href="/auth/register" onClick={toggleMenu}>
                        <Button className="w-full">Join Now</Button>
                    </Link>
                </div>
                </>
            )}
        </header>
    )
}