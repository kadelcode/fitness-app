"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Emily R.",
        avatar: "/avatars/uifaces-a1.jpg",
        quote: "BoomFit helped me stay on track with my workouts! I've never felt better.",
    },
    {
        name: "James T.",
        avatar: "/avatars/uifaces-a2.jpg",
        quote: "I love the progress insights and personalized plans. Best app I've used!",
    },
    {
        name: "Sophia W.",
        avatar: "/avatars/uifaces-a3.jpg",
        quote: "It feels like I have a coach in my pocket. Super intuitive and clean UI.",
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    What Our Users Say
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                          key={i}
                          className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md"
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <Image
                                  src={t.avatar}
                                  alt={t.name}
                                  width={50}
                                  height={50}
                                  priority
                                  className="rounded-full"
                                />
                                <span className="font-semibold">{t.name}</span>
                            </div>
                            <p className="text-gray-700 italic">&#34;{t.quote}&#34;</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}