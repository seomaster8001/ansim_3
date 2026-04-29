'use client'

import { AlertTriangle, Shield, Clock, FileText, AlertCircle, CheckCircle, ChevronRight, Users, TrendingDown, Image as ImageIcon, ExternalLink } from 'lucide-react'
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
  screenshot: '/placeholder.svg?height=400&width=700',
}

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
export default function MeoktuPolicePage() {
  const detectedCount = DANGER_SIGNALS.filter(s => s.detected).length

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
      <SectionHero
        label="먹튀검증"
        title={SITE_DATA.h1}
        description={SITE_DATA.subtitle}
        icon={AlertTriangle}
        variant="accent"
      />

      {/* ── STATUS BANNER ── */}
      <div className={`py-4 px-6 md:px-20 ${
        SITE_DATA.status === 'danger' ? 'bg-red-600' :
        SITE_DATA.status === 'warning' ? 'bg-amber-500' : 'bg-slate-500'
      }`}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">현재 분류: [{SITE_DATA.statusLabel}]</span>
          </div>
          <span className="text-white/80 text-sm">마지막 점검: {SITE_DATA.lastChecked}</span>
        </div>
      </div>

      {/* ── SITE PREVIEW + OPENING ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Screenshot Placeholder */}
            <div className="relative rounded-xl overflow-hidden border-2 border-border bg-secondary">
              <div className="aspect-video flex items-center justify-center bg-slate-100">
                <div className="text-center">
                  <ImageIcon className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-body-sm text-muted">사이트 스크린샷</p>
                  <p className="text-label text-muted mt-1">{SITE_DATA.lastChecked} 기준</p>
                </div>
              </div>
              {/* Status Badge Overlay */}
              <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg font-semibold text-sm ${
                SITE_DATA.status === 'danger' ? 'bg-red-600 text-white' :
                SITE_DATA.status === 'warning' ? 'bg-amber-500 text-white' : 'bg-slate-500 text-white'
              }`}>
                {SITE_DATA.statusLabel}
              </div>
            </div>

            {/* Opening Answer + Quick Stats */}
            <div>
              <p className="text-body-lg text-body leading-relaxed mb-8" style={{ wordBreak: 'keep-all' }}>
                {SITE_DATA.openingAnswer}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-label text-muted mb-1">운영 기간</p>
                  <p className="text-h4 text-heading">{SITE_DATA.operationYears}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-label text-muted mb-1">도메인 변경</p>
                  <p className="text-h4 text-heading">{SITE_DATA.domainChanges}회</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-label text-muted mb-1">누적 제보</p>
                  <p className="text-h4 text-amber-600">{SITE_DATA.totalReports}건</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-label text-muted mb-1">위험 신호</p>
                  <p className="text-h4 text-red-600">{detectedCount}/5 감지</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. 운영 이력 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-h2 text-heading">운영 이력</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {/* 기본 정보 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-4">기본 정보</h3>
              <div className="space-y-1">
                {[
                  { label: '운영 시작', value: `${SITE_DATA.operationStart} (${SITE_DATA.operationYears})` },
                  { label: '도메인 변경', value: `${SITE_DATA.domainChanges}회 (최근: ${SITE_DATA.lastDomainChange})` },
                  { label: '마지막 점검일', value: SITE_DATA.lastChecked },
                  { label: '현재 분류', value: `[${SITE_DATA.statusLabel}]`, highlight: true },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-border/50 last:border-0">
                    <span className="text-body-sm text-muted">{item.label}</span>
                    <span className={`text-body-sm font-medium ${item.highlight ? 'text-amber-600' : 'text-heading'}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 타임라인 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
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
          </div>
        </div>
      </section>

      {/* ── 2. 보증 상태 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-h2 text-heading">보증 상태</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {GUARANTEE_STATUS.map((item, i) => (
              <div key={i} className={`p-6 rounded-xl border-2 ${
                item.status === 'danger' ? 'bg-red-50 border-red-200' :
                item.status === 'warning' ? 'bg-amber-50 border-amber-200' : 'bg-green-50 border-green-200'
              }`}>
                <div className="flex items-center gap-2 mb-3">
                  {item.status === 'danger' ? (
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  ) : item.status === 'warning' ? (
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                  <span className={`text-label font-semibold ${
                    item.status === 'danger' ? 'text-red-700' :
                    item.status === 'warning' ? 'text-amber-700' : 'text-green-700'
                  }`}>{item.statusLabel}</span>
                </div>
                <h3 className="text-h4 text-heading mb-2">{item.label}</h3>
                <p className="text-body-sm text-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. 사용자 후기 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-h2 text-heading">사용자 후기</h2>
          </div>
          
          {/* 누적 제보 현황 */}
          <div className="p-6 rounded-xl bg-background border-2 border-border mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-h4 text-heading">누적 제보 현황</h3>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-label font-semibold">
                총 {SITE_DATA.totalReports}건
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {REPORT_STATS.map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-lg bg-secondary">
                  <p className="text-h3 text-heading font-bold">{stat.count}건</p>
                  <p className="text-body-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 제보 이력 + 증빙 자료 */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-h4 text-heading mb-4">최근 제보 이력</h3>
              {REPORT_HISTORY.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-background border-2 border-border">
                  <div className="flex items-start gap-4">
                    <div className="px-2 py-1 rounded bg-amber-100 text-amber-700 text-label whitespace-nowrap">
                      {item.date}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-body font-medium text-heading">{item.type}</span>
                        {item.hasEvidence && (
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs">증빙 첨부</span>
                        )}
                      </div>
                      <p className="text-body-sm text-body">{item.summary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 증빙 자료 갤러리 Placeholder */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-4">증빙 자료</h3>
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-lg bg-slate-100 flex items-center justify-center">
                    <div className="text-center">
                      <ImageIcon className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                      <p className="text-xs text-muted">증빙 {i}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted mt-4 text-center">
                * 개인정보 마스킹 처리됨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. 먹튀 의심 신호 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-h2 text-heading">먹튀 의심 신호</h2>
          </div>
          
          <p className="text-body-lg text-body max-w-2xl mb-8 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            아래 항목은 {SITE_DATA.name}에서 확인된 위험 신호입니다. 5개 중 {detectedCount}개 이상 해당 시 이용에 각별한 주의가 필요합니다.
          </p>

          <div className="space-y-4">
            {DANGER_SIGNALS.map((item, i) => (
              <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border-2 ${
                item.detected 
                  ? 'bg-red-50 border-red-200' 
                  : 'bg-background border-border'
              }`}>
                {item.detected ? (
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                ) : (
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                )}
                <span className={`text-body font-medium flex-1 ${item.detected ? 'text-red-700' : 'text-heading'}`}>
                  {item.signal}
                </span>
                <span className={`text-label font-semibold ${item.detected ? 'text-red-600' : 'text-green-600'}`}>
                  {item.detected ? '감지됨' : '미감지'}
                </span>
              </div>
            ))}
          </div>

          {/* 경고 배너 */}
          <div className={`mt-8 p-4 rounded-xl ${
            detectedCount >= 4 ? 'bg-red-100 border-2 border-red-300' :
            detectedCount >= 2 ? 'bg-amber-50 border-2 border-amber-200' : 'bg-green-50 border-2 border-green-200'
          }`}>
            <div className="flex items-start gap-3">
              <AlertTriangle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                detectedCount >= 4 ? 'text-red-600' :
                detectedCount >= 2 ? 'text-amber-600' : 'text-green-600'
              }`} />
              <p className={`text-body-sm ${
                detectedCount >= 4 ? 'text-red-800' :
                detectedCount >= 2 ? 'text-amber-800' : 'text-green-800'
              }`} style={{ wordBreak: 'keep-all' }}>
                <strong>
                  {detectedCount >= 4 ? '경고:' : detectedCount >= 2 ? '주의:' : '참고:'}
                </strong>{' '}
                5개 신호 중 {detectedCount}개가 감지되었습니다.{' '}
                {detectedCount >= 4 
                  ? '이용을 권장하지 않으며, 피해 발생 시 즉시 제보해 주시기 바랍니다.'
                  : detectedCount >= 2 
                  ? '이용 전 충분한 확인이 필요하며, 피해 발생 시 즉시 제보해 주시기 바랍니다.'
                  : '현재까지 심각한 위험 신호는 감지되지 않았습니다.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. 신고 방법 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <FileText className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-h2 text-heading">신고 방법</h2>
          </div>
          
          <p className="text-body-lg text-body max-w-2xl mb-8 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            {SITE_DATA.name} 이용 중 피해를 경험하셨다면 아래 경로로 제보해 주시기 바랍니다. 누적 제보는 분기별 재검증에 반영됩니다.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-4">안심고고 제보</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-body-sm text-body">제보 폼: /support/contact/</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-body-sm text-body">필요 정보: 사이트명, 피해 일자, 금액, 증빙 자료</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-body-sm text-body">익명 제보 가능, 신원 정보 마스킹 처리</span>
                </li>
              </ul>
              <a 
                href="/support/contact/"
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-body-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                제보하기
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-4">제보 후 처리 과정</h3>
              <ul className="space-y-4">
                {[
                  { step: 1, text: '제보 접수 및 사실 확인 (1~3일)' },
                  { step: 2, text: '동일 패턴 누적 여부 확인' },
                  { step: 3, text: '증빙 자료 검토 및 분류' },
                  { step: 4, text: '분기 점검 시 분류 반영' },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-label font-semibold flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </span>
                    <span className="text-body-sm text-body">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <SectionFAQ 
        items={FAQ_ITEMS} 
        description={`${SITE_DATA.name} 먹튀 검증에 관한 자주 묻는 질문입니다.`}
      />

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-accent border-b border-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-h2 text-heading mb-6">피해 예방을 위해</h2>
          <p className="text-body-lg text-body max-w-2xl mx-auto mb-10" style={{ wordBreak: 'keep-all' }}>
            안심고고의 사용자 보호 가이드와 FAQ를 확인하여 피해를 예방하세요.
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
      <SectionCategories currentPage="review" />
    </main>
  )
}
