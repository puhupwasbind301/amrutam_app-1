import { ReactNode } from "react";

interface CategoryPillProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const CategoryPill = ({ icon, label, isActive, onClick }: CategoryPillProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 px-6 py-3 rounded-full transition-all ${
        isActive 
          ? "bg-forest text-primary-foreground" 
          : "bg-card border border-border hover:border-forest/30"
      }`}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
        isActive ? "bg-primary-foreground/20" : "bg-sage"
      }`}>
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};
