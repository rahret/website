import { Link, useLocation } from "wouter";
import { Menu, X, MonitorSmartphone, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Rlogo from "@assets/uploaded_images/Rlogo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Products", 
      href: "#", 
      dropdown: [
        { name: "DiamondIQ", href: "/diamondiq" }
      ] 
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary text-primary-foreground shadow-lg py-3"
          : "bg-transparent text-primary-foreground py-5" // Transparent on top of hero images
      }`}
      // Force background if not on home/landing pages that have dark heroes
      style={
        !scrolled && location !== "/" && location !== "/diamondiq"
          ? { backgroundColor: "hsl(var(--primary))" }
          : {}
      }
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-colors">
              <img src={Rlogo} alt="Rahret Logo" className="w-10 h-10 object-contain" />
          {/* <MonitorSmartphone className="h-6 w-6 text-white" /> */}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold tracking-tight leading-none">
                RAHRET
              </span>
              <span className="text-xs font-medium opacity-80 tracking-widest">
                INNOVATION LABS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    onMouseEnter={() => setIsProductsOpen(true)}
                    className={`flex items-center space-x-1 text-sm font-semibold uppercase tracking-wider hover:text-accent transition-colors ${
                      location.startsWith("/diamondiq") ? "text-accent" : "text-white/90"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onMouseLeave={() => setIsProductsOpen(false)}
                        className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 overflow-hidden border border-slate-100"
                      >
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-primary hover:bg-slate-50 hover:text-accent transition-colors font-bold"
                            onClick={() => setIsProductsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-wider hover:text-accent transition-colors ${
                    location === link.href ? "text-accent border-b-2 border-accent" : "text-white/90"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link href="/diamondiq">
              <button className="px-4 py-2 bg-accent text-white rounded-full font-bold text-sm hover:bg-accent/90 transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-accent/25">
                <span>DIAMONDIQ APP</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
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
            className="md:hidden bg-primary border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col space-y-2">
                  {link.dropdown ? (
                    <>
                      <span className="text-lg font-bold text-white/50 uppercase text-xs tracking-widest">{link.name}</span>
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`text-lg font-bold pl-4 ${
                            location === subItem.href ? "text-accent" : "text-white"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-lg font-bold ${
                        location === link.href ? "text-accent" : "text-white"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/diamondiq" onClick={() => setIsOpen(false)}>
                <button className="w-full py-3 mt-4 bg-accent text-white rounded-lg font-bold uppercase tracking-wider">
                  Download App
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
