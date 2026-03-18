"use client";
import AppCard from "@/components/AppCard";
import GameCard from "@/components/GameCard";
import Header from "@/components/Header";

export default function SoftwareDev() {
  return (
    <div className="flex flex-col gap-6 w-full items-center">

        <Header subtitle="Websites, apps, coding projects that showcase my expertise in software development.">
          mySoftware
        </Header>
        <AppCard
            title="FitRepo (WIP)"
            nature="Coursework - Software Engineering"
            tech_stack={["Expo", "Supabase", "React Native"]}
            description="A 5-man team project, using Expo and Supabase to create an app to track workouts and use AI to assist."
            imgSrc="/FitRepo/fitrepo1.jpg"
            href="/softwaredev/fitrepo">
        </AppCard>
        <AppCard
            title="Stockly (WIP)"
            nature="Personal Project"
            tech_stack={["Expo", "Supabase", "React Native"]}
            description="An app to help keep track of stocks. Automatically depletes stock and increases stock based on orders and deliveries."
            imgSrc="/Stockly/stockly1.jpg"
            href="/softwaredev/stockly">
        </AppCard>
        <GameCard
            title="Wrestling Empire Booker"
            nature="Personal Project"
            tech_stack={["Next.js", "Prisma", "NeonDB", "React"]}
            description="A website that helps in booking matches in a game called Wrestling Empire."
            gifSrc="/webooker.png"
            href="/softwaredev/webooker">
        </GameCard>
        <GameCard
            title="Central Bookings CRUD site"
            nature="Coursework - Django"
            tech_stack={["Python", "Django", "Database Systems"]}
            description="A website written in Python with the Django framework which implements the function to book activities."
            gifSrc="/CentralBookings/centralbookings1.png"
            href="/softwaredev/central-bookings">
        </GameCard>
    </div>
  );
}
