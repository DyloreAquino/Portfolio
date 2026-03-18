"use client";
import Header from "@/components/Header";
import Card from "@/components/Card";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from '@react-three/drei'
import Model from "@/components/Model";
import { Environment } from "@react-three/drei";
import ParallaxLayer from "@/components/ParallaxLayer";

// To load the models faster. from https://medium.com/@arslaniqbalmgt/3d-website-in-next-js-13-with-loader-848bf898caa 
function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed()}%</Html>
}

export default function Home() {
  return (
    <div className="flex flex-col gap-2 w-full items-center">
      <ParallaxLayer position="inline" speed={10}>
      <div className="flex flex-row gap-2 w-full items-center">
        {/*Right Model Section*/}
          <div style={{height:"300px", width: "400px"}}>
            <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
              <Environment preset="forest"/>
              <Suspense fallback={<Loader />}>
                <Model model_filename={"tincan.glb"}/>
              </Suspense>
            </Canvas>
          </div>

        {/*Right Text Section*/}
        <div className="flex flex-col gap-2 w-full items-center text-center">
            <Header className="hover:scale-105 hover:text-green-200 transition-all duration-75 cursor-pointer">
              <a href="/info">
                je / dylore / jerold.
              </a>
            </Header>
            <p className="font-mono font-light text-gray-400">
              Software Engineer / Game Developer / Music Producer / Artist / Storyteller.
            </p>

            <p className="font-mono font-light text-gray-400">
              Currently studying BS Computer Science - Digital Game Design and Development in Ateneo de Manila University.
            </p>
        </div>
      </div>
      </ParallaxLayer>
      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 pt-16 w-full">
        <Card
          title="gameDev"
          description="A showcase of my experience in video game systems development."
          gifSrc="/gameDev.gif"
          href="/gamedev">
        </Card>
        <Card
          title="softwareDev"
          description="Programs and software to improve quality of life and efficiency."
          gifSrc="/softwareDev.gif"
          href="/softwaredev">
        </Card>
        <Card
          title="leadership"
          description="Stories and projects that tell of my leadership expertise."
          gifSrc="/leadership.gif"
          href="/leadership">
        </Card>
        <Card
          title="creatives"
          description="My art in different forms: music, drawing, 3D modelling."
          gifSrc="/creatives.gif"
          href="/creatives">
        </Card>
      </div>
    </div>
  );
}
