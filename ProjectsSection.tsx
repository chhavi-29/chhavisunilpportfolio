import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Fake News Detection Model",
    period: "Mar 2025 – Apr 2025",
    description: "NLP-based classification system using TF-IDF and XGBoost for real-time fake news verification.",
    techStack: ["Python", "NLP", "TF-IDF", "XGBoost", "Flask"],
    color: "primary",
    features: [
      "Real-time fake news verification",
      "Web application deployment",
      "High accuracy classification",
    ],
  },
  {
    title: "QR-Based Billing System",
    period: "Feb 2025 – May 2025",
    description: "Modern billing system with QR scanning, automatic cart updates, and PDF bill generation.",
    techStack: ["ReactJS", "Firebase", "FastAPI", "QR Code"],
    color: "secondary",
    features: [
      "QR code scanning",
      "Automatic cart updates",
      "PDF bill generation",
      "Inventory management",
    ],
  },
  {
    title: "Health Risk Prediction System",
    period: "2024",
    description: "BMI-based health risk prediction using AdaBoost focused on early detection and data-driven insights.",
    techStack: ["Python", "AdaBoost", "Scikit-learn", "Pandas"],
    color: "accent",
    features: [
      "BMI-based risk assessment",
      "Early health detection",
      "Data-driven insights",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing my journey in building intelligent and impactful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-card rounded-3xl shadow-card card-hover overflow-hidden border-t-4 ${
                project.color === "primary"
                  ? "border-primary"
                  : project.color === "secondary"
                  ? "border-secondary"
                  : "border-accent"
              }`}
            >
              {/* Project Header */}
              <div
                className={`p-6 ${
                  project.color === "primary"
                    ? "gradient-bg"
                    : project.color === "secondary"
                    ? "gradient-secondary-bg"
                    : "gradient-accent-bg"
                }`}
              >
                <span className="text-primary-foreground/80 text-sm">{project.period}</span>
                <h3 className="font-display font-bold text-xl text-primary-foreground mt-1">
                  {project.title}
                </h3>
              </div>

              {/* Project Body */}
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground">{project.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        project.color === "primary"
                          ? "bg-primary"
                          : project.color === "secondary"
                          ? "bg-secondary"
                          : "bg-accent"
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="https://github.com/chhavi-29" target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
