import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function Button({ 
  children, 
  loading, 
  variant = 'primary', 
  className = '', 
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-yellow-400 hover:bg-yellow-500 text-black focus:ring-yellow-400",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white focus:ring-gray-800",
    outline: "border-2 border-gray-300 hover:border-gray-400 focus:ring-gray-300"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <Loader2 className="animate-spin" size={16} />
          Loading...
        </span>
      ) : children}
    </button>
  );
}