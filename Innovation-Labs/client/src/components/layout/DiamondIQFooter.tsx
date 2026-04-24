import { Link } from "wouter";
import { Diamond, Mail } from "lucide-react";

export function DiamondIQFooter() {
  const quickLinks = [
    { name: "Home", href: "/diamondiq" },
    { name: "About the App", href: "/diamondiq/about" },
    { name: "Pricing", href: "/diamondiq/pricing" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/diamondiq/help" },
    { name: "Contact Us", href: "/diamondiq/contact" },
    { name: "Subscribe", href: "/diamondiq/subscribe" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/diamondiq" className="flex items-center space-x-3 mb-6">
              <div className="bg-accent p-2 rounded-xl">
                <Diamond className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-display font-black">DiamondIQ</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The missing piece to player development. Master the mental game with DiamondIQ.
            </p>
            <Link href="/" className="text-accent hover:underline text-sm font-medium">
              A Rahret Innovation Labs Product
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Get in Touch</h4>
            <a 
              href="mailto:support@diamondiq.app" 
              className="flex items-center space-x-2 text-gray-400 hover:text-accent transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>support@diamondiq.app</span>
            </a>
            
            {/* Download Buttons */}
            <div className="flex flex-col space-y-3 mt-6">
              <button className="flex items-center bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors text-sm">
                <span className="mr-2"></span>
                <span>App Store</span>
              </button>
              <button className="flex items-center bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors text-sm">
                <span className="mr-2">▶</span>
                <span>Google Play</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()}, Rahret Innovation Labs, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
