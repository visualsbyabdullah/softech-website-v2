import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-extrabold",
    "transition-[transform,background-color,color,border-color]",
    "duration-300",
    "focus-visible:outline-none",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-interactive",
          "text-interactive-text",
          "hover:-translate-y-0.5",
          "hover:bg-interactive-hover",
          "hover:text-on-brand",
        ],
        brand: [
          "bg-brand",
          "text-on-brand",
          "hover:-translate-y-0.5",
          "hover:bg-brand-hover",
        ],
        secondary: [
          "border border-line-strong",
          "bg-panel",
          "text-ink",
          "hover:-translate-y-0.5",
          "hover:bg-panel-soft",
        ],
        ghost: [
          "bg-transparent",
          "text-ink",
          "hover:bg-panel-soft",
        ],
      },
      size: {
        sm: "h-10 px-4 text-xs",
        md: "h-12 px-5 text-sm",
        lg: "h-14 px-7 text-sm",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
