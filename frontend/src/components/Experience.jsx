import React from 'react';
import { Card } from './ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: '2025',
      company: 'Rhôn Telecom',
      role: 'Network Engineering Intern',
      description:
        'Developed automation tools with VBA, Node.js, and Next.js to improve productivity and streamline network operations.',
      color: 'green',
    },
    {
      year: '2024',
      company: 'Teaching Internship',
      role: 'Scratch Programming Workshop for Children',
      description:
        'Created an introduction to coding and guided students through their first programming experience, fostering creativity and logical thinking.',
      color: 'blue',
    },
    {
      year: '2020',
      company: 'Alstom Transport',
      role: 'Observation Internship',
      description:
        'Discovered industrial processes and railway production systems, gaining insights into large-scale engineering projects.',
      color: 'purple',
    },
  ];

  const education = [
    {
      year: '2023–2026',
      institution: 'ENSEA de Cergy',
      degree: 'Bachelor Human-IT',
      description: 'Specializing in information technologies and their societal impact, data science, and software development.',
    },
    {
      year: '2023',
      institution: 'Lycée Bossuet de Meaux',
      degree: 'Baccalauréat Général',
      description: 'Mathématiques expertes - Strong foundation in mathematics and analytical thinking.',
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-green-500/30 p-6 hover:border-green-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                  <div className="flex items-center space-x-3 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                    <p className="text-green-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-green-500/30 p-6 hover:border-green-500/60 transition-all duration-300"
              >
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                <p className="text-green-400 font-medium mb-3">{edu.institution}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
