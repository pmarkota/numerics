'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('hr'); // Default to Croatian (HR)
  const [isLoaded, setIsLoaded] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('numerics-language');
    if (savedLanguage && (savedLanguage === 'hr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('numerics-language', language);
    }
  }, [language, isLoaded]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
