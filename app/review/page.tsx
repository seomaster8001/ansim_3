'use client'

import { ChevronRight, AlertTriangle, Shield, CheckCircle, Clock, FileText, TrendingUp, HelpCircle } from 'lucide-react'

export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      {/* ── HERO SECTION ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-accent">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <div>
              <p className="text-label text-primary mb-4">Verification Report</p>
              <h1 className="text-h1 text-heading leading-tight mb-6">
                먹튀검증 — 신고·조회 절차와 제보 시스템
              </h1>
            </div>
            <p className="text-body-lg text-body max-w-2xl" style={{ wordBreak: 'keep-all' }}>
              사이트 조회 / 사용자 제보 / 위험 신호 패턴 / 신고 절차
            </p>
          </div>
        </div>
      </section>

      {/* ── DEFINITION SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-10">
            <div>
              <h2 className="text-h2 text-heading mb-6">먹튀 사이트는 어떤 사이트인가요</h2>
              <p className="text-body text-body mb-5 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                먹튀 사이트는 입금 후 환전을 거부하거나 계정을 차단해 이용자 자금을 회수하지 못하게 하는 사이트로, 안심고고는 사용자 제보 누적 건수, 환전 지연 비율, 주소 변경 빈도, 운영 정보 변동 시점을 기준으로 사이트 상태를 분류해 먹튀검증 시스템 페이지에 결과를 공개합니다.
              </p>
              <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                먹튀 단정 라벨은 사용하지 않으며 "확인 필요 / 데이터 부족" 같은 중립 라벨로만 표기합니다. 단정 표현을 피하는 이유는 명예훼손 위험과 오인 위험을 동시에 낮추기 위해서입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <h2 className="text-h2 text-heading mb-6">사용자 신고·조회 절차</h2>
            <p className="text-body text-body max-w-3xl" style={{ wordBreak: 'keep-all' }}>
              먹튀 의심 사이트는 안심고고 제보 폼으로 직접 알려주거나 사이트 조회 검색창에 도메인을 입력해 마지막 확인일·변경 이력·누적 제보 건수를 직접 비교 확인할 수 있습니다.
            </p>
          </div>

          {/* 4 Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: '1', title: '조회', desc: '사이트명·도메인 검색 → 마지막 확인일과 변경 이력 확인', icon: FileText },
              { n: '2', title: '제보', desc: '제보 폼에 사이트명·환전 지연·금액·일자·증빙 입력', icon: AlertTriangle },
              { n: '3', title: '검토', desc: '편집부 5명이 동일 패턴 누적 여부와 사실 일치성 점검', icon: Shield },
              { n: '4', title: '분류', desc: '중립 라벨 부여 (확인 필요 / 데이터 부족 / 검증 통과)', icon: CheckCircle },
            ].map((step) => (
              <div key={step.n} className="text-center p-5 rounded-xl bg-background border border-border">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3 text-body-sm font-bold">
                  {step.n}
                </div>
                <h3 className="text-h4 text-heading mb-2">{step.title}</h3>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-body-sm text-subtle mt-10" style={{ wordBreak: 'keep-all' }}>
            처리 시간은 평균 분기 단위이며 즉시 공개 정책은 사용하지 않습니다.
          </p>
        </div>
      </section>

      {/* ── REPORTING SYSTEM ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">사용자 제보 시스템</h2>
          <p className="text-body text-body mb-10 max-w-3xl leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            안심고고 제보 시스템은 사이트별 누적 제보가 5건 이상일 때만 외부에 공개되며, 5건 미만 시점에는 비공개 상태로 유지되어 분기 점검 시 다른 운영 시그널과 함께 종합 판단됩니다. 허위 제보 방지를 위해 입금·환전 증빙 자료 첨부가 권장됩니다.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: Shield, title: '익명 제보 가능', desc: '개인정보 마스킹 처리' },
              { icon: TrendingUp, title: '5건 이상 누적', desc: '분기 리포트에 사례 분류' },
              { icon: Clock, title: '변경 이력 자동 기록', desc: '주소 변경, 운영 정보 변동' },
              { icon: AlertTriangle, title: '반복 제보 우선 점검', desc: '동일 사이트 3건 이상 시' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-secondary border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-body font-medium text-heading mb-1">{item.title}</h3>
                  <p className="text-body-sm text-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl bg-accent border border-border">
            <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
              안심고고 검증 커뮤니티에서 사례 공유도 가능합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── SIGNAL PATTERNS ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">위험 신호 패턴 (자체 데이터)</h2>
          <p className="text-body text-body mb-10 max-w-3xl leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            안심고고가 누적한 사용자 제보 데이터에서 가장 많이 반복되는 패턴은 환전 지연·추가 입금 요구·주소 변경·운영 정보 불일치이며, 먹튀 검증 사례 페이지에 패턴별 분류 결과와 분기별 빈도 변화가 표·차트 형태로 함께 정리되어 있습니다.
          </p>

          <div className="space-y-3 mb-10">
            {[
              { icon: Clock, label: '환전 지연', desc: '신청 후 24시간 초과, 7일 이상 지속' },
              { icon: AlertTriangle, label: '추가 입금 요구', desc: '"수수료·인증비" 명목 추가 송금 요구' },
              { icon: TrendingUp, label: '주소 변경 빈도', desc: '월 단위 잦은 도메인 변경' },
              { icon: FileText, label: '운영 정보 불일치', desc: '사업자명·연락처·상호 변동' },
            ].map((signal, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                <signal.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-body font-medium text-heading">{signal.label}</p>
                  <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                    {signal.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-body-sm text-subtle" style={{ wordBreak: 'keep-all' }}>
            분기 리포트에 빈도 통계가 공개됩니다.
          </p>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left: Heading */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <p className="text-label text-primary mb-4">FAQ</p>
                <h2 className="text-h2 text-heading leading-tight mb-6">
                  자주 묻는 질문
                </h2>
                <p className="text-body-sm text-body mb-8" style={{ wordBreak: 'keep-all' }}>
                  제보 및 검증 절차에 대한 궁금증을 정리했습니다.
                </p>
                <a
                  href="/support/contact/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-body-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <AlertTriangle className="w-4 h-4" />
                  문의하기
                </a>
              </div>
            </div>

            {/* Right: FAQ List */}
            <div className="lg:col-span-8">
              <div className="space-y-3">
                {[
                  {
                    q: '익명으로 제보해도 처리되나요?',
                    a: '익명 제보도 정상 접수되며 사이트명, 환전 지연 일자, 금액, 가능한 경우 증빙 자료만 있으면 검토에 포함됩니다. 신원 정보는 안심고고 내부에서 마스킹 처리되어 외부에 노출되지 않으며, 제보자 보호가 우선이므로 익명·실명 여부는 검토 결과나 처리 우선순위에 영향을 일절 주지 않습니다.',
                  },
                  {
                    q: '제보 후 얼마나 걸려서 분류 결과가 나오나요?',
                    a: '제보는 분기 단위 점검 주기에 맞춰 검토되며, 동일 사이트에 누적 제보가 5건 이상 모이면 분기 리포트에 사례별로 분류 결과가 공개됩니다. 즉시 공개 정책은 사용하지 않으며 사실 일치성 점검과 동일 패턴 누적 확인을 거친 후에 분류해야 명예훼손 위험과 사용자 오인 위험을 모두 함께 낮출 수 있습니다.',
                  },
                  {
                    q: '외부 신고 경로는 어디서 안내받을 수 있나요?',
                    a: '안심고고는 신고 플랫폼이 아니므로 본문 페이지에 외부 신고 경로를 박지 않으며, 공공기관과 민간 피해조회처의 공개된 신고 경로 안내는 이용약관 페이지의 "관련 신고 경로 안내" 섹션 한 곳에서만 다룹니다. 안심고고는 해당 기관·조회처와 어떠한 협력·소속·제휴 관계도 일절 없습니다.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-background border border-border hover:border-primary/50 transition-all"
                  >
                    <button className="w-full flex items-start gap-4 p-5 text-left">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="flex-1 text-body font-medium text-heading" style={{ wordBreak: 'keep-all' }}>
                        {item.q}
                      </span>
                    </button>
                    <div className="px-5 pb-5 pl-14">
                      <p className="text-body-sm text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                        {item.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED CATEGORIES ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">관련 카테고리</h2>
            <p className="text-body text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              먹튀 신고·조회 외에 다양한 정보를 카테고리별로 확인할 수 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Shield, title: '보증업체', desc: '검증 기준을 통과한 사이트 정보', href: '/safety/' },
              { icon: FileText, title: '먹튀검증 리포트', desc: '제보 이력과 주소 변경 사건별 기록', href: '/review/' },
              { icon: TrendingUp, title: '스포츠 분석', desc: 'KBO·MLB·EPL 경기 데이터와 라이브스코어', href: '/picks/' },
              { icon: BookOpen, title: '피해예방 가이드', desc: '환전 지연, 피싱 주소, 주소 변경 리스크 체크', href: '/guide/' },
            ].map((cat, i) => (
              <a
                key={i}
                href={cat.href}
                className="group flex items-start gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-body font-medium text-heading mb-1 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                    {cat.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
