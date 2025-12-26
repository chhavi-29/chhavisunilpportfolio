import { GraduationCap, Building2, Award } from "lucide-react";

const AboutSection = () => {

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Designing Solutions, <span className="gradient-text">Not Just Code</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a 3rd-year Computer Science Engineering student specializing in Artificial Intelligence 
              and Machine Learning at Shri Ramdeobaba College of Engineering and Management, Nagpur.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My passion lies in exploring the frontiers of AI/ML, Natural Language Processing, 
              agentic AI, and LLM tools. I believe in continuous learning and building impactful, 
              real-world solutions that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond technical skills, I bring creativity to the table – having served as a 
              Graphic Designer for my college's technical club, I understand the importance of 
              marrying functionality with aesthetics.
            </p>

          </div>
          {/* Education */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="text-primary" /> Education
            </h3>

            <div className="space-y-4">
              <div className="bg-card p-6 rounded-2xl shadow-card card-hover border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="p-3 gradient-bg rounded-xl">
                    <Building2 className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">B.Tech – CSE (AI & ML)</h4>
                    <p className="text-muted-foreground">
                      Shri Ramdeobaba College of Engineering and Management, Nagpur
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-primary font-semibold">2023 – Present</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-semibold">
                        CGPA: 8.97
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-card card-hover border-l-4 border-secondary">
                <div className="flex items-start gap-4">
                  <div className="p-3 gradient-secondary-bg rounded-xl">
                    <Award className="text-secondary-foreground" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">HSC</h4>
                    <p className="text-muted-foreground">Vidya Niketan College, Chandrapur</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-secondary font-semibold">2020 – 2022</span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-semibold">
                        85%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
