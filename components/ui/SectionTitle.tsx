import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
};

export const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
}: SectionTitleProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-3xl ${alignClass} ${className ?? ""}`}>
      {eyebrow ? <p className="mb-3 text-xs uppercase tracking-[0.26em] text-gold-400/80">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl text-stone-100 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-stone-300">{description}</p> : null}
      {children}
    </header>
  );
};
