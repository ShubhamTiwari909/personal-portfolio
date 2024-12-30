import AboutMe from "@/components/AboutMe";
import Blogs from "@/components/Blogs/Blogs";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <AboutMe />
      <Blogs />
    </div>
  );
}
