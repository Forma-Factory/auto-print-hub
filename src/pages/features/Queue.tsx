import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Clock, TrendingUp, RefreshCw, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Queue = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                <span className="text-primary font-medium">Gestione Coda</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Ottimizzazione Intelligente
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  della Coda di Stampa
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Il nostro sistema di gestione coda analizza automaticamente i tuoi lavori di stampa, 
                ottimizza le priorità e bilancia il carico tra le stampanti disponibili per massimizzare 
                l'efficienza produttiva.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/contact">
                    Richiedi Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/features">Tutte le Features</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <Card className="relative bg-gradient-card border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Coda di Stampa</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Progetto A", priority: "Alta", time: "2h 30m", status: "In stampa" },
                    { name: "Progetto B", priority: "Media", time: "1h 45m", status: "In coda" },
                    { name: "Progetto C", priority: "Alta", time: "3h 15m", status: "In coda" },
                    { name: "Progetto D", priority: "Bassa", time: "4h 00m", status: "In coda" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.time}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.priority === "Alta" ? "bg-primary/20 text-primary" :
                          item.priority === "Media" ? "bg-accent/20 text-accent" :
                          "bg-muted text-muted-foreground"
                        }`}>
                          {item.priority}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Funzionalità Avanzate di Gestione
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tecnologie intelligenti per ottimizzare ogni aspetto della tua produzione
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Priorità Automatica",
                description: "L'algoritmo analizza urgenza, dimensioni e materiali per ottimizzare l'ordine"
              },
              {
                icon: TrendingUp,
                title: "Bilanciamento Carico",
                description: "Distribuzione intelligente dei lavori tra le stampanti disponibili"
              },
              {
                icon: Clock,
                title: "Scheduling Avanzato",
                description: "Pianifica stampe future considerando disponibilità e materiali"
              },
              {
                icon: RefreshCw,
                title: "Riorganizzazione Live",
                description: "Modifica priorità in tempo reale senza interrompere la produzione"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-elegant animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 w-fit mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Massimizza l'Efficienza Produttiva
              </h2>
              <p className="text-lg text-muted-foreground">
                Il sistema di gestione coda intelligente riduce i tempi morti, ottimizza l'uso delle risorse 
                e garantisce che i lavori urgenti vengano completati per primi, aumentando la produttività 
                complessiva fino al 40%.
              </p>
              <ul className="space-y-4">
                {[
                  "Riduzione tempi di attesa fino al 50%",
                  "Ottimizzazione automatica delle risorse",
                  "Priorità dinamiche basate su urgenza",
                  "Previsioni accurate sui tempi di completamento",
                  "Notifiche automatiche agli utenti"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-primary/20">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "40%", label: "Aumento Produttività" },
                { value: "50%", label: "Riduzione Tempi Morti" },
                { value: "99%", label: "Precisione Scheduling" },
                { value: "24/7", label: "Ottimizzazione Continua" }
              ].map((stat, i) => (
                <Card 
                  key={i}
                  className="bg-gradient-card border-border/50 text-center animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <CardDescription className="text-sm">{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto a Ottimizzare la Tua Produzione?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Scopri come il nostro sistema di gestione coda può trasformare il tuo workflow produttivo
          </p>
          <Button size="lg" className="group" asChild>
            <Link to="/contact">
              Contattaci Ora
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Queue;
