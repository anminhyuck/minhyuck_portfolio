'use client';

import { motion } from 'framer-motion';

const Activities = () => {
  const activities = [
    {
      title: "창업 캠프 참가",
      items: [
        "2024: Build Up 창업 캠프",
        "2024: IP-Hackathon CAMP",
        "2024: 소비자 검증 시장조사 창업 캠프",
        "2023: 루키 스타트업 캠프"
      ]
    },
    {
      title: "교육 프로그램",
      items: [
        "2023: 랜선으로 만나는 릴레이 글로벌 취창업 톡톡톡",
        "2023: 대학 내 성품 관련 교과목 리더",
        "2023: 대학 내 JFM(신입생 멘토링) 멘토"
      ]
    },
    {
      title: "창업 동아리 활동",
      items: [
        "Link 3.0 창업 동아리 - 발명 분야",
        "Link 3.0 창업 동아리 - 헬스가드 분야",
        "Link 3.0 창업 동아리 - 워크웰 분야",
        "Link 3.0 창업 동아리 - 매직북 분야"
      ]
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
    <section id="activities" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          교육 및 활동
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-6 pb-4 border-b-2 border-gray-900">
                {activity.title}
              </h3>
              <ul className="space-y-4">
                {activity.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * itemIndex }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-gray-900 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities; 