import React from 'react';
import { ArrowRight, Code, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 80 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'Express', level: 90 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 78 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Jest', level: 85 },
        { name: 'Figma', level: 80 },
      ]
    }
  ];

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="animate-slide-up">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills CTA Section */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <Zap className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">Need These Skills for Your Project?</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I combine technical expertise with creative problem-solving to deliver exceptional results. 
              Let's discuss how my skills can help bring your project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleProjectsClick}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Code size={20} />
                <span>View My Work</span>
              </button>
              <button
                onClick={handleContactClick}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Hire Me</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;