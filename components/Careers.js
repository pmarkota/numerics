'use client';
import { motion } from 'framer-motion';
import { Users, Heart, TrendingUp, Coffee, Mail, ArrowRight, Sparkles, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Careers() {
  const { t } = useLanguage();
  const benefits = [
    { icon: Users, title: t('fastEfficient'), desc: t('digitalFirstDesc') },
    { icon: TrendingUp, title: t('secureReliable'), desc: t('clearCommunicationDesc') },
    { icon: Lightbulb, title: t('expertTeam'), desc: t('expertTeamDesc') }
  ];

  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 bg-clip-text text-transparent">{t('careers')}</span>
          </h2>
        </motion.div>

        {/* Enhanced Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Description */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{t('joinOurTeam')}</h3>
                  </div>
                  <p className="text-gray-600">{t('buildYourCareer')}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('careersDescription')}
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('whyJoinUs')}</h3>
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-emerald-100 p-3 rounded-xl">
                        <IconComponent className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Application Process */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-200">
              <h4 className="text-xl font-bold text-emerald-900 mb-6">{t('applicationProcess')}</h4>
              <div className="space-y-6">
                <motion.p 
                  className="text-emerald-800 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  {t('careersDescription')}
                </motion.p>
                
                <motion.p 
                  className="text-emerald-800 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {t('careersDescription2')}
                </motion.p>
                
                <motion.p 
                  className="text-emerald-900 font-semibold leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {t('careersDescription3')}
                </motion.p>
              </div>
            </div>

            {/* CTA Card */}
            <motion.div 
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="mb-6">
                <div className="inline-flex p-3 bg-emerald-100 rounded-xl mb-4">
                  <Mail className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{t('readyToApply')}</h4>
                <p className="text-gray-600">{t('sendApplicationToday')}</p>
              </div>
              
              <motion.a 
                href="mailto:info@numerics.hr?subject=Job Application"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="relative h-5 w-5" />
                <span className="relative">{t('sendApplication')}</span>
                <ArrowRight className="relative h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
