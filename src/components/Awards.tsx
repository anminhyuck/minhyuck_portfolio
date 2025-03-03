'use client';

import { motion } from 'framer-motion';

const Awards = () => {
  const awards = [
    {
      year: "2024",
      title: "UNIVERSITY UNION GLOBAL ENTREPRENEURSHIP CAMP",
      award: "대상 수상"
    },
    {
      year: "2024",
      title: "지역 문제 발굴단 프로젝트",
      award: "광주남구청장상 수상"
    },
    {
      year: "2024",
      title: "대학 내 창업 동아리",
      award: "총장상 수상"
    },
    {
      year: "2023",
      title: "남원시 TMI 프로젝트",
      award: "전북창조경제혁신센터 남원청년마루 센터장상 수상"
    },
    {
      year: "2023",
      title: "ESG 창업아이디어 펀스쿨",
      award: "한국산업기능협회 창업지원단장상 수상"
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
    <section id="awards" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          수상 경력
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-gray-900">{award.year}</span>
                <div className="h-12 w-1 bg-gray-900"></div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
                  <p className="text-gray-600">{award.award}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards; 