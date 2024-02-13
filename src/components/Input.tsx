import { ChangeEvent } from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ type, placeholder, onChange }: InputProps) {
  return (
    <input
      className="font-medium py-2 px-2 outline-none bg-transparent text-xl font-base text-white rounded-md border border-slate-700"
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      step="0.01"
      required
    />
  );
}
