import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("container mx-auto px-4 py-12 md:py-14", className)}>
      {(title || subtitle) && (
        <header className="text-center mb-8 md:mb-10">
          {title && (
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
          )}
          {subtitle && (
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}

