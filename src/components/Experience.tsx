'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      period: "2024.02",
      title: "UNIVERSITY UNION GLOBAL ENTREPRENEURSHIP CAMP",
      description: "글로벌 창업 경진대회에서 혁신적인 비즈니스 모델 발표 및 대상 수상"
    },
    {
      period: "2024.01",
      title: "벤처창업 캠프",
      description: "스타트업 생태계의 이해와 실전 창업 전략 수립 경험"
    },
    {
      period: "2022.04 ~ 2024.11",
      title: "대학 내 동아리 EBS (Economy Business Supporter) 대표",
      description: "경제와 비즈니스 관련 동아리를 이끌며 다양한 프로젝트 진행"
    },
    {
      period: "2024.06 ~ 2024.10",
      title: "대학 내 창업 동아리 대표",
      description: "창업 동아리를 이끌며 혁신적인 아이디어 발굴 및 실행"
    },
    {
      period: "2023.10 ~ 2023.12",
      title: "Link 3.0 창업 동아리",
      description: "발명, 헬스가드, 워크웰, 매직북 등 다양한 분야의 프로젝트 참여"
    },
    {
      period: "2023.09 ~ 2023.12",
      title: "대학 내 창업 동아리 팀 리더",
      description: "팀을 이끌며 창업 프로젝트 기획 및 실행"
    },
    {
      period: "2023.06",
      title: "대학 내 JFM(신입생 멘토링) 멘토",
      description: "신입생들의 성공적인 대학 생활을 위한 멘토링 진행"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          주요 활동 및 경험
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                x: 10, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col md:flex-row gap-4 items-start border-l-4 border-gray-900 pl-6 py-4 bg-gray-50 rounded-r-lg shadow-md hover:shadow-xl transition-all"
            >
              <motion.div 
                className="md:w-48 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gray-600 font-medium bg-white px-3 py-1 rounded-full shadow-sm">
                  {exp.period}
                </span>
              </motion.div>
              <div>
                <motion.h3 
                  className="text-xl font-semibold mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  {exp.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {exp.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 