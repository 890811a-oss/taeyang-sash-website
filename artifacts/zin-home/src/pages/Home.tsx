import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'wouter';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight, ArrowRight, ShieldCheck, Clock, Wrench, CheckCircle2, ChevronLeft, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useEmblaCarousel from 'embla-carousel-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from '@/components/ui/checkbox';

import heroVideo from '@assets/hero-video.mp4';
import windowBalcony from '@assets/generated_images/window-balcony.jpg';
import windowSystem from '@assets/generated_images/window-system.jpg';
import windowDouble from '@assets/generated_images/window-double.jpg';
import { PORTFOLIOS } from '@/data/portfolioData';

const quoteSchema = z.object({
  name: z.string().min(2, '이름을 정확히 입력해주세요.'),
  phone: z.string().min(10, '연락처를 정확히 입력해주세요.'),
  region: z.string().min(2, '시공 지역을 입력해주세요.'),
  type: z.string().min(1, '창호 종류를 선택해주세요.'),
  agree: z.boolean().refine(val => val === true, {
    message: '개인정보 수집 동의가 필요합니다.',
  }),
});

export default function Home() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof quoteSchema>>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { name: '', phone: '', region: '', type: '', agree: false },
  });

  function onSubmit(values: z.infer<typeof quoteSchema>) {
    toast({
      title: "견적 신청이 접수되었습니다.",
      description: "담당자가 확인 후 빠르게 연락드리겠습니다.",
      className: "rounded-none border-gray-900 bg-white",
    });
    form.reset();
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'start',
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (sessionStorage.getItem('scrollTo') === 'quote-form') {
      sessionStorage.removeItem('scrollTo');
      setTimeout(() => {
        document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <div className="w-full bg-white">
      {/* 1. HERO (Video) */}
      <section className="relative h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-12">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <span className="inline-block px-4 py-1.5 bg-primary text-white text-[11px] md:text-xs font-semibold tracking-[0.2em] mb-6">
                PREMIUM SASH & WINDOW
              </span>
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-6 break-keep">
                빛과 바람을<br />다스리는 기술
              </h1>
              <p className="text-white/80 text-[15px] sm:text-lg md:text-xl font-light mb-10 leading-relaxed break-keep max-w-[90%] sm:max-w-none">
                대한민국 주거 환경에 최적화된 태양산업 창호.<br className="hidden sm:block" />
                뛰어난 단열과 방음으로 당신의 일상에 완벽한 평온을 선사합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button 
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 rounded-none h-14 md:h-16 px-8 md:px-10 text-[15px] md:text-[16px] font-medium w-full sm:w-auto transition-colors"
                  onClick={() => { document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  무료 방문견적 신청
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-none h-14 md:h-16 px-8 md:px-10 text-[15px] md:text-[16px] font-medium w-full sm:w-auto transition-colors"
                >
                  <a href="tel:010-3996-9749">상담센터 전화연결</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/60">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] mb-3 font-medium">Scroll</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* 2. TRUST SIGNALS (Value Prop) */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">
            <div>
              <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 text-gray-900" strokeWidth={1} />
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3">10년 무상 품질보증</h3>
              <p className="text-[14px] md:text-base text-gray-500 font-light leading-relaxed break-keep">
                창호 본연의 성능을 오래도록 유지하도록<br className="hidden md:block"/>
                업계 최고 수준의 10년 보증을 약속합니다.
              </p>
            </div>
            <div>
              <Clock className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 text-gray-900" strokeWidth={1} />
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3">원데이(1-Day) 시공</h3>
              <p className="text-[14px] md:text-base text-gray-500 font-light leading-relaxed break-keep">
                거주 중인 집도 단 하루만에 먼지 없이 깔끔하게.<br className="hidden md:block"/>
                숙련된 본사 직영 시공팀이 책임집니다.
              </p>
            </div>
            <div>
              <Wrench className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 text-gray-900" strokeWidth={1} />
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3">맞춤형 정밀 실측</h3>
              <p className="text-[14px] md:text-base text-gray-500 font-light leading-relaxed break-keep">
                단 1mm의 오차도 허용하지 않는 레이저 실측으로<br className="hidden md:block"/>
                우리 집에 완벽히 밀착되는 창호를 제작합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BEST PRODUCTS (Carousel) */}
      <section className="py-20 md:py-32 bg-gray-50 overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="block text-primary text-xs font-semibold tracking-[0.2em] mb-3">COLLECTION</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight">태양산업 시그니처</h2>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-12 h-12 border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-colors"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-12 h-12 border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-colors"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex">
              {[
                { img: windowBalcony, name: '태양 프리미엄 발코니창', desc: '외부의 냉기와 소음을 완벽하게 차단하는 외창 전용 최고급 이중창' },
                { img: windowSystem, name: '유로 시스템 창호', desc: '유럽형 하드웨어를 적용하여 기밀성과 디자인을 극대화한 시스템창' },
                { img: windowDouble, name: '고단열 스마트 내창', desc: '실내 온도를 일정하게 유지해주며 부드러운 개폐감을 자랑하는 방창' },
                { img: windowSystem, name: '프로젝트 창호', desc: '다양한 개폐 방식이 가능한 다목적 기능성 창호' },
              ].map((prod, i) => (
                <div key={i} className="embla__slide flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pr-6">
                  <Link href="/products" className="group cursor-pointer block">
                    <div className="relative overflow-hidden aspect-[4/5] w-full mb-6 bg-gray-100">
                      <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3 group-hover:text-primary transition-colors">{prod.name}</h3>
                    <p className="text-[14px] md:text-[15px] text-gray-500 font-light leading-relaxed break-keep">{prod.desc}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/products">
              <Button variant="link" className="text-gray-900 font-medium text-base hover:text-primary transition-colors">
                제품 전체보기 <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PORTFOLIO PROOF */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12 flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
          <div className="w-full lg:w-1/3">
            <span className="block text-primary text-xs font-semibold tracking-[0.2em] mb-4">PORTFOLIO</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-[1.2] tracking-tight break-keep">
              창호 교체 하나로<br />달라지는 공간의 결
            </h2>
            <p className="text-gray-500 text-[15px] md:text-lg font-light mb-10 leading-relaxed break-keep">
              낡고 차가운 베란다에서, 사계절 내내 머물고 싶은 따뜻한 휴식처로. 수만 건의 시공 실적이 태양산업의 정밀한 기술력을 증명합니다.
            </p>
            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-end gap-4 border-b border-gray-100 pb-4">
                <span className="text-4xl md:text-5xl font-medium text-gray-900">50,000<span className="text-2xl text-primary font-normal">+</span></span>
                <span className="text-[14px] md:text-[15px] text-gray-500 font-light mb-1">누적 시공 세대</span>
              </div>
              <div className="flex items-end gap-4 border-b border-gray-100 pb-4">
                <span className="text-4xl md:text-5xl font-medium text-gray-900">98.5<span className="text-2xl text-primary font-normal">%</span></span>
                <span className="text-[14px] md:text-[15px] text-gray-500 font-light mb-1">고객 만족도</span>
              </div>
            </div>
            <Link href="/portfolio" className="inline-flex items-center text-gray-900 font-medium hover:text-primary transition-colors text-[15px] md:text-base">
              시공 사례 더보기 <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PORTFOLIOS.slice(0, 2).map((portfolio, idx) => (
              <Link 
                key={portfolio.id}
                href={`/portfolio/${portfolio.id}`}
                className={`relative overflow-hidden aspect-[3/4] group cursor-pointer ${idx === 1 ? 'sm:mt-16' : ''}`}
              >
                <img 
                  src={portfolio.thumbnail} 
                  alt={portfolio.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
          <div className="text-center mb-16">
            <span className="block text-primary text-xs font-semibold tracking-[0.2em] mb-3">PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">체계적인 시공 프로세스</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: '상담 및 견적', desc: '고객님의 주거 환경과 예산에 맞춘 최적의 창호 솔루션을 제안합니다.' },
              { step: '02', title: '정밀 실측', desc: '전문 기사가 방문하여 레이저로 1mm의 오차도 없이 공간을 실측합니다.' },
              { step: '03', title: '맞춤 제작', desc: '본사 직영 공장에서 고품질 자재로 고객님만의 창호를 정밀 제작합니다.' },
              { step: '04', title: '1-Day 시공', desc: '철거부터 마감까지, 숙련된 팀이 단 하루 만에 완벽하게 시공합니다.' }
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 border border-gray-100 relative">
                <span className="absolute top-8 right-8 text-4xl font-light text-gray-100">{p.step}</span>
                <h3 className="text-xl font-medium text-gray-900 mb-4 mt-8">{p.title}</h3>
                <p className="text-[14px] md:text-[15px] text-gray-500 font-light leading-relaxed break-keep">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REVIEWS */}
      <section className="bg-white py-20 md:py-32 px-5">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="text-primary mb-8 flex justify-center gap-1">
            {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 md:w-6 md:h-6 fill-current" />)}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-loose tracking-tight mb-10 break-keep text-gray-900">
            "겨울마다 외풍 때문에 고생했는데, 태양산업 창호로 교체하고 나서는 보일러를 조금만 틀어도 집안이 훈훈합니다. 시공도 정말 하루만에 먼지 없이 깔끔하게 끝내주셔서 대만족입니다."
          </h2>
          <p className="text-[14px] md:text-base text-gray-500 font-medium">- 서울 송파구 30평대 아파트 시공 고객님</p>
        </div>
      </section>

      {/* 7. QUICK QUOTE FORM (Bottom Conversion) */}
      <section id="quote-form" className="py-20 md:py-32 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-[1000px] px-5 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <span className="block text-primary text-xs font-semibold tracking-[0.2em] mb-3">FREE QUOTE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 tracking-tight break-keep">
              이제, 고객님의 공간을 바꿀 차례입니다.
            </h2>
            <p className="text-gray-500 text-[15px] md:text-lg font-light break-keep">
              지금 신청하시면 무료 방문견적과 함께 로이유리(Low-E) 무상 업그레이드 혜택을 드립니다.
            </p>
          </div>
          
          <div className="bg-white p-8 sm:p-12 md:p-16 border border-gray-100 shadow-xl shadow-gray-100/50">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[13px] text-gray-500 font-medium uppercase tracking-wider">이름</FormLabel>
                        <FormControl>
                          <Input placeholder="홍길동" className="rounded-none h-14 border-0 border-b border-gray-200 focus-visible:ring-0 focus-visible:border-gray-900 px-0 text-lg bg-transparent" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[13px] text-gray-500 font-medium uppercase tracking-wider">연락처</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="010-0000-0000" className="rounded-none h-14 border-0 border-b border-gray-200 focus-visible:ring-0 focus-visible:border-gray-900 px-0 text-lg bg-transparent" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[13px] text-gray-500 font-medium uppercase tracking-wider">시공 지역</FormLabel>
                        <FormControl>
                          <Input placeholder="서울시 강남구" className="rounded-none h-14 border-0 border-b border-gray-200 focus-visible:ring-0 focus-visible:border-gray-900 px-0 text-lg bg-transparent" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[13px] text-gray-500 font-medium uppercase tracking-wider">시공 범위</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none h-14 border-0 border-b border-gray-200 focus-visible:ring-0 focus-visible:border-gray-900 px-0 text-lg bg-transparent text-gray-900">
                              <SelectValue placeholder="시공 범위 선택" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-none">
                            <SelectItem value="all">전체 창호 교체</SelectItem>
                            <SelectItem value="balcony">발코니창 교체</SelectItem>
                            <SelectItem value="inner">내창/방창 교체</SelectItem>
                            <SelectItem value="etc">기타/상담 후 결정</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <FormField
                    control={form.control}
                    name="agree"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} className="rounded-none border-gray-300 data-[state=checked]:bg-gray-900 data-[state=checked]:border-gray-900 w-5 h-5" />
                        </FormControl>
                        <FormLabel className="text-[14px] font-normal text-gray-600 cursor-pointer">
                          개인정보 수집 및 이용에 동의합니다.
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full sm:w-auto h-14 px-10 rounded-none bg-gray-900 hover:bg-black text-white text-[16px] font-medium transition-colors">
                    상담 신청하기
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>

    </div>
  );
}
