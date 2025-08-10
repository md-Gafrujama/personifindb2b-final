
// "use client";
// import { motion } from "framer-motion";
// import { ArrowUpRight, Plus, Upload, Target, Users, Database, X, Globe, Zap, Shield } from "lucide-react";
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
//       const response = await fetch('https://api.web3forms.io/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           access_key: 'a8fe8c95-167c-41a6-bd53-987b128dff69',
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
                  
//                   {/* Enhanced Overlay Content */}
//                   <div className="absolute bottom-8 left-8 right-8">
//                     <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-6 border border-[#FFD700]/30">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <h5 className="text-white font-bold text-2xl mb-2">Data Intelligence Platform</h5>
//                           <p className="text-gray-200 text-lg">
//                             Transform your data into actionable insights with our advanced analytics platform.
//                           </p>
//                         </div>
//                         <div className="flex space-x-2">
//                           <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                           <span className="text-green-400 font-semibold">Live</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
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

//       {/* Modal for Request Audience Count */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8, y: 50 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.8, y: 50 }}
//             transition={{ type: "spring", damping: 25, stiffness: 300 }}
//             className="bg-gradient-to-br from-[#4C1D95] via-[#5B21B6] to-[#6D28D9] rounded-3xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden"
//           >
//             <div className="flex flex-col lg:flex-row h-full">
//               {/* Left Side - Information Panel */}
//               <div className="lg:w-2/5 bg-gradient-to-br from-[#4C1D95] to-[#6D28D9] p-8 lg:p-12 text-white flex flex-col justify-center">
//                 <button 
//                   onClick={() => setShowModal(false)}
//                   className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-10 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-200"
//                 >
//                   <X size={24} />
//                 </button>
                
//                 <div className="mb-8">
//                   <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
//                     Start generating <br />
//                     <span className="text-[#FFD800]">leads...</span>
//                   </h2>
//                   <p className="text-lg text-purple-200 mb-8">
//                     Get in touch to see how ProspectBase can help accelerate your pipeline.
//                   </p>
//                 </div>

//                 {/* Stats Section */}
//                 <div className="space-y-6">
//                   <div className="text-center">
//                     <p className="text-purple-200 mb-4">An extensive database</p>
//                     <div className="flex justify-between items-center">
//                       <div className="text-center">
//                         <div className="text-3xl lg:text-4xl font-bold text-[#FF6B6B]">185M+</div>
//                         <div className="text-sm text-purple-200">Contacts</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-3xl lg:text-4xl font-bold text-[#FFD800]">142</div>
//                         <div className="text-sm text-purple-200">Countries</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-3xl lg:text-4xl font-bold text-[#4ECDC4]">25M</div>
//                         <div className="text-sm text-purple-200">Accounts</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Trusted Companies */}
//                 <div className="mt-8">
//                   <p className="text-purple-200 text-sm mb-4">Trusted by the world's leading companies</p>
//                   <div className="grid grid-cols-3 gap-4 opacity-70">
//                     <div className="bg-white/10 rounded-lg p-3 text-center">
//                       <div className="text-xs text-white">ProofPoint</div>
//                     </div>
//                     <div className="bg-white/10 rounded-lg p-3 text-center">
//                       <div className="text-xs text-white">DocuSign</div>
//                     </div>
//                     <div className="bg-white/10 rounded-lg p-3 text-center">
//                       <div className="text-xs text-white">Indeed</div>
//                     </div>
//                     <div className="bg-white/10 rounded-lg p-3 text-center">
//                       <div className="text-xs text-white">Zendesk</div>
//                     </div>
//                     <div className="bg-white/10 rounded-lg p-3 text-center">
//                       <div className="text-xs text-white">HP</div>
//                     </div>
//                     <div className="bg-white/10 rounded-lg p-3 text-center">
//                       <div className="text-xs text-white">Paloalto</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Side - Form Panel */}
//               <div className="lg:w-3/5 bg-white p-8 lg:p-12 overflow-y-auto">
//                 {submitStatus === 'success' && (
//                   <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl">
//                     <div className="flex items-center">
//                       <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
//                         <span className="text-white text-sm">✓</span>
//                       </div>
//                       Thank you! Your request has been submitted successfully.
//                     </div>
//                   </div>
//                 )}
                
