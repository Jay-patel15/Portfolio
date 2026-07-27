import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
};

export default function Card({ children, className, as = "div" }: CardProps) {
  const Tag = as;

  return (
    <Tag
      className={clsx(
        "rounded-2xl border border-line bg-surface p-6 shadow-card transition-shadow duration-300 hover:border-line-strong hover:shadow-card-hover",
        className
      )}
    >
      {children}
    </Tag>
  );
}
