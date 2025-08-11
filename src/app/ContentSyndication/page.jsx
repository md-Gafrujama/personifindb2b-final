


// "use client";
// import { motion } from "framer-motion";
// import { ArrowUpRight, Plus, Upload, Target, Users, Database, X, Globe, Zap, Shield, Star, Check, Mail, Phone, MessageSquare, User } from "lucide-react";
// import { useState } from "react";
// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';
// import dynamic from 'next/dynamic';

// // Define a simple LoadingSkeleton component for dynamic imports
// const LoadingSkeleton = () => (
//   <div className="flex items-center justify-center h-20 bg-gray-800 text-white">
//     Loading navigation...
//   </div>
// );

// // Dynamically import components
// const LazyLoadedLownav = dynamic(() => import('../../components/Lownav'), { ssr: false });
// const DynamicUpnav = dynamic(() => import('../../components/Upnav'), {
//   loading: () => <LoadingSkeleton />,
//   ssr: false
// });

// const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });

// function B2BcontentSyndication() {
//   const cardVariants = {
//     offscreen: { y: 80, opacity: 0 },
//     onscreen: {
//       y: 0,
//       opacity: 1,
//       transition: { 
//         type: "spring", 
//         bounce: 0.3, 
//         duration: 1.2,
//         staggerChildren: 0.2 
//       },
//     },
//   };

//   const hoverEffect = {
//     scale: 1.08,
//     y: -10,
//     boxShadow: "0 20px 40px -10px rgba(255, 216, 0, 0.4)",
//     transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
//   };

//   const [openQuestion, setOpenQuestion] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     description: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('');

//   const toggleQuestion = (index) => {
//     setOpenQuestion(openQuestion === index ? null : index);
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           access_key: 'e505fedc-14ad-49ed-834f-32cd23ad6136',
//           ...formData
//         })
//       });

//       const result = await response.json();
      
//       if (result.success) {
//         setSubmitStatus('success');
//         setFormData({
//           firstName: '',
//           lastName: '',
//           email: '',
//           phone: '',
//           description: '',
//           message: ''
//         });
//         setTimeout(() => {
//           setShowModal(false);
//           setSubmitStatus('');
//         }, 2000);
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const faqItems = [
//     {
//       question: 'What is content syndication, and how does it work in B2B marketing?',
//       answer: 'Content syndication in B2B marketing involves distributing your content across third-party platforms to reach a broader audience and generate qualified leads. Our blend of first-party data intelligence and compliant third-party opt-in data gives us unique targeting precision.'
//     },
//     {
//       question: 'How does your sales development process work?',
//       answer: 'We focus on prospects who are actively raising their hands for exactly what you offer. Our global team engages them through personalized outreach, ensuring a seamless experience with deep insights and verified intent.'
//     },
//     {
//       question: 'What makes your B2B data intelligence different?',
//       answer: 'Our global B2B data intelligence accelerates your sales and marketing efforts with trustworthy data and smarter insights, helping you create more targeted and effective campaigns.'
//     },
//     {
//       question: 'How can I ensure content reaches the right audience?',
//       answer: 'We align your content with our already engaged audiences, distributing assets your ideal customers actually want to consume using our blend of first-party data intelligence and compliant third-party opt-in data.'
//     },
//     {
//       question: 'What follow-up strategies work best for nurturing leads?',
//       answer: 'We align with your team to understand your offerings and ideal customers, zeroing in on engaged accounts to deliver qualified opportunities from confirmed buyers through personalized outreach strategies.'
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>B2B Solutions: Content Syndication, Sales Development & Data Intelligence</title>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta
//           name="description"
//           content="Drive growth with our comprehensive B2B solutions: Content Syndication, Sales Development, and Data Intelligence. Generate qualified leads and accelerate your business."
//         />
//         <meta
//           name="keywords"
//           content="B2B content syndication, sales development, B2B data intelligence, lead generation, content distribution, B2B marketing solutions"
//         />
//       </Head>

//       <DynamicUpnav />
//       <LazyLoadedLownav />

//       {/* Hero Section */}
//       <div className="relative w-full min-h-screen mt-24 bg-cover bg-center flex items-center justify-start px-6 sm:px-8 md:px-16 lg:px-32 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0" />
//         <Image
//           src="/images/syndication.jpg"
//           alt="B2B Solutions for Growth"
//           fill
//           priority
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
//         />
//         <div className="text-left text-white max-w-4xl relative z-10">
//           <motion.div 
//             initial={{ opacity: 0, y: 50, scale: 0.8 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="flex items-center mb-8"
//           >
//             <motion.div 
//               className="bg-gradient-to-r from-[#FFD800] to-[#FFA500] text-black font-bold text-xl rounded-full w-16 h-16 flex items-center justify-center mr-4 shadow-lg"
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               B2B
//             </motion.div>
//             <span className="text-white text-3xl font-bold tracking-wide">Solutions</span>
//           </motion.div>
//           <motion.h1 
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
//           >
//             Drive growth with <br />
//             precision-targeted <br />
//             <motion.span 
//               className="text-[#FFD800] bg-gradient-to-r from-[#FFD800] to-[#FFA500] bg-clip-text text-transparent"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.6 }}
//             >
//               B2B solutions.
//             </motion.span>
//           </motion.h1>
//           <motion.button 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             whileHover={{ scale: 1.08, y: -5 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-[#FFD800] to-[#FFA500] text-black text-lg font-bold py-4 px-10 rounded-full shadow-2xl transition-all duration-300 hover:shadow-[#FFD800]/50"
//           >
//             GET STARTED TODAY
//           </motion.button>
//         </div>
//       </div>

//       {/* Solutions Overview */}
//       <div className="w-full bg-gradient-to-br from-[#0E1F1C] via-[#1a2f29] to-[#0E1F1C] text-white py-24 px-6 sm:px-8 md:px-16 lg:px-32">
//         <motion.h2 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-16 text-center"
//         >
//           Three powerful solutions to <br />
//           <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
//             accelerate your growth.
//           </span>
//         </motion.h2>

//         {/* Solution 1: Content Syndication */}
//         <motion.section 
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="mb-24 border-b border-gray-600/50 pb-24"
//         >
//           <div className="flex flex-col lg:flex-row gap-16 items-start">
//             <div className="lg:w-1/3">
//               <motion.div 
//                 className="flex items-center mb-8"
//                 whileHover={{ x: 10 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-3 rounded-full mr-4 shadow-lg">
//                   <Target className="text-black w-8 h-8" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#FFD700]">Content Syndication</h3>
//               </motion.div>
//               <p className="text-xl font-semibold mb-6 text-gray-300">
//                 Drive stronger interest and faster growth for your products and services.
//               </p>
//             </div>
//             <div className="lg:w-2/3">
//               <div className="space-y-8">
//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50"
//                 >
//                   <h4 className="text-[#FFD700] font-bold text-lg mb-4">OUR SOLUTION</h4>
//                   <p className="text-gray-300 mb-4 leading-relaxed">
//                     Do more with your content than just share it. We align your content with our already 
//                     engaged audiences, distributing assets your ideal customers actually want to consume.
//                   </p>
//                   <p className="text-gray-300 leading-relaxed">
//                     Our blend of first-party data intelligence and compliant third-party opt-in data gives us the unique 
//                     ability to uncover deeper insights and target with a level of precision few can match.
//                   </p>
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50"
//                 >
//                   <h4 className="text-[#FFD700] font-bold text-lg mb-4">OUR SERVICES</h4>
//                   <p className="text-gray-300 leading-relaxed">
//                     We take care of everything- from building your audience to placing and distributing 
//                     your content, managing campaigns, and ensuring quality at every step. That means you can focus on 
//                     closing deals while we help you generate more revenue from content syndication, with less time and 
//                     effort on your part.
//                   </p>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Solution 2: Sales Development */}
//         <motion.section 
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="mb-24 border-b border-gray-600/50 pb-24"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Left Side - Image */}
//             <motion.div 
//               className="order-2 lg:order-1"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               <div className="relative group">
//                 <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 p-2"
//                 >
//                   <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
//                     <Image
//                       src="/images/work1.webp"
//                       alt="Sales Development Team"
//                       fill
//                       className="object-cover hover:scale-105 transition-transform duration-700"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
//                   </div>
//                 </motion.div>
//                 {/* Decorative Elements */}
//                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full opacity-20 blur-xl"></div>
//                 <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full opacity-10 blur-2xl"></div>
//               </div>
//             </motion.div>

