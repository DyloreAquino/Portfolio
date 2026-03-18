import GameFrame from "@/components/GameFrame";
import Header from "@/components/Header";
import { games } from "@/data/games";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function GamePage({ params }: { params: Promise<{slug: string}>}) {
  const { slug } = use(params)
  const game = games[slug]
  if (!game) notFound()    

  return (    
    <div className="flex flex-col">
      <Header className="text-center pb-4 mb-0">
        <span className="text-xs font-mono text-gray-400 tracking-widest uppercase block mb-2">
          gameDev / playable
        </span>
        {game.title}
        <span className="text-green-400">.</span>
        <span className="text-xs font-mono font-extralight block mt-2">{game.description}</span>
      </Header>

      {game.github && (
        <Link 
          href={game.github}
          className="hover:text-gray-500 transition-colors duration-75 font-mono font-bold text-center text-xl"
        >
          🔗 github
        </Link>
      )}
      
      <GameFrame gameSrc={game.src}/>
      <span className="text-lg font-mono font-extralight block m-5 text-center pt-10">{game.instructions}</span>
    </div>
  )
}