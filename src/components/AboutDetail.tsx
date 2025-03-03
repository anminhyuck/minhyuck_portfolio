'use client';

import { motion } from 'framer-motion';

const AboutDetail = () => {
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
            {/* 타이틀 */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-white text-center mb-12"
            >
              혁신적인 아이디어로<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                미래를 디자인합니다
              </span>
            </motion.h2>

            {/* 자기소개 텍스트 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-[30px] p-8 border border-white/20 space-y-6"
            >
              <p className="text-lg text-gray-200 leading-relaxed">
                저는 사업 기획자를 목표로 하는 기획 전문가 안민혁입니다.
                다양한 창업 및 프로젝트 활동을 통해 리더십, 기획력, 문제 해결 능력을 갖추었으며,
                스타트업 환경에서 프로젝트를 주도적으로 기획하고 실행하는 경험을 쌓아왔습니다.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                비즈니스 모델 수립, 시장 조사, 창업 동아리 운영 경험을 바탕으로 혁신적인 아이디어를 실현하는 데 집중하고 있습니다.
                경영학과와 벤처창업학과를 전공하면서 이론적 지식과 실무 경험을 함께 쌓아가고 있으며,
                다양한 창업 아이템을 기획하고 직접 사업 기획을 진행한 경험이 있습니다.
              </p>
            </motion.div>

            {/* 전문분야와 강점 */}
            <div className="grid grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-[30px] p-8 border border-white/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">전문 분야</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400 text-xl">▹</span>
                    <span className="text-gray-200">비즈니스 모델 수립</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400 text-xl">▹</span>
                    <span className="text-gray-200">프로젝트 기획/관리</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400 text-xl">▹</span>
                    <span className="text-gray-200">시장 조사/분석</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/10 backdrop-blur-lg rounded-[30px] p-8 border border-white/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">강점</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400 text-xl">▹</span>
                    <span className="text-gray-200">창의적 문제해결</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400 text-xl">▹</span>
                    <span className="text-gray-200">전략적 사고</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400 text-xl">▹</span>
                    <span className="text-gray-200">팀 리더십</span>
                  </li>
                </ul>
              </motion.div>
            </div>
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
      `}</style>
    </section>
  );
};

export default AboutDetail; 