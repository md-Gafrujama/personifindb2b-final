// "use client";
// import { motion } from "framer-motion";
// import { ArrowUpRight, Plus } from "lucide-react";
// import { useState } from "react";
// import Image from "next/image"; // Import Next.js Image component
// import Head from "next/head"; // Import Next.js Head component
// import Link from "next/link"; // Import Next.js Link component for client-side navigation

// import dynamic from "next/dynamic"; // Import dynamic for code splitting

// // Lazily load navigation and footer components for code splitting
// const Lownav = dynamic(() => import("../../components/Lownav"), { ssr: false });
// const Upnav = dynamic(() => import("../../components/Upnav"), { ssr: false });
// const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });


// function SalesDevelopment() {
//   const cardVariants = {
//     offscreen: { y: 50, opacity: 0 },
//     onscreen: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", bounce: 0.4, duration: 0.8 },
//     },
//   };

//   const hoverEffect = {
//     scale: 1.05,
//     boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
//     transition: { duration: 0.3, ease: "easeOut" },
//   };

//   const [openQuestion, setOpenQuestion] = useState(null);

//   const toggleQuestion = (index) => {
//     setOpenQuestion(openQuestion === index ? null : index);
//   };

//   const faqItems = [
//     {
//       question:
//         "What is sales development and how does it differ from traditional sales?",
//       answer:
//         "Sales development focuses on identifying and qualifying leads before passing them to account executives. Unlike traditional sales which handles the entire sales cycle, SDRs specialize in the early stages of prospecting and outreach to build a healthy pipeline.",
//     },
//     {
//       question:
//         "What tools and technologies are essential for an effective sales development team?",
//       answer:
//         "Key tools include CRM platforms (like Salesforce), sales engagement platforms (like Outreach or SalesLoft), prospecting tools (like LinkedIn Sales Navigator), email verification tools, and conversation intelligence software to analyze calls and improve techniques.",
//     },
//     {
//       question:
//         "How can we measure the success of our sales development efforts?",
//       answer:
//         "Important metrics include number of qualified leads generated, outreach activity rates (calls, emails), response rates, meeting-to-opportunity conversion rates, and pipeline contribution. Tracking these helps optimize your SDR team's performance.",
//     },
//     {
//       question: "What makes an effective sales development representative (SDR)?",
//       answer:
//         "Top SDRs combine persistence with emotional intelligence. They need excellent communication skills, the ability to research prospects thoroughly, resilience to handle rejection, and the capacity to quickly understand customer pain points and position solutions accordingly.",
//     },
//     {
//       question:
//         "How should sales development align with marketing for maximum impact?",
//       answer:
//         "Close alignment ensures SDRs follow up on marketing-generated leads promptly. Shared metrics, regular communication between teams, and coordinated messaging based on campaign themes are crucial. Marketing should provide SDRs with relevant content and talking points for outreach.",
//     },
//     {
//       question:
//         "What outreach strategies work best in today's sales development environment?",
//       answer:
//         "Multi-channel approaches combining personalized email, LinkedIn messages, and phone calls work best. Video messages can increase engagement. The key is timely, relevant outreach that focuses on the prospect's challenges rather than your product features.",
//     },
//     {
//       question: "How can AI enhance sales development processes?",
//       answer:
//         "AI can help prioritize leads, suggest optimal times for outreach, generate personalized email copy, analyze call transcripts for improvement opportunities, and automate data entry tasks - allowing SDRs to focus on high-value interactions.",
//     },
//   ];

//   return (
//     <>
//       <Head>
//         <title>Sales Development & Pipeline Generation - [Your Company Name]</title>
//         <meta
//           name="description"
//           content="Accelerate your sales pipeline with expert sales development strategies. We generate qualified opportunities, enhance outreach, and boost connect rates. Learn more!"
//         />
//         <meta
//           name="keywords"
//           content="sales development, pipeline generation, lead generation, B2B sales, sales outreach, SDR, sales qualified leads, Modigie, sales strategy"
//         />
//         <link rel="canonical" href="[Your Canonical URL]" />
//         {/* Open Graph Tags for Social Media */}
//         <meta property="og:title" content="Sales Development & Pipeline Generation - [Your Company Name]" />
//         <meta property="og:description" content="Accelerate your sales pipeline with expert sales development strategies. We generate qualified opportunities, enhance outreach, and boost connect rates." />
//         <meta property="og:url" content="[Your Canonical URL]" />
//         <meta property="og:image" content="/images/og-sales-development.jpg" /> {/* Replace with a relevant image */}
//         <meta property="og:type" content="website" />
//         {/* Twitter Card Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Sales Development & Pipeline Generation - [Your Company Name]" />
//         <meta name="twitter:description" content="Accelerate your sales pipeline with expert sales development strategies. We generate qualified opportunities, enhance outreach, and boost connect rates." />
//         <meta name="twitter:image" content="/images/twitter-sales-development.jpg" /> {/* Replace with a relevant image */}
//       </Head>

//       <Upnav />
//       <Lownav />

//       {/* Hero Section */}
//       <div
//         className="relative w-full min-h-screen mt-24 bg-cover bg-center flex items-center justify-start px-6 sm:px-8 md:px-16 lg:px-32"
//         style={{ backgroundImage: "url('/images/saleshero.jpg')" }}
//       >
//         <div className="text-left text-white max-w-4xl">
//           <div className="flex items-center mb-6">
//             <div className="bg-[#FFD800] text-black font-bold text-xl rounded-full w-14 h-14 flex items-center justify-center mr-3">
//               SD
//             </div>
//             <span className="text-white text-2xl font-semibold">
//               sales development
//             </span>
//           </div>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
//             Sales development that <br />
//             fills your pipeline with <br />
//             <span className="text-[#FFD800]">qualified opportunities.</span>
//           </h1>
//           <button className="bg-[#FFD800] text-black text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
//             GET IN TOUCH
//           </button>
//         </div>
//       </div>