//             {/* Right Side - Content */}
//             <motion.div 
//               className="order-1 lg:order-2"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <motion.div 
//                 className="flex items-center mb-8"
//                 whileHover={{ x: 10 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-4 rounded-full mr-4 shadow-lg">
//                   <Users className="text-black w-8 h-8" />
//                 </div>
//                 <h3 className="text-3xl font-bold text-[#FFD700]">Sales Development</h3>
//               </motion.div>
              
//               <p className="text-xl font-semibold mb-8 text-gray-300 leading-relaxed">
//                 Fuel meaningful growth and build a pipeline that converts.
//               </p>

//               <div className="space-y-6">
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.4 }}
//                   className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 p-6 rounded-xl backdrop-blur-sm border border-[#FFD700]/20"
//                 >
//                   <h4 className="text-[#FFD700] font-bold text-lg mb-3 flex items-center">
//                     <div className="w-2 h-2 bg-[#FFD700] rounded-full mr-3"></div>
//                     OUR SOLUTION
//                   </h4>
//                   <p className="text-gray-300 leading-relaxed">
//                     We focus on prospects who are actively raising their hands for exactly what you offer. 
//                     Our global team engages them through personalized outreach, ensuring a seamless and professional 
//                     experience with deep insights and verified intent.
//                   </p>
//                 </motion.div>
                
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.6 }}
//                   className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 p-6 rounded-xl backdrop-blur-sm border border-[#FFD700]/20"
//                 >
//                   <h4 className="text-[#FFD700] font-bold text-lg mb-3 flex items-center">
//                     <div className="w-2 h-2 bg-[#FFD700] rounded-full mr-3"></div>
//                     OUR SERVICES
//                   </h4>
//                   <p className="text-gray-300 leading-relaxed">
//                     We align with your team to understand your offerings and ideal customers, zeroing in 
//                     on engaged accounts to deliver qualified opportunities from confirmed buyers.
//                   </p>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.section>

//         {/* Solution 3: B2B Data & Intent - ENHANCED WITH CONTENT ABOVE, IMAGE BELOW */}
//         <motion.section 
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="mb-20"
//         >
//           {/* Header Section with Enhanced Styling */}
//           <motion.div 
//             className="text-center mb-20"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.div 
//               className="inline-flex items-center justify-center mb-10 relative"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/30 to-[#FFA500]/30 rounded-full blur-xl scale-150"></div>
//               <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-6 rounded-full mr-6 shadow-2xl relative z-10">
//                 <Database className="text-black w-12 h-12" />
//               </div>
//               <h3 className="text-5xl md:text-6xl font-bold text-[#FFD700] relative z-10">B2B Data & Intent</h3>
//             </motion.div>
            
//             <motion.p 
//               className="text-3xl font-semibold text-gray-300 leading-relaxed max-w-5xl mx-auto mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               Global B2B Data Intelligence Platform
//             </motion.p>
            
//             <motion.p 
//               className="text-xl text-gray-400 max-w-4xl mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               Accelerate your sales and marketing efforts with trustworthy data and smarter insights that deliver measurable results.
//             </motion.p>
//           </motion.div>

//           {/* Enhanced Content Section */}
//           <div className="max-w-7xl mx-auto mb-20">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
//               {/* Left Column - Solution */}
//               <motion.div 
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                 <motion.div
//                   className="bg-gradient-to-br from-gray-800/60 via-gray-900/80 to-gray-800/60 p-10 rounded-2xl backdrop-blur-sm border border-[#FFD700]/30 shadow-2xl relative overflow-hidden group"
//                   whileHover={{ scale: 1.02, y: -5 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
//                   <h4 className="text-[#FFD700] font-bold text-2xl mb-8 flex items-center relative z-10">
//                     <div className="w-4 h-4 bg-[#FFD700] rounded-full mr-4 animate-pulse"></div>
//                     OUR SOLUTION
//                   </h4>
                  
//                   <p className="text-gray-300 mb-10 leading-relaxed text-lg relative z-10">
//                     Our comprehensive B2B data intelligence platform provides you with the insights needed to identify, 
//                     target, and engage your ideal prospects with precision. Transform your marketing campaigns with 
//                     data-driven intelligence that delivers measurable results.
//                   </p>
                  
//                   {/* Enhanced Feature Grid */}
//                   <div className="grid grid-cols-2 gap-6 mb-10 relative z-10">
//                     <motion.div 
//                       className="flex items-center space-x-3 bg-gray-800/40 p-4 rounded-xl"
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
//                       <span className="text-gray-300 font-semibold">185M+ Contacts</span>
//                     </motion.div>
//                     <motion.div 
//                       className="flex items-center space-x-3 bg-gray-800/40 p-4 rounded-xl"
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
//                       <span className="text-gray-300 font-semibold">142 Countries</span>
//                     </motion.div>
//                     <motion.div 
//                       className="flex items-center space-x-3 bg-gray-800/40 p-4 rounded-xl"
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
//                       <span className="text-gray-300 font-semibold">25M+ Accounts</span>
//                     </motion.div>
//                     <motion.div 
//                       className="flex items-center space-x-3 bg-gray-800/40 p-4 rounded-xl"
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
//                       <span className="text-gray-300 font-semibold">Real-time Intent</span>
//                     </motion.div>
//                   </div>

