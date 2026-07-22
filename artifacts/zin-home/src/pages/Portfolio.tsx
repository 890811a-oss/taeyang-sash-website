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
      <div className="bg-white py-20 md:py-32 border-b border-gray-100">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12 text-center">
          <span className="block text-primary text-xs font-semibold tracking-[0.2em] mb-4">PORTFOLIO</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 tracking-tight">시공사례</h1>
          <p className="text-gray-500 text-[15px] md:text-lg font-light break-keep px-4">
            태양산업의 정밀한 기술력으로 완성된 고객님들의 공간
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 lg:px-12 py-16 md:py-24">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 md:mb-16 gap-6">
          <div className="flex w-full lg:w-auto overflow-x-auto pb-2 scrollbar-hide -mx-5 px-5 lg:mx-0 lg:px-0 lg:flex-wrap gap-3 lg:justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-[14px] md:text-[15px] transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat 
                    ? 'bg-gray-900 text-white font-medium' 
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <button className="hidden lg:flex items-center gap-2 text-gray-500 text-sm hover:text-gray-900 border border-gray-200 px-5 py-2.5 bg-white rounded-none transition-colors">
            <Filter className="w-4 h-4" />
            상세필터
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {filtered.map((item) => (
            <Link key={item.id} href={`#`} className="group block cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] mb-5 bg-gray-50">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-[11px] md:text-[12px] font-medium text-white bg-gray-900 px-2.5 py-1">
                  {item.category}
                </span>
                {item.tags.map(tag => (
                  <span key={tag} className="text-[11px] md:text-[12px] px-2.5 py-1 bg-white border border-gray-200 text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-1 mb-2">
                {item.title}
              </h3>
              <p className="text-[13px] md:text-[14px] text-gray-500 font-light">{item.author}</p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-16 md:mt-24">
          <Button variant="outline" className="w-full sm:w-auto h-12 md:h-14 px-16 border-gray-200 text-gray-600 rounded-none hover:border-gray-900 hover:text-gray-900 text-[14px] md:text-[15px] transition-colors">
            더보기 (1/4)
          </Button>
        </div>
      </div>
    </div>
  );
}