//       {/* Verified Engagement */}
//       <div className="w-full bg-[#0E1F1C] text-white py-20 px-6 sm:px-8 md:px-16 lg:px-32">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
//           Proven strategies to accelerate pipeline <br />
//           growth, <span className="text-[#FFD700]">guaranteed.</span>
//         </h2>
//         <div className="border-t border-gray-700 pt-12 flex flex-col md:flex-row gap-12">
//           <div className="md:w-1/2">
//             <h3 className="text-[#FFD700] font-bold text-xl mb-4">
//               OUR SOLUTION
//             </h3>
//           </div>
//           <div className="md:w-1/2 text-lg space-y-6">
//             <p>
//               Our sales development approach combines data-driven targeting with
//               human-centric outreach to connect you with decision-makers who are
//               ready to have meaningful conversations about your solution.
//             </p>
//             <p>
//               With decades of experience building high-performing SDR teams,
//               we've developed methodologies that consistently deliver qualified
//               meetings and accelerate sales cycles for our clients across
//               industries.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Workflow Section */}
//       <div className="w-full bg-[#0E1F1C] py-20 px-6 sm:px-8 md:px-16 lg:px-32 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-12">
//           HOW OUR SALES DEVELOPMENT PROCESS WORKS
//         </h2>
//         <div className="flex justify-center">
//           {/* Using Next.js Image for optimization and lazy loading (default behavior) */}
//           <Image
//             src="images/work1.webp"
//             alt="Sales Development Workflow"
//             width={1200} // Set appropriate width for intrinsic sizing
//             height={800} // Set appropriate height for intrinsic sizing
//             layout="responsive" // Make image responsive
//             className="w-full max-w-6xl object-contain"
//             priority={false} // Images below the fold should not have priority
//           />
//         </div>
//       </div>

//       {/* Strategic Placement Section */}
//       <div className="w-full overflow-hidden">
//         <section className="bg-[url('/images/bg2.webp')] bg-[#0E1F1C] w-full text-black pt-20 pb-36 px-4 sm:px-12 md:px-20 lg:px-40 xl:px-60 relative overflow-hidden z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="max-w-7xl mx-auto"
//           >
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//               className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
//             >
//               Targeted outreach strategies <br /> tailored to your ideal
//               customers.
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//               className="flex flex-col md:flex-row gap-4 items-start mb-6 p-6"
//             >
//               <p className="text-lg md:w-1/3 text-black font-semibold">
//                 Our Services
//               </p>
//               <p className="text-lg md:w-2/3">
//                 Our team handles all aspects of sales development, from prospect
//                 research and list building to outreach and qualification,
//                 through to handoff to your sales team. All so you can focus on
//                 closing deals while{" "}
//                 <strong>we keep your pipeline full</strong>.
//               </p>
//             </motion.div>