//                   <motion.button
//                     onClick={() => setShowModal(true)}
//                     whileHover={{ 
//                       scale: 1.08, 
//                       y: -3,
//                       boxShadow: "0 25px 60px -10px rgba(255, 216, 0, 0.6)"
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-gradient-to-r from-[#FFD800] to-[#FFA500] text-black font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-2xl text-lg w-full relative z-10 group"
//                   >
//                     <span className="flex items-center justify-center">
//                       Request Audience Count
//                       <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//                     </span>
//                   </motion.button>
//                 </motion.div>
//               </motion.div>

//               {/* Right Column - Benefits */}
//               <motion.div 
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//               >
//                 <motion.div
//                   className="bg-gradient-to-br from-gray-800/60 via-gray-900/80 to-gray-800/60 p-10 rounded-2xl backdrop-blur-sm border border-[#FFD700]/30 shadow-2xl relative overflow-hidden group h-full"
//                   whileHover={{ scale: 1.02, y: -5 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
//                   <h4 className="text-[#FFD700] font-bold text-2xl mb-8 flex items-center relative z-10">
//                     <div className="w-4 h-4 bg-[#FFD700] rounded-full mr-4 animate-pulse"></div>
//                     KEY BENEFITS
//                   </h4>
                  
//                   <ul className="space-y-6 text-gray-300 relative z-10">
//                     <motion.li 
//                       className="flex items-start bg-gray-800/30 p-4 rounded-xl"
//                       whileHover={{ x: 5 }}
//                     >
//                       <Shield className="w-6 h-6 text-[#FFD700] mt-1 mr-4 flex-shrink-0" />
//                       <span className="text-lg">Enhanced targeting precision with first-party and compliant third-party data</span>
//                     </motion.li>
//                     <motion.li 
//                       className="flex items-start bg-gray-800/30 p-4 rounded-xl"
//                       whileHover={{ x: 5 }}
//                     >
//                       <Zap className="w-6 h-6 text-[#FFD700] mt-1 mr-4 flex-shrink-0" />
//                       <span className="text-lg">Real-time intent signals to identify in-market prospects</span>
//                     </motion.li>
//                     <motion.li 
//                       className="flex items-start bg-gray-800/30 p-4 rounded-xl"
//                       whileHover={{ x: 5 }}
//                     >
//                       <Globe className="w-6 h-6 text-[#FFD700] mt-1 mr-4 flex-shrink-0" />
//                       <span className="text-lg">Global coverage with local market insights</span>
//                     </motion.li>
//                     <motion.li 
//                       className="flex items-start bg-gray-800/30 p-4 rounded-xl"
//                       whileHover={{ x: 5 }}
//                     >
//                       <Database className="w-6 h-6 text-[#FFD700] mt-1 mr-4 flex-shrink-0" />
//                       <span className="text-lg">Seamless integration with your existing tech stack</span>
//                     </motion.li>
//                   </ul>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>

//           {/* Image Section Below Content - Enhanced */}
//           <motion.div 
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="max-w-6xl mx-auto"
//           >
//             <div className="relative group">
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 p-3"
//               >
//                 <div className="relative aspect-[19/10] rounded-2xl overflow-hidden">
//                   <Image
//                     src="/images/work2.webp"
//                     alt="B2B Data Intelligence Dashboard"
//                     fill
//                     className="object-cover hover:scale-105 transition-transform duration-700"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//                 </div>
//               </motion.div>
              
//               {/* Enhanced Decorative Elements */}
//               <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full opacity-10 blur-3xl"></div>
//               <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full opacity-20 blur-2xl"></div>
              
//               {/* Floating Data Points */}
//               <motion.div 
//                 className="absolute -top-6 right-20 bg-[#FFD700] text-black px-4 py-2 rounded-full text-sm font-bold shadow-xl"
//                 animate={{ y: [0, -15, 0] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 185M+ Contacts
//               </motion.div>
              
//               <motion.div 
//                 className="absolute top-1/2 -left-8 bg-[#FFA500] text-black px-4 py-2 rounded-full text-sm font-bold shadow-xl"
//                 animate={{ y: [0, 15, 0] }}
//                 transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//               >
//                 142 Countries
//               </motion.div>
              
//               <motion.div 
//                 className="absolute bottom-1/4 -right-6 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-4 py-2 rounded-full text-sm font-bold shadow-xl"
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//               >
//                 Real-time Intent
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.section>
//       </div>

//       {/* FULLY RESPONSIVE MODAL - COMPLETELY REDESIGNED */}
//       {showModal && (
//         <div 
//           className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-2 sm:p-4"
//           onClick={(e) => {
//             if (e.target === e.currentTarget) {
//               setShowModal(false);
//             }
//           }}
//         >
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8, y: 50 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.8, y: 50 }}
//             transition={{ type: "spring", damping: 20, stiffness: 300 }}
//             className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[98vh] overflow-hidden relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button - Fixed Position */}
//             <motion.button 
//               onClick={() => setShowModal(false)}
//               whileHover={{ scale: 1.1, rotate: 90 }}
//               whileTap={{ scale: 0.9 }}
//               className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 bg-gray-100/90 hover:bg-gray-200/90 backdrop-blur-sm p-2 rounded-full transition-all duration-200 shadow-lg"
//             >
//               <X size={18} className="text-gray-600" />
//             </motion.button>

//             {/* Scrollable Container */}
//             <div className="h-full max-h-[98vh] overflow-y-auto">
              
//               {/* Mobile-First Layout */}
//               <div className="block lg:hidden">
//                 {/* Mobile Header */}
//                 <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-6 text-white relative overflow-hidden">
//                   <div className="relative z-10">
//                     <div className="flex items-center mb-4">
//                       <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-2 rounded-xl mr-3 shadow-xl">
//                         <Database className="w-6 h-6 text-black" />
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-bold">ProspectBase</h3>
//                         <p className="text-blue-200 text-xs">B2B Data Intelligence</p>
//                       </div>
//                     </div>
                    
//                     <h2 className="text-2xl font-bold leading-tight mb-3">
//                       Unlock Your <br />
//                       <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
//                         Audience
//                       </span> <br />
//                       Potential
//                     </h2>
                    
//                     <p className="text-blue-100 text-sm leading-relaxed mb-4">
//                       Get precise audience counts and insights to accelerate your B2B growth strategy.
//                     </p>
                    
//                     {/* Mobile Stats */}
//                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
//                       <p className="text-blue-200 text-xs mb-3 text-center">Global Database Coverage</p>
//                       <div className="grid grid-cols-3 gap-3">
//                         <div className="text-center">
//                           <div className="text-lg font-bold text-[#FFD700] mb-1">185M+</div>
//                           <div className="text-xs text-blue-200">B2B Contacts</div>
//                         </div>
//                         <div className="text-center">
//                           <div className="text-lg font-bold text-[#4ECDC4] mb-1">142</div>
//                           <div className="text-xs text-blue-200">Countries</div>
//                         </div>
//                         <div className="text-center">
//                           <div className="text-lg font-bold text-[#FF6B6B] mb-1">25M+</div>
//                           <div className="text-xs text-blue-200">Companies</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Mobile Background Elements */}
//                   <div className="absolute -top-5 -left-5 w-20 h-20 bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/20 rounded-full blur-2xl"></div>
//                   <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-gradient-to-br from-[#4ECDC4]/20 to-[#44A08D]/20 rounded-full blur-xl"></div>
//                 </div>
                
//                 {/* Mobile Form */}
//                 <div className="p-6">
//                   <div className="mb-6">
//                     <h3 className="text-xl font-bold text-gray-800 mb-2">Request Audience Count</h3>
//                     <p className="text-gray-600 text-sm">Fill out the form below and we'll provide you with detailed audience insights within 24 hours.</p>
//                   </div>
                  
//                   {/* Status Messages */}
//                   {submitStatus === 'success' && (
//                     <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-400 rounded-r-xl">
//                       <div className="flex items-center">
//                         <div className="bg-green-400 rounded-full p-1 mr-2">
//                           <Check className="w-3 h-3 text-white" />
//                         </div>
//                         <div>
//                           <h4 className="text-green-800 font-semibold text-sm">Success!</h4>
//                           <p className="text-green-700 text-xs">Your request has been submitted. We'll get back to you soon!</p>
//                         </div>
//                       </div>
//                     </div>
//                   )}
                  
