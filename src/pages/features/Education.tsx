import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, GraduationCap, BookOpen, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import educationImage from "@/assets/feature-education.jpg";

const benefits = [
  {
    icon: BookOpen,
    title: "Corsi Completi",
    description: "Dalla teoria alla pratica con progetti guidati step-by-step"
  },
  {
    icon: Award,
    title: "Certificazioni",
    description: "Certificazioni riconosciute per validare le competenze acquisite"
  },
  {
    icon: Users,
    title: "Community Attiva",
    description: "Connettiti con altri studenti e professionisti del settore"
  },
  {
    icon: GraduationCap,
    title: "Docenti Esperti",
    description: "Impara dai migliori professionisti della stampa 3D"
  }
];

const courses = [
  "Fondamenti della Stampa 3D",
  "Tecnologie FDM Avanzate",
  "Stampa in Resina (SLA/DLP)",
  "Design per la Manifattura Additiva",
  "Post-Processing e Finitura",
  "Gestione della Produzione 3D",
  "Manutenzione delle Stampanti",
  "Ottimizzazione dei Parametri di Stampa",
  "Materiali Avanzati",
  "Business della Stampa 3D"
];

const features = [
  "Video tutorial HD con spiegazioni dettagliate",
  "Progetti pratici con file scaricabili",
  "Quiz e test di valutazione",
  "Certificati di completamento",
  "Accesso a vita ai contenuti",
  "Aggiornamenti continui dei corsi"
];

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
                <span className="text-primary font-medium">Piattaforma Didattica</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Impara la Stampa 3D
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  dai Professionisti
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Una piattaforma educativa completa integrata nel nostro sistema. Corsi professionali, 
                progetti pratici e certificazioni riconosciute per diventare un esperto di stampa 3D.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                  <Link to="/contact">Scopri i Corsi</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pricing">Vedi Prezzi</Link>
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img 
                src={educationImage} 
                alt="Piattaforma educativa Forma Factory"
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
              Perché Scegliere i Nostri Corsi
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un percorso formativo completo per ogni livello di competenza
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

      {/* Courses Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Catalogo Corsi Disponibili
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dal livello base all'avanzato, copriamo tutti gli aspetti della stampa 3D
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {courses.map((course, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-primary/20">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{course}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gradient-card border-border/50 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Caratteristiche dei Corsi</CardTitle>
            </CardHeader>
            <CardContent>
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
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-xl text-muted-foreground">Corsi Disponibili</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                5,000+
              </div>
              <p className="text-xl text-muted-foreground">Studenti Attivi</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                200+
              </div>
              <p className="text-xl text-muted-foreground">Ore di Contenuti</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                98%
              </div>
              <p className="text-xl text-muted-foreground">Soddisfazione</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Inizia il Tuo Percorso Formativo Oggi
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Accedi a tutti i corsi con una singola sottoscrizione. Primo mese gratuito!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Inizia Gratis</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;