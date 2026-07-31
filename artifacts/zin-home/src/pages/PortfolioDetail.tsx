import React, { useState } from 'react';
import { useParams, Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { PORTFOLIOS } from '@/data/portfolioData';
import { BeforeAfterSlider } from '@/components/portfolio/BeforeAfterSlider';
import { Lightbox } from '@/components/portfolio/Lightbox';

export default function PortfolioDetail() {
  const params = useParams();
  const portfolioId = params.id ? Number(params.id) : null;
  const portfolio = PORTFOLIOS.find(p => p.id === portfolioId);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!portfolio) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">시공사례를 찾을 수 없습니다</h1>
          <Link href="/portfolio" className="text-primary hover:underline">목록으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);

  const handleKeyDown = (e: React.KeyboardEvent, images: string[], index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(images, index);
    }
  };

  const hasDetailedImages = portfolio.images && (portfolio.images.before || portfolio.images.during || portfolio.images.after);

  return (
    <div className="w-full bg-white pb-24">
      {/* Header */}
      <div className="bg-white py-12 md:py-16 border-b border-gray-100">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-12">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-[14px] md:text-[15px] mb-8">
            <ArrowLeft className="w-4 h-4" />
            시공사례 목록
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[11px] md:text-[12px] font-medium text-white bg-gray-900 px-3 py-1.5">
              {portfolio.category}
            </span>
            {portfolio.tags.map(tag => (
              <span key={tag} className="text-[11px] md:text-[12px] px-3 py-1.5 bg-white border border-gray-200 text-gray-500">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4 tracking-tight break-keep">
            {portfolio.title}
          </h1>
          
          {portfolio.description && (
            <p className="text-gray-600 text-[15px] md:text-lg font-light leading-relaxed break-keep mb-6 max-w-3xl">
              {portfolio.description}
            </p>
          )}

          <p className="text-[13px] md:text-[14px] text-gray-500 font-light">시공: {portfolio.author}</p>
        </div>
      </div>

      {/* Meta Info */}
      {portfolio.meta && (
        <div className="bg-gray-50 py-12 md:py-16 border-b border-gray-100">
          <div className="mx-auto max-w-[1200px] px-5 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolio.meta.area && (
                <div>
                  <h3 className="text-[11px] md:text-[12px] font-semibold text-gray-400 tracking-[0.15em] mb-2 uppercase">평수</h3>
                  <p className="text-[15px] md:text-base text-gray-900 font-light">{portfolio.meta.area}</p>
                </div>
              )}
              {portfolio.meta.duration && (
                <div>
                  <h3 className="text-[11px] md:text-[12px] font-semibold text-gray-400 tracking-[0.15em] mb-2 uppercase">시공 기간</h3>
                  <p className="text-[15px] md:text-base text-gray-900 font-light">{portfolio.meta.duration}</p>
                </div>
              )}
              {portfolio.meta.workScope && portfolio.meta.workScope.length > 0 && (
                <div>
                  <h3 className="text-[11px] md:text-[12px] font-semibold text-gray-400 tracking-[0.15em] mb-2 uppercase">시공 부위</h3>
                  <p className="text-[15px] md:text-base text-gray-900 font-light">{portfolio.meta.workScope.join(', ')}</p>
                </div>
              )}
              {portfolio.meta.materials && portfolio.meta.materials.length > 0 && (
                <div>
                  <h3 className="text-[11px] md:text-[12px] font-semibold text-gray-400 tracking-[0.15em] mb-2 uppercase">주요 자재</h3>
                  <p className="text-[15px] md:text-base text-gray-900 font-light">{portfolio.meta.materials.join(', ')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {hasDetailedImages ? (
        <>
          {/* BEFORE Section */}
          {portfolio.images?.before && portfolio.images.before.length > 0 && (
            <section className="py-16 md:py-24 bg-white">
              <div className="mx-auto max-w-[1200px] px-5 lg:px-12">
                <div className="mb-12">
                  <span className="text-primary text-xs font-semibold tracking-[0.2em] mb-3 block">BEFORE</span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 tracking-tight mb-4">시공 전</h2>
                  <p className="text-gray-600 text-[15px] md:text-lg font-light leading-relaxed break-keep">
                    20년 이상 노후된 샷시로 인해 외풍과 소음이 심했고, 내창의 단열 성능도 크게 저하된 상태였습니다.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  {portfolio.images.before.map((img, idx) => (
                    <button 
                      key={idx}
                      className="relative overflow-hidden aspect-[4/3] bg-gray-100 cursor-pointer group w-full"
                      onClick={() => openLightbox(portfolio.images!.before!, idx)}
                      onKeyDown={(e) => handleKeyDown(e, portfolio.images!.before!, idx)}
                      aria-label={`시공 전 사진 ${idx + 1} 크게 보기`}
                    >
                      <img 
                        src={img} 
                        alt={`시공 전 ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* PROCESS Section */}
          {portfolio.images?.during && portfolio.images.during.length > 0 && (
            <section className="py-16 md:py-24 bg-gray-50">
              <div className="mx-auto max-w-[1200px] px-5 lg:px-12">
                <div className="mb-12">
                  <span className="text-primary text-xs font-semibold tracking-[0.2em] mb-3 block">PROCESS</span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 tracking-tight mb-4">시공 과정</h2>
                  <p className="text-gray-600 text-[15px] md:text-lg font-light leading-relaxed break-keep">
                    기존 샷시를 철거하고 정밀 실측 후 맞춤 제작된 새 창호를 설치합니다. 고기밀 우레탄폼으로 완벽한 기밀성을 확보합니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {portfolio.images.during.map((img, idx) => (
                    <button 
                      key={idx}
                      className="relative overflow-hidden aspect-[4/3] bg-gray-100 cursor-pointer group w-full"
                      onClick={() => openLightbox(portfolio.images!.during!, idx)}
                      onKeyDown={(e) => handleKeyDown(e, portfolio.images!.during!, idx)}
                      aria-label={`시공 과정 사진 ${idx + 1} 크게 보기`}
                    >
                      <img 
                        src={img} 
                        alt={`시공 과정 ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* AFTER Section */}
          {portfolio.images?.after && portfolio.images.after.length > 0 && (
            <section className="py-16 md:py-24 bg-white">
              <div className="mx-auto max-w-[1200px] px-5 lg:px-12">
                <div className="mb-12">
                  <span className="text-primary text-xs font-semibold tracking-[0.2em] mb-3 block">AFTER</span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 tracking-tight mb-4">시공 완료</h2>
                  <p className="text-gray-600 text-[15px] md:text-lg font-light leading-relaxed break-keep">
                    깨끗하게 설치 완료된 새 창호. 외풍 차단은 물론 채광과 개방감까지 확보되어 쾌적한 실내 환경을 되찾았습니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12">
                  {portfolio.images.after.map((img, idx) => (
                    <button 
                      key={idx}
                      className="relative overflow-hidden aspect-[4/3] bg-gray-100 cursor-pointer group w-full"
                      onClick={() => openLightbox(portfolio.images!.after!, idx)}
                      onKeyDown={(e) => handleKeyDown(e, portfolio.images!.after!, idx)}
                      aria-label={`시공 완료 사진 ${idx + 1} 크게 보기`}
                    >
                      <img 
                        src={img} 
                        alt={`시공 완료 ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>

                {/* Before/After Slider */}
                {portfolio.images.before && portfolio.images.before.length > 0 && (
                  <div className="mt-16">
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-6">변화를 비교해보세요</h3>
                    <BeforeAfterSlider 
                      beforeImage={portfolio.images.before[0]}
                      afterImage={portfolio.images.after[0]}
                      beforeAlt="시공 전 발코니"
                      afterAlt="시공 후 발코니"
                    />
                  </div>
                )}
              </div>
            </section>
          )}
        </>
      ) : (
        /* Fallback for cases without detailed images */
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[1200px] px-5 lg:px-12">
            <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
              <img 
                src={portfolio.thumbnail} 
                alt={portfolio.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 tracking-tight break-keep">
            우리 집도 이렇게 바꿀 수 있을까요?
          </h2>
          <p className="text-white/80 text-[15px] md:text-lg font-light mb-10 break-keep">
            무료 방문견적으로 우리 집에 꼭 맞는 창호 솔루션을 제안해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#quote-form"
              className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 h-14 md:h-16 px-10 text-[15px] md:text-[16px] font-medium transition-colors rounded-none"
            >
              무료 방문견적 신청
            </Link>
            <a 
              href="tel:1588-0000"
              className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white hover:bg-white/10 h-14 md:h-16 px-10 text-[15px] md:text-[16px] font-medium transition-colors rounded-none"
            >
              상담센터 1588-0000
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox 
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
}
