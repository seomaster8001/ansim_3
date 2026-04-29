'use client'

import { AlertTriangle, Shield, Clock, FileText, AlertCircle, CheckCircle, ChevronRight, Users, TrendingDown, Image as ImageIcon, ExternalLink, Zap, Globe, Inbox, AlertOctagon, BarChart3 } from 'lucide-react'
import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

// ============================================================
// 템플릿 데이터 (이 부분만 수정하여 다른 사이트에 적용)
// ============================================================
const SITE_DATA = {
  name: '먹튀폴리스',
  slug: 'meoktu-police',
  status: 'warning', // 'danger' | 'warning' | 'monitoring'
  statusLabel: '주의 필요',
  h1: '먹튀폴리스 — 먹튀 이력 + 보증 분석 + 사용자 후기',
  subtitle: '먹튀폴리스 먹튀 검증 — 운영 이력 + 보증 분석 + 사용자 후기',
  openingAnswer: '먹튀폴리스 먹튀는 운영 이력과 사용자 후기를 기반으로 검증한 결과입니다. 먹튀 의심 사례와 위험 신호를 명시합니다. 본 페이지의 모든 정보는 안심고고 자체 데이터와 사용자 제보에 기반하며, 외부 출처 인용은 하지 않습니다.',
  lastChecked: '2025.04.15',
  operationStart: '2021년 3월',
  operationYears: '약 4년',
  domainChanges: 2,
  lastDomainChange: '2024.08',
  totalReports: 7,
  dangerSignalsDetected: 3, // 위험 신호 감지 개수
  dangerSignalsTotal: 5, // 총 위험 신호 항목
  screenshot: '/placeholder.svg?height=400&width=700',
}

// 운영 정보 상세 (검증 시점 기준)
const OPERATION_INFO = {
  currentDomain: 'meoktu-police.com',
  previousDomains: ['mp-bet.com', 'meoktu-pol.kr'],
  serverLocation: '해외 (소재지 불명)',
  customerService: '텔레그램 @meoktu_cs (응답률 불명)',
  operationHours: '24시간 (응답 지연 이력 있음)',
  verifiedAt: '2025.04.15',
  registrar: 'Namecheap (해외)',
  sslStatus: 'valid',
  ipHistory: 3,
}

// 제보 추이 (최근 6개월)
const REPORT_TREND = [
  { month: '2024.11', count: 0 },
  { month: '2024.12', count: 1 },
  { month: '2025.01', count: 2 },
  { month: '2025.02', count: 1 },
  { month: '2025.03', count: 2 },
  { month: '2025.04', count: 1 },
]

const TIMELINE_DATA = [
  { date: '2025.04', event: '분기 재점검 완료', status: 'warn', detail: '누적 제보 증가로 [주의 필요] 분류 유지' },
  { date: '2024.08', event: '도메인 변경', status: 'alert', detail: '기존 도메인에서 신규 도메인으로 이전' },
  { date: '2024.01', event: '분류 변동', status: 'warn', detail: '[확인 필요] → [주의 필요] 강등' },
  { date: '2023.06', event: '첫 제보 접수', status: 'info', detail: '환전 지연 관련 제보 1건 접수' },
  { date: '2021.03', event: '운영 시작', status: 'info', detail: '먹튀폴리스 최초 운영 확인' },
]

const GUARANTEE_STATUS = [
  { label: '보증금 예치', status: 'danger', statusLabel: '미확인', desc: '보증금 예치 여부를 확인할 수 없습니다.' },
  { label: '운영 안정성', status: 'warning', statusLabel: '불안정', desc: '도메인 변경 2회, 운영 정보 불일치 이력' },
  { label: '환전 처리', status: 'warning', statusLabel: '지연 이력', desc: '평균 처리 시간 불명, 지연 제보 3건' },
]

const REPORT_STATS = [
  { count: 3, label: '환전 지연' },
  { count: 2, label: '추가 입금 요구' },
  { count: 2, label: '고객센터 불통' },
]

