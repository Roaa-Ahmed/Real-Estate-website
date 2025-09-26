import React from 'react';
import { motion } from 'framer-motion';
import { FaCube, FaGlobe, FaRobot, FaShieldAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaCube className="text-3xl text-white" />,
      title: "3D/VR Tours",
      description: "Immersive virtual property experiences",
      bgColor: "bg-blue-500",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      icon: <FaGlobe className="text-3xl text-white" />,
      title: "Global Coverage", 
      description: "Properties across 6 continents",
      bgColor: "bg-green-500",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      id: 3,
      icon: <FaRobot className="text-3xl text-white" />,
      title: "AI Assistant",
      description: "Smart chatbot for instant help",
      bgColor: "bg-purple-500",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      id: 4,
      icon: <FaShieldAlt className="text-3xl text-white" />,
      title: "Secure Payments",
      description: "Protected transactions worldwide",
      bgColor: "bg-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="bg-white py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Choose Hub Estate Real?
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Advanced technology meets global real estate expertise
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`bg-gradient-to-br ${feature.bgGradient} p-8 rounded-2xl text-center border border-gray-100 cursor-pointer`}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon Container */}
              <motion.div 
                className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                variants={iconVariants}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.6 }
                }}
              >
                {feature.icon}
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                className="text-xl md:text-2xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {feature.title}
              </motion.h3>
              
              {/* Description */}
              <motion.p 
                className="text-gray-600 leading-relaxed text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;