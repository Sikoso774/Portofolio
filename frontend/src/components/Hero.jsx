import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="relative">
              {/* Gradient Halo */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-green-700/30 rounded-full blur-3xl"></div>
              {/* Profile Circle */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-4 border-green-500/50 shadow-2xl">
                <span className="text-6xl sm:text-7xl font-bold text-green-400">ZK</span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white space-y-6 order-1 md:order-2">
            <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4">
              Welcome to my portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi there!
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              I'm <span className="text-green-400 font-semibold">Zoléni Kokolo Zassi</span> — a passionate IT student at ENSEA Cergy,
              specializing in Data Science, software development, and digital innovation.
              I'm driven by curiosity, creativity, and the desire to build impactful solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white group"
                onClick={scrollToProjects}
              >
                See My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
