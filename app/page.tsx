'use client'

import { useState } from 'react'
import { Search, ArrowRight, Check, AlertCircle, Minus, Shield, TrendingUp, Database, Users } from 'lucide-react'

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
  const [variant, setVariant] = useState<'v1' | 'v2' | 'v3' | 'v4' | 'v5'>('v4')

  return (
    <div className="min-h-screen font-sans">
      {/* Variant Switcher */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-white/90 backdrop-blur-md border border-neutral-200 rounded-lg p-1.5 shadow-lg">
        {(['v1', 'v2', 'v3', 'v4', 'v5'] as const).map((v) => (
          <button
            key={v}
            onClick={() => setVariant(v)}
            className={`px-3 py-2 rounded-md text-xs font-medium transition-all ${
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
      {variant === 'v4' && <V4 />}
      {variant === 'v5' && <V5 />}
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
              <p className="text-lg text-neutral-600 leading-relaxed mb-8" style={{ wordBreak: 'keep-all' }}>
                {SEARCH_P1}
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8" style={{ wordBreak: 'keep-all' }}>
                {SEARCH_P2}
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {SEARCH_P3}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   V4 — "Premium Minimalist" 스타일
   우아한 다크-라이트 콘트라스트, 대형 아이콘, 프리미엄한 느낌
═══════════════════════════════════════════════════════════════ */
function V4() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-8">
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7 text-blue-400" />
            <span className="text-xl font-bold text-white tracking-tight">안심고고</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-400 rounded-full" />{' '}2022년 운영</span>
            <span>5명 실명 공개</span>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 px-8 md:px-16 py-20 md:py-32 min-h-[calc(100vh-88px)] flex flex-col justify-center">
          <div className="max-w-5xl mx-auto w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
              <Database className="w-4 h-4 text-blue-400" />
              <span className="text-blue-200 text-sm font-medium">검증 정보 플랫폼</span>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8" style={{ wordBreak: 'keep-all' }}>
              {HERO_TITLE}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-12" style={{ wordBreak: 'keep-all' }}>
              {HERO_BODY}
            </p>

            {/* Search Box */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mb-16">
              <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all group">
                <Search className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors" />
                <input
                  type="text"
                  placeholder="사이트명 또는 주소"
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-neutral-500"
                />
              </div>
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                검색
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, value: '4년', label: '자체 데이터 축적' },
                { icon: Users, value: '5명', label: '실명 편집부' },
                { icon: Shield, value: '∞', label: '신뢰성 우선' },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                  <stat.icon className="w-6 h-6 text-blue-400 mb-4" />
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-neutral-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH SECTION ── */}
      <section className="py-32 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 leading-tight tracking-tight" style={{ wordBreak: 'keep-all' }}>
                {SEARCH_TITLE}
              </h2>
            </div>
            <div className="flex flex-col justify-end space-y-6">
              <p className="text-lg text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {SEARCH_P1}
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">①</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">다중 신호 분석</h3>
              <p className="text-neutral-600 leading-relaxed text-sm" style={{ wordBreak: 'keep-all' }}>
                {SEARCH_P2}
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
              <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">②</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">투명한 결과 표시</h3>
              <p className="text-neutral-600 leading-relaxed text-sm" style={{ wordBreak: 'keep-all' }}>
                {SEARCH_P3}
              </p>
            </div>

            {/* Card 3 - Results */}
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">③</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-6">검색 결과 상태</h3>
              <div className="space-y-3">
                {[
                  { label: '확인완료', color: 'bg-emerald-500' },
                  { label: '확인필요', color: 'bg-amber-500' },
                  { label: '데이터부족', color: 'bg-neutral-400' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-sm font-medium text-neutral-700">{item.label}</span>
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
   V5 — "Modern Institutional" 스타일
   클린한 화이트, 좌측 컬러 보더 악센트, 세로 타임라인
═══════════════════════════════════════════════════════════════ */
function V5() {
  return (
    <div className="w-full bg-white">
      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50 to-white" />
        <div className="absolute top-0 left-0 w-1 h-screen bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-500" />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-neutral-900">안심고고</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
            <span>Since 2022</span>
            <span className="w-px h-5 bg-neutral-300" />
            <span>5명 투명한 운영</span>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 px-8 md:px-16 py-20 md:py-32 min-h-[calc(100vh-88px)] flex flex-col justify-center">
          <div className="max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-200 mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-blue-700 text-sm font-semibold">검증 정보 플랫폼</span>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-bold text-neutral-900 leading-[1.15] tracking-tight mb-8" style={{ wordBreak: 'keep-all' }}>
              {HERO_TITLE}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mb-12" style={{ wordBreak: 'keep-all' }}>
              {HERO_BODY}
            </p>

            {/* Search + Stats Container */}
            <div className="space-y-12">
              {/* Search */}
              <div className="flex gap-3 max-w-2xl">
                <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-white rounded-xl border-2 border-neutral-200 focus-within:border-blue-500 focus-within:shadow-md transition-all">
                  <Search className="w-5 h-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="사이트명 또는 주소"
                    className="flex-1 bg-transparent outline-none text-neutral-900 placeholder:text-neutral-400"
                  />
                </div>
                <button className="px-8 py-4 rounded-xl bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-colors">
                  검색
                </button>
              </div>

              {/* Trust Indicators Timeline */}
              <div className="flex gap-4 md:gap-8 pt-8 border-t-2 border-neutral-200">
                {[
                  { icon: TrendingUp, label: '4년', desc: '운영 경력' },
                  { icon: Users, label: '5명', desc: '실명 팀' },
                  { icon: Database, label: '자체', desc: '데이터 축적' },
                  { icon: Shield, label: '무료', desc: '이용료 없음' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center min-w-0">
                    <item.icon className="w-6 h-6 text-blue-500 mb-3" />
                    <p className="font-bold text-neutral-900 text-lg">{item.label}</p>
                    <p className="text-sm text-neutral-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH SECTION ── */}
      <section className="py-32 px-8 md:px-16 border-t-2 border-neutral-200">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 leading-tight tracking-tight mb-8" style={{ wordBreak: 'keep-all' }}>
              {SEARCH_TITLE}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              {SEARCH_P1}
            </p>
          </div>

          {/* Content Columns */}
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column - Text */}
            <div className="lg:col-span-5 space-y-10">
              {[
                { num: '①', title: '다중 신호 분석', text: SEARCH_P2 },
                { num: '②', title: '투명한 결과 표시', text: SEARCH_P3 },
              ].map((item, i) => (
                <div key={i} className="pb-10 border-b border-neutral-200 last:border-b-0 last:pb-0">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                      <p className="text-neutral-600 leading-relaxed text-sm" style={{ wordBreak: 'keep-all' }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Status Cards */}
            <div className="lg:col-span-7">
              <div className="space-y-4">
                {[
                  { status: '확인완료', icon: Check, color: 'border-l-4 border-l-emerald-500 bg-emerald-50', textColor: 'text-emerald-900', date: '최근 확인: 2025.03.15' },
                  { status: '확인필요', icon: AlertCircle, color: 'border-l-4 border-l-amber-500 bg-amber-50', textColor: 'text-amber-900', date: '제보 현황: 2건' },
                  { status: '데이터부족', icon: Minus, color: 'border-l-4 border-l-neutral-400 bg-neutral-100', textColor: 'text-neutral-700', date: '추가 정보 확인 필요' },
                ].map((item, i) => (
                  <div key={i} className={`p-6 rounded-lg ${item.color}`}>
                    <div className="flex items-start gap-4">
                      <item.icon className={`w-6 h-6 flex-shrink-0 ${item.textColor} mt-1`} />
                      <div className="flex-1">
                        <p className={`font-bold text-lg ${item.textColor}`}>{item.status}</p>
                        <p className={`text-sm ${item.textColor} opacity-75 mt-1`}>{item.date}</p>
                      </div>
                    </div>
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
