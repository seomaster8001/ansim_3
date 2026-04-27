'use client'

import { useState } from 'react'
import { Search, Shield, Clock, FileText, Users, ChevronRight, Eye, AlertTriangle, CheckCircle, ArrowRight, Database, Lock, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  const [variant, setVariant] = useState<'v4' | 'v5'>('v4')

  return (
    <div className="min-h-screen bg-white">
      {/* Variant Selector */}
      <div className="fixed top-4 right-4 flex gap-2 z-50 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-gray-200">
        <button
          onClick={() => setVariant('v4')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            variant === 'v4'
              ? 'bg-slate-900 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          V4
        </button>
        <button
          onClick={() => setVariant('v5')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            variant === 'v5'
              ? 'bg-slate-900 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          V5
        </button>
      </div>

      {variant === 'v4' && <VariantFour />}
      {variant === 'v5' && <VariantFive />}
    </div>
  )
}

/* ============================================
   V4: Premium Dark Accent with Glass Morphism
   - Deep navy/slate color palette
   - Glass morphism cards
   - Subtle gradients and shadows
   - Professional, authoritative feel
   ============================================ */
function VariantFour() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300 font-medium">2022년부터 운영 중</span>
              </div>

              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ wordBreak: 'keep-all', letterSpacing: '-0.02em' }}
              >
                사이트 조회로
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  먼저 확인하세요
                </span>
              </h1>

              <p 
                className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg"
                style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}
              >
                안심고고는 토토·카지노 사이트 정보를 조회하고, 사용자 제보를 확인할 수 있는 검증 정보 플랫폼입니다.
              </p>

              {/* Search Box */}
              <div className="relative max-w-xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-lg" />
                <div className="relative flex gap-3 p-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <Input
                      placeholder="사이트명 또는 주소를 입력하세요"
                      className="w-full h-14 pl-12 pr-4 bg-white/10 border-0 rounded-xl text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-blue-500"
                    />
                  </div>
                  <Button className="h-14 px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25">
                    검색
                  </Button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm">실명 공개 편집부</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm">5단계 검증 프로세스</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm">분기별 리포트 갱신</span>
                </div>
              </div>
            </div>

            {/* Right: Stats Cards */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Floating Cards */}
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                        <Clock className="w-6 h-6 text-blue-400" />
                      </div>
                      <p className="text-3xl font-bold text-white mb-1">4년+</p>
                      <p className="text-sm text-slate-400">누적 운영 기간</p>
                    </div>
                    <div className="flex-1 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-emerald-400" />
                      </div>
                      <p className="text-3xl font-bold text-white mb-1">5명</p>
                      <p className="text-sm text-slate-400">전문 편집부</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400 mb-1">총 검증 완료</p>
                        <p className="text-2xl font-bold text-white">5단계 프로세스 적용</p>
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                        <Shield className="w-8 h-8 text-amber-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">FEATURES</p>
            <h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              style={{ wordBreak: 'keep-all', letterSpacing: '-0.02em' }}
            >
              검색 결과에서 확인할 수 있는 정보
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              사이트 접속 전, 필요한 정보를 한눈에 확인하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute -inset-px bg-gradient-to-b from-blue-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="relative p-8 bg-white rounded-3xl border border-slate-200 group-hover:border-transparent transition-colors h-full">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                  <Eye className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ wordBreak: 'keep-all' }}>마지막 확인일</h3>
                <p className="text-slate-600 leading-relaxed" style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>
                  등록된 정보가 언제 마지막으로 확인되었는지 표시합니다. 최신 정보 여부를 쉽게 판단할 수 있습니다.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute -inset-px bg-gradient-to-b from-amber-500 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="relative p-8 bg-white rounded-3xl border border-slate-200 group-hover:border-transparent transition-colors h-full">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                  <AlertTriangle className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ wordBreak: 'keep-all' }}>주소 변경 이력</h3>
                <p className="text-slate-600 leading-relaxed" style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>
                  반복된 주소 변경은 운영 안정성을 판단하는 주요 지표입니다. 변경 횟수와 시기를 확인하세요.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute -inset-px bg-gradient-to-b from-emerald-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="relative p-8 bg-white rounded-3xl border border-slate-200 group-hover:border-transparent transition-colors h-full">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                  <FileText className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ wordBreak: 'keep-all' }}>사용자 제보</h3>
                <p className="text-slate-600 leading-relaxed" style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>
                  실제 사용자가 접수한 제보 내용을 투명하게 공개합니다. 다양한 경험을 참고하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 md:p-16">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <h2 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ wordBreak: 'keep-all', letterSpacing: '-0.02em' }}
              >
                지금 바로 조회해 보세요
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto" style={{ wordBreak: 'keep-all' }}>
                사이트 이용 전, 안심고고에서 현황을 확인하세요
              </p>
              <Button className="h-14 px-10 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-semibold text-base">
                사이트 검색하기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ============================================
   V5: Clean Minimal with Accent Lines
   - White/light gray with strategic color accents
   - Asymmetric layouts
   - Bold typography
   - Sophisticated, modern feel
   ============================================ */
