import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jessica Sousa",
    rating: 5,
    text: "Tive uma experiência muito positiva na Lourenço Motors Automotive. O atendimento foi atencioso, transparente e sempre disponível para esclarecer dúvidas.",
    time: "há 4 meses",
  },
  {
    name: "Guikiko Cristovao",
    rating: 5,
    text: "A minha experiência na Lourenço Motors Automotive superou as expectativas. Desde o primeiro contacto, fui recebido com profissionalismo, simpatia e total transparência.",
    time: "há 4 meses",
  },
  {
    name: "Sara",
    rating: 5,
    text: "Fui recebida por uma equipa super simpática, prestável e sempre com boa disposição durante todo o processo. Tudo foi tratado sempre com profissionalismo.",
    time: "há 5 meses",
  },
  {
    name: "Encarnação",
    rating: 5,
    text: "Recentemente comprei um carro na Lourenço Motors, senti muita confiança e profissionalismo durante todo o atendimento e sem dúvida que recomendaria.",
    time: "recente",
  },
];

const ReviewsSection = () => (
  <section id="testemunhos" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-semibold">Testemunhos</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 uppercase">
          O Que Dizem os <span className="text-gradient-red">Nossos Clientes</span>
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-foreground font-semibold text-lg">4.8/5</span>
          <span className="text-muted-foreground text-sm">— 70 avaliações no Google</span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-red transition-all duration-500">
            <div className="flex gap-1 mb-4">
              {[...Array(r.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6 text-sm md:text-base italic">"{r.text}"</p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm">{r.name}</span>
              <span className="text-muted-foreground text-xs">{r.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
