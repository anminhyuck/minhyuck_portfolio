'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

interface GallerySection {
  id: number;
  title: string;
  subtitle: string;
  images: GalleryImage[];
}

const galleryData: GallerySection[] = [
  {
    id: 1,
    title: "창업 경진대회",
    subtitle: "Innovation & Challenge",
    images: [
      { src: "https://source.unsplash.com/800x600/?startup", title: "창업 경진대회 발표", description: "혁신적인 비즈니스 모델 제안" },
      { src: "https://source.unsplash.com/800x600/?presentation", title: "팀 프레젠테이션", description: "심사위원 피드백 세션" },
      { src: "https://source.unsplash.com/800x600/?award", title: "수상 순간", description: "우수상 수상" }
    ]
  },
  {
    id: 2,
    title: "지역 문제 해결 프로젝트",
    subtitle: "Social Impact",
    images: [
      { src: "https://source.unsplash.com/800x600/?community", title: "현장 조사", description: "지역 문제 발굴 및 분석" },
      { src: "https://source.unsplash.com/800x600/?interview", title: "주민 인터뷰", description: "이해관계자 의견 수렴" },
      { src: "https://source.unsplash.com/800x600/?solution", title: "솔루션 제안", description: "최종 결과물 발표" }
    ]
  },
  {
    id: 3,
    title: "Link 3.0 창업 동아리",
    subtitle: "Startup Community",
    images: [
      { src: "https://source.unsplash.com/800x600/?brainstorming", title: "동아리 활동", description: "아이디어 브레인스토밍" },
      { src: "https://source.unsplash.com/800x600/?mentoring", title: "멘토링 세션", description: "전문가 피드백" },
      { src: "https://source.unsplash.com/800x600/?meeting", title: "팀 미팅", description: "프로젝트 진행 상황 공유" }
    ]
  },
  {
    id: 4,
    title: "창업 캠프 활동",
    subtitle: "Entrepreneurship",
    images: [
      { src: "https://source.unsplash.com/800x600/?workshop", title: "캠프 워크샵", description: "비즈니스 모델 개발" },
      { src: "https://source.unsplash.com/800x600/?teamwork", title: "팀 빌딩", description: "팀원과의 협업" },
      { src: "https://source.unsplash.com/800x600/?business", title: "최종 발표", description: "사업계획 발표" }
    ]
  }
];

