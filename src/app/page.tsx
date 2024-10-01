import Services from "@/containers/Services";
import Hero from "@/containers/Hero";
import Introduction from "@/containers/Introduction";
import Process from "@/containers/Process";
import About from "@/containers/About";
import Testimonials from "@/containers/Testimonials";
import Partners from "@/containers/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <Partners />
    </>
  );
}
