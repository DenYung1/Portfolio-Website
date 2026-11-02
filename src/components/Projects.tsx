import React from 'react';
import { Github, ExternalLink, Code, Smartphone, Globe, ArrowRight, Mail } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'School Management System',
      description: 'A complete school administration platform designed to streamline student records, attendance, class management, and academic tracking in one modern dashboard.',
      image: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Dashboard', 'System Design'],
      githubUrl: '#',
      liveUrl: 'https://denyung1.github.io/school-management-system/index.html',
      category: 'Web App'
    },
    {
      title: 'AcademicEase',
      description: 'An intelligent AI-powered study assistant that helps students optimize their learning experience. Features personalized study plans, AI-driven content recommendations, and smart progress tracking to enhance academic performance.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'AI/ML', 'Node.js', 'Python', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: 'https://academicease.ct.ws/',
      category: 'Web App'
    },
    {
      title: 'Stoqu',
      description: 'A smart inventory management system that helps businesses track stock, manage products, and streamline their inventory operations.',
      image: 'https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Inventory Management', 'Dashboard', 'Web App'],
      githubUrl: '#',
      liveUrl: 'https://stoqu.netlify.app/',
      category: 'Web App'
    },
    {
      title: 'Terra Vista',
      description: 'A captivating tourism website showcasing beautiful destinations and travel experiences. Features stunning imagery, destination guides, and travel planning tools.',
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      githubUrl: 'https://github.com/DenYung1/Terra-Vista',
      liveUrl: 'https://denyung1.github.io/Terra-Vista/',
      category: 'Website'
    },
    {
      title: 'GodMade Tote Bags',
      description: 'An elegant e-commerce website for premium tote bags featuring modern design, product showcase, and responsive layout. Built with clean HTML, CSS, and JavaScript.',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      githubUrl: 'https://github.com/DenYung1/GodMade-Tote-Bags',
      liveUrl: 'https://denyung1.github.io/GodMade-Tote-Bags/',
      category: 'Website'
    },
    {
      title: 'Dennis Bakery',
      description: 'A delightful bakery website showcasing fresh baked goods with an appetizing design. Features product galleries, menu sections, and contact information.',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/DenYung1/Dennis-Bakery',
      liveUrl: 'https://denyung1.github.io/Dennis-Bakery/',
      category: 'Website'
    },
    {
      title: 'Amazing Aqua',
      description: 'Refreshing beverages crafted with passion for every moment of your day. A vibrant beverage website featuring product showcases and brand storytelling.',
      image: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Animation'],
      githubUrl: 'https://github.com/DenYung1/Amazing-Aqua',
      liveUrl: 'https://denyung1.github.io/Amazing-Aqua/',
      category: 'Website'
    },
    {
      title: 'Green',
      description: 'An eco-friendly website promoting sustainability and green living. Features environmental themes with modern web design and interactive elements.',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Green Design'],
      githubUrl: 'https://github.com/DenYung1/Green',
      liveUrl: 'https://denyung1.github.io/Green/',
      category: 'Website'
    },
    {
      title: 'Coffee Website',
      description: 'A rich and aromatic coffee shop website with warm design elements. Features coffee menu, brewing guides, and an inviting atmosphere through design.',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
      githubUrl: 'https://github.com/DenYung1/Coffee-Website',
      liveUrl: 'https://denyung1.github.io/Coffee-Website/',
      category: 'Website'
    },
    {
      title: 'GreenGrow',
      description: 'A gardening and plant care website promoting green living and sustainable gardening practices. Features plant guides and gardening tips.',
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      githubUrl: 'https://github.com/DenYung1/GreenGrow',
      liveUrl: 'https://denyung1.github.io/GreenGrow/',
      category: 'Website'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web App':
        return <Globe className="w-5 h-5" />;
      case 'Mobile App':
        return <Smartphone className="w-5 h-5" />;
      case 'Website':
        return <Code className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  {project.githubUrl !== '#' ? (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-gray-400">
                      <Github size={18} />
                      <span className="text-sm">Private</span>
                    </div>
                  )}
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Impressed by What You See?</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              These projects represent just a glimpse of what's possible. I'd love to create something amazing for you too. 
              Whether you need a stunning website, a powerful web application, or a complete digital solution, let's make it happen.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Custom Development</h4>
                <p className="text-gray-600 text-sm">Tailored solutions built to your exact specifications</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Responsive Design</h4>
                <p className="text-gray-600 text-sm">Beautiful interfaces that work on all devices</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Fast Delivery</h4>
                <p className="text-gray-600 text-sm">Efficient development process with timely delivery</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </button>
              <a
                href="mailto:dennisabayateye@gmail.com?subject=Project%20Inquiry%20-%20Portfolio&body=Hi%20Dennis,%0A%0AI%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you.%20Here's%20what%20I%20have%20in%20mind:%0A%0A[Describe%20your%20project]%0A%0ABest%20regards,"
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                <span>Quick Quote</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/DenYung1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors duration-200"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;