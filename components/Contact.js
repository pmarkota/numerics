'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '',
    mathCaptcha: ''
  });
  const [captchaQuestion, setCaptchaQuestion] = useState({ question: '', answer: 0 });

  // Generate random math captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '×'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let answer;
    let question;
    
    switch(operation) {
      case '+':
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
        break;
      case '-':
        // Ensure positive result
        const larger = Math.max(num1, num2);
        const smaller = Math.min(num1, num2);
        answer = larger - smaller;
        question = `${larger} - ${smaller}`;
        break;
      case '×':
        // Use smaller numbers for multiplication
        const small1 = Math.floor(Math.random() * 5) + 1;
        const small2 = Math.floor(Math.random() * 5) + 1;
        answer = small1 * small2;
        question = `${small1} × ${small2}`;
        break;
      default:
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
    }
    
    setCaptchaQuestion({ question, answer });
  };

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple honeypot check (basic spam protection)
    if (formData.honeypot) {
      return; // Silent fail for bots
    }

    // Math captcha verification
    if (parseInt(formData.mathCaptcha) !== captchaQuestion.answer) {
      setSubmitStatus({ type: 'error', message: t('captchaError') || 'Please solve the math problem correctly.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS or simple fetch to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus({ type: 'success', message: t('messageSentSuccess') || 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '', honeypot: '', mathCaptcha: '' });
        generateCaptcha(); // Generate new captcha after successful submission
      } else if (data.fallback && data.mailtoLink) {
        // Fallback to mailto if API fails
        window.location.href = data.mailtoLink;
        setSubmitStatus({ type: 'success', message: 'Opening your email client...' });
        setFormData({ name: '', email: '', message: '', honeypot: '', mathCaptcha: '' });
        generateCaptcha(); // Generate new captcha after successful submission
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: t('messageError') || 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCaptchaVerify = (token) => {
    setCaptchaToken(token);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('email'),
      value: "info@numerics.hr",
      href: "mailto:info@numerics.hr",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: t('phone'),
      value: "+385 98 250 920",
      href: "tel:+385982509200",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: MapPin,
      label: t('address'),
      value: "Međimurska ulica 19\n42000 Varaždin, Croatia",
      href: null,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
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
            <span className="text-sm font-medium text-blue-700">{t('getInTouchSection')}</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-blue-900">
              {t('contactUs')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 bg-gradient-to-r ${info.gradient} rounded-xl shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.label}</h3>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-700 whitespace-pre-line font-medium">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>


            {/* Enhanced Google Maps Embed */}
            <motion.div 
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">{t('ourLocation')}</span>
                </div>
              </div>
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.8234567890123!2d16.3378!3d46.3058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d692e4c8b5a7%3A0x123456789abcdef0!2sMeđimurska%20ul.%2019%2C%2042000%2C%20Varaždin%2C%20Croatia!5e0!3m2!1sen!2shr!4v1234567890123!5m2!1sen!2shr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Numerics Office Location"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('sendMessage')}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('fullName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none text-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none text-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none outline-none text-gray-900"
                  />
                </div>

                {/* Honeypot field (hidden from users, visible to bots) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                {/* Enhanced Math CAPTCHA */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      {t('verificationQuestion')} {captchaQuestion.question} = ?
                    </label>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="text-xs text-blue-600 hover:text-blue-800 underline"
                    >
                      {t('newQuestion') || 'New Question'}
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="number"
                      name="mathCaptcha"
                      value={formData.mathCaptcha || ''}
                      onChange={handleChange}
                      required
                      className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none text-gray-900 font-medium"
                      placeholder="?"
                    />
                    <span className="text-sm text-gray-600">
                      {t('captchaHelp') || 'Solve to verify you\'re human'}
                    </span>
                  </div>
                </div>

                {submitStatus && (
                  <motion.div 
                    className={`p-4 rounded-lg flex items-center space-x-3 ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 border border-green-200 text-green-800' 
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <span className="text-sm">{submitStatus.message}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? (t('sending') || 'Sending...') : t('sendMessage')}</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
