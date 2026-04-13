import { Car, RefreshCw, Search, Wrench, FileText, Globe } from "lucide-react";

const services = [
  { icon: Car, title: "Compra & Venda", desc: "Viaturas seminovas com garantia e qualidade certificada." },
  { icon: RefreshCw, title: "Troca & Consignação", desc: "Troque o seu carro ou deixe-o à consignação sem complicações." },
  { icon: Search, title: "Consultoria", desc: "Aconselhamento personalizado para encontrar a viatura ideal." },
  { icon: Globe, title: "Importação", desc: "Importamos a viatura que pretende, com total transparência." },
  { icon: Wrench, title: "Oficina Própria", desc: "Oficinas próprias para garantir a qualidade de cada viatura." },
  { icon: FileText, title: "Financiamento", desc: "Soluções de financiamento adaptadas às suas necessidades." },
];

const ServicesSection = () => (
  <section id="servicos" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">O Que Fazemos</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">
          Os Nossos <span className="text-gradient-gold">Serviços</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group p-8 rounded-xl bg-card border border-border hover:border-gold transition-all duration-500 hover:shadow-gold">
            <s.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
