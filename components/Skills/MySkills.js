import Title from "@/components/Title/Title";
import Skills from "./skills";

export default function MySkills() {
  return (
    <main className="font-boska px-5 md:px-8">
      <Title title="Skills" subtitle="Unlocking Potential" />
      <p className="text-lg ">
        I've developed a strong skill set in programming through my academic and
        professional journey. Here are my technical skills.{" "}
      </p>
      <Skills />
    </main>
  );
}
