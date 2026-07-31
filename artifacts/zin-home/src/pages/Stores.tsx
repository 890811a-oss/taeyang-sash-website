import React from 'react';
import { Search, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const STORES = [
  { name: '태양산업 강남 본점', address: '서울 강남구 테헤란로 123', phone: '전화 문의', type: '본사직영' },
  { name: '태양산업 서초 전시장', address: '서울 서초구 서초대로 333', phone: '02-580-2000', type: '전시장' },
  { name: '태양산업 송파 대리점', address: '서울 송파구 올림픽로 444', phone: '02-410-3000', type: '대리점' },
  { name: '태양산업 분당 대리점', address: '경기 성남시 분당구 정자일로 222', phone: '031-710-4000', type: '대리점' },
];

export default function Stores() {
  return (
    <div className="w-full bg-white pb-24">
      <div className="bg-white py-20 md:py-32 border-b border-gray-100">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12 text-center">
          <span className="block text-primary text-xs font-semibold tracking-[0.2em] mb-4">STORES</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 tracking-tight">대리점안내</h1>
          <p className="text-gray-500 text-[15px] md:text-lg font-light px-4 break-keep">
            가까운 전시장과 대리점을 찾아 직접 샷시의 품질을 확인해보세요.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10">
          
          {/* Sidebar */}
          <div className="w-full lg:w-[420px] shrink-0">
            <div className="bg-gray-50 p-6 md:p-8 mb-6">
              <h3 className="font-medium text-gray-900 mb-4 text-base">매장 검색</h3>
              <div className="flex gap-3">
                <Input 
                  placeholder="지역명 또는 매장명" 
                  className="rounded-none bg-white border-gray-200 h-12 focus-visible:ring-0 focus-visible:border-gray-900 text-[15px]"
                />
                <Button className="rounded-none h-12 w-12 bg-gray-900 hover:bg-black p-0 shrink-0 transition-colors">
                  <Search className="w-5 h-5 text-white" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4 max-h-[600px] md:max-h-[700px] overflow-y-auto pr-2 scrollbar-hide">
              {STORES.map((store, i) => (
                <div key={i} className={`p-6 md:p-8 ${i === 0 ? 'bg-primary/5 border-primary border-l-4' : 'bg-white border border-gray-100'} cursor-pointer hover:border-gray-900 transition-all`}>
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-[16px] md:text-lg text-gray-900">{store.name}</h4>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 ${i === 0 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                      {store.type}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 mt-4 text-gray-500 text-[13px] md:text-[14px] font-light">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{store.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5 mt-2.5 text-gray-500 text-[13px] md:text-[14px] font-light">
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>{store.phone}</span>
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full h-11 md:h-12 rounded-none border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900 text-gray-900 text-[14px] md:text-[15px] font-medium transition-colors">
                      방문 상담 예약
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Area */}
          <div className="flex-1 bg-gray-50 min-h-[300px] sm:min-h-[400px] md:min-h-[700px] flex items-center justify-center relative overflow-hidden">
            {/* Map Placeholder */}
            <div className="text-center text-gray-500 z-10 bg-white p-8 md:p-12 m-6">
              <MapPin className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-primary" />
              <p className="font-medium text-lg md:text-xl text-gray-900 mb-2">지도 API 연동 영역</p>
              <p className="text-[13px] md:text-sm font-light text-gray-500">선택한 대리점의 위치가 표시됩니다.</p>
            </div>
            
            {/* Fake Map Grid */}
            <div className="absolute inset-0 border border-gray-200 opacity-30" style={{ backgroundImage: 'linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>

        </div>
      </div>
    </div>
  );
}
