import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const ContactSection = () => (
  <section id="contacto" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-semibold">Contacto</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase">
          Visite-nos ou <span className="text-gradient-red">Ligue Já</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          {[
            { icon: MapPin, title: "Morada", info: "R. da Liberdade 19a, 1675-137 Pontinha" },
            { icon: Phone, title: "Telefone", info: "+351 910 338 655", href: "tel:+351910338655" },
            { icon: Clock, title: "Horário", info: "Terça a Sábado: 10:00 – 19:00" },
            { icon: Instagram, title: "Instagram", info: "@lourencomotorspt", href: "https://instagram.com/lourencomotorspt" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl bg-secondary border border-border hover:border-red transition-colors">
              <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item.info}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{item.info}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden border border-border h-[350px] md:h-full min-h-[300px]">
          <iframe
            title="Lourenço Motors Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.5!2d-9.2153!3d38.7831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecce6a7c0e1f3%3A0x0!2sR.%20da%20Liberdade%2019a%2C%201675-137%20Pontinha!5e0!3m2!1spt-PT!2spt!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