//             {/* Cards */}
//             <div className="flex flex-col md:flex-row gap-6 mt-10 text-black">
//               {[
//                 {
//                   title: "Precision Targeting:",
//                   content:
//                     "We identify and engage with your ideal customer profile using firmographic, technographic, and intent data.",
//                 },
//                 {
//                   title: "Multi-Channel Outreach:",
//                   content:
//                     "Strategic combination of email, phone, LinkedIn, and video messages tailored to each prospect.",
//                 },
//                 {
//                   title: "Conversation Intelligence:",
//                   content:
//                     "Our technology analyzes interactions to continuously refine messaging and improve results.",
//                 },
//               ].map((service, index) => (
//                 <motion.div
//                   key={index}
//                   initial="offscreen"
//                   whileInView="onscreen"
//                   viewport={{ once: true, amount: 0.5 }}
//                   whileHover={hoverEffect}
//                   variants={cardVariants}
//                   className="bg-[#ffea00] p-8 rounded-xl shadow-lg flex-1 min-h-[250px] flex flex-col justify-center"
//                 >
//                   <div className="p-4 rounded-lg">
//                     <h2 className="font-bold text-xl mb-3 text-gray-800">
//                       {service.title}
//                     </h2>
//                     <p className="text-gray-700">{service.content}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Using Next.js Link for client-side navigation */}
//             <Link href="/" passHref>
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="mt-16 flex justify-center md:justify-start"
//               >
//                 <motion.button
//                   whileHover={{
//                     scale: 1.05,
//                     backgroundColor: "#ffea00",
//                     transition: { duration: 0.3 },
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-[#ffd800] hover:bg-yellow-300 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 text-lg shadow-lg"
//                 >
//                   I AM READY TO FILL MY PIPELINE →
//                 </motion.button>
//               </motion.div>
//             </Link>
//           </motion.div>
//         </section>

       
//       </div>

//       {/* Modigie Section */}
//       <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 w-full text-black py-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <h2 className="text-4xl font-bold leading-tight mb-6">
//               Boost connect rates with direct <br className="hidden sm:block" />
//               dial mobile data.
//             </h2>
//             <p className="mb-4 text-lg">
//               In today's competitive landscape, having accurate contact
//               information is critical. Our partnership with Modigie provides{" "}
//               <strong>verified mobile numbers</strong> for your prospects,
//               dramatically improving connect rates and sales productivity.
//             </p>
//             <p className="text-lg">
//               We enhance your sales development efforts by appending validated
//               mobile numbers to prospect records, giving your team the best
//               chance to start meaningful conversations.
//             </p>
//           </div>
//           <div className="flex justify-center">
//             {/* Using Next.js Image for optimization and lazy loading */}
//             <Image
//               src="/images/phone.webp"
//               alt="Phone"
//               width={300} // Set appropriate width
//               height={300} // Set appropriate height
//               className="rounded-full border-8 border-yellow-300 shadow-lg max-w-[300px] w-full"
//               priority={false} // Images below the fold should not have priority
//             />
//           </div>
//         </div>

//         {/* Bottom Cards */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             {
//               title: "Launch a sales development campaign",
//               content:
//                 "Work with our team to define your ideal customer profile and outreach strategy for maximum impact.",
//             },
//             {
//               title: "Enhance with verified contact data",
//               content:
//                 "We process your prospect lists through Modigie's real-time database to append accurate mobile numbers.",
//             },
//             {
//               title: "Increased call-to-connect rates",
//               content:
//                 "Your sales team gets hot leads with validated contact information, reducing time wasted on wrong numbers.",
//             },
//           ].map((card, i) => (
//             <div key={i} className="bg-yellow-100 p-6 rounded-lg shadow-md">
//               <h3 className="font-bold text-lg mb-2">{card.title}</h3>
//               <p>{card.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="min-h-screen w-full flex items-stretch bg-[#0E1F1C]">
//         <div className="w-full flex flex-col md:flex-row">
//           {/* Left Side - Logo and Title */}
//           <div className="bg-[#0E1F1C] md:w-2/5 p-8 flex flex-col items-start">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-bold text-white">
//                 Sales Development FAQs
//               </h1>
//             </div>
//           </div>

//           {/* Right Side - FAQ Content */}
//           <div className="md:w-3/5 p-6 md:p-10">
//             {/* FAQ Accordion */}
//             <div className="space-y-4">
//               {faqItems.map((item, index) => (
//                 <div key={index} className="border-b border-gray-200">
//                   <button
//                     className="flex items-center w-full text-left py-4 focus:outline-none"
//                     onClick={() => toggleQuestion(index)}
//                   >
//                     <span className="text-white flex-shrink-0 mr-3">
//                       <Plus
//                         size={20}
//                         className={
//                           openQuestion === index
//                             ? "rotate-45 transition-transform"
//                             : "transition-transform"
//                         }
//                       />
//                     </span>
//                     <span className="text-white font-medium">
//                       {item.question}
//                     </span>
//                   </button>

//                   {openQuestion === index && (
//                     <div className="pl-8 pb-4 pr-4 text-gray-300">
//                       <p>{item.answer}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Final CTA */}
//       <div
//         className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center relative flex items-center justify-center text-center"
//         style={{
//           backgroundImage: `url('/images/connectus.jpg')`,
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-white flex flex-col items-center"
//         >
//           {/* Using Next.js Link for client-side navigation */}
//           <Link
//             href="/contact"
//             className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold group"
//           >
//             <span className="text-yellow-400">Connect</span>
//             <motion.span
//               className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition duration-300"
//               whileHover={{ scale: 1.2, rotate: 45 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <ArrowUpRight className="text-black w-5 h-5 md:w-6 md:h-6" />
//             </motion.span>
//           </Link>
//           <p className="text-white text-2xl sm:text-3xl md:text-4xl mt-2 font-medium">
//             with us
//           </p>
//         </motion.div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default SalesDevelopment;
// "use client";
// import { motion } from "framer-motion";
// import { ArrowUpRight, Plus } from "lucide-react";
// import { useState } from "react";
// import Image from "next/image";
// import Head from "next/head";
// import Link from "next/link";
// import dynamic from "next/dynamic";

// // Lazily load navigation and footer components for code splitting
// const Lownav = dynamic(() => import("../../components/Lownav"), { ssr: false });
// const Upnav = dynamic(() => import("../../components/Upnav"), { ssr: false });
// const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });

// function SalesDevelopment() {
//   // Smooth scroll behavior (applied globally when component mounts)
//   if (typeof window !== "undefined") {
//     document.documentElement.style.scrollBehavior = "smooth";
//   }

//   const cardVariants = {
//     offscreen: { y: 50, opacity: 0 },
//     onscreen: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", bounce: 0.35, duration: 0.7 },
//     },
//   };

//   const hoverEffect = {
//     scale: 1.04,
//     boxShadow: "0 16px 40px -10px rgba(0, 0, 0, 0.35)",
//     transition: { duration: 0.25, ease: "easeOut" },
//   };

//   const [openQuestion, setOpenQuestion] = useState(null);

//   const toggleQuestion = (index) => {
//     setOpenQuestion(openQuestion === index ? null : index);
//   };

//   const faqItems = [
//     {
//       question:
//         "What is sales development and how does it differ from traditional sales?",
//       answer:
//         "Sales development focuses on identifying and qualifying leads before passing them to account executives. Unlike traditional sales which handles the entire sales cycle, SDRs specialize in the early stages of prospecting and outreach to build a healthy pipeline.",
//     },
//     {
//       question:
//         "What tools and technologies are essential for an effective sales development team?",
//       answer:
//         "Key tools include CRM platforms (like Salesforce), sales engagement platforms (like Outreach or SalesLoft), prospecting tools (like LinkedIn Sales Navigator), email verification tools, and conversation intelligence software to analyze calls and improve techniques.",
//     },
//     {
//       question: "How can we measure the success of our sales development efforts?",
//       answer:
//         "Important metrics include number of qualified leads generated, outreach activity rates (calls, emails), response rates, meeting-to-opportunity conversion rates, and pipeline contribution. Tracking these helps optimize your SDR team's performance.",
//     },
//     {
//       question: "What makes an effective sales development representative (SDR)?",
//       answer:
//         "Top SDRs combine persistence with emotional intelligence. They need excellent communication skills, the ability to research prospects thoroughly, resilience to handle rejection, and the capacity to quickly understand customer pain points and position solutions accordingly.",
//     },
//     {
//       question:
//         "How should sales development align with marketing for maximum impact?",
//       answer:
//         "Close alignment ensures SDRs follow up on marketing-generated leads promptly. Shared metrics, regular communication between teams, and coordinated messaging based on campaign themes are crucial. Marketing should provide SDRs with relevant content and talking points for outreach.",
//     },
//     {
//       question:
//         "What outreach strategies work best in today's sales development environment?",
//       answer:
//         "Multi-channel approaches combining personalized email, LinkedIn messages, and phone calls work best. Video messages can increase engagement. The key is timely, relevant outreach that focuses on the prospect's challenges rather than your product features.",
//     },
//     {
//       question: "How can AI enhance sales development processes?",
//       answer:
//         "AI can help prioritize leads, suggest optimal times for outreach, generate personalized email copy, analyze call transcripts for improvement opportunities, and automate data entry tasks - allowing SDRs to focus on high-value interactions.",
//     },
//   ];

//   return (
//     <>
//       <Head>
//         <title>Sales Development & Pipeline Generation - [Your Company Name]</title>
//         <meta
//           name="description"
//           content="Accelerate your sales pipeline with expert sales development strategies. We generate qualified opportunities, enhance outreach, and boost connect rates. Learn more!"
//         />
//         <meta
//           name="keywords"
//           content="sales development, pipeline generation, lead generation, B2B sales, sales outreach, SDR, sales qualified leads, Modigie, sales strategy"
//         />
//         <link rel="canonical" href="[Your Canonical URL]" />
//         {/* Open Graph Tags */}
//         <meta
//           property="og:title"
//           content="Sales Development & Pipeline Generation - [Your Company Name]"
//         />
//         <meta
//           property="og:description"
//           content="Accelerate your sales pipeline with expert sales development strategies. We generate qualified opportunities, enhance outreach, and boost connect rates."
//         />
//         <meta property="og:url" content="[Your Canonical URL]" />
//         <meta property="og:image" content="/images/og-sales-development.jpg" />
//         <meta property="og:type" content="website" />
//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Sales Development & Pipeline Generation - [Your Company Name]"
//         />
//         <meta
//           name="twitter:description"
//           content="Accelerate your sales pipeline with expert sales development strategies. We generate qualified opportunities, enhance outreach, and boost connect rates."
//         />
//         <meta name="twitter:image" content="/images/twitter-sales-development.jpg" />
//       </Head>

//       Page background accent glow
//       <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
//         <div className="absolute -top-10 right-0 h-72 w-72 rounded-full bg-[#FFD800]/20 blur-3xl" />
//         <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
//       </div>

//       <Upnav />
//       <Lownav />

//       {/* Hero Section */}
//       <section
//         className="relative w-full min-h-[88vh] mt-24 bg-cover bg-center flex items-center justify-start px-6 sm:px-8 md:px-16 lg:px-32 overflow-hidden"
//         style={{ backgroundImage: "url('/images/saleshero.jpg')" }}
//       >
//         {/* subtle overlay for contrast */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/30 to-black/60" />
//         {/* top/bottom decorative borders */}
//         <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
//         <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="relative z-10 text-left text-white max-w-4xl"
//         >
//           <div className="flex items-center mb-6">
//             <div className="bg-[#FFD800] text-black font-bold text-xl rounded-2xl w-14 h-14 flex items-center justify-center mr-3 shadow-[0_10px_30px_-10px_rgba(255,216,0,0.7)] ring-1 ring-black/10">
//               SD
//             </div>
//             <span className="text-white/90 text-2xl font-semibold tracking-wide">
//               sales development
//             </span>
//           </div>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
//             Sales development that
//             <br />
//             fills your pipeline with
//             <br />
//             <span className="text-[#FFD800]">
//               qualified opportunities.
//             </span>
//           </h1>

//           <Link href="/contact" className="inline-block">
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               className="group bg-[#FFD800] text-black text-lg font-semibold py-3.5 px-8 rounded-full shadow-[0_14px_30px_-12px_rgba(255,216,0,0.8)] ring-1 ring-black/10 transition-all duration-300"
//             >
//               <span className="inline-flex items-center gap-2">
//                 GET IN TOUCH
//                 <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </span>
//             </motion.button>
//           </Link>
//         </motion.div>

//         {/* decorative floating shapes */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 0.25, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="pointer-events-none absolute -right-16 top-20 h-64 w-64 rounded-full bg-[#FFD800] blur-3xl"
//         />
//       </section>

//       {/* Verified Engagement / Solution */}
//       <section className="w-full bg-[#0B1715] text-white py-20 px-6 sm:px-8 md:px-16 lg:px-32 relative">
//         <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-10 tracking-tight">
//           Proven strategies to accelerate pipeline
//           <br />
//           growth, <span className="text-[#FFD800]">guaranteed.</span>
//         </h2>

//         <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm shadow-[0_25px_50px_-12px_rgba(0,0,0,0.55)]">
//           <div className="flex flex-col md:flex-row gap-10 md:gap-14">
//             <div className="md:w-1/2">
//               <h3 className="text-[#FFD800] font-bold text-xl mb-4 uppercase tracking-wide">
//                 Our Solution
//               </h3>
//               <div className="h-1 w-16 bg-[#FFD800] rounded" />
//             </div>
//             <div className="md:w-1/2 text-lg leading-relaxed text-white/90 space-y-6">
//               <p>
//                 Our sales development approach combines data-driven targeting with
//                 human-centric outreach to connect with decision-makers ready for
//                 meaningful conversations about your solution.
//               </p>
//               <p>
//                 With decades of experience building high-performing SDR teams, our
//                 methodologies consistently deliver qualified meetings and accelerate
//                 sales cycles across industries.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Workflow Section */}
//       <section className="w-full bg-[#0B1715] py-20 px-6 sm:px-8 md:px-16 lg:px-32 text-center relative">
//         <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent" />
//         <h2 className="text-3xl md:text-4xl font-extrabold text-[#FFD800] mb-10">
//           HOW OUR SALES DEVELOPMENT PROCESS WORKS
//         </h2>

//         <div className="mx-auto max-w-6xl">
//           <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] bg-gradient-to-b from-white/5 to-white/0 p-2">
//             <div className="relative rounded-2xl overflow-hidden">
//               <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 rounded-2xl" />
//               <Image
//                 src="/images/work1.webp"
//                 alt="Sales Development Workflow"
//                 width={1600}
//                 height={1000}
//                 className="w-full h-auto object-contain"
//                 priority={false}
//               />
//             </div>
//           </div>
//           <p className="text-white/70 text-sm mt-4">
//             A high-level view of research, outreach, qualification, and handoff.
//           </p>
//         </div>
//       </section>

//       {/* Strategic Placement Section */}
//       <section className="w-full overflow-hidden">
//         <div className="bg-[url('/images/bg2.webp')] bg-[#0E1F1C] bg-cover bg-center w-full text-black pt-20 pb-36 px-4 sm:px-12 md:px-20 lg:px-40 xl:px-60 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-7xl mx-auto"
//           >
//             <motion.h1
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ delay: 0.15, duration: 0.7 }}
//               className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 drop-shadow"
//             >
//               Targeted outreach strategies
//               <br /> tailored to your ideal customers.
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ delay: 0.3, duration: 0.7 }}
//               className="flex flex-col md:flex-row gap-4 items-start mb-6 p-6 bg-white/60 rounded-2xl backdrop-blur shadow-[0_16px_40px_-12px_rgba(0,0,0,0.2)] border border-black/5"
//             >
//               <p className="text-lg md:w-1/3 text-black font-semibold">
//                 Our Services
//               </p>
//               <p className="text-lg md:w-2/3 text-black/80">
//                 Our team handles all aspects of sales development, from prospect
//                 research and list building to outreach and qualification, through to
//                 handoff to the sales team—so closing deals stays the focus while{" "}
//                 <strong>we keep your pipeline full</strong>.
//               </p>
//             </motion.div>

