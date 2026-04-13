import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <img src={logo} alt="Lourenço Motors" className="h-16 w-auto mb-4 object-contain" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Compra, venda, troca, consignação, consultoria e importação automóvel há mais de 30 anos.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wide mb-4">Contactos</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a href="tel:+351910338655" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> +351 910 338 655
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              R. da Liberdade 19a, 1675-137 Pontinha
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wide mb-4">Redes Sociais</h4>
          <div className="flex gap-3">
            <a href="https://instagram.com/lourencomotorspt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/LourencoMotors" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lourenço Motors Automotive. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
