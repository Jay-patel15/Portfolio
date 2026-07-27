import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  target,
  rel,
  onClick,
  variant = "solid",
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:-translate-y-0 disabled:active:scale-100",
    variant === "solid" && "bg-ink text-bg hover:bg-accent hover:text-white",
    variant === "ghost" &&
      "border border-line-strong text-ink hover:border-accent hover:text-accent",
    className
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
