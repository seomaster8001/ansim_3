'use client'

import { AlertTriangle, Shield, Clock, AlertCircle, CheckCircle, TrendingDown, BarChart3, Globe, Inbox } from 'lucide-react'
import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

// 템플릿 데이터
const SITE_DATA = {
  name: '먹튀폴리스',
  status: 'warning',
  statusLabel: '주의 필요',
  h1: '먹튀폴리스 — 먹튀 이력 + 보증 분석 + 사용자 후기',
  subtitle: '먹튀폴리스 먹튀 검증 — 운영 이력 + 보증 분석 + 사용자 후기',
  openingAnswer: '먹튀폴리스 먹튀는 운영 이력과 사용자 후기를 기반으로 검증한 결과입니다. 본 정보는 안심고고 자체 데이터에 기반합니다.',
  lastChecked: '2025.04.15',
  operationYears: '약 4년',
  totalReports: 7,
  dangerSignalsDetected: 3,
  dangerSignalsTotal: 5,
  screenshot: '/placeholder.svg?height=400&width=700',
}

const OPERATION_INFO = {
  currentDomain: 'meoktu-police.com',
  previousDomains: ['mp-bet.com', 'meoktu-pol.kr'],
  serverLocation: '해외 (소재지 불명)',
  customerService: '텔레그램 @meoktu_cs',
  operationHours: '24시간',
  registrar: 'Namecheap (해외)',
  verifiedAt: '2025.04.15',
}

const REPORT_TREND = [
  { month: '11월', count: 0 },
  { month: '12월', count: 1 },
  { month: '1월', count: 2 },
  { month: '2월', count: 1 },
  { month: '3월', count: 2 },
  { month: '4월', count: 1 },
]

const TIMELINE_DATA = [
  { date: '2025.04', event: '분기 재점검 완료', status: 'warn', detail: '누적 제보 증가로 [주의 필요] 유지' },
  { date: '2024.08', event: '도메인 변경', status: 'alert', detail: '신규 도메인으로 이전' },
  { date: '2024.01', event: '분류 변동', status: 'warn', detail: '[확인 필요] → [주의 필요]' },
  { date: '2021.03', event: '운영 시작', status: 'info', detail: '최초 운영 확인' },
]

const REPORT_STATS = [
  { count: 3, label: '환전 지연' },
  { count: 2, label: '추가 입금 요구' },
  { count: 2, label: '고객센터 불통' },
]

const DANGER_SIGNALS = [
  { signal: '환전 지연 (48시간 초과)', detected: true },
  { signal: '추가 입금 요구', detected: true },
  { signal: '도메인 변경 (2회 이상)', detected: true },
  { signal: '고객센터 불통', detected: false },
  { signal: '약관 미비 또는 변경', detected: false },
]

const FAQ_ITEMS = [
  {
    q: '먹튀폴리스 먹튀란?',
    a: '환전 지연, 추가 입금 요구, 계정 차단 등 사용자 피해 사례가 제보된 상태입니다. 안심고고는 누적 제보와 자체 점검 데이터를 기반으로 정보를 제공합니다.',
  },
  {
    q: '어떻게 검증하나요?',
    a: '5단계 자체 검증 프로세스를 통해 운영 이력, 보증 상태, 사용자 제보 누적, 환전 처리 패턴을 종합 분석합니다. 분기 단위로 재점검합니다.',
  },
  {
    q: '위험 신호는?',
    a: '환전 지연(48시간 초과), 추가 입금 요구, 도메인 변경, 고객센터 불통, 약관 미비 등이 있습니다. 2개 이상이면 [주의 필요], 4개 이상이면 [확인 불가] 분류입니다.',
  },
]

