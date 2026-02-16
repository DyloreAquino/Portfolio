import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  gifSrc: string;
  href: string;
  className?: string; // optional for styling
}

export default function Card({ title, description, gifSrc, href, className }: CardProps) {
  return (
    <Link href={href} className={`block ${className}`}>
        <div className="flex flex-col w-64 rounded-xl overflow-hidden bg-[#1e453e] shadow-lg hover:bg-black hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
        {/* GIF */}
        <div className="w-full h-40 relative">
            <Image
            src={gifSrc}
            alt={title}
            fill
            className="object-cover rounded-t-xl"
            />
        </div>

        {/* Text */}
        <div className="p-4 flex flex-col gap-2 font-mono">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-300">{description}</p>
        </div>
        </div>
    </Link>
  );
}
