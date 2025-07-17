import { Code, Palette, Smartphone, Cloud, Database, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive, interactive, and performant user interfaces using modern frameworks like React, Vue.js, and Angular.',
      features: ['React & Vue.js', 'TypeScript', 'Responsive Design', 'Performance Optimization'],
      price: 'Starting at $2,500',
      color: 'primary'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Creating robust server-side applications, APIs, and database architectures that scale with your business needs.',
      features: ['Node.js & Express', 'RESTful APIs', 'Database Design', 'Authentication & Security'],
      price: 'Starting at $3,000',
      color: 'secondary'
    },
    {
      icon: Palette,
      title: 'UX/UI Design',
      description: 'Designing intuitive and visually appealing interfaces that provide exceptional user experiences across all devices.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $2,000',
      color: 'accent'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications that deliver native performance and user experience.',
      features: ['React Native', 'iOS & Android', 'App Store Deployment', 'Push Notifications'],
      price: 'Starting at $4,000',
      color: 'primary'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Implementing scalable cloud infrastructure and deployment strategies for modern web applications.',
      features: ['AWS & Azure', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Monitoring & Logging'],
      price: 'Starting at $3,500',
      color: 'secondary'
    },
    {
      icon: Zap,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development services covering everything from concept to deployment and maintenance.',
      features: ['Complete Web Apps', 'E-commerce Platforms', 'SaaS Applications', 'Technical Consulting'],
      price: 'Custom Pricing',
      color: 'accent'
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your vision, goals, and requirements through detailed consultation.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Creating detailed project roadmaps, wireframes, and technical specifications.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your solution using agile methodologies with regular updates and feedback.'
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Comprehensive testing across devices, browsers, and use cases to ensure quality.'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Launching your project with proper setup, optimization, and documentation.'
    },
    {
      step: '06',
      title: 'Support',
      description: 'Ongoing maintenance, updates, and support to keep your project running smoothly.'
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/20 hover:border-primary/40 bg-primary/5';
      case 'secondary':
        return 'border-secondary/20 hover:border-secondary/40 bg-secondary/5';
      case 'accent':
        return 'border-accent/20 hover:border-accent/40 bg-accent/5';
      default:
        return 'border-border hover:border-primary/40';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to bring your ideas to life 
            with cutting-edge technology and exceptional design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-lg border-2 transition-all duration-300 hover-scale cyber-border ${getColorClasses(service.color)}`}
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-full border border-border group-hover:shadow-glow-primary transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="pt-4 border-t border-border">
                  <div className="text-lg font-semibold text-primary mb-4">
                    {service.price}
                  </div>
                  <Button className="w-full cyber-border hover-glow-primary">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures quality delivery and client satisfaction at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="bg-card border border-border rounded-lg p-6 hover-scale cyber-border">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-background font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-hero p-12 rounded-lg border border-border">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your <span className="gradient-text">Project</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom solution that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="cyber-border hover-glow-primary">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="cyber-border hover-glow-secondary">
              <Link to="/projects">View Portfolio</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;