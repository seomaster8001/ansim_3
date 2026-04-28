'use client'

import { ChevronRight, Check, AlertCircle, Eye, Clock, Banknote } from 'lucide-react'

export default function SafetyPage() {
  const tiers = [
    {
      name: 'Gold',
      description: '보증금 상위 + 운영 3년 이상 + 환전 지연 제보 누적 0건',
      color: 'from-amber-400 to-yellow-500',
      badge: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      name: 'Silver',
      description: '보증금 중위 + 운영 1~3년 + 환전 처리 정상',
      color: 'from-gray-300 to-gray-400',
      badge: 'bg-gray-50 text-gray-700 border-gray-200',
    },
    {
      name: 'Bronze',
      description: '입점 1년 미만 + 분기 점검 통과 (관찰 단계)',
      color: 'from-orange-600 to-amber-600',
      badge: 'bg-orange-50 text-orange-700 border-orange-200',
    },
  ]

  const verificationSteps = [
    { n: '1', title: '운영 정보 일치', desc: '사이트명, 도메인, 운영 시작일, 사업자 정보의 외부 표기 일치 여부' },
    { n: '2', title: '보증금 확인', desc: '사이트 측 공시 보증금과 입점 시 확인된 수치 일치 여부' },
    { n: '3', title: '사용자 제보 패턴', desc: '누적 제보 건수, 환전 지연 비율, 추가 입금 요구 사례 유무' },
    { n: '4', title: '변경 이력 추적', desc: '주소 변경 빈도, 운영 정보 변동 타임라인 (분기 단위 기록)' },
    { n: '5', title: '재점검 주기 준수', desc: '분기 시점 모든 항목 재확인 + 결과 공개' },
  ]

  const signals = [
    { icon: Clock, label: '마지막 검증일', desc: '분기 점검이 언제 수행됐는지 표기' },
    { icon: Banknote, label: '보증금 수치', desc: '입점 시 확인된 보증금 (단위 명시)' },
    { icon: AlertCircle, label: '운영 연차', desc: '운영 시작일 기준 누적 기간' },
    { icon: Eye, label: '누적 제보 건수', desc: '5건 이상만 공개 (5건 미만 비공개 정책)' },
  ]

  const faqs = [
    {
      q: 'Tier Gold가 곧 안전을 단정하나요',
      a: 'Tier Gold는 안심고고가 운영 이력, 보증금, 환전 처리, 제보 누적 항목을 분기 단위로 점검한 결과의 상대 분류 라벨입니다. 안전을 단정하는 라벨은 아니며, 점검 시점 이후 변동이 있을 수 있어 마지막 검증일과 누적 제보 건수, 분기 리포트 변경 사유를 함께 확인한 뒤 판단을 권장합니다.',
    },
    {
      q: '메이저사이트와 보증업체는 어떻게 다른가요',
      a: '메이저사이트는 검색 사용자가 "검증 통과 사이트"를 가리킬 때 흔히 사용하는 표현이고, 보증업체는 안심고고가 5단계 점검을 통과해 디렉토리에 등록한 사이트를 의미합니다. 두 표현은 사용자 의도 측면에서 겹치지만, 안심고고 페이지에서는 점검 기준이 명시된 보증업체라는 표기를 일관 사용합니다.',
    },
    {
      q: 'Tier 강등이나 디렉토리 제외는 어떻게 알 수 있나요',
      a: '분기 점검에서 5단계 항목 중 하나라도 미충족이면 디렉토리 카드의 마지막 검증일과 변경 사유가 즉시 갱신되며, 동일 사례는 분기 리포트에 사유 카테고리별로 함께 기록됩니다. 변경 이력 전체는 데이터센터 카테고리에서 분기별 누적 통계와 강등·제외 사유 분포 형태로 함께 공개됩니다.',
    },
  ]

  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background font-sans">
      {/* ── HERO SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-accent border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-label text-primary mb-4">Verified Directory</p>
              <h1 className="text-h1 text-heading mb-6">
                보증업체 — Tier 등급별 검증 통과 사이트 디렉토리
              </h1>
              <p className="text-body-lg text-body max-w-2xl">
                검증 통과 사이트만 모아둔 카테고리. 5단계 검증을 통과한 사이트를 Gold·Silver·Bronze Tier로 분류하고 분기마다 재점검합니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/safety/gold/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-body font-medium hover:bg-primary/90 transition-colors">
                Gold 보증업체 보기
                <ChevronRight className="w-4 h-4" />
              </a>
              <a href="/safety/silver/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-muted text-body font-medium border border-border hover:bg-muted/80 transition-colors">
                전체 디렉토리
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS CERTIFIED ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">보증업체란 무엇인가요</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto">
              안심고고가 자체 5단계 검증 항목을 모두 통과한 사이트로, 운영 4년차 편집부 5명이 입점 시점과 분기 시점에 동일 기준을 반복 점검합니다.
            </p>
          </div>

          <div className="space-y-5">
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-h4 text-heading mb-2">검증 통과 사이트 디렉토리</h3>
                  <p className="text-body text-body" style={{ wordBreak: 'keep-all' }}>
                    보증업체 디렉토리는 검증 통과 사이트만 모아둔 카테고리이므로 먹튀 의심 사이트 조회는 별도 카테고리에서 다룹니다. "어디가 안전한가"를 빠르게 확인하려는 사용자 의도에 맞춘 hub입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-secondary border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-h4 text-heading mb-2">분기 단위 재점검</h3>
                  <p className="text-body text-body" style={{ wordBreak: 'keep-all' }}>
                    편집부 5명이 Tier 라벨로 분류한 뒤 디렉토리에 등록한 사이트를 분기마다 동일 기준으로 재점검합니다. 미달 시 강등하거나 디렉토리에서 제외합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIER STRUCTURE ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">Tier 등급 구조</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto">
              보증금 규모, 운영 연차, 누적 제보 건수, 환전 처리 이력을 합산해 산정한 상대 분류 라벨입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {tiers.map((tier, i) => (
              <div key={i} className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${tier.color} mb-4`}>
                  <span className="text-white font-bold text-h4">{tier.name[0]}</span>
                </div>
                <h3 className="text-h4 text-heading mb-3">{tier.name}</h3>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                  {tier.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-accent border border-accent-foreground/30">
            <p className="text-body-sm text-accent-foreground" style={{ wordBreak: 'keep-all' }}>
              등급 간 안전을 단정하는 표현은 일절 사용하지 않고 점검 시점 데이터와 마지막 검증일을 함께 노출합니다. <a href="/safety/gold/" className="text-primary hover:underline font-medium">Gold/Silver/Bronze 보증업체 필터</a>로 등급별 리스트를 확인할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5 VERIFICATION STEPS ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">5단계 검증 통과 항목</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto">
              각 항목은 자체 수집 데이터와 사용자 제보 누적치를 근거로 분기마다 동일 기준으로 재점검합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {verificationSteps.map((step, i) => (
              <div key={i} className="p-5 rounded-xl bg-secondary border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-label font-bold">
                    {step.n}
                  </div>
                </div>
                <h3 className="text-h4 text-heading mb-2">{step.title}</h3>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USER PROTECTION SIGNALS ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">사용자 보호 시그널</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto">
              각 보증업체 상세 페이지에 일관 노출되는 4가지 시그널로 사용자가 직접 확인할 수 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {signals.map((signal, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <signal.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-h4 text-heading mb-1">{signal.label}</h3>
                  <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                    {signal.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 rounded-xl bg-accent border border-accent-foreground/30">
            <p className="text-body-sm text-accent-foreground" style={{ wordBreak: 'keep-all' }}>
              문제가 발생하면 <a href="/support/contact/" className="text-primary hover:underline font-medium">제보 폼</a>으로 알려 주세요. 접수→검토→분류→반영 4단계로 처리합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left: Heading + CTA */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <p className="text-label text-primary mb-4">FAQ</p>
                <h2 className="text-h2 text-heading leading-tight mb-6">
                  자주 묻는 질문
                </h2>
                <p className="text-body-sm text-body mb-8" style={{ wordBreak: 'keep-all' }}>
                  보증업체와 검증 기준에 대해 자주 받는 질문을 정리했습니다.
                </p>
                <a
                  href="/support/contact/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-body-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  더 궁금한 점이 있으신가요?
                </a>
              </div>
            </div>

            {/* Right: FAQ List */}
            <div className="lg:col-span-8">
              <div className="space-y-3">
                {faqs.map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-xl transition-all ${
                      openFaq === i 
                        ? 'bg-accent ring-1 ring-primary/30 shadow-sm' 
                        : 'bg-background hover:ring-1 hover:ring-border'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-start gap-4 p-5 text-left"
                    >
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                        openFaq === i 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-body'
                      }`}>
                        {i + 1}
                      </span>
                      <span className="flex-1 text-body-sm font-medium text-heading pt-0.5" style={{ wordBreak: 'keep-all' }}>
                        {item.q}
                      </span>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 transition-transform mt-0.5 ${
                          openFaq === i ? 'rotate-180 text-primary' : 'text-subtle'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 pl-16">
                        <p className="text-body-sm text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED CATEGORIES ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">관련 카테고리</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto">
              보증업체 디렉토리 외 다른 카테고리에서 더 많은 정보를 확인하세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { title: '먹튀검증 리포트', desc: '제보 이력과 주소 변경 사건별 기록', href: '/review/' },
              { title: '스포츠 분석', desc: 'KBO·MLB·EPL 경기 데이터와 라이브스코어', href: '/picks/' },
              { title: '피해예방 가이드', desc: '환전 지연, 피싱 주소, 주소 변경 리스크 체크', href: '/guide/' },
              { title: '데이터센터', desc: '변경 이력, 검증 현황, 카테고리별 흐름 요약', href: '/data/' },
            ].map((cat, i) => (
              <a
                key={i}
                href={cat.href}
                className="group flex items-start gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <ChevronRight className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-h4 text-heading mb-1 group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{cat.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

import React from 'react'
