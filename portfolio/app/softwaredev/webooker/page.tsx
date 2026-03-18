"use client"
import GameFrame from "@/components/GameFrame";
import Header from "@/components/Header";
import { apps } from "@/data/apps";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function GamePage({ params }: { params: Promise<{slug: string}>}) {
  return (    
    <div className="flex flex-col">
      <Header className="text-center pb-4 mb-0">
        <span className="text-xs font-mono text-gray-400 tracking-widest uppercase block mb-2">
          softwareDev / website
        </span>
        Wrestling Empire Booker
        <span className="text-green-400">.</span>
        <span className="text-xs font-mono font-extralight block mt-2">A website that helps in booking matches in a game called Wrestling Empire.</span>
      </Header>

      <Link 
        href="https://github.com/DyloreAquino/WrestlingEmpireBookingApp"
        className="hover:text-gray-500 transition-colors duration-75 font-mono font-bold text-center text-xl"
      >
        🔗 github
      </Link>

      <Link 
        href="https://wrestlingbooker.vercel.app/"
        className="hover:text-gray-500 transition-colors duration-75 font-mono font-bold text-center text-xl"
      >
        🔗 link
      </Link>

      <GameFrame gameSrc="https://wrestlingbooker.vercel.app/"/>
    </div>
  )
}