"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";


const additionalFaqs = [
    {
      question: "What features are included in the free plan?",
      answer: "The free plan includes basic tracking of workouts, access to a limited library of exercises, and community support.",
    },
    {
      question: "How does the AI generate personalized workout plans?",
      answer: "Our AI uses your fitness goals, current fitness level, and preferences to create custom workout plans that adapt over time.",
    },
    {
      question: "Can I sync BoomFit with other fitness apps?",
      answer: "Yes, FitTrack supports integration with popular fitness apps like Strava, Apple Health, and Google Fit.",
    },
    {
      question: "Is my data secure with BoomFit?",
      answer: "Yes, we take data privacy seriously. All your data is encrypted and securely stored. You can review our privacy policy for more details.",
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our customer support team through the in-app chat or by emailing support@fittrack.com.",
    },
    {
      question: "Are there any community features in BoomFit?",
      answer: "Yes, FitTrack has a community section where you can join groups, participate in challenges, and share your progress with others.",
    },
    {
      question: "Can I use BoomFit offline?",
      answer: "While some features require an internet connection, you can track your workouts and view your plans offline.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and Apple Pay for subscription payments.",
    },
];
  
  // Combine the original FAQs with the additional ones
  const faqs = [
    {
      question: "Is BoomFit free to use?",
      answer: "Yes! We offer a free plan with essential features to get you started on your fitness journey.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel, upgrade, or downgrade your plan at any time from your account settings.",
    },
    {
      question: "Will I get personalized workout plans?",
      answer: "Yes, Pro users receive AI-generated workout plans tailored to their goals and preferences.",
    },
    ...additionalFaqs,
];
  


export default function FAQ() {
    // State to keep track of the currently open FAQ index
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Function to toggle the open/close state of a FAQ item
    const toggle = (i: number) => {
        // If the clicked item is already open, close it; otherwise, open it
        setOpenIndex(i === openIndex ? null : i);
    };

    // JSX to render the FAQ section
    return (
        <section id="faq" className="bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-6 text-left">
                    {faqs.map((faq, i) => ( // Mapping through the faqs array to create FAQ items
                        <motion.div
                          key={i} // Unique key for each FAQ item
                          className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                            <button
                              onClick={() => toggle(i)} // Toggle function called on button click
                              className="flex justify-between items-center w-full text-left text-lg font-medium"
                            >
                                {faq.question} {/* FAQ question text */}
                                {openIndex === i ? ( // Conditional rendering of icons based on open/close state
                                    <ChevronUp className="w-5 h-5" /> // Icon for open state
                                ) : (
                                    <ChevronDown className="w-5 h-5" /> // Icon for closed state
                                )}
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openIndex === i ? 'max-h-40' : 'max-h-0'
                              }`}
                            >
                                <p className="mt-4 text-gray-600">{faq.answer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}