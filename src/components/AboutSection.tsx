import aboutImg from "@/assets/about-dealership.jpg";
import logo from "@/assets/logo-clean.png";

const AboutSection = () => (
  <section id="sobre" className="py-24 border-t border-border">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
          <img src={aboutImg} alt="Lourenço Motors" className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <img src={logo} alt="Lourenço Motors" className="h-10 w-auto opacity-80" />
          </div>
        </div>

        <div>
          <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-semibold mb-2">Sobre Nós</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-6">
            30+ Anos de Confiança
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              A Lourenço Motors Automotive é um stand de automóveis em Odivelas/Pontinha, com mais de três décadas de experiência no mercado automóvel.
            </p>
            <p>
              Especializamo-nos em compra, venda, troca, consignação, consultoria e importação automóvel. Com oficinas próprias e uma equipa dedicada, garantimos qualidade e transparência em cada transação.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-8">
            {["Confiança", "Qualidade", "Profissionalismo"].map((v) => (
              <div key={v} className="py-3 px-4 rounded-lg bg-card border border-border text-center">
                <span className="text-[10px] font-semibold uppercase tracking-widest">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
