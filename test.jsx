// "use client"; // <
// import { motion } from "framer-motion";
// import { ArrowUpRight, Plus } from "lucide-react";
// import { useState } from "react";
// import Head from 'next/head'; // Import Head for SEO
// import Link from 'next/link'; // Import Link for internal navigation
// import Image from 'next/image'; // Import Image for image optimization
// import dynamic from 'next/dynamic'; // Import dynamic for lazy loading components

// // Define a simple LoadingSkeleton component for dynamic imports
// const LoadingSkeleton = () => (
//   <div className="flex items-center justify-center h-20 bg-gray-800 text-white">
//     Loading navigation...
//   </div>
// );

// // Dynamically import Lownav and Upnav for lazy loading
// const LazyLoadedLownav = dynamic(() => import('../../components/Lownav'), { ssr: false }); // Adjust path if necessary
// const DynamicUpnav = dynamic(() => import('../../components/Upnav'), {
//   loading: () => <LoadingSkeleton />,
//   ssr: false
// }); // Adjust path if necessary

// const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });

// function B2BcontentSyndication() {
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
//       question: 'What is content syndication, and how does it work in B2B marketing?',
//       answer: 'Content syndication in B2B marketing involves distributing your content across third-party platforms to reach a broader audience and generate qualified leads. These platforms publish your content and share lead data based on user interactions, helping to fill your sales funnel with relevant prospects.'
//     },
//     {
//       question: 'What types of content are most effective for syndication campaigns?',
//       answer: 'Whitepapers, eBooks, case studies, webinars, and research reports are typically the most effective content types for syndication. These resources offer value to your target audience and are often gated, allowing you to collect lead information.'
//     },
//     {
//       question: 'How can I ensure my content reaches the right audience?',
//       answer: 'To reach the right audience, define your ideal customer profile (ICP), use precise targeting criteria like industry, job title, company size, and geography, and partner with syndication providers who offer intent data and firmographic targeting.'
//     },
//     {
//       question: 'What metrics should I track to measure the success of a content syndication campaign?',
//       answer: 'Key metrics include the number of leads generated, lead quality, conversion rates, engagement levels (such as email open and click-through rates), and ROI. Tracking these helps determine the effectiveness and refine future campaigns.'
//     },
//     {
//       question: 'What follow-up strategies work best for nurturing syndicated leads?',
//       answer: 'Use multi-touch nurture campaigns with personalized emails, follow-up calls, and retargeting ads. Align your messaging with the content the lead engaged with and educate them further through the sales funnel with additional relevant content.'
//     },
//     {
//       question: 'How can I use content syndication leads to support account-based marketing (ABM) strategies?',
//       answer: 'Use the leads to identify high-value accounts showing intent, then align sales and marketing efforts to engage those accounts with personalized content, messaging, and outreach strategies tailored to their specific needs and challenges.'
//     },
//     {
//       question: 'What is it like working with Kulan on a content syndication campaign?',
//       answer: 'Working with Kulan provides a hands-on, consultative experience. They tailor targeting strategies, provide transparency in lead reporting, and offer continuous optimization to ensure your campaign generates quality leads and meets your business objectives.'
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>B2B Content Syndication Services | Your Company Name</title>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta
//           name="description"
//           content="Drive qualified B2B leads with our content syndication services. Distribute whitepapers, eBooks & case studies to targeted audiences."
//         />
//         <meta
//           name="keywords"
//           content="B2B content syndication, lead generation, content distribution, B2B marketing, content distribution strategy, B2B lead generation services"
//         />
//         <link rel="canonical" href="[Your Canonical URL]" /> {/* IMPORTANT: Replace with the actual URL of this page */}

//         {/* Open Graph Meta Tags for Social Media Sharing */}
//         <meta property="og:title" content="B2B Content Syndication Services | Your Company Name" />
//         <meta
//           property="og:description"
//           content="Drive qualified B2B leads with our targeted content syndication solutions."
//         />
//         <meta property="og:image" content="/images/syndication-og.jpg" /> {/* Replace with a suitable OG image */}
//         <meta property="og:url" content="[Your Canonical URL]" /> {/* IMPORTANT: Replace with the actual URL of this page */}
//         <meta property="og:type" content="website" />

