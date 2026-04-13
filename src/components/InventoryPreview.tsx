import { ArrowRight } from "lucide-react";

const cars = [
  { name: "Peugeot E-208 Active Pack", year: "2023", fuel: "Elétrico", km: "17.862 km", price: "17.990€", highlight: true },
  { name: "Smart ForFour Passion", year: "2018", fuel: "Gasolina", km: "65.000 km", price: "9.990€" },
  { name: "Citroën C4 Cactus BlueHDi", year: "2019", fuel: "Diesel", km: "110.000 km", price: "13.990€" },
  { name: "BMW 320d", year: "2010", fuel: "Diesel", km: "220.000 km", price: "15.900€" },
  { name: "Peugeot 107 1.0 Trendy", year: "2012", fuel: "Gasolina", km: "98.000 km", price: "5.990€" },
  { name: "Mercedes Classe A 180d", year: "2020", fuel: "Diesel", km: "75.000 km", price: "22.990€", highlight: true },
];

const InventoryPreview = () => (
  <section id="viaturas" className="py-24">
    <div className="container mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-semibold mb-2">Stock</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">Viaturas</h2>
        </div>
        <a href="https://www.standvirtual.com/lourencomotorsautomotive" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
          Ver Todas <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.name} className={`group p-5 rounded-xl border transition-all duration-300 hover:border-primary/40 ${(car as any).highlight ? 'bg-card border-primary/20' : 'bg-card border-border'}`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide group-hover:text-primary transition-colors">{car.name}</h3>
                <div className="flex gap-2 mt-2">
                  {[car.year, car.fuel, car.km].map((t) => (
                    <span key={t} className="text-[10px] text-muted-foreground uppercase tracking-wider">{t}</span>
                  ))}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
            </div>
            <div className="pt-3 border-t border-border">
              <span className="font-heading text-xl font-bold text-primary">{car.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:hidden text-center">
        <a href="https://www.standvirtual.com/lourencomotorsautomotive" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest rounded-lg">
          Ver Todas <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </section>
);

export default InventoryPreview;
