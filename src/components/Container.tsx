import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="bg-slate-800  p-3 w-[610px] h-[200px] border border-slate-700 flex justify-center  rounded">
      {children}
    </div>
  );
}
