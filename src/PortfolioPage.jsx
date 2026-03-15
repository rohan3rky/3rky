import React from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, PlayCircle } from 'lucide-react';

const projects = [
  { id: 1, title: "Urban Symphony", category: "Documentary", border: "border-purple-500", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "Nature's Path", category: "Cinematic", border: "border-cyan-500", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80" },
  { id: 3, title: "City Lights", category: "Short Film", border: "border-purple-500", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80" },
  { id: 4, title: "Wilderness", category: "Adventure", border: "border-cyan-500", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80" },
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/10 blur-[120px]" />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-10 pt-10 pb-20">
        <header className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-2 tracking-tight"
          >
            FEATURED PROJECTS
          </motion.h2>
          <p className="text-gray-500 tracking-widest text-sm uppercase">Curation of work</p>
        </header>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className={`relative overflow-hidden rounded-xl border-2 ${project.border} bg-gray-900 aspect-[4/5] shadow-2xl shadow-black`}>
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 p-6 w-full">
                  <PlayCircle className="mb-3 opacity-0 group-hover:opacity-100 transition-opacity text-white" size={32} />
                  <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-20 flex justify-center">
          <button className="px-10 py-3 rounded-full border border-gray-700 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500">
            View All Projects
          </button>
        </div>
      </main>
    </div>
  );
};

export default PortfolioPage;