//                 {submitStatus === 'error' && (
//                   <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">
//                     There was an error submitting your request. Please try again.
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* Name Fields */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-600 mb-2">
//                         First name
//                       </label>
//                       <input
//                         type="text"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleInputChange}
//                         placeholder="First Name"
//                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-600 mb-2">
//                         Last name
//                       </label>
//                       <input
//                         type="text"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleInputChange}
//                         placeholder="Last Name"
//                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900"
//                         required
//                       />
//                     </div>
//                   </div>
                  
//                   {/* Contact Fields */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-600 mb-2">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         placeholder="Email"
//                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-600 mb-2">
//                         Phone number
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         placeholder="Phone number"
//                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900"
//                       />
//                     </div>
//                   </div>

//                   {/* Description Options */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600 mb-4">
//                       Which best describes you?
//                     </label>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                       {['ABM Content Syndication', 'B2B Data & Intent', 'ABM Advertising', 'ABM Acceleration'].map((option) => (
//                         <label key={option} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
//                           <input
//                             type="radio"
//                             name="description"
//                             value={option}
//                             checked={formData.description === option}
//                             onChange={handleInputChange}
//                             className="mr-3 text-purple-600 focus:ring-purple-500"
//                           />
//                           <span className="text-sm text-gray-700 font-medium">{option}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Message Field */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600 mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       rows={4}
//                       placeholder="Type your message..."
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 resize-none"
//                     />
//                   </div>

//                   {/* Submit Button */}
//                   <motion.button
//                     type="submit"
//                     disabled={isSubmitting}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white font-bold py-4 px-8 rounded-xl disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl"
//                   >
//                     {isSubmitting ? (
//                       <div className="flex items-center justify-center">
//                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
//                         Submitting...
//                       </div>
//                     ) : (
//                       'Submit'
//                     )}
//                   </motion.button>
//                 </form>
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
//       const response = await fetch('https://api.web3forms.io/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           access_key: 'a8fe8c95-167c-41a6-bd53-987b128dff69',
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
                  
//                   {/* Enhanced Overlay Content */}
                 
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

//       {/* Enhanced Modal for Request Audience Count */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.7, y: 100 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.7, y: 100 }}
//             transition={{ type: "spring", damping: 20, stiffness: 300 }}
//             className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden relative"
//           >
//             {/* Close Button */}
//             <motion.button 
//               onClick={() => setShowModal(false)}
//               whileHover={{ scale: 1.1, rotate: 90 }}
//               whileTap={{ scale: 0.9 }}
//               className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-gray-100 hover:bg-gray-200 p-2 sm:p-3 rounded-full transition-all duration-200 shadow-lg"
//             >
//               <X size={20} className="text-gray-600" />
//             </motion.button>

//             {/* Main Content Container */}
//             <div className="flex flex-col lg:flex-row min-h-[600px] lg:h-[700px]">
              
//               {/* Left Side - Enhanced Branding Panel */}
//               <div className="lg:w-2/5 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-6 sm:p-8 lg:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                
//                 {/* Animated Background Elements */}
//                 <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//                   <motion.div 
//                     className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/20 rounded-full blur-3xl"
//                     animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//                   />
//                   <motion.div 
//                     className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#4ECDC4]/20 to-[#44A08D]/20 rounded-full blur-2xl"
//                     animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
//                     transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10">
//                   {/* Logo/Brand Section */}
//                   <motion.div 
//                     className="mb-8 lg:mb-12"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                   >
//                     <div className="flex items-center mb-6">
//                       <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-3 rounded-2xl mr-4 shadow-xl">
//                         <Database className="w-8 h-8 text-black" />
//                       </div>
//                       <div>
//                         <h3 className="text-2xl font-bold">ProspectBase</h3>
//                         <p className="text-blue-200 text-sm">B2B Data Intelligence</p>
//                       </div>
//                     </div>
                    
//                     <motion.h2 
//                       className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.4 }}
//                     >
//                       Unlock Your <br />
//                       <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
//                         Audience
//                       </span> <br />
//                       Potential
//                     </motion.h2>
                    
//                     <motion.p 
//                       className="text-blue-100 text-lg mt-4 leading-relaxed"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.6 }}
//                     >
//                       Get precise audience counts and insights to accelerate your B2B growth strategy.
//                     </motion.p>
//                   </motion.div>

