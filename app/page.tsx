'use client'

import { useState } from 'react'
import { Search, ArrowRight, Check, AlertCircle, Minus } from 'lucide-react'

/* ─── 원문 텍스트 ─────────────────────────── */
const HERO_TITLE = '먹튀검증, 사이트 조회와 제보 확인까지 한 번에'
const HERO_BODY =
  '안심고고는 사이트명이나 주소를 입력해 최근 확인일, 주소 변경 이력, 제보 현황, 확인 필요 여부를 살펴볼 수 있는 검증 정보 플랫폼입니다. 2022년 운영을 시작해 4년 동안 자체 갱신 데이터를 정리해 왔으며, 편집부 5명이 실명·사진·경력을 공개한 채 운영하고 있습니다. 가입이나 이용을 유도하지 않으며, 접속 전 확인해야 할 위험 신호와 공개 신고 경로를 정리합니다.'

const SEARCH_TITLE = '사이트 조회로 먼저 확인하세요'
const SEARCH_P1 =
  '사이트명이나 현재 주소를 검색하면 등록된 정보, 마지막 확인일, 주소 변경 흔적, 제보 접수 여부를 한 화면에서 확인할 수 있습니다. 동일 사이트에 반복 제보가 들어오거나 주소 변경이 잦은 경우에는 확인 필요 항목으로 분류해 관련 리포트와 연결합니다.'
const SEARCH_P2 =
  '먹튀 의심 여부는 한 가지 신호만으로 판단하지 않습니다. 최근 확인일이 오래되었는지, 주소가 자주 바뀌었는지, 운영 정보가 일치하는지, 환전 지연이나 추가 입금 요구 같은 제보가 반복되는지를 함께 봅니다. 안심고고는 이러한 신호를 모아 사용자가 접속 전 확인할 수 있도록 정리합니다.'
const SEARCH_P3 =
  '검색 결과에는 사이트명, 현재 상태, 마지막 확인일, 주소 변경 이력, 관련 제보, 연결된 가이드가 함께 표시됩니다. 확인 가능한 정보가 충분하지 않은 경우에는 단정하지 않고 데이터 부족 또는 확인 필요 상태로 표시합니다.'