const ImageGallery = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const [highlightedText, setHighlightedText] = useState("");
  
  const mainTitle = "주요 활동 및 경험";
  const highlightPhrase = "혁신적인 아이디어로 미래를 디자인합니다";

  useEffect(() => {
    let currentChar = 0;
    const titleInterval = setInterval(() => {
      if (currentChar <= mainTitle.length) {
        setTypedText(mainTitle.slice(0, currentChar));
        currentChar++;
      } else {
        clearInterval(titleInterval);
        // 타이틀 타이핑이 끝나면 하이라이트 문구 시작
        let highlightChar = 0;
        const highlightInterval = setInterval(() => {
          if (highlightChar <= highlightPhrase.length) {
            setHighlightedText(highlightPhrase.slice(0, highlightChar));
            highlightChar++;
          } else {
            clearInterval(highlightInterval);
          }
        }, 50);
      }
    }, 100);

    return () => clearInterval(titleInterval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => 
      prev === galleryData[currentSection].images.length - 1 ? 0 : prev + 1
    );
    setIsFlipped(false);
  };

  const prevImage = () => {
    setCurrentImage((prev) => 
      prev === 0 ? galleryData[currentSection].images.length - 1 : prev - 1
    );
    setIsFlipped(false);
  };

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % galleryData.length);
    setCurrentImage(0);
    setIsFlipped(false);
  };

  const prevSection = () => {
    setCurrentSection((prev) => 
      prev === 0 ? galleryData.length - 1 : prev - 1
    );
    setCurrentImage(0);
    setIsFlipped(false);
  };

  const cardVariants = {
    front: {
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    },
    back: {
      rotateY: 180,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.1)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>
        {/* 그라데이션 블러 효과 */}
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/40 to-purple-500/40 rounded-full filter blur-[150px] animate-blob"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-l from-indigo-400/40 to-blue-500/40 rounded-full filter blur-[150px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-purple-400/30 to-blue-300/30 rounded-full filter blur-[180px] animate-blob" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16 pt-20"
        >
          <h2 className="text-6xl font-bold mb-6 tracking-tight relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500">
              {typedText}
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transform scale-x-0 animate-expandLine"></span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-gray-100 text-xl max-w-3xl mx-auto leading-relaxed font-medium"
          >
            <span className="relative">
              {highlightedText}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-400 to-purple-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
              />
            </span>
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            {galleryData[currentSection].subtitle}
          </motion.p>
        </motion.div>

        <div className="flex justify-center mb-12 gap-6 flex-wrap">
          {galleryData.map((section, index) => (
            <motion.button
              key={section.id}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              }}
              initial={{
                borderRadius: "15px",
                background: "rgba(255, 255, 255, 0.03)"
              }}
              animate={{
                borderRadius: activeButton === index ? "20px" : "15px",
                scale: currentSection === index ? 1.05 : 1,
                background: currentSection === index 
                  ? "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))" 
                  : "rgba(255, 255, 255, 0.03)"
              }}
              onClick={() => {
                setCurrentSection(index);
                setCurrentImage(0);
                setIsFlipped(false);
                setActiveButton(index);
              }}
              className={`px-8 py-4 text-sm font-medium transition-all relative overflow-hidden group backdrop-blur-lg
                ${currentSection === index 
                  ? 'text-white shadow-lg shadow-blue-500/20 border border-white/10' 
                  : 'text-gray-300 hover:text-white border border-white/5'}`}
            >
              <span className="relative z-10">{section.title}</span>
              {currentSection === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-xl"
                  layoutId="activeSection"
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative bg-gradient-to-br from-gray-950/50 to-purple-900/50 backdrop-blur-lg overflow-hidden shadow-2xl shadow-blue-500/10"
            style={{
              borderRadius: "40px"
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentSection}-${currentImage}-${isFlipped}`}
                variants={cardVariants}
                initial="front"
                animate={isFlipped ? "back" : "front"}
                className="aspect-video relative cursor-pointer"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className={`absolute inset-0 transition-transform duration-500 backface-hidden ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
                  <Image
                    src={galleryData[currentSection].images[currentImage].src}
                    alt={galleryData[currentSection].images[currentImage].title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[30px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-bold text-gray-100 mb-2">
                        {galleryData[currentSection].images[currentImage].title}
                      </h3>
                      <p className="text-gray-200 text-lg">
                        {galleryData[currentSection].images[currentImage].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 카드 뒷면 */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 p-8 transform rotateY-180 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="h-full flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-bold text-gray-100 mb-4">
                      프로젝트 상세 정보
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                      {galleryData[currentSection].images[currentImage].description}
                    </p>
                    <div className="flex gap-4">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[20px] text-white shadow-lg shadow-blue-500/30"
                      >
                        자세히 보기
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-[20px] shadow-lg shadow-blue-500/30 backdrop-blur-sm transition-all group"
            >
              <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-[20px] shadow-lg shadow-blue-500/30 backdrop-blur-sm transition-all group"
            >
              <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
              {galleryData[currentSection].images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrentImage(index); }}
                  className={`h-2 rounded-[10px] transition-all ${
                    currentImage === index 
                      ? 'w-16 bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'w-8 bg-white/40 hover:bg-white/60'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex justify-between max-w-4xl mx-auto mt-8">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSection}
            className="flex items-center gap-2 text-gray-200 hover:text-gray-100 group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            이전 섹션
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSection}
            className="flex items-center gap-2 text-gray-200 hover:text-gray-100 group"
          >
            다음 섹션
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
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
        @keyframes expandLine {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-expandLine {
          animation: expandLine 0.8s ease-out forwards;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default ImageGallery; 