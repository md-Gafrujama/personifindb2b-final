"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamic imports for navigation
const DynamicUpnav = dynamic(() => import('../../components/Upnav'), { ssr: false });
const LazyLoadedLownav = dynamic(() => import('../../components/Lownav'), { ssr: false });
const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });

const AudienceCountForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('Submitting your audience count request...');
    
    try {
      // Prepare form data for Web3Forms
      const formDataToSend = new FormData();
      
      formDataToSend.append('access_key', '2033055e-d24e-47ab-9caa-69ef0ef56b5f'); 
      
      // Add form fields
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('message', formData.message);
      
      // Add custom fields for better email formatting
      formDataToSend.append('subject', 'New Audience Count Request');
      formDataToSend.append('from_name', 'ProspectBase Website');
      
      // Add honeypot for spam protection
      formDataToSend.append('botcheck', '');
      
      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (response.status === 200) {
        setIsSubmitted(true);
        setSubmitStatus('Success! Your request has been submitted.');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          category: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus('Submission failed. Please try again.');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <DynamicUpnav />
      <LazyLoadedLownav />
      
      <div className="min-h-screen bg-gradient-to-br from-[#0E1F1C] via-[#1a2f29] to-[#0E1F1C] pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => router.back()}
            className="flex items-center text-[#FFD700] hover:text-[#FFA500] transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Previous Page
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInVariants}>
                <p className="text-[#FFD700] text-lg font-semibold mb-4">Contact</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Start generating
                  <br />
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                    leads...
                  </span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                  Get in touch to see how ProspectBase can help accelerate your pipeline.
                </p>
              </motion.div>

              {/* Database Stats */}
              <motion.div variants={fadeInVariants} className="space-y-6">
                <h3 className="text-white text-xl font-semibold">An extensive database</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-2">
                      185M+
                    </div>
                    <div className="text-white font-semibold">Contacts</div>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mb-2">
                      142
                    </div>
                    <div className="text-white font-semibold">Countries</div>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                      25M
                    </div>
                    <div className="text-white font-semibold">Accounts</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Trusted Companies */}
              <motion.div variants={fadeInVariants}>
                <p className="text-gray-400 text-sm mb-6">Trusted by the world's leading companies</p>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  {['proofpoint', 'docusign', 'indeed', 'zendesk', 'HP', 'paloalto', 'informatica', 'TANIUM', 'DELL'].map((company, index) => (
                    <motion.div
                      key={company}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="h-12 bg-gray-700/50 rounded-lg flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="text-white text-xs font-semibold">{company}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">First name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all duration-300 bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Last name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all duration-300 bg-gray-50"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all duration-300 bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all duration-300 bg-gray-50"
                      />
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-4">Which best describes you?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'ABM Content Syndication',
                        'B2B Data & Intent',
                        'ABM Advertising',
                        'ABM Acceleration'
                      ].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="category"
                            value={option}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-[#FFD700] bg-gray-100 border-gray-300 focus:ring-[#FFD700] focus:ring-2"
                          />
                          <span className="ml-3 text-gray-700 font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your audience targeting needs..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all duration-300 bg-gray-50 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      'Get Audience Count'
                    )}
                  </motion.button>

                  {/* Status Message */}
                  {submitStatus && !isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-center py-2 px-4 rounded-lg ${
                        submitStatus.includes('failed') 
                          ? 'bg-red-100 text-red-700 border border-red-200' 
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}
                    >
                      {submitStatus}
                    </motion.div>
                  )}
                </form>
              ) : (
                // Success Message
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your audience count request has been submitted successfully. We'll analyze your requirements and get back to you with detailed audience metrics within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => router.back()}
                    className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Back to Home
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default AudienceCountForm;
