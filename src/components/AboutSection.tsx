import aboutImg from "@/assets/about-dealership.jpg";
import { Shield, Award, Users } from "lucide-react";

const AboutSection = () => (
  <section id="sobre" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-xl overflow-hidden">
          <img src={aboutImg} alt="Lourenço Motors" className="w-full h-[400px] object-cover rounded-xl" loading="lazy" width={1280} height={720} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          <div className="absolute inset-0 bg-primary/5" />
        </div>
        <div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-semibold">Quem Somos</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 uppercase">
            Mais de <span className="text-gradient-red">30 Anos</span> de Confiança
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A Lourenço Motors Automotive é um stand de automóveis localizado em Odivelas/Pontinha, com mais de três décadas de experiência no mercado automóvel. Especializamo-nos em compra, venda, troca, consignação, consultoria e importação automóvel.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Com oficinas próprias e uma equipa dedicada, garantimos qualidade, transparência e profissionalismo em cada transação. A satisfação dos nossos clientes é a nossa maior prioridade.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Shield, label: "Confiança" },
              { icon: Award, label: "Qualidade" },
              { icon: Users, label: "Profissionalismo" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary border border-border hover:border-red transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium uppercase tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
