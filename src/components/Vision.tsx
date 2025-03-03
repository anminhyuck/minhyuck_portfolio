'use client';

import { motion } from 'framer-motion';

const Vision = () => {
  const visions = [
    {
      title: "혁신적인 스타트업 기획 전문가",
      description: "창업 생태계에서 영향력 있는 프로젝트를 기획하고 실행하는 전문가로 성장하겠습니다."
    },
    {
      title: "체계적인 비즈니스 모델 구축",
      description: "창업 경험을 바탕으로 지속 가능한 스타트업 성장 전략을 연구하고 실현하겠습니다."
    },
    {
      title: "전문적인 컨설팅 역량 강화",
      description: "다양한 창업 경험과 경진대회 수상 경험을 살려 비즈니스 컨설팅 및 투자 유치 전략을 전문적으로 다루겠습니다."
    }
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
    <section id="vision" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          향후 목표 및 비전
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {visions.map((vision, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl font-bold text-gray-900 mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {vision.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {vision.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Vision; 