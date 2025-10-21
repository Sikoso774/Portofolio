import React from 'react';
import { Badge } from './ui/badge';

const Skills = () => {
  const skills = [
    'Python',
    'Pandas',
    'Numpy',
    'Matplotlib',
    'HTML/CSS',
    'C (notions)',
    'VBA',
    'Node.js',
    'Next.js',
    'Windows',
    'Linux',
    'Data Science',
    'Excel',
    'PowerPoint',
    'Communication',
    'Curiosity',
    'Teamwork',
    'Leadership',
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-6 py-3 text-base font-medium border-green-500/40 bg-gray-900/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all duration-300 hover:scale-105 cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
