 // app/contact/page.jsx (or pages/contact.jsx if using Pages Router)
'use client'; // This directive makes the component a Client Component

import React, { useState } from "react";
// Import Next.js components for optimization and navigation
import Image from "next/image"; // For image optimization
import Link from "next/link";   // For client-side navigation

// Assuming these are also client components or simple static components
import Upnav from "../../components/Upnav";
import Lownav from "../../components/Lownav";
import Footer from "../../components/Footer";
// import FAQ from '../../components/FAQ'; // Ensure FAQ component is also 'use client' if it uses hooks

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        services: [],
        role: '',
        message: ''
    });

    const contactFAQs = [
        {
            question: "How can I contact CompareBazar customer support?",
            answer: [
                "You can reach us through multiple channels:",
                "• Phone: +1 (800) 123-4567 (24/7 support)",
                "• Email: support@comparebazar.com",
                "• Live Chat: Available on our website during business hours",
                "• Social Media: DM us on Twitter/Facebook/Instagram @CompareBazar",
                "• In-person: Visit our headquarters at [Your Company Address]"
            ]
        },
        {
            question: "What are your customer support hours?",
            answer: [
                "Our support team is available:",
                "Monday-Friday: 8:00 AM to 10:00 PM (your timezone)",
                "Saturday-Sunday: 9:00 AM to 8:00 PM",
                "24/7 emergency support for premium members"
            ]
        },
        {
            question: "How long does it take to get a response from your team?",
            answer: [
                "We typically respond within:",
                "• Live Chat: Instant during business hours",
                "• Email: Within 2 business hours",
                "• Social Media: Within 4 hours",
                "• Phone: Immediate answer when calling",
                "For complex inquiries, resolution may take 24-48 hours"
            ]
        },
        {
            question: "Do you have international contact numbers?",
            answer: [
                "Yes! We serve customers globally with local numbers:",
                "• UK: +44 20 1234 5678",
                "• UAE: +971 4 123 4567",
                "• India: +91 80 1234 5678",
                "• Australia: +61 2 1234 5678",
                "Full list available on our 'Contact Us' page"
            ]
        },
        {
            question: "Can I schedule a callback from your team?",
            answer: "Absolutely! Use our 'Request Callback' form on the contact page to select your preferred time and we'll call you back at your convenience."
        },
        {
            question: "Where can I send partnership or business inquiries?",
            answer: "For business collaborations, please email partnerships@comparebazar.com or fill out the partnership form on our website. Our business development team responds within 24 hours."
        },
        {
            question: "How do I report a technical issue with the website?",
            answer: [
                "Please report any technical problems to:",
                "• Email: techsupport@comparebazar.com",
                "• Phone: +1 (800) 123-4567 (press 3 for technical support)",
                "• Use the 'Report Issue' button in your account dashboard",
                "Include screenshots and details for faster resolution"
            ]
        },
        {
            question: "What information should I include when contacting support?",
            answer: [
                "For faster service, please provide:",
                "• Your account email/username",
                "• Relevant order/transaction IDs",
                "• Detailed description of your inquiry",
                "• Screenshots if applicable",
                "• Preferred contact method"
            ]
        },
        {
            question: "Do you have a premium support option?",
            answer: "Yes, our CompareBazar Pro members get priority support with dedicated account managers, 24/7 phone access, and guaranteed 15-minute response times for all inquiries."
        },
        {
            question: "How can I provide feedback about your service?",
            answer: [
                "We welcome your feedback through:",
                "• Customer satisfaction surveys after each interaction",
                "• Email to feedback@comparebazar.com",
                "• Review platforms like Trustpilot",
                "• Social media channels",
                "All feedback receives a personal response from our management team"
            ]
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            services: checked
                ? [...prev.services, value]
                : prev.services.filter((s) => s !== value),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'a8fe8c95-167c-41a6-bd53-987b128dff69',
                    ...formData
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', phone: '', company: '', services: [], role: '', message: '' });
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div style={{ background: "#0E1F1C", minHeight: "100vh" }}>
            <Upnav />
            <Lownav />
            {/* Hero Section */}
           <section className="bg-[#356e62] py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-white text-center mt-[100px] md:mt-[150px]">
    <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Contact Us
        </h1>
        <div className="w-20 h-1 bg-white/50 mx-auto mb-6 md:mb-8"></div>
        <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            We're here to help! Reach out for support, business inquiries, or just to say hello.
        </p>
    </div>
</section>
            {/* Why Contact Us Section */}
           <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white">Why Contact Compare Bazaar?</h2>
                <p className="text-lg text-[#ceeec6] mb-8">
                    Our team is dedicated to providing you with the best support, whether you have a question about our services, need technical help, or want to explore partnership opportunities.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="flex-1 bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#356e62] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer">
                        <h3 className="text-xl font-semibold text-[#356e62] mb-2">24/7 Customer Support</h3>
                        <p className="text-gray-600">We’re always here to help, no matter the time or day.</p>
                    </div>
                    <div className="flex-1 bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#356e62] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer">
                        <h3 className="text-xl font-semibold text-[#356e62] mb-2">Business Inquiries</h3>
                        <p className="text-gray-600">Looking to partner or collaborate? Reach out to our business team directly.</p>
                    </div>
                    <div className="flex-1 bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#356e62] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer">
                        <h3 className="text-xl font-semibold text-[#356e62] mb-2">Technical Support</h3>
                        <p className="text-gray-600">Report issues or get help with our platform from our tech experts.</p>
                    </div>
                </div>
            </section>
           
             {/* Main Contact Section */}
 {/* Main Contact Section */}
 {/* Main Contact Section */}
<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="flex flex-col lg:flex-row">
            {/* Left: Contact Info */}
            <div className="bg-gradient-to-br from-[#2a5c52] to-[#356e62] text-white p-8 md:p-10 lg:p-12 flex-1">
                <div className="h-full flex flex-col justify-between">
                    {/* Header aligned with right side */}
                    <div className="flex items-center mb-8 h-[60px]">
                        <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-white/10 p-2 rounded-lg mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                                <p className="text-white/90">539 W. Commerce St #2577, Dallas, TX 75208</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-white/10 p-2 rounded-lg mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                                <p className="text-white/90">Contactus@compare-bazaar.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-white/10 p-2 rounded-lg mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Opening Hours</h3>
                                <p className="text-white/90">Mon-Fri: 09:00 - 23:00</p>
                                <p className="text-white/90">Sun: 09:00 - 16:00</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="h-64 md:h-80 lg:h-[300px] xl:h-[350px] rounded-xl overflow-hidden border-2 border-white/20">
    <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1793079333634!2d73.93027927385937!3d18.520797569169968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1e490827b59%3A0xc6891bc6deabc8be!2sQuore%20B2B%20Private%20Limited!5e0!3m2!1sen!2sin!4v1739178092301!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full grayscale invert-[90%]"
        title="Company Location"
    ></iframe>
</div>

                    </div>
                </div>
            </div>

            {/* Right: Contact Form */}
            <div className="p-8 md:p-10 lg:p-12 flex-1">
                {isSubmitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-8">
                        <div className="max-w-md w-full bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-[#356e62]/30 rounded-xl p-8 mb-8">
                            <div className="relative inline-block mb-6">
                                <div className="absolute inset-0 bg-[#356e62] rounded-full opacity-20 animate-ping"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#356e62]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#356e62] mb-3">Thank you for your message!</h3>
                            <p className="text-[#356e62]/90 mb-6">
                                We appreciate your inquiry and will get back to you as soon as possible.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="bg-[#356e62] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#2a5c52] transition-colors duration-300 shadow-md hover:shadow-lg"
                            >
                                Send Another Message
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex flex-col">
                        {/* Header aligned with left side */}
                        <div className="flex items-center mb-8 h-[60px]">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#356e62]">Send Us a Message</h2>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                            <input type="hidden" name="access_key" value="a8fe8c95-167c-41a6-bd53-987b128dff69" />
                            
                            <div className="space-y-6 flex-grow">
                                {/* Full Name Field */}
                                <div>
                                    <label htmlFor="name" className="sr-only">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#356e62] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#356e62] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label htmlFor="phone" className="sr-only">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#356e62] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="flex-grow">
                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        rows="4"
                                        className="w-full h-full min-h-[150px] px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#356e62] focus:border-transparent transition-all"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#356e62] to-[#4a9e8f] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#2a5c52] hover:to-[#356e62] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#356e62] focus:ring-offset-2"
                                >
                                    SEND MESSAGE
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    </div>
</section>
            {/* Interested in Our Services Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-[#356e62
                    ]">Interested in Our Services?</h2>
                    <p className="text-gray-500 text-center mb-8">
                        Tell us about your needs and we'll connect you with the right solutions for your business.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold mb-1 text-[#356e62]">Your Name *</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-3 text-gray-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                    </span>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:border-[#356e62] outline-none"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold mb-1 text-[#356e62]">Email Addres *</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-3 text-gray-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-8 0V8a4 4 0 018 0v4"/></svg>
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:border-[#356e62] outline-none"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold mb-1 text-[#356e62]">Phone Number *</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-3 text-gray-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm8-8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
                                    </span>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:border-[#356e62] outline-none"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold mb-1 text-[#356e62]">Company/Organization *</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-3 text-gray-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a1 1 0 001 1h16a1 1 0 001-1V7M16 3v4M8 3v4m-5 4h18"/></svg>
                                    </span>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Enter your company name"
                                        className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:border-[#356e62] outline-none"
                                        required
                                    />
                                </div>
                            </div>
                            {/* Services Checkboxes */}
                            <div className="md:col-span-2 space-y-2">
                                <label className="block text-sm font-semibold mb-2 text-[#356e62]">Services You're Interested In *</label>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {[
                                        "B2B Content Syndication",
                                        "Display Advertising",
                                        "Sales Development",
                                        "Lead Generation",
                                        "Data Solutions",
                                        "Account Based Marketing"
                                    ].map((service) => (
                                        <label key={service} className="flex items-center space-x-2 text-gray-700">
                                            <input
                                                type="checkbox"
                                                value={service}
                                                checked={formData.services.includes(service)}
                                                onChange={handleCheckboxChange}
                                                className="accent-[#356e62
                                                ] w-4 h-4"
                                            />
                                            <span>{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            {/* Role Dropdown */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold mb-1 text-[#356e62]">Your Role *</label>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-lg py-3 px-3 focus:border-[#356e62
                                    ] outline-none text-gray-800"
                                    required
                                >
                                    <option value="">Select your role</option>
                                    <option>Business Owner</option>
                                    <option>IT Manager</option>
                                    <option>Marketing Manager</option>
                                    <option>Procurement</option>
                                    <option>Consultant</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            {/* Message */}
                            <div className="md:col-span-2 space-y-2">
                                <label className="block text-sm font-semibold mb-1 text-[#356e62]">Your Message *</label>
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project"
                                        className="w-full pl-3 pr-3 py-4 border border-gray-200 rounded-lg focus:border-[#356e62] outline-none text-gray-800"
                                        rows={4}
                                        required
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        {/* Submit */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-[#0E1F1C] hover:bg-[#356e62] text-white font-bold py-3 rounded-lg text-base flex items-center justify-center gap-2 transition"
                            >
                                Submit Inquiry
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            {/* FAQ and CTA */}
            <section className="mt-20">
                {/* <FAQ faqs={contactFAQs} /> */}
            </section>
            <section className="bg-[#356e62] text-white text-center py-16 px-4 mt-10">
                <h2 className="text-4xl font-semibold mb-4">Ready to grow your business?</h2>
                <p className="max-w-2xl mx-auto mb-8 text-base">
                    Partner with us to elevate your marketing strategy and drive measurable results for your business.
                </p>
                {/* Use Next.js Link for internal navigation */}
                <Link href="/#getintouch" passHref className="bg-[#0E1F1C] text-white px-8 py-4 rounded-full font-bold transition">
                    Get Started Today
                </Link>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;