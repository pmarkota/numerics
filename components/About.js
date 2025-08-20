'use client';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, TrendingUp, CheckCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const aboutPoints = [
    { 
      icon: Zap, 
      title: t('digitalFirst'), 
      description: t('digitalFirstDesc'),
      color: 'blue' 
    },
    { 
      icon: MessageCircle, 
      title: t('clearCommunication'), 
      description: t('clearCommunicationDesc'),
      color: 'green' 
    },
    { 
      icon: Shield, 
      title: t('expertTeam'), 
      description: t('expertTeamDesc'),
      color: 'purple' 
    }
  ];

  const stats = [
    { icon: CheckCircle, title: t('fastEfficient'), description: t('digitalFirstDesc') },
    { icon: Shield, title: t('secureReliable'), description: t('clearCommunicationDesc') },
    { icon: TrendingUp, title: t('yearsExperience'), description: t('expertTeamDesc') }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('aboutCompany')}</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 bg-clip-text text-transparent">{t('aboutUs')}</span>
          </h2>
        </motion.div>

        {/* Enhanced Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* About Description */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('aboutUs')}</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t('aboutDescription1')}</p>
                <p>{t('aboutDescription2')}</p>
                <p>{t('aboutDescription3')}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 gap-6">
              {aboutPoints.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 bg-${item.color}-100 rounded-xl`}>
                        <IconComponent className={`h-6 w-6 text-${item.color}-600`} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { number: '10+', label: t('yearsExperience'), icon: TrendingUp, color: 'blue' },
                { number: '100%', label: t('digitalFirst'), icon: Zap, color: 'indigo' },
                { number: '24/7', label: t('secureReliable'), icon: Shield, color: 'purple' },
                { number: '∞', label: t('fastEfficient'), icon: CheckCircle, color: 'green' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className={`inline-flex p-3 bg-${stat.color}-100 rounded-xl mb-4`}>
                      <IconComponent className={`h-6 w-6 text-${stat.color}-600`} />
                    </div>
                    <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>
                      {stat.number}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Team Highlight Card */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="inline-flex p-4 bg-blue-600 rounded-2xl mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{t('expertTeam')}</h3>
                <p className="text-blue-700">{t('expertTeamDesc')}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
