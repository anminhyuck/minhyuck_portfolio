'use client';

import { motion, Variants, Transition } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

const Hero: FC = () => {
  const transition: Transition = {
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.99]
  };

  const fadeInUpVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1
    }
  };

  const highlightVariants: Variants = {
    hidden: { opacity: 0, width: "0%" },
    visible: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: 1
      }
    }
  };

  const skills: string[] = ["혁신적 사고", "전략적 기획", "리더십", "창업 전문성"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* 배경 디자인 요소 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {/* 그리드 라인 */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }} />
          
          {/* 원형 그라데이션 */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px]" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* 왼쪽: 텍스트 콘텐츠 */}
          <motion.div 
            variants={fadeInUpVariant}
            transition={transition}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} transition={transition} className="mb-6">
              <motion.div 
                className="inline-block relative"
                variants={itemVariants}
                transition={transition}
              >
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-2">
                  안민혁
                </h1>
                <motion.div
                  variants={highlightVariants}
                  transition={transition}
                  className="absolute bottom-0 left-0 h-3 bg-blue-500/20 -z-10"
                />
              </motion.div>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              transition={transition}
              className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-6"
            >
              혁신적인 사업 기획 전문가
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              transition={transition}
              className="text-gray-300 text-lg lg:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              창의적인 아이디어와 전략적 사고로 비즈니스의 미래를 디자인합니다.
              다양한 창업 경험과 프로젝트 성공 사례를 통해 검증된 기획 역량을 보유하고 있습니다.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              transition={transition}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full
                    text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              transition={transition}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full
                  font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                자세히 보기
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-3 border border-white/20 text-white rounded-full
                  font-semibold hover:bg-white/10 transition-all"
              >
                연락하기
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 오른쪽: 프로필 이미지 */}
          <motion.div
            variants={fadeInUpVariant}
            transition={transition}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20" />
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="안민혁"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/20 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 