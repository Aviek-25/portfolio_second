
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

   <About />

  <Projects />

      <section id="skills" className="container section-padding">
        <p className="section-label">03 / THE STACK</p>
        <h2>Tools of the trade.</h2>
      </section>

      <section id="journey" className="container section-padding">
        <p className="section-label">04 / THE JOURNEY</p>
        <h2>Still evolving.</h2>
      </section>

      <section id="contact" className="container section-padding">
        <p className="section-label">05 / CONTACT</p>
        <h2>Let's make it work.</h2>
      </section>
    </main>
  );
}