export default function Home() {
  const [variant, setVariant] = useState<'v1' | 'v2' | 'v3'>('v1')

  return (
    <div className="min-h-screen font-sans">
      {/* Variant Switcher */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-white/90 backdrop-blur-md border border-neutral-200 rounded-lg p-1.5 shadow-lg">
        {(['v1', 'v2', 'v3'] as const).map((v) => (
          <button
            key={v}
            onClick={() => setVariant(v)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              variant === v
                ? 'bg-neutral-900 text-white'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            {v.toUpperCase()}
          </button>
        ))}
      </div>

      {variant === 'v1' && <V1 />}
      {variant === 'v2' && <V2 />}
      {variant === 'v3' && <V3 />}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   V1 — "Stripe/Linear" 스타일
   깔끔한 그라데이션 배경, 중앙 정렬, 단순하고 강력한 메시지
═══════════════════════════════════════════════════════════════ */
function V1() {
  return (
    <div className="w-full bg-white">
      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20"
          style={{
            background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
          }}
        />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500" />
            <span className="text-neutral-900 font-semibold text-lg tracking-tight">안심고고</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-500">
            <span>2022년부터 운영</span>
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
            <span>편집부 5명 실명 공개</span>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-88px)] px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-10">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-700 text-sm font-medium">검증 정보 플랫폼</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 leading-[1.1] tracking-tight mb-8" style={{ wordBreak: 'keep-all' }}>
              {HERO_TITLE}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-12" style={{ wordBreak: 'keep-all' }}>
              {HERO_BODY}
            </p>

            {/* Search Box */}
            <div className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto mb-16">
              <div className="w-full flex items-center gap-3 px-5 py-4 bg-white rounded-xl border border-neutral-200 shadow-sm focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                <Search className="w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="사이트명 또는 주소 입력"
                  className="flex-1 bg-transparent outline-none text-neutral-900 placeholder:text-neutral-400"
                />
              </div>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                조회하기
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-12 text-center">
              {[
                { value: '4년', label: '운영 기간' },
                { value: '5명', label: '실명 편집부' },
                { value: '분기별', label: '데이터 갱신' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-neutral-900">{stat.value}</p>
                  <p className="text-sm text-neutral-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH SECTION ── */}
      <section className="py-32 px-8 md:px-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="max-w-2xl mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight mb-6" style={{ wordBreak: 'keep-all' }}>
              {SEARCH_TITLE}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              {SEARCH_P1}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Text Content */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">다중 신호 분석</h3>
                <p className="text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                  {SEARCH_P2}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">투명한 결과 표시</h3>
                <p className="text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                  {SEARCH_P3}
                </p>
              </div>
            </div>

            {/* Right - Result Preview */}
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-neutral-100 bg-neutral-50">
                <p className="text-sm font-medium text-neutral-500">검색 결과 예시</p>
              </div>
              <div className="divide-y divide-neutral-100">
                {[
                  { status: '확인완료', color: 'bg-emerald-500', icon: Check, date: '2025.03.15', note: '주소 변경 없음' },
                  { status: '확인필요', color: 'bg-amber-500', icon: AlertCircle, date: '2025.02.20', note: '제보 2건' },
                  { status: '데이터부족', color: 'bg-neutral-400', icon: Minus, date: '-', note: '추가 확인 필요' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 py-5 hover:bg-neutral-50 transition-colors">
                    <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-neutral-900">{item.status}</p>
                      <p className="text-sm text-neutral-500">{item.note}</p>
                    </div>
                    <p className="text-sm text-neutral-400">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   V2 — "금융/Fintech" 스타일
   다크 헤더, 신뢰감 있는 레이아웃, 숫자 강조
═══════════════════════════════════════════════════════════════ */
function V2() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative bg-[#0f1419] text-white overflow-hidden">
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <span className="text-[#0f1419] font-bold text-lg">A</span>
            </div>
            <div>
              <p className="font-semibold text-white">안심고고</p>
              <p className="text-xs text-neutral-400">Verification Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-emerald-400">운영중</span>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 px-8 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <h1 className="text-4xl md:text-6xl font-bold leading-[1.15] tracking-tight mb-8" style={{ wordBreak: 'keep-all' }}>
                  {HERO_TITLE}
                </h1>
                <p className="text-lg text-neutral-300 leading-relaxed mb-12 max-w-2xl" style={{ wordBreak: 'keep-all' }}>
                  {HERO_BODY}
                </p>

                {/* Search */}
                <div className="flex flex-col sm:flex-row gap-3 mb-12">
                  <div className="flex-1 flex items-center gap-3 px-5 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 focus-within:border-blue-500/50 transition-all">
                    <Search className="w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="사이트명 또는 주소"
                      className="flex-1 bg-transparent outline-none text-white placeholder:text-neutral-500"
                    />
                  </div>
                  <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity">
                    검색
                  </button>
                </div>
              </div>

              {/* Right Stats */}
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '4', unit: '년', label: '자체 데이터 축적' },
                    { value: '5', unit: '명', label: '실명 편집부 운영' },
                    { value: '100', unit: '%', label: '투명한 정보 공개' },
                    { value: '0', unit: '원', label: '이용료 없음' },
                  ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-4xl font-bold text-white">{stat.value}</span>
                        <span className="text-lg text-neutral-400">{stat.unit}</span>
                      </div>
                      <p className="text-sm text-neutral-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH SECTION ── */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 pb-16 border-b border-neutral-200">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-blue-600 mb-4">SITE LOOKUP</p>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight" style={{ wordBreak: 'keep-all' }}>
                {SEARCH_TITLE}
              </h2>
            </div>
            <p className="text-neutral-500 max-w-md lg:text-right" style={{ wordBreak: 'keep-all' }}>
              {SEARCH_P1}
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-blue-600">01</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">다중 신호 분석</h3>
              <p className="text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {SEARCH_P2}
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-emerald-600">02</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">투명한 결과 표시</h3>
              <p className="text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {SEARCH_P3}
              </p>
            </div>

            {/* Card 3 - Result Preview */}
            <div className="p-8 rounded-2xl bg-[#0f1419] text-white">
              <p className="text-sm text-neutral-400 mb-6">검색 결과 미리보기</p>
              <div className="space-y-4">
                {[
                  { label: '확인완료', color: 'bg-emerald-500' },
                  { label: '확인필요', color: 'bg-amber-500' },
                  { label: '데이터부족', color: 'bg-neutral-500' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-sm text-neutral-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   V3 — "Editorial/Magazine" 스타일
   대담한 타이포그래피, 넓은 여백, 신문사 레이아웃
═══════════════════════════════════════════════════════════════ */
function V3() {
  return (
    <div className="w-full bg-[#fafaf9]">
      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-neutral-900 tracking-tight">안심고고</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <span>Since 2022</span>
            <span className="hidden md:inline">검증 정보 플랫폼</span>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-16">
          <div className="max-w-7xl mx-auto w-full">
            {/* Large Title */}
            <h1 className="text-5xl md:text-8xl font-bold text-neutral-900 leading-[1.05] tracking-tight mb-12" style={{ wordBreak: 'keep-all' }}>
              먹튀검증,
              <br />
              사이트 조회와
              <br />
              제보 확인까지
              <br />
              <span className="text-neutral-400">한 번에.</span>
            </h1>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-16 items-end">
              {/* Left - Description */}
              <div>
                <p className="text-lg md:text-xl text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                  {HERO_BODY}
                </p>
              </div>

              {/* Right - Search + Stats */}
              <div className="space-y-8">
                {/* Search */}
                <div className="flex gap-3">
                  <div className="flex-1 flex items-center gap-3 px-5 py-4 bg-white rounded-lg border-2 border-neutral-900 focus-within:border-blue-600 transition-colors">
                    <Search className="w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="사이트명 또는 주소"
                      className="flex-1 bg-transparent outline-none text-neutral-900 placeholder:text-neutral-400"
                    />
                  </div>
                  <button className="px-6 py-4 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors">
                    검색
                  </button>
                </div>

                {/* Stats Row */}
                <div className="flex items-center gap-8 pt-4 border-t border-neutral-200">
                  {[
                    { value: '4년', label: '운영' },
                    { value: '5명', label: '편집부' },
                    { value: '분기별', label: '갱신' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-neutral-900">{stat.value}</span>
                      <span className="text-sm text-neutral-500">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH SECTION ── */}
      <section className="py-24 md:py-32 px-8 md:px-16 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight" style={{ wordBreak: 'keep-all' }}>
                {SEARCH_TITLE}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {SEARCH_P1}
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="p-8 bg-white rounded-xl border border-neutral-200">
                <span className="text-sm font-semibold text-neutral-400 mb-4 block">01</span>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">다중 신호 분석</h3>
                <p className="text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                  {SEARCH_P2}
                </p>
              </div>
              <div className="p-8 bg-white rounded-xl border border-neutral-200">
                <span className="text-sm font-semibold text-neutral-400 mb-4 block">02</span>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">투명한 결과 표시</h3>
                <p className="text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                  {SEARCH_P3}
                </p>
              </div>
            </div>

            {/* Right Column - Status Cards */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm font-semibold text-neutral-400 mb-4">검색 결과 상태</p>
              {[
                { status: '확인완료', desc: '최근 확인 완료, 특이사항 없음', color: 'border-l-emerald-500 bg-emerald-50' },
                { status: '확인필요', desc: '주소 변경 또는 제보 접수', color: 'border-l-amber-500 bg-amber-50' },
                { status: '데이터부족', desc: '정보 부족으로 판단 보류', color: 'border-l-neutral-400 bg-neutral-100' },
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-r-xl border-l-4 ${item.color}`}>
                  <p className="font-semibold text-neutral-900 mb-1">{item.status}</p>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
