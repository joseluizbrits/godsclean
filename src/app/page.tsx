import Services from "@/containers/Services";
import Hero from "@/containers/Hero";
import Introduction from "@/containers/Introduction";
import Process from "@/containers/Process";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Services />
      <Process />
    </>
  );
}
