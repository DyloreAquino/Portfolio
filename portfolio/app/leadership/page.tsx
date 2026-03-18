import Header from "@/components/Header";
import {
  TextLeftImageRight,
  TextOnly,
  TextRightImageLeft,
} from "@/components/LayoutComponents";

export default function LeadershipSection() {
  return (
    <div className="flex flex-col gap-12 w-full max-w-5xl mx-auto px-4 font-mono">
      <Header subtitle="my experience in organizational growth & logistics.">
        leadership
      </Header>

      <TextLeftImageRight
        title="Vice President for Finance"
        subtitle="Ateneo de Manila College Glee Club"
        description="Led financial operations for the oldest university choir in the Philippines. Managed budgets, tracked expenditures, and ensured transparent financial reporting to maintain organizational health and member trust."
        imageSrc="/acgc1.jpg"
        imageAlt="Ateneo de Manila College Glee Club"
      />

      <TextOnly
        title="Logistics & Event Coordination"
        description="Organized complex logistics for multiple large-scale events: caroling during December, a performance at Union Church of Manila in January, and a 5-day back-and-forth trip to Las Piñas for the Bamboo Organ Festival. Coordinated with bus and van companies, processed payments through Ateneo's accounting system, and maintained detailed accountability sheets for headcounts and resource tracking."
      />

      <TextRightImageLeft
        title="Financial Transparency & Reporting"
        subtitle="Organizational Accountability"
        description="Delivered comprehensive financial statements to the organization, providing clear insight into income, expenses, and reserves. Prioritized transparency to build member confidence and demonstrate responsible stewardship of organizational resources."
        imageSrc="/acgcexecom.jpg"
        imageAlt="Executive Committee of the ACGC"
      />

      <TextLeftImageRight
        title="Guitar Roster Head"
        subtitle="Ateneo Musicians' Pool (2025–2026)"
        description="Led the guitar section for the Ateneo Musician's Pool. Managed the audition process to identify and develop talented musicians, fostering a community of skilled guitarists and supporting their growth within the organization."
        imageSrc="/guitar.jpg"
        imageAlt="Guitar Roster Leadership"
      />
    </div>
  );
}