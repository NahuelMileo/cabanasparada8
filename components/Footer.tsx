"use client";
import Link from "next/link";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";

export default function Page() {
  const telefono = "+598 98 976 924";
  const WHATSAPP_NUMBER = "59898976924";

  return (
    <motion.footer
      className="border-t bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <div className="container mx-auto grid items-center gap-4 px-4 py-6 sm:grid-cols-2">
        <div className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Cabañas Parada 8. Todos los derechos
          reservados.
        </div>
        <div className="flex items-center justify-start gap-3 sm:justify-end">
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:bg-muted rounded-md p-1"
          >
            <SiFacebook size={20}></SiFacebook>
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:bg-muted rounded-md p-1"
          >
            <SiInstagram size={20}></SiInstagram>
          </Link>
          <Separator orientation="vertical" className="h-5" />
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="text-sm hover:underline"
          >
            {telefono}
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
