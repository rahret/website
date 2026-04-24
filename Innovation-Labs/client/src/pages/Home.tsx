import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Link } from "wouter";
import { ArrowRight, Monitor, Cpu, Target, Layers } from "lucide-react";
import { motion } from "framer-motion";
import screenshotImg1 from "@assets/uploaded_images/landing_screenshot03.png";
import screenshotImg2 from "@assets/uploaded_images/situation_screenshot01.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center bg-primary text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium tracking-widest mb-6"
            >
              WELCOME TO THE FUTURE OF SPORTS TECH
            </motion.span>
            */}
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-tight mb-8"
            >
              WE CREATE VALUE,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                NOT JUST PRODUCTS.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We are a bootstrapped design house with a systems engineering approach and first principles mindset. <br />We build digital and physical products that add value to our customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/diamondiq">
                <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-accent/30 hover:-translate-y-1 w-full sm:w-auto">
                  Discover Our Products
                </button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-lg font-bold text-lg transition-all backdrop-blur-sm w-full sm:w-auto">
                  About The Lab
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Corporate Capabilities 
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">Innovation at Scale</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technology to create solutions that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              icon: <Cpu className="w-10 h-10 text-accent" />,
              title: "Cognitive Processing",
              description: "Our algorithms simulate real-game pressure to train the brain's decision-making centers."
            },
            {
              icon: <Target className="w-10 h-10 text-accent" />,
              title: "Precision Analytics",
              description: "Data-driven insights that pinpoint exactly where an athlete needs to focus their mental training."
            },
            {
              icon: <Layers className="w-10 h-10 text-accent" />,
              title: "Adaptive Learning",
              description: "Systems that evolve with the user, ensuring the challenge level always matches the skill level."
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="mb-6 p-4 bg-white rounded-xl shadow-sm inline-block group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>*/}
      {/* Featured Product: DiamondIQ */}
      <Section className="bg-slate-800 text-white overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 lg:order-1">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Flagship Product</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              DiamondIQ
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The missing piece to player development. <br />DiamondIQ builds situational instinct through accelerated quiz training.
            </p>
            
            <ul className="space-y-2 mb-10">
              {['Game Situation Mastery', 'Instant Feedback Loop', 'Coach & Player Modes'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-lg font-medium">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/diamondiq">
              <button className="px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center group">
                Explore DiamondIQ
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          
          <div className="order-2 lg:order-2 relative flex flex-col md:flex-row justify-center items-center gap-6">
            <img src={screenshotImg1}
              alt="DiamondIQ Landing Screen"
              className="rounded-xl w-80"/>
             {/* Use a sports-related abstract image or a specific placeholder if no screenshot available */}
            <img src={screenshotImg2}
              alt="DiamondIQ Stats Screen"
              className="rounded-xl w-80"/>
             
                
                
                
             
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
