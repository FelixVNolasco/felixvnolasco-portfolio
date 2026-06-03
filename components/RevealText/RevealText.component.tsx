import {
  forwardRef,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ForwardedRef,
  type ReactNode,
} from "react";

type RevealTextVariant =
  | "auto"
  | "hero"
  | "heading"
  | "body"
  | "list"
  | "link"
  | "card";

type RevealTextProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealTextVariant;
} & ComponentPropsWithoutRef<"a"> &
  ComponentPropsWithoutRef<"p">;

const getAnimationSettings = (
  variant: RevealTextVariant,
  text: string,
  top: number
) => {
  const isAboveFold = top < window.innerHeight * 0.75;
  const normalizedVariant =
    variant !== "auto"
      ? variant
      : text.length > 90
      ? "body"
      : isAboveFold
      ? "hero"
      : "heading";

  const settings = {
    hero: {
      from: { opacity: 0, y: 34, filter: "blur(8px)" },
      to: { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
    },
    heading: {
      from: { opacity: 0, x: -28, clipPath: "inset(0 100% 0 0)" },
      to: {
        opacity: 1,
        x: 0,
        clipPath: "inset(0 0% 0 0)",
        duration: 0.75,
      },
    },
    body: {
      from: { opacity: 0, y: 22 },
      to: { opacity: 1, y: 0, duration: 0.7 },
    },
    list: {
      from: { opacity: 0, x: -18 },
      to: { opacity: 1, x: 0, duration: 0.55 },
    },
    link: {
      from: { opacity: 0, y: 14 },
      to: { opacity: 1, y: 0, duration: 0.5 },
    },
    card: {
      from: { opacity: 0, y: 24, scale: 0.96 },
      to: { opacity: 1, y: 0, scale: 1, duration: 0.55 },
    },
  };

  return { isAboveFold, ...settings[normalizedVariant] };
};

const assignRef = (
  ref: ForwardedRef<HTMLElement>,
  element: HTMLElement | null
) => {
  if (typeof ref === "function") {
    ref(element);
    return;
  }

  if (ref) {
    ref.current = element;
  }
};

const RevealText = forwardRef<HTMLElement, RevealTextProps>(
  (
    {
      as: Component = "span",
      children,
      className,
      delay = 0,
      variant = "auto",
      ...props
    },
    forwardedRef
  ) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    if (typeof window.matchMedia !== "function") {
      element.style.opacity = "1";
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      element.style.opacity = "1";
      return undefined;
    }

    let context: { revert: () => void } | undefined;
    let isMounted = true;

    const animate = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!isMounted) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        const text = element.textContent?.trim() ?? "";
        const { from, isAboveFold, to } = getAnimationSettings(
          variant,
          text,
          element.getBoundingClientRect().top
        );

        gsap.fromTo(element, from, {
          ...to,
          delay,
          ease: "power3.out",
          scrollTrigger: isAboveFold
            ? undefined
            : {
                trigger: element,
                start: "top 86%",
                once: true,
              },
        });
      }, element);
    };

    animate();

    return () => {
      isMounted = false;
      context?.revert();
    };
  }, [delay, variant]);

  return (
    <Component
      ref={(element: HTMLElement | null) => {
        elementRef.current = element;
        assignRef(forwardedRef, element);
      }}
      className={className}
      {...props}
      style={props.style}
    >
      {children}
    </Component>
  );
  }
);

RevealText.displayName = "RevealText";

export default RevealText;
