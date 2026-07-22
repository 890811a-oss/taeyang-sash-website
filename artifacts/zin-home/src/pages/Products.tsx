import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'wouter';

import windowBalcony from '@assets/generated_images/window-balcony.jpg';
import windowDouble from '@assets/generated_images/window-double.jpg';
import windowSystem from '@assets/generated_images/window-system.jpg';
import windowDoor from '@assets/generated_images/window-door.jpg';

const CATEGORIES = [
  { id: 'balcony', label: '발코니창' },
  { id: 'inner', label: '방창/내창' },
  { id: 'system', label: '시스템창호' },
  { id: 'door', label: '폴딩/터닝도어' },
];

const PRODUCTS = {
  balcony: [
    { img: windowBalcony, name: '태양 프리미엄 발코니 단창', desc: '기본에 충실한 실속형 발코니창', isNew: false },
    { img: windowBalcony, name: '태양 하이엔드 발코니 이중창', desc: '강력한 단열과 방음을 자랑하는 베스트셀러', isNew: true },
    { img: windowBalcony, name: '태양 뷰프레임 발코니창', desc: '프레임 두께를 최소화하여 탁 트인 뷰 제공', isNew: false },
  ],
  inner: [
    { img: windowDouble, name: '스마트 방창 단창', desc: '부드러운 개폐감, 깔끔한 디자인', isNew: false },
    { img: windowDouble, name: '스마트 방창 이중창', desc: '소음 완벽 차단, 수면의 질을 높이는 창', isNew: true },
  ],
  system: [
    { img: windowSystem, name: '유로 시스템 9', desc: '최상위 기밀성능의 프리미엄 시스템창호', isNew: true },
    { img: windowSystem, name: '유로 시스템 7', desc: '세련된 디자인과 단열을 동시에', isNew: false },
  ],
  door: [
    { img: windowDoor, name: '태양 터닝도어', desc: '베란다/다용도실의 완벽한 밀폐를 위한 도어', isNew: true },
    { img: windowDoor, name: '초슬림 3연동 중문', desc: '공간 활용도를 높이는 모던한 현관 중문', isNew: false },
  ]
};

export default function Products() {
  return (
    <div className="w-full bg-white pb-24">
      <div className="bg-gray-900 py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">제품보기</h1>
          <p className="text-gray-400 text-[15px] md:text-lg font-light break-keep px-4">
            에너지 효율 1등급, 태양산업의 독보적인 창호 라인업
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 lg:px-12 py-12 md:py-16">
        <Tabs defaultValue="balcony" className="w-full">
          <div className="flex justify-center mb-10 md:mb-16 -mx-5 px-5 md:mx-0 md:px-0 overflow-x-auto scrollbar-hide">
            <TabsList className="bg-transparent h-auto p-0 flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-12 border-b border-gray-200 w-full min-w-max md:min-w-0 rounded-none">
              {CATEGORIES.map(cat => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className="rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-gray-900 pb-3 md:pb-4 px-2 md:px-4 text-[15px] md:text-lg text-gray-500 data-[state=active]:text-gray-900 font-bold transition-all whitespace-nowrap"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {CATEGORIES.map(cat => (
            <TabsContent key={cat.id} value={cat.id} className="animate-in fade-in duration-500">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {PRODUCTS[cat.id as keyof typeof PRODUCTS].map((prod, i) => (
                  <Link key={i} href="#" className="group flex flex-col">
                    <div className="bg-[#f8f8f8] aspect-[4/3] flex justify-center items-center mb-4 md:mb-6 overflow-hidden relative border border-gray-100">
                      {prod.isNew && (
                        <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 bg-primary text-white text-[11px] md:text-[12px] font-bold px-2 md:px-3 py-1 tracking-wider">
                          NEW
                        </div>
                      )}
                      <img 
                        src={prod.img} 
                        alt={prod.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-primary transition-colors">{prod.name}</h3>
                      <p className="text-[14px] md:text-[15px] text-gray-500 font-light leading-relaxed break-keep">{prod.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
