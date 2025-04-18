"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
//import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "", 
        email: "", 
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);

        const res = await fetch("/api/signup", {
            method: "POST",
            body: JSON.stringify(form),
            headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.error || "Something went wrong");
        } else {
            router.push("/login");
        }

        setLoading(false); // Set loading to false
    };

    return (
        <section className="bg-lime-300 flex items-center justify-center min-h-screen">
            <div className="w-sm md:w-md px-3 mx-auto">
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="name" className="mb-1 text-base">Name</Label>
                                <input 
                                name="name" 
                                type="text" 
                                value={form.name} 
                                onChange={handleChange}
                                required
                                className="border-1 w-full p-1.5 rounded-md border-gray-900 text-base mb-1 focus:outline-none focus:border-green-500"
                                />
                            </div>

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

                            <div className="relative">
                                <Label htmlFor="confirmPassword" className="mb-1 text-base">Confirm Password</Label>
                                <input 
                                name="confirmPassword" 
                                type={showConfirmPassword ? "text" : "password"} 
                                value={form.confirmPassword} 
                                onChange={handleChange}
                                required
                                className="border-1 w-full p-1.5 rounded-md border-gray-900 text-base mb-1 focus:outline-none focus:border-green-500"
                                />
                                <button
                                  type="button"
                                  className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-500"
                                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <EyeOff size={20}/> : <Eye size={20} />}
                                </button>
                            </div>
                            
                            
                            {error && <p className="text-red-500">{error}</p>}

                            <Button
                            type="submit"
                            className="w-full bg-gray-900 text-white mt-2 py-6 cursor-pointer"
                            disabled={loading}
                            >
                                {loading ? "Signing up..." : "Sign Up"}
                            </Button>
                        </form>

                        <div className="mt-2 text-center">
                            <span className="text-gray-700">Already have an account?</span>
                            <Link href="/login" className="text-gray-900 hover:underline">
                                Login
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}