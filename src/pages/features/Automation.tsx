import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Cog, Clock, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import automationImage from "@/assets/automation-system-new.png";

const benefits = [
  {
    icon: Clock,
    title: "Produzione 24/7",
    description: "Zero tempi morti grazie al cambio automatico dei piatti di stampa"
  },
  {
    icon: TrendingUp,
    title: "Efficienza +300%",
    description: "Triplicare la produttività eliminando i tempi di inattività"
  },
  {
    icon: Zap,
    title: "ROI Rapido",
    description: "Recupero dell'investimento in meno di 6 mesi"
  },
  {
    icon: Cog,
    title: "Automazione Completa",
    description: "Sistema completamente automatizzato senza intervento umano"
  }
];

const features = [
  "Cambio automatico dei piatti di stampa",
  "Gestione intelligente della coda di lavori",
  "Monitoraggio continuo dello stato",
  "Notifiche real-time su completamento lavori",
  "Calibrazione automatica tra i lavori",
  "Sistema di recupero da errori",
  "Integrazione con tutte le principali stampanti 3D",
  "Dashboard di controllo centralizzata"
];

const Automation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
                <span className="text-primary font-medium">Sistema di Automatizzazione</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Produzione Continua
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Senza Interruzioni
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Il nostro sistema di automatizzazione rivoluziona la produzione con stampa 3D, 
                permettendo una produzione continua 24/7 con cambio automatico dei piatti.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                  <Link to="/contact">Richiedi Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pricing">Vedi Prezzi</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl filter blur-3xl animate-pulse" />
              <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-glow backdrop-blur-sm group hover:border-primary/40 transition-all">
                <img 
                  src={automationImage} 
                  alt="Sistema di automatizzazione Forma Factory"
                  className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              
              <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-card/90 border border-primary/30 rounded-2xl p-3 sm:p-6 backdrop-blur-xl shadow-elegant animate-scale-in hover:scale-105 transition-transform max-w-[90%] sm:max-w-none" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow flex-shrink-0">
                    <span className="text-xl sm:text-2xl">⚙️</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-foreground text-sm sm:text-base truncate">24/7 Non-Stop</div>
                    <div className="text-xs sm:text-sm text-muted-foreground truncate">Zero tempi morti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Vantaggi del Sistema
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scopri come il nostro sistema di automatizzazione può trasformare la tua produzione
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="text-center bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-elegant"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/30 w-fit">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Funzionalità Incluse
            </h2>
            <p className="text-xl text-muted-foreground">
              Tutto ciò di cui hai bisogno per una produzione automatizzata
            </p>
          </div>
          
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="mt-1 p-1 rounded-full bg-primary/20">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Pronto a Rivoluzionare la Tua Produzione?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contattaci oggi per una demo personalizzata del nostro sistema di automatizzazione
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Richiedi Demo Gratuita</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Automation;