//         {/* Twitter Card Meta Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="B2B Content Syndication Services | Your Company Name" />
//         <meta
//           name="twitter:description"
//           content="Drive qualified B2B leads with our targeted content syndication solutions."
//         />
//         <meta name="twitter:image" content="/images/syndication-og.jpg" /> {/* Replace with a suitable Twitter image */}

//         {/* You can add more specific meta tags here, e.g., for schema markup (JSON-LD) */}
//         {/* Example for FAQPage Schema, uncomment and replace with your data: */}
//         {/*
//         <script type="application/ld+json">
//           {`
//           {
//             "@context": "https://schema.org",
//             "@type": "FAQPage",
//             "mainEntity": [
//               {
//                 "@type": "Question",
//                 "name": "${faqItems[0].question}",
//                 "acceptedAnswer": {
//                   "@type": "Answer",
//                   "text": "${faqItems[0].answer}"
//                 }
//               },
//               {
//                 "@type": "Question",
//                 "name": "${faqItems[1].question}",
//                 "acceptedAnswer": {
//                   "@type": "Answer",
//                   "text": "${faqItems[1].answer}"
//                 }
//               }
//               // ... add more FAQ items dynamically
//             ]
//           }
//           `}
//         </script>
//         */}
//       </Head>

//       <DynamicUpnav />
//       <LazyLoadedLownav />

//       {/* Hero Section */}
//       <div className="relative w-full min-h-screen mt-24 bg-cover bg-center flex items-center justify-start px-6 sm:px-8 md:px-16 lg:px-32">
//         <Image
//           src="/images/syndication.jpg"
//           alt="B2B Content Syndication Services"
//           fill
//           priority // Load this image with high priority as it's above the fold
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" // Optimize for responsive images
//         />
//         <div className="text-left text-white max-w-4xl relative z-10"> {/* Added z-10 to ensure text is above image */}
//           <div className="flex items-center mb-6">
//             <div className="bg-[#FFD800] text-black font-bold text-xl rounded-full w-14 h-14 flex items-center justify-center mr-3">
//               IQ
//             </div>
//             <span className="text-white text-2xl font-semibold">syndicate</span>
//           </div>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
//             Content syndication <br />
//             that drives audiences <br />
//             <span className="text-[#FFD800]">not just leads.</span>
//           </h1>
//           <button className="bg-[#FFD800] text-black text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
//             GET IN TOUCH
//           </button>
//         </div>
//       </div>

//       {/* Verified Engagement */}
//       <div className="w-full bg-[#0E1F1C] text-white py-20 px-6 sm:px-8 md:px-16 lg:px-32">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
//           Verified engagement with your brand <br />
//           and content, <span className="text-[#FFD700]">guaranteed.</span>
//         </h2>
//         <div className="border-t border-gray-700 pt-12 flex flex-col md:flex-row gap-12">
//           <div className="md:w-1/2">
//             <h3 className="text-[#FFD700] font-bold text-xl mb-4">
//               OUR SOLUTION
//             </h3>
//           </div>
//           <div className="md:w-1/2 text-lg space-y-6">
//             <p>
//               Do more with your content than just share it. We align your
//               content with our already engaged audiences, distributing assets
//               your ideal customers actually want to consume.
//             </p>
//             <p>
//               We’ve spent over two decades building and refining our first-party
//               audiences, giving us unparalleled insights and precision targeting
//               that go far beyond generic third-party data.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Workflow Section */}
//       <div className="w-full bg-[#0f2d26] py-20 px-6 sm:px-8 md:px-16 lg:px-32 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-12">
//           HOW IQSYNDICATE WORKS
//         </h2>
//         <div className="flex justify-center">
//           <Image
//             src="/images/flowchart.png"
//             alt="IQSyndicate Workflow Process"
//             width={1200} // Provide intrinsic width
//             height={630} // Provide intrinsic height
//             loading="lazy" // Ensures image is lazy-loaded
//             className="w-full max-w-6xl object-contain"
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
//               Strategic content placement <br /> tailored to your unique
//               audience.
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
//                 Our team handles all aspects, from audience creation to
//                 placement and distribution, through to campaign management and
//                 quality assurance. All so you can see more revenue from content
//                 syndication while <strong>spending less time on it</strong>.
//               </p>
//             </motion.div>

