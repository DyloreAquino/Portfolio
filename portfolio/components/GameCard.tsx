import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
  title: string;
  nature: string;
  description: string;
  gifSrc: string;
  href: string;
  tech_stack: string[];
  className?: string; // optional for styling
}

export default function GameCard({ title, nature, description, gifSrc, href, tech_stack, className }: GameCardProps) {
  return (
    <Link href={href} className={`flex justify-center ${className}`}>
      <div className="flex flex-row w-240 rounded-xl 
                      overflow-hidden bg-background
                      shadow-lg hover:bg-[#1e453e]
                      transition-all duration-100 cursor-pointer">
        {/* GIF */}
        <div className="w-70 h-48 relative shrink-0">
          <Image
            src={gifSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="p-4 flex flex-col gap-2 font-mono">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <h3 className="text-m font-bold text-gray-400">{nature}</h3>
          {tech_stack.map((tag) => (
            <span key={tag} className="text-xs w-fit bg-white/10 text-gray-300 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
          <p className="text-xs mt-3 text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
}
