"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
//import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        const res = await signIn("credentials", {
            redirect: false,
            email: form.email,
            password: form.password,
        });

        if (res?.error) {
            setError("Invalid email or password");
        } else {
            router.push("/dashboard");
            toast.success("Login successful!")
        }

        setIsLoading(false); // Set loading to false
    };

    return (
        <section className="bg-lime-300 flex items-center justify-center min-h-screen">
            <div className="w-sm md:w-md px-3 mx-auto">
                <Card>
                    <CardContent className="px-6">
                        <h2 className="text-2xl font-bold mb-4">Login</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="email" className="mb-1 text-base">Email</Label>
                                <input 
                                  name="email" 
                                  type="email" 
                                  value={form.email} 
                                  onChange={handleChange}
                                  required
                                  className="border-1 w-full p-1.5 rounded-md border-gray-900 text-base mb-1 focus:outline-none focus:border-green-500"
                                />
                            </div>

                            <div className="relative">
                                <Label htmlFor="password" className="mb-1 text-base">Password</Label>
                                <input 
                                  name="password" 
                                  type={showPassword ? "text" : "password"} 
                                  value={form.password} 
                                  onChange={handleChange}
                                  required
                                  className="border-1 w-full p-1.5 rounded-md border-gray-900 text-base mb-1 focus:outline-none focus:border-green-500"
                                />
                                <button
                                  type="button"
                                  className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-500"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20}/> : <Eye size={20} />}
                                </button>
                            </div>
                
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <Button type="submit" className="w-full bg-gray-900 text-white mt-2 py-6 cursor-pointer" disabled={isLoading}>
                                {isLoading ? "Logging in..." : "Login"}
                            </Button>
                        </form>
                        {/* Forgot password section */}
                        <div className="mt-4 text-center">
                            <Link href="/forgot-password" className="text-gray-900 hover:underline">
                                Forgot Password?
                            </Link>
                        </div>

                        <div className="mt-2 text-center">
                            <span className="text-gray-700">Don&quote;t have an account?</span>
                            <Link href="/signup" className="text-gray-900 hover:underline">
                                Sign Up
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}