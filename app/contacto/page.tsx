'use client'

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" })
  }

  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs tracking-[0.3em] text-accent font-serif font-medium mb-6">
            PONTE EN CONTACTO
          </span>
          <h1 className="font-serif font-bold text-5xl md:text-7xl tracking-tight text-foreground mb-6 text-balance">
            Hablemos
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            ¿Tienes preguntas? ¿Necesitas ayuda? Nuestro equipo está aquí para ayudarte.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="font-serif font-bold text-2xl text-foreground mb-8">
              Información de Contacto
            </h2>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-sm flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:soporte@drivex.com" className="hover:text-accent transition-colors">
                    soporte@drivex.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Respondemos en menos de 24 horas
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-sm flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-foreground mb-1">Teléfono</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                    +1 (234) 567-890
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Lunes a Viernes, 9 AM - 6 PM
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-sm flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-foreground mb-1">Ubicación</h3>
                <p className="text-muted-foreground">
                  123 Motor Street<br />
                  Los Ángeles, CA 90001<br />
                  Estados Unidos
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h3 className="font-serif font-bold text-foreground mb-4">Síguenos</h3>
              <div className="flex gap-4">
                {["Instagram", "Facebook", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-foreground mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="asunto" className="block text-sm font-semibold text-foreground mb-2">
                  Asunto
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border text-foreground focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="consulta">Consulta General</option>
                  <option value="soporte">Soporte Técnico</option>
                  <option value="devolucion">Devolución/Cambio</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-serif font-semibold tracking-wide py-3"
              >
                ENVIAR MENSAJE
                <Send className="ml-2 w-4 h-4" />
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Nos comprometemos a responder en menos de 24 horas.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl tracking-tight text-foreground mb-16 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "¿Cuál es el tiempo de envío?",
                a: "Generalmente, los pedidos se envían dentro de 2-3 días hábiles. El envío toma entre 5-7 días hábiles dependiendo de tu ubicación.",
              },
              {
                q: "¿Qué incluye la garantía?",
                a: "Todos nuestros productos incluyen garantía de por vida contra defectos de fabricación. Cubre materiales y mano de obra.",
              },
              {
                q: "¿Puedo devolver un producto?",
                a: "Sí, ofrecemos devoluciones dentro de 30 días de la compra en condiciones originales. El retorno es gratis en la mayoría de casos.",
              },
              {
                q: "¿Cómo sé qué producto necesito?",
                a: "Usa nuestra herramienta 'Mi Garaje' para seleccionar tu vehículo. Te mostraremos exactamente qué productos se ajustan a tu auto.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-border pb-6">
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
