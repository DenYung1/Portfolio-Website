import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'dennisabayateye@gmail.com',
      link: 'mailto:dennisabayateye@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+233 54 358 4177',
      link: 'tel:+233543584177'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Accra, Ghana',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/DenYung1'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dennis-abayateye-ba6078105/'
    }
  ];

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Project Inquiry - Portfolio Contact');
    const body = encodeURIComponent(`Hi Dennis,

I found your portfolio and I'm interested in discussing a potential project/opportunity.

Best regards,
[Your Name]`);
    
    window.location.href = `mailto:dennisabayateye@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-300">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-white hover:text-blue-400 transition-colors duration-200">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-white">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-gray-300 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200 transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="animate-slide-up">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Ready to Start a Project?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you. Let's discuss how we can bring your ideas to life.
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={handleEmailClick}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                >
                  <Send size={20} />
                  Send Email
                </button>
                
                <a
                  href="https://www.linkedin.com/in/dennis-abayateye-ba6078105/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
                
                <a
                  href="tel:+233543584177"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                >
                  <Phone size={20} />
                  Call Me
                </a>
              </div>
              
              <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold text-blue-400">Quick Response</span>
                </div>
                <p className="text-gray-300 text-sm">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  feel free to call or connect on LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;