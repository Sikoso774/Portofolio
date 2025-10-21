import React from 'react';
import { Card } from './ui/card';
import { Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">My Journey So Far</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto"></div>
        </div>

        <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-green-500/30 backdrop-blur-sm p-8 sm:p-12">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I'm currently pursuing my <span className="text-green-400 font-semibold">Bachelor Human-IT at ENSEA de Cergy (95)</span>, 
              focusing on information technologies and their impact on society. My experiences include internships in network 
              engineering and automation at Rhôn Telecom and exploratory projects in teaching and digital learning.
            </p>
            
            <div className="bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500 p-6 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <Sparkles className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-xl font-semibold text-white italic">
                  "Fuelled by curiosity, committed to quality, inspired by technology."
                </p>
              </div>
            </div>

            <p>
              My passion lies in exploring how technology can solve real-world problems and improve people's lives. 
              Whether it's through data analysis, software development, or innovative digital solutions, I'm always 
              eager to learn and create meaningful impact.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
