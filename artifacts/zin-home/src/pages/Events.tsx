import React from 'react';
import windowBalcony from '@assets/generated_images/window-balcony.jpg';
import windowSystem from '@assets/generated_images/window-system.jpg';

const EVENTS = [
  { img: windowBalcony, title: '가을맞이 창호 교체 특별전', desc: '전체 창호 교체 시 로이유리 100% 무상 업그레이드', date: '2023.10.01 ~ 11.30', status: '진행중' },
  { img: windowSystem, title: '태양산업 프리미엄 전시장 방문 이벤트', desc: '방문 견적만 받아도 신세계 상품권 증정', date: '2023.10.15 ~ 11.15', status: '진행중' },
  { img: windowBalcony, title: '원데이(1-Day) 시공비 지원 프로모션', desc: '철거 및 폐기물 처리 비용 전액 본사 지원', date: '2023.09.01 ~ 10.31', status: '진행중' },
  { img: windowSystem, title: '여름 장마 대비 방수/방음 시스템창 할인전', desc: '시스템 창호 15% 할인 혜택', date: '2023.07.01 ~ 08.31', status: '종료' },
];

export default function Events() {
  return (
    <div className="w-full bg-white pb-24">
      <div className="bg-gray-900 py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">이벤트</h1>
          <p className="text-gray-400 text-[15px] md:text-lg font-light px-4 break-keep">
            태양산업 고객님들만을 위한 풍성한 혜택을 확인하세요.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 lg:px-12 py-12 md:py-16">
        
        <div className="flex gap-4 md:gap-6 border-b border-gray-200 mb-8 md:mb-12 overflow-x-auto scrollbar-hide whitespace-nowrap -mx-5 px-5 md:mx-0 md:px-0">
          <button className="px-2 md:px-4 py-3 md:py-4 text-[15px] md:text-[16px] font-bold text-gray-900 border-b-2 border-gray-900 shrink-0">
            진행중인 이벤트
          </button>
          <button className="px-2 md:px-4 py-3 md:py-4 text-[15px] md:text-[16px] font-medium text-gray-400 hover:text-gray-900 transition-colors shrink-0">
            종료된 이벤트
          </button>
          <button className="px-2 md:px-4 py-3 md:py-4 text-[15px] md:text-[16px] font-medium text-gray-400 hover:text-gray-900 transition-colors shrink-0">
            당첨자 발표
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 gap-y-12">
          {EVENTS.map((ev, i) => (
            <div key={i} className={`group cursor-pointer ${ev.status === '종료' ? 'opacity-60' : ''}`}>
              <div className="relative overflow-hidden aspect-[16/9] mb-4 md:mb-6 border border-gray-100 bg-gray-50">
                <img 
                  src={ev.img} 
                  alt={ev.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {ev.status === '종료' && (
                  <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
                    <span className="text-white font-bold text-lg md:text-xl tracking-wider">END</span>
                  </div>
                )}
                {ev.status === '진행중' && (
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-primary text-white text-[11px] md:text-[12px] font-bold px-3 py-1.5 shadow-sm">
                    진행중
                  </div>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors break-keep">
                {ev.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 mb-3 md:mb-4 font-light break-keep">{ev.desc}</p>
              <p className="text-[13px] md:text-[14px] text-gray-400 font-mono">{ev.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
