import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />

      {/*<div className="bg-primary text-white pt-32 pb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-center">About Us</h1>
          {/*<p className="text-xl text-gray-300 max-w-2xl">
            We are a collective of developers, coaches, and data scientists dedicated to the future of sports.
          </p>
        </div>
      </div> */}

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Innovating at the intersection of Athletics and Analytics.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 2026, Rahret Innovation Labs, LLC was formed by a Mechanical Engineer with experience in manufacting, product design, product testing, and systems engineering, over a 15 year career.
              </p>
              <p>
                We believe that the next frontier in sports performance isn't physical—it's cognitive. Our mission is to build accessible, high-fidelity training tools that help athletes maximize their potential by mastering the mental aspect of their game.
              </p>
              <p>
                With DiamondIQ, our flagship product, we are proving that game instinct is a skill that can be taught, practiced, and perfected.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
            {/* team meeting or coding generic image */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
              alt="Team Collaboration" 
              className="rounded-2xl shadow-lg relative z-10 w-full"
            />
          </div>
        </div>
      </Section>
      
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Innovating at the intersection of Athletics and Analytics.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 2026, Rahret Innovation Labs, LLC was formed by an Engineer with experience in manufacting, product design, product testing, and systems engineering, over a 15 year career.
              </p>
              <p>
                We believe that the next frontier in sports performance isn't physical—it's cognitive. Our mission is to build accessible, high-fidelity training tools that help athletes maximize their potential by mastering the mental aspect of their game.
              </p>
              <p>
                With DiamondIQ, our flagship product, we are proving that game instinct is a skill that can be taught, practiced, and perfected.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
            {/* team meeting or coding generic image */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
              alt="Team Collaboration" 
              className="rounded-2xl shadow-lg relative z-10 w-full"
            />
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
