import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { Link } from 'wouter';

import windowPort1 from '@assets/generated_images/window-port1.jpg';
import windowPort2 from '@assets/generated_images/window-port2.jpg';
import windowBalcony from '@assets/generated_images/window-balcony.jpg';
import windowSystem from '@assets/generated_images/window-system.jpg';

const CATEGORIES = ['전체', '발코니창', '내창/방창', '시스템창호', '폴딩/터닝도어'];

const PORTFOLIOS = [
  { id: 1, category: '발코니창', img: windowBalcony, title: '탁 트인 시야, 고단열 발코니창 시공', tags: ['30평대', '아파트'], author: '태양산업 강남점' },
  { id: 2, category: '시스템창호', img: windowSystem, title: '유럽형 시스템창호로 완성한 거실', tags: ['40평대', '주택'], author: '태양산업 서초점' },
  { id: 3, category: '내창/방창', img: windowPort1, title: '포근하고 조용한 침실을 위한 이중창', tags: ['20평대', '아파트'], author: '본사 직영팀' },
  { id: 4, category: '폴딩/터닝도어', img: windowPort2, title: '베란다 확장 대신 선택한 폴딩도어', tags: ['30평대', '아파트'], author: '본사 직영팀' },
  { id: 5, category: '발코니창', img: windowBalcony, title: '외풍 차단 완벽! 노후 샷시 교체기', tags: ['50평대', '아파트'], author: '태양산업 송파점' },
  { id: 6, category: '시스템창호', img: windowSystem, title: '단열과 디자인을 모두 잡은 단독주택', tags: ['주택', '신축'], author: '태양산업 프리미엄' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filtered = activeCategory === '전체' 
    ? PORTFOLIOS 
    : PORTFOLIOS.filter(p => p.category === activeCategory);

  return (
    <div className="w-full bg-white pb-24">
      <div className="bg-gray-900 py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">시공실적</h1>
          <p className="text-gray-400 text-[15px] md:text-lg font-light break-keep px-4">
            태양산업의 완벽한 기술력으로 완성된 고객님들의 공간을 확인하세요.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 lg:px-12 py-12 md:py-16">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 md:mb-12 gap-4 md:gap-6">
          <div className="flex w-full lg:w-auto overflow-x-auto pb-2 scrollbar-hide -mx-5 px-5 lg:mx-0 lg:px-0 lg:flex-wrap gap-2 lg:justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 md:px-6 md:py-2.5 text-[14px] md:text-[15px] transition-colors border whitespace-nowrap shrink-0 ${
                  activeCategory === cat 
                    ? 'bg-gray-900 text-white border-gray-900 font-medium' 
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <button className="hidden lg:flex items-center gap-2 text-gray-600 text-sm hover:text-gray-900 border border-gray-200 px-4 py-2 bg-white rounded-none">
            <Filter className="w-4 h-4" />
            상세필터
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 gap-y-10 lg:gap-y-12">
          {filtered.map((item) => (
            <Link key={item.id} href={`#`} className="group block cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] mb-3 md:mb-4 border border-gray-100">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="flex flex-wrap gap-2 mb-2 md:mb-3">
                <span className="text-[11px] md:text-[12px] font-medium text-white bg-gray-900 px-2 py-1">
                  {item.category}
                </span>
                {item.tags.map(tag => (
                  <span key={tag} className="text-[11px] md:text-[12px] px-2 py-1 bg-white border border-gray-200 text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1 mb-1 md:mb-2">
                {item.title}
              </h3>
              <p className="text-[12px] md:text-[13px] text-gray-500 font-light">{item.author}</p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-20">
          <Button variant="outline" className="w-full sm:w-auto h-12 md:h-14 px-16 border-gray-300 text-gray-600 rounded-none hover:bg-gray-50 text-[14px] md:text-[15px]">
            더보기 (1/4)
          </Button>
        </div>
      </div>
    </div>
  );
}
