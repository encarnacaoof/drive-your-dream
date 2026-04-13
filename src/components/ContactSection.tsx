import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const info = [
  { icon: MapPin, label: "R. da Liberdade 19a, 1675-137 Pontinha" },
  { icon: Phone, label: "+351 910 338 655", href: "tel:+351910338655" },
  { icon: Clock, label: "Terça a Sábado · 10:00 – 19:00" },
  { icon: Instagram, label: "@lourencomotorspt", href: "https://instagram.com/lourencomotorspt" },
];

const ContactSection = () => (
  <section id="contacto" className="py-24 border-t border-border">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-semibold mb-2">Contacto</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-8">Fale Connosco</h2>

          <div className="space-y-4">
            {info.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-primary shrink-0" />
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                )}
              </div>
            ))}
          </div>

          <a href="https://wa.me/351910338655?text=Olá! Gostaria de mais informações." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-primary/90 transition-colors">
            Enviar Mensagem
          </a>
        </div>

        <div className="rounded-xl overflow-hidden border border-border h-[300px] md:h-full min-h-[280px]">
          <iframe
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.5!2d-9.2153!3d38.7831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecce6a7c0e1f3%3A0x0!2sR.%20da%20Liberdade%2019a%2C%201675-137%20Pontinha!5e0!3m2!1spt-PT!2spt!4v1"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
