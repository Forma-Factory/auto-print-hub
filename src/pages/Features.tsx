import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog, Monitor, GraduationCap, Zap, FileText, Camera, BarChart3, Cloud, Shield } from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "Sistema di Automatizzazione",
    description: "Cambio automatico dei piatti per produzione continua 24/7",
    features: ["Cambio piatti automatico", "Zero tempi morti", "Produzione continua"]
  },
  {
    icon: Monitor,
    title: "Gestione Multi-Stampante",
    description: "Controlla tutte le tue stampanti da un'unica dashboard",
    features: ["Dashboard centralizzata", "Controllo remoto", "Monitoraggio real-time"]
  },
  {
    icon: FileText,
    title: "Gestione Coda Intelligente",
    description: "Ottimizza automaticamente la coda di stampa",
    features: ["Priorità automatica", "Bilanciamento carico", "Scheduling avanzato"]
  },
  {
    icon: Camera,
    title: "Monitoraggio Live",
    description: "Sorveglia le tue stampe in tempo reale",
    features: ["Streaming video", "Notifiche istantanee", "Controllo remoto"]
  },
  {
    icon: GraduationCap,
    title: "Piattaforma Didattica",
    description: "Corsi e certificazioni integrate nella piattaforma",
    features: ["Corsi interattivi", "Progetti guidati", "Certificazioni"]
  },
  {
    icon: BarChart3,
    title: "Analytics Avanzate",
    description: "Statistiche dettagliate su produzione e performance",
    features: ["Report dettagliati", "KPI in tempo reale", "Analisi costi"]
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Archiviazione sicura dei tuoi file di stampa",
    features: ["Storage illimitato", "Backup automatico", "Accesso ovunque"]
  },
  {
    icon: Shield,
    title: "Sicurezza Avanzata",
    description: "Protezione dei dati e accesso controllato",
    features: ["Crittografia end-to-end", "Gestione permessi", "Audit log"]
  },
  {
    icon: Zap,
    title: "API & Integrazioni",
    description: "Integra con i tuoi sistemi esistenti",
    features: ["API RESTful", "Webhook", "Plugin personalizzati"]
  }
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6 animate-fade-in">
            <span className="text-primary font-medium">Tutte le Features</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Potenza e Innovazione
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              in Ogni Funzionalità
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed">
            Scopri tutte le funzionalità che rendono Forma Factory la soluzione più avanzata 
            per la gestione della stampa 3D professionale
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="group bg-gradient-card border-border/50 hover:border-primary/50 overflow-hidden hover:shadow-elegant transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardHeader>
                    <div className="mb-4 p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 group-hover:bg-primary/30 transition-all group-hover:scale-110 w-fit">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          <span className="mr-3 h-2 w-2 rounded-full bg-gradient-primary" />
                          {item}
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

      <Footer />
    </div>
  );
};

export default Features;
