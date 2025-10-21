import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Network Automation Suite',
      description:
        'Developed comprehensive automation tools using VBA, Node.js, and Next.js to streamline network engineering workflows at Rhôn Telecom, significantly improving team productivity.',
      tags: ['VBA', 'Node.js', 'Next.js', 'Automation'],
      links: {
        demo: null,
        github: null,
      },
    },
    {
      title: 'HYPNOTICA',
      description:
        'A 2nd year ENSEA project showcasing innovative approaches to interactive applications. Built with modern technologies and focusing on user experience.',
      tags: ['Python', 'Data Science', 'Web Development'],
      links: {
        demo: null,
        github: 'https://github.com/Sikoso774/HYPNOTICA',
      },
    },
    {
      title: 'Scratch Programming Workshop',
      description:
        'Created an engaging introduction to programming for children, developing curriculum materials and interactive exercises to make coding accessible and fun.',
      tags: ['Education', 'Scratch', 'Teaching', 'Curriculum Design'],
      links: {
        demo: null,
        github: null,
      },
    },
    {
      title: 'Data Science Projects',
      description:
        'Collection of data analysis and visualization projects using Python, Pandas, Numpy, and Matplotlib. Exploring patterns, insights, and predictive modeling.',
      tags: ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'Data Analysis'],
      links: {
        demo: null,
        github: 'https://github.com/Sikoso774',
      },
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in software development, data science, and digital innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-green-500/30 p-6 hover:border-green-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 group"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-green-500/10 border border-green-500/30 text-green-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-3 pt-2">
                  {project.links.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-500/40 text-green-400 hover:bg-green-500/10 hover:border-green-400"
                      onClick={() => window.open(project.links.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.open(project.links.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
