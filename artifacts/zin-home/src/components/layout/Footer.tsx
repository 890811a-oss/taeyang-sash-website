import React from 'react';
import { Link } from 'wouter';
import { Sun } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111111] pt-12 md:pt-16 pb-16 md:pb-12 text-gray-400">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-12 border-b border-gray-800 pb-10 md:pb-12">
          <div className="md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <Sun className="h-6 w-6 text-white" />
              <span className="text-xl font-bold tracking-tighter text-white">태양산업</span>
            </div>
            <p className="text-[13px] md:text-[14px] leading-relaxed mb-6 text-gray-500 break-keep">
              빛과 바람을 다스리는 기술,<br />
              대한민국 프리미엄 창호의 기준을 만듭니다.
            </p>
          </div>
          
          <div className="hidden md:block">
            <h4 className="font-bold text-white mb-4 text-[15px]">회사소개</h4>
            <ul className="space-y-3">
              <li><Link href="/brand" className="text-[13px] md:text-[14px] hover:text-white transition-colors">브랜드스토리</Link></li>
              <li><Link href="/portfolio" className="text-[13px] md:text-[14px] hover:text-white transition-colors">시공실적</Link></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-white transition-colors">오시는 길</a></li>
            </ul>
          </div>
          
          <div className="hidden md:block">
            <h4 className="font-bold text-white mb-4 text-[15px]">고객지원</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-[13px] md:text-[14px] hover:text-white transition-colors">무료견적신청</Link></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-white transition-colors">A/S 접수</a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-white transition-colors">자주 묻는 질문</a></li>
              <li><Link href="/guide" className="text-[13px] md:text-[14px] hover:text-white transition-colors">창호가이드</Link></li>
            </ul>
          </div>
          
          <div className="pt-6 md:pt-0 border-t border-gray-800 md:border-0">
            <h4 className="font-bold text-white mb-3 md:mb-4 text-[14px] md:text-[15px]">고객센터</h4>
            <p className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">1588-0000</p>
            <p className="text-[13px] md:text-[14px] text-gray-500 leading-relaxed break-keep">
              상담시간: 평일 09:00 - 18:00<br />
              (주말 및 공휴일 휴무)<br />
              이메일: help@taeyang-sash.co.kr
            </p>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 md:gap-4">
          <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 text-[12px] md:text-[13px]">
            <a href="#" className="font-bold text-white">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">이메일무단수집거부</a>
          </div>
          <div className="text-[11px] md:text-[12px] text-gray-600 text-left lg:text-right leading-relaxed">
            <p className="mb-1">㈜태양산업 | 대표이사: 김태양 | 사업자등록번호: 123-45-67890</p>
            <p>서울특별시 강남구 테헤란로 123 태양빌딩 5층</p>
            <p className="mt-2 text-gray-700">© TAEYANG INDUSTRY. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
