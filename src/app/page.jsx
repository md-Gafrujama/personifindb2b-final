'use client';

import { motion, useInView } from "framer-motion";
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { ArrowUpRight, CheckCircle, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Lazy load components with loading fallbacks
const LazyLogoscroll = dynamic(() => import("../components/LogoScroll"), { 
  ssr: false,
  loading: () => <div className="h-32 bg-[#1E2E2B] animate-pulse rounded-lg" />
});

const LazyHowItWork = dynamic(() => import("../components/HowItWork"), { 
  ssr: false,
  loading: () => <div className="h-64 bg-[#1E2E2B] animate-pulse rounded-lg" />
});

const LazyProjectStatsComponent = dynamic(() => import("../components/ProjectStatsComponent"), { 
  ssr: false,
  loading: () => <div className="h-48 bg-[#1E2E2B] animate-pulse rounded-lg" />
});

// Lazy load heavy components
const Upnav = dynamic(() => import("../components/Upnav"), { ssr: false });
const Lownav = dynamic(() => import("../components/Lownav"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

// Memoized ServiceCard component
const ServiceCard = React.memo(({ service, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <article
      className="group bg-[#152925] p-6 rounded-2xl shadow-lg border border-[#00d9a640] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#00d9a6]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="article"
      aria-labelledby={`service-${service.id}-title`}
    >
      <div className="overflow-hidden rounded-xl mb-4">
        <Image
          src={service.image}
          alt={service.title}
          width={400}
          height={224}
          className="w-full h-56 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={85}
        />
      </div>
      <h3 
        id={`service-${service.id}-title`}
        className="text-2xl font-bold text-[#F7D270] mb-2 transition duration-300 group-hover:text-[#fff] group-hover:drop-shadow-[0_0_10px_#f7d270]"
      >
        {service.title}
      </h3>
      <p className="text-white/80 mb-4">{service.description}</p>
      <Link
        href={service.link}
        className="inline-block text-sm font-semibold text-[#00d9a6] group-hover:text-white transition duration-300"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More →
      </Link>
    </article>
  );
});

ServiceCard.displayName = 'ServiceCard';

// Memoized SolutionItem component
const SolutionItem = React.memo(({ service }) => (
  <Link
    href={service.link}
    className="block border-t border-[#304038] py-6 group hover:bg-[#1E2E2B]/30 transition-colors duration-300 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7D270]"
    aria-label={`View ${service.title} solution`}
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <span className="text-[#f5d78c] text-sm" aria-hidden="true">{service.id}</span>
        <h3 className="text-white font-medium text-lg">{service.title}</h3>
      </div>
      <div className="text-white transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:-translate-y-1">
        <ArrowUpRight size={20} aria-hidden="true" />
      </div>
    </div>
  </Link>
));

SolutionItem.displayName = 'SolutionItem';

const Home = () => {
  const paragraphRef = useRef(null);
  const isInView = useInView(paragraphRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  // Memoized data to prevent unnecessary re-renders
  const services = useMemo(() => [
    {
      id: 1,
      title: "Lead Generation",
      description: "Generate high-quality leads through targeted digital marketing strategies and advanced analytics.",
      image: "/images/lead_gen.jpg",
      link: "/services/lead-generation",
    },
    {
      id: 2,
      title: "Data Solutions",
      description: "Comprehensive data analytics and insights to drive informed business decisions and growth.",
      image: "/images/data_sol.jpg",
      link: "/services/data-solutions",
    },
    {
      id: 3,
      title: "Account Based Marketing",
      description: "Personalized marketing strategies targeting high-value accounts for maximum ROI.",
      image: "/images/account_based.jpg",
      link: "/services/account-based-marketing",
    },
  ], []);

  const solutions = useMemo(() => [
    { id: "01", title: "Content Syndication", link: "/ContentSyndication" },
    { id: "02", title: "Display Advertising", link: "/DisplayAds" },
    { id: "03", title: "Sales Development", link: "/SalesDevelopment" },
  ], []);

  // Optimized mouse handlers with useCallback
  const handleMouseEnter = useCallback((index) => {
    setHoveredCard(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  // Schema.org structured data for SEO
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PersonifiedB2B - Digital Marketing Agency",
    "description": "Leading digital marketing agency providing comprehensive solutions for business growth including lead generation, data solutions, and account-based marketing.",
    "url": "https://personifiedb2b.com",
    "logo": "https://personifiedb2b.com/logo.png",
    "sameAs": [
      "https://facebook.com/personifiedb2b",
      "https://linkedin.com/company/personifiedb2b",
      "https://twitter.com/personifiedb2b"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "addressCountry": "US"
    },
    "service": services.map(service => ({
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "url": `https://personifiedb2b.com${service.link}`
    }))
  }), [services]);

  return (
    <>
      <Head>
        <title>PersonifiedB2B - Leading Digital Marketing Agency | Expert B2B Solutions</title>
        <meta name="description" content="Transform your business with PersonifiedB2B's expert digital marketing solutions. Specializing in lead generation, data analytics, and account-based marketing for B2B success." />
        <meta name="keywords" content="digital marketing agency, B2B marketing, lead generation, data solutions, account based marketing, business growth, marketing automation" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PersonifiedB2B - Leading Digital Marketing Agency" />
        <meta property="og:description" content="Transform your business with expert digital marketing solutions. Specializing in lead generation, data analytics, and account-based marketing." />
        <meta property="og:image" content="https://personifiedb2b.com/images/og-image.jpg" />
        <meta property="og:url" content="https://personifiedb2b.com" />
        <meta property="og:site_name" content="PersonifiedB2B" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PersonifiedB2B - Leading Digital Marketing Agency" />
        <meta name="twitter:description" content="Transform your business with expert digital marketing solutions." />
        <meta name="twitter:image" content="https://personifiedb2b.com/images/twitter-image.jpg" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="PersonifiedB2B" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://personifiedb2b.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/hero-image.png" as="image" />
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <Upnav />
      <Lownav />

      {/* Hero Section */}
   <section 
  className="relative bg-[#0E1F1C] text-white py-12 md:py-20 px-4 sm:px-6 lg:px-12 mt-24"
  role="banner"
  aria-label="Hero section"
>
  <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-y-12 md:gap-y-0">
    
    {/* LEFT: Content */}
    <div className="w-full md:w-[50%] space-y-6 lg:space-y-8 min-h-[550px] flex flex-col justify-center">
        <div className="w-fit">
  <span className="inline-block bg-[#1E2E2B] text-[#F7D270] px-6 py-2 rounded-md text-lg xl:text-xl font-bold tracking-wide border border-[#3ABF6E]">
  B2B Marketing Company
</span>

</div>



      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-balance"
      >
        <span> Turning Buyer </span><br className="hidden lg:block" />
        <span>Intent into Real Opportunities</span>
      </motion.h1>

      <motion.p
        ref={paragraphRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-gray-300 text-base xl:text-lg leading-relaxed"
      >
        At Personified B2B Marketing, we specialize in connecting businesses with the right buyers — at the right moment. Our focus is simple but powerful: generate qualified leads from high-intent decision-makers who are actively exploring solutions.
      </motion.p>

      <div className="relative inline-block">
        <div className="absolute inset-0 w-full h-full bg-gradient-radial from-[#F7D270]/60 to-transparent rounded-full blur-2xl opacity-60 animate-pulse z-[-1]" />
        <button 
          className="relative overflow-hidden bg-[#1E2E2B] group px-6 py-3 rounded-md border border-[#3ABF6E] text-white text-base xl:text-lg hover:text-black z-10 focus:outline-none focus:ring-2 focus:ring-[#F7D270]"
          aria-label="Schedule a free consultation"
        >
          <span className="relative z-10">Schedule a Free Consultation →</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#F7D270] to-[#F7D270]/60 blur-sm translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
        </button>
      </div>
    </div>

    {/* RIGHT: Image */}
    <div className="w-full md:w-[50%] flex justify-center items-center relative">
      <Image
        src="/images/home-image.png"
        alt="Professional team collaborating on digital marketing strategies"
        width={600}
        height={600}
        className="rounded-lg object-cover max-w-full h-auto z-10"
      />
    </div>

  </div>
</section>



      {/* About Us Section */}
        <section 
         className="relative bg-[#0E1F1C] text-white py-12 md:py-20 px-4 sm:px-6 md:px-20"
         role="region"
         aria-labelledby="about-heading"
       >
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
           
           {/* Content Left - completely unchanged except responsive spacing */}
           <div className="w-full md:w-1/2 space-y-6 md:space-y-10">
             <span className="inline-block bg-[#1E2E2B] text-[#F7D270] px-6 py-2 rounded-md text-lg font-bold tracking-wide">
               About Us
             </span>
       
             <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
               Driven by Data. Focused on People. Built for Results.
             </h2>
       
             <p className="text-gray-300 leading-relaxed">
               At Personified B2B Marketing, we help B2B brands connect with the people who matter most — qualified buyers with real intent.
               We're not just another lead generation agency. We're a growth partner built on trust, transparency, and performance.
             </p>
             
             
             <div className="space-y-6 md:space-y-8">
               <div className="flex items-start gap-4">
                 <div className="bg-[#F7D270] text-black p-3 rounded-full text-xl min-w-[3rem]" aria-hidden="true">💰</div>
                 <div>
                   <h4 className="text-lg font-bold">Intent-Led Targeting</h4>
                   <p className="text-gray-300 leading-relaxed">
                     We focus on real buyer signals — not guesswork — to ensure your brand shows up when prospects are actively researching.
                   </p>
                 </div>
               </div>
               
               <div className="flex items-start gap-4">
                 <div className="bg-[#F7D270] text-black p-3 rounded-full text-xl min-w-[3rem]" aria-hidden="true">📊</div>
                 <div>
                   <h4 className="text-lg font-bold">Humanized Outreach</h4>
                   <p className="text-gray-300 leading-relaxed">
                     Our content and campaigns speak to real pain points, challenges, and goals — making your message feel relevant, not robotic.
                   </p>
                 </div>
               </div>
               
               <div className="pt-4">
              <Link 
                href="/About"
                className="relative overflow-hidden group px-6 py-3 rounded-md border border-[#3ABF6E] text-white text-base xl:text-lg transition duration-300 bg-[#1E2E2B] hover:text-black z-10 inline-block focus:outline-none focus:ring-2 focus:ring-[#F7D270]"
                aria-label="Learn more about our company"
              >
                <span className="relative z-10">More About Us →</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#F7D270] to-[#F7D270]/60 blur-sm translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
              </Link>
            </div>
             </div>
             
             
              
           </div>
       
           {/* Image Right - now fully responsive without cutting */}
           <div className="w-full md:w-7/12 h-auto mt-24 md:mt-24">
             <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[550px]">
               <Image
                 src="/images/about-team.jpg"
                 alt="Professional team collaborating in modern office environment"
                 fill
                 className="rounded-lg shadow-lg object-cover object-center"
                 loading="lazy"
                 quality={85}
                 sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 58vw"
                 priority={false}
               />
             </div>
           </div>
         </div>
       </section>

      {/* Services Section */}
      <section 
        className="bg-[#0E1F1C] py-20 px-4 sm:px-6 lg:px-12 min-h-screen relative overflow-hidden text-white"
        role="region"
        aria-labelledby="services-heading"
      >
      {/* Fallback 2: Local image (put star.png in public folder) */}
  <Image
    src="/images/star-transparent.png"
    alt=""
    width={150}
    height={150}
    className="absolute left-0 top-28 w-20 sm:w-28 lg:w-36 z-0 opacity-50 animate-pulse"
    loading="lazy"
    aria-hidden="true"
  />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <header className="text-center mb-16">
            <h2 id="services-heading" className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
              What We Offer
            </h2>
            <p className="mt-3 text-lg text-white/80 sm:text-xl">
              Fueling Your Business Growth with Precision-Targeted Solutions
            </p>
          </header>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isHovered={hoveredCard === service.id}
                onMouseEnter={() => handleMouseEnter(service.id)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
        <section 
  className="bg-[#0f2d26] text-white py-16 px-4 sm:px-8 lg:px-24"
  role="region"
  aria-labelledby="why-choose-heading"
>
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
    {/* Content - First on mobile, Right on desktop */}
    <div className="w-full lg:w-1/2 order-1 lg:order-2">
      <div className="mb-8 lg:mb-12">
        <span className="bg-[#b9aa86] text-[#0f2d26] px-6 py-3 rounded-lg font-semibold mb-4 inline-block">
          Why Choose Us
        </span>
        <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold mb-4">
          We Deliver More Than Leads — We Deliver Real Growth
        </h2>
        <p className="text-lg md:text-xl">
          At Personified B2B Marketing, we don't believe in one-size-fits-all lead generation. 
          We focus on delivering qualified, intent-driven leads that actually move the needle 
          for your business.
        </p>
      </div>

      <div className="bg-[#356e62] p-6 md:p-8 rounded-2xl shadow-lg">
        <div className="flex items-center gap-4 md:gap-6 mb-6">
          <Award className="text-[#b9aa86] flex-shrink-0" size={36} aria-hidden="true" />
          <h3 className="text-xl md:text-2xl font-bold">
            Top B2B Campaign Excellence Award
          </h3>
        </div>

        <ul className="space-y-4 md:space-y-6 text-white" role="list">
          <li className="flex items-start gap-3">
            <span className="text-xl">🎯</span>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-1">Intent-Focused Targeting</h4>
              <p className="text-sm md:text-base leading-snug text-gray-100">
                We don't chase cold lists. We engage prospects who are already researching and comparing — ready to buy.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-xl">🤝</span>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-1">People-First Approach</h4>
              <p className="text-sm md:text-base leading-snug text-gray-100">
                Your brand deserves more than clicks. We deliver relevant, timely messaging that resonates deeply.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-xl">📊</span>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-1">Results You Can Measure</h4>
              <p className="text-sm md:text-base leading-snug text-gray-100">
                We focus on lead quality, conversions, and ROI. What gets measured gets improved.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-xl">🛠</span>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-1">Custom Strategies, Not Templates</h4>
              <p className="text-sm md:text-base leading-snug text-gray-100">
                Every campaign is tailored to your goals, your industry, and your buyer personas.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-xl">🔒</span>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-1">Transparent & Accountable</h4>
              <p className="text-sm md:text-base leading-snug text-gray-100">
                Know what we do, why we do it, and how it performs — always.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    {/* Image - Second on mobile, Left on desktop */}
    <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-24">
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
        <Image
          src="/images/workkulan.jpg"
          alt="Business professionals in strategic discussion"
          fill
          className="rounded-2xl object-cover"
          loading="lazy"
          quality={85}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  </div>
</section>
      {/* Solutions Section */}
      <section 
        className="bg-[#0E1F1C] min-h-screen w-full py-12 px-4 md:py-16 md:px-8 lg:px-12 relative overflow-hidden"
        role="region"
        aria-labelledby="solutions-heading"
      >
        <div className="absolute left-0 bottom-0 w-20 h-20 rounded-full border border-[#f5d78c] opacity-20" aria-hidden="true"></div>

          {/* Fallback 2: Local image (put star.png in public folder) */}
  <Image
    src="/images/star-transparent.png"
    alt=""
    width={150}
    height={150}
    className="absolute left-0 top-28 w-20 sm:w-28 lg:w-36 z-0 opacity-50 animate-pulse"
    loading="lazy"
    aria-hidden="true"
  />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="mb-6">
                <p className="text-white text-sm md:text-base max-w-lg">
                  Our experienced consultants align your digital marketing strategy 
                  with your business objectives for maximum impact and ROI.
                </p>
              </div>

              <nav aria-label="Solutions navigation" role="navigation">
                {solutions.map((service) => (
                  <SolutionItem key={service.id} service={service} />
                ))}
              </nav>

              <div className="pt-8">
                <Link
                  href="/solutions"
                  className="relative overflow-hidden bg-[#1E2E2B] group px-6 py-3 rounded-md border border-[#3ABF6E] text-white text-base xl:text-lg hover:text-black z-10 inline-block focus:outline-none focus:ring-2 focus:ring-[#F7D270]"
                  aria-label="View all our solutions"
                >
                  <span className="relative z-10">View Our Solutions →</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#F7D270] to-[#F7D270]/60 blur-sm translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col space-y-8">
              <span className="inline-block bg-[#1E2E2B] text-[#F7D270] px-6 py-2 rounded-md text-lg font-bold tracking-wide w-max">
                Our Solutions
              </span>
              <div>
                <h2 id="solutions-heading" className="text-white text-1xl md:text-3xl lg:text-2xl font-bold leading-tight">
                  Comprehensive Solutions We Provide For Your Business Success
                </h2>
              </div>

              <div className="relative">
                <div className="w-full h-auto overflow-hidden rounded-tl-3xl rounded-br-3xl">
                  <Image
                    src="/images/solutions.jpg"
                    alt="Team of professionals implementing digital solutions"
                    width={700}
                    height={400}
                    className="w-full h-full object-cover rounded-tl-3xl rounded-tr-3xl rounded-br-[15rem] rounded-bl-3xl"
                    loading="lazy"
                    quality={85}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lazy loaded components */}
      <LazyProjectStatsComponent />
      <LazyHowItWork />
      <Footer />
    </>
  );
};

export default Home;