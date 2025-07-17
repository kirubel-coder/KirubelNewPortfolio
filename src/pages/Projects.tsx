import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Full-Stack'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, responsive e-commerce platform built with React and Node.js featuring advanced search, payment integration, and admin dashboard.',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management Mobile App',
      description: 'Cross-platform mobile application for team collaboration and task management with real-time updates and push notifications.',
      category: 'Mobile Apps',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'SaaS Analytics Dashboard',
      description: 'Comprehensive analytics dashboard for SaaS businesses with real-time metrics, data visualization, and custom reporting.',
      category: 'Full-Stack',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'D3.js', 'Docker'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Healthcare App Design',
      description: 'Complete UX/UI design for a healthcare application focusing on patient management and telemedicine capabilities.',
      category: 'UI/UX Design',
      technologies: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'Full-featured real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.',
      category: 'Web Development',
      technologies: ['Next.js', 'Express.js', 'MySQL', 'AWS S3', 'Google Maps API'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Mobile fitness application with workout tracking, nutrition planning, and social features for fitness enthusiasts.',
      category: 'Mobile Apps',
      technologies: ['Flutter', 'Firebase', 'ML Kit', 'HealthKit'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work featuring innovative solutions, cutting-edge technologies, 
            and exceptional user experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project) => (
              <div 
                key={project.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover-scale cyber-border"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    Project Preview
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="hover-glow-primary">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="hover-glow-secondary">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4">
            <Filter className="h-5 w-5" />
            <span>Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={`cyber-border ${
                  selectedCategory === category 
                    ? 'hover-glow-primary' 
                    : 'hover-glow-secondary'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover-scale cyber-border"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  Project Image
                </div>
                
                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" className="hover-glow-primary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="hover-glow-secondary">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-md">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="cyber-border hover-glow-primary mb-8">
            Load More Projects
          </Button>
          
          <div className="bg-gradient-hero p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">
              Have a Project in <span className="gradient-text">Mind</span>?
            </h2>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new challenges and bring innovative ideas to life.
            </p>
            <Button asChild size="lg" className="cyber-border hover-glow-primary">
              <a href="/contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;