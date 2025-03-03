'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 15;
      const rotateX = -((mouseY - centerY) / (rect.height / 2)) * 15;
      
      setRotation({ 
        x: rotateX, 
        y: isFlipped ? rotateY : rotateY 
      });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isFlipped]);

  const stats = [
    { label: "프로젝트 경험", value: "15+" },
    { label: "수상 실적", value: "5+" },
    { label: "창업 경진대회", value: "10+" },
    { label: "팀 리딩", value: "8+" }
  ];

  const personalInfo = [
    { label: "이름", value: "안민혁" },
    { label: "이메일", value: "dksals0914@naver.com" },
    { label: "전화번호", value: "010-4230-6883" },
    { label: "전공", value: "경영학과, 벤처창업학과" }
  ];

  const expertise = [
    "비즈니스 모델 수립",
    "프로젝트 기획/관리",
    "시장 조사/분석"
  ];

  const strengths = [
    "창의적 문제해결",
    "전략적 사고",
    "팀 리더십"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-900 to-purple-900 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full filter blur-[150px] animate-blob"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-l from-indigo-400/30 to-blue-500/30 rounded-full filter blur-[150px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-purple-400/20 to-blue-300/20 rounded-full filter blur-[180px] animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* 프로필 이미지와 자기소개 */}
            <div 
              ref={cardRef}
              className="relative perspective-[2000px] cursor-pointer"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* 클릭 안내 문구 */}
              <motion.div 
                className="absolute -right-48 top-1/2 -translate-y-1/2 transform rotate-90 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-lg border border-white/20 z-20 flex items-center gap-3"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-white/90 text-lg font-medium whitespace-nowrap">클릭하여 뒤집기</span>
                {/* 마우스 클릭 아이콘 */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/90"
                  animate={{
                    scale: [1, 0.9, 1],
                    y: [0, 2, 0]
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <rect x="6" y="3" width="12" height="18" rx="6"/>
                  <path d="M12 7v4"/>
                </motion.svg>
              </motion.div>
              
              <motion.div
                initial={false}
                animate={{ 
                  rotateY: isFlipped ? 180 + rotation.y : rotation.y,
                  rotateX: rotation.x,
                  scale: 1
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  mass: 0.5
                }}
                className="relative w-full aspect-square rounded-[40px] preserve-3d transform"
              >
                {/* 앞면 - 프로필 이미지 */}
                <div 
                  className={`absolute w-full h-full backface-hidden transition-opacity duration-200 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <Image
                      src="/images/profile.jpg"
                      alt="안민혁"
                      layout="fill"
                      objectFit="cover"
                    />
                    <motion.div
                      className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-lg p-8 rounded-[30px] shadow-xl border border-white/20"
                    >
                      <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                          <motion.div
                            key={stat.label}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="text-center"
                          >
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-300">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* 뒷면 - 자기소개 */}
                <div 
                  className={`absolute w-full h-full backface-hidden bg-white/10 backdrop-blur-lg rounded-[40px] p-12 border border-white/20 rotateY-180 transition-opacity duration-200 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                        혁신적인 아이디어로<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                          미래를 디자인합니다
                        </span>
                      </h2>
                      <div className="space-y-6 text-gray-200 text-lg">
                        <p className="leading-relaxed">
                          저는 사업 기획자를 목표로 하는 기획 전문가 안민혁입니다.
                          다양한 창업 및 프로젝트 활동을 통해 리더십, 기획력, 문제 해결 능력을 갖추었으며,
                          스타트업 환경에서 프로젝트를 주도적으로 기획하고 실행하는 경험을 쌓아왔습니다.
                        </p>
                        <p className="leading-relaxed">
                          비즈니스 모델 수립, 시장 조사, 창업 동아리 운영 경험을 바탕으로 혁신적인 아이디어를 실현하는 데 집중하고 있습니다.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-10">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-6">전문 분야</h3>
                        <ul className="space-y-4">
                          {expertise.map((item, index) => (
                            <li key={index} className="flex items-center space-x-3 text-lg">
                              <span className="text-blue-400 text-xl">▹</span>
                              <span className="text-gray-200">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-6">강점</h3>
                        <ul className="space-y-4">
                          {strengths.map((item, index) => (
                            <li key={index} className="flex items-center space-x-3 text-lg">
                              <span className="text-purple-400 text-xl">▹</span>
                              <span className="text-gray-200">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 개인 정보 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-[30px] p-8 border border-white/20"
            >
              <div className="space-y-6">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                    className="flex items-center space-x-4"
                  >
                    <span className="text-gray-400 font-medium min-w-[100px]">{info.label}</span>
                    <span className="text-white">{info.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
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
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .perspective-[2000px] {
          perspective: 2000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default About; 