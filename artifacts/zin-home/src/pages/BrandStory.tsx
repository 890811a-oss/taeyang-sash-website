import React from 'react';
import brandBg from '@assets/generated_images/window-port1.jpg';
import hero1 from '@assets/generated_images/window-balcony.jpg';

export default function BrandStory() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] min-h-[400px] md:min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={brandBg} alt="Brand background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-5 animate-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-[13px] md:text-[15px] font-medium tracking-[0.3em] mb-4 md:mb-6 uppercase text-white/80">Brand Story</h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.2] tracking-tight mb-6 md:mb-8 break-keep">
            빛과 바람을<br />
            다스리는 기술
          </h1>
          <div className="w-8 md:w-10 h-[1px] bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Core Value */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-[900px] px-5 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 break-keep">
            대한민국 1등 창호 전문가, 태양산업
          </h3>
          <p className="text-[15px] sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12 md:mb-16 break-keep">
            집은 단순한 주거 공간을 넘어, 온전한 휴식을 누려야 하는 곳입니다.<br className="hidden sm:block"/>
            외부의 소음, 덥고 차가운 공기, 미세먼지로부터 가족을 지키기 위해<br className="hidden md:block"/>
            태양산업은 지난 20년간 오직 창호 하나만을 연구해왔습니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 pt-12 md:pt-16 border-t border-gray-200">
            <div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Insulation</h4>
              <p className="text-[14px] md:text-[15px] text-gray-500 font-light leading-relaxed break-keep">
                에너지 소비효율 1등급의<br className="hidden sm:block" />
                완벽한 단열 성능을 자랑합니다.
              </p>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Durability</h4>
              <p className="text-[14px] md:text-[15px] text-gray-500 font-light leading-relaxed break-keep">
                거센 태풍에도 흔들림 없는<br className="hidden sm:block" />
                강력한 내구성을 보장합니다.
              </p>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Design</h4>
              <p className="text-[14px] md:text-[15px] text-gray-500 font-light leading-relaxed break-keep">
                뷰를 해치지 않는 슬림한 프레임으로<br className="hidden sm:block" />
                공간의 품격을 높입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <img src={hero1} alt="Premium Window" className="w-full h-auto shadow-xl" />
          </div>
          <div className="w-full md:w-1/2 md:pr-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight break-keep">
              1mm의 오차도 허용하지 않는<br />
              완벽한 시공
            </h3>
            <p className="text-[15px] md:text-lg text-gray-600 font-light leading-relaxed mb-4 md:mb-6 break-keep">
              아무리 좋은 창호도 시공이 잘못되면 제 기능을 발휘할 수 없습니다. 태양산업은 본사에서 직접 교육받은 전문 시공팀이 레이저 정밀 실측부터 꼼꼼한 마감 처리까지 책임집니다.
            </p>
            <p className="text-[15px] md:text-lg text-gray-600 font-light leading-relaxed break-keep">
              원데이(1-Day) 철거 및 시공 시스템으로 거주 중인 집에서도 먼지와 소음 걱정 없이 단 하루 만에 창호 교체가 가능합니다. 당신의 공간, 태양산업이 완벽하게 바꿔드립니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