//             {/* Service Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-black">
//               {[
//                 {
//                   title: "Precision Targeting:",
//                   content:
//                     "We identify and engage your ICP using firmographic, technographic, and intent data.",
//                 },
//                 {
//                   title: "Multi-Channel Outreach:",
//                   content:
//                     "Email, phone, LinkedIn, and video—strategically combined and tailored to each prospect.",
//                 },
//                 {
//                   title: "Conversation Intelligence:",
//                   content:
//                     "We analyze interactions to refine messaging continuously and improve outcomes.",
//                 },
//               ].map((service, index) => (
//                 <motion.div
//                   key={index}
//                   initial="offscreen"
//                   whileInView="onscreen"
//                   viewport={{ once: true, amount: 0.4 }}
//                   whileHover={hoverEffect}
//                   variants={cardVariants}
//                   className="relative bg-[#FFEE7A] p-8 rounded-2xl shadow-[0_18px_40px_-16px_rgba(0,0,0,0.35)] border border-black/10 overflow-hidden"
//                 >
//                   <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-yellow-300 blur-2xl opacity-70" />
//                   <div className="relative p-2 rounded-lg">
//                     <h2 className="font-extrabold text-xl mb-3 text-gray-900 tracking-tight">
//                       {service.title}
//                     </h2>
//                     <p className="text-gray-800 leading-relaxed">{service.content}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* CTA */}
//             <Link href="/" passHref className="block">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ delay: 0.5 }}
//                 className="mt-16 flex justify-center md:justify-start"
//               >
//                 <motion.button
//                   whileHover={{
//                     scale: 1.05,
//                     backgroundColor: "#ffea00",
//                     boxShadow: "0 20px 45px -18px rgba(0,0,0,0.4)",
//                   }}
//                   whileTap={{ scale: 0.97 }}
//                   className="bg-[#ffd800] text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 text-lg shadow-[0_14px_30px_-12px_rgba(0,0,0,0.35)] border border-black/10"
//                 >
//                   I AM READY TO CONNECTS FOR SALES DEVELOPMENT →
//                 </motion.button>
//               </motion.div>
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* Modigie Section */}
//       <section className="bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 w-full text-black py-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48 relative">
//         <div className="absolute inset-x-0 top-0 h-[1px] bg-black/10" />
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      

          
//         </div>