//                   {submitStatus === 'error' && (
//                     <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-400 rounded-r-xl">
//                       <div className="flex items-center">
//                         <X className="w-4 h-4 text-red-400 mr-2" />
//                         <div>
//                           <h4 className="text-red-800 font-semibold text-sm">Error</h4>
//                           <p className="text-red-700 text-xs">There was an error submitting your request. Please try again.</p>
//                         </div>
//                       </div>
//                     </div>
//                   )}
                  
//                   {/* Mobile Form Fields */}
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     {/* Name Fields - Stacked on Mobile */}
//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           <User className="w-4 h-4 inline mr-2" />
//                           First Name
//                         </label>
//                         <input
//                           type="text"
//                           name="firstName"
//                           value={formData.firstName}
//                           onChange={handleInputChange}
//                           placeholder="Enter your first name"
//                           className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
//                           required
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Last Name
//                         </label>
//                         <input
//                           type="text"
//                           name="lastName"
//                           value={formData.lastName}
//                           onChange={handleInputChange}
//                           placeholder="Enter your last name"
//                           className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
//                           required
//                         />
//                       </div>
//                     </div>
                    
//                     {/* Contact Fields - Stacked on Mobile */}
//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           <Mail className="w-4 h-4 inline mr-2" />
//                           Email Address
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           placeholder="Enter your email"
//                           className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
//                           required
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           <Phone className="w-4 h-4 inline mr-2" />
//                           Phone Number
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           placeholder="Enter your phone number"
//                           className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
//                         />
//                       </div>
//                     </div>

//                     {/* Service Selection - Mobile Optimized */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-3">
//                         Which service interests you most?
//                       </label>
//                       <div className="space-y-2">
//                         {[
//                           { value: 'Content Syndication', icon: Target },
//                           { value: 'B2B Data & Intent', icon: Database },
//                           { value: 'Sales Development', icon: Users },
//                           { value: 'All Services', icon: Globe }
//                         ].map((option) => (
//                           <label 
//                             key={option.value} 
//                             className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
//                               formData.description === option.value 
//                                 ? 'border-blue-500 bg-blue-50' 
//                                 : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
//                             }`}
//                           >
//                             <input
//                               type="radio"
//                               name="description"
//                               value={option.value}
//                               checked={formData.description === option.value}
//                               onChange={handleInputChange}
//                               className="sr-only"
//                             />
//                             <option.icon 
//                               className={`w-5 h-5 mr-3 ${
//                                 formData.description === option.value 
//                                   ? 'text-blue-600' 
//                                   : 'text-gray-400'
//                               }`} 
//                             />
//                             <span className={`font-medium text-sm ${
//                               formData.description === option.value 
//                                 ? 'text-blue-800' 
//                                 : 'text-gray-700'
//                             }`}>
//                               {option.value}
//                             </span>
//                           </label>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Message Field */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         <MessageSquare className="w-4 h-4 inline mr-2" />
//                         Additional Details
//                       </label>
//                       <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         rows={3}
//                         placeholder="Tell us about your target audience, industry, or specific requirements..."
//                         className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
//                       />
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white font-bold py-4 px-8 rounded-xl disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
//                       {isSubmitting ? (
//                         <div className="flex items-center justify-center relative z-10">
//                           <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
//                           Submitting Request...
//                         </div>
//                       ) : (
//                         <span className="flex items-center justify-center relative z-10">
//                           Get My Audience Count
//                           <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//                         </span>
//                       )}
//                     </button>
                    
//                     <p className="text-center text-xs text-gray-500 mt-2">
//                       We'll respond within 24 hours with detailed insights
//                     </p>
//                   </form>
//                 </div>
//               </div>

//               {/* Desktop Layout - Side by Side */}
//               <div className="hidden lg:flex h-full min-h-[700px]">
                
//                 {/* Left Side - Desktop Branding Panel */}
//                 <div className="w-2/5 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-12 text-white flex flex-col justify-center relative overflow-hidden">
                  
//                   {/* Desktop Background Elements */}
//                   <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//                     <motion.div 
//                       className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/20 rounded-full blur-3xl"
//                       animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//                       transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//                     />
//                     <motion.div 
//                       className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#4ECDC4]/20 to-[#44A08D]/20 rounded-full blur-2xl"
//                       animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
//                       transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//                     />
//                   </div>

//                   {/* Desktop Content */}
//                   <div className="relative z-10">
//                     <div className="mb-12">
//                       <div className="flex items-center mb-6">
//                         <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-3 rounded-2xl mr-4 shadow-xl">
//                           <Database className="w-8 h-8 text-black" />
//                         </div>
//                         <div>
//                           <h3 className="text-2xl font-bold">ProspectBase</h3>
//                           <p className="text-blue-200 text-sm">B2B Data Intelligence</p>
//                         </div>
//                       </div>
                      
//                       <h2 className="text-5xl font-bold leading-tight mb-4">
//                         Unlock Your <br />
//                         <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
//                           Audience
//                         </span> <br />
//                         Potential
//                       </h2>
                      
//                       <p className="text-blue-100 text-lg leading-relaxed">
//                         Get precise audience counts and insights to accelerate your B2B growth strategy.
//                       </p>
//                     </div>

//                     {/* Desktop Stats */}
//                     <div className="mb-12">
//                       <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//                         <p className="text-blue-200 text-sm mb-4 text-center">Global Database Coverage</p>
//                         <div className="grid grid-cols-3 gap-4">
//                           <div className="text-center">
//                             <div className="text-3xl font-bold text-[#FFD700] mb-1">185M+</div>
//                             <div className="text-xs text-blue-200">B2B Contacts</div>
//                           </div>
//                           <div className="text-center">
//                             <div className="text-3xl font-bold text-[#4ECDC4] mb-1">142</div>
//                             <div className="text-xs text-blue-200">Countries</div>
//                           </div>
//                           <div className="text-center">
//                             <div className="text-3xl font-bold text-[#FF6B6B] mb-1">25M+</div>
//                             <div className="text-xs text-blue-200">Companies</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Desktop Trust Indicators */}
//                     <div className="space-y-4">
//                       <div className="flex items-center space-x-3">
//                         <div className="flex space-x-1">
//                           {[...Array(5)].map((_, i) => (
//                             <Star key={i} className="w-4 h-4 text-[#FFD700] fill-current" />
//                           ))}
//                         </div>
//                         <span className="text-blue-200 text-sm">Trusted by 1000+ companies</span>
//                       </div>
                      
//                       <div className="flex items-center space-x-3">
//                         <Shield className="w-5 h-5 text-[#4ECDC4]" />
//                         <span className="text-blue-200 text-sm">GDPR & CCPA Compliant</span>
//                       </div>
                      
//                       <div className="flex items-center space-x-3">
//                         <Check className="w-5 h-5 text-green-400" />
//                         <span className="text-blue-200 text-sm">Real-time data verification</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Side - Desktop Form Panel */}
//                 <div className="w-3/5 bg-gray-50 p-12 overflow-y-auto">
                  
//                   {/* Desktop Form Header */}
//                   <div className="mb-8">
//                     <h3 className="text-3xl font-bold text-gray-800 mb-2">Request Audience Count</h3>
//                     <p className="text-gray-600">Fill out the form below and we'll provide you with detailed audience insights within 24 hours.</p>
//                   </div>

