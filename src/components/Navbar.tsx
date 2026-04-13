import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Viaturas", href: "#viaturas" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-gold">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="text-gradient-gold font-heading text-xl md:text-2xl font-bold tracking-wide">
          LOURENÇO MOTORS
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+351910338655" className="flex items-center gap-2 text-primary text-sm font-semibold">
            <Phone className="w-4 h-4" />
            910 338 655
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-glass border-t border-gold animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide py-2">
                {l.label}
              </a>
            ))}
            <a href="tel:+351910338655" className="flex items-center gap-2 text-primary text-sm font-semibold pt-4 border-t border-border">
              <Phone className="w-4 h-4" />
              910 338 655
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
