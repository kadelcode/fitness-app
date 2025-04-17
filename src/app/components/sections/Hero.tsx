"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="w-full py-30 md:py-40 px-6 text-center bg-gradient-to-b from-gray-100 to-white scroll-mt-24">
            <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
                Transform <span className="text-lime-500">Your Body</span>. Track Your Progress.
            </motion.h1>
            <motion.p
            className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
                Your all-in-one fitness companion for workouts, progress tracking, and motivation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
                <Link href="/auth/register">
                    <Button size="lg" className="text-lg px-8 py-6 bg-lime-300 text-gray-900">
                        Get Started
                    </Button>
                </Link>
            </motion.div>

            <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
                <Image
                src="/images/fitness-hero.jpeg"
                alt="Fitness Hero"
                width={700}
                height={400}
                priority
                className="mx-auto rounded-xl shadow-lg"
                />
            </motion.div>
        </section>
    )
}