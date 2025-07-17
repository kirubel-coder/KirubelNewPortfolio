import { Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 95, color: 'bg-primary' },
    { name: 'Backend Development', level: 90, color: 'bg-secondary' },
    { name: 'UX/UI Design', level: 88, color: 'bg-accent' },
    { name: 'Mobile Development', level: 85, color: 'bg-primary' },
    { name: 'DevOps', level: 80, color: 'bg-secondary' },
    { name: 'Database Design', level: 92, color: 'bg-accent' },
  ];

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Transforming ideas into beautiful, intuitive user experiences.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing every aspect for lightning-fast user experiences.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with teams to achieve exceptional results.'
    },
  ];

  const achievements = [
    { icon: Award, title: 'Best Developer Award 2023', org: 'Tech Excellence Awards' },
    { icon: Code, title: 'Certified React Expert', org: 'React Academy' },
    { icon: Palette, title: 'UX Design Certification', org: 'Design Institute' },
    { icon: Users, title: 'Team Leadership Certification', org: 'Management Academy' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating exceptional digital experiences through innovative 
            technology and thoughtful design.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Story */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-bold">My Journey</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Kirubel Addis, a passionate fullstack developer and UX/UI designer 
                based in the digital frontier. My journey into the world of technology began 
                with a simple curiosity about how websites work, and it has evolved into a 
                deep passion for creating meaningful digital experiences.
              </p>
              <p>
                With over 3 years of experience in the field, I specialize in building 
                modern web applications using cutting-edge technologies like React, Node.js, 
                and various cloud platforms. I believe that great design and robust 
                functionality should go hand in hand.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I'm always excited to take on new challenges 
                and push the boundaries of what's possible on the web.
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <Coffee className="h-6 w-6 text-primary" />
              <span className="text-muted-foreground">
                Fueled by coffee and driven by innovation
              </span>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my work and drive me to deliver excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group hover-scale cyber-border bg-card p-6 rounded-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition and certifications that validate my expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 p-6 bg-card border border-border rounded-lg hover-scale cyber-border"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.org}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-hero p-12 rounded-lg border border-border">
          <h2 className="text-3xl font-bold mb-4">
            Let's Create Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to work on new projects 
            and collaborate with fellow innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="cyber-border hover-glow-primary">
              <Link to="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="cyber-border hover-glow-secondary">
              <Link to="/projects">View My Work</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;