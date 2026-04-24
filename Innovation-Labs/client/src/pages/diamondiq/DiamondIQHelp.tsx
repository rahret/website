import { DiamondIQNavbar } from "@/components/layout/DiamondIQNavbar";
import { DiamondIQFooter } from "@/components/layout/DiamondIQFooter";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { BookOpen, Video, MessageCircle, ChevronRight, Smartphone, Users, Trophy, Settings } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function DiamondIQHelp() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const helpCategories = [
    {
      icon: <Smartphone className="w-8 h-8 text-accent" />,
      title: "Getting Started",
      desc: "Download, install, and set up your account",
      articles: 5,
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "For Coaches",
      desc: "Team management, playsets, and progress tracking",
      articles: 8,
    },
    {
      icon: <Trophy className="w-8 h-8 text-accent" />,
      title: "For Players",
      desc: "Practice modes, achievements, and tips",
      articles: 6,
    },
    {
      icon: <Settings className="w-8 h-8 text-accent" />,
      title: "Account & Billing",
      desc: "Subscriptions, payments, and settings",
      articles: 4,
    },
  ];

  const faqs = [
    {
      question: "How do I download DiamondIQ?",
      answer: "DiamondIQ is available on both iOS and Android. Search for 'DiamondIQ' in the App Store or Google Play Store, or visit our Subscribe page for direct download links.",
    },
    {
      question: "What's included in the free trial?",
      answer: "The free trial gives you access to a limited number of questions so you can experience how DiamondIQ works. Upgrade to Player, Coach, or Team edition for full access to 8,000+ scenarios.",
    },
    {
      question: "Can I switch my subscription plan?",
      answer: "Yes! You can upgrade or change your plan at any time through the app settings or by contacting our support team.",
    },
    {
      question: "How do I create a team as a coach?",
      answer: "With a Coach subscription, you can create unlimited teams from the app's Team Management section. Simply tap 'Create Team', name your team, and start inviting players.",
    },
    {
      question: "How do players join a team?",
      answer: "Coaches can invite players via email or share a team code. Players with any subscription level (including free trial) can join unlimited teams.",
    },
    {
      question: "Is my progress saved across devices?",
      answer: "Yes! Your progress, trophies, and stats are tied to your account and sync automatically when you sign in on any device.",
    },
  ];

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
            HELP CENTER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Find answers, tutorials, and resources to get the most out of DiamondIQ.
          </motion.p>
        </div>
      </div>

      {/* Quick Links */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center space-x-4 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="p-3 bg-accent/10 rounded-xl">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Documentation</h3>
              <p className="text-sm text-gray-500">Guides & tutorials</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center space-x-4 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="p-3 bg-accent/10 rounded-xl">
              <Video className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Video Tutorials</h3>
              <p className="text-sm text-gray-500">Step-by-step videos</p>
            </div>
          </div>
          <Link href="/diamondiq/contact">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center space-x-4 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="p-3 bg-accent/10 rounded-xl">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Contact Support</h3>
                <p className="text-sm text-gray-500">Get personalized help</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Help Categories */}
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{category.desc}</p>
              <div className="flex items-center text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
                <span>{category.articles} articles</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openFaq === i ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Still Need Help */}
      <Section className="bg-slate-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Still Need Help?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Link href="/diamondiq/contact">
            <button className="px-8 py-4 bg-accent text-white rounded-lg font-bold text-lg hover:bg-accent/90 transition-all" data-testid="button-contact-support">
              Contact Support
            </button>
          </Link>
        </div>
      </Section>

      <DiamondIQFooter />
    </div>
  );
}
