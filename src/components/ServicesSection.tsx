import { Car, RefreshCw, Search, Wrench, FileText, Globe } from "lucide-react";

const services = [
  { icon: Car, title: "Compra & Venda" },
  { icon: RefreshCw, title: "Troca & Consignação" },
  { icon: Search, title: "Consultoria" },
  { icon: Globe, title: "Importação" },
  { icon: Wrench, title: "Oficina Própria" },
  { icon: FileText, title: "Financiamento" },
];

const ServicesSection = () => (
  <section id="servicos" className="py-24 border-t border-border">
    <div className="container mx-auto">
      <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-semibold mb-2">Serviços</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-12">O Que Fazemos</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((s) => (
          <div key={s.title} className="group flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300">
            <s.icon className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-medium uppercase tracking-wider leading-tight">{s.title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
