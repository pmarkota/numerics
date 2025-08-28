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

        {/* Simplified Content Layout */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Application Process - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-10 rounded-2xl border border-emerald-200">
              <h4 className="text-2xl font-bold text-emerald-900 mb-8 text-center">{t('applicationProcess')}</h4>
              <div className="space-y-6">
                <motion.p 
                  className="text-xl text-emerald-800 leading-relaxed text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  {t('careersDescription')}
                </motion.p>
                
                <motion.p 
                  className="text-xl text-emerald-800 leading-relaxed text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {t('careersDescription2')}
                </motion.p>
                
                <motion.p 
                  className="text-xl text-emerald-900 font-semibold leading-relaxed text-center"
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
              className="bg-white p-10 rounded-2xl border border-gray-200 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="mb-8">
                <div className="inline-flex p-4 bg-emerald-100 rounded-xl mb-6">
                  <Mail className="h-10 w-10 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{t('readyToApply')}</h4>
                <p className="text-lg text-gray-600">{t('sendApplicationToday')}</p>
              </div>
              
              <motion.a 
                href="mailto:info@numerics.hr?subject=Job Application"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="relative h-6 w-6" />
                <span className="relative">{t('sendApplication')}</span>
                <ArrowRight className="relative h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
