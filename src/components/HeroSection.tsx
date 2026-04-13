import heroImage from "@/assets/hero-dealership.jpg";
import logo from "@/assets/logo-clean.png";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Stand de automóveis" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/75" />
    </div>

    {/* Logótipo canto superior direito */}
    <div className="absolute top-6 right-6 z-20">
      <img src={logo} alt="Lourenço Motors" className="h-16 md:h-20 w-auto opacity-95" />
    </div>

    {/* Linha vermelha lateral */}
    <div className="absolute left-0 top-1/4 h-1/2 w-1 bg-primary z-10" />

    <div className="relative z-10 container mx-auto pt-20">
      <div className="max-w-2xl pl-6">

        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-primary" />
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Lourenço Motors</span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] mb-6 tracking-tight">
          O seu próximo
          <br />
          <span className="text-primary">carro está aqui</span>
        </h1>

        <p className="text-muted-foreground text-sm md:text-base max-w-md mb-10 leading-relaxed">
          Mais de 160 viaturas disponíveis. 30 anos de experiência em compra, venda, troca e importação automóvel.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#viaturas" className="px-8 py-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-primary/90 transition-colors">
            Ver Viaturas
          </a>
          <a href="tel:+351910338655" className="px-8 py-4 border border-border text-foreground text-xs font-bold uppercase tracking-widest rounded-lg hover:border-primary hover:text-primary transition-colors">
            Ligar Agora
          </a>
        </div>

        <div className="flex gap-10 mt-16 pt-8 border-t border-foreground/10">
          {[
            { n: "30+", l: "Anos de Experiência" },
            { n: "160+", l: "Viaturas Disponíveis" },
            { n: "4.8★", l: "Avaliação Google" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary">{s.n}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
