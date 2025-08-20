'use client';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Lightbulb, Mail, ArrowRight } from 'lucide-react';
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
          <motion.div
            className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Users className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">{t('joinTeam')}</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-blue-900">{t('careers')}</span>
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
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{t('joinTeam')}</h3>
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
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <IconComponent className="h-6 w-6 text-blue-600" />
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
              <h4 className="text-xl font-bold text-blue-900 mb-6">{t('applicationProcess')}</h4>
              <div className="space-y-4">
                {[
                  { step: '1', title: t('sendApplication'), desc: t('sendApplicationDesc') },
                  { step: '2', title: t('quickReview'), desc: t('quickReviewDesc') },
                  { step: '3', title: t('interview'), desc: t('interviewDesc') },
                  { step: '4', title: t('welcome'), desc: t('welcomeDesc') }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-900">{item.title}</h5>
                      <p className="text-blue-700 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
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
                <div className="inline-flex p-4 bg-green-100 rounded-2xl mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{t('readyToApply')}</h4>
                <p className="text-gray-600">{t('sendApplicationToday')}</p>
              </div>
              
              <motion.a 
                href="mailto:info@numerics.hr?subject=Job Application"
                className="group relative bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
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
