import { clsx } from "clsx";
import Container from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "cream" | "navy" | "teal" | "gradient";
  containerSize?: "default" | "narrow" | "wide";
  id?: string;
}

export default function Section({
  children,
  className,
  background = "white",
  containerSize = "default",
  id,
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    cream: "bg-cream",
    navy: "bg-navy text-white",
    teal: "bg-teal text-white",
    gradient: "gradient-navy text-white",
  };

  return (
    <section
      id={id}
      className={clsx("section-padding", backgrounds[background], className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
