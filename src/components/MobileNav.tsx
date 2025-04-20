// Import necessary modules and components
import { Menu } from "lucide-react" // Icon component for the menu
import { useSession, signOut } from "next-auth/react" // Hooks for session management
import { useState, useRef, useEffect } from 'react' // React hooks for state management and side effects
import Link from 'next/link' // Component for client-side navigation
import Image from "next/image"

export default function MobileNav( { onOpen }: { onOpen: () => void }) {

    // Get the session data using the useSession hook
    const { data: session, status } = useSession()

    // State to manage the dropdown menu's open/close state
    const [open, setOpen] = useState(false)

    // Reference to the menu div for handling clicks outside the menu
    const menuRef = useRef<HTMLDivElement>(null)

    // Extract the user's name from the session data or default to 'User'
    /*const name = session?.user?.name || 'User'

    // Generate initials from the user's name
    const initials = name
      .split(' ') // Split the name into parts
      .map((n) => n[0]) // Take the first letter of each part
      .join('') // Join the letters together
      .toUpperCase() // Convert to uppercase
      .slice(0, 2) // Take only the first two initials
    */

    // Generate the avatar URl using the initials
    // const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=0D8ABC&color=fff&rounded=true&size=128`

    // useEffect to handle clicks outside the menu to close it
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false); // Close the menu if the click is outside
            }
        }
        document.addEventListener('mousedown', handleClickOutside) // Add event listener
        return () => document.removeEventListener('mousedown', handleClickOutside) // Cleanup event listener
    }, [])

    return (
        <div className="flex w-full justify-between items-center">
            {/* Menu Button */}
            <button
                className="md:hidden text-gray-700 cursor-pointer" // Hide on medium and larger screens
                onClick={onOpen} // Call the onOpen function when clicked
                aria-label="Open sidebar" // Accessibility label
                >
                    <Menu className="w-6 h-6" /> {/* Menu icon */}
            </button>
        

            {/* Avatar Image */}
            <div className="relative" ref={menuRef}> {/* Container for the avatar and dropdown menu */}
                {status === "loading" ? (
                    <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
                ) : (
                <Image
                  key={session?.user?.avatar}
                  src={session?.user?.avatar || '/avatars/avataaars.png'} // Avatar image source
                  alt="User Avatar" // Accessibility text
                  className="w-8 h-8 rounded-full cursor-pointer border hover:scale-105 transition" // Styling classes
                  onClick={() => setOpen((prev) => !prev)} // Toggle the menu open/close state
                  unoptimized
                  width={32}
                  height={32}
                />
                )}

                {open && ( // Conditionally render the dropdown menu if open is true
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                        <Link
                          href="/profile" // Navigation link to the profile page
                          className="block px-4 py-2 text-sm hover:bg-gray-100" // Styling classes
                          onClick={() => setOpen(false)} // close the menu when clicked
                        >
                            Profile {/* Menu item text */}
                        </Link>
                        <Link
                          href="/settings" // Navigation link to the settings page
                          className="block px-4 py-2 text-sm hover:bg-gray-100" // Styling classes
                          onClick={() => setOpen(false)} // Close the menu when clicked
                        >
                            Settings {/* Menu item text */}
                        </Link>
                        <button
                          onClick={() => {
                            setOpen(false) // Close the menu
                            signOut() // Sign out the user
                          }}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-lime-300" // Styling classes
                        >
                            Logout {/* Menu item text */}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}