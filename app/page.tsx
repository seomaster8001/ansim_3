'use client'

import { useState } from 'react'
import {
  Search, Shield, Clock, FileText, Users,
  ChevronRight, AlertTriangle, CheckCircle,
  ArrowRight, BarChart2, MapPin, MessageSquare,
  TrendingUp, Eye, RefreshCw, Layers,
  Lock, Zap, Target, Award
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

export default function Home() {
  const [variant, setVariant] = useState<'v1' | 'v2' | 'v3'>('v1')

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Variant Switcher */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white border border-slate-200 rounded-full p-2 shadow-2xl">
        {(['v1', 'v2', 'v3'] as const).map((v) => (
          <button
            key={v}
            onClick={() => setVariant(v)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              variant === v
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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

/* ═══════════════════════════════════════════════════
   V1 — "Sentinel" 
   모던 미니멀 - 화이트/라이트 슬레이트, 프리미엄 그라데이션
   신뢰감과 보안 강조. 강렬한 타이포그래피.
═══════════════════════════════════════════════════ */
function V1() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-white overflow-hidden flex flex-col">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Nav */}
        <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-slate-900 font-bold text-lg">안심고고</span>
          </div>
          <div className="text-slate-500 text-sm">4년 운영 · 편집부 5명 공개</div>
        </nav>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center px-6 md:px-12">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-600 text-xs font-semibold">신뢰 검증 정보 플랫폼</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-8 ko-heading">
                  먹튀검증,<br />
                  <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                    사이트 조회
                  </span>
                  <br />
                  한 번에
                </h1>

                <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-lg ko-text">
                  {HERO_BODY}
                </p>

                <div className="flex flex-wrap gap-8 mb-12">
                  {[
                    { num: '4', unit: '년', desc: '자체 데이터 운영' },
                    { num: '5', unit: '명', desc: '실명 편집부' },
                    { num: '∞', unit: '', desc: '공정한 검증' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-blue-600">{stat.num}</span>
                      <div>
                        <span className="text-slate-600 text-sm font-semibold">{stat.unit}</span>
                        <p className="text-slate-500 text-xs">{stat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                  검색 시작하기 <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right — Result cards */}
              <div className="relative h-full hidden lg:flex flex-col justify-center">
                <div className="space-y-4">
                  {/* Card 1 - Safe */}
                  <div className="group p-6 rounded-2xl bg-white backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-2xl hover:border-green-400 transition-all duration-300 transform hover:translate-y-[-4px] cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:from-green-100 group-hover:to-emerald-100 transition-colors">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-slate-900">확인 완료</p>
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">안전</span>
                        </div>
                        <p className="text-sm text-slate-500">2025.03.15 확인</p>
                        <p className="text-xs text-slate-400 mt-2">주소 변경 없음 · 제보 없음</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 - Warning */}
                  <div className="group p-6 rounded-2xl bg-white backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-300 transform hover:translate-y-[-4px] cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center flex-shrink-0 group-hover:from-amber-100 group-hover:to-orange-100 transition-colors">
                        <AlertTriangle className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-slate-900">확인 필요</p>
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">주의</span>
                        </div>
                        <p className="text-sm text-slate-500">주소 변경 3회 감지</p>
                        <p className="text-xs text-slate-400 mt-2">환전 지연 제보 2건 · 리포트 확인</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 - Pending */}
                  <div className="group p-6 rounded-2xl bg-white backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-2xl hover:border-slate-400 transition-all duration-300 transform hover:translate-y-[-4px] cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center flex-shrink-0 group-hover:from-slate-100 group-hover:to-slate-200 transition-colors">
                        <Eye className="w-6 h-6 text-slate-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-slate-900">데이터 부족</p>
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">미확인</span>
                        </div>
                        <p className="text-sm text-slate-500">추가 확인 필요</p>
                        <p className="text-xs text-slate-400 mt-2">정보 제보 기다리는 중</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH SECTION ── */}
      <section className="relative bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-xs font-semibold">사이트 조회 기능</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 ko-heading">
              {SEARCH_TITLE}
            </h2>
            <p className="text-slate-600 max-w-2xl ko-text text-lg leading-relaxed">
              접속하기 전에, 안심고고에서 먼저 현황을 살펴보세요. 최근 확인일, 주소 변경, 제보 현황을 한눈에 파악합니다.
            </p>
          </div>

          {/* Search Box */}
          <div className="mb-20">
            <div className="flex gap-3 max-w-2xl">
              <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-white rounded-full border-2 border-slate-200 hover:border-blue-400 focus-within:border-blue-600 transition-all shadow-lg hover:shadow-xl">
                <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <input
                  placeholder="사이트명 또는 현재 주소를 입력하세요"
                  className="flex-1 bg-transparent outline-none text-slate-900 placeholder:text-slate-400 text-base"
                />
              </div>
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                검색
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left column */}
            <div className="space-y-6">
              {[
                { title: '통합 검색 결과', content: SEARCH_P1 },
                { title: '신뢰도 판단', content: SEARCH_P2 },
                { title: '상세 정보 제공', content: SEARCH_P3 },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-slate-900 font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed ko-text text-base">{item.content}</p>
                </div>
              ))}
            </div>

            {/* Right column - Info cards */}
            <div className="space-y-4">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">검색 결과에 포함되는 정보</p>
              {[
                { icon: Clock, label: '마지막 확인일', desc: '데이터 갱신 시점' },
                { icon: RefreshCw, label: '주소 변경 이력', desc: '변경 횟수와 시기' },
                { icon: MessageSquare, label: '제보 현황', desc: '사용자 제보 내용' },
                { icon: AlertTriangle, label: '확인 필요 여부', desc: '위험 신호 감지' },
                { icon: FileText, label: '연결 가이드', desc: '관련 리포트 및 신고' },
                { icon: Lock, label: '신뢰도 지수', desc: '종합 검증 평가' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center flex-shrink-0 group-hover:from-blue-100 group-hover:to-teal-100 transition-colors">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-900 font-semibold text-sm">{item.label}</p>
                    <p className="text-slate-400 text-xs">{item.desc}</p>
                  </div>
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
   V2 — "Fortress"
   프리미엄 다크 + 강렬한 사이버 감각
   신뢰감, 보안, 기술력을 시각적으로 표현
═══════════════════════════════════════════════════ */
function V2() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-slate-950 text-white overflow-hidden flex flex-col">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Glow orbs */}
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 70%)' }}
        />

        {/* Nav */}
        <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-7 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <Lock className="w-6 h-6 text-slate-950 font-bold" />
            </div>
            <div>
              <p className="text-white font-black text-lg">안심고고</p>
              <p className="text-cyan-400 text-xs">Verified Trust Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-sm font-semibold">Live</span>
          </div>
        </nav>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center px-6 md:px-12">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">검증 플랫폼 2022 - 2026</span>
                </div>

                <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 ko-heading">
                  신뢰할 수<br />
                  있는<br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    정보
                  </span>
                </h1>

                <p className="text-slate-300 text-lg leading-relaxed mb-12 max-w-xl ko-text">
                  {HERO_BODY}
                </p>

                <div className="flex flex-wrap gap-6 mb-12">
                  {[
                    { num: '4', label: '년의 데이터' },
                    { num: '5', label: '명의 편집부' },
                    { num: '100%', label: '투명 운영' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
                      <span className="text-cyan-400 font-black text-2xl">{item.num}</span>
                      <span className="text-slate-400 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>

                <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-950 font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
                  지금 검색하기
                </button>
              </div>

              {/* Right - Tech visualization */}
              <div className="relative hidden lg:block h-full">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-sm" />
                <div className="relative p-8 space-y-6">
                  {[
                    { status: '안전', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
                    { status: '주의', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
                    { status: '미확인', color: 'text-slate-400', bg: 'bg-slate-500/10', border: 'border-slate-500/30' },
                  ].map((item, i) => (
                    <div key={i} className={`p-5 rounded-xl border ${item.border} ${item.bg} backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer transform hover:translate-x-2`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-3 h-3 rounded-full ${item.color} animate-pulse`} />
                        <span className={`font-bold text-sm ${item.color}`}>{item.status}</span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        검증 데이터 · 마지막 확인일 · 주소 변경 · 제보 현황
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH SECTION ── */}
      <section className="relative bg-slate-900 text-white py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">빠르고 정확한 검색</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 ko-heading">
              {SEARCH_TITLE}
            </h2>
            <p className="text-slate-400 max-w-2xl ko-text text-lg leading-relaxed">
              사이트 정보를 검색하면 최근 확인일, 주소 변경 이력, 사용자 제보를 실시간으로 확인합니다.
            </p>
          </div>

          {/* Search Box */}
          <div className="mb-20">
            <div className="flex gap-3 max-w-2xl">
              <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 focus-within:border-cyan-500 transition-all backdrop-blur-sm">
                <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <input
                  placeholder="사이트명 또는 주소 입력"
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500 text-base"
                />
              </div>
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
                검색
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left */}
            <div className="space-y-8">
              {[
                { num: '1', title: '통합 검색', text: SEARCH_P1 },
                { num: '2', title: '신뢰도 판단', text: SEARCH_P2 },
                { num: '3', title: '상세 정보', text: SEARCH_P3 },
              ].map((item) => (
                <div key={item.num} className="flex gap-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 font-black text-slate-950">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed ko-text text-base">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Feature cards */}
            <div className="space-y-4">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">검증 정보 항목</p>
              {[
                { icon: Clock, label: '마지막 확인일', desc: 'Real-time updated' },
                { icon: RefreshCw, label: '주소 변경 이력', desc: 'Full history tracking' },
                { icon: MessageSquare, label: '제보 현황', desc: 'User reports' },
                { icon: AlertTriangle, label: '위험 신호', desc: 'Alert system' },
                { icon: FileText, label: '연결 가이드', desc: 'Expert reports' },
                { icon: Users, label: '커뮤니티', desc: 'Public disclosure' },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/50 transition-all backdrop-blur-sm group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <item.icon className="w-5 h-5 text-cyan-400 flex-shrink-0 group-hover:text-cyan-300 transition-colors" />
                    <div>
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                      <p className="text-slate-400 text-xs">{item.desc}</p>
                    </div>
                  </div>
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
   V3 — "Clarity"
   미니멀 프리미엄 - 크림/아이보리, 대담한 검은색
   우아하고 세련된, 신문사처럼 신뢰감 있는 디자인
═══════════════════════════════════════════════════ */
function V3() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
          }}
        />

        {/* Nav */}
        <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-8 border-b border-slate-900/5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-slate-900 font-black text-lg">안심고고</p>
              <p className="text-slate-400 text-xs tracking-wide">먹튀검증 정보</p>
            </div>
          </div>
          <div className="text-slate-500 text-xs tracking-widest font-semibold">EST. 2022</div>
        </nav>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center px-6 md:px-12">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start pt-8">
              
              {/* Left */}
              <div>
                <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-6 ko-text">신뢰할 수 있는 검증</p>

                <h1 className="text-6xl md:text-7xl font-black leading-tight text-slate-900 mb-10 ko-heading">
                  먹튀검증,<br />
                  사이트 조회<br />
                  <span className="text-slate-400">한 번에</span>
                </h1>

                <p className="text-slate-600 text-lg leading-relaxed mb-14 max-w-xl ko-text">
                  {HERO_BODY}
                </p>

                <div className="flex flex-wrap gap-12 mb-16 pb-12 border-b border-slate-900/10">
                  {[
                    { label: '4 Years', value: '자체 데이터' },
                    { label: '5 Team', value: '공개 편집부' },
                    { label: '100% Fair', value: '공정한 검증' },
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-slate-400 text-xs font-semibold mb-1">{item.label}</p>
                      <p className="text-2xl font-black text-slate-900">{item.value}</p>
                    </div>
                  ))}
                </div>

                <button className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg">
                  조회 시작
                </button>
              </div>

              {/* Right - Elegant result display */}
              <div className="hidden lg:block space-y-4 pt-8">
                {[
                  { icon: CheckCircle, label: 'Confirmed', status: 'Safe', color: '#10b981', bg: '#ecfdf5' },
                  { icon: AlertTriangle, label: 'Warning', status: 'Review', color: '#f59e0b', bg: '#fffbeb' },
                  { icon: Eye, label: 'Pending', status: 'Check', color: '#6b7280', bg: '#f9fafb' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-slate-900/5 hover:shadow-xl hover:border-slate-900/10 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: item.bg }}>
                        <item.icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-900 font-bold text-sm mb-1">{item.label}</p>
                        <p className="text-slate-400 text-xs mb-2">최근 확인 정보</p>
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold" 
                          style={{ color: item.color, background: item.bg }}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH SECTION ── */}
      <section className="relative bg-white py-24 border-t border-slate-900/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="mb-16">
            <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-6 ko-text">조회 기능</p>
            <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 ko-heading leading-tight">
                {SEARCH_TITLE}
              </h2>
              <p className="text-slate-600 ko-text text-lg leading-relaxed">
                접속 전에 사이트 정보를 확인하세요. 확인일, 주소 변경, 제보 현황, 신뢰도를 한눈에 파악합니다.
              </p>
            </div>
          </div>

          {/* Search Box */}
          <div className="mb-20">
            <div className="flex gap-3 max-w-2xl">
              <div className="flex-1 flex items-center gap-3 px-7 py-4 bg-white rounded-2xl border-2 border-slate-900 shadow-xl">
                <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <input
                  placeholder="사이트명 또는 주소를 입력하세요"
                  className="flex-1 bg-transparent outline-none text-slate-900 placeholder:text-slate-400 text-base font-medium"
                />
              </div>
              <button className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold shadow-xl hover:bg-slate-800 transition-all transform hover:scale-105">
                검색
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left text */}
            <div className="space-y-8">
              {[
                { num: '1', title: '통합 조회', text: SEARCH_P1 },
                { num: '2', title: '신뢰도 판단', text: SEARCH_P2 },
                { num: '3', title: '상세 정보', text: SEARCH_P3 },
              ].map((item) => (
                <div key={item.num}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center font-black text-slate-900">
                      {item.num}
                    </div>
                    <h3 className="text-slate-900 font-black text-lg">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed ko-text text-base ml-12">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Right - Info features */}
            <div className="space-y-4">
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-6 ko-text">검색 결과 정보 항목</p>
              {[
                { icon: Clock, label: '마지막 확인일', desc: '데이터 갱신 시점' },
                { icon: RefreshCw, label: '주소 변경 이력', desc: '변경 횟수 및 시기' },
                { icon: MessageSquare, label: '제보 현황', desc: '사용자 제보 내용' },
                { icon: AlertTriangle, label: '위험 신호', desc: '주의 항목 플래그' },
                { icon: FileText, label: '연결 가이드', desc: '관련 리포트 링크' },
                { icon: Award, label: '신뢰도 지수', desc: '종합 평가 등급' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-900/5 hover:border-slate-900/20 hover:shadow-md transition-all">
                  <item.icon className="w-5 h-5 text-slate-900 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-slate-900 font-semibold text-sm">{item.label}</p>
                    <p className="text-slate-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
