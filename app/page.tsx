'use client'

import { useState } from 'react'
import {
  Search, Shield, Clock, FileText, Users,
  ChevronRight, AlertTriangle, CheckCircle,
  ArrowRight, BarChart2, MapPin, MessageSquare,
  TrendingUp, Eye, RefreshCw, Layers
} from 'lucide-react'

/* ─── shared Korean text ─────────────────────────── */
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

/* ═══════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════ */
export default function Home() {
  const [variant, setVariant] = useState<'v4' | 'v5' | 'v6'>('v4')

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Variant Switcher */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl shadow-slate-900/10 rounded-full p-1">
        {(['v4', 'v5', 'v6'] as const).map((v) => (
          <button
            key={v}
            onClick={() => setVariant(v)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              variant === v
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {v.toUpperCase()}
          </button>
        ))}
      </div>

      {variant === 'v4' && <V4 />}
      {variant === 'v5' && <V5 />}
      {variant === 'v6' && <V6 />}
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   V4 — "Observatory"
   다크 네이비 + 크림 화이트. 별처럼 흩어진 데이터 포인트.
   헤더는 풀-블리드 다크, 하단 섹션은 오프-화이트.
   정교한 타이포그래피, 디테일한 정보 카드.
═══════════════════════════════════════════════════ */
function V4() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col"
        style={{ background: '#080e1a' }}
      >
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* glow blobs */}
        <div className="absolute top-[-120px] right-[-80px] w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-80px] left-[10%] w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #0d9488 0%, transparent 70%)' }} />

        {/* top nav bar */}
        <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-7 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #2563eb, #0d9488)' }}>
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">안심고고</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400 text-sm">실시간 검증 운영 중</span>
          </div>
        </nav>

        {/* main content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-16">
            <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">

              {/* left */}
              <div>
                {/* label */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10"
                  style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)' }}>
                  <BarChart2 className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Verification Platform since 2022</span>
                </div>

                <h1
                  className="ko-heading text-white mb-8"
                  style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800 }}
                >
                  먹튀검증,<br />
                  사이트 조회와<br />
                  <span style={{ color: '#60a5fa' }}>제보 확인까지</span><br />
                  한 번에
                </h1>

                <p className="ko-text text-slate-400 text-lg mb-12 max-w-xl leading-relaxed">
                  {HERO_BODY}
                </p>

                {/* trust stats row */}
                <div className="flex flex-wrap gap-8 pt-2 pb-14 border-b border-white/8">
                  {[
                    { num: '4년+', label: '자체 갱신 데이터 운영' },
                    { num: '5명', label: '실명 공개 편집부' },
                    { num: '5단계', label: '검증 프로세스' },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-white font-bold text-2xl mb-0.5" style={{ letterSpacing: '-0.04em' }}>{s.num}</p>
                      <p className="text-slate-500 text-sm">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* right — floating cards */}
              <div className="space-y-3 pt-2">
                {/* Confirmed */}
                <div className="rounded-2xl p-5"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                      <CheckCircle className="w-4.5 h-4.5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">확인 완료</p>
                      <p className="text-slate-500 text-xs">2025.03.21 마지막 확인</p>
                    </div>
                    <div className="ml-auto px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      정상
                    </div>
                  </div>
                  <div className="flex gap-2 text-xs text-slate-500">
                    <span className="px-2 py-0.5 rounded-md bg-white/5">주소 변경 없음</span>
                    <span className="px-2 py-0.5 rounded-md bg-white/5">제보 없음</span>
                  </div>
                </div>

                {/* Warning */}
                <div className="rounded-2xl p-5"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(217,119,6,0.25)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 flex items-center justify-center">
                      <AlertTriangle className="w-4.5 h-4.5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">확인 필요</p>
                      <p className="text-slate-500 text-xs">주소 변경 3회 감지됨</p>
                    </div>
                    <div className="ml-auto px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      주의
                    </div>
                  </div>
                  <div className="flex gap-2 text-xs text-slate-500">
                    <span className="px-2 py-0.5 rounded-md bg-white/5">환전지연 제보 2건</span>
                    <span className="px-2 py-0.5 rounded-md bg-white/5">리포트 연결</span>
                  </div>
                </div>

                {/* Data insufficient */}
                <div className="rounded-2xl p-5"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-600/30 flex items-center justify-center">
                      <Eye className="w-4.5 h-4.5 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">데이터 부족</p>
                      <p className="text-slate-500 text-xs">추가 확인이 필요한 상태</p>
                    </div>
                    <div className="ml-auto px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-600/20 text-slate-400 border border-slate-600/30">
                      미확인
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-xs text-center pt-1">
                  * 실제 검색 결과 화면 예시
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: 'linear-gradient(to bottom, transparent, #f8f9fb)' }} />
      </section>

      {/* ── SEARCH SECTION ── */}
      <section style={{ background: '#f8f9fb' }} className="relative">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-24">

          {/* section header */}
          <div className="mb-14">
            <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-4">사이트 조회</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2
                className="ko-heading text-slate-900"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, maxWidth: '560px' }}
              >
                {SEARCH_TITLE}
              </h2>
              <p className="text-slate-500 max-w-xs text-sm ko-text leading-relaxed">
                접속 전, 먼저 안심고고에서 현황을 확인하세요.
              </p>
            </div>
          </div>

          {/* search box */}
          <div className="mb-16">
            <div className="flex gap-3 max-w-2xl">
              <div className="flex-1 flex items-center gap-4 px-6 bg-white rounded-2xl border-2 border-slate-200 focus-within:border-blue-500 transition-colors"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <input
                  placeholder="사이트명 또는 현재 주소를 입력하세요"
                  className="flex-1 h-16 bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-base"
                />
              </div>
              <button
                className="h-16 px-9 rounded-2xl text-white font-bold text-base transition-all hover:opacity-90 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', boxShadow: '0 8px 24px rgba(37,99,235,0.3)' }}
              >
                검색하기
              </button>
            </div>
          </div>

          {/* content columns */}
          <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-12">
            {/* left text */}
            <div className="space-y-6">
              <p className="ko-text text-slate-600 text-base leading-relaxed">{SEARCH_P1}</p>
              <p className="ko-text text-slate-600 text-base leading-relaxed">{SEARCH_P2}</p>
              <p className="ko-text text-slate-600 text-base leading-relaxed">{SEARCH_P3}</p>
            </div>

            {/* divider */}
            <div className="hidden lg:block bg-slate-200" />

            {/* right — signal cards */}
            <div className="space-y-4">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-5">검색 결과에 포함되는 정보</p>
              {[
                { icon: Clock, color: '#2563eb', bg: '#eff6ff', label: '마지막 확인일', desc: '데이터가 언제 확인되었는지 명시' },
                { icon: RefreshCw, color: '#d97706', bg: '#fffbeb', label: '주소 변경 이력', desc: '변경 횟수·시기 이력 표시' },
                { icon: MessageSquare, color: '#0d9488', bg: '#f0fdfa', label: '제보 접수 현황', desc: '사용자 제보 내용 및 건수' },
                { icon: MapPin, color: '#dc2626', bg: '#fef2f2', label: '확인 필요 여부', desc: '위험 신호 감지 시 플래그 처리' },
                { icon: FileText, color: '#6d28d9', bg: '#f5f3ff', label: '연결된 가이드', desc: '관련 리포트 및 신고 경로' },
              ].map(({ icon: Icon, color, bg, label, desc }) => (
                <div key={label} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: bg }}>
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">{label}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   V5 — "Broadsheet"
   흰 배경에 두꺼운 상단 컬러 바 + 신문식 그리드.
   헤드라인이 지배적. 검색창이 히어로 중심.
   오른쪽에 데이터 요약 패널.
═══════════════════════════════════════════════════ */
function V5() {
  return (
    <div className="w-full">
      {/* top bar */}
      <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #2563eb 0%, #0d9488 50%, #2563eb 100%)' }} />

      {/* nav */}
      <header className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: '#2563eb' }}>
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-slate-900 font-bold text-base leading-none">안심고고</p>
              <p className="text-slate-400 text-xs mt-0.5">먹튀 검증 정보 플랫폼</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-500">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">사이트 조회</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">제보 현황</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">편집부 소개</span>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-0">

          {/* overline */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            </div>
            <span className="text-slate-400 text-sm">2022 · 편집부 5인 운영 · 실명 공개</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-0 items-stretch">

            {/* left */}
            <div className="pr-0 lg:pr-16 lg:border-r border-slate-100 pb-16">
              <h1
                className="ko-heading text-slate-900 mb-8"
                style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.08 }}
              >
                먹튀검증,<br />
                사이트 조회와<br />
                제보 확인까지<br />
                <em className="not-italic" style={{ color: '#2563eb' }}>한 번에</em>
              </h1>

              <p className="ko-text text-slate-500 text-lg mb-10 max-w-xl leading-relaxed">
                {HERO_BODY}
              </p>

              {/* search */}
              <div className="max-w-xl">
                <div
                  className="flex gap-0 rounded-2xl overflow-hidden border-2 border-slate-900 transition-all focus-within:border-blue-600"
                  style={{ boxShadow: '6px 6px 0 #0f172a' }}
                >
                  <div className="flex-1 flex items-center px-5 gap-3 bg-white">
                    <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <input
                      placeholder="사이트명 또는 주소 입력"
                      className="flex-1 h-16 bg-transparent outline-none text-slate-900 placeholder:text-slate-400 text-base"
                    />
                  </div>
                  <button
                    className="h-16 px-9 font-bold text-base text-white flex-shrink-0"
                    style={{ background: '#0f172a' }}
                  >
                    조회
                  </button>
                </div>
                <p className="text-slate-400 text-xs mt-3 pl-1">사이트명, 도메인, 현재 주소 모두 검색 가능합니다</p>
              </div>
            </div>

            {/* right panel */}
            <div className="hidden lg:flex flex-col pl-12 pb-16 justify-between">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-5">플랫폼 현황</p>
                <div className="space-y-5">
                  {[
                    { label: '운영 기간', value: '4년+', sub: '2022년 시작' },
                    { label: '편집부', value: '5명', sub: '실명·경력 공개' },
                    { label: '데이터 갱신', value: '분기별', sub: '자체 갱신 데이터' },
                    { label: '검증 프로세스', value: '5단계', sub: '공개 검증 절차' },
                  ].map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between border-b border-slate-100 pb-4">
                      <div>
                        <p className="text-slate-500 text-sm">{s.label}</p>
                        <p className="text-slate-400 text-xs">{s.sub}</p>
                      </div>
                      <p className="text-slate-900 font-bold text-xl" style={{ letterSpacing: '-0.03em' }}>{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-5 rounded-2xl" style={{ background: '#f1f5f9' }}>
                <p className="text-slate-500 text-xs leading-relaxed ko-text">
                  가입이나 이용을 유도하지 않으며, 접속 전 확인해야 할 위험 신호와 공개 신고 경로를 정리합니다.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SEARCH SECTION ── */}
      <section style={{ background: '#0f172a' }} className="relative overflow-hidden">
        {/* texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 11px)',
          }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8"
                style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)' }}>
                <Search className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Site Lookup</span>
              </div>

              <h2
                className="ko-heading text-white mb-8"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800 }}
              >
                {SEARCH_TITLE}
              </h2>

              <div className="space-y-5 text-slate-400">
                <p className="ko-text text-base leading-relaxed">{SEARCH_P1}</p>
                <p className="ko-text text-base leading-relaxed">{SEARCH_P2}</p>
                <p className="ko-text text-base leading-relaxed">{SEARCH_P3}</p>
              </div>
            </div>

            {/* right */}
            <div className="flex flex-col justify-center gap-4">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">검색 결과 항목</p>
              {[
                { icon: Eye, label: '마지막 확인일', sub: '정보 최신 여부', pill: '필수', pillColor: '#2563eb' },
                { icon: RefreshCw, label: '주소 변경 이력', sub: '운영 안정성 지표', pill: '핵심', pillColor: '#d97706' },
                { icon: MessageSquare, label: '제보 현황', sub: '사용자 제보 공개', pill: '투명', pillColor: '#0d9488' },
                { icon: AlertTriangle, label: '확인 필요 여부', sub: '위험 신호 플래그', pill: '경보', pillColor: '#dc2626' },
                { icon: FileText, label: '연결 가이드', sub: '리포트·신고 경로', pill: '참고', pillColor: '#7c3aed' },
                { icon: Layers, label: '운영 정보 일치', sub: '교차 검증 결과', pill: '검증', pillColor: '#0891b2' },
              ].map(({ icon: Icon, label, sub, pill, pillColor }) => (
                <div key={label}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl transition-all hover:translate-x-1 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <Icon className="w-4 h-4 text-slate-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold">{label}</p>
                    <p className="text-slate-500 text-xs">{sub}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold flex-shrink-0"
                    style={{ background: `${pillColor}20`, color: pillColor, border: `1px solid ${pillColor}30` }}>
                    {pill}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   V6 — "Meridian"
   따뜻한 크림 배경. 대형 번호 + 세리프 혼합 타이포.
   검색창이 페이지 중심. 신뢰 지표는 수평 타임라인.
   헤더부터 푸터까지 명도 단계별로 레이어.
═══════════════════════════════════════════════════ */
function V6() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative" style={{ background: '#fafaf8', minHeight: '100vh' }}>
        {/* large decorative number */}
        <div
          className="absolute right-0 top-0 select-none pointer-events-none overflow-hidden"
          style={{ lineHeight: 1 }}
        >
          <span
            style={{
              fontSize: 'clamp(240px, 35vw, 480px)',
              fontWeight: 900,
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(0,0,0,0.04)',
              letterSpacing: '-0.06em',
            }}
          >
            GO
          </span>
        </div>

        {/* nav */}
        <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8 pb-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-slate-900 font-bold text-base tracking-tight">안심고고</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <TrendingUp className="w-4 h-4" />
            <span>검증 정보 플랫폼</span>
          </div>
        </nav>

        {/* content */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 pt-24 pb-0">

          {/* top label */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-[60px]" style={{ background: '#2563eb' }} />
            <span className="text-slate-400 text-sm tracking-widest uppercase">안심고고 · Verification Info Platform</span>
          </div>

          {/* headline block */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-x-20 gap-y-12 items-start mb-20">
            <div>
              <h1
                className="ko-heading text-slate-900"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 3.8rem)', fontWeight: 900 }}
              >
                먹튀검증,<br />사이트 조회와<br />제보 확인까지<br />
                <span style={{ color: '#2563eb' }}>한 번에</span>
              </h1>
            </div>
            <div className="flex flex-col justify-end">
              <p className="ko-text text-slate-500 text-base leading-relaxed">
                {HERO_BODY}
              </p>
            </div>
          </div>

          {/* ── BIG SEARCH ── */}
          <div
            className="rounded-3xl p-2 mb-6"
            style={{
              background: 'white',
              border: '1.5px solid #e2e8f0',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            }}
          >
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-4 px-6">
                <Search className="w-6 h-6 text-slate-300 flex-shrink-0" />
                <input
                  placeholder="사이트명 또는 현재 주소를 입력하세요"
                  className="flex-1 h-16 bg-transparent outline-none text-slate-900 placeholder:text-slate-300 text-lg"
                />
              </div>
              <button
                className="h-16 px-10 rounded-2xl font-bold text-base text-white transition-all hover:opacity-90 active:scale-[.98]"
                style={{ background: 'linear-gradient(135deg, #1e40af, #2563eb)' }}
              >
                조회하기
                <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* quick tags */}
          <div className="flex flex-wrap gap-2 mb-20">
            {['마지막 확인일', '주소 변경 이력', '제보 현황', '운영 정보', '확인 필요 여부'].map((tag) => (
              <span key={tag}
                className="px-3.5 py-1.5 rounded-full text-sm text-slate-500 cursor-default hover:text-slate-900 hover:bg-white transition-all"
                style={{ border: '1px solid #e2e8f0' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* horizontal trust timeline */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100 rounded-2xl overflow-hidden mb-0">
            {[
              { num: '2022', label: '운영 시작', sub: '4년+ 자체 데이터' },
              { num: '5명', label: '편집부', sub: '실명·사진·경력 공개' },
              { num: '5단계', label: '검증 절차', sub: '공개 검증 프로세스' },
              { num: '100%', label: '투명 운영', sub: '가입 유도 없음' },
            ].map((s) => (
              <div key={s.num} className="bg-white px-8 py-7">
                <p className="text-slate-900 font-black mb-1" style={{ fontSize: '1.75rem', letterSpacing: '-0.04em' }}>{s.num}</p>
                <p className="text-slate-700 font-semibold text-sm mb-0.5">{s.label}</p>
                <p className="text-slate-400 text-xs">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEARCH SECTION ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-24">

          {/* header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: '#2563eb' }} />
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Section 02</span>
              </div>
              <h2
                className="ko-heading text-slate-900"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800 }}
              >
                {SEARCH_TITLE}
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-xs ko-text leading-relaxed">
              사이트 접속 전, 위험 신호를 미리 확인할 수 있습니다.
            </p>
          </div>

          {/* 3-col text */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[SEARCH_P1, SEARCH_P2, SEARCH_P3].map((p, i) => (
              <div key={i} className="relative pl-6" style={{ borderLeft: '3px solid #2563eb' }}>
                <span className="absolute -left-0 top-0 text-xs font-black text-blue-200 leading-none"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                  0{i + 1}
                </span>
                <p className="ko-text text-slate-600 text-sm leading-relaxed mt-0.5">{p}</p>
              </div>
            ))}
          </div>

          {/* result items grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Clock, label: '마지막 확인일', desc: '데이터가 언제 확인되었는지 명시합니다', accent: '#2563eb' },
              { icon: RefreshCw, label: '주소 변경 이력', desc: '변경 횟수와 시기를 이력으로 확인합니다', accent: '#d97706' },
              { icon: MessageSquare, label: '제보 접수 현황', desc: '사용자 제보 건수와 내용을 공개합니다', accent: '#0d9488' },
              { icon: AlertTriangle, label: '확인 필요 여부', desc: '위험 신호 감지 시 플래그로 표시합니다', accent: '#dc2626' },
              { icon: FileText, label: '연결된 가이드', desc: '관련 리포트 및 공개 신고 경로 연결', accent: '#7c3aed' },
              { icon: Users, label: '운영 정보 일치', desc: '교차 검증 결과를 명시합니다', accent: '#0891b2' },
            ].map(({ icon: Icon, label, desc, accent }) => (
              <div key={label}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all cursor-default"
                style={{ background: '#fafaf8' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${accent}12` }}>
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <h3 className="text-slate-900 font-bold text-sm mb-2">{label}</h3>
                <p className="text-slate-500 text-xs ko-text leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
