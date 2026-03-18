interface HeaderProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function Header({ children, subtitle, className }: HeaderProps) {
  return (
    <div className={`text-center mb-4 ${className}`}>
      <h1 className="text-4xl font-bold font-mono mb-2">
        {children}
      </h1>
      {subtitle && (
        <p className="text-gray-400 font-mono text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
}