//         {/* Bottom Cards */}
        
//       </section>

//       {/* FAQ Section */}
//       <section className="min-h-screen w-full flex items-stretch bg-[#0E1F1C] relative">
//         <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" />
//         <div className="w-full flex flex-col md:flex-row">
//           {/* Left Side - Title */}
//           <div className="bg-[#0E1F1C] md:w-2/5 p-10 flex flex-col items-start">
//             <div className="sticky top-28">
//               <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
//                 Sales Development FAQs
//               </h1>
//               <div className="mt-4 h-1 w-20 bg-[#FFD800] rounded" />
//               <p className="mt-4 text-white/60">
//                 Everything needed to align, engage, measure, and scale.
//               </p>
//             </div>
//           </div>

//           {/* Right Side - FAQ Content */}
//           <div className="md:w-3/5 p-6 md:p-10">
//             <div className="space-y-4">
//               {faqItems.map((item, index) => {
//                 const isOpen = openQuestion === index;
//                 return (
//                   <div
//                     key={index}
//                     className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
//                   >
//                     <button
//                       className="flex items-center w-full text-left py-4 px-4 focus:outline-none group"
//                       onClick={() => toggleQuestion(index)}
//                       aria-expanded={isOpen}
//                       aria-controls={`faq-panel-${index}`}
//                     >
//                       <span className="text-white flex-shrink-0 mr-3">
//                         <Plus
//                           size={22}
//                           className={
//                             isOpen
//                               ? "rotate-45 transition-transform"
//                               : "transition-transform"
//                           }
//                         />
//                       </span>
//                       <span className="text-white font-medium group-hover:text-yellow-200 transition-colors">
//                         {item.question}
//                       </span>
//                     </button>

