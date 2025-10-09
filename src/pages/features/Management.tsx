import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Monitor, Smartphone, Cloud, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import managementImage from "@/assets/software-management-new.png";

const benefits = [
  {
    icon: Monitor,
    title: "Dashboard Centralizzata",
    description: "Controlla tutte le stampanti da un'unica interfaccia intuitiva"
  },
  {
    icon: Smartphone,
    title: "Controllo Remoto",
    description: "Gestisci le tue stampanti ovunque tu sia, da qualsiasi dispositivo"
  },
  {
    icon: Cloud,
    title: "Cloud-Based",
    description: "Accedi ai tuoi dati e controlli da qualsiasi luogo"
  },
  {
    icon: BarChart3,
    title: "Analytics Real-Time",
    description: "Monitora performance e produttività in tempo reale"
  }
];

const features = [
  "Gestione centralizzata di tutte le stampanti",
  "Monitoraggio real-time dello stato di ogni macchina",
  "Controllo remoto completo delle stampanti",
  "Gestione intelligente della coda di stampa",
  "Notifiche push su mobile e desktop",
  "Scheduling automatico dei lavori",
  "Bilanciamento del carico tra stampanti",
  "Report dettagliati su utilizzo e performance",
  "Gestione gruppi e permessi utenti",
  "API per integrazioni personalizzate"
];

const Management = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
                <span className="text-primary font-medium">Gestione Multi-Stampante</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Controllo Totale
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Su Tutte le Stampanti
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Gestisci decine o centinaia di stampanti 3D da un'unica dashboard centralizzata. 
                Monitora, controlla e ottimizza la tua produzione in tempo reale.
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
              <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-glow backdrop-blur-sm group hover:border-primary/40 transition-all bg-slate-900 p-4">
                <img 
                  src={managementImage} 
                  alt="Dashboard gestione multi-stampante Forma Factory"
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              
              <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-card/90 border border-primary/30 rounded-2xl p-3 sm:p-6 backdrop-blur-xl shadow-elegant animate-scale-in hover:scale-105 transition-transform max-w-[90%] sm:max-w-none" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow flex-shrink-0">
                    <span className="text-xl sm:text-2xl">🎯</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-foreground text-sm sm:text-base truncate">Controllo Centralizzato</div>
                    <div className="text-xs sm:text-sm text-muted-foreground truncate">Dashboard unificata</div>
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
              Perché Scegliere la Nostra Soluzione
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Una piattaforma completa per gestire la tua farm di stampanti 3D
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
              Funzionalità Complete
            </h2>
            <p className="text-xl text-muted-foreground">
              Tutto ciò di cui hai bisogno per gestire la tua produzione
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

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                10,000+
              </div>
              <p className="text-xl text-muted-foreground">Stampanti Gestite</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <p className="text-xl text-muted-foreground">Uptime Garantito</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <p className="text-xl text-muted-foreground">Supporto Dedicato</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Inizia a Gestire le Tue Stampanti Oggi
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Prova gratuitamente per 30 giorni. Nessuna carta di credito richiesta.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Inizia Prova Gratuita</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Management;