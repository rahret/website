import { DiamondIQNavbar } from "@/components/layout/DiamondIQNavbar";
import { DiamondIQFooter } from "@/components/layout/DiamondIQFooter";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Target, BrainCircuit, Users, Lightbulb, Award, Heart } from "lucide-react";

export default function DiamondIQAbout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <DiamondIQNavbar />

      {/* Hero */}
      <div className="bg-slate-900 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black text-white mb-6"
          >
            ABOUT THE APP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            DiamondIQ is THE instructional app designed specifically for coaches and players who want to transform game awareness into instinct.
          </motion.p>
        </div>
      </div>

      {/* Mission Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              The Missing Piece to Player Development
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With thousands of questions to choose from, coaches can customize playsets to help players learn new positions, sharpen their defensive skills, and increase their in-game performance.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              DiamondIQ bridges the gap between knowing what to do and doing it instinctively. Our multi-sensory approach ensures players see, hear, and interact with game situations until the right response becomes automatic.
            </p>
          </div>
          <div className="bg-slate-100 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "8,000+", label: "Scenarios" },
                { value: "All Positions", label: "Coverage" },
                { value: "Youth to Pro", label: "Age Range" },
                { value: "4.9 Stars", label: "App Rating" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">What Makes Us Different</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Traditional coaching focuses on mechanics. We focus on the mental game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <BrainCircuit className="w-10 h-10 text-accent" />,
              title: "Cognitive Training",
              desc: "Our algorithms simulate real-game pressure to train the brain's decision-making centers."
            },
            {
              icon: <Target className="w-10 h-10 text-accent" />,
              title: "Situational Mastery",
              desc: "Learn to read the game before the play happens. Anticipation is the key to elite performance."
            },
            {
              icon: <Users className="w-10 h-10 text-accent" />,
              title: "Team Integration",
              desc: "Coaches can create custom playsets, assign them to teams, and track individual progress."
            },
            {
              icon: <Lightbulb className="w-10 h-10 text-accent" />,
              title: "Adaptive Learning",
              desc: "The app adjusts difficulty based on performance, ensuring optimal challenge at every level."
            },
            {
              icon: <Award className="w-10 h-10 text-accent" />,
              title: "Achievement System",
              desc: "Earn trophies, track progress, and stay motivated with gamified learning elements."
            },
            {
              icon: <Heart className="w-10 h-10 text-accent" />,
              title: "Built with Passion",
              desc: "Created by coaches and players who understand the game inside and out."
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="inline-flex p-3 bg-accent/10 rounded-xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* For Coaches & Players */}
      <Section className="bg-slate-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl font-display font-bold text-accent mb-6">For Coaches</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-accent">•</span>
                <span>Create custom playsets tailored to your team's needs</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent">•</span>
                <span>Assign specific scenarios to individual players</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent">•</span>
                <span>Track progress and identify areas for improvement</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent">•</span>
                <span>Manage unlimited teams with assistant coach support</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl font-display font-bold text-accent mb-6">For Players</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-accent">•</span>
                <span>Access 8,000+ game scenarios across all positions</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent">•</span>
                <span>Practice specific situations to strengthen weak areas</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent">•</span>
                <span>Earn trophies and track your improvement over time</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent">•</span>
                <span>Join unlimited teams and compete with teammates</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <DiamondIQFooter />
    </div>
  );
}
