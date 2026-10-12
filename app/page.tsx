import Intro from "@/components/Intro";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SobreNosotros from "@/components/SobreNosotros";
import NuestrasCabanas from "@/components/NuestrasCabanas";
import Servicios from "@/components/Servicios";
import Reservas from "@/components/Reservas";
import Ubicacion from "@/components/Ubicacion";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function Page() {
  return (
    <>
      <Intro />
      <Nav />
      <main>
        <Hero />
        <SobreNosotros />
        <NuestrasCabanas />
        <Servicios />
        <Reservas />
        <Ubicacion />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
