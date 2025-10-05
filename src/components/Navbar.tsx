import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Forma Factory
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="/features"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="/features/education"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Didattica
            </a>
            <a
              href="/contact"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Contatti
            </a>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.location.href = '/contact'}
            >
              Richiedi Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a
                href="/"
                className="text-foreground/80 hover:text-primary transition-colors text-left"
              >
                Home
              </a>
              <a
                href="/features"
                className="text-foreground/80 hover:text-primary transition-colors text-left"
              >
                Features
              </a>
              <a
                href="/features/education"
                className="text-foreground/80 hover:text-primary transition-colors text-left"
              >
                Didattica
              </a>
              <a
                href="/contact"
                className="text-foreground/80 hover:text-primary transition-colors text-left"
              >
                Contatti
              </a>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                onClick={() => window.location.href = '/contact'}
              >
                Richiedi Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
