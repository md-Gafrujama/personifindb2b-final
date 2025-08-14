"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Upload, Target, Users, Database, X, Globe, Zap, Shield, Star, Check, Mail, Phone, MessageSquare, User } from "lucide-react";
import { useState, useEffect } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
// Define a simple LoadingSkeleton component for dynamic imports
const LoadingSkeleton = () => (
  <div className="flex items-center justify-center h-20 bg-gray-800 text-white">
    Loading navigation...
  </div>
);

// Dynamically import components
const LazyLoadedLownav = dynamic(() => import('../../components/Lownav'), { ssr: false });
const DynamicUpnav = dynamic(() => import('../../components/Upnav'), {
  loading: () => <LoadingSkeleton />,
  ssr: false
});

const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });

function DisplayAds() {
  const router = useRouter();
  const cardVariants = {
    offscreen: { y: 80, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        bounce: 0.3, 
        duration: 1.2,
        staggerChildren: 0.2 
      },
    },
  };

  const hoverEffect = {
    scale: 1.08,
    y: -10,
    boxShadow: "0 20px 40px -10px rgba(255, 216, 0, 0.4)",
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  };

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  const faqItems = [
    {
      question: 'What is content syndication, and how does it work in B2B marketing?',
      answer: 'Content syndication in B2B marketing involves distributing your content across third-party platforms to reach a broader audience and generate qualified leads. Our blend of first-party data intelligence and compliant third-party opt-in data gives us unique targeting precision.'
    },
    {
      question: 'How does your sales development process work?',
      answer: 'We focus on prospects who are actively raising their hands for exactly what you offer. Our global team engages them through personalized outreach, ensuring a seamless experience with deep insights and verified intent.'
    },
    {
      question: 'What makes your B2B data intelligence different?',
      answer: 'Our global B2B data intelligence accelerates your sales and marketing efforts with trustworthy data and smarter insights, helping you create more targeted and effective campaigns.'
    },
    {
      question: 'How can I ensure content reaches the right audience?',
      answer: 'We align your content with our already engaged audiences, distributing assets your ideal customers actually want to consume using our blend of first-party data intelligence and compliant third-party opt-in data.'
    },
    {
      question: 'What follow-up strategies work best for nurturing leads?',
      answer: 'We align with your team to understand your offerings and ideal customers, zeroing in on engaged accounts to deliver qualified opportunities from confirmed buyers through personalized outreach strategies.'
    }
  ];

  return (
    <>
      <Head>
        <title>B2B Solutions: Content Syndication, Sales Development & Data Intelligence</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Drive growth with our comprehensive B2B solutions: Content Syndication, Sales Development, and Data Intelligence. Generate qualified leads and accelerate your business."
        />
        <meta
          name="keywords"
          content="B2B content syndication, sales development, B2B data intelligence, lead generation, content distribution, B2B marketing solutions"
        />
      </Head>

      <DynamicUpnav />
      <LazyLoadedLownav />


      {/* B2B Data Intelligence Section */}
      <div className="min-h-screen bg-gradient-to-br from-[#0E1F1C] via-[#1a2f29] to-[#0E1F1C] py-20 mt-24 lg:mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[#FFD700] text-lg font-semibold"
              >
                B2B Data & Intent
              </motion.p>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
              >
                Global <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">B2B Data</span>
                <br />Intelligence
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-300 text-lg leading-relaxed max-w-lg"
              >
                Fuel your next sales and marketing campaign with verified contact data and business intelligence.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
              <motion.button
                whileHover={hoverEffect}
                onClick={() => router.push('/AudienceCountForm')} 
                className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Request Audience Count
              </motion.button>

              </motion.div>
            </div>

            {/* Right Side - Woman Image and Contact Card */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              {/* Main Woman Image Container */}
              <div className="relative">
                {/* Woman Image Placeholder*/}
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/20 rounded-full flex items-center justify-center border-4 border-[#FFD700]/30">
                  <div className="text-[#FFD700] text-center">
                    <User className="w-24 h-24 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Woman Image</p>
                  </div>
                </div>

                {/* Floating Contact Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -top-8 -left-16 bg-white rounded-2xl p-6 shadow-2xl max-w-xs z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm">Lisa Davis</h3>
                      <p className="text-xs text-gray-600 mb-3">VP Sales</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-gray-300 rounded-full flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-600">Seattle</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-gray-300 rounded-full flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-600">l.davis@example.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-gray-300 rounded-full flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-600">+1-555-4870</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Trusted Companies Section - Moved Below and Added Scrolling Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <p className="text-gray-400 text-sm mb-8">Trusted by the world's leading companies</p>
            
            {/* Scrolling Container */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right space-x-8 items-center">
                {/* First set of logos */}
                <div className="flex space-x-8 items-center flex-shrink-0">
                  <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center opacity-60">
                    <span className="text-white text-xs font-bold">TANIUM</span>
                  </div>
                  <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center opacity-60">
                    <span className="text-white text-xs font-bold">DELL</span>
                  </div>
                  <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center opacity-60">
                    <span className="text-white text-xs font-bold">proofpoint</span>
                  </div>
                  <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center opacity-60">
                    <span className="text-white text-xs font-bold">indeed</span>
                  </div>
                  <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center opacity-60">
                    <span className="text-white text-xs font-bold">zendesk</span>
                  </div>
                  <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center opacity-60">
                    <span className="text-white text-xs font-bold">HP</span>
                  </div>
                  <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center opacity-60">
                    <span className="text-white text-xs font-bold">paloalto</span>
                  </div>
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex space-x-8 items-center flex-shrink-0">
                  <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center opacity-60">
                    <span className="text-white text-xs font-bold">TANIUM</span>
                  </div>
                  <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center opacity-60">
                    <span className="text-white text-xs font-bold">DELL</span>
                  </div>
                  <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center opacity-60">
                    <span className="text-white text-xs font-bold">proofpoint</span>
                  </div>
                  <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center opacity-60">
                    <span className="text-white text-xs font-bold">indeed</span>
                  </div>
                  <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center opacity-60">
                    <span className="text-white text-xs font-bold">zendesk</span>
                  </div>
                  <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center opacity-60">
                    <span className="text-white text-xs font-bold">HP</span>
                  </div>
                  <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center opacity-60">
                    <span className="text-white text-xs font-bold">paloalto</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-br from-[#1a2f29] to-[#0E1F1C] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Engage and win more deals
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-2">
                181M+
              </div>
              <div className="text-white font-semibold">Business Professionals</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                25M
              </div>
              <div className="text-white font-semibold">Accounts</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2">
                142+
              </div>
              <div className="text-white font-semibold">Countries</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                118
              </div>
              <div className="text-white font-semibold">Job Functions</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Global Outreach Section - Hydration Safe */}
      <div className="bg-gradient-to-br from-[#0E1F1C] to-[#1a2f29] py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">Smarter</span>
              <span className="text-white"> Outreach</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              Our mission is simple: provide the world's most advanced and actionable B2B contact data.
            </p>
          </motion.div>

          {/* World Map Container - Fixed Height */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative bg-gradient-to-br from-[#1a2f29] to-[#0E1F1C] rounded-2xl md:rounded-3xl p-4 md:p-8 overflow-hidden"
            style={{ minHeight: '500px' }} // Fixed consistent height
          >
            {/* Responsive Dotted Background */}
            <div 
              className="absolute inset-0 opacity-30 md:opacity-40"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 215, 0, 0.6) 1px, transparent 0)`,
                backgroundSize: '6px 6px'
              }}
            />
            
            {/* World Map Shape Overlay */}
            <div className="absolute inset-0 hidden md:block">
              <svg viewBox="0 0 1000 400" className="w-full h-full opacity-30">
                <g fill="rgba(255, 215, 0, 0.3)">
                  {/* North America */}
                  <path d="M50 80 Q120 60 180 80 Q220 85 250 100 L280 120 Q290 140 275 160 L250 180 Q200 185 150 175 L100 160 Q70 140 50 110 Z"/>
                  {/* South America */}
                  <path d="M200 220 Q230 210 250 230 L260 270 Q265 320 255 360 Q245 380 235 375 Q225 370 220 350 L215 310 Q210 270 215 240 Z"/>
                  {/* Europe */}
                  <path d="M380 70 Q420 65 460 75 Q480 80 485 90 L480 105 Q470 115 450 120 L420 125 Q395 120 380 110 L375 90 Z"/>
                  {/* Africa */}
                  <path d="M350 130 Q390 120 420 135 L435 160 Q440 200 435 240 L430 280 Q425 310 415 325 Q405 330 395 325 L390 300 Q385 260 388 220 L392 180 Q395 150 350 130 Z"/>
                  {/* Asia */}
                  <path d="M500 80 Q580 75 660 85 Q720 90 780 100 L820 120 Q825 140 815 160 L780 180 Q720 185 660 180 L580 175 Q520 170 500 150 L495 120 Z"/>
                  {/* Australia */}
                  <path d="M650 280 Q690 275 720 285 Q740 295 745 310 Q740 325 720 330 L690 335 Q670 330 650 315 Q645 300 650 280 Z"/>
                </g>
              </svg>
            </div>

            {/* Data Points Container - CSS Only Responsive */}
            <div className="relative z-10 h-full">
              
              {/* Mobile Layout: Grid of Cards (Always rendered, hidden on desktop) */}
              <div className="block lg:hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-4">
                  {[
                    { region: "North America", value: "67,691,053", borderColor: "#FFD700", textColor: "text-yellow-400" },
                    { region: "Europe", value: "46,288,201", borderColor: "#06b6d4", textColor: "text-cyan-500" },
                    { region: "APAC", value: "32,829,798", borderColor: "#a855f7", textColor: "text-purple-500" },
                    { region: "Middle East", value: "11,082,324", borderColor: "#ef4444", textColor: "text-red-500" },
                    { region: "LATAM", value: "18,609,598", borderColor: "#10b981", textColor: "text-green-500" },
                    { region: "Africa", value: "4,842,848", borderColor: "#eab308", textColor: "text-yellow-500" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.region}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-xl px-3 sm:px-4 py-3 shadow-xl border-l-4"
                      style={{ borderLeftColor: item.borderColor }}
                    >
                      <div className="text-xs text-gray-600 font-medium mb-1">{item.region}</div>
                      <div className={`text-base sm:text-lg font-bold ${item.textColor}`}>
                        {item.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Desktop Layout: Positioned over Map (Always rendered, hidden on mobile) */}
              <div className="hidden lg:block">
                {/* North America - Top Left */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-12 xl:top-16 left-16 xl:left-20"
                >
                  <div className="bg-white rounded-xl px-4 py-3 shadow-xl border-l-4 border-[#FFD700] hover:shadow-2xl transition-shadow duration-300">
                    <div className="text-xs text-gray-600 font-medium mb-1">North America</div>
                    <div className="text-lg font-bold text-[#FFD700]">67,691,053</div>
                  </div>
                </motion.div>

                {/* Europe - Top Center */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute top-8 xl:top-12 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-white rounded-xl px-4 py-3 shadow-xl border-l-4 border-cyan-500 hover:shadow-2xl transition-shadow duration-300">
                    <div className="text-xs text-gray-600 font-medium mb-1">Europe</div>
                    <div className="text-lg font-bold text-cyan-500">46,288,201</div>
                  </div>
                </motion.div>

                {/* APAC - Top Right */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute top-12 xl:top-16 right-16 xl:right-20"
                >
                  <div className="bg-white rounded-xl px-4 py-3 shadow-xl border-l-4 border-purple-500 hover:shadow-2xl transition-shadow duration-300">
                    <div className="text-xs text-gray-600 font-medium mb-1">APAC</div>
                    <div className="text-lg font-bold text-purple-500">32,829,798</div>
                  </div>
                </motion.div>

                {/* Middle East - Center */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute top-28 xl:top-32 right-1/3"
                >
                  <div className="bg-white rounded-xl px-4 py-3 shadow-xl border-l-4 border-red-500 hover:shadow-2xl transition-shadow duration-300">
                    <div className="text-xs text-gray-600 font-medium mb-1">Middle East</div>
                    <div className="text-lg font-bold text-red-500">11,082,324</div>
                  </div>
                </motion.div>

                {/* LATAM - Bottom Left */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-16 xl:bottom-20 left-24 xl:left-28"
                >
                  <div className="bg-white rounded-xl px-4 py-3 shadow-xl border-l-4 border-green-500 hover:shadow-2xl transition-shadow duration-300">
                    <div className="text-xs text-gray-600 font-medium mb-1">LATAM</div>
                    <div className="text-lg font-bold text-green-500">18,609,598</div>
                  </div>
                </motion.div>

                {/* Africa - Bottom Center */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute bottom-12 xl:bottom-16 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-white rounded-xl px-4 py-3 shadow-xl border-l-4 border-yellow-500 hover:shadow-2xl transition-shadow duration-300">
                    <div className="text-xs text-gray-600 font-medium mb-1">Africa</div>
                    <div className="text-lg font-bold text-yellow-500">4,842,848</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Static Animation Dots - No Dynamic Logic */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                { left: '15%', top: '25%' },
                { left: '35%', top: '15%' },
                { left: '55%', top: '35%' },
                { left: '75%', top: '20%' },
                { left: '25%', top: '65%' },
                { left: '45%', top: '75%' },
                { left: '65%', top: '60%' },
                { left: '85%', top: '45%' }
              ].map((position, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#FFD700] rounded-full"
                  style={{
                    left: position.left,
                    top: position.top
                  }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3 + (i % 2),
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
       
      {/* FAQ Section */}
      <div className="min-h-screen w-full flex items-stretch bg-gradient-to-br from-[#0E1F1C] via-[#1a2f29] to-[#0E1F1C]">
        <div className="w-full flex flex-col md:flex-row">
          <div className="bg-gradient-to-br from-[#0E1F1C] to-[#1a2f29] md:w-2/5 p-12 flex flex-col items-start justify-center">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Frequently Asked <br />
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">Questions</span>
            </motion.h1>
          </div>

          <div className="md:w-3/5 p-8 md:p-12">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-gray-600/50 pb-2"
                >
                  <motion.button
                    className="flex items-center w-full text-left py-6 focus:outline-none hover:text-[#FFD700] transition-all duration-300 group"
                    onClick={() => toggleQuestion(index)}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="text-white flex-shrink-0 mr-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-2 rounded-full"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Plus
                        size={20}
                        className={`text-black transition-transform duration-300 ${
                          openQuestion === index ? "rotate-45" : ""
                        }`}
                      />
                    </motion.span>
                    <span className="text-white font-semibold text-lg group-hover:text-[#FFD700] transition-colors duration-300">
                      {item.question}
                    </span>
                  </motion.button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: openQuestion === index ? "auto" : 0,
                      opacity: openQuestion === index ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pl-16 pb-6 pr-4 text-gray-300 leading-relaxed">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center relative flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <Image
          src="/images/connectus.jpg"
          alt="Connect with us"
          fill
          className="object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white flex flex-col items-center relative z-10"
        >
          <Link
            href="/Contact"
            className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold group"
            passHref
          >
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Connect</span>
            <motion.span
              className="ml-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-45 transition-all duration-500 shadow-2xl"
              whileHover={{ scale: 1.3, rotate: 45 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight className="text-black w-6 h-6 md:w-8 md:h-8" />
            </motion.span>
          </Link>
          <motion.p 
            className="text-white text-2xl sm:text-3xl md:text-4xl mt-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            with us
          </motion.p>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

export default DisplayAds;