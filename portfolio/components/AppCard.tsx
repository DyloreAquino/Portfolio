import Image from "next/image";
import Link from "next/link";

interface AppCardProps {
  title: string;
  nature: string;
  description: string;
  imgSrc: string;
  href: string;
  tech_stack: string[];
  className?: string; // optional for styling
}

export default function AppCard({ title, nature, description, imgSrc, href, tech_stack, className }: AppCardProps) {
  return (
    <Link href={href} className={`flex justify-center ${className}`}>
      <div className="flex flex-row gap-5 w-200 rounded-xl font-mono bg-background
                      shadow-lg hover:bg-[#09221d] hover:scale-105
                      transition-all duration-75
                      overflow-hidden cursor-pointer">
        {/* GIF */}
        <div className="w-70 h-120 relative shrink-0">
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Text */}
        <div className="pt-5 pr-5 flex flex-col ">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <h3 className="text-m font-bold text-gray-400 pb-2">{nature}</h3>
          <div className="flex flex-row gap-2"> 
            {tech_stack.map((tag) => (
              <span key={tag} className="text-xs w-fit bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-xs mt-3 text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
}
