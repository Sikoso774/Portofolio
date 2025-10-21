import React from 'react';
import { Card } from './ui/card';
import { Globe, Gamepad2, Music, Database, Trophy } from 'lucide-react';

const Languages = () => {
  const languages = [
    { name: 'French', level: 'Native', flag: '🇫🇷' },
    { name: 'English', level: 'B1', flag: '🇬🇧' },
    { name: 'Spanish', level: 'B1', flag: '🇪🇸' },
  ];

  const interests = [
    { name: 'Football', icon: Trophy },
    { name: 'Handball', icon: Trophy },
    { name: 'Music (Cornet)', icon: Music },
    { name: 'Gaming', icon: Gamepad2 },
    { name: 'Data Science', icon: Database },
  ];

  return (
    <section id="languages" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Globe className="w-8 h-8 text-green-400" />
              <h2 className="text-3xl font-bold text-white">Languages</h2>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-green-500/30 p-5 hover:border-green-500/60 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{lang.flag}</span>
                      <span className="text-lg font-semibold text-white">{lang.name}</span>
                    </div>
                    <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-sm font-medium">
                      {lang.level}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Music className="w-8 h-8 text-green-400" />
              <h2 className="text-3xl font-bold text-white">Interests</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-green-500/30 p-5 hover:border-green-500/60 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-green-400" />
                      </div>
                      <span className="text-sm font-medium text-white">{interest.name}</span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
