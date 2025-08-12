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

// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight, Plus, X, Loader2 } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
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
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formResult, setFormResult] = useState({ status: null, message: "" });

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

//   // Modal accessibility helpers
//   const modalRef = useRef(null);
//   useEffect(() => {
//     function onKeyDown(e) {
//       if (e.key === "Escape") setIsFormOpen(false);
//     }
//     if (isFormOpen) {
//       document.addEventListener("keydown", onKeyDown);
//       // Prevent background scroll
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.removeEventListener("keydown", onKeyDown);
//       document.body.style.overflow = "";
//     };
//   }, [isFormOpen]);

//   const handleOpenForm = (e) => {
//     e?.preventDefault?.();
//     setFormResult({ status: null, message: "" });
//     setIsFormOpen(true);
//   };

//   const handleCloseForm = () => {
//     if (!isSubmitting) setIsFormOpen(false);
//   };

//   // Web3Forms submission
//   async function onSubmit(e) {
//     e.preventDefault();
//     if (isSubmitting) return;
//     setIsSubmitting(true);
//     setFormResult({ status: null, message: "" });

//     const form = e.target;
//     const formData = new FormData(form);

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await res.json();

//       if (data.success) {
//         setFormResult({
//           status: "success",
//           message:
//             "Thanks! Your request has been received. We’ll be in touch shortly.",
//         });
//         form.reset();
//       } else {
//         setFormResult({
//           status: "error",
//           message:
//             data.message || "Something went wrong. Please try again later.",
//         });
//       }
//     } catch (err) {
//       setFormResult({
//         status: "error",
//         message: "Network error. Please check your connection and try again.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   // Form component
//   const FormModal = () => {
//     return (
//       <AnimatePresence>
//         {isFormOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={handleCloseForm}
//             />
//             {/* Modal */}
//             <motion.div
//               role="dialog"
//               aria-modal="true"
//               aria-labelledby="sales-form-title"
//               className="fixed z-[80] inset-0 flex items-center justify-center p-4"
//               initial={{ opacity: 0, scale: 0.98, y: 12 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.98, y: 12 }}
//             >
//               <div
//                 className="relative w-full max-w-2xl rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-black/5 overflow-hidden"
//                 onClick={(e) => e.stopPropagation()}
//                 ref={modalRef}
//               >
//                 {/* Accent top bar */}
//                 <div className="h-1 w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500" />
//                 {/* Header */}
//                 <div className="p-6 md:p-7 flex items-start justify-between">
//                   <div>
//                     <h2
//                       id="sales-form-title"
//                       className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight"
//                     >
//                       Tell us about your sales goals
//                     </h2>
//                     <p className="mt-1 text-gray-600">
//                       Share a few details and we’ll get back within 1 business day.
//                     </p>
//                   </div>
//                   <button
//                     aria-label="Close form"
//                     onClick={handleCloseForm}
//                     className="rounded-full p-2 hover:bg-gray-100 transition"
//                     disabled={isSubmitting}
//                   >
//                     <X className="w-5 h-5 text-gray-700" />
//                   </button>
//                 </div>

//                 {/* Body */}
//                 <div className="px-6 md:px-7 pb-6 md:pb-7">
//                   <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
//                     {/* Hidden inputs for Web3Forms */}
//                     <input type="hidden" name="access_key" value="e505fedc-14ad-49ed-834f-32cd23ad6136" />
//                     <input type="hidden" name="subject" value="New Sales Development Inquiry" />
//                     <input type="hidden" name="from_name" value="Sales Dev Form" />
//                     <input type="hidden" name="redirect" value="" />
//                     <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

//                     {/* Name */}
//                     <div className="col-span-1">
//                       <label className="block text-sm font-medium text-gray-800 mb-1">
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         required
//                         placeholder="Alex Johnson"
//                         className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
//                       />
//                     </div>

//                     {/* Email */}
//                     <div className="col-span-1">
//                       <label className="block text-sm font-medium text-gray-800 mb-1">
//                         Work Email
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         placeholder="alex@company.com"
//                         className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
//                       />
//                     </div>

