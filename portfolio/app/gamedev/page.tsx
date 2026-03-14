"use client";
import GameCard from "@/components/GameCard";
import Header from "@/components/Header";

export default function GameDev() {
  return (
    <div className="flex flex-col gap-2 w-full items-center">

        <Header className="mb-2">
          myGameProjects
        </Header>
        <div className="mb-10 font-mono">
          Video game projects, may it be full experiences, or just game systems, that I've created.
        </div>
        <GameCard 
            title="Test"
            nature="Personal Project"
            tech_stack={["Godot"]}
            description="this thing is cool ad amzing abndaskdbajkwvdjadlkjbadlkjbawdajvkd"
            gifSrc="/test1.gif"
            href="/gamedev">
        </GameCard>

        <GameCard 
            title="Test"
            nature="Personal Project"
            tech_stack={["Godot"]}
            description="this thing is cool"
            gifSrc="/test1.gif"
            href="/gamedev">
        </GameCard>
    </div>
  );
}
