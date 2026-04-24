import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export function Section({ children, className, id, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 relative overflow-hidden", className)}>
      <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
