import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-clean.png";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <img src={logo} alt="Lourenço Motors" className="h-8 w-auto opacity-80" />
      
      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
        © {new Date().getFullYear()} Lourenço Motors Automotive
      </p>

      <div className="flex gap-2">
        <a href="https://instagram.com/lourencomotorspt" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="https://facebook.com/LourencoMotors" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
          <Facebook className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
