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
            toast.error("Failed to log out.");
        }
    };
    return (
        <Button onClick={handleLogout}>
            Logout
        </Button>
    )
}