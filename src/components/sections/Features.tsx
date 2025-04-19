"use client";

import { motion } from "framer-motion";
import { GiMuscleUp, GiProgression } from "react-icons/gi";
import { IoNutritionOutline } from "react-icons/io5";

const features = [
    {
        title: "Custom Workouts",
        desc: "Create personalized plans and routines tailored to your fitness goals.",
        icon: <GiMuscleUp size={30} className="text-lime-500" />
    },
    {
        title: "Progress Tracking",
        desc: "Visualize your growth with weekly and monthly stats & charts.",
        icon: <GiProgression size={30} className="text-lime-500" />
    },
    {
        title: "Nutrition Advice",
        desc: "Get curated meal plans to fuel your fitness journey.",
        icon: <IoNutritionOutline size={30} className="text-lime-500" />
    },
]

export default function Features() {
    return (
        <section id="features" className="w-full py-16 px-6 scroll-mt-10 bg-white scroll-m-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
                Features
            </motion.h2>

            <motion.div
              className="p-6 rounded-2xl grid md:grid-cols-3 gap-8 text-left shadow-md bg-white border hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
                {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="p-6 rounded-2xl shadow-md bg-white border hover:shadow-xl"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p>{feature.desc}</p>
                    </motion.div>
                ))}

            </motion.div>
        </section>
    )
}