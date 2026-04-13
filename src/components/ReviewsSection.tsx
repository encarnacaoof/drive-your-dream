import { Star } from "lucide-react";

const reviews = [
  { name: "Jessica Sousa", text: "O atendimento foi atencioso, transparente e sempre disponível para esclarecer dúvidas.", time: "4 meses" },
  { name: "Guikiko Cristovao", text: "Desde o primeiro contacto, fui recebido com profissionalismo, simpatia e total transparência.", time: "4 meses" },
  { name: "Sara", text: "Equipa super simpática, prestável e sempre com boa disposição. Tudo tratado com profissionalismo.", time: "5 meses" },
  { name: "Encarnação", text: "Senti muita confiança e profissionalismo durante todo o atendimento. Sem dúvida que recomendaria.", time: "recente" },
];

const ReviewsSection = () => (
  <section id="testemunhos" className="py-24 border-t border-border">
    <div className="container mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-semibold mb-2">Testemunhos</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">Clientes</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}</div>
          <span className="text-sm font-semibold">4.8</span>
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">/ 70 reviews</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {reviews.map((r) => (
          <div key={r.name} className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
            <p className="text-sm text-foreground/90 leading-relaxed mb-5 italic">"{r.text}"</p>
            <div className="flex items-center justify-between text-[10px] uppercase tracking-widest">
              <span className="font-semibold text-foreground">{r.name}</span>
              <span className="text-muted-foreground">{r.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
