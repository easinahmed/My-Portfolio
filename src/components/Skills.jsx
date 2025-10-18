// src/components/SkillSection.jsx (বা আপনার পছন্দের ফোল্ডারে)

import React from 'react';
// Lucide React থেকে প্রয়োজনীয় আইকনগুলো আমদানি করা হলো
import { Code, GithubIcon, Monitor, Paintbrush, Rocket, Zap } from 'lucide-react'; 

// --- 1. DATA STRUCTURE ---
// স্কিল ডেটা অ্যারে: এখানে সমস্ত তথ্য সাজানো আছে।
const skillData = [
  {
    id: 1,
    icon: Code, // Development Icon
    title: "Development",
    details: "HTML/CSS, JavaScript, Animation.",
    color: "#4CAF50" // Green
  },
  {
    id: 2,
    icon: Monitor, // App Design Icon
    title: "Responsive Design",
    details: "Make responsive website using Tailwind CSS/Bootstrap.",
    color: "#2196F3" // Blue
  },
  {
    id: 3,
    icon: Paintbrush, // Icon/Illustration Icon
    title: "React & Next Js",
    details: "Component Based design using modern React Js & Next Js.",
    color: "#9C27B0" // Purple
  },
  {
    id: 4,
    icon: Rocket, // Motion Icon
    title: "Firebase",
    details: "Authentication Using Firebase.",
    color: "#FF9800" // Orange
  },
  {
    id: 5,
    icon: GithubIcon, // GitHub Icon
    title: "Git & GitHub",
    details: "Version Control and Collaboration using Git & GitHub.",
    color: "gray" // Orange
  }
 
];


// --- 2. SkillItem Component ---
// এই কম্পোনেন্টটি প্রতিটি একক স্কিল আইটেম দেখাবে (Timeline Box)
const SkillItem = ({ icon: Icon, title, details, color }) => {
  return (
    <div className="flex items-start mb-6 last:mb-0">
      
      {/* বাম পাশের আইকন ও রঙিন লাইন */}
      <div className="flex flex-col items-center mr-4 z-10"> {/* z-10 for icon on top of line */}
        {/* আইকন কন্টেইনার */}
        <div 
          className="p-3 rounded-full flex items-center justify-center shadow-lg transform transition duration-300 hover:scale-110" 
          style={{ backgroundColor: color }}
        >
          {/* Lucide Icon */}
          <Icon className="w-6 h-6" color="white" /> 
        </div>
        
        {/* নিচের লাইন (শেষ আইটেমের জন্য বাদ যাবে) */}
        <div 
          className="w-1 h-full min-h-[4rem] rounded-b-md" 
          style={{ backgroundColor: color, opacity: 0.5 }}
        ></div>
      </div>

      {/* স্কিল বক্স */}
      <div className="flex-grow p-4 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 transition duration-300 hover:border-cyan-400">
        <h3 className="text-xl font-semibold mb-1 text-white">{title}</h3>
        <p className="text-sm text-gray-400">{details}</p>
      </div>
    </div>
  );
};


// --- 3. Main SkillSection Component ---
const Skills = () => {
  return (
    <section className="py-12 px-4 bg-black"> {/* আপনার সাইটের ব্যাকগ্রাউন্ড কালার */}
      <div className="max-w-4xl mx-auto">
        
        
        <div className="relative">
          {skillData.map((skill, index) => (
            <div key={skill.id} className="relative">
              
              {/* Timeline Connector Line Logic (Vertical Line between items) */}
              {index < skillData.length - 1 && (
                <div 
                  className="absolute top-0 bottom-0 left-[18px] w-0.5 h-full z-0" 
                  style={{ backgroundColor: skillData[index + 1].color, opacity: 0.5 }}
                ></div>
              )}
              
              {/* Skill Item */}
              <SkillItem 
                icon={skill.icon} 
                title={skill.title} 
                details={skill.details} 
                color={skill.color} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;