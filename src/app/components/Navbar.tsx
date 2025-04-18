"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { FaDumbbell } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === "/") {
            e.preventDefault();
            // Scroll to top manually if needed
            window.scrollTo({ top: 0, behavior: "smooth"});
            setIsOpen(false);
        }
    }

    return (
        <header className="w-full z-50 fixed top-0 bg-white shadow-sm">
            <div className="max-w-7xl z-50 bg-white mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link 
                  onClick={handleLogoClick} href="/" 
                  className="text-2xl font-bold text-gray-800"
                >
                    <div className="flex justify-center items-center">
                        <FaDumbbell className="block text-lime-500" size={30} /> 
                        <span>B<span className="text-lime-500">oo</span>mFit</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center text-gray-700 font-medium cursor-pointer">
                    <ScrollLink 
                      className="cursor-pointer hover:text-lime-500"
                      to="features"
                      smooth={true}
                      duration={500}  
                    >
                        Features
                    </ScrollLink>

                    <ScrollLink 
                      className="cursor-pointer hover:text-lime-500"
                      to="plans"
                      smooth={true}
                      duration={500}      
                    >
                        Plans
                    </ScrollLink>

                    <ScrollLink 
                      className="cursor-pointer hover:text-lime-500"
                      to="testimonials"
                      smooth={true}
                      duration={500}      
                    >
                        Testimonials
                    </ScrollLink>
                    
                    <Link href="/auth/login">
                        <Button variant="outline" className="w-full cursor-pointer hover:bg-lime-200">Login</Button>
                    </Link>
                    <Link href="/signup">
                        <Button className="bg-gray-900 hover:bg-gray-800 cursor-pointer text-white">Join Now</Button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button onClick={toggleMenu} className="md:hidden cursor-pointer">
                    {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Backdrop */}
            <div 
              onClick={toggleMenu} 
              className={`md:hidden inset-0 fixed bg-gray-900/50 -z-10 transition-opacity duration-300 ${
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`} 
            />

            {/* Mobile Menu */}
            <div className={`w-full absolute md:hidden z-50 flex flex-col items-center justify-center bg-white border-t px-6 py-4 space-y-4 transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                <ScrollLink 
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                  to="features"
                  smooth={true}
                  duration={500}      
                >
                    Features
                </ScrollLink>

                <ScrollLink 
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                  to="plans"
                  smooth={true}
                  duration={500}      
                >
                    Plans
                </ScrollLink>

                <ScrollLink 
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                  to="testimonials"
                  smooth={true}
                  duration={500}      
                >
                    Testimonials
                </ScrollLink>
                <Link href="/auth/login" onClick={toggleMenu}>
                    <Button variant="outline" className="w-full cursor-pointer hover:bg-lime-200">Login</Button>
                </Link>
                <Link href="/auth/register" onClick={toggleMenu}>
                    <Button className="bg-gray-900 hover:bg-gray-800 cursor-pointer text-white">Join Now</Button>
                </Link>
            </div>
        </header>
    )
}