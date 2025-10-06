import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/automation-detail.png";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <span className="text-primary font-medium">Innovazione nella Stampa 3D</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Il Futuro della{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Stampa 3D
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            Trasformiamo la produzione con automazione intelligente, software avanzato e 
            formazione integrata. La tua stampante 3D, potenziata.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-glow transition-all">
                Inizia Ora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="group cursor-default">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-sm text-muted-foreground">Produzione Continua</div>
            </div>
            <div className="h-12 w-px bg-border/50" />
            <div className="group cursor-default">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm text-muted-foreground">Automatizzato</div>
            </div>
            <div className="h-12 w-px bg-border/50" />
            <div className="group cursor-default">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">+50%</div>
              <div className="text-sm text-muted-foreground">Efficienza</div>
            </div>
          </div>
        </div>
        
        <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl filter blur-3xl animate-pulse" />
          <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-glow backdrop-blur-sm group hover:border-primary/40 transition-all">
            <img 
              src={heroImage} 
              alt="Sistema di automazione stampa 3D con cambio automatico dei piatti"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-card/90 border border-primary/30 rounded-2xl p-6 backdrop-blur-xl shadow-elegant animate-scale-in hover:scale-105 transition-transform" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <div className="font-bold text-foreground">Automazione Totale</div>
                <div className="text-sm text-muted-foreground">Cambio piatti automatico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