//             {/* Cards */}
//             <div className="flex flex-col md:flex-row gap-6 mt-10 text-black">
//               {[
//                 {
//                   title: "Contextual Accuracy:",
//                   content:
//                     "Place your brand message in the right editorial context to enhance relevance and credibility.",
//                 },
//                 {
//                   title: "Optimized Channels:",
//                   content:
//                     "Leverage high-performing platforms where your audience spends the most time for better ROI.",
//                 },
//                 {
//                   title: "Brand Safety:",
//                   content:
//                     "Ensure your content appears in trusted environments with full transparency and control.",
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

//             <Link href="/" passHref> {/* Use Link for internal navigation */}
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
//                   I AM READY TO DRIVE REVENUE →
//                 </motion.button>
//               </motion.div>
//             </Link>
//           </motion.div>
//         </section>

//         {/* Case Study Section */}
//         <section className="bg-[#0E1F1C] text-white w-full py-32 px-6 sm:px-12 md:px-20 lg:px-40 xl:px-60 -mt-20">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//             className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16"
//           >
//             <motion.div
//               className="flex-1"
//               initial={{ x: -50, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//             >
//               <p className="uppercase text-[#ffd800] font-semibold text-sm mb-2">
//                 Customer Success Story
//               </p>
//               <h2 className="text-2xl md:text-3xl font-bold mb-6">
//                 Cisco Integrated Channel Program Exceeds Expectations with Kulan
//               </h2>
//               <p className="text-gray-300 mb-8">
//                 With Kulan, Cisco launched a dynamic integrated demand
//                 generation strategy combining display advertising,
//                 direct-to-decision-maker email, and content syndication to
//                 convert buyers and nurture them to a sales-ready stage.
//               </p>
//               <Link href="/" passHref> {/* Use Link for internal navigation */}
//                 <motion.p
//                   whileHover={{ x: 5 }}
//                   className="text-2xl text-white font-semibold inline-block cursor-pointer"
//                 >
//                   READ FULL CASE STUDY →
//                 </motion.p>
//               </Link>
//             </motion.div>

//             {/* Image Section */}
//             <motion.div
//               className="flex-1 max-w-xl"
//               initial={{ x: 50, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             >
//               <motion.div
//                 whileHover={{
//                   scale: 1.02,
//                   boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.5)",
//                 }}
//                 className="w-full rounded-xl shadow-xl overflow-hidden relative"
//                 style={{
//                   marginTop: "-200px",
//                   position: "relative",
//                   zIndex: 20,
//                 }}
//               >
//                 <div className="w-full h-[700px] aspect-[1/3]">
//                   <Image
//                     src="/images/display-ads.webp"
//                     alt="Display Ads"
//                     fill // Use fill to cover the parent div's dimensions
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Example sizes, adjust as needed
//                     className="object-cover rounded-xl"
//                     loading="lazy"
//                   />
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </section>
//       </div>

//       {/* Modigie Section */}
//       <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 w-full text-black py-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <h2 className="text-4xl font-bold leading-tight mb-6">
//               Increase call to connect with direct{" "}
//               <br className="hidden sm:block" />
//               dial mobile data.
//             </h2>
//             <p className="mb-4 text-lg">
//               In the digital hustle, precise contact info is a revenue
//               game-changer. IQappend nails it with Modigie’s real-time data
//               model and the industry’s{" "}
//               <strong>largest active cell phone database</strong>, giving you
//               that competitive edge.
//             </p>
//             <p className="text-lg">
//               Elevating call-to-connection rates, IQappend smoothly blends
//               current mobile contact data into leads from our content
//               syndication services.
//             </p>
//           </div>
//           <div className="flex justify-center">
//             <Image
//               src="/images/phone.webp"
//               alt="Mobile phone with verified contact data"
//               width={300} // Provide intrinsic width
//               height={300} // Provide intrinsic height
//               className="rounded-full border-8 border-yellow-300 shadow-lg max-w-[300px] w-full"
//               loading="lazy"
//             />
//           </div>
//         </div>

