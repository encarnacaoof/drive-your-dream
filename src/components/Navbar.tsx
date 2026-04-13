import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-clean.png";

const links = [
  { label: "Viaturas", href: "#viaturas" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16">
        <a href="#inicio">
          <img src={logo} alt="Lourenço Motors" className="h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase">
              {l.label}
            </a>
          ))}
          <a href="tel:+351910338655" className="flex items-center gap-1.5 text-xs font-semibold text-primary tracking-wide">
            <Phone className="w-3.5 h-3.5" />
            910 338 655
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1 uppercase tracking-widest">
                {l.label}
              </a>
            ))}
            <a href="tel:+351910338655" className="flex items-center gap-2 text-primary text-sm font-semibold pt-3 border-t border-border">
              <Phone className="w-4 h-4" /> 910 338 655
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
