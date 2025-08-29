'use client';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone, MapPin, Building, FileText, Shield, Calculator } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const companyInfo = [
    { icon: Building, text: "Numerics Co. d.o.o." },
    { icon: MapPin, text: "Međimurska ulica 19, 42000 Varaždin" },
    { text: "OIB: 04515646687" },
  ];

  const legalInfo = [
    { text: t('courtRegistryInfo') },
    { text: t('shareCapital') },
    { icon: FileText, text: "IBAN: HR1724020061101114525" },
    { text: "Erste&Steiermärkische Bank d.d." }
  ];

  const contactInfo = [
    { icon: Mail, text: "info@numerics.hr", href: "mailto:info@numerics.hr" },
    { icon: Phone, text: "+385 98 250 920", href: "tel:+385982509200" }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Logo Section */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-2xl shadow-lg">
                <Calculator className="h-10 w-10 text-white" />
              </div>
            </div>
            <span className="text-4xl font-bold text-white">
              Numerics
            </span>
          </div>
          <p className="text-gray-300 max-w-md mx-auto text-lg">
            {t('digitalAccountingSolutions')}
          </p>
        </motion.div>

        {/* Legal Information - 3 Rows Centered */}
        <motion.div 
          className="text-center mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="space-y-1">
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footerLegalLine1')}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footerLegalLine2')}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footerLegalLine3')}
            </p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-700/50 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center text-emerald-200 text-sm">
              &copy; 2025 Numerics Co. d.o.o. {t('allRightsReserved')}
            </p>
            <div className="flex items-center space-x-6">
              <motion.button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors text-sm"
                whileHover={{ y: -2 }}
              >
                {t('backToTop')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
