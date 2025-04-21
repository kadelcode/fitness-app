"use client"

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const [profile, setProfile] = useState({ name: "", bio: "", avatar: "" });
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated" && session?.user) {
          fetch("/api/profile")
            .then(async (res) => {
              if (!res.ok) {
                if (res.status === 401) {
                  console.warn("Unauthorized, maybe redirect or logout?");
                  router.push("/login")
                }
                throw new Error("Failed to load profile");
              }
              const data = await res.json();
              setProfile(data);
            })
            .catch((err) => {
              console.error("Profile fetch error:", err.message);
            });
        }
      }, [status, session, router]);

    async function handleUpdate(e: React.FormEvent) {
        e.preventDefault()
        await fetch("/api/profile", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(profile)
        })
        toast.success("Profile updated!");
    }

    return (
        <div className="max-w-lg mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Your Profile</h1>

            {profile.avatar && (
            <img src={profile.avatar} alt="Avatar Preview" className="w-16 h-16 rounded-full" />
            )}

            <form onSubmit={handleUpdate} className="space-y-4">
                <input
                  type="text"
                  value={profile.name}
                  onChange={e => setProfile({ ...profile, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full p-2 border rounded"
                />
                <textarea
                  value={profile.bio || ""}
                  onChange={e => setProfile({ ...profile, bio: e.target.value })}
                  placeholder="Write a short bio"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  value={profile.avatar}
                  onChange={e => setProfile({ ...profile, avatar: e.target.value })}
                  placeholder="Avatar URL"
                  className="w-full p-2 border rounded"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Update Profile
                </button>
            </form>
        </div>
    )
}