//         {/* Bottom Cards */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             {
//               title: "Launch an IQsyndicate campaign",
//               content:
//                 "Let your pharosIQ team know that you are interested in adding confirmed mobile phone data to your campaign.",
//             },
//             {
//               title: "Add the Modigie mobile magic",
//               content:
//                 "Through our partnership with Modigie, we process your new content syndication leads through their up-to-the-minute mobile phone database.",
//             },
//             {
//               title: "Increased call-to-connect rates",
//               content:
//                 "Let your sales team in on the secret: Your pharosIQ leads come with validated mobile phone data that is ready for them to use.",
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
//                 Content Syndication FAQs
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
//           <Link
//             href="/contact"
//             className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold group"
//             passHref // Ensures the `href` is passed down to the underlying `<a>` tag
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

// export default B2BcontentSyndication;



// "use client";
// import { motion } from "framer-motion";
// import { ArrowUpRight, Plus, Upload, Target, Users, Database } from "lucide-react";
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
//       <div className="relative w-full min-h-screen mt-24 bg-cover bg-center flex items-center justify-start px-6 sm:px-8 md:px-16 lg:px-32">
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
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex items-center mb-6"
//           >
//             <div className="bg-[#FFD800] text-black font-bold text-xl rounded-full w-14 h-14 flex items-center justify-center mr-3">
//               B2B
//             </div>
//             <span className="text-white text-2xl font-semibold">Solutions</span>
//           </motion.div>
//           <motion.h1 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
//           >
//             Drive growth with <br />
//             precision-targeted <br />
//             <span className="text-[#FFD800]">B2B solutions.</span>
//           </motion.h1>
//           <motion.button 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-[#FFD800] text-black text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform"
//           >
//             GET STARTED TODAY
//           </motion.button>
//         </div>
//       </div>

//       {/* Solutions Overview */}
//       <div className="w-full bg-[#0E1F1C] text-white py-20 px-6 sm:px-8 md:px-16 lg:px-32">
//         <motion.h2 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-12 text-center"
//         >
//           Three powerful solutions to <br />
//           <span className="text-[#FFD700]">accelerate your growth.</span>
//         </motion.h2>

