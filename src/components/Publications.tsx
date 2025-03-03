'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Publications = () => {
  const publications = [
    {
      type: "연구 보고서",
      title: "MZ세대의 창업 트렌드와 성공 전략",
      date: "2024.02",
      publisher: "창업진흥원",
      thumbnail: "/images/publication1.jpg",
      description: "MZ세대의 창업 동향과 성공 사례 분석을 통한 전략 제시",
      link: "#"
    },
    {
      type: "기고문",
      title: "지속가능한 소셜 벤처의 조건",
      date: "2024.01",
      publisher: "벤처스퀘어",
      thumbnail: "/images/publication2.jpg",
      description: "사회적 가치와 경제적 가치의 균형있는 추구 방안",
      link: "#"
    },
    {
      type: "미디어 출연",
      title: "청년 창업가와의 대화",
      date: "2023.12",
      publisher: "YTN",
      thumbnail: "/images/media1.jpg",
      description: "창업 경험과 노하우 공유, 예비 창업가를 위한 조언",
      link: "#"
    }
  ];

  const mediaAppearances = [
    {
      title: "혁신적인 비즈니스 모델 구축 전략",
      media: "경제매거진",
      date: "2024.03",
      type: "인터뷰",
      quote: "창업은 문제 해결의 과정이며, 그 과정에서 혁신이 탄생합니다."
    },
    {
      title: "Z세대가 이끄는 창업 생태계의 변화",
      media: "스타트업 저널",
      date: "2024.02",
      type: "기획 기사",
      quote: "새로운 세대는 새로운 방식으로 비즈니스를 바라봅니다."
    },
    {
      title: "지역 기반 창업의 성공 전략",
      media: "로컬 비즈니스",
      date: "2024.01",
      type: "칼럼",
      quote: "지역의 특성을 이해하는 것이 성공의 첫걸음입니다."
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* 배경 디자인 요소 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        </div>
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Publications & Media
            </h2>
            <p className="text-gray-300 text-lg">
              연구 결과와 인사이트를 공유합니다
            </p>
          </motion.div>

          {/* 발간물 섹션 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {publications.map((pub, index) => (
              <motion.a
                key={index}
                href={pub.link}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="block bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={pub.thumbnail}
                    alt={pub.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium">
                    {pub.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {pub.publisher} · {pub.date}
                  </p>
                  <p className="text-gray-300">
                    {pub.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* 미디어 출연 섹션 */}
          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              미디어 출연
            </h3>
            <div className="space-y-6">
              {mediaAppearances.map((appearance, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="md:w-1/4">
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium">
                      {appearance.type}
                    </span>
                    <p className="mt-4 text-gray-400 text-sm">
                      {appearance.date}
                    </p>
                  </div>
                  <div className="md:w-3/4">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {appearance.title}
                    </h4>
                    <p className="text-gray-400 mb-4">
                      {appearance.media}
                    </p>
                    <blockquote className="border-l-2 border-purple-500 pl-4 italic text-gray-300">
                      &ldquo;{appearance.quote}&rdquo;
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications; 