function VariantFive() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Left Accent Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-cyan-500 to-emerald-500" />
        
        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-24">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Status Badge */}
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-slate-600">2022년부터 운영 중인 검증 정보 플랫폼</span>
              </div>

              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]"
                style={{ wordBreak: 'keep-all', letterSpacing: '-0.03em' }}
              >
                조회 한 번으로
                <br />
                <span className="relative">
                  확인하세요
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8C50 2 150 2 198 8" stroke="url(#underline-gradient)" strokeWidth="4" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop stopColor="#2563eb"/>
                        <stop offset="1" stopColor="#06b6d4"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p 
                className="text-xl text-slate-500 mb-12 max-w-xl leading-relaxed"
                style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}
              >
                토토·카지노 사이트의 마지막 확인일, 주소 변경 이력, 사용자 제보를 한 화면에서 확인하세요.
              </p>

              {/* Search Box */}
              <div className="max-w-xl">
                <div className="flex gap-3">
                  <div className="flex-1 relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity blur" />
                    <div className="relative flex items-center bg-slate-100 rounded-2xl">
                      <Search className="absolute left-5 w-5 h-5 text-slate-400" />
                      <Input
                        placeholder="사이트명 또는 주소 입력"
                        className="w-full h-16 pl-14 pr-5 bg-transparent border-0 text-lg placeholder:text-slate-400 focus-visible:ring-0"
                      />
                    </div>
                  </div>
                  <Button className="h-16 px-8 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-semibold text-base">
                    검색
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: Feature Stack */}
            <div className="lg:col-span-5">
              <div className="space-y-4">
                {/* Feature 1 */}
                <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all cursor-pointer">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-slate-900" style={{ wordBreak: 'keep-all' }}>마지막 확인일</h3>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                      </div>
                      <p className="text-sm text-slate-500" style={{ wordBreak: 'keep-all' }}>정보의 최신 여부를 확인</p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/5 transition-all cursor-pointer">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/25">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-slate-900" style={{ wordBreak: 'keep-all' }}>주소 변경 이력</h3>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-amber-500 transition-colors" />
                      </div>
                      <p className="text-sm text-slate-500" style={{ wordBreak: 'keep-all' }}>운영 안정성 판단 자료</p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5 transition-all cursor-pointer">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/25">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-slate-900" style={{ wordBreak: 'keep-all' }}>사용자 제보</h3>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                      </div>
                      <p className="text-sm text-slate-500" style={{ wordBreak: 'keep-all' }}>실제 경험 기반 정보</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Trust Message */}
            <div>
              <p className="text-blue-400 font-semibold mb-4">신뢰할 수 있는 정보</p>
              <h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                style={{ wordBreak: 'keep-all', letterSpacing: '-0.02em' }}
              >
                편집부 5명이
                <br />
                실명으로 운영합니다
              </h2>
              <p 
                className="text-lg text-slate-400 mb-10 leading-relaxed"
                style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}
              >
                안심고고는 편집부 전원이 실명, 사진, 경력을 공개하고 있습니다. 익명으로 숨지 않고, 책임감 있게 정보를 제공합니다.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-full border border-white/10">
                  <Lock className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">실명 공개</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-full border border-white/10">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  <span className="text-white font-medium">5단계 검증</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-full border border-white/10">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span className="text-white font-medium">분기 갱신</span>
                </div>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-5xl font-bold text-white mb-2">4+</p>
                <p className="text-slate-400">년 운영</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-5xl font-bold text-white mb-2">5</p>
                <p className="text-slate-400">명 편집부</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-5xl font-bold text-white mb-2">5</p>
                <p className="text-slate-400">단계 검증</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl">
                <p className="text-5xl font-bold text-white mb-2">100%</p>
                <p className="text-blue-100">실명 공개</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              style={{ wordBreak: 'keep-all', letterSpacing: '-0.02em' }}
            >
              이렇게 활용하세요
            </h2>
            <p className="text-lg text-slate-500" style={{ wordBreak: 'keep-all' }}>
              간단한 3단계로 사이트 정보를 확인할 수 있습니다
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2" />
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative text-center">
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-600/30">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ wordBreak: 'keep-all' }}>사이트 검색</h3>
                <p className="text-slate-500" style={{ wordBreak: 'keep-all' }}>
                  사이트명 또는 주소를 입력하세요
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center">
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-xl shadow-cyan-500/30">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ wordBreak: 'keep-all' }}>정보 확인</h3>
                <p className="text-slate-500" style={{ wordBreak: 'keep-all' }}>
                  주소 변경, 제보 현황을 확인하세요
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative text-center">
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ wordBreak: 'keep-all' }}>판단 참고</h3>
                <p className="text-slate-500" style={{ wordBreak: 'keep-all' }}>
                  정보를 바탕으로 직접 판단하세요
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Button className="h-14 px-10 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-semibold text-base">
              지금 검색하기
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
