import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <div className="orb" />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
