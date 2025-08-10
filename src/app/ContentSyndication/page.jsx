"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Upload, Target, Users, Database } from "lucide-react";
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
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  };

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
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
      <div className="relative w-full min-h-screen mt-24 bg-cover bg-center flex items-center justify-start px-6 sm:px-8 md:px-16 lg:px-32">
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center mb-6"
          >
            <div className="bg-[#FFD800] text-black font-bold text-xl rounded-full w-14 h-14 flex items-center justify-center mr-3">
              B2B
            </div>
            <span className="text-white text-2xl font-semibold">Solutions</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Drive growth with <br />
            precision-targeted <br />
            <span className="text-[#FFD800]">B2B solutions.</span>
          </motion.h1>
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFD800] text-black text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform"
          >
            GET STARTED TODAY
          </motion.button>
        </div>
      </div>

      {/* Solutions Overview */}
      <div className="w-full bg-[#0E1F1C] text-white py-20 px-6 sm:px-8 md:px-16 lg:px-32">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-12 text-center"
        >
          Three powerful solutions to <br />
          <span className="text-[#FFD700]">accelerate your growth.</span>
        </motion.h2>

        {/* Solution 1: Content Syndication */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 border-b border-gray-700 pb-20"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <div className="flex items-center mb-6">
                <Target className="text-[#FFD700] w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-[#FFD700]">Content Syndication</h3>
              </div>
              <p className="text-xl font-semibold mb-4">
                Drive stronger interest and faster growth for your products and services.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#FFD700] font-bold text-lg mb-3">OUR SOLUTION</h4>
                  <p className="text-gray-300 mb-4">
                    Do more with your content than just share it. We align your content with our already 
                    engaged audiences, distributing assets your ideal customers actually want to consume.
                  </p>
                  <p className="text-gray-300">
                    Our blend of first-party data intelligence and compliant third-party opt-in data gives us the unique 
                    ability to uncover deeper insights and target with a level of precision few can match.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#FFD700] font-bold text-lg mb-3">OUR SERVICES</h4>
                  <p className="text-gray-300">
                    We take care of everything- from building your audience to placing and distributing 
                    your content, managing campaigns, and ensuring quality at every step. That means you can focus on 
                    closing deals while we help you generate more revenue from content syndication, with less time and 
                    effort on your part.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Solution 2: Sales Development */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 border-b border-gray-700 pb-20"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <div className="flex items-center mb-6">
                <Users className="text-[#FFD700] w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-[#FFD700]">Sales Development</h3>
              </div>
              <p className="text-xl font-semibold mb-4">
                Fuel meaningful growth and build a pipeline that converts.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#FFD700] font-bold text-lg mb-3">OUR SOLUTION</h4>
                  <p className="text-gray-300 mb-4">
                    We focus on prospects who are actively raising their hands for exactly what you offer. 
                    Our global team engages them through personalized outreach, ensuring a seamless and professional 
                    experience.
                  </p>
                  <p className="text-gray-300">
                    With deep insights and verified intent, PersonifiedIntent delivers high-quality 
                    opportunities from confirmed buyers, so your sales team can focus on closing, not chasing.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#FFD700] font-bold text-lg mb-3">OUR SERVICES</h4>
                  <p className="text-gray-300">
                    We align with your team to understand your offerings and ideal customers, zeroing in 
                    on engaged accounts to deliver qualified opportunities from confirmed buyers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Solution 3: B2B Data & Intent */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <div className="flex items-center mb-6">
                <Database className="text-[#FFD700] w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-[#FFD700]">B2B Data & Intent</h3>
              </div>
              <p className="text-xl font-semibold mb-4">
                Global B2B Data Intelligence
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#FFD700] font-bold text-lg mb-3">OUR SOLUTION</h4>
                  <p className="text-gray-300 mb-6">
                    Accelerate your sales and marketing efforts with trustworthy data and smarter insights.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#ffea00" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FFD800] text-black font-semibold py-3 px-6 rounded-full transition-all duration-300"
                  >
                    Request Audience Count
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* How It Works Section */}
      <div className="w-full bg-gradient-to-br from-yellow-300 to-yellow-500 py-20 px-6 sm:px-8 md:px-16 lg:px-32 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-black mb-12"
        >
          HOW IT WORKS
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <Upload className="w-12 h-12 text-gray-600 mr-4" />
            <h3 className="text-2xl font-bold text-black">Upload Your Content</h3>
          </div>
          <p className="text-gray-700 text-lg">
            Upload your content and let our precision targeting system distribute it to your ideal audience. 
            Our first-party data intelligence ensures your content reaches engaged prospects who are ready to convert.
          </p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-black text-lg mt-8 font-semibold"
        >
          Delivering your content with precision, tailored to resonate with your audience
        </motion.p>
      </div>

      {/* Benefits Cards */}
      <div className="w-full bg-[#0E1F1C] py-20 px-6 sm:px-8 md:px-16 lg:px-32">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Why choose our <span className="text-[#FFD700]">B2B solutions?</span>
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
              viewport={{ once: true, amount: 0.5 }}
              whileHover={hoverEffect}
              variants={cardVariants}
              className="bg-[#FFD800] p-8 rounded-xl shadow-lg min-h-[250px] flex flex-col justify-center text-black"
            >
              <benefit.icon className="w-12 h-12 mb-4 text-gray-800" />
              <h3 className="font-bold text-xl mb-3 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.content}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="min-h-screen w-full flex items-stretch bg-[#0E1F1C]">
        <div className="w-full flex flex-col md:flex-row">
          <div className="bg-[#0E1F1C] md:w-2/5 p-8 flex flex-col items-start">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Frequently Asked <span className="text-[#FFD700]">Questions</span>
            </motion.h1>
          </div>

          <div className="md:w-3/5 p-6 md:p-10">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-gray-200"
                >
                  <button
                    className="flex items-center w-full text-left py-4 focus:outline-none hover:text-[#FFD700] transition-colors duration-300"
                    onClick={() => toggleQuestion(index)}
                  >
                    <span className="text-white flex-shrink-0 mr-3">
                      <Plus
                        size={20}
                        className={
                          openQuestion === index
                            ? "rotate-45 transition-transform duration-300"
                            : "transition-transform duration-300"
                        }
                      />
                    </span>
                    <span className="text-white font-medium">
                      {item.question}
                    </span>
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: openQuestion === index ? "auto" : 0,
                      opacity: openQuestion === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-8 pb-4 pr-4 text-gray-300">
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
      <div
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/images/connectus.jpg')`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white flex flex-col items-center"
        >
          <Link
            href="/contact"
            className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold group"
            passHref
          >
            <span className="text-yellow-400">Connect</span>
            <motion.span
              className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition duration-300"
              whileHover={{ scale: 1.2, rotate: 45 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight className="text-black w-5 h-5 md:w-6 md:h-6" />
            </motion.span>
          </Link>
          <p className="text-white text-2xl sm:text-3xl md:text-4xl mt-2 font-medium">
            with us
          </p>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

export default B2BcontentSyndication;
