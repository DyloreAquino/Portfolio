import Image from "next/image";

interface TextImageProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface TextOnlyProps {
  title: string;
  description: string;
  accentBorder?: boolean;
}

// Text Left, Image Right
export function TextLeftImageRight({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
}: TextImageProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1 space-y-3">
        <h2 className="text-2xl font-bold font-mono">{title}</h2>
        {subtitle && (
          <p className="text-gray-300 font-mono text-sm uppercase tracking-wide">
            {subtitle}
          </p>
        )}
        <p className="text-gray-400 font-mono leading-relaxed text-sm">{description}</p>
      </div>
      <div className="flex-1">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={300}
          className="rounded-lg object-cover w-full h-64"
        />
      </div>
    </div>
  );
}

// Text Only
export function TextOnly({
  title,
  description,
  accentBorder = false,
}: TextOnlyProps) {
  return (
    <div
      className={`space-y-3 py-6 ${
        accentBorder ? "border-l-2 border-green-400 pl-6" : ""
      }`}
    >
      <h2 className="text-2xl font-bold font-mono">{title}</h2>
      <p className="text-gray-400 font-mono leading-relaxed text-sm">{description}</p>
    </div>
  );
}

// Text Right, Image Left
export function TextRightImageLeft({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
}: TextImageProps) {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
      <div className="flex-1 space-y-3">
        <h2 className="text-2xl font-bold font-mono">{title}</h2>
        {subtitle && (
          <p className="text-gray-300 font-mono text-sm uppercase tracking-wide">
            {subtitle}
          </p>
        )}
        <p className="text-gray-400 font-mono leading-relaxed text-sm">{description}</p>
      </div>
      <div className="flex-1">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={300}
          className="rounded-lg object-cover w-full h-64"
        />
      </div>
    </div>
  );
}