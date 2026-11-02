import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-blue-400">Dennis</span>Portfolio
          </div>
          <p className="text-gray-400 mb-4">
            Crafting digital experiences with passion and precision
          </p>
          <div className="flex items-center justify-center gap-1 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Dennis Tetteh Abayateye</span>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Dennis Tetteh Abayateye. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;