//                   {/* Enhanced Stats Section */}
//                   <motion.div 
//                     className="mb-8 lg:mb-12"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.8 }}
//                   >
//                     <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//                       <p className="text-blue-200 text-sm mb-4 text-center">Global Database Coverage</p>
//                       <div className="grid grid-cols-3 gap-4">
//                         <motion.div 
//                           className="text-center"
//                           whileHover={{ scale: 1.05 }}
//                         >
//                           <div className="text-2xl lg:text-3xl font-bold text-[#FFD700] mb-1">185M+</div>
//                           <div className="text-xs text-blue-200">B2B Contacts</div>
//                         </motion.div>
//                         <motion.div 
//                           className="text-center"
//                           whileHover={{ scale: 1.05 }}
//                         >
//                           <div className="text-2xl lg:text-3xl font-bold text-[#4ECDC4] mb-1">142</div>
//                           <div className="text-xs text-blue-200">Countries</div>
//                         </motion.div>
//                         <motion.div 
//                           className="text-center"
//                           whileHover={{ scale: 1.05 }}
//                         >
//                           <div className="text-2xl lg:text-3xl font-bold text-[#FF6B6B] mb-1">25M+</div>
//                           <div className="text-xs text-blue-200">Companies</div>
//                         </motion.div>
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Trust Indicators */}
//                   <motion.div 
//                     className="space-y-4"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1 }}
//                   >
//                     <div className="flex items-center space-x-3">
//                       <div className="flex space-x-1">
//                         {[...Array(5)].map((_, i) => (
//                           <Star key={i} className="w-4 h-4 text-[#FFD700] fill-current" />
//                         ))}
//                       </div>
//                       <span className="text-blue-200 text-sm">Trusted by 1000+ companies</span>
//                     </div>
                    
//                     <div className="flex items-center space-x-3">
//                       <Shield className="w-5 h-5 text-[#4ECDC4]" />
//                       <span className="text-blue-200 text-sm">GDPR & CCPA Compliant</span>
//                     </div>
                    
//                     <div className="flex items-center space-x-3">
//                       <Check className="w-5 h-5 text-green-400" />
//                       <span className="text-blue-200 text-sm">Real-time data verification</span>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>

//               {/* Right Side - Enhanced Form Panel */}
//               <div className="lg:w-3/5 bg-gray-50 p-6 sm:p-8 lg:p-12 overflow-y-auto">
                
//                 {/* Form Header */}
//                 <motion.div 
//                   className="mb-8"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
//                     Request Audience Count
//                   </h3>
//                   <p className="text-gray-600">
//                     Fill out the form below and we'll provide you with detailed audience insights within 24 hours.
//                   </p>
//                 </motion.div>

//                 {/* Status Messages */}
//                 {submitStatus === 'success' && (
//                   <motion.div 
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-xl"
//                   >
//                     <div className="flex items-center">
//                       <div className="bg-green-400 rounded-full p-1 mr-3">
//                         <Check className="w-4 h-4 text-white" />
//                       </div>
//                       <div>
//                         <h4 className="text-green-800 font-semibold">Success!</h4>
//                         <p className="text-green-700 text-sm">Your request has been submitted. We'll get back to you soon!</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
                
//                 {submitStatus === 'error' && (
//                   <motion.div 
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-xl"
//                   >
//                     <div className="flex items-center">
//                       <X className="w-5 h-5 text-red-400 mr-3" />
//                       <div>
//                         <h4 className="text-red-800 font-semibold">Error</h4>
//                         <p className="text-red-700 text-sm">There was an error submitting your request. Please try again.</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}

//                 {/* Enhanced Form */}
//                 <form onSubmit={handleSubmit} className="space-y-6">
                  
//                   {/* Name Fields */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <motion.div
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.4 }}
//                     >
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         <User className="w-4 h-4 inline mr-2" />
//                         First Name
//                       </label>
//                       <input
//                         type="text"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleInputChange}
//                         placeholder="Enter your first name"
//                         className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
//                         required
//                       />
//                     </motion.div>
                    
//                     <motion.div
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.5 }}
//                     >
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Last Name
//                       </label>
//                       <input
//                         type="text"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleInputChange}
//                         placeholder="Enter your last name"
//                         className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
//                         required
//                       />
//                     </motion.div>
//                   </div>
                  
//                   {/* Contact Fields */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <motion.div
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.6 }}
//                     >
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         <Mail className="w-4 h-4 inline mr-2" />
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         placeholder="Enter your email"
//                         className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
//                         required
//                       />
//                     </motion.div>
                    
//                     <motion.div
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.7 }}
//                     >
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         <Phone className="w-4 h-4 inline mr-2" />
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         placeholder="Enter your phone number"
//                         className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
//                       />
//                     </motion.div>
//                   </div>

