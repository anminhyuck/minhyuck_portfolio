'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: "기획 & 전략",
      items: [
        { name: "사업계획서 작성", level: 95 },
        { name: "기획력", level: 90 },
        { name: "문제해결 능력", level: 90 },
        { name: "피칭 능력", level: 85 },
      ],
    },
    {
      category: "경영 역량",
      items: [
        { name: "경영 전략", level: 85 },
        { name: "마케팅", level: 80 },
        { name: "인사관리", level: 75 },
        { name: "실무능력", level: 85 },
      ],
    },
    {
      category: "도구 & 협업",
      items: [
        { name: "Figma", level: 80 },
        { name: "AI 프롬프트", level: 85 },
        { name: "PowerPoint", level: 90 },
        { name: "개발자/디자이너 협업", level: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          기술 스택
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-6">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-gray-900 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 