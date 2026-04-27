import { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ChevronDown, ArrowRight } from 'lucide-react';
import MoLogo from '../../imports/MoLogo';

export function Navigation() {
  // Toggle to show/hide search bar (set to true when feature is ready)
  const showSearchBar = false;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('product');
  const navigationClickRef = useRef(false);
  const navigationTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy effect
  useEffect(() => {
    const sections = [
      'product',
      'how-it-works',
      'capabilities',
      'device-setup',
      'security',
      'faq',
      'connect',
    ];

    const handleScroll = () => {
      // Don't update active section if user just clicked navigation
      if (navigationClickRef.current) {
        return;
      }

      // Find which section is currently in view
      const scrollPosition = window.scrollY + 150; // Offset for fixed header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    // Set active section immediately on click
    setActiveSection(id);

    // Disable scroll-based updates during navigation
    navigationClickRef.current = true;

    // Clear any existing timeout
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }

    // Re-enable scroll-based updates after navigation completes
    navigationTimeoutRef.current = setTimeout(() => {
      navigationClickRef.current = false;
    }, 1000);

    // Disable scroll restoration during navigation
    (window as any).__disableScrollRestoration = true;
    // Clear saved position so navigation takes precedence over refresh position
    sessionStorage.removeItem('scrollPosition');

    const element = document.getElementById(id);
    if (element) {
      // Use instant scroll for more reliable navigation
      element.scrollIntoView({ behavior: 'instant', block: 'start' });
      setIsMobileMenuOpen(false);

      // Re-enable scroll restoration after navigation completes
      // and save the new position
      setTimeout(() => {
        (window as any).__disableScrollRestoration = false;
        // Save the new position after navigation
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      }, 100);
    } else {
      // If element not found, re-enable immediately
      (window as any).__disableScrollRestoration = false;
    }
  };

  const menuItems = [
    { label: 'Product', id: 'product' },
    { label: 'How it Works', id: 'how-it-works' },
    { label: 'Capabilities', id: 'capabilities' },
    { label: 'Setup', id: 'device-setup' },
    { label: 'Security', id: 'security' },
    { label: 'FAQs', id: 'faq' },
    { label: 'Support', id: 'connect' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row - Logo, Search, CTAs */}
        <div className="flex items-center justify-between h-16 border-b border-gray-200">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="flex items-center w-[140px]">
              <MoLogo />
            </div>
          </div>

          {/* Search Bar - Desktop */}
          {showSearchBar && (
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search 'Motilal Oswal'"
                  className="w-full h-11 pl-10 pr-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2B2E8C]/20 focus:border-[#2B2E8C]"
                />
              </div>
            </div>
          )}

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Become a Partner - Hidden */}
            {/* <button className="flex items-center gap-1 h-11 px-4 bg-white border border-[#2B2E8C] text-[#2B2E8C] text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors">
              <span>Become a Partner</span>
              <ChevronDown className="h-4 w-4" />
            </button> */}

            {/* Login */}
            <a
              href="https://invest.motilaloswal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 h-11 px-4 bg-white border border-[#2B2E8C] text-[#2B2E8C] text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              <span>Login</span>
              <ChevronDown className="h-4 w-4" />
            </a>

            {/* Open Demat Account */}
            <a
              href="https://www.motilaloswal.com/open-demat-account/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 h-11 px-4 bg-[#2B2E8C] text-white text-sm font-semibold rounded-xl hover:bg-[#1f2166] shadow-lg transition-colors"
            >
              <span className="uppercase">Open Demat Account</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Bottom Row - Navigation Menu (Desktop) */}
        <div className="hidden lg:flex items-center h-12 gap-10">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-1 text-[15px] font-normal tracking-tight transition-colors relative group ${activeSection === item.id
                  ? 'text-[#2B2E8C]'
                  : 'text-[#2E2A94] hover:text-[#1f2166]'
                }`}
            >
              <span>{item.label}</span>
              <ChevronDown className="h-4 w-4 opacity-70" />
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#2B2E8C] transition-transform origin-left ${activeSection === item.id
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                  }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          {/* Mobile Search */}
          {showSearchBar && (
            <div className="px-4 py-3 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search 'Motilal Oswal'"
                  className="w-full h-11 pl-10 pr-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2B2E8C]/20 focus:border-[#2B2E8C]"
                />
              </div>
            </div>
          )}

          <div className="px-4 py-4 space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center justify-between w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeSection === item.id
                    ? 'bg-[#2B2E8C]/10 text-[#2B2E8C]'
                    : 'text-[#2E2A94] hover:bg-gray-50'
                  }`}
              >
                <span>{item.label}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            ))}

            <div className="pt-4 space-y-2 border-t mt-2">
              {/* Become a Partner - Hidden */}
              {/* <button className="w-full h-11 px-4 bg-white border border-[#2B2E8C] text-[#2B2E8C] text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors">
                Become a Partner
              </button> */}
              <a
                href="https://invest.motilaloswal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-11 px-4 bg-white border border-[#2B2E8C] text-[#2B2E8C] text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
              >
                Login
              </a>
              <a
                href="https://www.motilaloswal.com/open-demat-account/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-11 px-4 bg-[#2B2E8C] text-white text-sm font-semibold rounded-xl hover:bg-[#1f2166] shadow-lg transition-colors uppercase"
              >
                Open Demat Account
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}