//                   {/* Service Selection */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.8 }}
//                   >
//                     <label className="block text-sm font-semibold text-gray-700 mb-4">
//                       Which service interests you most?
//                     </label>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       {[
//                         { value: 'Content Syndication', icon: Target, color: 'blue' },
//                         { value: 'B2B Data & Intent', icon: Database, color: 'green' },
//                         { value: 'Sales Development', icon: Users, color: 'purple' },
//                         { value: 'All Services', icon: Globe, color: 'orange' }
//                       ].map((option) => (
//                         <motion.label 
//                           key={option.value} 
//                           className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
//                             formData.description === option.value 
//                               ? `border-${option.color}-500 bg-${option.color}-50` 
//                               : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
//                           }`}
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                         >
//                           <input
//                             type="radio"
//                             name="description"
//                             value={option.value}
//                             checked={formData.description === option.value}
//                             onChange={handleInputChange}
//                             className="sr-only"
//                           />
//                           <option.icon 
//                             className={`w-5 h-5 mr-3 ${
//                               formData.description === option.value 
//                                 ? `text-${option.color}-600` 
//                                 : 'text-gray-400'
//                             }`} 
//                           />
//                           <span className={`font-medium ${
//                             formData.description === option.value 
//                               ? `text-${option.color}-800` 
//                               : 'text-gray-700'
//                           }`}>
//                             {option.value}
//                           </span>
//                         </motion.label>
//                       ))}
//                     </div>
//                   </motion.div>

//                   {/* Message Field */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.9 }}
//                   >
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       <MessageSquare className="w-4 h-4 inline mr-2" />
//                       Additional Details
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       rows={4}
//                       placeholder="Tell us about your target audience, industry, or specific requirements..."
//                       className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
//                     />
//                   </motion.div>

//                   {/* Submit Button */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1 }}
//                   >
//                     <motion.button
//                       type="submit"
//                       disabled={isSubmitting}
//                       whileHover={{ scale: 1.02, y: -2 }}
//                       whileTap={{ scale: 0.98 }}
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
//                     </motion.button>
                    
//                     <p className="text-center text-sm text-gray-500 mt-3">
//                       We'll respond within 24 hours with detailed insights
//                     </p>
//                   </motion.div>
//                 </form>
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
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Upload, Target, Users, Database, X, Globe, Zap, Shield, Star, Check, Mail, Phone, MessageSquare, User } from "lucide-react";
import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

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