//         {/* Solution 1: Content Syndication */}
//         <motion.section 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-20 border-b border-gray-700 pb-20"
//         >
//           <div className="flex flex-col lg:flex-row gap-12 items-start">
//             <div className="lg:w-1/3">
//               <div className="flex items-center mb-6">
//                 <Target className="text-[#FFD700] w-8 h-8 mr-3" />
//                 <h3 className="text-2xl font-bold text-[#FFD700]">Content Syndication</h3>
//               </div>
//               <p className="text-xl font-semibold mb-4">
//                 Drive stronger interest and faster growth for your products and services.
//               </p>
//             </div>
//             <div className="lg:w-2/3">
//               <div className="space-y-6">
//                 <div>
//                   <h4 className="text-[#FFD700] font-bold text-lg mb-3">OUR SOLUTION</h4>
//                   <p className="text-gray-300 mb-4">
//                     Do more with your content than just share it. We align your content with our already 
//                     engaged audiences, distributing assets your ideal customers actually want to consume.
//                   </p>
//                   <p className="text-gray-300">
//                     Our blend of first-party data intelligence and compliant third-party opt-in data gives us the unique 
//                     ability to uncover deeper insights and target with a level of precision few can match.
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="text-[#FFD700] font-bold text-lg mb-3">OUR SERVICES</h4>
//                   <p className="text-gray-300">
//                     We take care of everything- from building your audience to placing and distributing 
//                     your content, managing campaigns, and ensuring quality at every step. That means you can focus on 
//                     closing deals while we help you generate more revenue from content syndication, with less time and 
//                     effort on your part.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Solution 2: Sales Development */}
//         <motion.section 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mb-20 border-b border-gray-700 pb-20"
//         >
//           <div className="flex flex-col lg:flex-row gap-12 items-start">
//             <div className="lg:w-1/3">
//               <div className="flex items-center mb-6">
//                 <Users className="text-[#FFD700] w-8 h-8 mr-3" />
//                 <h3 className="text-2xl font-bold text-[#FFD700]">Sales Development</h3>
//               </div>
//               <p className="text-xl font-semibold mb-4">
//                 Fuel meaningful growth and build a pipeline that converts.
//               </p>
//             </div>
//             <div className="lg:w-2/3">
//               <div className="space-y-6">
//                 <div>
//                   <h4 className="text-[#FFD700] font-bold text-lg mb-3">OUR SOLUTION</h4>
//                   <p className="text-gray-300 mb-4">
//                     We focus on prospects who are actively raising their hands for exactly what you offer. 
//                     Our global team engages them through personalized outreach, ensuring a seamless and professional 
//                     experience.
//                   </p>
//                   <p className="text-gray-300">
//                     With deep insights and verified intent, PersonifiedIntent delivers high-quality 
//                     opportunities from confirmed buyers, so your sales team can focus on closing, not chasing.
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="text-[#FFD700] font-bold text-lg mb-3">OUR SERVICES</h4>
//                   <p className="text-gray-300">
//                     We align with your team to understand your offerings and ideal customers, zeroing in 
//                     on engaged accounts to deliver qualified opportunities from confirmed buyers.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Solution 3: B2B Data & Intent */}
//         <motion.section 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="mb-20"
//         >
//           <div className="flex flex-col lg:flex-row gap-12 items-start">
//             <div className="lg:w-1/3">
//               <div className="flex items-center mb-6">
//                 <Database className="text-[#FFD700] w-8 h-8 mr-3" />
//                 <h3 className="text-2xl font-bold text-[#FFD700]">B2B Data & Intent</h3>
//               </div>
//               <p className="text-xl font-semibold mb-4">
//                 Global B2B Data Intelligence
//               </p>
//             </div>
//             <div className="lg:w-2/3">
//               <div className="space-y-6">
//                 <div>
//                   <h4 className="text-[#FFD700] font-bold text-lg mb-3">OUR SOLUTION</h4>
//                   <p className="text-gray-300 mb-6">
//                     Accelerate your sales and marketing efforts with trustworthy data and smarter insights.
//                   </p>
//                   <motion.button
//                     whileHover={{ scale: 1.05, backgroundColor: "#ffea00" }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-[#FFD800] text-black font-semibold py-3 px-6 rounded-full transition-all duration-300"
//                   >
//                     Request Audience Count
//                   </motion.button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.section>
//       </div>

//       {/* How It Works Section */}
//       <div className="w-full bg-gradient-to-br from-yellow-300 to-yellow-500 py-20 px-6 sm:px-8 md:px-16 lg:px-32 text-center">
//         <motion.h2 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl md:text-4xl font-bold text-black mb-12"
//         >
//           HOW IT WORKS
//         </motion.h2>
        
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto"
//         >
//           <div className="flex items-center justify-center mb-6">
//             <Upload className="w-12 h-12 text-gray-600 mr-4" />
//             <h3 className="text-2xl font-bold text-black">Upload Your Content</h3>
//           </div>
//           <p className="text-gray-700 text-lg">
//             Upload your content and let our precision targeting system distribute it to your ideal audience. 
//             Our first-party data intelligence ensures your content reaches engaged prospects who are ready to convert.
//           </p>
//         </motion.div>

//         <motion.p 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-black text-lg mt-8 font-semibold"
//         >
//           Delivering your content with precision, tailored to resonate with your audience
//         </motion.p>
//       </div>

