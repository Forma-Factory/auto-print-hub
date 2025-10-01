import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-3d-printer.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">
          Il Futuro della
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Stampa 3D
          </span>
        </h1>
        
        <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-muted-foreground">
          Soluzioni innovative di automazione e software per rivoluzionare il tuo workflow di stampa 3D
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300"
          >
            Scopri le Nostre Soluzioni
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 hover:border-primary hover:bg-primary/10"
          >
            Contattaci
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
