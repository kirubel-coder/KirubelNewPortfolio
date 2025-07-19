import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MovieRatingPic1 from '@/assets/movierating1.png';
import Closet1 from '@/assets/closet1.png';
import Danat1 from '@/assets/danat1.png';

const Projects = () => {


  const projects = [
    {
      id: 1,
      title: 'Movie Rating Website for Amharic movies',
      description: 'One of my standout projects is this movie rating web application, designed specifically for Amharic movies. It features a modern, responsive design with a user-friendly interface that allows users to rate and review movies easily.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: MovieRatingPic1,
      featured: true
    },
    {
      id: 2,
      title: 'Shopping WebApp | website',
      description: 'Another key project in my portfolio is a shopping web application focused on selling clothing items. The goal of this project was to create a seamless and user-friendly online shopping experience.',
      category: 'Mobile Apps',
      technologies: ['React', 'Node.js', 'Redux', 'MongoDB'],
      image: Closet1,
      featured: true
    },
    {
      id: 3,
      title: 'Landing page Website ',
      description: 'The purpose of this project for Danat PLC was to create a visually appealing and highly functional web presence that effectively represents the company’s brand and services. The landing page is designed with a clean and modern layout, ensuring a seamless user experience.',
      category: 'Full-Stack',
      technologies: ['React.js', 'Tailwind', 'TypeScript',],
      image: Danat1,
      featured: false
    },
    {
      id: 4,
      title: 'Healthcare Website Design',
      description: 'Complete UX/UI design for a healthcare application focusing on patient management and telemedicine capabilities.',
      category: 'UI/UX Design',
      technologies: ['Figma', 'Codepen', 'Canva', ],
      image: "https://cdn.dribbble.com/userupload/21467436/file/original-e070670b034bb599eeb8fc98085e2b65.jpg?resize=1024x768&vertical=center",
      featured: false
    },
    {
      id: 5,
      title: 'Real Estate Platform Website Design',
      description: 'Full-featured real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.',
      category: 'Web Design',
      technologies: ['Figma', 'Canva', 'Uivers',  'Codepen'],
      image: "https://cdn.dribbble.com/userupload/16607783/file/original-84341079177105105983fb8b0b3db7e9.png?resize=1024x768&vertical=center",
      featured: true
    },
    {
      id: 6,
      title: 'Fitness Tracking Website Design',
      description: 'fitness website with workout tracking, nutrition planning, and social features for fitness enthusiasts.',
      category: 'Website Design',
      technologies: ['Figma', 'Canva'],
      image: "https://cdn.dribbble.com/userupload/18181117/file/original-6e7cb3ce00e491f05cf8ce3f64d2111d.png?resize=1024x666&vertical=center",
      featured: false
    }
  ];



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





        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-card border border-border rounded-lg overflow-hidden  cyber-border"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={project.title + ' preview'}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ zIndex: 1 }}
                />
                {/* Overlay with actions */}

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