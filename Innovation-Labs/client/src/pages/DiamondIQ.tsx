import { DiamondIQNavbar } from "@/components/layout/DiamondIQNavbar";
import { DiamondIQFooter } from "@/components/layout/DiamondIQFooter";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { CheckCircle2, BrainCircuit, Zap, Users, Trophy } from "lucide-react";
import screenshotImg1 from "@assets/uploaded_images/landing_screenshot03.png";
import screenshotImg2 from "@assets/uploaded_images/situation_screenshot01.png";
import { Link } from "wouter";

export default function DiamondIQ() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <DiamondIQNavbar />

      {/* Hero Section */}
      <div className="bg-primary pt-32 pb-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-display font-black text-white leading-tight mb-6"
            >
              MENTAL REPS<br/>
              <span className="text-accent">MADE FUN</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-300 font-light"
            >
              The missing piece to player development. <br />Build situational instinct through accelerated quiz training.
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {/* Phone Mockup 1 */
            
              /* baseball field diagram app screen */}
              <img src={screenshotImg1}
              alt="DiamondIQ Landing Screen"
              className="rounded-xl w-80"/>
            
             {/* Phone Mockup 2
            
              baseball stats screen*/}
              <img src={screenshotImg2}
              alt="DiamondIQ Stats Screen"
              className="rounded-xl w-80"/>
          </div>
          
          {/* Download Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-4 mt-16"
          >
            {/* Fake App Store Buttons */}
            <button className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors shadow-lg shadow-black/25">
               <span className="text-2xl mr-3"></span>
               <div className="text-left">
                 <div className="text-[10px] uppercase leading-none">Download on the</div>
                 <div className="text-base font-bold leading-none mt-1">App Store</div>
               </div>
            </button>
            <button className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors shadow-lg shadow-black/25">
               <span className="text-xl mr-3">▶</span>
               <div className="text-left">
                 <div className="text-[10px] uppercase leading-none">Get it on</div>
                 <div className="text-base font-bold leading-none mt-1">Google Play</div>
               </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">Why DiamondIQ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Traditional coaching focuses on mechanics. We focus on the mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <BrainCircuit className="w-12 h-12 text-accent" />,
              title: "Game Awareness",
              desc: "Develop a deeper understanding of situational baseball. Know where the ball goes before it's pitched."
            },
            {
              icon: <Zap className="w-12 h-12 text-accent" />,
              title: "Instinct Development",
              desc: "Convert conscious thought into automatic reaction. Speed up your play by slowing down the game."
            },
            {
              icon: <Users className="w-12 h-12 text-accent" />,
              title: "Age-Appropriate",
              desc: "Content tailored for every level, from Little League to Collegiate play. Grow with the game."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="inline-flex p-4 bg-primary/5 rounded-2xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Social Proof / Stats
      <Section className="bg-primary text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            { label: "Scenarios", value: "8,000+" },
            { label: "Active Users", value: "12k+" },
            { label: "Coaches Trust Us", value: "500+" },
            { label: "App Store Rating", value: "4.9 ★" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-gray-300 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section> */}

      {/* Testimonial
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-8" />
          <blockquote className="text-2xl md:text-4xl font-display font-bold text-gray-900 leading-relaxed mb-8">
            "DiamondIQ does for baseball IQ what the batting tee did for swing mechanics. It's an essential tool for any serious player."
          </blockquote>
          <cite className="not-italic flex flex-col items-center">
            <span className="font-bold text-primary text-lg">Coach Mike Thompson</span>
            <span className="text-gray-500">Varsity Head Coach, 20 Years Exp.</span>
          </cite>
        </div>
      </Section> */}

      {/* Final CTA */}
      <Section className="bg-gray-50 border-t border-gray-200">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Ready to Play Smarter?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Join the ranks of players and coaches elevating their game with DiamondIQ.
            </p>
            <Link href="/diamondiq/subscribe">
            <button className="px-10 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 text-lg" data-testid="button-free-trial">
              Start Your Free Trial
            </button>
            </Link>
          </div>
        </div>
      </Section>

      <DiamondIQFooter />
    </div>
  );
}
