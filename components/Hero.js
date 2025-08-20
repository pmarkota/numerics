'use client';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Zap, Sparkles, Calculator, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-200/20 to-teal-200/20 rounded-full blur-2xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Calculator className="h-6 w-6 text-blue-600" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-16 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-100"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Globe className="h-6 w-6 text-indigo-600" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      >
        <Shield className="h-6 w-6 text-purple-600" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-20">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Badge */}
          <motion.div
            className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5 text-blue-600" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('professionalServices')}
            </span>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 bg-clip-text text-transparent">
              {t('digitalAccounting')}
            </span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('heroSubtitle')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
              {t('heroDescription')}
            </span>
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button 
              onClick={() => scrollToSection('services')}
              className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center space-x-3 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <span className="relative">{t('exploreServices')}</span>
              <ArrowRight className="relative h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>

            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="group relative bg-white/90 backdrop-blur-sm text-gray-900 px-10 py-5 rounded-2xl font-semibold border-2 border-gray-200/50 hover:border-blue-300/50 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t('getInTouch')}</span>
              <TrendingUp className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Enhanced Stats with Better Design */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {[
              { number: '100%', label: t('digitalProcess'), icon: Zap, gradient: 'from-blue-500 to-cyan-500' },
              { number: '24/7', label: t('supportAvailable'), icon: Shield, gradient: 'from-indigo-500 to-purple-500' },
              { number: '0', label: t('paperRequired'), icon: TrendingUp, gradient: 'from-purple-500 to-pink-500' }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.05, y: -8 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.6, type: "spring", stiffness: 300 }}
                >
                  <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* Icon */}
                    <div className="relative mb-4 mx-auto w-fit">
                      <div className={`inline-flex p-4 bg-gradient-to-r ${stat.gradient} rounded-2xl shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Number */}
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
