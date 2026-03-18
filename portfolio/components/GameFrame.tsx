"use client"
interface GameFrameProps {
  gameSrc: string;
  className?: string; // optional for styling
}
export default function GameFrame({ gameSrc, className}: GameFrameProps) {
  return (
    <div className="flex justify-center items-start pt-10 min-h-screen">
        <iframe src={gameSrc}
          className="flex self-center w-full h-screen border-none"
          style={{ resize: 'both'}}
          allowFullScreen
        ></iframe>
    </div>
  )
}
