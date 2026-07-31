/**
 * Web3Forms 상담 신청 제출 유틸리티
 * 무료 서비스 — 브라우저에서 직접 이메일 전송 (서버 불필요)
 * 접수 이메일: heeun2356@naver.com
 *
 * Access Key 설정 방법:
 * 1. https://web3forms.com/#start 에서 heeun2356@naver.com 입력
 * 2. 이메일로 받은 Access Key를 VITE_WEB3FORMS_KEY 환경변수에 저장
 */

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

export interface ConsultationData {
  name: string;
  phone: string;
  type: string;
  region?: string;
  address?: string;
  message?: string;
}

const TYPE_LABELS: Record<string, string> = {
  all: '전체 창호 교체',
  balcony: '발코니창 교체',
  inner: '내창/방창 교체',
  system: '시스템창호 시공',
  door: '중문/터닝도어',
  etc: '기타/상담 후 결정',
};

export async function submitConsultation(data: ConsultationData): Promise<void> {
  if (!ACCESS_KEY) {
    throw new Error('VITE_WEB3FORMS_KEY 환경변수가 설정되지 않았습니다. web3forms.com에서 Access Key를 발급받아 설정해주세요.');
  }

  const payload = {
    access_key: ACCESS_KEY,
    subject: `[태양산업] 상담 신청 — ${data.name} (${data.phone})`,
    from_name: '태양산업 홈페이지',
    name: data.name,
    phone: data.phone,
    '시공 분야': TYPE_LABELS[data.type] ?? data.type,
    ...(data.region ? { '시공 지역': data.region } : {}),
    ...(data.address ? { '시공 주소': data.address } : {}),
    ...(data.message ? { '상담 내용': data.message } : {}),
    botcheck: '',
  };

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  if (!result.success) {
    throw new Error(result.message ?? '제출에 실패했습니다. 잠시 후 다시 시도해주세요.');
  }
}