export default function MeoktuPoliceReviewPage() {
  const riskScore = Math.round((SITE_DATA.dangerSignalsDetected / SITE_DATA.dangerSignalsTotal) * 100)
  const totalReports = REPORT_TREND.reduce((sum, m) => sum + m.count, 0)
  const maxReports = Math.max(...REPORT_TREND.map(m => m.count), 1)

  return (
    <main 
      data-category="review" 
      style={{
        '--primary': '#f59e0b',
        '--primary-foreground': '#ffffff',
        '--accent': '#fffbeb',
        '--accent-foreground': '#b45309',
      } as React.CSSProperties}
      className="min-h-screen bg-background font-sans"
    >
      {/* ── HERO ── */}
      <SectionHero
        label="Scam Review"
        title={SITE_DATA.h1}
        description={SITE_DATA.subtitle}
        icon={AlertTriangle}
        variant="accent"
      />

      {/* ── STATUS BANNER ── */}
      <section className="py-6 px-6 md:px-20 bg-amber-50 border-b-2 border-amber-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-amber-700 flex-shrink-0" />
            <div>
              <h3 className="text-h4 text-amber-700 font-bold">{SITE_DATA.statusLabel}</h3>
              <p className="text-body-sm text-muted line-clamp-1">{SITE_DATA.openingAnswer}</p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-lg bg-amber-100 text-amber-700 text-label font-bold whitespace-nowrap">
            위험도 {riskScore}%
          </span>
        </div>
      </section>

      {/* ── QUICK STATS ── */}
      <section className="py-12 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-4">
          {[
            { icon: Clock, label: '운영 기간', value: SITE_DATA.operationYears },
            { icon: TrendingDown, label: '누적 제보', value: `${SITE_DATA.totalReports}건` },
            { icon: AlertCircle, label: '위험 신호', value: `${SITE_DATA.dangerSignalsDetected}/${SITE_DATA.dangerSignalsTotal}` },
            { icon: BarChart3, label: '위험도', value: `${riskScore}%` },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="p-4 rounded-lg bg-secondary border border-border">
                <Icon className="w-5 h-5 text-primary mb-2" />
                <p className="text-body-sm text-muted mb-1">{stat.label}</p>
                <p className="text-h4 text-heading font-bold">{stat.value}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="py-8 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden bg-slate-100 h-64">
            <img src={SITE_DATA.screenshot} alt="사이트 스크린샷" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-muted mt-2">검증 시점: {SITE_DATA.lastChecked}</p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* 운영 이력 */}
          <div>
            <h2 className="text-h2 text-heading mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              운영 이력
            </h2>
            <div className="space-y-2">
              {TIMELINE_DATA.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg bg-secondary">
                  <span className="text-label text-muted font-bold w-20 flex-shrink-0">{item.date}</span>
                  <div>
                    <p className="text-body font-medium text-heading">{item.event}</p>
                    <p className="text-body-sm text-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 운영 정보 상세 */}
          <div>
            <h2 className="text-h2 text-heading mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary" />
              운영 정보 상세
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: '현재 도메인', value: OPERATION_INFO.currentDomain },
                { label: '이전 도메인', value: OPERATION_INFO.previousDomains.join(', ') },
                { label: '서버 위치', value: OPERATION_INFO.serverLocation },
                { label: '도메인 등록기관', value: OPERATION_INFO.registrar },
                { label: '고객센터', value: OPERATION_INFO.customerService },
                { label: '운영 시간', value: OPERATION_INFO.operationHours },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg bg-secondary border border-border">
                  <p className="text-body-sm text-muted mb-1">{item.label}</p>
                  <p className="text-body font-medium text-heading">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-4">* 검증 시점: {OPERATION_INFO.verifiedAt}</p>
          </div>

          {/* 제보 현황 */}
          <div>
            <h2 className="text-h2 text-heading mb-6 flex items-center gap-2">
              <Inbox className="w-6 h-6 text-primary" />
              제보 현황
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* 제보 추이 */}
              <div className="p-6 rounded-xl bg-secondary border border-border">
                <h3 className="text-h4 text-heading mb-4">최근 6개월 추이</h3>
                <div className="flex items-end gap-1 h-24">
                  {REPORT_TREND.map((m, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div 
                        className={`w-full rounded-t ${m.count === 0 ? 'bg-slate-200' : 'bg-primary'}`}
                        style={{ height: `${m.count === 0 ? 4 : (m.count / maxReports) * 100}%`, minHeight: m.count > 0 ? '8px' : '4px' }}
                      />
                      <span className="text-xs text-muted">{m.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 제보 유형 분포 */}
              <div className="p-6 rounded-xl bg-secondary border border-border">
                <h3 className="text-h4 text-heading mb-4">제보 유형 분포</h3>
                <div className="space-y-3">
                  {REPORT_STATS.map((stat, i) => {
                    const pct = totalReports > 0 ? Math.round((stat.count / totalReports) * 100) : 0
                    return (
                      <div key={i}>
                        <div className="flex justify-between text-body-sm mb-1">
                          <span className="text-heading font-medium">{stat.label}</span>
                          <span className="text-muted">{stat.count}건 ({pct}%)</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 보증 상태 */}
          <div>
            <h2 className="text-h2 text-heading mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              보증 상태
            </h2>
            <div className="space-y-3">
              {[
                { label: '보증금 예치', status: 'danger', detail: '보증금 예치 여부 미확인' },
                { label: '운영 안정성', status: 'warning', detail: '도메인 변경 2회, 운영 정보 불일치' },
                { label: '환전 처리', status: 'warning', detail: '평균 처리 시간 불명, 지연 제보 3건' },
              ].map((item, i) => {
                const bgColor = item.status === 'danger' ? 'bg-red-50' : 'bg-amber-50'
                const borderColor = item.status === 'danger' ? 'border-red-200' : 'border-amber-200'
                const textColor = item.status === 'danger' ? 'text-red-700' : 'text-amber-700'
                return (
                  <div key={i} className={`p-4 rounded-lg ${bgColor} border ${borderColor}`}>
                    <div className="flex items-start gap-3">
                      <AlertCircle className={`w-5 h-5 ${textColor} mt-0.5 flex-shrink-0`} />
                      <div>
                        <p className={`text-body font-medium ${textColor}`}>{item.label}</p>
                        <p className="text-body-sm text-muted">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 먹튀 의심 신호 */}
          <div>
            <h2 className="text-h2 text-heading mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-primary" />
              먹튀 의심 신호
            </h2>
            <div className="space-y-2">
              {DANGER_SIGNALS.map((item, i) => (
                <div 
                  key={i} 
                  className={`p-4 rounded-lg border flex items-center gap-3 ${
                    item.detected 
                      ? 'bg-red-50 border-red-200' 
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  {item.detected ? (
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                  <span className={`text-body ${item.detected ? 'text-red-700 font-medium' : 'text-slate-600'}`}>
                    {item.signal}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 신고 방법 */}
          <div>
            <h2 className="text-h2 text-heading mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-primary" />
              신고 방법
            </h2>
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <p className="text-body mb-4">먹튀폴리스의 피해 사례가 있다면 아래 채널로 제보해주세요.</p>
              <ul className="space-y-2">
                <li className="text-body-sm text-body">• 안심고고 텔레그램 채널: @ansimgogo</li>
                <li className="text-body-sm text-body">• 이메일: reports@ansimgogo.com</li>
                <li className="text-body-sm text-body">• 증빙 자료(캡처, 기록)와 함께 제보 시 검증 속도가 빨라집니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <SectionFAQ 
        items={FAQ_ITEMS} 
        description="먹튀폴리스 먹튀 검증에 관한 자주 묻는 질문입니다."
      />

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="review" />
    </main>
  )
}