const REPORT_HISTORY = [
  { date: '2025.03', type: '환전 지연', summary: '48시간 이상 환전 미처리 후 연락 두절', hasEvidence: true },
  { date: '2025.01', type: '추가 입금', summary: '출금 시 추가 보증금 요구', hasEvidence: true },
  { date: '2024.11', type: '환전 지연', summary: '환전 신청 후 72시간 지연, 이후 처리', hasEvidence: false },
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
    a: '먹튀폴리스 먹튀는 해당 사이트에서 환전 지연, 추가 입금 요구, 계정 차단 등 사용자 피해 사례가 제보된 상태를 의미합니다. 안심고고는 누적 제보와 자체 점검 데이터를 기반으로 위험 신호를 분류하며, 단정적 판단이 아닌 사실 기반 정보만 제공합니다.',
  },
  {
    q: '어떻게 검증하나요?',
    a: '안심고고는 5단계 자체 검증 프로세스를 통해 운영 이력, 보증 상태, 사용자 제보 누적, 환전 처리 패턴, 고객 응대 이력을 종합 분석합니다. 분기 단위로 재점검하며, 누적 제보가 임계치를 초과하면 분류 등급이 변동됩니다.',
  },
  {
    q: '위험 신호는?',
    a: '주요 위험 신호로는 환전 지연(48시간 초과), 추가 입금 요구, 갑작스러운 도메인 변경, 고객센터 불통, 약관 미비 등이 있습니다. 이 중 2개 이상 해당 시 [주의 필요] 분류, 4개 이상 해당 시 [확인 불가] 분류로 강등됩니다.',
  },
]

// ============================================================
// 컴포넌트
// ============================================================

