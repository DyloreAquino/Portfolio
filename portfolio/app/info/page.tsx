"use client";

import Header from "@/components/Header";
import Link from "next/link";

export default function InfoPage() {
  return (
    <div className="flex flex-col gap-12 w-full max-w-4xl mx-auto px-4 font-mono py-12">
      <Header subtitle="get to know je.">
        about me
      </Header>

      {/* Bio Section */}
      <section className="space-y-4 items-center">
        <h2 className="text-2xl font-bold">Bio</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          I'm a Computer Science student at Ateneo de Manila University, specializing in Digital Game Design and Development. 
          I'm committed to doing everything at my best—whether that's writing clean code, leading projects, making art, or helping others reach their potential. 
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          I work with precision and care, espcially with code, but I also genuinely enjoy mentoring people and watching them grow.  My leadership, determination, and creativity in problem-solving and art are the core aspects of my character.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          I am very excited to share my skills and talents with anyone willing to work with me!
        </p>
      </section>

      {/* What I Do */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What I Do</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Software Development, Digital Game Design and Development, Music Production, Visual Art, 3D Modelling/Animation/Rigging, Video Editing, Audio Editing.
        </p>
      </section>

      {/* What I Excel At */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What I Excel At</h2>
        <ul className="text-gray-400 text-sm space-y-2">
          <li>• Determination — I commit fully to tasks and see them through to completion </li>
          <li>• Effective Communication — I articulate ideas clearly and collaborate well with teams</li>
          <li>• Technical Precision — I write meticulous, clean code and sweat the details that matter</li>
          <li>• Leadership & Mentorship — I guide others and help them exceed their own expectations</li>
          <li>• Adaptability — I work across software, games, music, and art</li>
          <li>• Attention to Detail — I catch what others miss and deliver polished, refined work</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-300 mb-3">Programming</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Python</li>
              <li>• Java</li>
              <li>• C/C++</li>
              <li>• SQL</li>
              <li>• Typescript</li>
              <li>• Linux/Bash</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-300 mb-3">Tools & Frameworks</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Django</li>
              <li>• Godot</li>
              <li>• Expo, Next.js (React)</li>
              <li>• Supabase, NeonDB, Prisma</li>
              <li>• Git</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-300 mb-3">Creative</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• FL Studio, Audacity</li>
              <li>• Blender</li>
              <li>• GIMP, Canva, Figma, ibisPaint</li>
              <li>• OBS Studio, CapCut</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-300 mb-3">Other</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Notion</li>
              <li>• Claude & Other AI Tools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="space-y-4">
          <div className="border-l-2 border-green-400 pl-4">
            <h3 className="font-bold text-sm">BS Computer Science - Digital Game Design and Development</h3>
            <p className="text-gray-400 text-sm">Ateneo de Manila University</p>
            <p className="text-gray-500 text-xs">[Graduation Yr - 2028]</p>
          </div>
          <div className="border-l-2 border-green-400 pl-4">
            <h3 className="font-bold text-sm">[Junior and Senior HS Graduate]</h3>
            <p className="text-gray-400 text-sm">[Marikina Science High School]</p>
            <p className="text-gray-500 text-xs">[2023]</p>
          </div>
        </div>
      </section>

      {/* Contact & Links */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-gray-500 w-24">Email:</span>
            <a 
              href="mailto:lutherjerold@gmail.com"
              className="text-green-400 hover:underline text-sm"
            >
              lutherjerold@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 w-24">Phone:</span>
            <a 
              href="tel:+639171209613"
              className="text-green-400 hover:underline text-sm"
            >
              (+63) 917 120 9613
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 w-24">GitHub:</span>
            <a 
              href="https://github.com/DyloreAquino"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline text-sm"
            >
              github.com/DyloreAquino
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 w-24">LinkedIn:</span>
            <a 
              href="https://linkedin.com/in/aquino-jerold"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline text-sm"
            >
              linkedin.com/in/aquino-jerold
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}