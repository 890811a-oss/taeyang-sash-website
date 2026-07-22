import React from 'react';
import { Search, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const STORES = [
  { name: '태양산업 강남 본점', address: '서울 강남구 테헤란로 123', phone: '1588-0000', type: '본사직영' },
  { name: '태양산업 서초 전시장', address: '서울 서초구 서초대로 333', phone: '02-580-2000', type: '전시장' },
  { name: '태양산업 송파 대리점', address: '서울 송파구 올림픽로 444', phone: '02-410-3000', type: '대리점' },
  { name: '태양산업 분당 대리점', address: '경기 성남시 분당구 정자일로 222', phone: '031-710-4000', type: '대리점' },
];

export default function Stores() {
  return (
    <div className="w-full bg-white pb-24">
      <div className="bg-gray-900 py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">대리점안내</h1>
          <p className="text-gray-400 text-[15px] md:text-lg font-light px-4 break-keep">
            가까운 전시장과 대리점을 찾아 직접 샷시의 품질을 확인해보세요.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 lg:px-12 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="bg-gray-50 p-5 md:p-6 mb-4 md:mb-6">
              <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-[15px] md:text-base">매장 검색</h3>
              <div className="flex gap-2">
                <Input 
                  placeholder="지역명 또는 매장명" 
                  className="rounded-none bg-white border-gray-300 h-12 focus-visible:ring-gray-900 text-[15px]"
                />
                <Button className="rounded-none h-12 w-12 bg-gray-900 hover:bg-black p-0 shrink-0">
                  <Search className="w-5 h-5 text-white" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-4 max-h-[500px] md:max-h-[600px] overflow-y-auto pr-1 md:pr-2 scrollbar-hide">
              {STORES.map((store, i) => (
                <div key={i} className={`p-5 md:p-6 border ${i === 0 ? 'border-primary' : 'border-gray-200'} bg-white cursor-pointer hover:border-gray-900 transition-colors`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-[16px] md:text-lg text-gray-900">{store.name}</h4>
                    <span className={`text-[11px] font-bold px-2 py-1 ${i === 0 ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-600'}`}>
                      {store.type}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 mt-3 md:mt-4 text-gray-500 text-[13px] md:text-[14px]">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{store.address}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-gray-500 text-[13px] md:text-[14px]">
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>{store.phone}</span>
                  </div>
                  <div className="mt-4 md:mt-6">
                    <Button variant="outline" className="w-full h-10 md:h-12 rounded-none border-gray-300 hover:bg-gray-50 text-gray-900 text-[14px] md:text-[15px]">
                      방문 상담 예약
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Area */}
          <div className="flex-1 bg-[#e5e5e5] min-h-[300px] sm:min-h-[400px] md:min-h-[600px] flex items-center justify-center relative overflow-hidden border border-gray-200">
            {/* Map Placeholder */}
            <div className="text-center text-gray-500 z-10 bg-white/90 p-6 md:p-8 m-4">
              <MapPin className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
              <p className="font-bold text-lg md:text-xl text-gray-900 mb-1 md:mb-2">지도 API 연동 영역</p>
              <p className="text-[13px] md:text-sm">선택한 대리점의 위치가 표시됩니다.</p>
            </div>
            
            {/* Fake Map Grid */}
            <div className="absolute inset-0 border border-gray-300 opacity-30" style={{ backgroundImage: 'linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>

        </div>
      </div>
    </div>
  );
}
