interface HeaderProps {
  children: React.ReactNode;
  className?: string; // optional for styling
}

export default function Header({ children, className}: HeaderProps) {
  return (
    <div className={`block ${className}`}>
      <h1
        className="pt-10 pb-5 font-mono text-3xl font-semibold"
      >
        {children}
      </h1>
    </div>
  );
}
