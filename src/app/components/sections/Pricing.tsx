"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
    {
        title: "Free",
        price: "$0",
        features: [
            "Track workouts",
            "Basic analytics",
            "Access to community",
        ],
    },
    {
        title: "Pro",
        price: "$9.99/mo",
        features: [
            "Everything in Free",
            "Personalized plans",
            "Progress insights",
            "Priority support",
        ],
        highlighted: true,
    },
];

export default function Pricing() {
    return (
        <section id="plans" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    Simple Pricing
                </motion.h2>
                <motion.p
                  className="text-gray-600 md:text-xl mb-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    Choose the plan that fits your fitness journey.
                </motion.p>

                <div className="grid gap-6 md:grid-cols-2">
                    {plans.map((plan) => (
                        <motion.div
                          key={plan.title}
                          className={`rounded-2xl p-8 shadow-md border ${
                            plan.highlighted
                              ? "border-blue-600 bg-white"
                              : "border-gray-200 bg-white"
                          }`}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                            <p className="text-4xl font-bold mb-6">{plan.price}</p>
                            <ul className="text-left space-y-3 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full bg-gray-900 text-white">
                                {plan.title === "Free" ? "Get Started" : "Go Pro"}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}