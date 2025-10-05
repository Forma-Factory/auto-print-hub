import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Camera, Bell, PlayCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import monitoringImage from "@/assets/feature-monitoring.jpg";

const benefits = [
  {
    icon: Camera,
    title: "Streaming Live HD",
    description: "Video in alta definizione delle tue stampanti in tempo reale"
  },
  {
    icon: Bell,
    title: "Notifiche Intelligenti",
    description: "Avvisi istantanei su eventi critici e completamento lavori"
  },
  {
    icon: PlayCircle,
    title: "Timelapse Automatici",
    description: "Registrazione automatica dei timelapse per ogni stampa"
  },
  {
    icon: Shield,
    title: "Rilevamento Errori",
    description: "AI che monitora e rileva automaticamente problemi di stampa"
  }
];

const features = [
  "Streaming video live HD da ogni stampante",
  "Timelapse automatici per ogni lavoro",
  "Rilevamento automatico di errori con AI",
  "Notifiche push su mobile e desktop",
  "Controllo remoto completo",
  "Cronologia video delle ultime 30 giorni",
  "Multi-camera per vista completa",
  "Integrazione con sistemi di sicurezza",
  "Dashboard con vista multipla simultanea",
  "Registrazione su richiesta",
  "Zoom e controlli PTZ",
  "Modalità notturna con infrarossi"
];

const Monitoring = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
                <span className="text-primary font-medium">Monitoraggio Live</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Sorveglia Ogni Stampa
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  in Tempo Reale
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Sistema di monitoraggio video avanzato con AI integrata. Controlla le tue stampanti 
                da remoto, ricevi notifiche istantanee e previeni errori prima che accadano.
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
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img 
                src={monitoringImage} 
                alt="Sistema di monitoraggio Forma Factory"
                className="rounded-2xl shadow-elegant border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Tecnologia di Monitoraggio Avanzata
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              La sicurezza e il controllo che la tua produzione merita
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

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Funzionalità Complete di Monitoraggio
            </h2>
            <p className="text-xl text-muted-foreground">
              Tutto ciò di cui hai bisogno per controllare la tua produzione
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

      {/* AI Detection Section */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Rilevamento Errori con AI
            </h2>
            <p className="text-xl text-muted-foreground">
              L'intelligenza artificiale monitora costantemente le tue stampe
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Spaghetti Detection</CardTitle>
                <CardDescription>
                  Rileva automaticamente quando il filamento si stacca e crea "spaghetti"
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Layer Shift Detection</CardTitle>
                <CardDescription>
                  Identifica spostamenti di layer che potrebbero rovinare la stampa
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>First Layer Analysis</CardTitle>
                <CardDescription>
                  Verifica la qualità del primo layer per prevenire fallimenti
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <p className="text-xl text-muted-foreground">Uptime del Sistema</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                &lt;100ms
              </div>
              <p className="text-xl text-muted-foreground">Latenza Video</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                95%
              </div>
              <p className="text-xl text-muted-foreground">Precisione AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Inizia a Monitorare le Tue Stampanti Oggi
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Installa le nostre telecamere in 5 minuti e inizia subito il monitoraggio
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

export default Monitoring;