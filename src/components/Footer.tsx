import { Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Forma Factory</h3>
            <p className="text-muted-foreground">
              Soluzioni innovative per la stampa 3D professionale
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>formafactory.eu@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+39 328 597 3737</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Italia</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Link Rapidi</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="hover:text-primary transition-colors cursor-pointer">Soluzioni</div>
              <div className="hover:text-primary transition-colors cursor-pointer">Chi Siamo</div>
              <div className="hover:text-primary transition-colors cursor-pointer">Contatti</div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; 2025 Forma Factory. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;