//                     <motion.div
//                       id={`faq-panel-${index}`}
//                       initial={false}
//                       animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
//                       transition={{ duration: 0.25, ease: "easeInOut" }}
//                       className="px-4"
//                     >
//                       {isOpen && (
//                         <div className="pb-5 pt-1 pr-2 text-gray-300">
//                           <p className="leading-relaxed">{item.answer}</p>
//                         </div>
//                       )}
//                     </motion.div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section
//         className="w-full min-h-[320px] md:min-h-[420px] lg:min-h-[520px] bg-cover bg-center relative flex items-center justify-center text-center"
//         style={{ backgroundImage: "url('/images/connectus.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40" />
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-white flex flex-col items-center"
//         >
//           <Link
//             href="/contact"
//             className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold group"
//           >
//             <span className="text-yellow-400 drop-shadow">Connect</span>
//             <motion.span
//               className="ml-3 w-9 h-9 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition duration-300 ring-1 ring-black/10 shadow-[0_16px_40px_-16px_rgba(255,216,0,0.7)]"
//               whileHover={{ scale: 1.15, rotate: 45 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <ArrowUpRight className="text-black w-5 h-5 md:w-6 md:h-6" />
//             </motion.span>
//           </Link>
//           <p className="text-white text-2xl sm:text-3xl md:text-4xl mt-2 font-medium">
//             with us
//           </p>
//         </motion.div>

//         {/* Framed edge */}
//         <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-none" />
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default SalesDevelopment;

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

