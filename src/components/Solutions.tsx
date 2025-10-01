import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog, Monitor, GraduationCap } from "lucide-react";
import automationImage from "@/assets/automation-system.jpg";
import softwareImage from "@/assets/software-management.jpg";
import educationalImage from "@/assets/educational-platform.jpg";

const solutions = [
  {
    icon: Cog,
    title: "Sistema di Automatizzazione",
    description: "Cambio automatico dei piatti di stampa per una produzione continua e senza interruzioni",
    image: automationImage,
    features: ["Cambio automatico piatti", "Produzione continua 24/7", "Ottimizzazione del flusso"]
  },
  {
    icon: Monitor,
    title: "Software di Gestione",
    description: "Piattaforma completa per gestire le tue stampanti e ottimizzare la coda di stampa",
    image: softwareImage,
    features: ["Gestione multi-stampante", "Coda intelligente", "Monitoraggio in tempo reale"]
  },
  {
    icon: GraduationCap,
    title: "Piattaforma Didattica",
    description: "Integra la stampa 3D con corsi e formazione per un apprendimento completo",
    image: educationalImage,
    features: ["Corsi interattivi", "Progetti guidati", "Certificazioni"]
  }
];

const Solutions = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Le Nostre Soluzioni
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologie all'avanguardia per trasformare il tuo processo di stampa 3D
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card 
                key={index}
                className="group bg-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/50 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute top-4 left-4 p-3 rounded-lg bg-primary/20 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