function B2BcontentSyndication() {
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
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.io/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'a8fe8c95-167c-41a6-bd53-987b128dff69',
          ...formData
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          description: '',
          message: ''
        });
        setTimeout(() => {
          setShowModal(false);
          setSubmitStatus('');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Hero Section */}
      <div className="relative w-full min-h-screen mt-24 bg-cover bg-center flex items-center justify-start px-6 sm:px-8 md:px-16 lg:px-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0" />
        <Image
          src="/images/syndication.jpg"
          alt="B2B Solutions for Growth"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="text-left text-white max-w-4xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center mb-8"
          >
            <motion.div 
              className="bg-gradient-to-r from-[#FFD800] to-[#FFA500] text-black font-bold text-xl rounded-full w-16 h-16 flex items-center justify-center mr-4 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              B2B
            </motion.div>
            <span className="text-white text-3xl font-bold tracking-wide">Solutions</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          >
            Drive growth with <br />
            precision-targeted <br />
            <motion.span 
              className="text-[#FFD800] bg-gradient-to-r from-[#FFD800] to-[#FFA500] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              B2B solutions.
            </motion.span>
          </motion.h1>
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#FFD800] to-[#FFA500] text-black text-lg font-bold py-4 px-10 rounded-full shadow-2xl transition-all duration-300 hover:shadow-[#FFD800]/50"
          >
            GET STARTED TODAY
          </motion.button>
        </div>
      </div>

      {/* Solutions Overview */}
      <div className="w-full bg-gradient-to-br from-[#0E1F1C] via-[#1a2f29] to-[#0E1F1C] text-white py-24 px-6 sm:px-8 md:px-16 lg:px-32">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-16 text-center"
        >
          Three powerful solutions to <br />
          <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
            accelerate your growth.
          </span>
        </motion.h2>

        {/* Solution 1: Content Syndication */}
        <motion.section 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-24 border-b border-gray-600/50 pb-24"
        >
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <motion.div 
                className="flex items-center mb-8"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-3 rounded-full mr-4 shadow-lg">
                  <Target className="text-black w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#FFD700]">Content Syndication</h3>
              </motion.div>
              <p className="text-xl font-semibold mb-6 text-gray-300">
                Drive stronger interest and faster growth for your products and services.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50"
                >
                  <h4 className="text-[#FFD700] font-bold text-lg mb-4">OUR SOLUTION</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Do more with your content than just share it. We align your content with our already 
                    engaged audiences, distributing assets your ideal customers actually want to consume.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our blend of first-party data intelligence and compliant third-party opt-in data gives us the unique 
                    ability to uncover deeper insights and target with a level of precision few can match.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50"
                >
                  <h4 className="text-[#FFD700] font-bold text-lg mb-4">OUR SERVICES</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We take care of everything- from building your audience to placing and distributing 
                    your content, managing campaigns, and ensuring quality at every step. That means you can focus on 
                    closing deals while we help you generate more revenue from content syndication, with less time and 
                    effort on your part.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Solution 2: Sales Development */}
        <motion.section 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-24 border-b border-gray-600/50 pb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 p-2"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="/images/work1.webp"
                      alt="Sales Development Team"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </motion.div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full opacity-10 blur-2xl"></div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="flex items-center mb-8"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-4 rounded-full mr-4 shadow-lg">
                  <Users className="text-black w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-[#FFD700]">Sales Development</h3>
              </motion.div>
              
              <p className="text-xl font-semibold mb-8 text-gray-300 leading-relaxed">
                Fuel meaningful growth and build a pipeline that converts.
              </p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 p-6 rounded-xl backdrop-blur-sm border border-[#FFD700]/20"
                >
                  <h4 className="text-[#FFD700] font-bold text-lg mb-3 flex items-center">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full mr-3"></div>
                    OUR SOLUTION
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    We focus on prospects who are actively raising their hands for exactly what you offer. 
                    Our global team engages them through personalized outreach, ensuring a seamless and professional 
                    experience with deep insights and verified intent.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 p-6 rounded-xl backdrop-blur-sm border border-[#FFD700]/20"
                >
                  <h4 className="text-[#FFD700] font-bold text-lg mb-3 flex items-center">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full mr-3"></div>
                    OUR SERVICES
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    We align with your team to understand your offerings and ideal customers, zeroing in 
                    on engaged accounts to deliver qualified opportunities from confirmed buyers.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Solution 3: B2B Data & Intent - ENHANCED WITH CONTENT ABOVE, IMAGE BELOW */}
        <motion.section 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-20"
        >
          {/* Header Section with Enhanced Styling */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center mb-10 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/30 to-[#FFA500]/30 rounded-full blur-xl scale-150"></div>
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-6 rounded-full mr-6 shadow-2xl relative z-10">
                <Database className="text-black w-12 h-12" />
              </div>
              <h3 className="text-5xl md:text-6xl font-bold text-[#FFD700] relative z-10">B2B Data & Intent</h3>
            </motion.div>
            
            <motion.p 
              className="text-3xl font-semibold text-gray-300 leading-relaxed max-w-5xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Global B2B Data Intelligence Platform
            </motion.p>
            
            <motion.p 
              className="text-xl text-gray-400 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Accelerate your sales and marketing efforts with trustworthy data and smarter insights that deliver measurable results.
            </motion.p>
          </motion.div>

          {/* Enhanced Content Section */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              {/* Left Column - Solution */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-gray-800/60 via-gray-900/80 to-gray-800/60 p-10 rounded-2xl backdrop-blur-sm border border-[#FFD700]/30 shadow-2xl relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h4 className="text-[#FFD700] font-bold text-2xl mb-8 flex items-center relative z-10">
                    <div className="w-4 h-4 bg-[#FFD700] rounded-full mr-4 animate-pulse"></div>
                    OUR SOLUTION
                  </h4>
                  
                  <p className="text-gray-300 mb-10 leading-relaxed text-lg relative z-10">
                    Our comprehensive B2B data intelligence platform provides you with the insights needed to identify, 
                    target, and engage your ideal prospects with precision. Transform your marketing campaigns with 
                    data-driven intelligence that delivers measurable results.
                  </p>
                  
                  {/* Enhanced Feature Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-10 relative z-10">
                    <motion.div 
                      className="flex items-center space-x-3 bg-gray-800/40 p-4 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
                      <span className="text-gray-300 font-semibold">185M+ Contacts</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3 bg-gray-800/40 p-4 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
                      <span className="text-gray-300 font-semibold">142 Countries</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3 bg-gray-800/40 p-4 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
                      <span className="text-gray-300 font-semibold">25M+ Accounts</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3 bg-gray-800/40 p-4 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
                      <span className="text-gray-300 font-semibold">Real-time Intent</span>
                    </motion.div>
                  </div>

                  <motion.button
                    onClick={() => setShowModal(true)}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -3,
                      boxShadow: "0 25px 60px -10px rgba(255, 216, 0, 0.6)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#FFD800] to-[#FFA500] text-black font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-2xl text-lg w-full relative z-10 group"
                  >
                    <span className="flex items-center justify-center">
                      Request Audience Count
                      <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right Column - Benefits */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-gray-800/60 via-gray-900/80 to-gray-800/60 p-10 rounded-2xl backdrop-blur-sm border border-[#FFD700]/30 shadow-2xl relative overflow-hidden group h-full"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h4 className="text-[#FFD700] font-bold text-2xl mb-8 flex items-center relative z-10">
                    <div className="w-4 h-4 bg-[#FFD700] rounded-full mr-4 animate-pulse"></div>
                    KEY BENEFITS
                  </h4>
                  
                  <ul className="space-y-6 text-gray-300 relative z-10">
                    <motion.li 
                      className="flex items-start bg-gray-800/30 p-4 rounded-xl"
                      whileHover={{ x: 5 }}
                    >
                      <Shield className="w-6 h-6 text-[#FFD700] mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg">Enhanced targeting precision with first-party and compliant third-party data</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start bg-gray-800/30 p-4 rounded-xl"
                      whileHover={{ x: 5 }}
                    >
                      <Zap className="w-6 h-6 text-[#FFD700] mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg">Real-time intent signals to identify in-market prospects</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start bg-gray-800/30 p-4 rounded-xl"
                      whileHover={{ x: 5 }}
                    >
                      <Globe className="w-6 h-6 text-[#FFD700] mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg">Global coverage with local market insights</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start bg-gray-800/30 p-4 rounded-xl"
                      whileHover={{ x: 5 }}
                    >
                      <Database className="w-6 h-6 text-[#FFD700] mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg">Seamless integration with your existing tech stack</span>
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Image Section Below Content - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 p-3"
              >
                <div className="relative aspect-[19/10] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/work2.webp"
                    alt="B2B Data Intelligence Dashboard"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </motion.div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full opacity-20 blur-2xl"></div>
              
              {/* Floating Data Points */}
              <motion.div 
                className="absolute -top-6 right-20 bg-[#FFD700] text-black px-4 py-2 rounded-full text-sm font-bold shadow-xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                185M+ Contacts
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -left-8 bg-[#FFA500] text-black px-4 py-2 rounded-full text-sm font-bold shadow-xl"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                142 Countries
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/4 -right-6 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-4 py-2 rounded-full text-sm font-bold shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                Real-time Intent
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>

      {/* FULLY RESPONSIVE MODAL - COMPLETELY REDESIGNED */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-2 sm:p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowModal(false);
            }
          }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[98vh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed Position */}
            <motion.button 
              onClick={() => setShowModal(false)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 bg-gray-100/90 hover:bg-gray-200/90 backdrop-blur-sm p-2 rounded-full transition-all duration-200 shadow-lg"
            >
              <X size={18} className="text-gray-600" />
            </motion.button>

            {/* Scrollable Container */}
            <div className="h-full max-h-[98vh] overflow-y-auto">
              
              {/* Mobile-First Layout */}
              <div className="block lg:hidden">
                {/* Mobile Header */}
                <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-6 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-2 rounded-xl mr-3 shadow-xl">
                        <Database className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">ProspectBase</h3>
                        <p className="text-blue-200 text-xs">B2B Data Intelligence</p>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold leading-tight mb-3">
                      Unlock Your <br />
                      <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
                        Audience
                      </span> <br />
                      Potential
                    </h2>
                    
                    <p className="text-blue-100 text-sm leading-relaxed mb-4">
                      Get precise audience counts and insights to accelerate your B2B growth strategy.
                    </p>
                    
                    {/* Mobile Stats */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <p className="text-blue-200 text-xs mb-3 text-center">Global Database Coverage</p>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#FFD700] mb-1">185M+</div>
                          <div className="text-xs text-blue-200">B2B Contacts</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#4ECDC4] mb-1">142</div>
                          <div className="text-xs text-blue-200">Countries</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#FF6B6B] mb-1">25M+</div>
                          <div className="text-xs text-blue-200">Companies</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Background Elements */}
                  <div className="absolute -top-5 -left-5 w-20 h-20 bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-gradient-to-br from-[#4ECDC4]/20 to-[#44A08D]/20 rounded-full blur-xl"></div>
                </div>
                
                {/* Mobile Form */}
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Request Audience Count</h3>
                    <p className="text-gray-600 text-sm">Fill out the form below and we'll provide you with detailed audience insights within 24 hours.</p>
                  </div>
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-400 rounded-r-xl">
                      <div className="flex items-center">
                        <div className="bg-green-400 rounded-full p-1 mr-2">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <h4 className="text-green-800 font-semibold text-sm">Success!</h4>
                          <p className="text-green-700 text-xs">Your request has been submitted. We'll get back to you soon!</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-400 rounded-r-xl">
                      <div className="flex items-center">
                        <X className="w-4 h-4 text-red-400 mr-2" />
                        <div>
                          <h4 className="text-red-800 font-semibold text-sm">Error</h4>
                          <p className="text-red-700 text-xs">There was an error submitting your request. Please try again.</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Mobile Form Fields */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Fields - Stacked on Mobile */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Contact Fields - Stacked on Mobile */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                        />
                      </div>
                    </div>

                    {/* Service Selection - Mobile Optimized */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Which service interests you most?
                      </label>
                      <div className="space-y-2">
                        {[
                          { value: 'Content Syndication', icon: Target },
                          { value: 'B2B Data & Intent', icon: Database },
                          { value: 'Sales Development', icon: Users },
                          { value: 'All Services', icon: Globe }
                        ].map((option) => (
                          <label 
                            key={option.value} 
                            className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                              formData.description === option.value 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="description"
                              value={option.value}
                              checked={formData.description === option.value}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <option.icon 
                              className={`w-5 h-5 mr-3 ${
                                formData.description === option.value 
                                  ? 'text-blue-600' 
                                  : 'text-gray-400'
                              }`} 
                            />
                            <span className={`font-medium text-sm ${
                              formData.description === option.value 
                                ? 'text-blue-800' 
                                : 'text-gray-700'
                            }`}>
                              {option.value}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Tell us about your target audience, industry, or specific requirements..."
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white font-bold py-4 px-8 rounded-xl disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {isSubmitting ? (
                        <div className="flex items-center justify-center relative z-10">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Submitting Request...
                        </div>
                      ) : (
                        <span className="flex items-center justify-center relative z-10">
                          Get My Audience Count
                          <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </span>
                      )}
                    </button>
                    
                    <p className="text-center text-xs text-gray-500 mt-2">
                      We'll respond within 24 hours with detailed insights
                    </p>
                  </form>
                </div>
              </div>

              {/* Desktop Layout - Side by Side */}
              <div className="hidden lg:flex h-full min-h-[700px]">
                
                {/* Left Side - Desktop Branding Panel */}
                <div className="w-2/5 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-12 text-white flex flex-col justify-center relative overflow-hidden">
                  
                  {/* Desktop Background Elements */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <motion.div 
                      className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/20 rounded-full blur-3xl"
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div 
                      className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#4ECDC4]/20 to-[#44A08D]/20 rounded-full blur-2xl"
                      animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  {/* Desktop Content */}
                  <div className="relative z-10">
                    <div className="mb-12">
                      <div className="flex items-center mb-6">
                        <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-3 rounded-2xl mr-4 shadow-xl">
                          <Database className="w-8 h-8 text-black" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">ProspectBase</h3>
                          <p className="text-blue-200 text-sm">B2B Data Intelligence</p>
                        </div>
                      </div>
                      
                      <h2 className="text-5xl font-bold leading-tight mb-4">
                        Unlock Your <br />
                        <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
                          Audience
                        </span> <br />
                        Potential
                      </h2>
                      
                      <p className="text-blue-100 text-lg leading-relaxed">
                        Get precise audience counts and insights to accelerate your B2B growth strategy.
                      </p>
                    </div>

                    {/* Desktop Stats */}
                    <div className="mb-12">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <p className="text-blue-200 text-sm mb-4 text-center">Global Database Coverage</p>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-[#FFD700] mb-1">185M+</div>
                            <div className="text-xs text-blue-200">B2B Contacts</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-[#4ECDC4] mb-1">142</div>
                            <div className="text-xs text-blue-200">Countries</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-[#FF6B6B] mb-1">25M+</div>
                            <div className="text-xs text-blue-200">Companies</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Trust Indicators */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-[#FFD700] fill-current" />
                          ))}
                        </div>
                        <span className="text-blue-200 text-sm">Trusted by 1000+ companies</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-[#4ECDC4]" />
                        <span className="text-blue-200 text-sm">GDPR & CCPA Compliant</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-blue-200 text-sm">Real-time data verification</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Desktop Form Panel */}
                <div className="w-3/5 bg-gray-50 p-12 overflow-y-auto">
                  
                  {/* Desktop Form Header */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Request Audience Count</h3>
                    <p className="text-gray-600">Fill out the form below and we'll provide you with detailed audience insights within 24 hours.</p>
                  </div>

                  {/* Desktop Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-xl">
                      <div className="flex items-center">
                        <div className="bg-green-400 rounded-full p-1 mr-3">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-green-800 font-semibold">Success!</h4>
                          <p className="text-green-700 text-sm">Your request has been submitted. We'll get back to you soon!</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-xl">
                      <div className="flex items-center">
                        <X className="w-5 h-5 text-red-400 mr-3" />
                        <div>
                          <h4 className="text-red-800 font-semibold">Error</h4>
                          <p className="text-red-700 text-sm">There was an error submitting your request. Please try again.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Desktop Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Desktop Name Fields - Side by Side */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Desktop Contact Fields - Side by Side */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                        />
                      </div>
                    </div>

                    {/* Desktop Service Selection - Grid Layout */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        Which service interests you most?
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: 'Content Syndication', icon: Target },
                          { value: 'B2B Data & Intent', icon: Database },
                          { value: 'Sales Development', icon: Users },
                          { value: 'All Services', icon: Globe }
                        ].map((option) => (
                          <label 
                            key={option.value} 
                            className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                              formData.description === option.value 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="description"
                              value={option.value}
                              checked={formData.description === option.value}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <option.icon 
                              className={`w-5 h-5 mr-3 ${
                                formData.description === option.value 
                                  ? 'text-blue-600' 
                                  : 'text-gray-400'
                              }`} 
                            />
                            <span className={`font-medium ${
                              formData.description === option.value 
                                ? 'text-blue-800' 
                                : 'text-gray-700'
                            }`}>
                              {option.value}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Desktop Message Field */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Tell us about your target audience, industry, or specific requirements..."
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                      />
                    </div>

                    {/* Desktop Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white font-bold py-4 px-8 rounded-xl disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {isSubmitting ? (
                        <div className="flex items-center justify-center relative z-10">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Submitting Request...
                        </div>
                      ) : (
                        <span className="flex items-center justify-center relative z-10">
                          Get My Audience Count
                          <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </span>
                      )}
                    </button>
                    
                    <p className="text-center text-sm text-gray-500 mt-3">
                      We'll respond within 24 hours with detailed insights
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Benefits Cards */}
      <div className="w-full bg-gradient-to-br from-[#0E1F1C] via-[#1a2f29] to-[#0E1F1C] py-24 px-6 sm:px-8 md:px-16 lg:px-32">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
        >
          Why choose our <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">B2B solutions?</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Precision Targeting",
              content: "Our blend of first-party data intelligence and compliant third-party opt-in data delivers unmatched targeting precision.",
              icon: Target
            },
            {
              title: "Verified Intent",
              content: "Focus on prospects who are actively raising their hands for exactly what you offer with deep insights and verified intent.",
              icon: Users
            },
            {
              title: "Global Intelligence",
              content: "Accelerate your efforts with trustworthy data and smarter insights from our global B2B data intelligence platform.",
              icon: Database
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={hoverEffect}
              variants={cardVariants}
              className="bg-gradient-to-br from-[#FFD800] to-[#FFA500] p-8 rounded-2xl shadow-2xl min-h-[280px] flex flex-col justify-center text-black relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <benefit.icon className="w-14 h-14 mb-6 text-gray-800 relative z-10" />
              <h3 className="font-bold text-xl mb-4 text-gray-800 relative z-10">
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed relative z-10">{benefit.content}</p>
            </motion.div>
          ))}
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
            href="/contact"
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

export default B2BcontentSyndication;
