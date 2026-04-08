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
  Lightbulb
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
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo & Title */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => setCurrentPage('main')}
              title="홈으로 이동"
            >
              <img 
                src="https://i.imgur.com/OYDYlXa.png" 
                alt="경북교육청 로고" 
                className="h-12 object-contain transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-black group-hover:text-[#7C3AED] transition-colors">
                  2026 1학기 원어민과 함께하는 북클럽
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id as Page)}
                  className={`text-lg font-bold transition-colors ${
                    currentPage === item.id ? 'text-[#7C3AED]' : 'text-gray-600 hover:text-[#7C3AED]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id as Page);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl text-lg font-bold ${
                      currentPage === item.id ? 'bg-[#7C3AED]/10 text-[#7C3AED]' : 'text-gray-600'
                    }`}
                  >
                    <item.icon size={20} />
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Hero Section */}
              <section className="relative h-[650px] flex items-center justify-center overflow-hidden bg-[#FFD700]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://i.imgur.com/Hry0vzI.png" 
                    alt="Main Background" 
                    className="w-full h-full object-cover opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD700]/20 to-[#F3E8FF]"></div>
                </div>

                {/* Floating Decorative Icons */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[
                    { Icon: Pencil, color: "text-blue-400", top: "15%", left: "10%", delay: 0 },
                    { Icon: Languages, color: "text-pink-400", top: "20%", right: "15%", delay: 1 },
                    { Icon: GraduationCap, color: "text-green-400", bottom: "25%", left: "15%", delay: 0.5 },
                    { Icon: Sparkles, color: "text-orange-400", top: "40%", right: "8%", delay: 1.5 },
                    { Icon: Music, color: "text-red-400", bottom: "15%", right: "20%", delay: 2 },
                    { Icon: Palette, color: "text-purple-400", top: "10%", right: "30%", delay: 0.8 },
                    { Icon: Lightbulb, color: "text-yellow-500", bottom: "30%", right: "40%", delay: 1.2 },
                    { Icon: Star, color: "text-white", top: "50%", left: "5%", delay: 0.3 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 0, rotate: 0 }}
                      animate={{ 
                        y: [0, -30, 0],
                        rotate: [0, 15, -15, 0]
                      }}
                      transition={{ 
                        duration: 4 + Math.random() * 2, 
                        repeat: Infinity, 
                        delay: item.delay,
                        ease: "easeInOut"
                      }}
                      className={`absolute ${item.color} opacity-40`}
                      style={{ 
                        top: item.top, 
                        left: item.left, 
                        right: item.right, 
                        bottom: item.bottom 
                      }}
                    >
                      <item.Icon size={48 + Math.random() * 24} />
                    </motion.div>
                  ))}
                </div>

                <div className="relative z-10 text-center px-4">
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="inline-block mb-4 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#7C3AED] font-bold shadow-sm"
                  >
                    ✨ 2026 1학기 원어민과 함께하는 북클럽 ✨
                  </motion.div>
                  <motion.h1 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="title-font text-5xl md:text-7xl font-bold text-[#7C3AED] mb-6 drop-shadow-xl"
                  >
                    2026 1학기<br />원어민과 함께하는 북클럽
                  </motion.h1>
                  <p className="text-xl md:text-2xl text-[#7C3AED] font-bold mb-10 bg-white/30 backdrop-blur-[2px] inline-block px-4 py-1 rounded-lg">
                    메타버스 세상에서 펼쳐지는 신나는 영어 모험! 🚀
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button onClick={() => setCurrentPage('registration')} className="btn-primary text-xl px-10 py-4 shadow-2xl hover:scale-105 transition-transform">
                      지금 바로 신청하기
                    </button>
                    <a 
                      href="https://zep.us/play/6PE6n5" 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-secondary text-xl px-10 py-4 flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform"
                    >
                      ZEP 체험하기 <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </section>

              {/* Intro Details Section */}
              <section className="py-20 bg-[#F3E8FF]">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="space-y-12">
                    <h3 className="title-font text-3xl font-bold text-[#7C3AED] text-center mb-12">수업 현장 미리보기</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                      {[
                        { id: "1WVPAXoTNwA", caption: "메타버스 수업 현장 #1" },
                        { id: "uZkom_f1-N4", caption: "메타버스 수업 현장 #2" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col">
                          <div className="aspect-video w-full rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white bg-black relative group">
                            <iframe 
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${item.id}?autoplay=1&mute=1&loop=1&playlist=${item.id}`}
                              title={`YouTube video player ${idx + 1}`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <p className="mt-8 text-center text-[#7C3AED] text-2xl font-bold">
                            {item.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col lg:flex-row items-center gap-12 pt-12">
                      <div className="flex-1 space-y-6">
                        <h2 className="title-font text-4xl font-bold text-[#7C3AED]">원어민과 함께하는 북클럽 소개</h2>
                        <div className="bg-white p-8 rounded-3xl shadow-lg space-y-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#7C3AED]/10 rounded-2xl text-[#7C3AED]">
                              <Calendar size={24} />
                            </div>
                            <div>
                              <p className="font-bold text-lg">신청 기간</p>
                              <p className="text-gray-600">2026. 05. 01 ~ 2026. 05. 08</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#7C3AED]/10 rounded-2xl text-[#7C3AED]">
                              <BookOpen size={24} />
                            </div>
                            <div>
                              <p className="font-bold text-lg">교육 기간</p>
                              <p className="text-gray-600">2026. 05. 26 ~ 2026. 06. 11</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#7C3AED]/10 rounded-2xl text-[#7C3AED]">
                              <UserPlus size={24} />
                            </div>
                            <div>
                              <p className="font-bold text-lg">모집 인원</p>
                              <p className="text-gray-600">클래스당 13명</p>
                            </div>
                          </div>
                        </div>
                        <button onClick={() => setCurrentPage('registration')} className="btn-primary w-full py-4 text-xl">
                          지금 바로 수강 신청하러 가기 <ChevronRight className="inline ml-2" />
                        </button>
                      </div>
                      <div className="flex-1">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
                        >
                          <img 
                            src="https://i.imgur.com/GPxdL1d.png" 
                            alt="북클럽 소개 이미지" 
                            className="w-full h-auto object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {currentPage === 'notice' && (
            <motion.div
              key="notice"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto px-4 py-16"
            >
              <h2 className="title-font text-5xl text-center font-bold text-[#7C3AED] mb-12">공지 사항</h2>
              <div className="bg-white rounded-[2.5rem] shadow-xl p-10 md:p-16 border-2 border-[#7C3AED]/10 space-y-12">
                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#7C3AED] flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-sm">1</span>
                    수강신청 결과 안내
                  </h3>
                  <div className="pl-11 space-y-2 text-lg">
                    <p><span className="font-bold text-gray-700">안내문자 발송:</span> 수강 신청 완료된 다음날 문자로 개별 통보</p>
                    <p><span className="font-bold text-gray-700">문자 발송 대상:</span> 수강 대상 학생 및 보호자</p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#7C3AED] flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-sm">2</span>
                    수업 참가 전 '오리엔테이션' 실시
                  </h3>
                  <div className="pl-11 space-y-2 text-lg">
                    <p><span className="font-bold text-gray-700">오리엔테이션 기간:</span> 추후 통보</p>
                    <p><span className="font-bold text-gray-700">시간:</span> 수업 담당교사가 사전에 개별 연락하여 정함</p>
                    <p><span className="font-bold text-gray-700">방법:</span> 북클럽 수업교실 접속(온라인 플랫폼 ZEP)</p>
                    <p><span className="font-bold text-gray-700">내용:</span> 수업 진행에 대한 전반적인 안내</p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#7C3AED] flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-sm">3</span>
                    수업 실시 후 '만족도 조사' 참가 협조
                  </h3>
                </section>
              </div>
            </motion.div>
          )}

          {currentPage === 'registration' && (
            <motion.div
              key="registration"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="max-w-7xl mx-auto px-4 py-16"
            >
              <h2 className="title-font text-5xl text-center font-bold text-[#7C3AED] mb-12">수강 신청</h2>
              
              {/* Tabs */}
              <div className="flex justify-center gap-4 mb-12">
                <button 
                  onClick={() => { setRegCategory('elementary'); setRegLevel('전체'); }}
                  className={`px-10 py-4 rounded-2xl text-xl font-bold transition-all ${
                    regCategory === 'elementary' ? 'bg-[#7C3AED] text-white shadow-lg scale-105' : 'bg-white text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  초등 신청
                </button>
                <button 
                  onClick={() => { setRegCategory('middle'); setRegLevel('전체'); }}
                  className={`px-10 py-4 rounded-2xl text-xl font-bold transition-all ${
                    regCategory === 'middle' ? 'bg-[#7C3AED] text-white shadow-lg scale-105' : 'bg-white text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  중등 신청
                </button>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {['전체', '상', '중', '하'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setRegLevel(level as any)}
                    className={`px-6 py-2 rounded-full font-bold border-2 transition-all ${
                      regLevel === level 
                        ? 'bg-[#FFD700] border-[#FFD700] text-[#7C3AED]' 
                        : 'bg-white border-gray-200 text-gray-500 hover:border-[#FFD700]'
                    }`}
                  >
                    수준: {level}
                  </button>
                ))}
              </div>

              {/* Class Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredClasses.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-transparent hover:border-[#7C3AED] transition-all group"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-4 py-1 rounded-full text-sm font-bold text-white shadow-md ${
                          item.level === '상' ? 'bg-[#EF4444]' : item.level === '중' ? 'bg-[#3B82F6]' : 'bg-[#10B981]'
                        }`}>
                          수준: {item.level}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-[#7C3AED]">{item.target}</p>
                        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 h-14">{item.title}</h3>
                      </div>
                      <div className="flex flex-col gap-2">
                        <a 
                          href={item.previewUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 py-2 rounded-xl bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors"
                        >
                          <PlayCircle size={18} /> 미리보기
                        </a>
                        <div className="grid grid-cols-2 gap-2">
                          <button className={`py-3 rounded-xl text-white font-bold transition-colors shadow-md text-sm ${
                            item.level === '상' ? 'bg-[#EF4444] hover:bg-[#DC2626]' : item.level === '중' ? 'bg-[#3B82F6] hover:bg-[#2563EB]' : 'bg-[#10B981] hover:bg-[#059669]'
                          }`}>
                            A반 신청
                          </button>
                          <button className={`py-3 rounded-xl text-white font-bold transition-colors shadow-md text-sm ${
                            item.level === '상' ? 'bg-[#EF4444] hover:bg-[#DC2626]' : item.level === '중' ? 'bg-[#3B82F6] hover:bg-[#2563EB]' : 'bg-[#10B981] hover:bg-[#059669]'
                          }`}>
                            B반 신청
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredClasses.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                  해당 조건의 클래스가 없습니다.
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
              className="max-w-5xl mx-auto px-4 py-16"
            >
              <h2 className="title-font text-5xl text-center font-bold text-[#7C3AED] mb-12">체험하기</h2>
              
              <div className="mb-20 flex flex-col lg:flex-row items-center justify-center gap-8 bg-white/50 p-8 rounded-[4rem] border-4 border-white shadow-xl max-w-6xl mx-auto">
                <div className="w-full lg:w-1/2 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="https://i.imgur.com/Hry0vzI.png" 
                    alt="ZEP Metaverse Preview" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-[#7C3AED] mb-2">메타버스 교실 입장하기</h3>
                    <p className="text-gray-600 text-lg">원어민 선생님과 친구들이 기다리고 있어요! 🎈</p>
                  </div>
                  <a 
                    href="https://zep.us/play/6PE6n5" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full lg:w-auto inline-flex items-center justify-center gap-4 px-10 py-8 bg-[#FFD700] text-[#7C3AED] rounded-[2.5rem] text-3xl font-black shadow-[0_20px_50px_rgba(255,215,0,0.3)] hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,215,0,0.5)] transition-all active:scale-95"
                  >
                    <Rocket size={40} className="animate-bounce" /> ZEP 입장하기 <ChevronRight size={40} />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                {[
                  { id: '1WVPAXoTNwA', title: '체험 영상 #1', caption: '실시간 원어민 대화 체험' },
                  { id: 'uZkom_f1-N4', title: '체험 영상 #2', caption: '그룹 북클럽 활동' },
                ].map((video, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-[4rem] shadow-2xl border-4 border-[#7C3AED]/10 flex flex-col">
                    <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                      <PlayCircle className="text-[#7C3AED]" size={36} /> {video.title}
                    </h3>
                    <div className="aspect-video w-full rounded-3xl shadow-xl overflow-hidden bg-black relative group">
                      <iframe 
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}`}
                        title={`YouTube video player ${idx + 1}`}
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="title-font text-2xl font-bold text-[#FFD700] mb-2">2026 1학기 원어민과 함께하는 북클럽</h3>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2026 Gyeongsangbuk-do Office of Education. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Scroll to Top) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#7C3AED] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40"
      >
        <ChevronRight size={24} className="-rotate-90" />
      </motion.button>
    </div>
  );
}
