import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 blob animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 blob-secondary animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">Welcome to my portfolio</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hello, I'm{" "}
              <span className="gradient-text">Chhavi Sunil Pancholi</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              AI & ML Engineer | Software Developer | Full-Stack Enthusiast
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Pre-final year CSE (AI & ML) student with a passion for building intelligent solutions. 
              I love solving real-world problems through AI/ML, NLP, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6">
              <span className="text-muted-foreground text-sm">Find me on:</span>
              <a
                href="https://github.com/chhavi-29"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              >
                <Github size={20} className="text-foreground" />
              </a>
              <a
                href="https://linkedin.com/in/chhavi-pancholi-6b9b792b3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin size={20} className="text-foreground" />
              </a>
              <a
                href="mailto:pancholi.chhavi3@gmail.com"
                className="p-3 rounded-full bg-card shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              >
                <Mail size={20} className="text-foreground" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 gradient-bg rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full animate-float" style={{ animationDelay: "1s" }} />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full animate-float" style={{ animationDelay: "3s" }} />
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-card shadow-glow">
                <img
                  src={profilePhoto}
                  alt="Chhavi Sunil Pancholi - AI/ML Engineer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats badge */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-card p-4 rounded-2xl shadow-card">
                <div className="text-center">
                  <p className="text-3xl font-bold gradient-text">8.97</p>
                  <p className="text-sm text-muted-foreground">CGPA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
