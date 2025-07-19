import { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';
import kLogo from '@/assets/upworkPfpCropped2.jpg';
import MovieRatingPic1 from '@/assets/movierating1.png';
import Closet1 from '@/assets/closet1.png';
import Danat1 from '@/assets/danat1.png';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = "Fullstack Developer & UX/UI Designer";

  useEffect(() => {
    if (isTyping && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (typedText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [typedText, isTyping, fullText]);

  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  const recentProjects = [
    {
      title: 'Movie Rating Website For Amharic Movies',
      description: 'Modern React-based platform for movie enthusiasts',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: MovieRatingPic1
    },
    {
      title: 'Shopping WebApp | website',
      description: 'A shopping web application with product management',
      tech: ['React ', 'MongoDB', 'TypeScript'],
      image: Closet1
    },
    {
      title: 'Company Landing Page',
      description: 'A landing page for a company called Danat PLC',
      tech: ['React.js', 'Tailwind CSS', 'TypeScript'],
      image: Danat1
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroBackground} 
            alt="Futuristic Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full animate-float opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Hero Flex Layout */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <clipPath id="hero-blob" clipPathUnits="objectBoundingBox">
            <path d="M0.77,0.13 C0.89,0.7,0.98,0.68,0.73,0.86 C0.68,0.44,0.69,0.99,0.5,1 C0.31,1,0.13,0.85,0.06,0.67 C-0.01,0.79,0.01,0.28,0.13,0.14 C0.25,0,0.65,-0.01,0.77,0.13 Z" />
          </clipPath>
        </svg>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-10 animate-fade-in-up">
          {/* Hero Image with blob mask */}
          <div className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 flex-shrink-0 overflow-hidden shadow-lg mb-6 lg:mb-0">
            <img 
              src={kLogo} 
              alt="Kirubel Addis" 
              className="w-full h-full object-cover"
              style={{ clipPath: 'url(#hero-blob)' }}
            />
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left max-w-2xl w-full">
            {/* Greeting */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-muted-foreground mb-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span></span>
              <Sparkles className="h-4 w-4 text-primary" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold font-space">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block gradient-text animate-text-slide-up">
                Kirubel Addis
              </span>
            </h1>

            {/* Typing Animation */}
            <div className="text-xl md:text-2xl text-muted-foreground font-medium">
              <span className="inline-block border-r-2 border-primary animate-typing">
                {typedText}
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed mt-4">
              I craft exceptional digital experiences through innovative web development, 
              intuitive UX/UI design, and cutting-edge technology solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <Button 
                asChild 
                size="lg" 
                className="cyber-border hover-glow-primary group"
              >
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

                <Button 
                asChild 
                size="lg" 
                className="text-primary cyber-border hover-glow-primary group bg-transparent "
              >
                <Link to="/contact">
                  Contact me
                </Link>
              </Button>
              
           
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover-scale"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work featuring cutting-edge technologies and innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-lg overflow-hidden hover-scale cyber-border"
              >
                <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title + ' preview'} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="cyber-border hover-glow-primary">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;