import Image from "next/image";
import Header from "@/components/Header";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-2 w-full items-center">
      <Header className="hover:scale-105 hover:text-green-200 transition-all duration-200 cursor-pointer">
        <a href="/info">
        je / dylore / jerold.
        </a>
      </Header>
      <p className="font-mono font-light">
        Software Engineer / Game Developer / Music Producer / Artist / Storyteller.
      </p>
      <p className="font-mono font-light">
        Currently studying BS Computer Science - Digital Game Design and Development in Ateneo de Manila University.
      </p>
      <div className="flex flex-wrap justify-center gap-8 pt-16 w-full">
        <Card
          title="gameDev"
          description="A showcase of my experience in video game systems development."
          gifSrc="/test1.gif"
          href="/gameDev">
        </Card>
        <Card
          title="softwareDev"
          description="Programs and software to improve quality of life and efficiency."
          gifSrc="/test2.gif"
          href="/softwareDev">
        </Card>
        <Card
          title="leadership"
          description="Stories and projects that tell of my leadership expertise."
          gifSrc="/test3.webp"
          href="/leadership">
        </Card>
        <Card
          title="creatives"
          description="My art in different forms: music, drawing, 3D modelling."
          gifSrc="/test4.gif"
          href="/creatives">
        </Card>
      </div>
    </div>
  );
}
