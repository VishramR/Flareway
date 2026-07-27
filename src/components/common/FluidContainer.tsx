import { ReactNode } from "react";

interface FluidContainerProps {
  children: ReactNode;
  className?: string;
}

export default function FluidContainer({
  children,
  className = "",
}: FluidContainerProps) {
  return <div className={`w-full ${className}`}>{children}</div>;
}
