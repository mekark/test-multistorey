import Hero from "./components/Hero";
import Process from "./components/Process";
import WhyChoose from "./components/WhyChoose";
import ProjectsGallery from "./components/ProjectsGallery";
import Faq from "./components/Faq";
import Cta from "./components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <WhyChoose />
      <ProjectsGallery />
      <Faq />
      <Cta />
      </main>
  );
}