//       {/* Benefits Cards */}
//       <div className="w-full bg-[#0E1F1C] py-20 px-6 sm:px-8 md:px-16 lg:px-32">
//         <motion.h2 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
//         >
//           Why choose our <span className="text-[#FFD700]">B2B solutions?</span>
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
//               viewport={{ once: true, amount: 0.5 }}
//               whileHover={hoverEffect}
//               variants={cardVariants}
//               className="bg-[#FFD800] p-8 rounded-xl shadow-lg min-h-[250px] flex flex-col justify-center text-black"
//             >
//               <benefit.icon className="w-12 h-12 mb-4 text-gray-800" />
//               <h3 className="font-bold text-xl mb-3 text-gray-800">
//                 {benefit.title}
//               </h3>
//               <p className="text-gray-700">{benefit.content}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="min-h-screen w-full flex items-stretch bg-[#0E1F1C]">
//         <div className="w-full flex flex-col md:flex-row">
//           <div className="bg-[#0E1F1C] md:w-2/5 p-8 flex flex-col items-start">
//             <motion.h1 
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="text-4xl md:text-5xl font-bold text-white"
//             >
//               Frequently Asked <span className="text-[#FFD700]">Questions</span>
//             </motion.h1>
//           </div>

//           <div className="md:w-3/5 p-6 md:p-10">
//             <div className="space-y-4">
//               {faqItems.map((item, index) => (
//                 <motion.div 
//                   key={index} 
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="border-b border-gray-200"
//                 >
//                   <button
//                     className="flex items-center w-full text-left py-4 focus:outline-none hover:text-[#FFD700] transition-colors duration-300"
//                     onClick={() => toggleQuestion(index)}
//                   >
//                     <span className="text-white flex-shrink-0 mr-3">
//                       <Plus
//                         size={20}
//                         className={
//                           openQuestion === index
//                             ? "rotate-45 transition-transform duration-300"
//                             : "transition-transform duration-300"
//                         }
//                       />
//                     </span>
//                     <span className="text-white font-medium">
//                       {item.question}
//                     </span>
//                   </button>

//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ 
//                       height: openQuestion === index ? "auto" : 0,
//                       opacity: openQuestion === index ? 1 : 0
//                     }}
//                     transition={{ duration: 0.3 }}
//                     className="overflow-hidden"
//                   >
//                     <div className="pl-8 pb-4 pr-4 text-gray-300">
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
//           <Link
//             href="/contact"
//             className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold group"
//             passHref
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

