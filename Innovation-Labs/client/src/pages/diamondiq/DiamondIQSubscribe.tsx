import { DiamondIQNavbar } from "@/components/layout/DiamondIQNavbar";
import { DiamondIQFooter } from "@/components/layout/DiamondIQFooter";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Check, ArrowRight, Smartphone } from "lucide-react";
import { Link } from "wouter";

export default function DiamondIQSubscribe() {
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
            START YOUR JOURNEY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Download DiamondIQ and transform your game awareness into instinct.
          </motion.p>
        </div>
      </div>

      {/* Download Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-4 bg-accent/10 rounded-2xl mb-8">
            <Smartphone className="w-12 h-12 text-accent" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Download the App
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            DiamondIQ is available on both iOS and Android. Download now and start with our free trial - no credit card required.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="flex items-center justify-center bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors shadow-xl">
              <span className="text-3xl mr-4"></span>
              <div className="text-left">
                <div className="text-xs uppercase leading-none opacity-80">Download on the</div>
                <div className="text-xl font-bold leading-none mt-1">App Store</div>
              </div>
            </button>
            <button className="flex items-center justify-center bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors shadow-xl">
              <span className="text-2xl mr-4">▶</span>
              <div className="text-left">
                <div className="text-xs uppercase leading-none opacity-80">Get it on</div>
                <div className="text-xl font-bold leading-none mt-1">Google Play</div>
              </div>
            </button>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              "Free trial with limited questions",
              "No credit card required",
              "Upgrade anytime in-app",
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">How to Get Started</h2>
          <p className="text-lg text-gray-600">Three simple steps to elevate your game.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Download the App",
              desc: "Get DiamondIQ from the App Store or Google Play. It's free to download.",
            },
            {
              step: "02",
              title: "Create Your Account",
              desc: "Sign up with your email. Start with our free trial to explore the app.",
            },
            {
              step: "03",
              title: "Start Training",
              desc: "Choose your position, dive into scenarios, and build your baseball IQ.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gray-50 p-8 rounded-2xl border border-gray-100"
            >
              <span className="text-6xl font-display font-black text-accent/20 absolute top-4 right-6">
                {item.step}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Upgrade Options */}
      <Section className="bg-slate-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready for Full Access?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Upgrade to Player, Coach, or Team edition to unlock all 8,000+ scenarios and advanced features.
          </p>
          <Link href="/diamondiq/pricing">
            <button className="px-8 py-4 bg-accent text-white rounded-lg font-bold text-lg hover:bg-accent/90 transition-all inline-flex items-center group" data-testid="button-view-pricing">
              View Pricing Plans
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </Section>

      {/* Gift Subscriptions */}
      <Section className="bg-gray-50">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Gift a Subscription
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Know a player or coach who would love DiamondIQ? Gift them a subscription and help them take their game to the next level.
          </p>
          <button className="px-8 py-4 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition-all" data-testid="button-gift-subscription">
            Purchase a Gift Subscription
          </button>
        </div>
      </Section>

      <DiamondIQFooter />
    </div>
  );
}
