import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const futureFeatures = [
    "Visual Timeline of Habits",
    "AI-Based Smart Reminders",
    "Pattern Clustering (Weekday vs. Weekend)",
    "Exportable Analytics Reports",
    "Wearable Integration",
    "Gamification & Streaks",
];

export const FutureRoadmap: React.FC = () => {
    return (
        <section className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">The Journey Ahead</h2>
                        <p className="mt-4 text-lg text-brand-muted">
                            We're just getting started. Our vision is to create the ultimate tool for personal optimization and self-understanding.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                        {futureFeatures.map((feature, index) => (
                            <AnimatedSection key={feature} delay={`delay-${index * 100}`}>
                                <div className="p-6 bg-purple-500 rounded-xl border border-purple-400 h-full transform transition-all hover:-translate-y-1 hover:shadow-lg">
                                    <p className="font-semibold text-white">{feature}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};