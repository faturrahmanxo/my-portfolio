import { Sparkle } from "lucide-react";

export default function Badge({ children }) {
  return (
    <div className="">
      <span className="text-xs font-medium text-gray-400">{children}</span>
    </div>
  );
}
