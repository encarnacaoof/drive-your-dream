import heroImage from "@/assets/hero-dealership.jpg";
import logo from "@/assets/logo-clean.png";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Stand de automóveis" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/65" />
    </div>

    <div className="relative z-10 container mx-auto pt-20">
      <div className="max-w-2xl">
        <img src={logo} alt="Lourenço Motors" className="h-16 md:h-24 w-auto mb-8 opacity-90" />
        
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] mb-6 tracking-tight">
          O seu próximo
          <br />
          <span className="text-primary">carro está aqui</span>
        </h1>

        <p className="text-muted-foreground text-sm md:text-base max-w-md mb-8 leading-relaxed">
          Mais de 160 viaturas disponíveis. 30 anos de experiência em compra, venda, troca e importação automóvel.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#viaturas" className="px-6 py-3 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-primary/90 transition-colors">
            Ver Viaturas
          </a>
          <a href="tel:+351910338655" className="px-6 py-3 border border-border text-foreground text-xs font-semibold uppercase tracking-widest rounded-lg hover:border-primary hover:text-primary transition-colors">
            Ligar Agora
          </a>
        </div>

        <div className="flex gap-8 mt-14 pt-8 border-t border-foreground/10">
          {[
            { n: "30+", l: "Anos" },
            { n: "160+", l: "Viaturas" },
            { n: "4.8★", l: "Google" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-heading text-2xl md:text-3xl font-bold text-primary">{s.n}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
