"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function LogoutButton() {
    const handleLogout = async () => {
        try {
            await signOut({ callbackUrl: "/login" });
            toast.success("Logged out successfully!");
        } catch (error) {
            console.log(error);
            toast.error("Failed to log out.");
        }
    };
    return (
        <Button className="text-white w-36 bg-gray-900 cursor-pointer mt-14" onClick={handleLogout}>
            Logout
        </Button>
    )
}