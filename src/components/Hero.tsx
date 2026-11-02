import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickContact = () => {
    const subject = encodeURIComponent('Quick Chat - Portfolio Contact');
    const body = encodeURIComponent(`Hi Dennis,

I found your portfolio and would love to have a quick chat about a potential opportunity.

Best regards,
[Your Name]`);
    
    window.location.href = `mailto:dennisabayateye@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.3),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Dennis</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8">
            Full Stack Web Developer
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, responsive, and user-friendly web applications using modern technologies. 
            Passionate about clean code and exceptional user experiences.
          </p>

          {/* Enhanced Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <span>View My Work</span>
              <ArrowDown size={18} />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              <span>Let's Talk</span>
            </button>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12 text-sm">
            <button
              onClick={handleQuickContact}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 underline underline-offset-4 hover:no-underline"
            >
              Quick Email →
            </button>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a
              href="https://www.linkedin.com/in/dennis-abayateye-ba6078105/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 underline underline-offset-4 hover:no-underline"
            >
              Connect on LinkedIn →
            </a>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a
              href="tel:+233543584177"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 underline underline-offset-4 hover:no-underline"
            >
              Call Now →
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a href="https://github.com/DenYung1" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/dennis-abayateye-ba6078105/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="mailto:dennisabayateye@gmail.com"
               className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </div>

        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-400 transition-colors duration-200 animate-bounce-slow"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;