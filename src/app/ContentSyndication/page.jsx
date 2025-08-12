





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
