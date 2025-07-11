'use client';

import { motion, useInView } from "framer-motion";
import React, { useEffect ,useRef,useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, Award,ArrowUpRight, Heading1} from "lucide-react";
import Head from 'next/head';
import Link from 'next/link';

// Import dynamic from next/dynamic
import dynamic from 'next/dynamic';

// Dynamically import the components
const Upnav = dynamic(() => import("../../components/Upnav"), { ssr: false });
const Lownav = dynamic(() => import("../../components/Lownav"), { ssr: false });
const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });
const LazyLogoscroll = dynamic(() => import("../../components/LogoScroll"), { ssr: false }); // If you uncomment this later
const LazyHowItWork = dynamic(() => import("../../components/HowItWork"), { ssr: false });
const LazyProjectStatsComponent = dynamic(() => import("../../components/ProjectStatsComponent"), { ssr: false });

const About = () => {

    const paragraphRef = useRef(null);
    const isInView = useInView(paragraphRef, { once: true, margin: "-100px" });
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

    const solution = [
      { id: "01", title: "Content Syndication", link: "/ContentSyndication" },
      { id: "02", title: "Display Advertising", link: "/DisplayAds" },
      { id: "03", title: "Sales Development", link: "/SalesDevelopment" },
    ];

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
      const updateCursorPosition = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };

      const handlePointerEvents = () => {
        const pointerElements = document.querySelectorAll('a, button, .group');
        pointerElements.forEach(el => {
          el.addEventListener('mouseenter', () => setIsPointer(true));
          el.addEventListener('mouseleave', () => setIsPointer(false));
        });
      };

      window.addEventListener('mousemove', updateCursorPosition);
      handlePointerEvents();

      return () => {
        window.removeEventListener('mousemove', updateCursorPosition);
      };
    }, []);

  useEffect(() => {
    const aosCSS = document.createElement("link");
    aosCSS.rel = "stylesheet";
    aosCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
    document.head.appendChild(aosCSS);

    const aosScript = document.createElement("script");
    aosScript.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
    aosScript.async = true;
    aosScript.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: false,
        });
      }
    };
    document.body.appendChild(aosScript);

    return () => {
      if (document.head.contains(aosCSS)) {
        document.head.removeChild(aosCSS);
      }
      if (document.body.contains(aosScript)) {
        document.body.removeChild(aosScript);
      }
    };
  }, []);

  return (
    <>
    <Head>
        <title>About</title>
        <meta property="og:title" content=" Why Choose Kulan" />
        <meta property="og:description" content="We Help Your Business To Grow Up More Stronger." />
        {/* <meta property="og:image" content="https://blogs.compare-bazaar.com/images/blog2.webp" />
        <meta property="og:url" content={currentUrl} /> */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="PersonifiedB2B" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Upnav />
      <Lownav />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] mt-[100px] sm:mt-[120px] md:mt-[144px] bg-gradient-to-r from-[#302600] via-[#121b1a] to-[#08231f] flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-600 opacity-10 top-[20%] left-[15%]"></div>
        <div className="absolute w-[200px] h-[200px] rounded-full border border-gray-600 opacity-10 bottom-[10%] right-[10%]"></div>
        <h1 className="mt-4 text-3xl font-extrabold z-10">About US</h1>
      </div>
 <section 
  className="relative bg-[#0E1F1C] text-white py-12 md:py-20 px-4 sm:px-6 md:px-20"
  role="region"
  aria-labelledby="about-heading"
>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
    
    {/* Content Left - completely unchanged except responsive spacing */}
    <div className="w-full md:w-1/2 space-y-6 md:space-y-10">
       

      <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Driven by Data. Focused on People. Built for Results.
      </h2>

      <p className="text-gray-300 leading-relaxed">
        At Personified B2B Marketing, we help B2B brands connect with the people who matter most — qualified buyers with real intent.
        We're not just another lead generation agency. We're a growth partner built on trust, transparency, and performance.
      </p>
      
      <h3 className="text-lg font-bold">🎯 What Makes Us Different?</h3>
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
        
        <div className="flex items-start gap-4">
          <div className="bg-[#F7D270] text-black p-3 rounded-full text-xl min-w-[3rem]" aria-hidden="true">💰</div>
          <div>
            <h4 className="text-lg font-bold">Results You Can Trust</h4>
            <p className="text-gray-300 leading-relaxed">
              Every campaign is built to drive outcomes you care about: qualified leads, better engagement, and stronger ROI.
            </p>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-bold">🤝 Built on Partnership</h3>
      <div className="space-y-6 md:space-y-8">
        <div className="flex items-start gap-4">
          <div className="bg-[#F7D270] text-black p-3 rounded-full text-xl min-w-[3rem]" aria-hidden="true">👥</div>
          <div>
            <h4 className="text-lg font-bold">Team collaborations</h4>
            <p className="text-gray-300 leading-relaxed">
              We see ourselves as an extension of your marketing and sales teams. That means working collaboratively, reporting transparently, and always keeping your goals at the center of what we do.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-[#F7D270] text-black p-3 rounded-full text-xl min-w-[3rem]" aria-hidden="true">📈</div>
          <div>
            <h4 className="text-lg font-bold">Product launching</h4>
            <p className="text-gray-300 leading-relaxed">
              Whether you're launching a new product, scaling demand, or breaking into a new market — Personified B2B Marketing helps you reach the right people at the right time, with the right message.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Image Right - now fully responsive without cutting */}
    <div className="w-full md:w-7/12 h-auto mt-24 md:mt-80">
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
      {/* Why Choose Kulan Section */}
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

    

      {/* Use the dynamically imported components */}
      {/* If you uncomment Logoscroll later, use <LazyLogoscroll /> */}
      <LazyHowItWork />
      <LazyProjectStatsComponent />

      {/* Solutions Section (this section is already part of the current file) */}
      <div className="bg-[#0E1F1C] min-h-screen w-full py-12 px-4 md:py-16 md:px-8 lg:px-12 relative overflow-hidden cursor-default">
        <div className="absolute left-0 bottom-0 w-20 h-20 rounded-full border border-[#f5d78c] opacity-20"></div>

        <Image
            src="/images/flower.png"
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
                  Our experienced consultants can assist you in aligning your IT
                  strategy with your business objectives.
                </p>
              </div>

              {solution.map((service) => (
                <Link
                  href={service.link}
                  key={service.id}
                  className="block border-t border-[#304038] py-6 group hover:bg-[#1E2E2B]/30 transition-colors duration-300 px-2 rounded-md"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <span className="text-[#f5d78c] text-sm">{service.id}</span>
                      <h3 className="text-white font-medium text-lg">
                        {service.title}
                      </h3>
                    </div>
                    <div className="text-white transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </Link>
              ))}

              <div className="pt-8">
                <button className="relative overflow-hidden bg-[#1E2E2B] group px-6 py-3 rounded-md border border-[#3ABF6E] text-white text-base xl:text-lg hover:text-black z-10">
                  <span className="relative z-10">View Our Solutions→</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#F7D270] to-[#F7D270]/60 blur-sm translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-8">
              <p className="inline-block bg-[#1E2E2B] text-[#F7D270] px-6 py-2 rounded-md text-lg font-bold tracking-wide w-max">
                Our Solutions
              </p>
              <div>
                <h2 className="text-white text-1xl md:text-3xl lg:text-2xl font-bold leading-tight">
                  What Solutions We Provide <br />
                  For Your Business
                </h2>
              </div>

              <div className="relative">
                <div className="w-full h-auto overflow-hidden rounded-tl-3xl rounded-br-3xl">
                  <Image
                    src="/images/solutions.jpg"
                    alt="Team of professionals working together"
                    width={700}
                    height={500}
                    className="w-full h-full object-cover rounded-tl-3xl rounded-tr-3xl rounded-br-[15rem] rounded-bl-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
    <div className="min-h-screen bg-[#356e62] text-white px-4 py-16 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-16">
          <span className="inline-block bg-[#1E2E2B] text-[#F7D270] px-6 py-2 rounded-md text-lg font-bold tracking-wide shadow-md">
            Our Vision
          </span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* CARD COMPONENT */}
          {[
            {
              title: 'Our Mission',
              content: [
                'At Personified B2B Marketing, our vision is to reshape how B2B companies connect with their ideal customers —',
                'not through volume, but through value. We believe that lead generation should feel less like chasing numbers and more like building meaningful relationships.',
              ],
            },
            {
              title: 'Our Approach',
              content: [
                'In a market crowded with noise, our goal is to bring clarity, trust, and authenticity to every buyer interaction.',
                'We envision a future where B2B marketing is not just data-driven, but people-driven — where brands thrive by understanding real buyer intent and responding with relevance and empathy.',
              ],
            },
            {
  title: 'What Drives Us',
  content: [
    '<strong>Purposeful Growth:</strong> We aim to help our clients grow not just faster, but smarter — with qualified leads that align with their goals and values.',
    '<strong>Precision over Guesswork:</strong> By focusing on intent signals and buyer behavior, we bring accuracy and efficiency to demand generation.',
     ]
}, {
  title: 'Our Vision',
  content: [
    'Our long-term vision is to become the most trusted B2B marketing partner for companies who value <strong>integrity</strong>, <strong>performance</strong>, and a <strong>human touch</strong> in every interaction.',
    'We envision a future where B2B marketing is more human, and more aligned with the real needs of buyers — not just metrics. Through ongoing innovation and authentic partnerships, we aim to lead the industry in delivering sustainable growth.'
  ]
}

          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00d9a640] transition-all duration-300 group border border-white/20"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#F7D270] mb-4 ">
                {item.title}
              </h2>
              {item.content.map((text, j) => (
                <p
                  key={j}
                  className="mb-3 text-white/90"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* extra  */}
    {/* About Section */}
    {/* About Section */}
    <section className="bg-[#356e62] text-white py-20 px-4 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image with overlay */}
        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src="/images/about-team.jpg"
            alt="About Queen B2M"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#356e62aa] to-[#1e2e2bcc] opacity-20"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10">

          <h2 className="text-4xl font-bold mb-6 leading-snug">
            More Than a Company,
            <br />
            We’re a <span className="text-[#F7D270]">Purpose-Driven Movement</span>
          </h2>
          <p className="text-lg text-white/90 mb-6">
            PersonifiedB2b marketing stands at the intersection of innovation and impact. We unite strategy, creativity, and technology to fuel transformative growth for clients worldwide.
          </p>
          <p className="text-lg text-white/90 mb-8">
            With purpose at our core, we build trust, foster leadership, and empower sustainable change — one idea, one mission at a time.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-[#F7D270] text-[#1e2e2b] font-semibold rounded-xl shadow-md hover:bg-[#d4c5a0]  duration-300"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>


      <Footer />
    </>
  );
};

export default About;