'use client';

import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "AI 기반 학습 플랫폼",
      description: "머신러닝을 활용한 개인화 학습 추천 시스템. React와 Python을 사용하여 개발했으며, AWS 클라우드 환경에서 운영됩니다.",
      tags: ["React", "Python", "AWS", "Machine Learning"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "실시간 협업 도구",
      description: "WebSocket을 활용한 실시간 문서 공동 편집 플랫폼. Next.js와 Socket.io를 사용하여 개발했습니다.",
      tags: ["Next.js", "Socket.io", "MongoDB", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "전자상거래 플랫폼",
      description: "현대적인 UI/UX를 갖춘 전자상거래 플랫폼. Vue.js와 Node.js를 사용하여 개발했습니다.",
      tags: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
      demoUrl: "#",
      githubUrl: "#",
    },
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
    <section id="projects" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
        >
          프로젝트
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="h-48 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white"
              >
                <span className="text-lg font-medium">{project.title}</span>
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demoUrl}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    데모 보기
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    className="text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 