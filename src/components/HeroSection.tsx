import heroImage from "@/assets/hero-showroom.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Lourenço Motors Showroom" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        {/* Red overlay tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <p className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-semibold">
            Há mais de 30 anos no mercado
          </p>
        </div>
        <h1 className="animate-fade-up font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 uppercase" style={{ animationDelay: "0.4s", opacity: 0 }}>
          O Seu Próximo Carro
          <br />
          <span className="text-gradient-red">Está Aqui</span>
        </h1>
        <p className="animate-fade-up text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10" style={{ animationDelay: "0.6s", opacity: 0 }}>
          Mais de 160 viaturas disponíveis. Compra, venda, troca, consignação, consultoria e importação automóvel com total confiança.
        </p>
        <div className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <a href="#viaturas" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-red text-primary-foreground font-semibold text-sm uppercase tracking-wider rounded-lg hover:opacity-90 transition-opacity shadow-red">
            Ver Viaturas
          </a>
          <a href="tel:+351910338655" className="inline-flex items-center justify-center px-8 py-4 border border-red text-primary font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-primary/10 transition-colors">
            Ligar Agora
          </a>
        </div>

        <div className="animate-fade-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto" style={{ animationDelay: "1s", opacity: 0 }}>
          {[
            { value: "30+", label: "Anos de Experiência" },
            { value: "160+", label: "Viaturas Disponíveis" },
            { value: "4.8★", label: "Google Reviews" },
            { value: "8.1K", label: "Seguidores Instagram" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-gradient-red">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a href="#viaturas" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default HeroSection;
