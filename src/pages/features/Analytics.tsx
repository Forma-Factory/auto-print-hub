import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, BarChart3, TrendingUp, PieChart, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import analyticsImage from "@/assets/feature-analytics.jpg";

const benefits = [
  {
    icon: BarChart3,
    title: "Dashboard Real-Time",
    description: "Visualizza KPI e metriche aggiornate in tempo reale"
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Identifica trend e ottimizza la produzione nel tempo"
  },
  {
    icon: PieChart,
    title: "Report Dettagliati",
    description: "Report personalizzabili per ogni aspetto della produzione"
  },
  {
    icon: LineChart,
    title: "Previsioni AI",
    description: "Previsioni intelligenti su costi, tempi e manutenzione"
  }
];

const metrics = [
  "Tempo di stampa totale e per stampante",
  "Tasso di successo delle stampe",
  "Utilizzo materiali per tipo",
  "Costo per stampa e per progetto",
  "Tempo di inattività delle macchine",
  "Efficienza energetica",
  "Performance operatori",
  "ROI per stampante",
  "Manutenzione predittiva",
  "Analisi qualità stampe",
  "Confronto periodo su periodo",
  "Export dati in formato Excel/CSV"
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
                <span className="text-primary font-medium">Analytics Avanzate</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Dati che Guidano
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  le Decisioni
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Sistema di analytics completo per monitorare, analizzare e ottimizzare ogni aspetto 
                della tua produzione 3D. Trasforma i dati in decisioni strategiche.
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
                  src={analyticsImage} 
                  alt="Dashboard analytics Forma Factory"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              
              <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-card/90 border border-primary/30 rounded-2xl p-3 sm:p-6 backdrop-blur-xl shadow-elegant animate-scale-in hover:scale-105 transition-transform max-w-[90%] sm:max-w-none" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow flex-shrink-0">
                    <span className="text-xl sm:text-2xl">📈</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-foreground text-sm sm:text-base truncate">Intelligence AI</div>
                    <div className="text-xs sm:text-sm text-muted-foreground truncate">Decisioni data-driven</div>
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
              Intelligence per la Tua Produzione
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Analisi approfondite per massimizzare efficienza e profitti
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

      {/* Metrics Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Metriche Disponibili
            </h2>
            <p className="text-xl text-muted-foreground">
              Traccia ogni aspetto importante della tua produzione
            </p>
          </div>
          
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="mt-1 p-1 rounded-full bg-primary/20">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">{metric}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Dashboard Personalizzabili
            </h2>
            <p className="text-xl text-muted-foreground">
              Crea le viste perfette per il tuo business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Vista Operativa</CardTitle>
                <CardDescription>
                  Monitor in tempo reale per operatori e tecnici con focus su stato macchine e code di lavoro
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Vista Management</CardTitle>
                <CardDescription>
                  KPI strategici, trend e analisi comparative per decisioni di business
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Vista Finanziaria</CardTitle>
                <CardDescription>
                  Analisi costi, ricavi, margini e ROI per ogni progetto e cliente
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Vista Manutenzione</CardTitle>
                <CardDescription>
                  Tracking manutenzioni, previsioni guasti e ottimizzazione interventi
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Impatto Misurabile sul Business
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            I nostri clienti riportano risultati significativi dopo l'implementazione
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                +35%
              </div>
              <p className="text-xl text-muted-foreground">Efficienza Produttiva</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                -25%
              </div>
              <p className="text-xl text-muted-foreground">Costi Operativi</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                +50%
              </div>
              <p className="text-xl text-muted-foreground">ROI Anno 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Inizia a Ottimizzare la Tua Produzione
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Scopri come le nostre analytics possono trasformare il tuo business
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Richiedi Demo Personalizzata</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics;