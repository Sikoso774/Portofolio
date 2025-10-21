import React from 'react';
import { Github, Mail, MapPin, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black/50 border-t border-green-500/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center text-white font-bold">
                ZK
              </div>
              <span className="text-white font-semibold text-lg">Zoléni Kokolo</span>
            </div>
            <p className="text-gray-400 text-sm">
              IT Student specializing in Data Science and Human-IT technologies. Building impactful digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {['About', 'Skills', 'Experience', 'Projects'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:zolenikokolozassi@outlook.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>zolenikokolozassi@outlook.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Chauconin-Neufmontiers, France</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-green-500/40 text-green-400 hover:bg-green-500/10 hover:border-green-400"
                onClick={() => window.open('https://github.com/Sikoso774', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                github.com/Sikoso774
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm flex items-center space-x-2">
            <span>© 2025 Zoléni Kokolo Zassi. All rights reserved.</span>
          </p>
          <p className="text-gray-400 text-sm flex items-center space-x-2">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Zoléni Kokolo Zassi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
