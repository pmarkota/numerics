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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-400/10 rounded-full blur-xl animate-pulse"></div>
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


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-20">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Enhanced Main Heading */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('digitalAccounting')}
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.div 
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-white">{t('heroSubtitle')}</p>
            <p className="text-emerald-400 font-semibold">{t('heroDescription2')}</p>
            <p className="text-white">{t('heroDescription3')}</p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button 
              onClick={() => scrollToSection('services')}
              className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 rounded-2xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center space-x-3 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <span className="relative">{t('exploreServices')}</span>
              <ArrowRight className="relative h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>

            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="group relative bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-semibold border-2 border-white/20 hover:border-emerald-300/50 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t('getInTouch')}</span>
              <TrendingUp className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
