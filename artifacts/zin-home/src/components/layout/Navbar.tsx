import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, Menu, X, Sun, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  { href: '/brand', label: '브랜드스토리' },
  { href: '/portfolio', label: '시공사례' },
  { href: '/products', label: '제품보기' },
  { href: '/guide', label: '창호가이드' },
  { href: '/contact', label: '무료견적신청' },
  { href: '/stores', label: '대리점안내' },
  { href: '/events', label: '이벤트' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen ? 'bg-white border-b border-gray-100 shadow-sm' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100/50'
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center gap-1.5 md:gap-2 group">
              <Sun className="h-6 w-6 md:h-7 md:w-7 text-primary group-hover:rotate-45 transition-transform duration-700" />
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-gray-900">태양산업</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors hover:text-primary ${
                    location === link.href ? 'text-primary' : 'text-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4 text-gray-800">
              <div className="flex items-center gap-2 text-primary font-medium text-[15px]">
                <Phone className="h-4 w-4" />
                <span>1588-0000</span>
              </div>
              <div className="w-[1px] h-3 bg-gray-300 mx-2"></div>
              <Button 
                className="rounded-none bg-gray-900 hover:bg-black text-white h-10 px-6 font-medium text-[13px]"
                onClick={() => window.location.href = '/contact'}
              >
                빠른 견적신청
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-gray-900 p-2 -mr-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Full Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 bg-white z-40 overflow-y-auto animate-in fade-in duration-200">
            <nav className="flex flex-col px-6 py-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[17px] font-bold py-4 border-b border-gray-100 flex items-center justify-between ${
                    location === link.href ? 'text-primary' : 'text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="mt-10 space-y-6">
                <div className="flex flex-col items-center justify-center p-6 bg-gray-50 border border-gray-100 text-center">
                  <span className="text-sm text-gray-500 font-medium mb-2">고객센터</span>
                  <div className="flex items-center gap-2 text-primary font-bold text-2xl mb-1">
                    <Phone className="h-5 w-5" />
                    <a href="tel:1588-0000">1588-0000</a>
                  </div>
                  <span className="text-xs text-gray-400">평일 09:00 - 18:00 (주말 휴무)</span>
                </div>
                
                <Button 
                  className="w-full rounded-none bg-gray-900 hover:bg-black text-white h-14 text-[16px] font-bold"
                  onClick={() => window.location.href = '/contact'}
                >
                  무료 견적신청하기
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <div className="h-16 md:h-20" />
    </>
  );
}