// export default B2BcontentSyndication;
// "use client";
// import { motion } from "framer-motion";
// import { ArrowUpRight, Plus, Upload, Target, Users, Database, X } from "lucide-react";
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
//           <div className="flex flex-col lg:flex-row gap-16 items-start">
//             <div className="lg:w-1/3">
//               <motion.div 
//                 className="mb-8"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="relative w-full h-74 rounded-xl overflow-hidden shadow-2xl mb-6">
//                   <Image
//                     src="images/work1.webp"
//                     alt="Sales Development"
//                     fill
//                     className="object-cover hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 </div>
//               </motion.div>
//               <motion.div 
//                 className="flex items-center mb-8"
//                 whileHover={{ x: 10 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-3 rounded-full mr-4 shadow-lg">
//                   <Users className="text-black w-8 h-8" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#FFD700]">Sales Development</h3>
//               </motion.div>
//               <p className="text-xl font-semibold mb-6 text-gray-300">
//                 Fuel meaningful growth and build a pipeline that converts.
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
//                     We focus on prospects who are actively raising their hands for exactly what you offer. 
//                     Our global team engages them through personalized outreach, ensuring a seamless and professional 
//                     experience.
//                   </p>
//                   <p className="text-gray-300 leading-relaxed">
//                     With deep insights and verified intent, PersonifiedIntent delivers high-quality 
//                     opportunities from confirmed buyers, so your sales team can focus on closing, not chasing.
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
//                     We align with your team to understand your offerings and ideal customers, zeroing in 
//                     on engaged accounts to deliver qualified opportunities from confirmed buyers.
//                   </p>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Solution 3: B2B Data & Intent */}
//         <motion.section 
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="mb-20"
//         >
//           <div className="flex flex-col lg:flex-row gap-16 items-start">
//             <div className="lg:w-1/3">
//               <motion.div 
//                 className="mb-8"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="relative w-full h-74 rounded-xl overflow-hidden shadow-2xl mb-6">
//                   <Image
//                     src="images/work2.webp"
//                     alt="B2B Data & Intent"
//                     fill
//                     className="object-cover hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 </div>
//               </motion.div>
//               <motion.div 
//                 className="flex items-center mb-8"
//                 whileHover={{ x: 10 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-3 rounded-full mr-4 shadow-lg">
//                   <Database className="text-black w-8 h-8" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#FFD700]">B2B Data & Intent</h3>
//               </motion.div>
//               <p className="text-xl font-semibold mb-6 text-gray-300">
//                 Global B2B Data Intelligence
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
//                   <h4 className="text-[#FFD700] font-bold text-lg mb-6">OUR SOLUTION</h4>
//                   <p className="text-gray-300 mb-8 leading-relaxed">
//                     Accelerate your sales and marketing efforts with trustworthy data and smarter insights.
//                   </p>
//                   <motion.button
//                     onClick={() => setShowModal(true)}
//                     whileHover={{ 
//                       scale: 1.08, 
//                       y: -3,
//                       boxShadow: "0 10px 30px -5px rgba(255, 216, 0, 0.5)"
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-gradient-to-r from-[#FFD800] to-[#FFA500] text-black font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl"
//                   >
//                     Request Audience Count
//                   </motion.button>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
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
//             className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//           >
//             <div className="p-8">
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-3xl font-bold text-gray-900">Request Audience Count</h2>
//                 <button 
//                   onClick={() => setShowModal(false)}
//                   className="text-gray-500 hover:text-gray-700 p-2"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>
              
//               {submitStatus === 'success' && (
//                 <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//                   Thank you! Your request has been submitted successfully.
//                 </div>
//               )}
              
//               {submitStatus === 'error' && (
//                 <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
//                   There was an error submitting your request. Please try again.
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD800] focus:border-transparent transition-all duration-200"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD800] focus:border-transparent transition-all duration-200"
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD800] focus:border-transparent transition-all duration-200"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD800] focus:border-transparent transition-all duration-200"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Which best describes you?
//                   </label>
//                   <div className="grid grid-cols-2 gap-4">
//                     {['ABM Content Syndication', 'B2B Data & Intent', 'ABM Advertising', 'ABM Acceleration'].map((option) => (
//                       <label key={option} className="flex items-center">
//                         <input
//                           type="radio"
//                           name="description"
//                           value={option}
//                           checked={formData.description === option}
//                           onChange={handleInputChange}
//                           className="mr-2 text-[#FFD800] focus:ring-[#FFD800]"
//                         />
//                         <span className="text-sm text-gray-700">{option}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     rows={4}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD800] focus:border-transparent transition-all duration-200"
//                     placeholder="Type your message..."
//                   />
//                 </div>

