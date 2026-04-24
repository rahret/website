import { DiamondIQNavbar } from "@/components/layout/DiamondIQNavbar";
import { DiamondIQFooter } from "@/components/layout/DiamondIQFooter";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Check, Zap, Users, Trophy, Crown } from "lucide-react";
import { Link } from "wouter";

export default function DiamondIQPricing() {
  const plans = [
    {
      name: "Free Trial (7 days)",
      price1: "$0",
      period1: "automatically upgraded to Player after trial period",
      price2: "",
      period2: "",
      icon: <Zap className="w-8 h-8 text-gray-400" />,
      description: "Get started with limited access",
      features: [
        "Capped number of questions per day",
        "Limited postion access",
        "Basic progress tracking",
      ],
      cta: "Start a Free Trial",
      popular: false,
      color: "gray",
    },
    {
      name: "Player",
      price1: "$1.99",
      period1: "Per Month OR",
      price2: "$19.99",
      period2: "Per Year",
      icon: <Trophy className="w-8 h-8 text-accent" />,
      description: "Full access for individual players",
      features: [
        "Full access to the full suite of scenarios",
        "All positions available",
        "Track progress Position-by-position statistics",
        "Earn your way up the baseball ranks!", 
      ],
      cta: "Start a Player Subscription",
      popular: true,
      color: "accent",
    },
    /*
    {
      name: "Coach",
      price: "$24.99",
      period: "Per Year",
      icon: <Users className="w-8 h-8 text-white" />,
      description: "For coaches who want to lead",
      features: [
        "All Player features included",
        "Create & manage unlimited Teams",
        "Design customized playsets",
        "Assign scenarios to players",
        "Track team progress",
        "Assistant Coach capabilities",
      ],
      cta: "Get Coach Access",
      popular: true,
      color: "primary",
    },
    */
    {
      name: "Team",
      price1: "$199.99",
      period1: "Per Year",
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      description: "Complete team solution",
      features: [
        "Up to 3 Coach subscriptions included",
        "Up to 12 Player subscriptions included",
        "Priority support",
      ],
      cta: "Start a Team Subscription",
      popular: false,
      color: "yellow",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <DiamondIQNavbar />

      {/* Hero */}
      <div className="bg-slate-900 pt-32 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black text-white mb-6"
          >
            PRICING PLANS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            DiamondIQ offers three editions. Choose the plan that best fits your needs.
          </motion.p>
        </div>
      </div>

      {/* Pricing Cards */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-xl border-2 overflow-hidden ${
                plan.popular ? "border-accent" : "border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? "bg-slate-900 text-white" : ""}`}>
                <div className="mb-4">{plan.icon}</div>
                <h3 className={`text-2xl font-display font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline mb-4">
                  <span className={`text-4xl font-display font-bold ${plan.popular ? "text-accent" : "text-gray-900"}`}>
                    {plan.price1}
                  </span>
                  <span className={`ml-2 text-sm ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.period1}
                  </span>
                </div>
                <div className="flex items-baseline mb-0">
                  <span className={`text-4xl font-display font-bold ${plan.popular ? "text-accent" : "text-gray-900"}`}>
                    {plan.price2}
                  </span>
                  <span className={`ml-2 text-sm ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.period2}
                  </span>
                </div>
              </div>

              <div className="p-8 pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start space-x-3 text-sm">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/diamondiq/subscribe">
                  <button
                    className={`w-full py-3 rounded-lg font-bold transition-all ${
                      plan.popular
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Download CTA */}
      <Section className="bg-white">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            LET'S PLAY BALL - DOWNLOAD NOW
          </h2>
          <div className="flex justify-center gap-4 mt-8">
            <button className="flex items-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors">
              <span className="text-2xl mr-3"></span>
              <div className="text-left">
                <div className="text-[10px] uppercase leading-none">Download on the</div>
                <div className="text-base font-bold leading-none mt-1">App Store</div>
              </div>
            </button>
            <button className="flex items-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors">
              <span className="text-xl mr-3">▶</span>
              <div className="text-left">
                <div className="text-[10px] uppercase leading-none">Get it on</div>
                <div className="text-base font-bold leading-none mt-1">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </Section>

      {/* League Section */}
      <Section className="bg-slate-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Leagues & Organizations
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get DiamondIQ for every coach and player in your league at a discounted price. 
            Contact us for custom pricing tailored to your organization's needs.
          </p>
          <Link href="/diamondiq/contact">
            <button className="px-8 py-4 bg-accent text-white rounded-lg font-bold text-lg hover:bg-accent/90 transition-all" data-testid="button-league-contact">
              Contact Us for League Pricing
            </button>
          </Link>
        </div>
      </Section>

      <DiamondIQFooter />
    </div>
  );
}
