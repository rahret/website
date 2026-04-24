import { motion } from "framer-motion";

interface PhoneMockupProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export function PhoneMockup({ imageSrc, alt, className = "" }: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative mx-auto ${className}`}
    >
      <div className="relative rounded-[2.5rem] overflow-hidden border-[14px] border-gray-900 bg-gray-900 shadow-xl max-w-[300px] mx-auto z-10">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-20 flex justify-center">
          <div className="h-4 w-32 bg-black rounded-b-3xl"></div>
        </div>
        
        {/* Screen Content */}
        <div className="relative aspect-[9/19.5] bg-gray-800">
          <img 
            src={imageSrc} 
            alt={alt} 
            className="w-full h-full object-cover" 
          />
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
      
      {/* Shadow behind phone */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/40 blur-2xl -z-10 rounded-full"></div>
    </motion.div>
  );
}
