import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Inserisci un'email valida"),
  company: z.string().optional(),
  message: z.string().min(10, "Il messaggio deve contenere almeno 10 caratteri"),
});
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: values,
      });

      if (error) throw error;

      toast({
        title: "Messaggio inviato!",
        description: "Ti risponderemo entro 24 ore.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6 animate-fade-in">
            <span className="text-primary font-medium">Contattaci</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in leading-[1.3]">
            Parliamo del Tuo
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-2">
              Progetto
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed">
            Siamo pronti ad aiutarti a trasformare la tua produzione con le nostre soluzioni innovative
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-3xl">Invia un Messaggio</CardTitle>
                <CardDescription className="text-base">
                  Compila il form e ti risponderemo entro 24 ore
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome e Cognome</FormLabel>
                          <FormControl>
                            <Input placeholder="Mario Rossi" className="bg-background/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="mario@azienda.it" className="bg-background/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Azienda (opzionale)</FormLabel>
                          <FormControl>
                            <Input placeholder="La tua azienda" className="bg-background/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Messaggio</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Raccontaci delle tue esigenze..." className="bg-background/50 min-h-[150px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Invio in corso..." : "Invia Messaggio"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-8">Informazioni di Contatto</h3>
                
                <div className="space-y-6">
                  <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="flex items-start gap-4 pt-6">
                      <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground">formafactory.eu@gmail.com</p>
                        
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="flex items-start gap-4 pt-6">
                      <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Telefono</h4>
                        <p className="text-muted-foreground">+39 328 597 3737</p>
                        <p className="text-sm text-muted-foreground/70">Lun-Ven: 9:00 - 18:00</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="flex items-start gap-4 pt-6">
                      <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Sede</h4>
                        <p className="text-muted-foreground">Via porta posillipo 68</p>
                        <p className="text-muted-foreground">80122 Napoli, Italia</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="bg-gradient-primary border-0 text-primary-foreground animate-fade-in">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold mb-2">Vuoi una Demo?</h4>
                  <p className="mb-4 opacity-90">
                    Prenota una demo personalizzata e scopri come Forma Factory può 
                    rivoluzionare la tua produzione
                  </p>
                  <Button variant="secondary" className="w-full">
                    Prenota Demo Gratuita
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;