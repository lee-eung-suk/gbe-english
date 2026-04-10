export interface BookItem {
  id: string;
  category: 'elementary' | 'middle';
  level: '상' | '중' | '하';
  target: string;
  title: string;
  image: string;
  previewUrl: string;
  registrationUrlA: string;
  registrationUrlB: string;
}

export const CLASSES_DATA: BookItem[] = [
  // Elementary
  {
    id: 'e-1',
    category: 'elementary',
    level: '상',
    target: '초등 1',
    title: 'Marvin Redpost: Why pick on me',
    image: 'https://i.imgur.com/vYsrSNH.png',
    previewUrl: 'https://www.youtube.com/watch?v=YKF4lu9HE28',
    registrationUrlA: 'https://ksurv.kr/akM3Ojg6Ojg',
    registrationUrlB: 'https://ksurv.kr/akM3Ojg6Ojo'
  },
  {
    id: 'e-2',
    category: 'elementary',
    level: '상',
    target: '초등 2',
    title: 'Mr. Hynde Is Out of His Mind!',
    image: 'https://i.imgur.com/7IqS4qT.png',
    previewUrl: 'https://www.youtube.com/watch?v=6D0Th09-pc8',
    registrationUrlA: 'https://ksurv.kr/akM3Ojg-Ozg',
    registrationUrlB: 'https://ksurv.kr/akM3Ojg-Ozs'
  },
  {
    id: 'e-3',
    category: 'elementary',
    level: '중',
    target: '초등 3',
    title: 'If You Give a Mouse a Cookie',
    image: 'https://i.imgur.com/zR24NgP.png',
    previewUrl: 'https://www.youtube.com/watch?v=pZijedFRUvc',
    registrationUrlA: 'https://ksurv.kr/akM3Ojg-Ozw',
    registrationUrlB: 'https://ksurv.kr/akM3Ojg-Oz4'
  },
  {
    id: 'e-4',
    category: 'elementary',
    level: '중',
    target: '초등 4',
    title: 'How the Grinch Stole Christmas!',
    image: 'https://i.imgur.com/NSrU8qL.png',
    previewUrl: 'https://www.youtube.com/watch?v=ZVgHGodD5wY',
    registrationUrlA: 'https://ksurv.kr/akM3Ojg-Oz8',
    registrationUrlB: 'https://ksurv.kr/akM3Ojg-PDc'
  },
  {
    id: 'e-5',
    category: 'elementary',
    level: '중',
    target: '초등 5',
    title: 'Silly Billy',
    image: 'https://i.imgur.com/PZ4TPoA.png',
    previewUrl: 'https://www.youtube.com/watch?v=CDvh8fWhbPE',
    registrationUrlA: 'https://ksurv.kr/akM3Ojg-PDo',
    registrationUrlB: 'https://ksurv.kr/akM3Ojg-PDs'
  },
  {
    id: 'e-6',
    category: 'elementary',
    level: '중',
    target: '초등 6',
    title: 'Sylvester and the Magic Pebble',
    image: 'https://i.imgur.com/K7iuu2I.png',
    previewUrl: 'https://www.youtube.com/watch?v=9EbCLBaURpU',
    registrationUrlA: 'https://ksurv.kr/akM3Ojg-PDw',
    registrationUrlB: 'https://ksurv.kr/akM3Ojg-PD0'
  },
  {
    id: 'e-7',
    category: 'elementary',
    level: '중',
    target: '초등 7',
    title: 'Giraffes Can’t Dance',
    image: 'https://i.imgur.com/zxJUDvv.png',
    previewUrl: 'https://www.youtube.com/watch?v=1a2Smau__Dk',
    registrationUrlA: 'https://ksurv.kr/akM3Ojg-PD4',
    registrationUrlB: 'https://ksurv.kr/akM3Ojg-PD8'
  },
  {
    id: 'e-8',
    category: 'elementary',
    level: '중',
    target: '초등 8',
    title: 'I Am Not a Chair!',
    image: 'https://i.imgur.com/zc2gNRz.png',
    previewUrl: 'https://www.youtube.com/watch?v=yUAbEUph-bo',
    registrationUrlA: 'https://ksurv.kr/akM3Ojg-PTk',
    registrationUrlB: 'https://ksurv.kr/akM3Ojg-PTo'
  },
  {
    id: 'e-9',
    category: 'elementary',
    level: '하',
    target: '초등 9',
    title: 'The Giving Tree',
    image: 'https://i.imgur.com/7wonSeM.png',
    previewUrl: 'https://www.youtube.com/watch?v=XFQZfeHq9wo',
    registrationUrlA: 'https://ksurv.kr/akM3Ojg-PTs',
    registrationUrlB: 'https://ksurv.kr/akM3Ojg-PTw'
  },
  {
    id: 'e-10',
    category: 'elementary',
    level: '하',
    target: '초등 10',
    title: 'We’re Going on a Bear Hunt',
    image: 'https://i.imgur.com/735H386.png',
    previewUrl: 'https://www.youtube.com/watch?v=fCZunYvHMDY',
    registrationUrlA: 'https://ksurv.kr/akM3Ojk5Oj8',
    registrationUrlB: 'https://ksurv.kr/akM3Ojk5Pjs'
  },
  {
    id: 'e-11',
    category: 'elementary',
    level: '하',
    target: '초등 11',
    title: 'Don’t Let the Pigeon Drive the Bus!',
    image: 'https://i.imgur.com/B0Uhn3o.png',
    previewUrl: 'https://www.youtube.com/watch?v=KNXyVJSCUWs',
    registrationUrlA: 'https://ksurv.kr/akM3Ojk5Pjw',
    registrationUrlB: 'https://ksurv.kr/akM3Ojk5Pj0'
  },
  {
    id: 'e-12',
    category: 'elementary',
    level: '하',
    target: '초등 12',
    title: 'Pete the Cat: I Love My White Shoes',
    image: 'https://i.imgur.com/p6jAMqE.png',
    previewUrl: 'https://www.youtube.com/watch?v=-GSnmRZlgc4',
    registrationUrlA: 'https://ksurv.kr/akM3Ojk5Pj4',
    registrationUrlB: 'https://ksurv.kr/akM3Ojk5Pj8'
  },

  // Middle
  {
    id: 'm-1',
    category: 'middle',
    level: '상',
    target: '중등 1',
    title: "Charlotte's Web",
    image: 'https://i.imgur.com/et5oaxy.png',
    previewUrl: 'https://www.youtube.com/watch?v=voEvfc-pQJc',
    registrationUrlA: 'https://ksurv.kr/akM3Ojg_OTY',
    registrationUrlB: 'https://ksurv.kr/akM3Ojg_OD4'
  },
  {
    id: 'm-2',
    category: 'middle',
    level: '중',
    target: '중등 2',
    title: 'Nate the Great and the Earth Day Robot',
    image: 'https://i.imgur.com/7cR5TpR.png',
    previewUrl: 'https://www.youtube.com/watch?v=n0V_5nFcxfI',
    registrationUrlA: 'https://ksurv.kr/akM3Ojk5PzY',
    registrationUrlB: 'https://ksurv.kr/akM3Ojk5Pzc'
  },
  {
    id: 'm-3',
    category: 'middle',
    level: '중',
    target: '중등 3',
    title: 'The Twits',
    image: 'https://i.imgur.com/vERkjtZ.png',
    previewUrl: 'https://www.youtube.com/watch?v=0fpL0scrV5w',
    registrationUrlA: 'https://ksurv.kr/akM3Ojk5Pzg',
    registrationUrlB: 'https://ksurv.kr/akM3Ojk5Pzk'
  },
  {
    id: 'm-4',
    category: 'middle',
    level: '중',
    target: '중등 4',
    title: 'Captain Underpants #1: Adventures Of Captain Underpants',
    image: 'https://i.imgur.com/EG1UVHc.png',
    previewUrl: 'https://www.youtube.com/watch?v=T0rMwBy0kBM',
    registrationUrlA: 'https://ksurv.kr/akM3Ojk5Pzo',
    registrationUrlB: 'https://ksurv.kr/akM3Ojk5Pzs'
  },
  {
    id: 'm-5',
    category: 'middle',
    level: '하',
    target: '중등 5',
    title: "Aesop's Fables",
    image: 'https://i.imgur.com/yB0GR1e.png',
    previewUrl: 'https://www.youtube.com/watch?v=jLJIBUGbAu4',
    registrationUrlA: 'https://ksurv.kr/akM3Ojk5Pzw',
    registrationUrlB: 'https://ksurv.kr/akM3Ojk5Pz0'
  },
  {
    id: 'm-6',
    category: 'middle',
    level: '하',
    target: '중등 6',
    title: 'The Bad Guys #1: The Bad Guys',
    image: 'https://i.imgur.com/Kqlzor1.png',
    previewUrl: 'https://www.youtube.com/watch?v=MrqO0o0Opi0',
    registrationUrlA: 'https://ksurv.kr/akM3Ojk5Pz4',
    registrationUrlB: 'https://ksurv.kr/akM3Ojk5Pz8'
  }
];

export const NOTICES = [
  { id: 1, title: '2026학년도 원어민 북클럽 수강생 모집 안내', date: '2026-03-20' },
  { id: 2, title: '메타버스 플랫폼(ZEP) 접속 방법 안내', date: '2026-03-15' },
  { id: 3, title: '수강 신청 결과 확인 및 오리엔테이션 일정', date: '2026-03-10' },
  { id: 4, title: '교재 배송 관련 공지사항', date: '2026-03-05' },
];
