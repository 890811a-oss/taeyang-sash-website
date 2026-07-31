import React from 'react';
import { MessageCircle, PhoneCall, Calculator } from 'lucide-react';
import { Link } from 'wouter';

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col gap-2 md:gap-3">
      {/* Kakao Talk */}
      <a 
        href="https://open.kakao.com/o/sBZKFAGi" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg transition-transform hover:-translate-y-1"
        style={{ backgroundColor: '#FEE500', color: '#371D1E' }}
        aria-label="카카오톡 상담"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 fill-current" />
        <span className="hidden md:block absolute right-full mr-4 bg-gray-900 text-white text-[13px] font-medium px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
          카카오톡 상담
        </span>
      </a>

      {/* Phone */}
      <a 
        href="tel:010-3996-9749"
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 text-gray-800 shadow-lg transition-transform hover:-translate-y-1 hover:border-gray-900"
        aria-label="전화 상담"
      >
        <PhoneCall className="w-4 h-4 md:w-5 md:h-5" />
        <span className="hidden md:block absolute right-full mr-4 bg-gray-900 text-white text-[13px] font-medium px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
          전화 상담
        </span>
      </a>

      {/* Quote */}
      <Link 
        href="/contact"
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-900 text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-black"
        aria-label="무료 방문견적"
      >
        <Calculator className="w-4 h-4 md:w-5 md:h-5" />
        <span className="hidden md:block absolute right-full mr-4 bg-gray-900 text-white text-[13px] font-medium px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
          무료 방문견적
        </span>
      </Link>
    </div>
  );
}
