"use client";

import { useMemo, useState } from "react";
import { Clock, CreditCard, MessageCircle, Phone, Copy, Check } from "lucide-react";
import Words from "./motion/Words";
import { cabanas } from "@/lib/cabanas";
import { PHONE_DISPLAY, WHATSAPP_NUMBER, whatsappLink } from "@/lib/contact";

const infoItems = [
  { icon: Clock, title: "Precios por temporada", description: "Las tarifas varían según la época del año." },
  { icon: CreditCard, title: "Formas de pago", description: "Efectivo y transferencia bancaria." },
  { icon: MessageCircle, title: "Seña para confirmar", description: "Se requiere seña para confirmar la reserva." },
];

const fieldClass =
  "w-full rounded-xl border border-black/10 bg-arena px-4 py-3 text-noche focus:border-bordo focus:outline-none focus:ring-2 focus:ring-bordo/20";

const formatDate = (iso: string) => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

export default function Reservas() {
  const [form, setForm] = useState({
    cabana: "Cualquiera que esté disponible",
    personas: "2",
    llegada: "",
    salida: "",
    mascota: false,
  });
  const [copied, setCopied] = useState(false);

  const mensaje = useMemo(() => {
    const fechas =
      form.llegada && form.salida
        ? `del ${formatDate(form.llegada)} al ${formatDate(form.salida)}`
        : form.llegada
          ? `desde el ${formatDate(form.llegada)}`
          : "(fechas a coordinar)";
    return (
      `Hola, quiero consultar disponibilidad en Cabañas Parada 8.\n` +
      `• Cabaña: ${form.cabana}\n` +
      `• Personas: ${form.personas}\n` +
      `• Fechas: ${fechas}` +
      (form.mascota ? `\n• Vamos con mascota` : "")
    );
  }, [form]);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(`+${WHATSAPP_NUMBER}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <section id="reservas" className="relative overflow-hidden bg-noche py-24 text-white lg:py-36">
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute -right-8 -bottom-24 text-[30rem] leading-none font-extrabold text-white/[0.05] select-none"
      >
        8
      </span>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <span data-fade className="block text-sm font-semibold text-white/60">
            Reservas
          </span>
          <h2
            data-words
            className="font-display mt-4 text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.9] font-extrabold tracking-tight"
          >
            <Words text="Reservá tu estadía" />
          </h2>
          <p data-fade className="mt-6 max-w-md text-lg text-white/85">
            Elegí la cabaña y las fechas, y te armamos el mensaje para WhatsApp.
            Te respondemos con disponibilidad y precio.
          </p>

          <div data-stagger className="mt-10 space-y-5">
            {infoItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-white/75">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 text-lg font-semibold">
              <Phone className="h-5 w-5" />
              {PHONE_DISPLAY}
            </span>
            <button
              type="button"
              onClick={copiar}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/25"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copiado" : "Copiar número"}
            </button>
          </div>
        </div>

        <form
          data-fade
          onSubmit={(e) => {
            e.preventDefault();
            const url = whatsappLink(mensaje);
            const win = window.open(url, "_blank", "noopener");
            if (!win) window.location.href = url;
          }}
          className="rounded-3xl bg-white p-6 text-noche shadow-2xl md:p-9"
        >
          <h3 className="font-display text-3xl font-bold">Consultá disponibilidad</h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="cabana" className="mb-1.5 block text-sm font-semibold">Cabaña</label>
              <select
                id="cabana"
                value={form.cabana}
                onChange={(e) => setForm({ ...form, cabana: e.target.value })}
                className={fieldClass}
              >
                <option>Cualquiera que esté disponible</option>
                {cabanas.map((c) => (
                  <option key={c.id} value={c.nombre}>
                    {c.nombre} ({c.capacidad})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="llegada" className="mb-1.5 block text-sm font-semibold">Llegada</label>
              <input
                id="llegada"
                type="date"
                value={form.llegada}
                onChange={(e) => setForm({ ...form, llegada: e.target.value })}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="salida" className="mb-1.5 block text-sm font-semibold">Salida</label>
              <input
                id="salida"
                type="date"
                min={form.llegada || undefined}
                value={form.salida}
                onChange={(e) => setForm({ ...form, salida: e.target.value })}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="personas" className="mb-1.5 block text-sm font-semibold">Personas</label>
              <select
                id="personas"
                value={form.personas}
                onChange={(e) => setForm({ ...form, personas: e.target.value })}
                className={fieldClass}
              >
                {["1", "2", "3", "4", "5", "6"].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
            <label className="flex items-center gap-3 self-end rounded-xl border border-black/10 px-4 py-3">
              <input
                id="mascota"
                type="checkbox"
                checked={form.mascota}
                onChange={(e) => setForm({ ...form, mascota: e.target.checked })}
                className="h-4 w-4 accent-bordo"
              />
              <span className="text-sm font-semibold">Vamos con mascota</span>
            </label>
          </div>

          <div className="mt-5 rounded-xl bg-muted p-4 text-sm whitespace-pre-line text-noche/80" aria-live="polite">
            {mensaje}
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-bordo px-6 py-4 font-semibold text-white transition-colors hover:bg-noche"
          >
            <MessageCircle className="h-5 w-5" />
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
