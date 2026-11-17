/**
 * Framer Motion Animation Variants
 * Consistent, subtle, performance-optimized animations.
 */

export const transitions = {
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
  smooth: {
    type: "tween",
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.4,
  },
  subtle: {
    duration: 0.2,
    ease: "easeInOut",
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: custom * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: custom * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export const slideDown = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const cardHover = {
  rest: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  hover: {
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const modalContent = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 16,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};