//                   {/* Desktop Status Messages */}
//                   {submitStatus === 'success' && (
//                     <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-xl">
//                       <div className="flex items-center">
//                         <div className="bg-green-400 rounded-full p-1 mr-3">
//                           <Check className="w-4 h-4 text-white" />
//                         </div>
//                         <div>
//                           <h4 className="text-green-800 font-semibold">Success!</h4>
//                           <p className="text-green-700 text-sm">Your request has been submitted. We'll get back to you soon!</p>
//                         </div>
//                       </div>
//                     </div>
//                   )}
                  
//                   {submitStatus === 'error' && (
//                     <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-xl">
//                       <div className="flex items-center">
//                         <X className="w-5 h-5 text-red-400 mr-3" />
//                         <div>
//                           <h4 className="text-red-800 font-semibold">Error</h4>
//                           <p className="text-red-700 text-sm">There was an error submitting your request. Please try again.</p>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* Desktop Form */}
//                   <form onSubmit={handleSubmit} className="space-y-6">
                    
//                     {/* Desktop Name Fields - Side by Side */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           <User className="w-4 h-4 inline mr-2" />
//                           First Name
//                         </label>
//                         <input
//                           type="text"
//                           name="firstName"
//                           value={formData.firstName}
//                           onChange={handleInputChange}
//                           placeholder="Enter your first name"
//                           className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
//                           required
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Last Name
//                         </label>
//                         <input
//                           type="text"
//                           name="lastName"
//                           value={formData.lastName}
//                           onChange={handleInputChange}
//                           placeholder="Enter your last name"
//                           className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
//                           required
//                         />
//                       </div>
//                     </div>
                    
//                     {/* Desktop Contact Fields - Side by Side */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           <Mail className="w-4 h-4 inline mr-2" />
//                           Email Address
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           placeholder="Enter your email"
//                           className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
//                           required
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           <Phone className="w-4 h-4 inline mr-2" />
//                           Phone Number
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           placeholder="Enter your phone number"
//                           className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
//                         />
//                       </div>
//                     </div>

//                     {/* Desktop Service Selection - Grid Layout */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-4">
//                         Which service interests you most?
//                       </label>
//                       <div className="grid grid-cols-2 gap-3">
//                         {[
//                           { value: 'Content Syndication', icon: Target },
//                           { value: 'B2B Data & Intent', icon: Database },
//                           { value: 'Sales Development', icon: Users },
//                           { value: 'All Services', icon: Globe }
//                         ].map((option) => (
//                           <label 
//                             key={option.value} 
//                             className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
//                               formData.description === option.value 
//                                 ? 'border-blue-500 bg-blue-50' 
//                                 : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
//                             }`}
//                           >
//                             <input
//                               type="radio"
//                               name="description"
//                               value={option.value}
//                               checked={formData.description === option.value}
//                               onChange={handleInputChange}
//                               className="sr-only"
//                             />
//                             <option.icon 
//                               className={`w-5 h-5 mr-3 ${
//                                 formData.description === option.value 
//                                   ? 'text-blue-600' 
//                                   : 'text-gray-400'
//                               }`} 
//                             />
//                             <span className={`font-medium ${
//                               formData.description === option.value 
//                                 ? 'text-blue-800' 
//                                 : 'text-gray-700'
//                             }`}>
//                               {option.value}
//                             </span>
//                           </label>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Desktop Message Field */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         <MessageSquare className="w-4 h-4 inline mr-2" />
//                         Additional Details
//                       </label>
//                       <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         rows={4}
//                         placeholder="Tell us about your target audience, industry, or specific requirements..."
//                         className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
//                       />
//                     </div>

//                     {/* Desktop Submit Button */}
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white font-bold py-4 px-8 rounded-xl disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
//                       {isSubmitting ? (
//                         <div className="flex items-center justify-center relative z-10">
//                           <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
//                           Submitting Request...
//                         </div>
//                       ) : (
//                         <span className="flex items-center justify-center relative z-10">
//                           Get My Audience Count
//                           <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//                         </span>
//                       )}
//                     </button>
                    
//                     <p className="text-center text-sm text-gray-500 mt-3">
//                       We'll respond within 24 hours with detailed insights
//                     </p>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}

//       {/* Benefits Cards */}
//       <div className="w-full bg-gradient-to-br from-[#0E1F1C] via-[#1a2f29] to-[#0E1F1C] py-24 px-6 sm:px-8 md:px-16 lg:px-32">
//         <motion.h2 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
//         >
//           Why choose our <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">B2B solutions?</span>
//         </motion.h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Precision Targeting",
//               content: "Our blend of first-party data intelligence and compliant third-party opt-in data delivers unmatched targeting precision.",
//               icon: Target
//             },
//             {
//               title: "Verified Intent",
//               content: "Focus on prospects who are actively raising their hands for exactly what you offer with deep insights and verified intent.",
//               icon: Users
//             },
//             {
//               title: "Global Intelligence",
//               content: "Accelerate your efforts with trustworthy data and smarter insights from our global B2B data intelligence platform.",
//               icon: Database
//             }
//           ].map((benefit, index) => (
//             <motion.div
//               key={index}
//               initial="offscreen"
//               whileInView="onscreen"
//               viewport={{ once: true, amount: 0.3 }}
//               whileHover={hoverEffect}
//               variants={cardVariants}
//               className="bg-gradient-to-br from-[#FFD800] to-[#FFA500] p-8 rounded-2xl shadow-2xl min-h-[280px] flex flex-col justify-center text-black relative overflow-hidden group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <benefit.icon className="w-14 h-14 mb-6 text-gray-800 relative z-10" />
//               <h3 className="font-bold text-xl mb-4 text-gray-800 relative z-10">
//                 {benefit.title}
//               </h3>
//               <p className="text-gray-700 leading-relaxed relative z-10">{benefit.content}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="min-h-screen w-full flex items-stretch bg-gradient-to-br from-[#0E1F1C] via-[#1a2f29] to-[#0E1F1C]">
//         <div className="w-full flex flex-col md:flex-row">
//           <div className="bg-gradient-to-br from-[#0E1F1C] to-[#1a2f29] md:w-2/5 p-12 flex flex-col items-start justify-center">
//             <motion.h1 
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1 }}
//               className="text-4xl md:text-5xl font-bold text-white leading-tight"
//             >
//               Frequently Asked <br />
//               <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">Questions</span>
//             </motion.h1>
//           </div>

//           <div className="md:w-3/5 p-8 md:p-12">
//             <div className="space-y-6">
//               {faqItems.map((item, index) => (
//                 <motion.div 
//                   key={index} 
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="border-b border-gray-600/50 pb-2"
//                 >
//                   <motion.button
//                     className="flex items-center w-full text-left py-6 focus:outline-none hover:text-[#FFD700] transition-all duration-300 group"
//                     onClick={() => toggleQuestion(index)}
//                     whileHover={{ x: 5 }}
//                   >
//                     <motion.span 
//                       className="text-white flex-shrink-0 mr-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-2 rounded-full"
//                       whileHover={{ rotate: 180 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <Plus
//                         size={20}
//                         className={`text-black transition-transform duration-300 ${
//                           openQuestion === index ? "rotate-45" : ""
//                         }`}
//                       />
//                     </motion.span>
//                     <span className="text-white font-semibold text-lg group-hover:text-[#FFD700] transition-colors duration-300">
//                       {item.question}
//                     </span>
//                   </motion.button>