//                     {/* Phone */}
//                     <div className="col-span-1">
//                       <label className="block text-sm font-medium text-gray-800 mb-1">
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         placeholder="+1 555 123 4567"
//                         className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
//                       />
//                     </div>

//                     {/* Company */}
//                     <div className="col-span-1">
//                       <label className="block text-sm font-medium text-gray-800 mb-1">
//                         Company
//                       </label>
//                       <input
//                         type="text"
//                         name="company"
//                         placeholder="Company Inc."
//                         className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
//                       />
//                     </div>

//                     {/* Role */}
//                     <div className="col-span-1">
//                       <label className="block text-sm font-medium text-gray-800 mb-1">
//                         Role
//                       </label>
//                       <input
//                         type="text"
//                         name="role"
//                         placeholder="Head of Sales"
//                         className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
//                       />
//                     </div>

//                     {/* Monthly SQL Goal */}
//                     <div className="col-span-1">
//                       <label className="block text-sm font-medium text-gray-800 mb-1">
//                         Monthly SQL Goal
//                       </label>
//                       <select
//                         name="monthly_sql_goal"
//                         className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
//                         defaultValue=""
//                       >
//                         <option value="" disabled>
//                           Select a range
//                         </option>
//                         <option value="1-10">1-10</option>
//                         <option value="11-25">11-25</option>
//                         <option value="26-50">26-50</option>
//                         <option value="51-100">51-100</option>
//                         <option value="100+">100+</option>
//                       </select>
//                     </div>

//                     {/* Message */}
//                     <div className="col-span-1 md:col-span-2">
//                       <label className="block text-sm font-medium text-gray-800 mb-1">
//                         What are you looking to achieve?
//                       </label>
//                       <textarea
//                         name="message"
//                         rows={4}
//                         placeholder="Share any specifics about your ICP, current outreach challenges, or desired timelines."
//                         className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
//                       ></textarea>
//                     </div>

//                     {/* Page context */}
//                     <input type="hidden" name="page" value="Sales Development" />
//                     <input type="hidden" name="timestamp" value={new Date().toISOString()} />

//                     {/* Result message */}
//                     <div className="col-span-1 md:col-span-2">
//                       <AnimatePresence>
//                         {formResult.status === "success" && (
//                           <motion.div
//                             initial={{ opacity: 0, y: 6 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: 6 }}
//                             className="rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 px-4 py-3"
//                           >
//                             {formResult.message}
//                           </motion.div>
//                         )}
//                         {formResult.status === "error" && (
//                           <motion.div
//                             initial={{ opacity: 0, y: 6 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: 6 }}
//                             className="rounded-xl border border-red-200 bg-red-50 text-red-700 px-4 py-3"
//                           >
//                             {formResult.message}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     {/* Actions */}
//                     <div className="col-span-1 md:col-span-2 flex items-center justify-between gap-3 pt-1">
//                       <p className="text-xs text-gray-500">
//                         By submitting, you agree to be contacted regarding your request.
//                       </p>
//                       <motion.button
//                         whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
//                         whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="inline-flex items-center gap-2 bg-[#FFD800] text-black font-semibold py-3 px-6 rounded-full border border-black/10 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.25)] transition disabled:opacity-70"
//                       >
//                         {isSubmitting ? (
//                           <>
//                             <Loader2 className="w-4 h-4 animate-spin" />
//                             Sending...
//                           </>
//                         ) : (
//                           <>
//                             Submit Request
//                             <ArrowUpRight className="w-5 h-5" />
//                           </>
//                         )}
//                       </motion.button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     );
//   };

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

//       {/* Page background accent glow */}
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
//             <span className="text-[#FFD800]">qualified opportunities.</span>
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
//             <Link href="/" passHref className="block" onClick={handleOpenForm}>
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
//                  CONNECTS FOR SALES DEVELOPMENT →
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
//           {/* Reserved for future content */}
//         </div>
//         {/* Bottom Cards (placeholder retained to keep structure) */}
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

