import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog, Monitor, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import automationImage from "@/assets/automation-system.jpg";
import softwareImage from "@/assets/software-management-new.png";
import educationalImage from "@/assets/educational-platform.jpg";

const solutions = [
  {
    icon: Cog,
    title: "Sistema di Automatizzazione",
    description: "Cambio automatico dei piatti di stampa per una produzione continua e senza interruzioni",
    image: automationImage,
    features: ["Cambio automatico piatti", "Produzione continua 24/7", "Ottimizzazione del flusso"],
    link: "/features/automation"
  },
  {
    icon: Monitor,
    title: "Software di Gestione",
    description: "Piattaforma completa per gestire le tue stampanti e ottimizzare la coda di stampa",
    image: softwareImage,
    features: ["Gestione multi-stampante", "Coda intelligente", "Monitoraggio in tempo reale"],
    link: "/features/management"
  },
  {
    icon: GraduationCap,
    title: "Piattaforma Didattica",
    description: "Integra la stampa 3D con corsi e formazione per un apprendimento completo",
    image: educationalImage,
    features: ["Corsi interattivi", "Progetti guidati", "Certificazioni"],
    link: "/features/education"
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-4">
            <span className="text-primary font-medium">Le Nostre Tecnologie</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Soluzioni All'Avanguardia
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tecnologie innovative per trasformare radicalmente il tuo processo di stampa 3D
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Link 
                key={index}
                to={solution.link}
                className="block"
              >
                <Card 
                  className="group bg-gradient-card border-border/50 hover:border-primary/50 overflow-hidden hover:shadow-elegant transition-all duration-500 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={`${solution.title} - soluzione per stampa 3D`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 group-hover:bg-primary/30 transition-all group-hover:scale-110">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="mr-3 h-2 w-2 rounded-full bg-gradient-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
