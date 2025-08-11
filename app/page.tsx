import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NuestrasCabanas from "@/components/NuestrasCabanas";
import Servicios from "@/components/Servicios";
import SobreNosotros from "@/components/SobreNosotros";
import Ubicacion from "@/components/Ubicacion";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <SobreNosotros />
      <NuestrasCabanas />
      <Servicios />
      <Ubicacion />
      <Contacto />
      <Footer />
    </>
  );
}