function SalesDevelopment() {
  // Smooth scroll behavior (applied globally when component mounts)
  if (typeof window !== "undefined") {
    document.documentElement.style.scrollBehavior = "smooth";
  }

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
        "What is sales development and how does it differ from traditional sales?",
      answer:
        "Sales development focuses on identifying and qualifying leads before passing them to account executives. Unlike traditional sales which handles the entire sales cycle, SDRs specialize in the early stages of prospecting and outreach to build a healthy pipeline.",
    },
    {
      question:
        "What tools and technologies are essential for an effective sales development team?",
      answer:
        "Key tools include CRM platforms (like Salesforce), sales engagement platforms (like Outreach or SalesLoft), prospecting tools (like LinkedIn Sales Navigator), email verification tools, and conversation intelligence software to analyze calls and improve techniques.",
    },
    {
      question: "How can we measure the success of our sales development efforts?",
      answer:
        "Important metrics include number of qualified leads generated, outreach activity rates (calls, emails), response rates, meeting-to-opportunity conversion rates, and pipeline contribution. Tracking these helps optimize your SDR team's performance.",
    },
    {
      question: "What makes an effective sales development representative (SDR)?",
      answer:
        "Top SDRs combine persistence with emotional intelligence. They need excellent communication skills, the ability to research prospects thoroughly, resilience to handle rejection, and the capacity to quickly understand customer pain points and position solutions accordingly.",
    },
    {
      question:
        "How should sales development align with marketing for maximum impact?",
      answer:
        "Close alignment ensures SDRs follow up on marketing-generated leads promptly. Shared metrics, regular communication between teams, and coordinated messaging based on campaign themes are crucial. Marketing should provide SDRs with relevant content and talking points for outreach.",
    },
    {
      question:
        "What outreach strategies work best in today's sales development environment?",
      answer:
        "Multi-channel approaches combining personalized email, LinkedIn messages, and phone calls work best. Video messages can increase engagement. The key is timely, relevant outreach that focuses on the prospect's challenges rather than your product features.",
    },
    {
      question: "How can AI enhance sales development processes?",
      answer:
        "AI can help prioritize leads, suggest optimal times for outreach, generate personalized email copy, analyze call transcripts for improvement opportunities, and automate data entry tasks - allowing SDRs to focus on high-value interactions.",
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
      // Prevent background scroll
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
            "Thanks! Your request has been received. We’ll be in touch shortly.",
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

  // Form component
  const FormModal = () => {
    return (
      <AnimatePresence>
        {isFormOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseForm}
            />
            {/* Modal */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="sales-form-title"
              className="fixed z-[80] inset-0 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
            >
              <div
                className="relative w-full max-w-2xl rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-black/5 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                ref={modalRef}
              >
                {/* Accent top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500" />
                {/* Header */}
                <div className="p-6 md:p-7 flex items-start justify-between">
                  <div>
                    <h2
                      id="sales-form-title"
                      className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight"
                    >
                      Tell us about your sales goals
                    </h2>
                    <p className="mt-1 text-gray-600">
                      Share a few details and we’ll get back within 1 business day.
                    </p>
                  </div>
                  <button
                    aria-label="Close form"
                    onClick={handleCloseForm}
                    className="rounded-full p-2 hover:bg-gray-100 transition"
                    disabled={isSubmitting}
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Body */}
                <div className="px-6 md:px-7 pb-6 md:pb-7">
                  <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {/* Hidden inputs for Web3Forms */}
                    <input type="hidden" name="access_key" value="e505fedc-14ad-49ed-834f-32cd23ad6136" />
                    <input type="hidden" name="subject" value="New Sales Development Inquiry" />
                    <input type="hidden" name="from_name" value="Sales Dev Form" />
                    <input type="hidden" name="redirect" value="" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                    {/* Name */}
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-800 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Alex Johnson"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
                      />
                    </div>

                    {/* Email */}
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-800 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-800 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 555 123 4567"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
                      />
                    </div>

                    {/* Company */}
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-800 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Inc."
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
                      />
                    </div>

                    {/* Role */}
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-800 mb-1">
                        Role
                      </label>
                      <input
                        type="text"
                        name="role"
                        placeholder="Head of Sales"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
                      />
                    </div>

                    {/* Monthly SQL Goal */}
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-800 mb-1">
                        Monthly SQL Goal
                      </label>
                      <select
                        name="monthly_sql_goal"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a range
                        </option>
                        <option value="1-10">1-10</option>
                        <option value="11-25">11-25</option>
                        <option value="26-50">26-50</option>
                        <option value="51-100">51-100</option>
                        <option value="100+">100+</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-medium text-gray-800 mb-1">
                        What are you looking to achieve?
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Share any specifics about your ICP, current outreach challenges, or desired timelines."
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
                      ></textarea>
                    </div>

                    {/* Page context */}
                    <input type="hidden" name="page" value="Sales Development" />
                    <input type="hidden" name="timestamp" value={new Date().toISOString()} />

                    {/* Result message */}
                    <div className="col-span-1 md:col-span-2">
                      <AnimatePresence>
                        {formResult.status === "success" && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            className="rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 px-4 py-3"
                          >
                            {formResult.message}
                          </motion.div>
                        )}
                        {formResult.status === "error" && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            className="rounded-xl border border-red-200 bg-red-50 text-red-700 px-4 py-3"
                          >
                            {formResult.message}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Actions */}
                    <div className="col-span-1 md:col-span-2 flex items-center justify-between gap-3 pt-1">
                      <p className="text-xs text-gray-500">
                        By submitting, you agree to be contacted regarding your request.
                      </p>
                      <motion.button
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 bg-[#FFD800] text-black font-semibold py-3 px-6 rounded-full border border-black/10 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.25)] transition disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Submit Request
                            <ArrowUpRight className="w-5 h-5" />
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
        <title>Sales Development & Pipeline Generation - [Your Company Name]</title>
        <meta
          name="description"
          content="Accelerate your sales pipeline with expert sales development strategies. We generate qualified opportunities, enhance outreach, and boost connect rates. Learn more!"
        />
        <meta
          name="keywords"
          content="sales development, pipeline generation, lead generation, B2B sales, sales outreach, SDR, sales qualified leads, Modigie, sales strategy"
        />
        <link rel="canonical" href="[Your Canonical URL]" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Sales Development & Pipeline Generation - [Your Company Name]"
        />
        <meta
          property="og:description"
          content="Accelerate your sales pipeline with expert sales development strategies. We generate qualified opportunities, enhance outreach, and boost connect rates."
        />
        <meta property="og:url" content="[Your Canonical URL]" />
        <meta property="og:image" content="/images/og-sales-development.jpg" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sales Development & Pipeline Generation - [Your Company Name]"
        />
        <meta
          name="twitter:description"
          content="Accelerate your sales pipeline with expert sales development strategies. We generate qualified opportunities, enhance outreach, and boost connect rates."
        />
        <meta name="twitter:image" content="/images/twitter-sales-development.jpg" />
      </Head>

      {/* Page background accent glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute -top-10 right-0 h-72 w-72 rounded-full bg-[#FFD800]/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <Upnav />
      <Lownav />

      {/* Hero Section */}
      <section
        className="relative w-full min-h-[88vh] mt-24 bg-cover bg-center flex items-center justify-start px-6 sm:px-8 md:px-16 lg:px-32 overflow-hidden"
        style={{ backgroundImage: "url('/images/saleshero.jpg')" }}
      >
        {/* subtle overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/30 to-black/60" />
        {/* top/bottom decorative borders */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-left text-white max-w-4xl"
        >
          <div className="flex items-center mb-6">
            <div className="bg-[#FFD800] text-black font-bold text-xl rounded-2xl w-14 h-14 flex items-center justify-center mr-3 shadow-[0_10px_30px_-10px_rgba(255,216,0,0.7)] ring-1 ring-black/10">
              SD
            </div>
            <span className="text-white/90 text-2xl font-semibold tracking-wide">
              sales development
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            Sales development that
            <br />
            fills your pipeline with
            <br />
            <span className="text-[#FFD800]">qualified opportunities.</span>
          </h1>

          <Link href="/contact" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-[#FFD800] text-black text-lg font-semibold py-3.5 px-8 rounded-full shadow-[0_14px_30px_-12px_rgba(255,216,0,0.8)] ring-1 ring-black/10 transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2">
                GET IN TOUCH
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* decorative floating shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -right-16 top-20 h-64 w-64 rounded-full bg-[#FFD800] blur-3xl"
        />
      </section>

      {/* Verified Engagement / Solution */}
      <section className="w-full bg-[#0B1715] text-white py-20 px-6 sm:px-8 md:px-16 lg:px-32 relative">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-10 tracking-tight">
          Proven strategies to accelerate pipeline
          <br />
          growth, <span className="text-[#FFD800]">guaranteed.</span>
        </h2>

        <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm shadow-[0_25px_50px_-12px_rgba(0,0,0,0.55)]">
          <div className="flex flex-col md:flex-row gap-10 md:gap-14">
            <div className="md:w-1/2">
              <h3 className="text-[#FFD800] font-bold text-xl mb-4 uppercase tracking-wide">
                Our Solution
              </h3>
              <div className="h-1 w-16 bg-[#FFD800] rounded" />
            </div>
            <div className="md:w-1/2 text-lg leading-relaxed text-white/90 space-y-6">
              <p>
                Our sales development approach combines data-driven targeting with
                human-centric outreach to connect with decision-makers ready for
                meaningful conversations about your solution.
              </p>
              <p>
                With decades of experience building high-performing SDR teams, our
                methodologies consistently deliver qualified meetings and accelerate
                sales cycles across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="w-full bg-[#0B1715] py-20 px-6 sm:px-8 md:px-16 lg:px-32 text-center relative">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#FFD800] mb-10">
          HOW OUR SALES DEVELOPMENT PROCESS WORKS
        </h2>

        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] bg-gradient-to-b from-white/5 to-white/0 p-2">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 rounded-2xl" />
              <Image
                src="/images/work1.webp"
                alt="Sales Development Workflow"
                width={1600}
                height={1000}
                className="w-full h-auto object-contain"
                priority={false}
              />
            </div>
          </div>
          <p className="text-white/70 text-sm mt-4">
            A high-level view of research, outreach, qualification, and handoff.
          </p>
        </div>
      </section>

      {/* Strategic Placement Section */}
      <section className="w-full overflow-hidden">
        <div className="bg-[url('/images/bg2.webp')] bg-[#0E1F1C] bg-cover bg-center w-full text-black pt-20 pb-36 px-4 sm:px-12 md:px-20 lg:px-40 xl:px-60 relative z-10">
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
              className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 drop-shadow"
            >
              Targeted outreach strategies
              <br /> tailored to your ideal customers.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-col md:flex-row gap-4 items-start mb-6 p-6 bg-white/60 rounded-2xl backdrop-blur shadow-[0_16px_40px_-12px_rgba(0,0,0,0.2)] border border-black/5"
            >
              <p className="text-lg md:w-1/3 text-black font-semibold">
                Our Services
              </p>
              <p className="text-lg md:w-2/3 text-black/80">
                Our team handles all aspects of sales development, from prospect
                research and list building to outreach and qualification, through to
                handoff to the sales team—so closing deals stays the focus while{" "}
                <strong>we keep your pipeline full</strong>.
              </p>
            </motion.div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-black">
              {[
                {
                  title: "Precision Targeting:",
                  content:
                    "We identify and engage your ICP using firmographic, technographic, and intent data.",
                },
                {
                  title: "Multi-Channel Outreach:",
                  content:
                    "Email, phone, LinkedIn, and video—strategically combined and tailored to each prospect.",
                },
                {
                  title: "Conversation Intelligence:",
                  content:
                    "We analyze interactions to refine messaging continuously and improve outcomes.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.4 }}
                  whileHover={hoverEffect}
                  variants={cardVariants}
                  className="relative bg-[#FFEE7A] p-8 rounded-2xl shadow-[0_18px_40px_-16px_rgba(0,0,0,0.35)] border border-black/10 overflow-hidden"
                >
                  <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-yellow-300 blur-2xl opacity-70" />
                  <div className="relative p-2 rounded-lg">
                    <h2 className="font-extrabold text-xl mb-3 text-gray-900 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-gray-800 leading-relaxed">{service.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/" passHref className="block" onClick={handleOpenForm}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5 }}
                className="mt-16 flex justify-center md:justify-start"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#ffea00",
                    boxShadow: "0 20px 45px -18px rgba(0,0,0,0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#ffd800] text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 text-lg shadow-[0_14px_30px_-12px_rgba(0,0,0,0.35)] border border-black/10"
                >
                  I AM READY TO CONNECTS FOR SALES DEVELOPMENT →
                </motion.button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modigie Section */}
      <section className="bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 w-full text-black py-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48 relative">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-black/10" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Reserved for future content */}
        </div>
        {/* Bottom Cards (placeholder retained to keep structure) */}
      </section>

      {/* FAQ Section */}
      <section className="min-h-screen w-full flex items-stretch bg-[#0E1F1C] relative">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" />
        <div className="w-full flex flex-col md:flex-row">
          {/* Left Side - Title */}
          <div className="bg-[#0E1F1C] md:w-2/5 p-10 flex flex-col items-start">
            <div className="sticky top-28">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Sales Development FAQs
              </h1>
              <div className="mt-4 h-1 w-20 bg-[#FFD800] rounded" />
              <p className="mt-4 text-white/60">
                Everything needed to align, engage, measure, and scale.
              </p>
            </div>
          </div>

          {/* Right Side - FAQ Content */}
          <div className="md:w-3/5 p-6 md:p-10">
            <div className="space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openQuestion === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
                  >
                    <button
                      className="flex items-center w-full text-left py-4 px-4 focus:outline-none group"
                      onClick={() => toggleQuestion(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <span className="text-white flex-shrink-0 mr-3">
                        <Plus
                          size={22}
                          className={
                            isOpen
                              ? "rotate-45 transition-transform"
                              : "transition-transform"
                          }
                        />
                      </span>
                      <span className="text-white font-medium group-hover:text-yellow-200 transition-colors">
                        {item.question}
                      </span>
                    </button>

                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="px-4"
                    >
                      {isOpen && (
                        <div className="pb-5 pt-1 pr-2 text-gray-300">
                          <p className="leading-relaxed">{item.answer}</p>
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

      {/* Final CTA */}
      <section
        className="w-full min-h-[320px] md:min-h-[420px] lg:min-h-[520px] bg-cover bg-center relative flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/connectus.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white flex flex-col items-center"
        >
          <Link
            href="/contact"
            className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold group"
          >
            <span className="text-yellow-400 drop-shadow">Connect</span>
            <motion.span
              className="ml-3 w-9 h-9 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition duration-300 ring-1 ring-black/10 shadow-[0_16px_40px_-16px_rgba(255,216,0,0.7)]"
              whileHover={{ scale: 1.15, rotate: 45 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight className="text-black w-5 h-5 md:w-6 md:h-6" />
            </motion.span>
          </Link>
          <p className="text-white text-2xl sm:text-3xl md:text-4xl mt-2 font-medium">
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

export default SalesDevelopment;
