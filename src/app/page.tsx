import AboutMe from "@/components/AboutMe";
import Blogs from "@/components/Blogs/Blogs";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero/Hero";
import { Vortex } from "@/components/Vortex";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Vortex backgroundColor="transparent">
        <AboutMe />
      </Vortex>
      <Blogs />
    </div>
  );
}
