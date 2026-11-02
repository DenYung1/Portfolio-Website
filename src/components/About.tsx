import React from 'react';
import { Code, Coffee, Lightbulb, Users, ArrowRight, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges"
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills"
    },
    {
      icon: <Coffee className="w-8 h-8 text-yellow-400" />,
      title: "Passion",
      description: "Continuously learning and staying up-to-date with tech trends"
    }
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "15+", label: "Technologies Mastered" }
  ];

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference
          </p>
        </div>

        {/* Enhanced Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Crafting Digital Experiences with Purpose
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm Dennis Tetteh Abayateye, a dedicated full-stack developer based in Accra, Ghana. 
              My journey in web development began with a simple curiosity about how websites work, 
              and has evolved into a passionate career creating digital experiences that solve real-world problems.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              With expertise spanning both front-end and back-end technologies, I bring a holistic 
              approach to web development. I believe in writing clean, maintainable code and creating 
              intuitive user interfaces that not only look great but perform exceptionally.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or mentoring aspiring developers. I'm passionate about the Ghanaian tech ecosystem 
              and believe in the power of technology to drive positive change in our communities.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleProjectsClick}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <span>See My Work</span>
                <ArrowRight size={18} />
              </button>
              <button
                onClick={handleContactClick}
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Let's Talk</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
                <div className="mb-4">{item.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              With 5+ years of experience and a proven track record of delivering exceptional results, 
              I'm ready to help bring your next project to life. Let's create something amazing together.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Expert Development</h4>
                <p className="text-blue-100 text-sm">5+ years of professional experience</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Proven Results</h4>
                <p className="text-blue-100 text-sm">50+ successful projects delivered</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Quality Focused</h4>
                <p className="text-blue-100 text-sm">Clean code and best practices</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactClick}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="mailto:dennisabayateye@gmail.com?subject=Project%20Inquiry&body=Hi%20Dennis,%0A%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.%20Based%20on%20your%20experience,%20I%20think%20you'd%20be%20a%20great%20fit%20for:%0A%0A[Describe%20your%20project]%0A%0ABest%20regards,"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Quick Email</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;