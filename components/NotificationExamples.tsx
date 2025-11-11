import React from 'react';
import { AnimatedSection } from './AnimatedSection';

interface Notification {
  icon: string;
  title: string;
  message: string;
  color: string;
  bgColor: string;
}

const notifications: Notification[] = [
  {
    icon: "🎮",
    title: "Break the Gaming Cycle?",
    message: "You've gamed 4 hours daily this week. Want to try learning something new today?",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: "🚬",
    title: "Healthier Alternative",
    message: "You usually smoke now. How about something sweet instead? You've had 0 treats this week!",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50"
  },
  {
    icon: "💪",
    title: "Gym Streak Alert",
    message: "It's been 5 days since your last workout. Your usual gym time is in 30 minutes!",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: "📚",
    title: "New Habit Forming",
    message: "You've read for 3 days straight! Keep it up and this becomes automatic.",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50"
  },
];

export const NotificationExamples: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
              Smart Nudges at the <span className="text-brand-primary">Right Moment</span>
            </h2>
            <p className="text-lg text-brand-muted">What-If doesn't just predict—it helps you change</p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {notifications.map((notif, index) => (
            <AnimatedSection key={index} delay={`delay-${index * 150}`}>
              <div className={`${notif.bgColor} rounded-xl p-6 border-2 border-purple-200 hover:shadow-xl transition-all hover:-translate-y-1`}>
                <div className="flex items-start gap-4">
                  <div className={`text-4xl bg-gradient-to-br ${notif.color} w-14 h-14 rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                    {notif.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{notif.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{notif.message}</p>
                    <div className="mt-4 flex gap-2">
                      <button className={`bg-gradient-to-r ${notif.color} text-white text-xs font-bold px-4 py-2 rounded-full hover:shadow-lg transition-all`}>
                        Let's do it!
                      </button>
                      <button className="bg-gray-200 text-gray-700 text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-300 transition-all">
                        Not now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay="delay-600">
          <div className="max-w-2xl mx-auto mt-12 text-center bg-purple-500 p-8 rounded-2xl border-2 border-purple-400">
            <p className="text-white text-lg font-semibold">
              These aren't random reminders. They're <span className="text-yellow-300">context-aware interventions</span> timed perfectly based on your patterns.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