//       {/* Modal mount point */}
//       <FormModal />
//     </>
//   );
// }

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, X, Loader2, Users, Target, TrendingUp, Clock } from "lucide-react";
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
      question: "What is sales development and how does it differ from traditional sales?",
      answer: "Sales development focuses on identifying and qualifying leads before passing them to account executives. Unlike traditional sales which handles the entire sales cycle, SDRs specialize in the early stages of prospecting and outreach to build a healthy pipeline of qualified opportunities ready for closing."
    },
    {
      question: "What tools and technologies are essential for an effective sales development team?",
      answer: "Key tools include CRM platforms (like Salesforce, HubSpot), sales engagement platforms (like Outreach or SalesLoft), prospecting tools (like LinkedIn Sales Navigator, ZoomInfo), email verification tools, conversation intelligence software, and AI-powered personalization tools to analyze calls and improve techniques."
    },
    {
      question: "How can we measure the success of our sales development efforts?",
      answer: "Important metrics include number of qualified leads generated, outreach activity rates (calls, emails, social touches), response rates, meeting-to-opportunity conversion rates, pipeline contribution, cost per lead, and sales velocity. Tracking these KPIs helps optimize your SDR team's performance and ROI."
    },
    {
      question: "What makes an effective sales development representative (SDR)?",
      answer: "Top SDRs combine persistence with emotional intelligence. They need excellent communication skills, the ability to research prospects thoroughly, resilience to handle rejection, curiosity to understand customer pain points, and the capacity to quickly position solutions that resonate with specific buyer personas."
    },
    {
      question: "How should sales development align with marketing for maximum impact?",
      answer: "Close alignment ensures SDRs follow up on marketing-qualified leads within minutes. Shared metrics, regular communication between teams, coordinated messaging based on campaign themes, and integrated tech stacks are crucial. Marketing should provide SDRs with relevant content, battle cards, and real-time intent signals."
    },
    {
      question: "What outreach strategies work best in today's sales development environment?",
      answer: "Multi-channel approaches combining personalized email sequences, LinkedIn outreach, phone calls, and video messages work best. The key is timely, relevant outreach that focuses on the prospect's specific challenges rather than product features, with proper sequencing and follow-up cadences."
    },
    {
      question: "How can AI and automation enhance sales development processes?",
      answer: "AI can help prioritize leads based on propensity to buy, suggest optimal outreach times, generate personalized email copy, analyze call transcripts for coaching opportunities, automate data entry and CRM updates, and provide real-time battle cards during conversations—allowing SDRs to focus on high-value human interactions."
    }
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
          message: "Thanks! Your request has been received. We'll be in touch shortly.",
        });
        form.reset();
      } else {
        setFormResult({
          status: "error",
          message: data.message || "Something went wrong. Please try again later.",
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
                background: "radial-gradient(90% 120% at 50% 50%, rgba(17,17,17,0.85) 0%, rgba(0,0,0,0.75) 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='.85'/%3E%3C/svg%3E\")",
                }}
              />
            </motion.div>

            {/* Modal */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="sales-form-title"
              className="fixed z-[80] inset-0 flex items-center justify-center p-3 sm:p-4 md:p-6"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
            >
              <div
                className="relative w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl rounded-2xl bg-white/96 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] ring-1 ring-black/10 overflow-hidden max-h-[95vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                ref={modalRef}
              >
                {/* Accent top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500" />

                {/* Header */}
                <div className="p-4 sm:p-6 lg:p-8 flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h2
                      id="sales-form-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight"
                    >
                      Accelerate Your Sales Pipeline
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                      Share your sales development goals and we'll craft a custom strategy for your team.
                    </p>
                  </div>
                  <button
                    aria-label="Close form"
                    onClick={handleCloseForm}
                    className="flex-shrink-0 rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
                    disabled={isSubmitting}
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

                {/* Body */}
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                  {/* Status indicator */}
                  <div className="mb-4 sm:mb-6 flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Typically responds within 2 hours</span>
                  </div>

                  <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
                    {/* Hidden inputs for Web3Forms */}
                    <input type="hidden" name="access_key" value="e505fedc-14ad-49ed-834f-32cd23ad6136" />
                    <input type="hidden" name="subject" value="New Sales Development Inquiry" />
                    <input type="hidden" name="from_name" value="Sales Dev Form" />
                    <input type="hidden" name="redirect" value="" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                    {/* Form grid - responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                      {/* Name */}
                      <div className="sm:col-span-2 lg:col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Alex Johnson"
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all duration-200"
                        />
                      </div>

                      {/* Email */}
                      <div className="sm:col-span-2 lg:col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="alex@company.com"
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all duration-200"
                        />
                      </div>

                      {/* Phone */}
                      <div className="sm:col-span-1 lg:col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+1 555 123 4567"
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all duration-200"
                        />
                      </div>

                      {/* Company */}
                      <div className="sm:col-span-1 lg:col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          placeholder="Company Inc."
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all duration-200"
                        />
                      </div>

                      {/* Role */}
                      <div className="sm:col-span-1 lg:col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Your Role
                        </label>
                        <select
                          name="role"
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all duration-200"
                          defaultValue=""
                        >
                          <option value="" disabled>Select your role</option>
                          <option value="CEO/Founder">CEO/Founder</option>
                          <option value="VP of Sales">VP of Sales</option>
                          <option value="Sales Director">Sales Director</option>
                          <option value="Sales Manager">Sales Manager</option>
                          <option value="Marketing Director">Marketing Director</option>
                          <option value="Revenue Operations">Revenue Operations</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Company Size */}
                      <div className="sm:col-span-1 lg:col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Company Size
                        </label>
                        <select
                          name="company_size"
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all duration-200"
                          defaultValue=""
                        >
                          <option value="" disabled>Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-1000">201-1,000 employees</option>
                          <option value="1000+">1,000+ employees</option>
                        </select>
                      </div>

                      {/* Current Challenge */}
                      <div className="sm:col-span-2 lg:col-span-3">
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          What's your biggest sales development challenge? *
                        </label>
                        <select
                          name="challenge"
                          required
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all duration-200"
                          defaultValue=""
                        >
                          <option value="" disabled>Select your primary challenge</option>
                          <option value="generating-qualified-leads">Generating enough qualified leads</option>
                          <option value="low-response-rates">Low email/call response rates</option>
                          <option value="scaling-outreach">Scaling outreach efforts</option>
                          <option value="lead-qualification">Better lead qualification process</option>
                          <option value="sales-marketing-alignment">Sales & marketing alignment</option>
                          <option value="crm-process">CRM and process optimization</option>
                          <option value="team-performance">SDR team performance & coaching</option>
                          <option value="other">Other challenge</option>
                        </select>
                      </div>

                      {/* Monthly Lead Goal */}
                      <div className="sm:col-span-1 lg:col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Monthly Lead Goal
                        </label>
                        <select
                          name="monthly_lead_goal"
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all duration-200"
                          defaultValue=""
                        >
                          <option value="" disabled>Select target</option>
                          <option value="1-25">1-25 qualified leads</option>
                          <option value="26-50">26-50 qualified leads</option>
                          <option value="51-100">51-100 qualified leads</option>
                          <option value="101-200">101-200 qualified leads</option>
                          <option value="200+">200+ qualified leads</option>
                        </select>
                      </div>

                      {/* Timeline */}
                      <div className="sm:col-span-1 lg:col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all duration-200"
                          defaultValue=""
                        >
                          <option value="" disabled>When to start?</option>
                          <option value="immediately">Immediately</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="2-3-months">2-3 months</option>
                          <option value="evaluating">Just evaluating</option>
                        </select>
                      </div>

                      {/* Budget Range */}
                      <div className="sm:col-span-1 lg:col-span-1">
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Monthly Budget Range
                        </label>
                        <select
                          name="budget"
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all duration-200"
                          defaultValue=""
                        >
                          <option value="" disabled>Select budget range</option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k+">$50,000+</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your ideal customer profile, current tools, team size, or any specific requirements..."
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 transition-all duration-200 resize-vertical"
                      />
                    </div>

                    {/* Hidden form context */}
                    <input type="hidden" name="page" value="Sales Development" />
                    <input type="hidden" name="timestamp" value={new Date().toISOString()} />

                    {/* Result message */}
                    <AnimatePresence>
                      {formResult.status === "success" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 px-4 py-3 flex items-center gap-3"
                        >
                          <div className="h-2 w-2 rounded-full bg-emerald-400" />
                          {formResult.message}
                        </motion.div>
                      )}
                      {formResult.status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="rounded-xl border border-red-200 bg-red-50 text-red-700 px-4 py-3 flex items-center gap-3"
                        >
                          <div className="h-2 w-2 rounded-full bg-red-400" />
                          {formResult.message}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                      <p className="text-xs text-gray-500 leading-relaxed">
                        By submitting, you agree to be contacted about our sales development services. 
                        <br className="hidden sm:block" />
                        We respect your privacy and never share your information.
                      </p>
                      <motion.button
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD800] hover:bg-[#ffea00] text-black font-semibold py-3 px-8 rounded-full border border-black/10 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.25)] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed min-w-[160px]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Get My Strategy</span>
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
        <title>Sales Development & Pipeline Generation | Modigie</title>
        <meta
          name="description"
          content="Accelerate your B2B sales pipeline with proven sales development strategies. Expert SDR services, multi-channel outreach, and qualified lead generation that drives revenue growth."
        />
        <meta
          name="keywords"
          content="sales development, SDR services, pipeline generation, B2B lead generation, sales outreach, qualified leads, sales development representative, Modigie"
        />
        <link rel="canonical" href="/services/sales-development" />
        <meta property="og:title" content="Sales Development & Pipeline Generation | Modigie" />
        <meta
          property="og:description"
          content="Accelerate your B2B sales pipeline with proven sales development strategies. Expert SDR services, multi-channel outreach, and qualified lead generation."
        />
        <meta property="og:url" content="/services/sales-development" />
        <meta property="og:image" content="/images/og-sales-development.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sales Development & Pipeline Generation | Modigie" />
        <meta
          name="twitter:description"
          content="Accelerate your B2B sales pipeline with proven sales development strategies. Expert SDR services and qualified lead generation."
        />
        <meta name="twitter:image" content="/images/twitter-sales-development.jpg" />
      </Head>

      {/* Background accent elements */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute -top-10 right-0 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-[#FFD800]/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-56 w-56 sm:h-80 sm:w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <Upnav />
      <Lownav />

      {/* Hero Section - Enhanced Responsiveness */}
      <section
        className="relative w-full min-h-[85vh] sm:min-h-[88vh] mt-16 sm:mt-20 md:mt-24 bg-cover bg-center flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 overflow-hidden"
        style={{ backgroundImage: "url('/images/saleshero.jpg')" }}
      >
        {/* Enhanced overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/65" />
        
        {/* Decorative borders */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-left text-white max-w-5xl w-full"
        >
          {/* Brand identifier */}
          <div className="flex items-center mb-4 sm:mb-6 mt-12">
            <div className="bg-[#FFD800] text-black font-bold text-base sm:text-lg lg:text-xl rounded-xl sm:rounded-2xl w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center mr-3 shadow-[0_10px_30px_-10px_rgba(255,216,0,0.7)] ring-1 ring-black/10">
              SD
            </div>
            <span className="text-white/90 text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide">
              sales development
            </span>
          </div>

          {/* Main headline - Responsive typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-4 sm:mb-6 drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
            Sales development that
            <br className="hidden sm:block" />
            <span className="sm:block">fills your pipeline with</span>
            <br className="hidden sm:block" />
            <span className="text-[#FFD800]">qualified opportunities.</span>
          </h1>

          {/* Subheading for mobile */}
          <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl leading-relaxed block sm:hidden">
            Transform prospects into pipeline with data-driven outreach strategies and expert SDR services.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleOpenForm}
            className="group bg-[#FFD800] hover:bg-[#ffea00] text-black text-base sm:text-lg font-semibold py-3 px-6 sm:py-3.5 sm:px-8 rounded-full shadow-[0_14px_30px_-12px_rgba(255,216,0,0.8)] ring-1 ring-black/10 transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>GET STARTED TODAY</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

        {/* Decorative floating elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute -right-8 sm:-right-16 top-10 sm:top-20 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-[#FFD800] blur-3xl"
        />
      </section>

      {/* Value Proposition Section */}
      <section className="w-full bg-[#0B1715] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 relative">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-8 sm:mb-10 lg:mb-12 tracking-tight"
          >
            Proven strategies to accelerate pipeline growth,
            <br className="hidden sm:block" />
            <span className="text-[#FFD800]">guaranteed results.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 bg-white/5 backdrop-blur-sm shadow-[0_25px_50px_-12px_rgba(0,0,0,0.55)]"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-2/5">
                <h3 className="text-[#FFD800] font-bold text-lg sm:text-xl mb-4 uppercase tracking-wide">
                  Our Approach
                </h3>
                <div className="h-1 w-16 bg-[#FFD800] rounded mb-6" />
                
                {/* Key stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 rounded-xl bg-white/5">
                    <div className="text-2xl font-bold text-[#FFD800] mb-1">3.2x</div>
                    <div className="text-xs text-white/70">Response Rate Increase</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/5">
                    <div className="text-2xl font-bold text-[#FFD800] mb-1">78%</div>
                    <div className="text-xs text-white/70">Lead Quality Improvement</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-3/5 space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg leading-relaxed text-white/90">
                  Our sales development methodology combines <strong>advanced data analytics</strong> with 
                  human-centric outreach to identify and engage decision-makers who are actively 
                  evaluating solutions like yours.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-white/90">
                  With <strong>proven frameworks</strong> developed across 200+ successful campaigns, 
                  we consistently deliver 40% more qualified opportunities while reducing 
                  cost-per-lead by an average of 35%.
                </p>
                
                {/* Key benefits list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {[
                    "AI-powered prospect identification",
                    "Multi-touch outreach sequences",
                    "Real-time performance optimization",
                    "Complete CRM integration"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FFD800] flex-shrink-0" />
                      <span className="text-white/80 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="w-full bg-[#0B1715] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 text-center relative">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent" />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFD800] mb-8 sm:mb-10 lg:mb-12"
        >
          COMPLETE SALES DEVELOPMENT SOLUTION
        </motion.h2>

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] bg-gradient-to-b from-white/5 to-white/0 p-1 sm:p-2"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
              <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 rounded-xl sm:rounded-2xl" />
              <Image
                src="/images/work1.webp"
                alt="Sales Development Process Flow"
                width={1600}
                height={1000}
                className="w-full h-auto object-contain"
                priority={false}
              />
            </div>
          </motion.div>
          <p className="text-white/70 text-xs sm:text-sm mt-3 sm:mt-4 px-2">
            End-to-end process from research and targeting to qualified handoffs and closed deals.
          </p>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="w-full overflow-hidden">
        <div className="bg-[url('/images/bg2.webp')] bg-[#0E1F1C] bg-cover bg-center w-full text-black py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 relative z-10">
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 sm:mb-8 drop-shadow"
            >
              Targeted outreach strategies
              <br className="hidden sm:block" /> 
              tailored to your ideal customers.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-col lg:flex-row gap-4 items-start mb-8 sm:mb-10 p-4 sm:p-6 bg-white/70 backdrop-blur rounded-2xl shadow-[0_16px_40px_-12px_rgba(0,0,0,0.2)] border border-black/5"
            >
              <div className="lg:w-1/3">
                <p className="text-base sm:text-lg text-black font-semibold mb-2 lg:mb-0">
                  Our Services
                </p>
              </div>
              <div className="lg:w-2/3">
                <p className="text-base sm:text-lg text-black/80 leading-relaxed">
                  Our specialized team handles every aspect of sales development—from deep prospect 
                  research and targeted list building to sophisticated multi-channel outreach and 
                  thorough qualification—ensuring seamless handoffs to your sales team so you can 
                  <strong> focus on closing while we keep your pipeline consistently full</strong>.
                </p>
              </div>
            </motion.div>

            {/* Enhanced Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-10 text-black">
              {[
                {
                  icon: Target,
                  title: "Precision Targeting",
                  content: "Advanced ICP identification using firmographic, technographic, and intent data to reach decision-makers ready to buy.",
                  highlight: "3.5x higher connect rates"
                },
                {
                  icon: Users,
                  title: "Multi-Channel Outreach",
                  content: "Coordinated email, phone, LinkedIn, and video outreach—strategically sequenced and personalized for each prospect.",
                  highlight: "7-12 touchpoint sequences"
                },
                {
                  icon: TrendingUp,
                  title: "Conversation Intelligence",
                  content: "AI-powered analysis of every interaction to continuously refine messaging and improve conversion rates.",
                  highlight: "40% better qualification rates"
                },
                {
                  icon: Clock,
                  title: "Rapid Response System",
                  content: "Speed-to-lead optimization with automated alert systems ensuring prospects are contacted within 5 minutes of showing interest.",
                  highlight: "5-minute response guarantee"
                },
                {
                  icon: Users,
                  title: "Expert SDR Team",
                  content: "Dedicated sales development representatives with industry expertise and proven track records in B2B lead generation.",
                  highlight: "10+ years average experience"
                },
                {
                  icon: TrendingUp,
                  title: "Performance Analytics",
                  content: "Real-time dashboards and detailed reporting on all KPIs, with weekly strategy optimization sessions.",
                  highlight: "Weekly optimization calls"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={hoverEffect}
                  variants={cardVariants}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-[#FFEE7A] p-6 sm:p-8 rounded-2xl shadow-[0_18px_40px_-16px_rgba(0,0,0,0.35)] border border-black/10 overflow-hidden group"
                >
                  {/* Background decorative element */}
                  <div className="absolute -top-8 -right-8 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-yellow-300 blur-2xl opacity-70 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/80 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-extrabold text-lg sm:text-xl mb-3 text-gray-900 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-800 leading-relaxed text-sm sm:text-base mb-4">
                      {service.content}
                    </p>
                    
                    {/* Highlight badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/60 text-xs font-medium text-gray-700 border border-gray-300">
                      ✨ {service.highlight}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.5 }}
              className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              <motion.button
                onClick={handleOpenForm}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffea00",
                  boxShadow: "0 20px 45px -18px rgba(0,0,0,0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-[#ffd800] hover:bg-[#ffea00] text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 text-base sm:text-lg shadow-[0_14px_30px_-12px_rgba(0,0,0,0.35)] border border-black/10 inline-flex items-center justify-center gap-2"
              >
                <span>START GENERATING QUALIFIED LEADS</span>
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results/Testimonials Section */}
      <section className="bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 w-full text-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 relative">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-black/10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-12 text-black"
          >
            Proven Results Across Industries
          </motion.h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              { number: "450+", label: "Qualified Leads Generated Monthly", desc: "Across all client accounts" },
              { number: "73%", label: "Average Meeting Show Rate", desc: "Industry standard is 45%" },
              { number: "2.8x", label: "Pipeline Velocity Increase", desc: "Faster sales cycle completion" },
              { number: "35%", label: "Cost Per Lead Reduction", desc: "Compared to in-house teams" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/80 backdrop-blur p-6 sm:p-8 rounded-2xl shadow-[0_16px_40px_-16px_rgba(0,0,0,0.3)] border border-white/50"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-black mb-2">{stat.number}</div>
                <div className="text-black font-semibold mb-2 text-sm sm:text-base">{stat.label}</div>
                <div className="text-black/70 text-xs sm:text-sm">{stat.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Case Study Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/90 backdrop-blur rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.4)] text-left"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <span className="text-white font-bold text-lg sm:text-xl">TC</span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2">TechCorp Solutions</h3>
                <p className="text-black/70 text-sm">B2B SaaS Company</p>
              </div>
              <div className="lg:w-2/3">
                <blockquote className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4 text-black/90">
                  "Modigie transformed our sales development completely. In just 6 months, we went from 
                  struggling to find qualified prospects to having a consistent flow of 80+ qualified 
                  meetings per month. Their team became an extension of ours."
                </blockquote>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-black/80">
                  <div><strong>Before:</strong> 12 qualified leads/month</div>
                  <div><strong>After:</strong> 80+ qualified meetings/month</div>
                  <div><strong>ROI:</strong> 340% in first year</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="min-h-screen w-full flex items-stretch bg-[#0E1F1C] relative">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" />
        
        <div className="w-full flex flex-col lg:flex-row">
          {/* Left Side - Title */}
          <div className="bg-[#0E1F1C] lg:w-2/5 p-6 sm:p-8 lg:p-10 flex flex-col items-start">
            <div className="lg:sticky lg:top-28">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Sales Development
                <br />
                <span className="text-[#FFD800]">FAQs</span>
              </h1>
              <div className="mt-4 h-1 w-16 sm:w-20 bg-[#FFD800] rounded" />
              <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed max-w-sm">
                Everything you need to know about aligning, engaging, measuring, and scaling your sales development efforts.
              </p>
              
              {/* Quick contact for mobile */}
              <button
                onClick={handleOpenForm}
                className="mt-6 lg:hidden bg-[#FFD800] text-black font-semibold py-3 px-6 rounded-full text-sm inline-flex items-center gap-2"
              >
                Get Custom Strategy
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side - FAQ Content */}
          <div className="lg:w-3/5 p-6 sm:p-8 lg:p-10">
            <div className="space-y-3 sm:space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openQuestion === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/10 transition-colors"
                  >
                    <button
                      className="flex items-center w-full text-left py-4 sm:py-5 px-4 sm:px-6 focus:outline-none group"
                      onClick={() => toggleQuestion(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <span className="text-white flex-shrink-0 mr-3 sm:mr-4">
                        <Plus
                          size={20}
                          className={
                            isOpen
                              ? "rotate-45 transition-transform duration-200"
                              : "transition-transform duration-200"
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
                      animate={{ 
                        height: isOpen ? "auto" : 0, 
                        opacity: isOpen ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {isOpen && (
                        <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2">
                          <div className="ml-8 sm:ml-10 text-gray-300 text-sm sm:text-base leading-relaxed">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA for desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-12 hidden lg:block"
            >
              <div className="bg-gradient-to-r from-[#FFD800]/10 to-yellow-500/10 rounded-2xl p-6 border border-yellow-400/20">
                <h3 className="text-white font-bold text-lg mb-2">Still have questions?</h3>
                <p className="text-white/70 text-sm mb-4">
                  Get a personalized sales development strategy consultation.
                </p>
                <button
                  onClick={handleOpenForm}
                  className="bg-[#FFD800] text-black font-semibold py-2 px-6 rounded-full text-sm inline-flex items-center gap-2 hover:bg-[#ffea00] transition-colors"
                >
                  Schedule Consultation
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="w-full min-h-[280px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[520px] bg-cover bg-center relative flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/connectus.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/50" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white flex flex-col items-center px-4"
        >
          <button
            onClick={handleOpenForm}
            className="flex items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold group cursor-pointer"
          >
            <span className="text-yellow-400 drop-shadow-lg">Connect</span>
            <motion.span
              className="ml-2 sm:ml-3 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition duration-300 ring-1 ring-black/10 shadow-[0_16px_40px_-16px_rgba(255,216,0,0.7)]"
              whileHover={{ scale: 1.15, rotate: 45 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight className="text-black w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.span>
          </button>
          <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 font-medium drop-shadow">
            with us today
          </p>
          <p className="text-white/80 text-sm sm:text-base mt-3 max-w-md leading-relaxed">
            Ready to fill your pipeline with qualified opportunities? Let's discuss your sales development goals.
          </p>
        </motion.div>

        {/* Decorative frame */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-none" />
      </section>

      <Footer />
      <FormModal />
    </>
  );
}

export default SalesDevelopment;
