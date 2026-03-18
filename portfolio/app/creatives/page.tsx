"use client";

import Header from "@/components/Header";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem } from "react-image-gallery";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "@/components/Model";
import { Html, useProgress } from "@react-three/drei";
import { Environment } from "@react-three/drei";

// Loader component with progress
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white text-sm font-mono">{progress.toFixed(0)}%</div>
    </Html>
  );
}

interface BlenderModel {
  title: string;
  filename: string;
  animation?: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

interface ProducedWork {
  title: string;
  artist: string;
  audioSrc: string;
}

export default function CreativesPage() {
  // Art gallery
  const artworks: GalleryItem[] = [
    {
      original: "/art/drawing1.jpg",
      thumbnail: "/art/drawing1.jpg",
    },
    {
      original: "/art/drawing2.jpg",
      thumbnail: "/art/drawing2.jpg",
    },
    {
      original: "/art/drawing3.jpg",
      thumbnail: "/art/drawing3.jpg",
    },
    {
      original: "/art/drawing4.jpg",
      thumbnail: "/art/drawing4.jpg",
    },
  ];

  // Blender models
  const blenderModels: BlenderModel[] = [
    {
      title: "Tin Can",
      filename: "tincan.glb",
      animation: "Idle_loop",
      position: [0, -1.2, 0],
      rotation: [0, Math.PI, 0],
      scale: 0.75,
    },
    {
      title: "TPS Player",
      filename: "tps_player.glb",
      animation: "Idle",
      position: [0, -1.5, 0],
      rotation: [0, 2*Math.PI, 0],
      scale: 0.75,
    },
    {
      title: "Action Adventure Player",
      filename: "player_test_1.glb",
      animation: "Idle",
      position: [0, -2, 0],
      rotation: [0, 2*Math.PI, 0],
      scale: 0.75,
    },
    {
      title: "Bluetie",
      filename: "Bluetie.glb",
      animation: "Idle",
      position: [0, -0.7, 0],
      rotation: [0, 2*Math.PI, 0],
      scale: 1.1,
    },
    {
      title: "Calm",
      filename: "Calm.glb",
      position: [0, -0.3, 0],
      rotation: [0, Math.PI, 0],
      scale: 0.75,
    },
    {
      title: "Lookie",
      filename: "Lookie.glb",
      position: [0, -0, 0],
      rotation: [0, Math.PI, 0],
      scale: 0.6,
    },
    {
      title: "Piney",
      filename: "Piney.glb",
      position: [0, -0.1, 0],
      rotation: [0, Math.PI, 0],
      scale: 0.5,
    },
  ];

  // Produced works
  const producedWorks: ProducedWork[] = [
    {
      title: "Sablay",
      artist: "Dylore (Me)",
      audioSrc: "/Music/Dylore_Sablay.mp3",
    },
    {
      title: ".ofu (unreleased)",
      artist: "Dylore",
      audioSrc: "/Music/ofudemo3.mp3",
    },
    {
      title: "u i (unreleased)",
      artist: "Dylore",
      audioSrc: "/Music/uidemo3.mp3",
    },
    {
      title: "Casper",
      artist: "Janna",
      audioSrc: "/Music/Janna_Casper_Final.mp3",
    },
    {
      title: "Blue (Unreleased)",
      artist: "Dylore",
      audioSrc: "/Music/Blue_final_demo_wovox_1.mp3",
    },
    {
      title: "kurtina (demo)",
      artist: "Dylore",
      audioSrc: "/Music/kurtina.mp3",
    },
    {
      title: "unan (demo)",
      artist: "Dylore",
      audioSrc: "/Music/unan.mp3",
    },
    {
      title: "rnb (demo)",
      artist: "Dylore",
      audioSrc: "/Music/rnbdemo1.mp3",
    },
  ];

  return (
    <div className="flex flex-col gap-16 w-full max-w-6xl mx-auto px-4 font-mono py-12">
      <Header subtitle="music, visual art, and 3D design.">
        creatives
      </Header>

      {/* Section 1: Album */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Likod ng Notebook</h2>
          <p className="text-gray-400 text-sm">
            A fully produced, written, recorded, and performed album by Dylore.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <iframe
              style={{
                borderRadius: "12px",
              }}
              src="https://open.spotify.com/embed/album/1FuPkDKxcHUjAMOTrypUZN?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Likod ng Notebook - Spotify"
            />
          </div>
          <div className="flex-1 space-y-3 text-sm text-gray-400 leading-relaxed">
            <p>
              Likod ng Notebook is a personal project that represents my journey as a musician and producer. Each track was meticulously crafted, from composition to the final mix, capturing raw emotion and musical exploration.
            </p>
            <p>
              Available on all major streaming platforms. Listen now on Spotify.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Umiikot */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Umiikot</h2>
          <p className="text-gray-400 text-sm">
            A song made for the Ateneo Musician's Pool Final Producers Project "INIT".
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/track/1jrWKVK38NF1EJ0BS1vzUY?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div className="flex-1 space-y-3 text-sm text-gray-400 leading-relaxed">
            <p>
              A project I did with my fellow producers of the Ateneo Musician's Pool, capturing the theme of "INIT"
            </p>
            <p>
              This was a fun little song that showcases how much our language blends with current trending music genres like electronic hyperpop.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Xentromall Theme */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Xentromall Theme</h2>
          <p className="text-gray-400 text-sm mb-4">
            Written and recorded with Sir Darren Bancod
          </p>
        </div>
        <div className="space-y-4 mb-6">
          <p className="text-gray-400 text-sm leading-relaxed">
            The Xentromall Theme is an original composition created in collaboration with Sir Darren Bancod. This piece serves as the official theme for Xentromall, blending modern production with a distinctive sonic identity that captures the essence of the brand.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            The composition showcases a balance of melody and rhythm, designed to be memorable and engaging. Every element—from the arrangement to the final mix—was carefully crafted to create a professional and polished theme that stands out.
          </p>
          <a
            href="https://www.facebook.com/reel/1188665465471585"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 border border-gray-400 rounded hover:bg-gray-900 transition-colors text-sm font-mono"
          >
            🔗 view on facebook
          </a>
        </div>
        <div className="bg-black/30 rounded-lg p-6">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FXentroMallOfficial%2Fvideos%2F1188665465471585%2F&show_text=false&width=560&t=0"
            width="560"
            height="314"
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Xentromall Theme"
          />
        </div>
      </section>

      {/* Section 4: Blender Models */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">3D Models</h2>
          <p className="text-gray-400 text-sm">
            A collection of 3D models created in Blender.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {blenderModels.map((model) => (
            <div key={model.title} className="group relative">
              <div className="rounded-lg overflow-hidden bg-gray-900 h-64 border border-gray-700">
                <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
                  <Suspense fallback={null}>
                    <Environment preset="forest" />
                    <Model 
                      model_filename={model.filename}
                      animation={model.animation}
                      position={model.position}
                      rotation={model.rotation}
                      scale={model.scale}
                    />
                  </Suspense>
                </Canvas>
              </div>
              <p className="mt-2 text-sm text-gray-400">{model.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Production Work */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Music Production</h2>
          <p className="text-gray-400 text-sm">
            Produced music for various artists.
          </p>
        </div>
        <div className="space-y-6">
          {producedWorks.map((work) => (
            <div
              key={work.title}
              className="border border-gray-700 rounded-lg p-6 space-y-4"
            >
              <div>
                <h3 className="text-lg font-bold">{work.title}</h3>
                <p className="text-gray-400 text-sm">by {work.artist}</p>
              </div>
              <audio
                controls
                className="w-full"
                style={{ accentColor: "#22c55e" }}
                crossOrigin="anonymous"
              >
                <source src={work.audioSrc.replace(/\.wav$/, ".mp3")} type="audio/mpeg" />
                <source src={work.audioSrc} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}