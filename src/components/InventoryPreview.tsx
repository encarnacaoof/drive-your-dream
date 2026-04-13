import { ArrowRight } from "lucide-react";

const cars = [
  { name: "Peugeot 107 1.0 Trendy", year: "2012", fuel: "Gasolina", km: "98.000 km", price: "Desde 5.990€" },
  { name: "Smart ForFour Passion", year: "2018", fuel: "Gasolina", km: "65.000 km", price: "Desde 9.990€" },
  { name: "Citroën C4 Cactus BlueHDi", year: "2019", fuel: "Diesel", km: "110.000 km", price: "Desde 13.990€" },
  { name: "BMW 320d", year: "2010", fuel: "Diesel", km: "220.000 km", price: "Desde 15.900€" },
  { name: "Peugeot 107 1.0 Millesim", year: "2011", fuel: "Gasolina", km: "85.000 km", price: "Desde 5.490€" },
  { name: "Mercedes Classe A 180d", year: "2020", fuel: "Diesel", km: "75.000 km", price: "Desde 22.990€" },
];

const InventoryPreview = () => (
  <section id="viaturas" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Stock Disponível</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">
          As Nossas <span className="text-gradient-gold">Viaturas</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.name} className="group rounded-xl bg-secondary border border-border hover:border-gold transition-all duration-500 overflow-hidden">
            {/* Placeholder visual */}
            <div className="h-44 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-3xl font-heading">🚗</span>
            </div>
            <div className="p-5">
              <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-primary transition-colors">{car.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {[car.year, car.fuel, car.km].map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-lg">{car.price}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="https://www.standvirtual.com/lourencomotorsautomotive"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold text-sm uppercase tracking-wider rounded-lg hover:opacity-90 transition-opacity shadow-gold"
        >
          Ver Todas as Viaturas
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

export default InventoryPreview;
