import { PortfolioCase } from '@/types/portfolio';

import windowPort1 from '@assets/generated_images/window-port1.jpg';
import windowPort2 from '@assets/generated_images/window-port2.jpg';
import windowBalcony from '@assets/generated_images/window-balcony.jpg';
import windowSystem from '@assets/generated_images/window-system.jpg';

// Jugong apartment case photos
import jugong01 from '@/assets/case-jugong/photo-01.jpg';
import jugong02 from '@/assets/case-jugong/photo-02.jpg';
import jugong03 from '@/assets/case-jugong/photo-03.jpg';
import jugong04 from '@/assets/case-jugong/photo-04.jpg';
import jugong05 from '@/assets/case-jugong/photo-05.jpg';
import jugong06 from '@/assets/case-jugong/photo-06.jpg';
import jugong07 from '@/assets/case-jugong/photo-07.jpg';
import jugong08 from '@/assets/case-jugong/photo-08.jpg';
import jugong10 from '@/assets/case-jugong/photo-10.jpg';
import jugong11 from '@/assets/case-jugong/photo-11.jpg';
import jugong12 from '@/assets/case-jugong/photo-12.jpg';
import jugong13 from '@/assets/case-jugong/photo-13.jpg';
import jugong14 from '@/assets/case-jugong/photo-14.jpg';
import jugong15 from '@/assets/case-jugong/photo-15.jpg';
import jugong16 from '@/assets/case-jugong/photo-16.jpg';
import jugong17 from '@/assets/case-jugong/photo-17.jpg';
import jugong18 from '@/assets/case-jugong/photo-18.jpg';
import jugong20 from '@/assets/case-jugong/photo-20.jpg';
import jugong21 from '@/assets/case-jugong/photo-21.jpg';

export const PORTFOLIOS: PortfolioCase[] = [
  {
    id: 1,
    category: '발코니창',
    title: '구축 아파트 전체 샤시 교체',
    tags: ['30평대', '아파트', '전체교체'],
    author: '본사 직영팀',
    thumbnail: jugong14,
    description: '20년 이상 된 구축 아파트의 낡은 샷시를 전체 교체한 사례입니다. 어두운 내창, 기밀성 떨어진 외창을 고단열 시스템 창호로 교체하여 외풍과 소음을 완벽히 차단했습니다.',
    meta: {
      area: '30평대',
      duration: '1일 (8시간)',
      workScope: ['발코니 외창', '내창/방창', '욕실창'],
      materials: ['3중 로이유리', 'PVC 고단열 프레임', '고기밀 우레탄폼 시공']
    },
    images: {
      before: [jugong01, jugong02, jugong03, jugong04],
      during: [jugong05, jugong07, jugong08, jugong10, jugong11, jugong12, jugong13, jugong17, jugong18, jugong20, jugong21],
      after: [jugong14, jugong15, jugong16, jugong06]
    }
  },
  {
    id: 2,
    category: '시스템창호',
    title: '유럽형 시스템창호로 완성한 거실',
    tags: ['40평대', '주택'],
    author: '태양산업 서초점',
    thumbnail: windowSystem
  },
  {
    id: 3,
    category: '내창/방창',
    title: '포근하고 조용한 침실을 위한 이중창',
    tags: ['20평대', '아파트'],
    author: '본사 직영팀',
    thumbnail: windowPort1
  },
  {
    id: 4,
    category: '폴딩/터닝도어',
    title: '베란다 확장 대신 선택한 폴딩도어',
    tags: ['30평대', '아파트'],
    author: '본사 직영팀',
    thumbnail: windowPort2
  },
  {
    id: 5,
    category: '발코니창',
    title: '외풍 차단 완벽! 노후 샷시 교체기',
    tags: ['50평대', '아파트'],
    author: '태양산업 송파점',
    thumbnail: windowBalcony
  },
  {
    id: 6,
    category: '시스템창호',
    title: '단열과 디자인을 모두 잡은 단독주택',
    tags: ['주택', '신축'],
    author: '태양산업 프리미엄',
    thumbnail: windowSystem
  }
];
