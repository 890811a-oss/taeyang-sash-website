import React from 'react';
import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';

import windowBalcony from '@assets/generated_images/window-balcony.jpg';
import windowDouble from '@assets/generated_images/window-double.jpg';
import windowSystem from '@assets/generated_images/window-system.jpg';

const GUIDES = [
  { img: windowBalcony, title: '창호 교체 전 반드시 체크해야 할 5가지', category: '기초 가이드', date: '2023.10.15' },
  { img: windowDouble, title: '단창 vs 이중창, 우리 집에 맞는 창호는?', category: '제품 선택', date: '2023.10.12' },
  { img: windowSystem, title: '로이(Low-E) 유리가 왜 중요한가요?', category: '자재 정보', date: '2023.10.05' },
  { img: windowBalcony, title: '거주 중 샷시 교체, 먼지/소음 걱정 없는 이유', category: '시공 가이드', date: '2023.09.28' },
  { img: windowSystem, title: '시스템창호와 일반창호의 차이점 파헤치기', category: '제품 선택', date: '2023.09.20' },
  { img: windowDouble, title: '겨울철 결로 현상 완벽하게 예방하는 방법', category: '유지/보수', date: '2023.09.15' },
];

export default function Guide() {
  return (
    <div className="w-full bg-white pb-24">
      <div className="bg-gray-900 py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">창호 가이드</h1>
          <p className="text-gray-400 text-[15px] md:text-lg font-light px-4 break-keep">
            어렵게 느껴지는 샷시 교체, 태양산업이 알기 쉽게 설명해 드립니다.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 lg:px-12 py-12 md:py-16">
        
        {/* Featured Guide */}
        <div className="mb-12 md:mb-20">
          <div className="relative aspect-square md:aspect-[21/9] overflow-hidden group cursor-pointer bg-gray-900">
            <img src={windowBalcony} alt="Featured" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-16 md:left-16 md:right-10">
              <span className="text-white border border-white/50 px-3 py-1 text-xs md:text-sm font-medium mb-3 md:mb-4 inline-block">필독 가이드</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-4 leading-tight break-keep">우리 집 샷시 수명은 몇 년?<br className="hidden sm:block"/>교체 타이밍 확인하는 방법</h2>
              <div className="flex items-center text-primary font-bold hover:text-white transition-colors text-[14px] md:text-[16px]">
                자세히 보기 <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 gap-y-12 md:gap-y-16">
          {GUIDES.map((guide, i) => (
            <Link key={i} href="#" className="group">
              <div className="overflow-hidden aspect-[4/3] mb-4 md:mb-6 relative border border-gray-100">
                <img 
                  src={guide.img} 
                  alt={guide.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center mb-2 md:mb-3">
                <span className="text-[12px] md:text-[13px] font-bold text-primary tracking-wider">{guide.category}</span>
                <span className="text-[12px] md:text-[13px] text-gray-400">{guide.date}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug break-keep">
                {guide.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