//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ 
//                       height: openQuestion === index ? "auto" : 0,
//                       opacity: openQuestion === index ? 1 : 0
//                     }}
//                     transition={{ duration: 0.4, ease: "easeInOut" }}
//                     className="overflow-hidden"
//                   >
//                     <div className="pl-16 pb-6 pr-4 text-gray-300 leading-relaxed">
//                       <p>{item.answer}</p>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Final CTA */}
//       <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center relative flex items-center justify-center text-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
//         <Image
//           src="/images/connectus.jpg"
//           alt="Connect with us"
//           fill
//           className="object-cover"
//         />
//         <motion.div
//           initial={{ opacity: 0, y: 80, scale: 0.8 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="text-white flex flex-col items-center relative z-10"
//         >
//           <Link
//             href="/contact"
//             className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold group"
//             passHref
//           >
//             <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Connect</span>
//             <motion.span
//               className="ml-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-45 transition-all duration-500 shadow-2xl"
//               whileHover={{ scale: 1.3, rotate: 45 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <ArrowUpRight className="text-black w-6 h-6 md:w-8 md:h-8" />
//             </motion.span>
//           </Link>
//           <motion.p 
//             className="text-white text-2xl sm:text-3xl md:text-4xl mt-4 font-medium"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             with us
//           </motion.p>
//         </motion.div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default B2BcontentSyndication;





"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, X, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

// Lazily load navigation and footer components for code splitting
const Lownav = dynamic(() => import("../../components/Lownav"), { ssr: false });
const Upnav = dynamic(() => import("../../components/Upnav"), { ssr: false });
const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });

function ContentSyndication() {
  // Smooth scroll behavior (applied globally when component mounts)
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.35, duration: 0.7 },
    },
  };

  const hoverEffect = {
    scale: 1.04,
    boxShadow: "0 16px 40px -10px rgba(0, 0, 0, 0.35)",
    transition: { duration: 0.25, ease: "easeOut" },
  };

  const [openQuestion, setOpenQuestion] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formResult, setFormResult] = useState({ status: null, message: "" });

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqItems = [
    {
      question:
        "What is content syndication and how does it support demand generation?",
      answer:
        "Content syndication distributes your valuable assets (eBooks, reports, webinars) across trusted third-party networks to reach targeted audiences and capture high-quality opt-in leads. This amplifies your top and mid-funnel demand generation efforts while accelerating pipeline creation through precise audience targeting.",
    },
    {
      question:
        "What types of content work best for syndication programs?",
      answer:
        "High-intent, informative assets perform exceptionally well - industry reports, benchmark studies, ROI guides, product comparison sheets, and on-demand webinar recordings. These assets map directly to real research needs and buying stages, making them irresistible to your target audience.",
    },
    {
      question:
        "How do you ensure lead quality in content syndication?",
      answer:
        "We implement rigorous quality controls including firmographic, technographic, and intent filters. Every lead goes through data validation, requires explicit opt-in consent, and passes QA checks including email/phone verification and de-duplication to deliver only qualified, compliant prospects.",
    },
    {
      question:
        "Which KPIs matter most for content syndication performance?",
      answer:
        "Critical KPIs include cost per lead (CPL), lead acceptance rate (LAR), MQL-to-SQL conversion rates, opportunity generation rate, and pipeline/revenue influenced. Monitoring these metrics ensures budget efficiency and demonstrates downstream business impact.",
    },
    {
      question:
        "How do you align content syndication with sales follow-up?",
      answer:
        "We synchronize delivery cadences with sales SLAs, pass structured data fields for rapid lead routing, and provide rich context (asset downloaded, topic interest, persona type) so SDRs can personalize outreach within hours and maintain message continuity throughout the buyer journey.",
    },
    {
      question:
        "How can AI improve content syndication outcomes?",
      answer:
        "AI enhances audience matching precision, predicts optimal asset-topic combinations, flags potentially non-compliant submissions, summarizes content for landing page optimization, and generates personalized follow-up messaging tailored to different personas and buying stages.",
    },
  ];

  // Modal accessibility helpers
  const modalRef = useRef(null);
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setIsFormOpen(false);
    }
    if (isFormOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isFormOpen]);

  const handleOpenForm = (e) => {
    e?.preventDefault?.();
    setFormResult({ status: null, message: "" });
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    if (!isSubmitting) setIsFormOpen(false);
  };

  // Web3Forms submission
  async function onSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setFormResult({ status: null, message: "" });

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setFormResult({
          status: "success",
          message:
            "Thanks! Your request has been received. We'll be in touch shortly.",
        });
        form.reset();
      } else {
        setFormResult({
          status: "error",
          message:
            data.message || "Something went wrong. Please try again later.",
        });
      }
    } catch (err) {
      setFormResult({
        status: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Enhanced responsive form component
  const FormModal = () => {
    return (
      <AnimatePresence>
        {isFormOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[70]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseForm}
              style={{
                background:
                  "radial-gradient(90% 120% at 50% 50%, rgba(17,17,17,0.80) 0%, rgba(0,0,0,0.70) 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='.85'/%3E%3C/svg%3E\")",
                }}
              />
            </motion.div>

            {/* Modal - Enhanced responsive design */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="cs-form-title"
              className="fixed z-[80] inset-0 flex items-center justify-center p-3 sm:p-4 md:p-6"
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
            >
              <div
                className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl h-auto max-h-[95vh] overflow-y-auto rounded-xl sm:rounded-2xl bg-white/95 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.55)] ring-1 ring-black/10"
                onClick={(e) => e.stopPropagation()}
                ref={modalRef}
              >
                {/* Accent top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500" />

                {/* Header - Responsive */}
                <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex items-start justify-between">
                  <div className="flex-1 pr-2">
                    <h2
                      id="cs-form-title"
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight"
                    >
                      Tell us about your <span className="text-[#FFD800]">content syndication</span> goals
                    </h2>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
                      Share a few details and we'll get back within 1 business day.
                    </p>
                  </div>
                  <button
                    aria-label="Close form"
                    onClick={handleCloseForm}
                    className="flex-shrink-0 rounded-full p-1.5 sm:p-2 hover:bg-gray-100 transition"
                    disabled={isSubmitting}
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  </button>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

                {/* Body - Enhanced responsive form */}
                <div className="px-4 sm:px-5 md:px-6 lg:px-7 pb-4 sm:pb-5 md:pb-6 lg:pb-7">
                  {/* Status indicator */}
                  <div className="mb-3 sm:mb-4 flex items-center gap-2 text-xs text-gray-500">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    Typically responds in under 24 hours
                  </div>

                  <form
                    onSubmit={onSubmit}
                    className="space-y-4 sm:space-y-5"
                  >
                    {/* Hidden inputs for Web3Forms */}
                    <input
                      type="hidden"
                      name="access_key"
                      value="e505fedc-14ad-49ed-834f-32cd23ad6136"
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value="New Content Syndication Inquiry"
                    />
                    <input type="hidden" name="from_name" value="Content Syndication Form" />
                    <input type="hidden" name="redirect" value="" />
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                    />

                    {/* Form Grid - Responsive */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                      {/* Name */}
                      <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Alex Johnson"
                          className="w-full rounded-lg sm:rounded-xl border border-gray-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="alex@company.com"
                          className="w-full rounded-lg sm:rounded-xl border border-gray-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all"
                        />
                      </div>

                      {/* Phone */}
                      <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+1 555 123 4567"
                          className="w-full rounded-lg sm:rounded-xl border border-gray-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all"
                        />
                      </div>

                      {/* Company */}
                      <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Inc."
                          className="w-full rounded-lg sm:rounded-xl border border-gray-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all"
                        />
                      </div>

                      {/* Role */}
                      <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                          Role
                        </label>
                        <input
                          type="text"
                          name="role"
                          placeholder="Head of Demand Gen"
                          className="w-full rounded-lg sm:rounded-xl border border-gray-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all"
                        />
                      </div>

                      {/* Monthly Lead Goal */}
                      <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                          Monthly Lead Goal
                        </label>
                        <select
                          name="monthly_lead_goal"
                          className="w-full rounded-lg sm:rounded-xl border border-gray-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select a range
                          </option>
                          <option value="25-100">25-100 leads</option>
                          <option value="101-250">101-250 leads</option>
                          <option value="251-500">251-500 leads</option>
                          <option value="501-1000">501-1,000 leads</option>
                          <option value="1000+">1,000+ leads</option>
                        </select>
                      </div>

                      {/* Content Asset Type */}
                      <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                          Primary Asset Type
                        </label>
                        <select
                          name="asset_type"
                          className="w-full rounded-lg sm:rounded-xl border border-gray-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select asset type
                          </option>
                          <option value="ebook">eBook/Guide</option>
                          <option value="report">Research Report</option>
                          <option value="webinar">Webinar/On-demand</option>
                          <option value="case_study">Case Study</option>
                          <option value="whitepaper">Whitepaper</option>
                          <option value="infographic">Infographic</option>
                        </select>
                      </div>

                      {/* Budget Range */}
                      <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                          Monthly Budget Range
                        </label>
                        <select
                          name="budget_range"
                          className="w-full rounded-lg sm:rounded-xl border border-gray-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select budget
                          </option>
                          <option value="5k-15k">$5K - $15K</option>
                          <option value="15k-30k">$15K - $30K</option>
                          <option value="30k-50k">$30K - $50K</option>
                          <option value="50k+">$50K+</option>
                        </select>
                      </div>
                    </div>

                    {/* Message - Full width */}
                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-1 sm:mb-2">
                        What are your <span className="text-[#FFD800] font-semibold">content syndication goals</span>?
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your targeting criteria (geography, job titles, industries, company size), preferred CPL, compliance requirements, delivery cadence, and current content assets available for syndication."
                        className="w-full rounded-lg sm:rounded-xl border border-gray-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Hidden page context */}
                    <input type="hidden" name="page" value="Content Syndication" />
                    <input
                      type="hidden"
                      name="timestamp"
                      value={new Date().toISOString()}
                    />

                    {/* Result message */}
                    <AnimatePresence>
                      {formResult.status === "success" && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          className="rounded-lg sm:rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
                        >
                          {formResult.message}
                        </motion.div>
                      )}
                      {formResult.status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          className="rounded-lg sm:rounded-xl border border-red-200 bg-red-50 text-red-700 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
                        >
                          {formResult.message}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Actions - Responsive */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                      <p className="text-xs text-gray-500 order-2 sm:order-1">
                        By submitting, you agree to be contacted regarding your request.
                      </p>
                      <motion.button
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD800] text-black font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-full border border-black/10 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.25)] transition disabled:opacity-70 text-sm sm:text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Submit Request
                            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <Head>
        <title>Content Syndication & Demand Generation - Scale Your Pipeline</title>
        <meta
          name="description"
          content="Amplify your reach with targeted content syndication. Capture high-quality opt-in leads, accelerate pipeline growth, and scale demand generation with compliant, precise delivery."
        />
        <meta
          name="keywords"
          content="content syndication, B2B leads, demand generation, opt-in leads, CPL, lead generation, compliance, intent data, technographic, firmographic"
        />
        <link rel="canonical" href="[Your Canonical URL]" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Content Syndication & Demand Generation - Scale Your Pipeline"
        />
        <meta
          property="og:description"
          content="Amplify your reach with targeted content syndication. Capture high-quality opt-in leads, accelerate pipeline growth, and scale demand generation."
        />
        <meta property="og:url" content="[Your Canonical URL]" />
        <meta property="og:image" content="/images/og-content-syndication.jpg" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Content Syndication & Demand Generation - Scale Your Pipeline"
        />
        <meta
          name="twitter:description"
          content="Amplify your reach with targeted content syndication. Capture high-quality opt-in leads and accelerate pipeline growth."
        />
        <meta name="twitter:image" content="/images/twitter-content-syndication.jpg" />
      </Head>

      {/* Page background accent glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute -top-10 right-0 h-72 w-72 rounded-full bg-[#FFD800]/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <Upnav />
      <Lownav />

      {/* Hero Section - Enhanced Responsive */}
      <section
        className="relative w-full min-h-[85vh] sm:min-h-[88vh] mt-20 sm:mt-24 bg-cover bg-center flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 overflow-hidden"
        style={{ backgroundImage: "url('/images/saleshero.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/30 to-black/60" />
        
        {/* Decorative borders */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-left text-white max-w-5xl"
        >
          {/* Badge - Responsive */}
          <div className="flex items-center mb-8 sm:mb-6 mt-15 ">
            <div className="bg-[#FFD800] text-black font-bold text-lg sm:text-xl rounded-xl sm:rounded-2xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mr-2 sm:mr-3 shadow-[0_10px_30px_-10px_rgba(255,216,0,0.7)] ring-1 ring-black/10">
              CS
            </div>
            <span className="text-white/90 text-xl sm:text-2xl font-semibold tracking-wide">
              Content Syndication
            </span>
          </div>

          {/* Headline - Enhanced responsive typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-4 sm:mb-6 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            Content syndication that{" "}
            <span className="text-[#FFD800]">expands reach</span> and fills
            <br className="hidden sm:block" />
            your <span className="text-[#FFD800]">funnel with intent</span>
          </h1>

          {/* CTA Button - Responsive */}
          <button
            onClick={handleOpenForm}
            className="inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-[#FFD800] text-black text-base sm:text-lg font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full shadow-[0_14px_30px_-12px_rgba(255,216,0,0.8)] ring-1 ring-black/10 transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2">
                GET IN TOUCH
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.div>
          </button>
        </motion.div>

        {/* Decorative floating shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -right-16 top-20 h-64 w-64 rounded-full bg-[#FFD800] blur-3xl"
        />
      </section>

      {/* Value Proposition Section - Enhanced Responsive */}
      <section className="w-full bg-[#0B1715] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 relative">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 sm:mb-8 md:mb-10 tracking-tight">
          <span className="text-[#FFD800]">Targeted distribution</span> that amplifies reach,
          <br className="hidden sm:block" />
          and delivers <span className="text-[#FFD800]">compliant, opt-in leads</span>.
        </h2>

        <div className="border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-sm shadow-[0_25px_50px_-12px_rgba(0,0,0,0.55)]">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-14">
            <div className="lg:w-1/2">
              <h3 className="text-[#FFD800] font-bold text-lg sm:text-xl mb-3 sm:mb-4 uppercase tracking-wide">
                Our Solution
              </h3>
              <div className="h-1 w-12 sm:w-16 bg-[#FFD800] rounded" />
            </div>
            <div className="lg:w-1/2 text-base sm:text-lg leading-relaxed text-white/90 space-y-4 sm:space-y-6">
              <p>
                We distribute your most <span className="text-[#FFD800] font-semibold">valuable content</span> across vetted channels and networks, applying precise <span className="text-[#FFD800] font-semibold">firmographic, technographic, and intent filters</span> to reach the right buyers at the right time.
              </p>
              <p>
                Every lead is <span className="text-[#FFD800] font-semibold">opt-in, validated, and delivered with rich context</span>—so marketing scales pipeline contribution while sales accelerates follow-up and conversion rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section - Enhanced Responsive */}
      <section className="w-full bg-[#0B1715] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 text-center relative">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent" />
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFD800] mb-6 sm:mb-8 md:mb-10">
          HOW OUR <span className="text-white">CONTENT SYNDICATION</span> PROCESS WORKS
        </h2>

        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] bg-gradient-to-b from-white/5 to-white/0 p-1 sm:p-2">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
              <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 rounded-xl sm:rounded-2xl" />
              <Image
                src="/images/work2.webp"
                alt="Content Syndication Workflow"
                width={1600}
                height={1000}
                className="w-full h-auto object-contain"
                priority={false}
              />
            </div>
          </div>
          <p className="text-white/70 text-xs sm:text-sm mt-3 sm:mt-4 px-4">
            A comprehensive view of <span className="text-[#FFD800] font-medium">targeting, distribution, validation, delivery, and follow-up enablement</span>.
          </p>
        </div>
      </section>

      {/* Strategic Placement Section - Enhanced Responsive */}
      <section className="w-full overflow-hidden">
        <div className="bg-[url('/images/bg2.webp')] bg-[#0E1F1C] bg-cover bg-center w-full text-black pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-28 md:pb-36 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 2xl:px-60 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 sm:mb-6 drop-shadow"
            >
              <span className="text-[#FFD800]">Precision targeting</span> and compliant lead delivery,
              <br className="hidden sm:block" /> tailored to your <span className="text-[#FFD800]">ICP</span>.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-col lg:flex-row gap-4 items-start mb-6 sm:mb-8 p-4 sm:p-6 bg-white/60 rounded-xl sm:rounded-2xl backdrop-blur shadow-[0_16px_40px_-12px_rgba(0,0,0,0.2)] border border-black/5"
            >
              <p className="text-base sm:text-lg lg:w-1/3 text-black font-semibold">
                Our Services
              </p>
              <p className="text-base sm:text-lg lg:w-2/3 text-black/80">
                We plan, execute, and optimize <span className="text-[#FFD800] font-bold">end-to-end content syndication</span>—from audience filters and offer mapping to delivery QA and sales enablement—so marketing scales influence while{" "}
                <span className="text-[#FFD800] font-bold">pipeline keeps growing</span>.
              </p>
            </motion.div>

            {/* Service Cards - Enhanced Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10 text-black">
              {[
                {
                  title: "Audience & Filters:",
                  content:
                    "Align to ICP with precise firmographic, technographic, and intent criteria to reach actively researching, in-market buyers.",
                },
                {
                  title: "Multi-Channel Distribution:",
                  content:
                    "Syndicate high-value assets across vetted publishers, industry communities, and trusted networks with brand-safe placement guarantees.",
                },
                {
                  title: "Lead QA & Compliance:",
                  content:
                    "Rigorous opt-in capture, comprehensive de-duplication, email/phone verification, and consent-friendly delivery aligned to your SLAs.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.4 }}
                  whileHover={hoverEffect}
                  variants={cardVariants}
                  className="relative bg-[#FFEE7A] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-[0_18px_40px_-16px_rgba(0,0,0,0.35)] border border-black/10 overflow-hidden"
                >
                  <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-yellow-300 blur-2xl opacity-70" />
                  <div className="relative">
                    <h2 className="font-extrabold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-gray-800 leading-relaxed text-sm sm:text-base">{service.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA - Responsive */}
            <div className="mt-12 sm:mt-16 flex justify-center lg:justify-start">
              <motion.button
                onClick={handleOpenForm}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffea00",
                  boxShadow: "0 20px 45px -18px rgba(0,0,0,0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#ffd800] text-black font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 text-base sm:text-lg shadow-[0_14px_30px_-12px_rgba(0,0,0,0.35)] border border-black/10"
              >
                CONNECT FOR CONTENT SYNDICATION →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Enhanced Responsive */}
      <section className="min-h-screen w-full flex items-stretch bg-[#0E1F1C] relative">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" />
        <div className="w-full flex flex-col lg:flex-row">
          {/* Left Side - Title - Responsive */}
          <div className="bg-[#0E1F1C] lg:w-2/5 p-6 sm:p-8 md:p-10 flex flex-col items-start">
            <div className="lg:sticky lg:top-28">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Content Syndication <span className="text-[#FFD800]">FAQs</span>
              </h1>
              <div className="mt-3 sm:mt-4 h-1 w-16 sm:w-20 bg-[#FFD800] rounded" />
              <p className="mt-3 sm:mt-4 text-white/60 text-sm sm:text-base">
                Everything you need to know about planning, distributing, validating, and converting through content syndication.
              </p>
            </div>
          </div>

          {/* Right Side - FAQ Content - Responsive */}
          <div className="lg:w-3/5 p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="space-y-3 sm:space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openQuestion === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
                  >
                    <button
                      className="flex items-start w-full text-left py-3 sm:py-4 px-3 sm:px-4 focus:outline-none group"
                      onClick={() => toggleQuestion(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <span className="text-white flex-shrink-0 mr-2 sm:mr-3 mt-0.5">
                        <Plus
                          size={18}
                          className={
                            isOpen
                              ? "rotate-45 transition-transform"
                              : "transition-transform"
                          }
                        />
                      </span>
                      <span className="text-white font-medium group-hover:text-yellow-200 transition-colors text-sm sm:text-base leading-relaxed">
                        {item.question}
                      </span>
                    </button>

                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="px-3 sm:px-4"
                    >
                      {isOpen && (
                        <div className="pb-4 sm:pb-5 pt-1 pr-2 text-gray-300">
                          <p className="leading-relaxed text-sm sm:text-base">{item.answer}</p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced Responsive */}
      <section
        className="w-full min-h-[280px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[520px] bg-cover bg-center relative flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/connectus.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white flex flex-col items-center px-4"
        >
          <button
            onClick={handleOpenForm}
            className="flex items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold group"
          >
            <span className="text-yellow-400 drop-shadow">Connect</span>
            <motion.span
              className="ml-2 sm:ml-3 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition duration-300 ring-1 ring-black/10 shadow-[0_16px_40px_-16px_rgba(255,216,0,0.7)]"
              whileHover={{ scale: 1.15, rotate: 45 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight className="text-black w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.span>
          </button>
          <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 sm:mt-2 font-medium">
            with us
          </p>
        </motion.div>

        {/* Framed edge */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-none" />
      </section>

      <Footer />

      {/* Modal mount point */}
      <FormModal />
    </>
  );
}

export default ContentSyndication;
