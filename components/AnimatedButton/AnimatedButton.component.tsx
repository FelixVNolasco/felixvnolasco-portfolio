import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

type AnimatedButtonTone = "whatsapp" | "linkedin" | "email";

type AnimatedButtonProps = {
  children: ReactNode;
  className?: string;
  tone?: AnimatedButtonTone;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const toneClasses: Record<AnimatedButtonTone, string> = {
  whatsapp: "bg-[#25D366] text-black hover:bg-[#36e277]",
  linkedin: "bg-[#0A66C2] text-white hover:bg-[#1478dc]",
  email: "bg-white text-black hover:bg-[#f1f1f1]",
};

const AnimatedButton = forwardRef<HTMLAnchorElement, AnimatedButtonProps>(
  ({ children, className = "", tone = "email", ...props }, forwardedRef) => (
    <a
      ref={forwardedRef}
      className={`flex min-h-[3.75rem] flex-1 items-center justify-center gap-3 rounded-lg px-5 text-center font-geist-mono text-[11px] font-bold uppercase shadow-none transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.025] hover:shadow-[0_18px_34px_rgba(255,255,255,0.16)] focus-visible:-translate-y-1 focus-visible:scale-[1.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[4.5rem] sm:min-w-[13rem] sm:px-8 sm:text-[13px] ${toneClasses[tone]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
