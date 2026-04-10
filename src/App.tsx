/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  BookOpen, 
  Bell, 
  PlayCircle, 
  UserCheck, 
  ChevronRight, 
  Rocket,
  Star,
  Gamepad2,
  Users,
  Calendar,
  UserPlus,
  ExternalLink,
  Pencil,
  GraduationCap,
  Languages,
  Sparkles,
  Music,
  Palette,
  Lightbulb,
  Headset,
  Monitor,
  Network
} from 'lucide-react';
import { CLASSES_DATA, NOTICES, BookItem } from './constants';

type Page = 'main' | 'notice' | 'registration' | 'experience';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('main');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [regCategory, setRegCategory] = useState<'elementary' | 'middle'>('elementary');
  const [regLevel, setRegLevel] = useState<'상' | '중' | '하' | '전체'>('전체');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navItems = [
    { id: 'main', label: '북클럽 소개', icon: BookOpen },
    { id: 'notice', label: '공지 사항', icon: Bell },
    { id: 'registration', label: '수강 신청', icon: UserCheck },
    { id: 'experience', label: '체험하기', icon: PlayCircle },
  ];

  const filteredClasses = CLASSES_DATA.filter(c => 
    c.category === regCategory && (regLevel === '전체' || c.level === regLevel)
  );

  return (
    <div className="min-h-screen flex flex-col font-sans break-keep selection:bg-violet-100 selection:text-violet-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo & Title */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => setCurrentPage('main')}
            >
              <div className="p-2 bg-violet-50 rounded-xl group-hover:bg-violet-100 transition-colors">
                <img 
                  src="https://i.imgur.com/OYDYlXa.png" 
                  alt="경북교육청 로고" 
                  className="h-10 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold text-gray-900 tracking-tight">
                  원어민과 함께하는 북클럽
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id as Page)}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    currentPage === item.id 
                      ? 'bg-violet-50 text-violet-700' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id as Page);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 p-4 rounded-2xl text-base font-semibold transition-colors ${
                      currentPage === item.id 
                        ? 'bg-violet-50 text-violet-700' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon size={20} className={currentPage === item.id ? 'text-violet-600' : 'text-gray-400'} />
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'main' && (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Section */}
              <section className="relative min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-white">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://i.imgur.com/Hry0vzI.png" 
                    alt="Main Background" 
                    className="w-full h-full object-cover opacity-30"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-50/30 via-white/40 to-white"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-violet-50 rounded-full text-violet-700 text-sm font-bold border border-violet-100"
                  >
                    <Sparkles size={16} /> 2026 1학기 원어민과 함께하는 북클럽
                  </motion.div>
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.15] tracking-tight"
                  >
                    메타버스 세상에서 펼쳐지는<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                      신나는 영어 모험!
                    </span>
                  </motion.h1>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                  >
                    원어민 선생님과 함께 책을 읽으며 꿈을 키워보세요.<br className="hidden md:block" />
                    경북교육청이 제안하는 새로운 차원의 영어 학습 경험.
                  </motion.p>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                  >
                    <button 
                      onClick={() => setCurrentPage('registration')} 
                      className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 text-lg"
                    >
                      지금 바로 신청하기
                    </button>
                    <a 
                      href="https://zep.us/play/6PE6n5" 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 text-lg flex items-center justify-center gap-2"
                    >
                      ZEP 체험하기 <ExternalLink size={18} />
                    </a>
                  </motion.div>
                </div>
              </section>

              {/* Intro Details Section */}
              <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                      <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                          원어민과 함께하는<br />북클럽을 소개합니다
                        </h2>
                        <p className="text-lg text-gray-600">
                          체계적인 커리큘럼과 즐거운 활동이 가득한 북클럽에서<br />
                          영어 실력과 창의력을 동시에 키워보세요.
                        </p>
                      </div>

                      <div className="card-premium p-8 md:p-10">
                        <div className="space-y-2">
                          {[
                            { label: "대상", value: ["초 4~6학년(24개반)", "중 1~3학년(12개반)"] },
                            { label: "신청 기간", value: "2026/05/01 ~ 2026/05/08" },
                            { label: "교육 기간", value: "2026/05/26 ~ 2026/06/11 (3주간, 주 4회, 총 12회)" },
                            { label: "수업 시간", value: ["[A반] 19:00 ~ 19:40 (40분)", "[B반] 19:50 ~ 20:30 (40분)"] },
                            { label: "모집 인원", value: "클래스당 13 명" },
                          ].map((info, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 py-5 border-b border-gray-50 last:border-0 break-keep">
                              <span className="text-gray-400 font-bold text-sm sm:text-base shrink-0 sm:pt-0.5">{info.label}</span>
                              <div className={`text-gray-900 font-black text-base sm:text-lg text-left sm:text-right leading-tight max-w-md break-keep ${info.label === "대상" ? "flex flex-col sm:flex-row sm:gap-2" : "flex flex-col gap-1 sm:items-end"}`}>
                                {Array.isArray(info.value) ? (
                                  info.value.map((v, i) => <span key={i} className="block">{v}</span>)
                                ) : (
                                  <span>{info.value}</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => setCurrentPage('registration')} 
                        className="bg-violet-600 text-white px-10 py-5 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2 text-lg"
                      >
                        지금 바로 수강 신청하러 가기 <ChevronRight size={20} />
                      </button>
                    </div>

                    <div className="relative">
                      <div className="absolute -inset-4 bg-violet-50 rounded-[3rem] -z-10"></div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]"
                      >
                        <img 
                          src="https://i.imgur.com/lvWtYXq.png" 
                          alt="북클럽 소개 이미지" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Video Preview Section */}
              <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900">수업 현장 미리보기</h2>
                    <p className="text-gray-600 text-lg">메타버스 공간에서 진행되는 생생한 수업 모습을 확인하세요.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { id: "1WVPAXoTNwA", title: "메타버스 수업 현장 #1" },
                      { id: "uZkom_f1-N4", title: "메타버스 수업 현장 #2" }
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-4">
                        <div className="aspect-video w-full rounded-2xl shadow-lg overflow-hidden bg-black border border-gray-200">
                          <iframe 
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${item.id}?autoplay=1&mute=1&loop=1&playlist=${item.id}&rel=0`}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <p className="text-lg font-bold text-gray-900 text-center">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {currentPage === 'notice' && (
            <motion.div
              key="notice"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto px-6 py-20"
            >
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">공지 사항</h2>
                <p className="text-gray-600 text-lg">북클럽 운영에 관한 중요 안내 사항입니다.</p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "수강신청 결과 안내",
                    content: [
                      { label: "안내 시기", text: "수강신청 종료 후 일괄 통보" }
                    ]
                  },
                  {
                    title: "수업 참가 전 '오리엔테이션' 실시",
                    content: [
                      { label: "오리엔테이션 기간", text: "추후 통보" },
                      { label: "시간", text: "수업 담당교사가 사전에 개별 연락하여 정함" },
                      { label: "방법", text: "북클럽 수업교실 접속(온라인 플랫폼 ZEP)" },
                      { label: "내용", text: "수업 진행에 대한 전반적인 안내" }
                    ]
                  },
                  {
                    title: "수업 실시 후 '만족도 조사' 참가 협조",
                    content: []
                  },
                  {
                    title: "원활한 온라인 수업을 위한 필수 준비물 안내",
                    subtitle: "수업의 질을 결정하는 3가지 필수 체크리스트",
                    content: [
                      { 
                        label: "마이크 기능이 있는 '헤드셋'", 
                        text: "원어민 선생님과의 생생한 소통과 집중력 향상을 위해 반드시 준비해 주세요.",
                        icon: Headset,
                        color: "text-blue-500"
                      },
                      { 
                        label: "데스크탑+웹캠 또는 노트북", 
                        text: "메타버스 수업 특성상 화면 공유와 실시간 참여를 위한 적절한 사양의 기기가 필요합니다.",
                        icon: Monitor,
                        color: "text-orange-500"
                      },
                      { 
                        label: "안정적인 '유선 인터넷' 환경", 
                        text: "와이파이(Wi-Fi) 접속 시 수업이 끊길 수 있으므로, 가급적 랜선을 연결한 유선 환경을 권장합니다.",
                        icon: Network,
                        color: "text-green-600"
                      }
                    ]
                  }
                ].map((notice, idx) => (
                  <div key={idx} className="card-premium p-8 md:p-10 flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-violet-600 text-white flex items-center justify-center text-xl font-black shadow-lg shadow-violet-200">
                      {idx + 1}
                    </div>
                    <div className="space-y-6 w-full">
                      <div className="space-y-1">
                        <h3 className="text-xl md:text-2xl font-black text-gray-900">{notice.title}</h3>
                        {notice.subtitle && (
                          <p className="text-violet-600 font-bold text-sm md:text-base">{notice.subtitle}</p>
                        )}
                      </div>
                      {notice.content.length > 0 && (
                        <div className="space-y-4">
                          {notice.content.map((item, i) => (
                            <div key={i} className={`flex flex-col break-keep gap-2 ${item.icon ? 'md:grid md:grid-cols-[48px_220px_1fr] md:items-center md:gap-6' : 'sm:flex-row sm:gap-3'} text-base md:text-lg`}>
                              {item.icon ? (
                                <>
                                  <div className={`flex items-center gap-3 ${item.color}`}>
                                    <item.icon size={32} strokeWidth={2.5} className="shrink-0" />
                                    <span className="font-bold text-gray-900 md:hidden">{item.label}</span>
                                  </div>
                                  <span className="hidden md:block font-bold text-gray-900 leading-tight">{item.label}</span>
                                  <span className="text-gray-600 leading-relaxed">{item.text}</span>
                                </>
                              ) : (
                                <>
                                  <span className="font-bold text-gray-900 min-w-[140px]">{item.label}:</span>
                                  <span className="text-gray-600">{item.text}</span>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {currentPage === 'registration' && (
            <motion.div
              key="registration"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-6 py-20"
            >
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">수강 신청</h2>
                <p className="text-gray-600 text-lg">자신의 수준에 맞는 책을 선택하여 신청해 주세요.</p>
              </div>
              
              {/* Tabs */}
              <div className="flex justify-center p-1.5 bg-gray-100 rounded-2xl w-fit mx-auto mb-12">
                <button 
                  onClick={() => { setRegCategory('elementary'); setRegLevel('전체'); }}
                  className={`px-8 py-3 rounded-xl text-base font-bold transition-all ${
                    regCategory === 'elementary' 
                      ? 'bg-white text-violet-700 shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  초등 신청
                </button>
                <button 
                  onClick={() => { setRegCategory('middle'); setRegLevel('전체'); }}
                  className={`px-8 py-3 rounded-xl text-base font-bold transition-all ${
                    regCategory === 'middle' 
                      ? 'bg-white text-violet-700 shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  중등 신청
                </button>
              </div>

              {/* Filters */}
              <div className="flex justify-center gap-1.5 sm:gap-3 mb-16 overflow-x-auto no-scrollbar py-2">
                {['전체', '상', '중', '하'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setRegLevel(level as any)}
                    className={`whitespace-nowrap px-3.5 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all border shrink-0 ${
                      regLevel === level 
                        ? 'bg-violet-600 border-violet-600 text-white shadow-lg shadow-violet-100' 
                        : 'bg-white border-gray-200 text-gray-500 hover:border-violet-300 hover:text-violet-600'
                    }`}
                  >
                    {level === '전체' ? '전체 보기' : `수준: ${level}`}
                  </button>
                ))}
              </div>

              {/* Class Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredClasses.map((item) => (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="card-premium group overflow-hidden flex flex-col"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-lg text-xs font-black text-white shadow-lg ${
                            item.level === '상' ? 'bg-rose-500' : item.level === '중' ? 'bg-blue-500' : 'bg-emerald-500'
                          }`}>
                            수준: {item.level}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col space-y-4">
                        <div className="space-y-2">
                          <p className="text-xs font-bold text-violet-600 uppercase tracking-wider">{item.target}</p>
                          <h3 className="text-lg font-black text-gray-900 line-clamp-2 leading-snug h-14">
                            {item.title}
                          </h3>
                        </div>
                        <div className="pt-4 space-y-2 mt-auto">
                          <a 
                            href={item.previewUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-50 text-gray-600 text-sm font-bold hover:bg-gray-100 transition-colors border border-gray-100"
                          >
                            <PlayCircle size={16} /> 미리보기
                          </a>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col items-center gap-1.5">
                              <a 
                                href={item.registrationUrlA}
                                target="_blank"
                                rel="noreferrer"
                                className={`w-full py-3 rounded-xl text-white text-sm font-bold transition-all shadow-sm active:scale-95 text-center ${
                                  item.level === '상' ? 'bg-rose-500 hover:bg-rose-600' : item.level === '중' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-emerald-500 hover:bg-emerald-600'
                                }`}
                              >
                                A반 신청
                              </a>
                              <span className="text-[10px] sm:text-xs font-medium text-gray-400">수업시간 19:00~19:40</span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                              <a 
                                href={item.registrationUrlB}
                                target="_blank"
                                rel="noreferrer"
                                className={`w-full py-3 rounded-xl text-white text-sm font-bold transition-all shadow-sm active:scale-95 text-center ${
                                  item.level === '상' ? 'bg-rose-500 hover:bg-rose-600' : item.level === '중' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-emerald-500 hover:bg-emerald-600'
                                }`}
                              >
                                B반 신청
                              </a>
                              <span className="text-[10px] sm:text-xs font-medium text-gray-400">수업시간 19:50~20:30</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredClasses.length === 0 && (
                <div className="text-center py-32 space-y-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                    <BookOpen size={40} />
                  </div>
                  <p className="text-gray-400 text-lg font-medium">해당 조건의 클래스가 없습니다.</p>
                </div>
              )}
            </motion.div>
          )}

          {currentPage === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-6 py-20"
            >
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">체험하기</h2>
                <p className="text-gray-600 text-lg">메타버스 교실에 직접 접속하여 환경을 미리 체험해 보세요.</p>
              </div>
              
              <div className="card-premium p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 mb-20">
                <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                  <img 
                    src="https://i.imgur.com/Hry0vzI.png" 
                    alt="ZEP Metaverse Preview" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-gray-900 leading-tight">메타버스 교실 입장하기</h3>
                    <p className="text-lg text-gray-500 leading-relaxed">
                      원어민 선생님과 친구들이 기다리고 있는<br />
                      신비로운 메타버스 북클럽 공간으로 초대합니다! 🎈
                    </p>
                  </div>
                  <a 
                    href="https://zep.us/play/6PE6n5" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-violet-600 text-white rounded-2xl text-xl font-black shadow-xl shadow-violet-200 hover:bg-violet-700 hover:translate-y-[-2px] transition-all active:translate-y-0"
                  >
                    <Rocket size={24} className="animate-bounce" /> ZEP 입장하기 <ChevronRight size={24} />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { id: '1WVPAXoTNwA', title: '체험 영상 #1' },
                  { id: 'uZkom_f1-N4', title: '체험 영상 #2' },
                ].map((video, idx) => (
                  <div key={idx} className="card-premium p-6 space-y-6">
                    <h3 className="text-xl font-black text-gray-900 flex items-center gap-3">
                      <PlayCircle className="text-violet-600" size={24} /> {video.title}
                    </h3>
                    <div className="aspect-video w-full rounded-xl shadow-inner overflow-hidden bg-black border border-gray-100">
                      <iframe 
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <img 
                  src="https://i.imgur.com/OYDYlXa.png" 
                  alt="경북교육청 로고" 
                  className="h-8 object-contain grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-lg font-black text-gray-400">원어민과 함께하는 북클럽</h3>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-50 text-center text-gray-300 text-xs font-medium">
            © 2026 Gyeongsangbuk-do Office of Education. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Scroll to Top) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white text-violet-600 rounded-2xl shadow-2xl border border-gray-100 flex items-center justify-center hover:bg-violet-50 transition-all z-40 active:scale-90"
      >
        <ChevronRight size={24} className="-rotate-90" />
      </motion.button>
    </div>
  );
}

/**
 * [모바일 한글 짤림 방지 및 가독성 최적화 설명]
 * 1. break-keep: 한글 단어가 중간에 끊기지 않고 어절 단위로 줄바꿈되도록 최상위 div에 적용하였습니다.
 * 2. tracking-tight: 폰트 자간을 미세하게 좁혀 가독성을 높였습니다.
 * 3. selection:bg-violet-100: 텍스트 드래그 시 브랜드 컬러와 어울리는 색상을 적용하여 프리미엄 느낌을 주었습니다.
 * 4. leading-relaxed: 줄 간격을 충분히 주어 모바일 좁은 화면에서도 텍스트가 답답해 보이지 않게 설계했습니다.
 * 5. text-sm md:text-base: 화면 크기에 따라 텍스트 크기가 유동적으로 변하도록 반응형 클래스를 적극 활용했습니다.
 */
