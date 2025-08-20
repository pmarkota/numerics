'use client';
import { motion } from 'framer-motion';
import { Calculator, Building, TrendingUp, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Calculator,
      title: t('accountingBookkeeping'),
      description: t('accountingDescription'),
      gradient: "from-blue-600 via-blue-700 to-indigo-800",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Building,
      title: t('businessFormation'),
      description: t('businessFormationDescription'),
      gradient: "from-emerald-600 via-teal-700 to-cyan-800",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: TrendingUp,
      title: t('businessConsulting'),
      description: t('businessConsultingDescription'),
      gradient: "from-purple-600 via-violet-700 to-indigo-800",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: FileText,
      title: t('administrativeServices'),
      description: t('administrativeDescription'),
      gradient: "from-orange-600 via-red-600 to-pink-700",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-400/10 rounded-full blur-xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stunning Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-medium text-white">{t('professionalServices')}</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t('ourServices')}
          </motion.h2>
          
          <motion.p 
            className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {t('servicesDescription')}
          </motion.p>
        </motion.div>

        {/* Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-8">
                  <div className={`inline-flex p-4 ${service.iconBg} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors flex-grow">
                    {service.description}
                  </p>
                  
                  {/* CTA Button - Always at bottom */}
                  <motion.button
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 self-start mt-auto`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{t('learnMore')}</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-6">
              {t('getStartedToday')}
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              {t('servicesDescription')}
            </p>
            <motion.button
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>{t('getInTouch')}</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