export default function MeoktuPoliceReviewPage() {
  const riskScore = Math.round((SITE_DATA.dangerSignalsDetected / SITE_DATA.dangerSignalsTotal) * 100)
  const statusColors = {
    danger: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', badge: 'bg-red-100' },
    warning: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', badge: 'bg-amber-100' },
    monitoring: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100' },
  }
  const colors = statusColors[SITE_DATA.status as keyof typeof statusColors]

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
      <section className={`py-6 px-6 md:px-20 ${colors.bg} border-b-2 ${colors.border}`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertCircle className={`w-6 h-6 ${colors.text}`} />
              <div>
                <h3 className={`text-h4 ${colors.text} font-bold`}>{SITE_DATA.statusLabel}</h3>
                <p className="text-body-sm text-muted">{SITE_DATA.openingAnswer}</p>
              </div>
            </div>
            <span className={`px-4 py-2 rounded-lg ${colors.badge} ${colors.text} text-label font-bold whitespace-nowrap`}>
              위험도 {riskScore}%
            </span>
          </div>
        </div>
      </section>

      {/* ── SITE SCREENSHOT ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-80 rounded-xl bg-secondary border-2 border-border flex items-center justify-center overflow-hidden">
            <img 
              src={SITE_DATA.screenshot} 
              alt={`${SITE_DATA.name} 사이트 스크린샷`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
              <ImageIcon className="w-12 h-12 text-muted" />
            </div>
          </div>
          <p className="text-xs text-muted mt-3">
            * 스크린샷은 검증 시점({SITE_DATA.lastChecked}) 기준입니다.
          </p>
        </div>
      </section>

      {/* ── QUICK STATS ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-12">주요 지표</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { 
                label: '운영 기간', 
                value: SITE_DATA.operationYears, 
                icon: Clock, 
                status: 'warning',
                subtext: `${SITE_DATA.operationStart}부터`
              },
              { 
                label: '도메인 변경', 
                value: `${SITE_DATA.domainChanges}회`, 
                icon: Globe, 
                status: 'danger',
                subtext: `최근 ${SITE_DATA.lastDomainChange}`
              },
              { 
                label: '누적 제보', 
                value: `${SITE_DATA.totalReports}건`, 
                icon: AlertOctagon, 
                status: 'warning',
                subtext: '6개월 기준'
              },
              { 
                label: '위험 신호', 
                value: `${SITE_DATA.dangerSignalsDetected}/${SITE_DATA.dangerSignalsTotal}`, 
                icon: Zap, 
                status: 'danger',
                subtext: '감지됨'
              },
            ].map((stat, i) => {
              const Icon = stat.icon
              const statusMap = {
                danger: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200' },
                warning: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200' },
                safe: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' },
              }
              const s = statusMap[stat.status as keyof typeof statusMap]
              return (
                <div key={i} className={`p-6 rounded-xl ${s.bg} border-2 ${s.border}`}>
                  <div className="flex items-start justify-between mb-4">
                    <Icon className={`w-6 h-6 ${s.text}`} />
                  </div>
                  <p className="text-body-sm text-muted mb-2">{stat.label}</p>
                  <p className={`text-h3 ${s.text} font-bold mb-1`}>{stat.value}</p>
                  <p className="text-xs text-muted">{stat.subtext}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── OPENING ANSWER + RISK SCORE ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* 좌측: 텍스트 */}
          <div className="md:col-span-2">
            <h2 className="text-h2 text-heading mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              이 사이트에 대해
            </h2>
            <p className="text-body-lg text-body leading-relaxed mb-6" style={{ wordBreak: 'keep-all' }}>
              {SITE_DATA.openingAnswer}
            </p>
            <ul className="space-y-3">
              {[
                '운영 이력 및 도메인 변경 추적',
                '사용자 제보 누적 분석',
                '위험 신호 패턴 매칭',
                '환전 처리 이력 검증',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 우측: 위험도 점수 */}
          <div className={`p-8 rounded-xl ${colors.bg} border-2 ${colors.border} text-center`}>
            <p className="text-body-sm text-muted mb-4 uppercase tracking-wide">종합 위험도</p>
            <div className="mb-6">
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                  <circle 
                    cx="60" cy="60" r="54" 
                    fill="none" 
                    stroke={riskScore >= 60 ? '#dc2626' : '#f59e0b'} 
                    strokeWidth="8"
                    strokeDasharray={`${(riskScore / 100) * 339.29} 339.29`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className={`text-h2 font-bold ${colors.text}`}>{riskScore}%</p>
                  <p className="text-label text-muted">위험</p>
                </div>
              </div>
            </div>
            <div className="text-sm text-muted space-y-2 text-left">
              <p className="font-semibold">{SITE_DATA.dangerSignalsDetected}개 위험 신호 감지</p>
              <p>5개 항목 중</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: 운영 이력 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-4 flex items-center gap-3">
            <Clock className="w-8 h-8 text-primary" />
            운영 이력
          </h2>
          <p className="text-body-lg text-body mb-12" style={{ wordBreak: 'keep-all' }}>
            {SITE_DATA.name}의 운영 기간, 도메인 변경, 분류 변동 이력을 추적합니다.
          </p>

          <div className="space-y-8">
            {/* 타임라인 */}
            <div className="p-6 rounded-xl bg-secondary border-2 border-border">
              <h3 className="text-h4 text-heading mb-6">변경 이력 타임라인</h3>
              <div className="space-y-4">
                {TIMELINE_DATA.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === 'alert' ? 'bg-red-500' :
                        item.status === 'warn' ? 'bg-amber-500' : 'bg-slate-400'
                      }`} />
                      {i < TIMELINE_DATA.length - 1 && <div className="w-0.5 h-full bg-border mt-1" />}
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-label text-muted">{item.date}</span>
                        <span className="text-body font-medium text-heading">{item.event}</span>
                      </div>
                      <p className="text-body-sm text-body">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 운영 정보 상세 테이블 */}
            <div className="p-6 rounded-xl bg-secondary border-2 border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-h4 text-heading flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  운영 정보 상세
                </h3>
                <span className="text-label text-muted">검증: {OPERATION_INFO.verifiedAt}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-1">
                {[
                  { label: '현재 도메인', value: OPERATION_INFO.currentDomain, icon: Globe, warn: false },
                  { label: '이전 도메인', value: OPERATION_INFO.previousDomains.join(', '), icon: AlertTriangle, warn: true },
                  { label: '서버 위치', value: OPERATION_INFO.serverLocation, icon: Globe, warn: true },
                  { label: 'IP 변경 횟수', value: `${OPERATION_INFO.ipHistory}회`, icon: Zap, warn: OPERATION_INFO.ipHistory >= 3 },
                  { label: '고객센터', value: OPERATION_INFO.customerService, icon: Inbox, warn: true },
                  { label: '운영 시간', value: OPERATION_INFO.operationHours, icon: Clock, warn: true },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start justify-between py-4 border-b border-border/50 group hover:bg-background/50 px-2 -mx-2 rounded transition-colors">
                      <div className="flex items-start gap-3">
                        <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.warn ? 'text-amber-600' : 'text-muted'}`} />
                        <span className="text-body-sm text-muted">{item.label}</span>
                      </div>
                      <span className={`text-body-sm font-medium text-right max-w-[50%] ${item.warn ? 'text-amber-700' : 'text-heading'}`}>
                        {item.value}
                      </span>
                    </div>
                  )
                })}
              </div>
              <p className="text-xs text-muted mt-4">* 위 정보는 검증 시점 기준이며, 실제 현황과 다를 수 있습니다.</p>
            </div>

            {/* 제보 추이 */}
            <div className="p-6 rounded-xl bg-secondary border-2 border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-h4 text-heading flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  제보 추이 (최근 6개월)
                </h3>
                <span className={`px-3 py-1 rounded-full text-label font-semibold ${
                  REPORT_TREND.reduce((sum, m) => sum + m.count, 0) === 0
                    ? 'bg-green-100 text-green-700'
                    : REPORT_TREND.reduce((sum, m) => sum + m.count, 0) >= 5
                    ? 'bg-red-100 text-red-700'
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {REPORT_TREND.reduce((sum, m) => sum + m.count, 0) === 0 
                    ? '제보 없음' 
                    : `총 ${REPORT_TREND.reduce((sum, m) => sum + m.count, 0)}건`}
                </span>
              </div>
              
              <div className="flex items-end gap-2 h-40 mb-4">
                {REPORT_TREND.map((m, i) => {
                  const maxCount = Math.max(...REPORT_TREND.map(r => r.count), 1)
                  const height = m.count === 0 ? 4 : (m.count / maxCount) * 100
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-label text-muted text-xs">{m.count}건</span>
                      <div 
                        className={`w-full rounded-t transition-all ${
                          m.count === 0 ? 'bg-slate-200' :
                          m.count >= 2 ? 'bg-red-400' : 'bg-amber-400'
                        }`}
                        style={{ height: `${height}%`, minHeight: '4px' }}
                      />
                      <span className="text-xs text-muted">{m.month.split('.')[1]}월</span>
                    </div>
                  )
                })}
              </div>
              
              <p className="text-xs text-muted">
                {REPORT_TREND.reduce((sum, m) => sum + m.count, 0) === 0 
                  ? '최근 6개월간 제보가 없습니다.'
                  : REPORT_TREND.reduce((sum, m) => sum + m.count, 0) >= 5
                  ? '반복 제보가 확인되었습니다. 각별한 주의가 필요합니다.'
                  : '일부 제보가 확인되었습니다.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: 보증 상태 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-4 flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            보증 상태
          </h2>
          <p className="text-body-lg text-body mb-12" style={{ wordBreak: 'keep-all' }}>
            보증금 예치, 운영 안정성, 환전 처리 상태를 종합적으로 평가합니다.
          </p>

          <div className="space-y-4">
            {GUARANTEE_STATUS.map((item, i) => {
              const statusMap = {
                danger: { icon: AlertCircle, bg: 'bg-red-50', border: 'border-red-200', textColor: 'text-red-700' },
                warning: { icon: AlertTriangle, bg: 'bg-amber-50', border: 'border-amber-200', textColor: 'text-amber-700' },
                safe: { icon: CheckCircle, bg: 'bg-green-50', border: 'border-green-200', textColor: 'text-green-700' },
              }
              const s = statusMap[item.status as keyof typeof statusMap]
              const Icon = s.icon
              return (
                <div key={i} className={`p-6 rounded-xl ${s.bg} border-2 ${s.border}`}>
                  <div className="flex items-start gap-4">
                    <Icon className={`w-6 h-6 mt-1 flex-shrink-0 ${s.textColor}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-body font-semibold text-heading">{item.label}</h3>
                        <span className={`px-3 py-1 rounded text-label font-semibold ${s.bg} ${s.textColor}`}>
                          {item.statusLabel}
                        </span>
                      </div>
                      <p className="text-body-sm text-body">{item.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: 사용자 후기 + 제보 통계 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-4 flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            사용자 후기
          </h2>
          <p className="text-body-lg text-body mb-12" style={{ wordBreak: 'keep-all' }}>
            접수된 제보와 사용자 후기를 분석하여 주요 이슈를 파악합니다.
          </p>

          {/* 제보 유형 분포 */}
          <div className="p-6 rounded-xl bg-secondary border-2 border-border mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-h4 text-heading">제보 유형 분포</h3>
              <span className={`px-3 py-1 rounded-full text-label font-semibold ${
                SITE_DATA.totalReports === 0 
                  ? 'bg-green-100 text-green-700' 
                  : SITE_DATA.totalReports >= 5 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-amber-100 text-amber-700'
              }`}>
                총 {SITE_DATA.totalReports}건
              </span>
            </div>
            
            <div className="space-y-4 mb-6">
              {REPORT_STATS.map((stat, i) => {
                const percentage = SITE_DATA.totalReports > 0 
                  ? Math.round((stat.count / SITE_DATA.totalReports) * 100) 
                  : 0
                const colors = ['bg-red-500', 'bg-amber-500', 'bg-slate-400']
                return (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-body-sm text-heading font-medium">{stat.label}</span>
                      <span className="text-body-sm text-muted">{stat.count}건 ({percentage}%)</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${colors[i]} rounded-full transition-all`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {REPORT_STATS.map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-lg bg-background border border-border">
                  <p className="text-h3 text-heading font-bold">{stat.count}건</p>
                  <p className="text-body-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 제보 이력 갤러리 */}
          <div className="p-6 rounded-xl bg-secondary border-2 border-border">
            <h3 className="text-h4 text-heading mb-6">최근 제보 이력</h3>
            <div className="space-y-4">
              {REPORT_HISTORY.map((report, i) => (
                <div key={i} className="p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-label text-muted">{report.date}</span>
                      <span className="px-3 py-1 rounded text-label font-semibold bg-amber-100 text-amber-700 ml-3">
                        {report.type}
                      </span>
                    </div>
                    {report.hasEvidence && (
                      <ImageIcon className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <p className="text-body-sm text-body">{report.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 증빙 자료 갤러리 */}
          <div className="mt-8 p-6 rounded-xl bg-secondary border-2 border-border">
            <h3 className="text-h4 text-heading mb-6 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-primary" />
              증빙 자료 갤러리
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="h-40 rounded-lg bg-background border-2 border-border flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer group"
                >
                  <div className="text-center">
                    <img 
                      src={`/placeholder.svg?height=160&width=200`}
                      alt={`증빙 자료 ${i}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: 먹튀 의심 신호 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-4 flex items-center gap-3">
            <Zap className="w-8 h-8 text-primary" />
            먹튀 의심 신호
          </h2>
          <p className="text-body-lg text-body mb-12" style={{ wordBreak: 'keep-all' }}>
            이 사이트에서 감지된 위험 신호를 정리합니다. 2개 이상 해당 시 주의 필요, 4개 이상 해당 시 이용 자제를 권고합니다.
          </p>

          <div className="space-y-3">
            {DANGER_SIGNALS.map((item, i) => (
              <div 
                key={i}
                className={`p-4 rounded-lg border-2 flex items-center gap-4 transition-colors ${
                  item.detected 
                    ? 'bg-red-50 border-red-200' 
                    : 'bg-green-50 border-green-200'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.detected 
                    ? 'bg-red-200' 
                    : 'bg-green-200'
                }`}>
                  {item.detected ? (
                    <AlertTriangle className="w-4 h-4 text-red-700" />
                  ) : (
                    <CheckCircle className="w-4 h-4 text-green-700" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`text-body-sm font-medium ${
                    item.detected ? 'text-red-700' : 'text-green-700'
                  }`}>
                    {item.signal}
                  </p>
                  <p className="text-xs text-muted">
                    {item.detected ? '이 신호가 감지되었습니다' : '이 신호는 감지되지 않았습니다'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl bg-background border-2 border-border">
            <p className="text-body-sm text-muted">
              <span className="font-semibold text-heading">위험도 평가:</span> {SITE_DATA.dangerSignalsDetected}개 신호 감지됨. 
              {SITE_DATA.dangerSignalsDetected >= 4 
                ? ' 이 사이트의 이용을 자제하시기 바랍니다.'
                : SITE_DATA.dangerSignalsDetected >= 2
                ? ' 이용 전 충분한 검토를 권고합니다.'
                : ' 상대적으로 안정적입니다.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: 신고 방법 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-4 flex items-center gap-3">
            <FileText className="w-8 h-8 text-primary" />
            신고 방법
          </h2>
          <p className="text-body-lg text-body mb-12" style={{ wordBreak: 'keep-all' }}>
            이 사이트에서 피해를 입으셨거나 의심 사항이 있으시면 안심고고에 제보해주세요. 모든 정보는 익명으로 처리되며 검증에 활용됩니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: '피해 정보 작성', desc: '언제, 어떤 피해를 입으셨는지 작성해주세요' },
              { step: '2', title: '증빙 자료 첨부', desc: '거래 내역, 채팅 기록 등 증빙자료를 첨부해주세요' },
              { step: '3', title: '제보 완료', desc: '검증팀에서 신속히 검토 후 반영합니다' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-secondary border-2 border-border text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-h4 font-bold">
                  {item.step}
                </div>
                <h3 className="text-h4 text-heading mb-2">{item.title}</h3>
                <p className="text-body-sm text-body">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl bg-background border-2 border-border">
            <div className="flex items-start gap-4">
              <ExternalLink className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-h4 text-heading mb-2">안심고고 제보 센터</h3>
                <p className="text-body-sm text-body mb-4">아래 링크를 통해 피해 정보를 제보하실 수 있습니다.</p>
                <a 
                  href="/review/report"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-body-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  제보 센터 방문
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <SectionFAQ 
        items={FAQ_ITEMS}
        description="먹튀폴리스 검증과 피해 예방에 관한 자주 묻는 질문입니다."
      />

      {/* ── CTA SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-accent border-b border-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-h2 text-heading mb-6">더 알아보기</h2>
          <p className="text-body-lg text-body max-w-2xl mx-auto mb-10" style={{ wordBreak: 'keep-all' }}>
            피해 예방 방법과 안심고고의 검증 방식을 더 자세히 확인하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/guide/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-body-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <Shield className="w-4 h-4" />
              사용자 보호 가이드
            </a>
            <a
              href="/support/faq/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-background border-2 border-border text-heading text-body-sm font-semibold hover:border-primary/50 transition-colors"
            >
              <AlertCircle className="w-4 h-4" />
              자주 묻는 질문
            </a>
          </div>
        </div>
      </section>

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="scam-review" />
    </main>
  )
}
