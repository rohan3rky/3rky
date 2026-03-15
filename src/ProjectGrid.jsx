import React from 'react';
import { motion } from 'framer-motion';
import './Projectgrid.css';

const ProjectGrid = () => {
  return (
    <div className="nebula-container">
      <header>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
          className="page-title"
        >
         MEMORIES
        </motion.h1>
        <p className="page-subtitle"></p>
      </header>

      <div className="masonry-wrapper">
        
        {/* --- COLUMN 1 (LEFT) --- */}
        <div className="masonry-column">
          
          {/* Item 1: Text Top, Purple Border */}
          <MasonryItem  
            img="/assets/5.jpeg"
            border="border-purple"
            textPos="top"
            height="h-[300px]"
          />

          {/* Item 2: Video, Text Bottom */}
          <MasonryItem 
            img="/assets/6.jpeg"
            border="border-none"
            textPos="bottom"
            height="h-[240px]"
          />
        </div>

        {/* --- COLUMN 2 (MIDDLE) --- */}
        <div className="masonry-column">
          
          {/* Item 3: Tall Image, Text Overlay/Inside */}
          <div className="item-container">
            <div className="image-card border-purple" style={{ height: '480px' }}>
              <img src="/assets/4.jpeg"
               alt="Tall" />
              <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black to-transparent w-full">
                <h3 className="project-title">Urban Symphony</h3>
                <p className="project-desc text-purple-300">Director's Cut</p>
              </div>
            </div>
          </div>

          {/* Item 4: Square, Text Bottom */}
          <MasonryItem 
           
            img="/assets/7.jpeg"
            border="border-none"
            textPos="bottom"
            height="h-[300px]"
          />
        </div>

        {/* --- COLUMN 3 (RIGHT) --- */}
        <div className="masonry-column">
          
          {/* Item 5: Small Square */}
          <div className="item-container">
            <div className="image-card border-none" style={{ height: '220px' }}>
               <img src="/assets/3.jpeg" alt="Small" />
            </div>
          </div>

          {/* Item 6: Vertical, Text Bottom */}
          <MasonryItem 
            img="/assets/8.jpeg"
            border="border-none"
            textPos="bottom"
            height="h-[340px]"
          />

           {/* Item 7: Wide, Cyan Border, Text Top */}
           <MasonryItem 
            img="/assets/2.jpeg"
            border="border-cyan"
            textPos="top"
            height="h-[200px]"
          />
        </div>

      </div>
    </div>
  );
};

// Reusable Item Component for cleaner code
const MasonryItem = ({ title, desc, img, border, textPos, height, hasPlay }) => {
  const hasText = Boolean(title || desc);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      className="item-container"
    >
      {/* TEXT TOP */}
      {hasText && textPos === 'top' && (
        <div className="text-content top">
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{desc}</p>
        </div>
      )}

      {/* IMAGE CARD */}
      <div className={`image-card ${border}`} style={{ height: height.replace('h-[', '').replace(']', '') }}>
        {hasPlay && (
          <div className="play-icon">
            <div className="play-triangle"></div>
          </div>
        )}
        <img src={img} alt={title} />
      </div>

      {/* TEXT BOTTOM */}
      {hasText && textPos === 'bottom' && (
        <div className="text-content bottom">
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{desc}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectGrid;
