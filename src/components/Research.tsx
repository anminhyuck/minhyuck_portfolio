'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Research = () => {
  const researchProjects = [
    {
      title: "지역 경제 활성화 방안 연구",
      category: "경제 분석",
      period: "2024.01 - 2024.03",
      description: "지역 상권 분석 및 활성화 전략 수립, 청년 창업 생태계 조성 방안 연구",
      keyFindings: [
        "상권 데이터 분석을 통한 업종별 성공 요인 도출",
        "청년 창업가 인터뷰를 통한 니즈 파악",
        "지역 특성을 고려한 차별화 전략 수립"
      ]
    },
    {
      title: "소셜 벤처 성공 요인 분석",
      category: "창업 연구",
      period: "2023.09 - 2023.12",
      description: "사회적 가치와 수익성을 동시에 추구하는 소셜 벤처의 성공 요인 연구",
      keyFindings: [
        "비즈니스 모델의 지속가능성 평가",
        "사회적 임팩트 측정 방법론 개발",
        "스케일업 전략 수립"
      ]
    },
    {
      title: "MZ세대 소비 트렌드 분석",
      category: "시장 조사",
      period: "2023.06 - 2023.08",
      description: "MZ세대의 소비 패턴 및 가치소비 트렌드 분석",
      keyFindings: [
        "가치소비의 주요 동인 파악",
        "브랜드 충성도에 영향을 미치는 요인 분석",
        "디지털 채널 활용 전략 도출"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const [text, setText] = useState('');
  const fullText = '데이터 기반의 인사이트로 비즈니스의 미래를 설계합니다';
  
  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-gray-950 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* 배경 디자인 요소 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          {/* 도트 패턴 */}
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.1)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>
        {/* 그라데이션 블러 */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full filter blur-[120px] animate-blob"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-indigo-400 to-blue-500 rounded-full filter blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-purple-400 to-blue-300 rounded-full filter blur-[150px] animate-blob" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 mb-6 tracking-tight">
              Research & Analysis
            </h2>
            <p className="text-gray-100 text-lg h-6 max-w-2xl mx-auto">
              {text}
            </p>
          </motion.div>

          <div className="grid gap-8">
            {researchProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-950/50 to-purple-900/50 backdrop-blur-lg p-8 border border-blue-500/10 hover:border-blue-500/20 transition-all duration-500 group relative overflow-hidden"
                style={{
                  borderRadius: "40px"
                }}
              >
                {/* 배경 효과 */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-8 relative z-10">
                  <div className="md:w-1/4">
                    <motion.span 
                      className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-300 text-sm font-medium inline-block rounded-[20px]"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category}
                    </motion.span>
                    <p className="mt-4 text-gray-300/70 text-sm">
                      {project.period}
                    </p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-200/90 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-blue-400 mb-4">
                        주요 연구 결과
                      </h4>
                      {project.keyFindings.map((finding, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-start gap-4 group/item"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-[10px] group-hover/item:scale-150 transition-transform"></div>
                          <p className="text-gray-200/80 group-hover/item:text-gray-100 transition-colors">
                            {finding}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 연구 방법론 섹션 */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-br from-gray-950/50 to-purple-900/50 backdrop-blur-lg p-12 border border-blue-500/10 rounded-[40px] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12 text-center">
                연구 방법론
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "데이터 분석",
                    description: "정량적 데이터 분석을 통한 객관적 인사이트 도출",
                    icon: "📊"
                  },
                  {
                    title: "심층 인터뷰",
                    description: "이해관계자 인터뷰를 통한 정성적 데이터 수집",
                    icon: "🎯"
                  },
                  {
                    title: "사례 연구",
                    description: "성공/실패 사례 분석을 통한 시사점 도출",
                    icon: "📈"
                  }
                ].map((method, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="text-center p-8 bg-gradient-to-br from-gray-950/30 to-purple-900/30 backdrop-blur-sm rounded-[30px] transition-all duration-500 border border-blue-500/10 hover:border-blue-500/20 group"
                  >
                    <span className="text-5xl mb-6 block transform group-hover:scale-110 transition-transform duration-500">{method.icon}</span>
                    <h4 className="text-xl font-semibold text-gray-100 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">
                      {method.title}
                    </h4>
                    <p className="text-gray-200/80">
                      {method.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </section>
  );
};

export default Research; 