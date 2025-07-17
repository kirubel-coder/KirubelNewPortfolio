import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'kirubel@example.com',
      description: 'Send me an email anytime!'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (234) 567-8900',
      description: 'Call me for urgent inquiries'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'San Francisco, CA',
      description: 'Available for remote work worldwide'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: '< 24 hours',
      description: 'I reply to all messages quickly'
    }
  ];

  const services = [
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Backend Development',
    'Cloud Solutions',
    'Consulting'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create 
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Start a Conversation</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with innovative minds. 
                Whether you have a clear vision or just an idea, I'm here to help turn it into reality.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="p-6 bg-card border border-border rounded-lg hover-scale cyber-border group"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-sm text-primary">{info.details}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </div>
              ))}
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Services I Offer</h3>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <span 
                    key={service}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md border border-primary/20"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 bg-gradient-hero border border-border rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Currently Available</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm accepting new projects and would love to hear about your ideas. 
                Let's schedule a free consultation to discuss your requirements.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-card border border-border rounded-lg p-8 cyber-border">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, timeline, and requirements..."
                    rows={6}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={!isFormValid || isSubmitting}
                  className="w-full cyber-border hover-glow-primary group"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Quick Response Guarantee:</strong> I respond to all inquiries within 24 hours. 
                  For urgent projects, feel free to call me directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about working with me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity, but most web projects take 2-6 weeks, while mobile apps typically require 8-12 weeks."
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes! I provide 30 days of free support after project completion, plus ongoing maintenance packages."
              },
              {
                question: "What's your payment structure?",
                answer: "I typically work with 50% upfront and 50% upon completion, with milestone payments for larger projects."
              },
              {
                question: "Can you work with existing teams?",
                answer: "Absolutely! I often collaborate with existing development teams and can adapt to your workflow and tools."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="p-6 bg-card border border-border rounded-lg cyber-border hover-scale"
              >
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;