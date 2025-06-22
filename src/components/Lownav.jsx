'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown, FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Logo1 from "@/assets/Logo1.png";
import Logo2 from "@/assets/Logo2.png";

// Optimized debounce function
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const LowNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [screenSize, setScreenSize] = useState({
        isSmall: false,
        isMedium: false,
        isXLarge: false,
        isDesktop: false,
        showGetStarted: true
    });

    // Timeout refs for handling hover delays
    const timeoutRefs = useMemo(() => ({
        solutions: null,
        services: null,
        resources: null
    }), []);

    // Track if dropdown was opened by click (for better UX)
    const [clickedDropdown, setClickedDropdown] = useState(null);

    // Memoized navigation data
    const navigationData = useMemo(() => ({
        solutionsItems: [
            { name: 'B2B Content Syndication', href: '/ContentSyndication' },
            { name: 'Display Advertising', href: '/DisplayAds' },
            { name: 'Sales Development', href: '/SalesDevelopment' },
        ],
        solutionsDesktopItems: [
            { 
                name: 'Connect', 
                subText: 'B2B Content Syndication', 
                image: '/images/b2b.jpg', 
                href: '/ContentSyndication',
                alt: 'B2B Content Syndication - Connect with your target audience'
            },
            { 
                name: 'Engage', 
                subText: 'Display Advertising', 
                image: '/images/advertise.jpg', 
                href: '/DisplayAds',
                alt: 'Display Advertising - Engage potential customers'
            },
            { 
                name: 'Convert', 
                subText: 'Sales Development', 
                image: '/images/sales.jpg', 
                href: '/SalesDevelopment',
                alt: 'Sales Development - Convert leads to customers'
            },
        ],
        audienceItems: [
            { name: 'Our IT by audience', href: '/IT' },
            { name: 'Our Marketing by audience', href: '/AudienceMarketing' },
            { name: 'Our Sales by audience', href: '/AudienceSales' },
            { name: 'Our Finance by audience', href: '/Finance' },
        ],
        audienceDesktopItems: [
            { 
                name: 'IT', 
                subText: 'Our IT by audience', 
                image: '/images/IT.webp', 
                href: '/IT',
                alt: 'IT Solutions - Targeted for IT professionals'
            },
            { 
                name: 'Marketing', 
                subText: 'Our Marketing by audience', 
                image: '/images/marketing.webp', 
                href: '/AudienceMarketing',
                alt: 'Marketing Solutions - Targeted for marketing professionals'
            },
            { 
                name: 'Sales', 
                subText: 'Our Sales by audience', 
                image: '/images/sales.webp', 
                href: '/AudienceSales',
                alt: 'Sales Solutions - Targeted for sales professionals'
            },
            { 
                name: 'Finance', 
                subText: 'Our Finance by audience', 
                image: '/images/finance.webp', 
                href: '/Finance',
                alt: 'Finance Solutions - Targeted for finance professionals'
            },
        ],
        resourcesItems: [
            { name: 'White Paper', href: '/whitepaper' },
            { name: 'Blogs', href: 'https://blogs-presonifind-oy62.vercel.app/' },
        ],
        resourcesDesktopItems: [
            { 
                name: 'White Papers', 
                subText: 'Industry insights and research', 
                image: '/images/whitepaper.jpg', 
                href: '/whitepaper',
                alt: 'White Papers - Industry insights and research documents'
            },
            { 
                name: 'Blog Articles', 
                subText: 'Latest trends and updates', 
                image: '/images/blog.jpg', 
                href: 'https://blogs-presonifind-oy62.vercel.app/',
                alt: 'Blog Articles - Latest industry trends and updates'
            },
        ],
        socialMedia: [
            { icon: <FaFacebookF />, label: 'Facebook', href: 'https://facebook.com/yourcompany' },
            { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com/yourcompany' },
            { icon: <FaPinterestP />, label: 'Pinterest', href: 'https://pinterest.com/yourcompany' },
            { icon: <FaYoutube />, label: 'YouTube', href: 'https://youtube.com/yourcompany' }
        ]
    }), []);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
        setServicesOpen(false);
        setSolutionsOpen(false);
        setResourcesOpen(false);
        setClickedDropdown(null);
    }, []);

    const checkScreenSize = useCallback(() => {
        if (typeof window === 'undefined') return;
        
        const width = window.innerWidth;
        const userAgent = navigator.userAgent.toLowerCase();
        const isIPad = /ipad|ipod|iphone/.test(userAgent);
        const isSurface = /surface/.test(userAgent);
        const isTablet = (width >= 768 && width <= 1024) || isIPad || isSurface;

        setScreenSize({
            isSmall: width < 768,
            isMedium: width >= 768 && width < 1400,
            isXLarge: width >= 1400 && width < 1700,
            isDesktop: width >= 1700,
            showGetStarted: !isTablet
        });

        if (width >= 768) {
            setServicesOpen(false);
            setSolutionsOpen(false);
            setResourcesOpen(false);
            setClickedDropdown(null);
        }
    }, []);

    // Optimized debounced resize handler
    const debouncedCheckScreenSize = useMemo(
        () => debounce(checkScreenSize, 150),
        [checkScreenSize]
    );

    useEffect(() => {
        checkScreenSize();
        
        // Close dropdowns when clicking outside
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-container')) {
                setServicesOpen(false);
                setSolutionsOpen(false);
                setResourcesOpen(false);
                setClickedDropdown(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        window.addEventListener('resize', debouncedCheckScreenSize);
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('resize', debouncedCheckScreenSize);
            // Clean up timeouts
            Object.values(timeoutRefs).forEach(timeout => {
                if (timeout) clearTimeout(timeout);
            });
        };
    }, [checkScreenSize, debouncedCheckScreenSize, timeoutRefs]);

    const getResponsiveStyles = useMemo(() => {
        if (screenSize.isXLarge) {
            return { textSize: 'text-xl', gap: 'gap-14', justify: 'justify-end' };
        } else if (screenSize.isMedium) {
            return { textSize: 'text-lg', gap: 'gap-10', justify: 'justify-center' };
        } else if (screenSize.isDesktop) {
            return { textSize: 'text-3xl', gap: 'gap-14', justify: 'justify-center' };
        } else {
            return { textSize: 'text-base', gap: 'gap-12', justify: 'justify-center' };
        }
    }, [screenSize]);

    const toggleSolutions = useCallback(() => {
        if (screenSize.isSmall) {
            setSolutionsOpen(prev => !prev);
            setServicesOpen(false);
            setResourcesOpen(false);
        } else {
            // Desktop click behavior
            const newState = !solutionsOpen;
            setSolutionsOpen(newState);
            setServicesOpen(false);
            setResourcesOpen(false);
            setClickedDropdown(newState ? 'solutions' : null);
        }
    }, [screenSize.isSmall, solutionsOpen]);

    const toggleServices = useCallback(() => {
        if (screenSize.isSmall) {
            setServicesOpen(prev => !prev);
            setSolutionsOpen(false);
            setResourcesOpen(false);
        } else {
            // Desktop click behavior
            const newState = !servicesOpen;
            setServicesOpen(newState);
            setSolutionsOpen(false);
            setResourcesOpen(false);
            setClickedDropdown(newState ? 'services' : null);
        }
    }, [screenSize.isSmall, servicesOpen]);

    const toggleResources = useCallback(() => {
        if (screenSize.isSmall) {
            setResourcesOpen(prev => !prev);
            setSolutionsOpen(false);
            setServicesOpen(false);
        } else {
            // Desktop click behavior
            const newState = !resourcesOpen;
            setResourcesOpen(newState);
            setSolutionsOpen(false);
            setServicesOpen(false);
            setClickedDropdown(newState ? 'resources' : null);
        }
    }, [screenSize.isSmall, resourcesOpen]);

    // Improved desktop hover handlers
    const handleDesktopMouseEnter = useCallback((dropdownType) => {
        if (!screenSize.isSmall && clickedDropdown !== dropdownType) {
            // Clear any existing timeout for this dropdown
            if (timeoutRefs[dropdownType]) {
                clearTimeout(timeoutRefs[dropdownType]);
                timeoutRefs[dropdownType] = null;
            }

            // Only open on hover if not clicked open
            if (!clickedDropdown) {
                switch(dropdownType) {
                    case 'solutions':
                        setSolutionsOpen(true);
                        setServicesOpen(false);
                        setResourcesOpen(false);
                        break;
                    case 'services':
                        setServicesOpen(true);
                        setSolutionsOpen(false);
                        setResourcesOpen(false);
                        break;
                    case 'resources':
                        setResourcesOpen(true);
                        setSolutionsOpen(false);
                        setServicesOpen(false);
                        break;
                }
            }
        }
    }, [screenSize.isSmall, timeoutRefs, clickedDropdown]);

    const handleDesktopMouseLeave = useCallback((dropdownType) => {
        if (!screenSize.isSmall && clickedDropdown !== dropdownType) {
            // Clear any existing timeout
            if (timeoutRefs[dropdownType]) {
                clearTimeout(timeoutRefs[dropdownType]);
            }

            // Only close on hover leave if not clicked open
            if (!clickedDropdown) {
                timeoutRefs[dropdownType] = setTimeout(() => {
                    switch(dropdownType) {
                        case 'solutions':
                            setSolutionsOpen(false);
                            break;
                        case 'services':
                            setServicesOpen(false);
                            break;
                        case 'resources':
                            setResourcesOpen(false);
                            break;
                    }
                    timeoutRefs[dropdownType] = null;
                }, 200); // Slightly reduced delay
            }
        }
    }, [screenSize.isSmall, timeoutRefs, clickedDropdown]);

    // Memoized dropdown component for desktop
    const DesktopDropdown = React.memo(({ items, isOpen, gridCols = 'grid-cols-3', dropdownType }) => (
        <div 
            className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 z-50 mt-1 transition-all duration-200 origin-top ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
            onMouseEnter={() => handleDesktopMouseEnter(dropdownType)}
            onMouseLeave={() => handleDesktopMouseLeave(dropdownType)}
        >
            <div className="bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-200">
                <div className={`grid ${gridCols} gap-4 p-4 w-max`}>
                    {items.map((item, index) => (
                        <Link 
                            key={`${item.name}-${index}`}
                            href={item.href}
                            className="relative w-56 h-56 overflow-hidden rounded-lg group/item block focus:outline-none focus:ring-2 focus:ring-[#386861] focus:ring-offset-2 transition-transform duration-200 hover:scale-105"
                            aria-label={`Navigate to ${item.name}`}
                        >
                            <Image 
                                src={item.image} 
                                alt={item.alt || item.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 224px"
                                className="object-cover opacity-90 group-hover/item:opacity-100 transition-opacity duration-300"
                                loading="lazy"
                                quality={75}
                            />
                            <div className="absolute inset-0 z-10 p-4 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
                                <h3 className="text-xl font-bold mb-1 text-white">{item.name}</h3>
                                <p className="text-sm text-white/90">{item.subText}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    ));

    DesktopDropdown.displayName = 'DesktopDropdown';

    // Memoized mobile dropdown component
    const MobileDropdown = React.memo(({ items, isOpen, ariaLabel }) => (
        <ul 
            className={`${screenSize.isSmall ? (isOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible') : 'hidden'} bg-white shadow-xl transition-all duration-300 rounded-xl mt-1 overflow-hidden`}
            aria-hidden={!isOpen}
            aria-label={ariaLabel}
        >
            {items.map((item, index) => (
                <li key={`${item.name}-${index}`} className="px-4 py-3 hover:bg-[#386861] hover:text-white text-lg border-b border-[#e6d9a1] last:border-b-0">
                    <Link 
                        href={item.href}
                        className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-white rounded"
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    ));

    MobileDropdown.displayName = 'MobileDropdown';

    return (
        <>
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SiteNavigationElement",
                        "name": "Main Navigation",
                        "url": typeof window !== 'undefined' ? window.location.origin : '',
                        "hasPart": [
                            {
                                "@type": "SiteNavigationElement",
                                "name": "Solutions",
                                "url": "/solutions"
                            },
                            {
                                "@type": "SiteNavigationElement", 
                                "name": "Audience",
                                "url": "/audience"
                            },
                            {
                                "@type": "SiteNavigationElement",
                                "name": "Resources", 
                                "url": "/resources"
                            }
                        ]
                    })
                }}
            />

            <nav 
                className="fixed top-[56px] left-0 right-0 z-40 text-black bg-white px-4 py-3 flex justify-between items-center flex-wrap h-auto lg:h-[100px] shadow-sm"
                aria-label="Main navigation"
                role="navigation"
            >
                <div className="flex items-center gap-x-1">
                    <Link 
                        href="/"
                        className="focus:outline-none focus:ring-2 focus:ring-[#386861] rounded"
                        aria-label="Go to homepage"
                    >
                        <Image
                            src={Logo1}
                            alt="Company Logo"
                            width={96}
                            height={96}
                            className="h-12 lg:h-12 w-auto"
                            priority
                            quality={90}
                        />
                    </Link>
                    <Link 
                        href="/"
                        className="focus:outline-none focus:ring-2 focus:ring-[#386861] rounded"
                        aria-label="Go to homepage"
                    >
                        <Image
                            src={Logo2}
                            alt="Company Logo Text"
                            width={96}
                            height={96}
                            className="h-12 lg:h-24 w-auto"
                            priority
                            quality={90}
                        />
                    </Link>
                </div>

                <button 
                    className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-[#386861] rounded p-1"
                    onClick={toggleMenu}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="main-menu"
                >
                    {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                </button>

                <ul
                    id="main-menu"
                    className={`flex flex-col md:flex-row md:flex items-start md:items-center ${getResponsiveStyles.gap} w-full md:w-auto mt-4 md:mt-0 ${isOpen ? 'flex' : 'hidden'} md:flex ${getResponsiveStyles.justify}`}
                    role="menubar"
                >
                    <li role="none">
                        <Link 
                            href="/"
                            className={`hover:text-gray-700 border-0 font-bold ${getResponsiveStyles.textSize} transition-colors focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
                            role="menuitem"
                        >
                            Home
                        </Link>
                    </li>
                    
                    <li role="none">
                        <Link 
                            href="/About"
                            className={`hover:text-gray-700 font-bold ${getResponsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
                            role="menuitem"
                        >
                            About Us
                        </Link>
                    </li>

                    {/* SOLUTIONS */}
                    <li 
                        className="relative group dropdown-container" 
                        role="none"
                        onMouseEnter={() => handleDesktopMouseEnter('solutions')}
                        onMouseLeave={() => handleDesktopMouseLeave('solutions')}
                    >
                        <button 
                            onClick={toggleSolutions} 
                            type="button" 
                            className={`hover:text-gray-700 flex items-center gap-1 font-bold ${getResponsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded transition-colors duration-200 ${solutionsOpen ? 'text-[#386861]' : ''}`}
                            aria-expanded={solutionsOpen}
                            aria-haspopup="true"
                            role="menuitem"
                            aria-controls="solutions-menu"
                            title="Click to toggle or hover to open"
                        >
                            Solutions <FaChevronDown size={12} className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <MobileDropdown 
                            items={navigationData.solutionsItems}
                            isOpen={solutionsOpen}
                            ariaLabel="Solutions submenu"
                        />

                        <DesktopDropdown 
                            items={navigationData.solutionsDesktopItems}
                            isOpen={solutionsOpen}
                            gridCols="grid-cols-3"
                            dropdownType="solutions"
                        />
                    </li>

                    {/* AUDIENCES DROPDOWN */}
                    <li 
                        className="relative group dropdown-container" 
                        role="none"
                        onMouseEnter={() => handleDesktopMouseEnter('services')}
                        onMouseLeave={() => handleDesktopMouseLeave('services')}
                    >
                        <button 
                            onClick={toggleServices} 
                            type="button" 
                            className={`hover:text-gray-700 flex items-center gap-1 font-bold ${getResponsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded transition-colors duration-200 ${servicesOpen ? 'text-[#386861]' : ''}`}
                            aria-expanded={servicesOpen}
                            aria-haspopup="true"
                            role="menuitem"
                            aria-controls="audience-menu"
                            title="Click to toggle or hover to open"
                        >
                            Audience <FaChevronDown size={12} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <MobileDropdown 
                            items={navigationData.audienceItems}
                            isOpen={servicesOpen}
                            ariaLabel="Audience submenu"
                        />

                        <DesktopDropdown 
                            items={navigationData.audienceDesktopItems}
                            isOpen={servicesOpen}
                            gridCols="grid-cols-4"
                            dropdownType="services"
                        />
                    </li>

                    {/* RESOURCES */}
                    <li 
                        className="relative group dropdown-container" 
                        role="none"
                        onMouseEnter={() => handleDesktopMouseEnter('resources')}
                        onMouseLeave={() => handleDesktopMouseLeave('resources')}
                    >
                        <button 
                            onClick={toggleResources} 
                            type="button" 
                            className={`hover:text-gray-700 flex items-center gap-1 font-bold ${getResponsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded transition-colors duration-200 ${resourcesOpen ? 'text-[#386861]' : ''}`}
                            aria-expanded={resourcesOpen}
                            aria-haspopup="true"
                            role="menuitem"
                            aria-controls="resources-menu"
                            title="Click to toggle or hover to open"
                        >
                            Resources <FaChevronDown size={12} className={`transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <MobileDropdown 
                            items={navigationData.resourcesItems}
                            isOpen={resourcesOpen}
                            ariaLabel="Resources submenu"
                        />

                        <DesktopDropdown 
                            items={navigationData.resourcesDesktopItems}
                            isOpen={resourcesOpen}
                            gridCols="grid-cols-2"
                            dropdownType="resources"
                        />
                    </li>

                    <li role="none">
                        <Link 
                            href="/Contact"
                            className={`hover:text-gray-700 font-bold ${getResponsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
                            role="menuitem"
                        >
                            Contact
                        </Link>
                    </li>

                    {/* Mobile Contact Info */}
                    <li className="flex flex-col gap-2 mt-4 md:hidden text-base text-gray-700" role="none">
                        <a href="mailto:example@gmail.com" className="hover:text-[#386861] transition-colors">
                            example@gmail.com
                        </a>
                        <a href="tel:+3929299453" className="hover:text-[#386861] transition-colors">
                            +3929 299 453
                        </a>
                        <div className="flex gap-3 mt-2 text-[#386861]" role="list" aria-label="Social media links">
                            {navigationData.socialMedia.map((social, i) => (
                                <a 
                                    key={`${social.label}-${i}`}
                                    href={social.href}
                                    aria-label={`Visit our ${social.label} page`}
                                    className="hover:text-[#294944] focus:outline-none focus:ring-2 focus:ring-[#386861] rounded-full p-1 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    role="listitem"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </li>
                </ul>

                {screenSize.showGetStarted && (
                    <Link 
                        href="/Contact"
                        className={`
                            hidden md:block bg-[#386861] text-white py-2 px-6 font-bold rounded-2xl
                            transition-all duration-300 hover:bg-[#294944] mt-4 md:mt-0 w-full md:w-auto
                            ${getResponsiveStyles.textSize} relative overflow-hidden group hover:shadow-lg hover:shadow-[#294944]/50
                            transform hover:-translate-y-1 active:translate-y-0
                            focus:outline-none focus:ring-2 focus:ring-[#386861] focus:ring-offset-2
                        `}
                        aria-label="Get started with our services"
                    >
                        Get Started Now ↗
                        <span className="absolute inset-0 opacity-0 bg-gradient-to-r from-[#F7D270]/60 to-transparent group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-white/20 group-hover:w-64 group-hover:h-64 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                    </Link>
                )}
            </nav>
        </>
    );
};

export default LowNav;