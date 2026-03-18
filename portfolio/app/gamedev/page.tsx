"use client";
import GameCard from "@/components/GameCard";
import Header from "@/components/Header";

export default function GameDev() {
  return (
    <div className="flex flex-col gap-6 w-full items-center">

        <Header subtitle="Video game projects, may it be full experiences, or just game systems, that I've created.">
            myGameProjects
        </Header>
        <div className="text-sm font-mono text-center text-gray-400">
            You can click on each card to experience the game for yourself!
        </div>
        <GameCard 
            title="Stellar Archives"
            nature="Personal Project"
            tech_stack={["Godot", "2.5D", "Procedural Animations"]}
            description="A prototype for a stargazing field management game. Created a system for procedural generation of stars and procedural animation of the character's feet."
            gifSrc="/stellar-archives.gif"
            href="/gamedev/stellar-archives">
        </GameCard>

        <GameCard 
            title="Transformers Turn-based RPG"
            nature="Course Project"
            tech_stack={["Godot", "2.5D", "Turn-based", "FSM"]}
            description="A turn-based RPG system using 2.5D elements. Created a game flow system using State Machines. Created a custom way to calculate queue turns."
            gifSrc="/transformers-rpg.gif"
            href="/gamedev/transformers-rpg">
        </GameCard>

        <GameCard 
            title="Scalar Matters"
            nature="Game Jam Prototype (Unsubmitted)"
            tech_stack={["Godot", "2D", "Scalable Objects"]}
            description="A prototype for the GMTK 2025 Game Jam. In this platformer/puzzle game, you are equipped with a gun that can shrink or size up certain objects. Use this to solve puzzles and get to the goal."
            gifSrc="/scalar-matters.gif"
            href="/gamedev/scalar-matters">
        </GameCard>

        <GameCard 
            title="Space SHMUP"
            nature="Course Project"
            tech_stack={["Godot", "2D", "Shmup", "FSM"]}
            description="A full short Shmup game. Created full AI Finite State Machines for the AI behavior of enemies and bosses. A bit of mathematics for the logic of bullet spawning."
            gifSrc="/space-shmup.gif"
            href="/gamedev/space-shmup">
        </GameCard>

        <GameCard 
            title="Escape Platformer"
            nature="Course Project"
            tech_stack={["Godot", "2D", "Platformer", "FSM"]}
            description="A platformer game that uses Finite State Machines for both player and AI. Implemented hurt and hitboxes. Used FSMs to automate behavior of enemies and logic for attacking. Added features to make movement smooth."
            gifSrc="/escape-platformer.gif"
            href="/gamedev/escape-platformer">
        </GameCard>

        <GameCard 
            title="Third Person Shooter Prototype"
            nature="Course Project"
            tech_stack={["Godot", "3D", "TPS", "FSM"]}
            description="A third person shooter prototype. Modelled, rigged, and animated a model for the player and environment. Created AI navigation for the enemies"
            gifSrc="/tps-demo.gif"
            href="/gamedev/tps-prototype">
        </GameCard>

        <GameCard 
            title="Power Pagong (WIP)"
            nature="Personal Project"
            tech_stack={["Godot", "3D", "Platformer", "FSM"]}
            description="A 3D platformer featuring cute characters of my own. Modelled, rigged, and animated all models. Used an FSM for the character's movement states. Still a work in progress."
            gifSrc="/power-pagong.gif"
            href="/gamedev/power-pagong">
        </GameCard>

        <GameCard 
            title="La Mancha"
            nature="Course Project"
            tech_stack={["Godot", "2D", "Tile-based"]}
            description="A game implementing tile-based movement (akin to Pokemon). Features forced movement tiles, slippery tiles, one-sided movement tiles, AI with tile-based movement with simple path detection, and character switching."
            gifSrc="/la-mancha.gif"
            href="/gamedev/la-mancha">
        </GameCard>
        
    </div>
  );
}
