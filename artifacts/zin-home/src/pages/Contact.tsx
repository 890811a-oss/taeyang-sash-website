import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().min(2, '이름을 정확히 입력해주세요.'),
  phone: z.string().min(10, '연락처를 정확히 입력해주세요.'),
  type: z.string().min(1, '상담 유형을 선택해주세요.'),
  address: z.string().min(5, '주소를 대략적으로 입력해주세요.'),
  message: z.string().optional(),
  agree: z.boolean().refine(val => val === true, {
    message: '개인정보 수집 및 이용에 동의해야 합니다.',
  }),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      type: '',
      address: '',
      message: '',
      agree: false,
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    toast({
      title: "무료 견적 신청이 완료되었습니다.",
      description: "태양산업 전문 상담사가 곧 연락드리겠습니다.",
      className: "rounded-none border-gray-900 bg-white",
    });
    form.reset();
  }

  return (
    <div className="w-full bg-white min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] pt-16 md:pt-24 pb-20 md:pb-32">
      <div className="mx-auto max-w-[900px] px-5">
        
        <div className="text-center mb-12 md:mb-16">
          <span className="block text-primary text-xs font-semibold tracking-[0.2em] mb-4">CONTACT</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 tracking-tight">무료견적신청</h1>
          <p className="text-gray-500 text-[15px] md:text-lg font-light break-keep">
            창호 교체 고민, 태양산업 전문가와 상의하세요.<br className="hidden sm:block" />
            레이저 정밀 실측부터 투명한 견적까지 1:1 맞춤 솔루션을 제안해 드립니다.
          </p>
        </div>

        <div className="bg-gray-50 p-8 sm:p-10 md:p-16">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:space-y-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-600 font-medium text-[13px] tracking-wider uppercase mb-2">이름 *</FormLabel>
                      <FormControl>
                        <Input placeholder="홍길동" className="rounded-none border-0 border-b-2 border-gray-200 h-14 focus-visible:ring-0 focus-visible:border-gray-900 text-lg bg-transparent px-0 placeholder:text-gray-300" {...field} />
                      </FormControl>
                      <FormMessage className="text-primary font-normal text-[13px]" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-600 font-medium text-[13px] tracking-wider uppercase mb-2">연락처 *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="010-0000-0000" className="rounded-none border-0 border-b-2 border-gray-200 h-14 focus-visible:ring-0 focus-visible:border-gray-900 text-lg bg-transparent px-0 placeholder:text-gray-300" {...field} />
                      </FormControl>
                      <FormMessage className="text-primary font-normal text-[13px]" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium text-[13px] tracking-wider uppercase mb-2">시공 분야 *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-none border-0 border-b-2 border-gray-200 h-14 focus-visible:ring-0 focus-visible:border-gray-900 text-lg bg-transparent px-0 text-gray-900">
                          <SelectValue placeholder="시공 분야를 선택해주세요" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-none">
                        <SelectItem value="all">전체 창호 교체</SelectItem>
                        <SelectItem value="balcony">발코니창 교체</SelectItem>
                        <SelectItem value="inner">내창/방창 교체</SelectItem>
                        <SelectItem value="system">시스템창호 시공</SelectItem>
                        <SelectItem value="door">중문/터닝도어</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-primary font-normal text-[13px]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium text-[13px] tracking-wider uppercase mb-2">시공 주소 *</FormLabel>
                    <FormControl>
                      <Input placeholder="예) 서울시 강남구 XX아파트" className="rounded-none border-0 border-b-2 border-gray-200 h-14 focus-visible:ring-0 focus-visible:border-gray-900 text-lg bg-transparent px-0 placeholder:text-gray-300" {...field} />
                    </FormControl>
                    <FormMessage className="text-primary font-normal text-[13px]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium text-[13px] tracking-wider uppercase mb-2">상담 내용 (선택)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="거주 중이신지, 인테리어 공사와 함께 진행하시는지 등 특이사항을 적어주시면 더 정확한 상담이 가능합니다." 
                        className="rounded-none border-0 border-b-2 border-gray-200 min-h-[140px] focus-visible:ring-0 focus-visible:border-gray-900 resize-none text-lg bg-transparent p-0 placeholder:text-gray-300 leading-relaxed" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-primary font-normal text-[13px]" />
                  </FormItem>
                )}
              />

              <div className="pt-8 md:pt-10">
                <FormField
                  control={form.control}
                  name="agree"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="rounded-none border-gray-300 mt-1 data-[state=checked]:bg-gray-900 data-[state=checked]:border-gray-900 w-5 h-5"
                        />
                      </FormControl>
                      <div className="space-y-2 leading-none pt-0.5">
                        <FormLabel className="text-gray-700 font-normal cursor-pointer text-[14px] md:text-[15px]">
                          개인정보 수집 및 이용에 동의합니다. *
                        </FormLabel>
                        <p className="text-[12px] md:text-[13px] text-gray-400 leading-relaxed">
                          수집목적: 창호 교체 상담 및 견적 안내<br />
                          수집항목: 이름, 연락처, 주소<br />
                          보유기간: 상담 완료 후 1년
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div className="pt-6 md:pt-8">
                <Button 
                  type="submit" 
                  className="w-full h-14 md:h-16 rounded-none bg-gray-900 hover:bg-black text-white text-[16px] md:text-lg font-medium transition-colors"
                >
                  상담 신청 완료하기
                </Button>
              </div>
            </form>
          </Form>
        </div>

      </div>
    </div>
  );
}
