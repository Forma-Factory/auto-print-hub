import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfetto per iniziare",
    features: [
      "Fino a 2 stampanti",
      "1 GB cloud storage",
      "1 utente",
      "Controllo stampante completo",
      "Gestione filamenti",
      "Streaming video base"
    ],
    cta: "Inizia Gratis",
    popular: false
  },
  {
    name: "Professional",
    price: "49",
    description: "Per piccole produzioni",
    features: [
      "Fino a 10 stampanti",
      "50 GB cloud storage",
      "Fino a 5 utenti",
      "Tutte le features Free",
      "Coda intelligente",
      "Analytics avanzate",
      "Supporto prioritario",
      "Sistema automatizzazione",
      "Piattaforma didattica"
    ],
    cta: "Inizia la Prova",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Per grandi produzioni",
    features: [
      "Stampanti illimitate",
      "Storage illimitato",
      "Utenti illimitati",
      "Tutte le features Professional",
      "API personalizzate",
      "Integrazioni custom",
      "Supporto dedicato 24/7",
      "SLA garantito",
      "On-premise disponibile"
    ],
    cta: "Contattaci",
    popular: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6 animate-fade-in">
            <span className="text-primary font-medium">Prezzi Trasparenti</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Scegli il Piano
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Perfetto per Te
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed">
            Soluzioni flessibili per ogni esigenza, dalla startup alla grande azienda
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative bg-gradient-card border-border/50 overflow-hidden transition-all duration-500 animate-fade-in ${
                  plan.popular 
                    ? "border-primary/50 shadow-elegant scale-105 md:scale-110" 
                    : "hover:border-primary/30 hover:shadow-lg"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-bl-lg">
                    PIÙ POPOLARE
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-6">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-baseline justify-center gap-2">
                    {plan.price !== "Custom" ? (
                      <>
                        <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          €{plan.price}
                        </span>
                        <span className="text-muted-foreground">/mese</span>
                      </>
                    ) : (
                      <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button 
                    className={`w-full mb-8 ${
                      plan.popular 
                        ? "bg-gradient-primary hover:opacity-90" 
                        : "bg-primary hover:bg-primary/90"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Domande Frequenti</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Hai domande? Siamo qui per aiutarti
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Contatta il Supporto
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
