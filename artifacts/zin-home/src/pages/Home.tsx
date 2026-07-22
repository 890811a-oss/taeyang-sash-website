import React, { useState } from 'react';
import { Link } from 'wouter';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight, ArrowRight, ShieldCheck, Clock, Wrench, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import windowPort1 from '@assets/generated_images/window-port1.jpg';
import windowPort2 from '@assets/generated_images/window-port2.jpg';

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

  return (
    <div className="w-full">
      {/* 1. HERO (Video) */}
      <section className="relative h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] min-h-[500px] w-full overflow-hidden bg-gray-900">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-12">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <span className="inline-block px-3 py-1 bg-primary text-white text-xs md:text-sm font-bold tracking-widest mb-4 md:mb-6">
                PREMIUM SASH & WINDOW
              </span>
              <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.2] tracking-tight mb-4 md:mb-6 break-keep">
                빛과 바람을<br />다스리는 기술
              </h1>
              <p className="text-white/90 text-[15px] sm:text-lg md:text-xl font-light mb-8 md:mb-10 leading-relaxed break-keep max-w-[90%] sm:max-w-none">
                대한민국 주거 환경에 최적화된 태양산업 창호.<br className="hidden sm:block" />
                뛰어난 단열과 방음으로 당신의 일상에 완벽한 평온을 선사합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button 
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 rounded-none h-14 md:h-14 px-6 md:px-8 text-[15px] md:text-[16px] font-bold w-full sm:w-auto"
                  onClick={() => { document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  무료 방문견적 신청
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white/10 rounded-none h-14 md:h-14 px-6 md:px-8 text-[15px] md:text-[16px] w-full sm:w-auto"
                  onClick={() => window.location.href = 'tel:1588-0000'}
                >
                  상담센터 1588-0000
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/80">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] mb-2 font-medium">Scroll Down</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/80 to-transparent" />
        </div>
      </section>

      {/* 2. TRUST SIGNALS (Value Prop) */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="pt-6 md:pt-0">
              <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 md:mb-6 text-gray-900" strokeWidth={1.5} />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">10년 무상 품질보증</h3>
              <p className="text-[14px] md:text-base text-gray-500 font-light leading-relaxed break-keep">
                창호 본연의 성능을 오래도록 유지하도록<br className="hidden md:block"/>
                업계 최고 수준의 10년 보증을 약속합니다.
              </p>
            </div>
            <div className="pt-10 md:pt-0">
              <Clock className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 md:mb-6 text-gray-900" strokeWidth={1.5} />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">원데이(1-Day) 시공</h3>
              <p className="text-[14px] md:text-base text-gray-500 font-light leading-relaxed break-keep">
                거주 중인 집도 단 하루만에 먼지 없이 깔끔하게.<br className="hidden md:block"/>
                숙련된 본사 직영 시공팀이 책임집니다.
              </p>
            </div>
            <div className="pt-10 md:pt-0">
              <Wrench className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 md:mb-6 text-gray-900" strokeWidth={1.5} />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">맞춤형 정밀 실측</h3>
              <p className="text-[14px] md:text-base text-gray-500 font-light leading-relaxed break-keep">
                단 1mm의 오차도 허용하지 않는 레이저 실측으로<br className="hidden md:block"/>
                우리 집에 완벽히 밀착되는 창호를 제작합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUICK QUOTE FORM (Lead Gen) */}
      <section id="quote-form" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
          <div className="bg-gray-900 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col xl:flex-row gap-10 md:gap-12 items-center">
            <div className="w-full xl:w-1/2 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight break-keep">
                지금 신청하시면<br />
                <span className="text-primary">무료 방문견적</span>과 함께<br className="hidden sm:block" />
                특별 할인을 적용해 드립니다.
              </h2>
              <ul className="space-y-3 md:space-y-4 text-gray-300 font-light text-[15px] md:text-lg">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> 로이유리(Low-E) 무상 업그레이드</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> 철거 및 폐기물 처리비 전액 무상</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> 전문가의 1:1 전담 밀착 상담</li>
              </ul>
            </div>
            
            <div className="w-full xl:w-1/2 bg-white p-6 sm:p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 md:mb-6">빠른 상담 신청</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">이름</FormLabel>
                          <FormControl>
                            <Input placeholder="이름 (예: 홍길동)" className="rounded-none h-12 md:h-14 border-gray-300 focus-visible:ring-gray-900 text-[15px]" {...field} />
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
                          <FormLabel className="sr-only">연락처</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="연락처 (- 없이 입력)" className="rounded-none h-12 md:h-14 border-gray-300 focus-visible:ring-gray-900 text-[15px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">시공 지역</FormLabel>
                        <FormControl>
                          <Input placeholder="시공 지역 (예: 서울시 강남구)" className="rounded-none h-12 md:h-14 border-gray-300 focus-visible:ring-gray-900 text-[15px]" {...field} />
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
                        <FormLabel className="sr-only">시공 범위</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none h-12 md:h-14 border-gray-300 focus-visible:ring-gray-900 text-gray-500 text-[15px]">
                              <SelectValue placeholder="원하시는 시공 범위를 선택하세요" />
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

                  <FormField
                    control={form.control}
                    name="agree"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start md:items-center space-x-2 space-y-0 pt-2">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} className="rounded-none mt-1 md:mt-0" />
                        </FormControl>
                        <FormLabel className="text-[13px] md:text-sm font-normal text-gray-500 cursor-pointer leading-tight">
                          개인정보 수집 및 이용에 동의합니다.
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-14 md:h-16 rounded-none bg-primary hover:bg-primary/90 text-white text-[16px] md:text-lg font-bold mt-4">
                    무료 견적 신청하기
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BEST PRODUCTS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">태양산업 베스트 제품</h2>
            <p className="text-gray-600 text-[15px] md:text-lg font-light break-keep">압도적인 단열 성능과 세련된 디자인의 만남</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { img: windowBalcony, name: '태양 프리미엄 발코니창', desc: '외부의 냉기와 소음을 완벽하게 차단하는 외창 전용 최고급 이중창' },
              { img: windowSystem, name: '유로 시스템 창호', desc: '유럽형 하드웨어를 적용하여 기밀성과 디자인을 극대화한 시스템창' },
              { img: windowDouble, name: '고단열 스마트 내창', desc: '실내 온도를 일정하게 유지해주며 부드러운 개폐감을 자랑하는 방창' },
            ].map((prod, i) => (
              <div key={i} className="group bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3] w-full">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-6 md:p-8 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-primary transition-colors">{prod.name}</h3>
                  <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed break-keep">{prod.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 md:mt-12 text-center">
            <Button variant="outline" className="rounded-none border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white h-12 px-8 w-full sm:w-auto" onClick={() => window.location.href = '/products'}>
              제품 전체보기 <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO PROOF */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12 flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight break-keep">
              창호 교체 하나로<br />달라지는 공간
            </h2>
            <p className="text-gray-500 text-[15px] md:text-lg font-light mb-8 leading-relaxed break-keep">
              낡고 차가운 베란다에서, 사계절 내내 머물고 싶은 따뜻한 휴식처로. 수만 건의 시공 실적이 태양산업의 기술력을 증명합니다.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">50,000+</span>
                <span className="text-[15px] md:text-base text-gray-500 font-light">누적 시공 세대</span>
              </div>
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">98.5%</span>
                <span className="text-[15px] md:text-base text-gray-500 font-light">고객 만족도</span>
              </div>
            </div>
            <Link href="/portfolio" className="inline-flex items-center text-primary font-bold hover:underline underline-offset-4 text-[15px] md:text-base">
              시공 사례 더보기 <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src={windowPort1} alt="시공사례 1" className="w-full aspect-square sm:aspect-[4/5] object-cover" />
            <img src={windowPort2} alt="시공사례 2" className="w-full aspect-square sm:aspect-[4/5] object-cover sm:mt-12" />
          </div>
        </div>
      </section>

      {/* 6. REVIEWS & BOTTOM CTA */}
      <section className="bg-gray-900 py-20 md:py-32 text-center text-white px-5">
        <div className="mx-auto max-w-[800px]">
          <div className="text-primary mb-6 flex justify-center gap-1">
            {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8 md:mb-12 break-keep text-gray-200">
            "겨울마다 외풍 때문에 고생했는데, 태양산업 창호로 교체하고 나서는 보일러를 조금만 틀어도 집안이 훈훈합니다. 시공도 정말 하루만에 먼지 없이 깔끔하게 끝내주셔서 대만족입니다."
          </h2>
          <p className="text-[14px] md:text-base text-gray-400 mb-12 md:mb-16">- 서울 송파구 30평대 아파트 시공 고객님</p>
          
          <h3 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 break-keep">이제, 고객님의 공간을 바꿀 차례입니다.</h3>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 md:h-16 px-8 md:px-12 text-lg md:text-xl font-bold w-full sm:w-auto"
            onClick={() => { document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            무료 견적 받아보기
          </Button>
        </div>
      </section>

    </div>
  );
}
