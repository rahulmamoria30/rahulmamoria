"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

export const slideInVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

interface MotionDivProps extends HTMLMotionProps<"div"> {
  variant?: "container" | "item" | "card" | "fade" | "slide";
  className?: string;
}

export function MotionDiv({ 
  variant = "item", 
  className,
  children,
  ...props 
}: MotionDivProps) {
  const variants = {
    container: containerVariants,
    item: itemVariants,
    card: cardVariants,
    fade: fadeInVariants,
    slide: slideInVariants
  };

  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      animate="visible"
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
} 