import { Link, useLocation } from "wouter";
import { Menu, X, Diamond } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/uploaded_images/diamond_logo001.jpeg";

export function DiamondIQNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/diamondiq" },
    { name: "About the App", href: "/diamondiq/about" },
    { name: "Subscribe", href: "/diamondiq/subscribe" },
    { name: "Contact Us", href: "/diamondiq/contact" },
    { name: "Pricing", href: "/diamondiq/pricing" },
    { name: "Help", href: "/diamondiq/help" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900 text-white shadow-lg py-3"
          : "bg-transparent text-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/diamondiq" className="flex items-center space-x-3 group">
            <div className="bg-accent p-2 rounded-xl group-hover:scale-105 transition-transform">
              {/*<Diamond className="h-7 w-7 text-white" />*/}
              <img src={logoImg} alt="DiamondIQ Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-display font-bold tracking-tight uppercase tracking-tight">
                DiamondIQ
              </span>
              
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-wide hover:text-accent transition-colors ${
                  location === link.href ? "text-accent" : "text-white/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/diamondiq/subscribe">
              <button className="px-5 py-2.5 bg-accent text-white rounded-lg font-bold text-sm hover:bg-accent/90 transition-all shadow-lg shadow-accent/25" data-testid="button-get-started">
                GET STARTED
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-semibold py-2 ${
                    location === link.href ? "text-accent" : "text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/diamondiq/subscribe" onClick={() => setIsOpen(false)}>
                <button className="w-full py-3 mt-4 bg-accent text-white rounded-lg font-bold" data-testid="button-mobile-get-started">
                  Get Started
                </button>
              </Link>
              <div className="pt-4 border-t border-white/10">
                <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                  Back to Rahret Innovation Labs
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
