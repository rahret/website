import { Link } from "wouter";
import { MonitorSmartphone, Mail, MapPin} from "lucide-react";
import { SiX, SiInstagram} from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-white/10 p-2 rounded-lg">
                <MonitorSmartphone className="h-6 w-6 text-white" />
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
            <p className="text-white-200 max-w-sm leading-relaxed font-bold">
              Our Motto</p>
              <p className="text-gray-300 max-w-sm leading-relaxed">Have Fun<br />Learn Lots<br />Try Your Best<br />Lead With Kindness
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/diamondiq" className="text-gray-300 hover:text-accent transition-colors">
                  DiamondIQ App
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>Ankeny, IA</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@rahret.com" className="hover:text-white transition-colors">
                  lyle@rahretinnovationlabs.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
                <SiInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
                <SiX className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rahret Innovation Labs, LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
