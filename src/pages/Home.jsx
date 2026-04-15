import Hero from "@/components/sections/Hero";
import Value from "@/components/sections/Value";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Skills from "@/components/sections/Skills";
import Touch from "@/components/sections/Touch";

export default function Home() {
  return (
    <main>
      <Hero />
      <Value />
      <FeaturedProjects />
      <Skills />
      <Touch />
    </main>
  );
}