//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-gradient-to-r from-[#FFD800] to-[#FFA500] text-black font-bold py-4 px-8 rounded-full disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   {isSubmitting ? 'Submitting...' : 'Submit'}
//                 </motion.button>
//               </form>
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
// import { ArrowUpRight, Plus, Upload, Target, Users, Database, X } from "lucide-react";
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
//           <div className="flex flex-col lg:flex-row gap-16 items-start">
//             <div className="lg:w-1/3">
//               <motion.div 
//                 className="mb-8"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl mb-6">
//                   <Image
//                     src="/images/work1.webp"
//                     alt="Sales Development"
//                     fill
//                     className="object-cover object-center hover:scale-110 transition-transform duration-700"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 </div>
//               </motion.div>
//               <motion.div 
//                 className="flex items-center mb-8"
//                 whileHover={{ x: 10 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-3 rounded-full mr-4 shadow-lg">
//                   <Users className="text-black w-8 h-8" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#FFD700]">Sales Development</h3>
//               </motion.div>
//               <p className="text-xl font-semibold mb-6 text-gray-300">
//                 Fuel meaningful growth and build a pipeline that converts.
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
//                     We focus on prospects who are actively raising their hands for exactly what you offer. 
//                     Our global team engages them through personalized outreach, ensuring a seamless and professional 
//                     experience.
//                   </p>
//                   <p className="text-gray-300 leading-relaxed">
//                     With deep insights and verified intent, PersonifiedIntent delivers high-quality 
//                     opportunities from confirmed buyers, so your sales team can focus on closing, not chasing.
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
//                     We align with your team to understand your offerings and ideal customers, zeroing in 
//                     on engaged accounts to deliver qualified opportunities from confirmed buyers.
//                   </p>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Solution 3: B2B Data & Intent */}
//         <motion.section 
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="mb-20"
//         >
//           <div className="flex flex-col lg:flex-row gap-16 items-start">
//             <div className="lg:w-1/3">
//               <motion.div 
//                 className="mb-8"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl mb-6">
//                   <Image
//                     src="/images/work2.webp"
//                     alt="B2B Data & Intent"
//                     fill
//                     className="object-cover object-center hover:scale-110 transition-transform duration-700"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 </div>
//               </motion.div>
//               <motion.div 
//                 className="flex items-center mb-8"
//                 whileHover={{ x: 10 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-3 rounded-full mr-4 shadow-lg">
//                   <Database className="text-black w-8 h-8" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#FFD700]">B2B Data & Intent</h3>
//               </motion.div>
//               <p className="text-xl font-semibold mb-6 text-gray-300">
//                 Global B2B Data Intelligence
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
//                   <h4 className="text-[#FFD700] font-bold text-lg mb-6">OUR SOLUTION</h4>
//                   <p className="text-gray-300 mb-8 leading-relaxed">
//                     Accelerate your sales and marketing efforts with trustworthy data and smarter insights.
//                   </p>
//                   <motion.button
//                     onClick={() => setShowModal(true)}
//                     whileHover={{ 
//                       scale: 1.08, 
//                       y: -3,
//                       boxShadow: "0 10px 30px -5px rgba(255, 216, 0, 0.5)"
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-gradient-to-r from-[#FFD800] to-[#FFA500] text-black font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl"
//                   >
//                     Request Audience Count
//                   </motion.button>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.section>
//       </div>

//       {/* Improved Modal with Design Matching the First Image */}
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
// import { ArrowUpRight, Plus, Upload, Target, Users, Database, X } from "lucide-react";
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

//         {/* Solution 2: Sales Development - REDESIGNED */}
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

//         {/* Solution 3: B2B Data & Intent - REDESIGNED */}
//         <motion.section 
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="mb-20"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Left Side - Content */}
//             <motion.div 
//               initial={{ opacity: 0, x: -50 }}
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
//                   <Database className="text-black w-8 h-8" />
//                 </div>
//                 <h3 className="text-3xl font-bold text-[#FFD700]">B2B Data & Intent</h3>
//               </motion.div>
              
//               <p className="text-xl font-semibold mb-8 text-gray-300 leading-relaxed">
//                 Global B2B Data Intelligence
//               </p>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 p-8 rounded-xl backdrop-blur-sm border border-[#FFD700]/20 mb-8"
//               >
//                 <h4 className="text-[#FFD700] font-bold text-lg mb-4 flex items-center">
//                   <div className="w-2 h-2 bg-[#FFD700] rounded-full mr-3"></div>
//                   OUR SOLUTION
//                 </h4>
//                 <p className="text-gray-300 mb-8 leading-relaxed text-lg">
//                   Accelerate your sales and marketing efforts with trustworthy data and smarter insights.
//                 </p>
//                 <motion.button
//                   onClick={() => setShowModal(true)}
//                   whileHover={{ 
//                     scale: 1.08, 
//                     y: -3,
//                     boxShadow: "0 15px 40px -10px rgba(255, 216, 0, 0.6)"
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-gradient-to-r from-[#FFD800] to-[#FFA500] text-black font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl text-lg"
//                 >
//                   Request Audience Count
//                 </motion.button>
//               </motion.div>
//             </motion.div>

//             {/* Right Side - Image */}
//             <motion.div 
//               initial={{ opacity: 0, x: 50 }}
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
//                       src="/images/work2.webp"
//                       alt="B2B Data Intelligence"
//                       fill
//                       className="object-cover hover:scale-105 transition-transform duration-700"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
//                   </div>
//                 </motion.div>
//                 {/* Decorative Elements */}
//                 <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full opacity-10 blur-2xl"></div>
//                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full opacity-20 blur-xl"></div>
//               </div>
//             </motion.div>
//           </div>
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