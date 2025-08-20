'use client';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, TrendingUp, CheckCircle, MessageCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Zap,
      title: t('digitalFirst'),
      description: t('digitalFirstDesc'),
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: MessageCircle,
      title: t('clearCommunication'),
      description: t('clearCommunicationDesc'),
      gradient: 'from-emerald-600 to-cyan-600'
    },
    {
      icon: Shield,
      title: t('expertTeam'),
      description: t('expertTeamDesc'),
      gradient: 'from-teal-500 to-emerald-500'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3 mb-8 shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">{t('aboutCompany')}</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 bg-clip-text text-transparent">{t('aboutUs')}</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('aboutDescription')}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - About Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Company Description Card */}
            <motion.div 
              className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl border border-emerald-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="text-gray-700 space-y-4">
                  <p className="text-lg leading-relaxed">
                    {t('aboutText1') || 'We are a digital accounting office. We work paperless and without complications.'}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {t('aboutText2') || 'We cooperate with clients in a simple way and speak in understandable terms.'}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {t('aboutText3') || 'Our team consists of employees with diverse knowledge, skills, and years of experience.'}
                  </p>
                </div>
                
                <motion.button
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>{t('getInTouch')}</span>
                  <TrendingUp className="h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 bg-gradient-to-r ${feature.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-900 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        {/* Bottom Stats Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold">100%</div>
              <div className="text-emerald-100">{t('digitalProcess')}</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-emerald-100">{t('supportAvailable')}</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold">0</div>
              <div className="text-emerald-100">{t('paperRequired')}</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
