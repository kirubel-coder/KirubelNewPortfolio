import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/kirubel-coder', 
      label: 'GitHub',
      hoverColor: 'hover:text-primary-glow' 
    },
    { 
      icon: Linkedin, 
      href: '#', 
      label: 'LinkedIn',
      hoverColor: 'hover:text-secondary-glow' 
    },
    { 
      icon: Mail, 
      href: 'mailto:kirubeladdis364@gmail.com', 
      label: 'Email',
      hoverColor: 'hover:text-accent-glow' 
    },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-hero border-t border-border">
      {/* Background Effects */}
      <div className="absolute inset-0 matrix-bg opacity-30" />
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-space gradient-text">
                Kirubel Addis
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Forward-thinking fullstack developer and UX/UI designer 
              specializing in modern web development and innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-2 rounded-lg bg-card/50 border border-border transition-all duration-300 hover-scale ${social.hoverColor} hover:shadow-glow-primary`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Ready to collaborate on your next project?</p>
              <a 
                href="mailto:kirubel@example.com"
                className="block text-primary hover:text-primary-glow transition-colors duration-300"
              >
                kirubeladdis364@gmail.com
              </a>
              <a 
                href="tel:+25199424291"
                className="block text-primary hover:text-primary-glow transition-colors duration-300"
              >
                +251997424291
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Kirubel Addis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;