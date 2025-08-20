'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Calculator } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    // Add small delay to ensure mobile menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'services', label: t('services') },
    { id: 'about', label: t('aboutUs') },
    { id: 'careers', label: t('careers') },
    { id: 'contact', label: t('contact') }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-blue-100' 
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent">
                Numerics
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-900 font-medium transition-colors group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
                </motion.button>
              ))}
              
              {/* Language Switch */}
              <div className="flex items-center ml-6 bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setLanguage('hr')}
                  className={`flex items-center space-x-1 px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    language === 'hr' 
                      ? 'bg-white text-blue-900 shadow-sm' 
                      : 'text-gray-600 hover:text-blue-900'
                  }`}
                >
                  <Globe className="h-3 w-3" />
                  <span>HR</span>
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex items-center space-x-1 px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    language === 'en' 
                      ? 'bg-white text-blue-900 shadow-sm' 
                      : 'text-gray-600 hover:text-blue-900'
                  }`}
                >
                  <Globe className="h-3 w-3" />
                  <span>ENG</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg font-medium transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="flex items-center justify-center space-x-2 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setLanguage('hr')}
                  className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    language === 'hr' 
                      ? 'bg-blue-900 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:text-blue-900'
                  }`}
                >
                  <Globe className="h-4 w-4" />
                  <span>{t('croatian')}</span>
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    language === 'en' 
                      ? 'bg-blue-900 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:text-blue-900'
                  }`}
                >
                  <Globe className="h-4 w-4" />
                  <span>{t('english')}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
