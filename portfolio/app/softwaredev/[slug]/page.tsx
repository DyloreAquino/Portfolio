"use client"
import Header from "@/components/Header";
import { apps } from "@/data/apps";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";

export default function GamePage({ params }: { params: Promise<{slug: string}>}) {
  const { slug } = use(params)
  const app = apps[slug]
  if (!app) notFound()    
  const galleryRef = useRef<ImageGalleryRef>(null);

  return (    
    <div className="flex flex-col">
      <Header className="text-center pb-4 mb-0">
        <span className="text-xs font-mono text-gray-400 tracking-widest uppercase block mb-2">
          softwareDev / {app.category}
        </span>
        {app.title}
        <span className="text-green-400">.</span>
        <span className="text-xs font-mono font-extralight block mt-2">{app.description}</span>
      </Header>

      {app.github && (
        <Link 
          href={app.github}
          className="hover:text-gray-500 transition-colors duration-75 font-mono font-bold text-center text-xl mb-10"
        >
          🔗 github
        </Link>
      )}

      {app.link && (
        <Link 
          href={app.link}
          className="hover:text-gray-500 transition-colors duration-75 font-mono font-bold text-center text-xl"
        >
          🔗 link
        </Link>
      )}

      {app.images && app.images.length > 0 && (
        <ImageGallery
          ref={galleryRef}
          items={app.images}
          onSlide={(index) => console.log("Slid to", index)}
        />
      )}
    </div>
  )
}