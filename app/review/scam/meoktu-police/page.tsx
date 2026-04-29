import { Metadata } from 'next'
import { AlertTriangle, Clock, Globe, FileText, Shield, MessageSquare, Server, Phone, AlertCircle, CheckCircle, TrendingUp, Users } from 'lucide-react'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

export const metadata: Metadata = {
  title: '먹튀폴리스 먹튀 검증 — 운영 이력 + 보증 분석 + 사용자 후기 | 안심고고',
  description: '먹튀폴리스 먹튀 검증 결과. 운영 이력, 보증 상태, 사용자 후기, 먹튀 의심 신호를 확인하세요.',
}

// ═══════════════════════════════════════════════════════════════
// 데이터 영역 - 템플릿 재사용 시 이 부분만 수정
// ═══════════════════════════════════════════════════════════════

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

// 변경 이력 타임라인
const TIMELINE_DATA = [
  { date: '2021.03', event: '최초 운영 시작', detail: 'mp-bet.com 도메인으로 서비스 개시', status: 'normal' },
  { date: '2022.08', event: '1차 도메인 변경', detail: 'meoktu-pol.kr로 도메인 이전', status: 'warn' },
  { date: '2023.05', event: '환전 지연 제보', detail: '3일 이상 환전 지연 제보 2건 접수', status: 'alert' },
  { date: '2024.08', event: '2차 도메인 변경', detail: '현재 도메인(meoktu-police.com)으로 이전', status: 'warn' },
  { date: '2025.01', event: '추가 입금 요구 제보', detail: '보너스 조건 미충족 사유로 추가 입금 요구 제보', status: 'alert' },
]

// 보증 상태
const GUARANTEE_STATUS = [
  { label: '보증금 예치', value: '확인 불가', status: 'unknown' },
  { label: '운영사 공시', value: '미공개', status: 'negative' },
  { label: '제3자 보증', value: '없음', status: 'negative' },
  { label: 'SSL 인증서', value: '유효', status: 'positive' },
]

// 사용자 후기 제보 통계
const REPORT_STATS = [
  { label: '환전 지연', count: 4 },
  { label: '추가 입금 요구', count: 2 },
  { label: '기타', count: 1 },
]

// 사용자 후기 샘플
const USER_REVIEWS = [
  { date: '2025.01', type: '추가 입금 요구', summary: '보너스 롤링 미달 사유로 추가 입금 요청받음', verified: true },
  { date: '2024.11', type: '환전 지연', summary: '환전 신청 후 72시간 경과, 고객센터 응답 없음', verified: true },
  { date: '2024.08', type: '환전 지연', summary: '주말 환전 5일 소요, 평일엔 정상 처리', verified: false },
]

// 위험 신호
const WARNING_SIGNALS = [
  { signal: '잦은 도메인 변경', detected: true, detail: '4년간 2회 도메인 변경 이력' },
  { signal: '운영사 정보 미공개', detected: true, detail: '법인명, 대표자, 소재지 모두 비공개' },
  { signal: '보증금 미확인', detected: true, detail: '보증금 예치 여부 확인 불가' },
  { signal: '반복 제보 패턴', detected: true, detail: '환전 지연 제보가 6개월 내 4건 접수' },
  { signal: '고객센터 응답 지연', detected: false, detail: '일부 응답 지연 이력 있으나 패턴 미확인' },
]

// FAQ
const FAQ_ITEMS = [
  {
    question: '먹튀폴리스 먹튀란?',
    answer: '먹튀폴리스 먹튀는 해당 사이트에서 발생한 환전 거부, 추가 입금 요구, 먹튀 의심 사례를 의미합니다. 본 페이지에서는 사용자 제보와 운영 이력을 기반으로 위험 신호를 정리했습니다.',
  },
  {
    question: '어떻게 검증하나요?',
    answer: '안심고고는 도메인 변경 이력, 운영 기간, 사용자 제보, 보증금 예치 여부 등 5단계 검증 프로세스를 통해 사이트를 분석합니다. 외부 출처 인용 없이 자체 데이터만 사용합니다.',
  },
  {
    question: '위험 신호는?',
    answer: '잦은 도메인 변경, 운영사 정보 미공개, 보증금 미확인, 반복 제보 패턴, 고객센터 응답 지연 등이 주요 위험 신호입니다. 본 사이트에서는 5개 중 4개의 위험 신호가 감지되었습니다.',
  },
]

// ═══════════════════════════════════════════════════════════════
// 컴포넌트 영역
// ═══════════════════════════════════════════════════════════════

export default function MeoktuPolicePage() {
  const detectedSignals = WARNING_SIGNALS.filter(s => s.detected).length
  const totalSignals = WARNING_SIGNALS.length

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
      <section className="bg-accent border-b-2 border-amber-200 py-20 md:py-28 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-4 py-2 rounded-full text-label font-bold ${
              SITE_DATA.status === 'danger' ? 'bg-red-100 text-red-700 border-2 border-red-300' :
              SITE_DATA.status === 'warning' ? 'bg-amber-100 text-amber-700 border-2 border-amber-300' :
              'bg-slate-100 text-slate-700 border-2 border-slate-300'
            }`}>
              <AlertTriangle className="w-4 h-4 inline mr-2" />
              {SITE_DATA.statusLabel}
            </span>
            <span className="text-label text-muted">마지막 검증: {SITE_DATA.lastChecked}</span>
          </div>

          <h1 className="text-h1 text-heading mb-6 leading-tight" style={{ wordBreak: 'keep-all' }}>
            {SITE_DATA.h1}
          </h1>
          <p className="text-body-lg text-body max-w-3xl leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            {SITE_DATA.openingAnswer}
          </p>
        </div>
      </section>

      {/* ── 스크린샷 + Quick Stats ── */}
      <section className="py-12 md:py-16 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden border-2 border-border">
              <img src={SITE_DATA.screenshot} alt={`${SITE_DATA.name} 사이트 스크린샷`} className="w-full h-auto" />
              <div className="p-4 bg-secondary text-center">
                <p className="text-label text-muted">검증 시점 스크린샷 ({SITE_DATA.lastChecked})</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-secondary border-2 border-border">
                <div className="flex items-center justify-between mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">보통</span>
                </div>
                <p className="text-h3 text-heading font-bold mb-1">{SITE_DATA.operationYears}</p>
                <p className="text-body-sm text-body">운영 기간</p>
                <p className="text-xs text-body mt-2">{SITE_DATA.operationStart} 시작</p>
              </div>
              <div className="p-5 rounded-xl bg-amber-50 border-2 border-amber-200">
                <div className="flex items-center justify-between mb-3">
                  <Globe className="w-5 h-5 text-amber-600" />
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-700">주의</span>
                </div>
                <p className="text-h3 text-heading font-bold mb-1">{SITE_DATA.domainChanges}회</p>
                <p className="text-body-sm text-body">도메인 변경</p>
                <p className="text-xs text-body mt-2">최근 {SITE_DATA.lastDomainChange}</p>
              </div>
              <div className="p-5 rounded-xl bg-red-50 border-2 border-red-200">
                <div className="flex items-center justify-between mb-3">
                  <FileText className="w-5 h-5 text-red-600" />
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700">경고</span>
                </div>
                <p className="text-h3 text-heading font-bold mb-1">{SITE_DATA.totalReports}건</p>
                <p className="text-body-sm text-body">누적 제보</p>
                <p className="text-xs text-body mt-2">최근 6개월 {REPORT_TREND.reduce((sum, m) => sum + m.count, 0)}건</p>
              </div>
              <div className="p-5 rounded-xl bg-red-50 border-2 border-red-200">
                <div className="flex items-center justify-between mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700">위험</span>
                </div>
                <p className="text-h3 text-heading font-bold mb-1">{detectedSignals}/{totalSignals}</p>
                <p className="text-body-sm text-body">위험 신호</p>
                <div className="mt-2 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: `${(detectedSignals/totalSignals)*100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: 운영 이력 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="text-h2 text-heading">운영 이력</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-6">기본 정보</h3>
              
              {/* 기본 정보 목록 */}
              <dl className="space-y-3 mb-6 pb-6 border-b border-border/50">
                {[
                  { label: '운영 시작', value: SITE_DATA.operationStart },
                  { label: '운영 기간', value: SITE_DATA.operationYears },
                  { label: '도메인 변경', value: `${SITE_DATA.domainChanges}회`, warn: true },
                  { label: '최근 도메인 변경', value: SITE_DATA.lastDomainChange },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between py-2">
                    <dt className="text-body-sm text-body">{item.label}</dt>
                    <dd className={`text-body-sm font-medium ${item.warn ? 'text-amber-600' : 'text-heading'}`}>{item.value}</dd>
                  </div>
                ))}
              </dl>

              {/* 도메인 안정성 지수 */}
              <div className="space-y-3">
                <p className="text-body-sm text-body">도메인 안정성 지수</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500" style={{ width: '40%' }} />
                  </div>
                  <span className="text-h4 text-amber-600 font-bold">40%</span>
                </div>
                <p className="text-xs text-body">IP 변경 3회 + 도메인 변경 2회 = 낮은 안정성</p>
              </div>

              {/* 신뢰도 뱃지 */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-body-sm text-body mb-3">종합 신뢰도</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full text-label font-semibold bg-red-100 text-red-700">주의 필요</span>
                  <span className="px-3 py-1 rounded-full text-label font-semibold bg-amber-100 text-amber-700">반복 제보</span>
                  <span className="px-3 py-1 rounded-full text-label font-semibold bg-slate-100 text-slate-700">신뢰도 낮음</span>
                </div>
              </div>
            </div>

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

          {/* 운영 정보 + 제보 추이 (2칼럼) */}
          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            {/* 운영 정보 상세 테이블 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-h4 text-heading">운영 정보 상세</h3>
                <span className="text-label text-body text-xs">검증: {OPERATION_INFO.verifiedAt}</span>
              </div>
              <div className="space-y-1">
                {[
                  { icon: Globe, label: '현재 도메인', value: OPERATION_INFO.currentDomain },
                  { icon: Globe, label: '이전 도메인', value: OPERATION_INFO.previousDomains.join(', ') || '없음' },
                  { icon: Server, label: '서버 위치', value: OPERATION_INFO.serverLocation, warn: true },
                  { icon: TrendingUp, label: 'IP 변경 횟수', value: `${OPERATION_INFO.ipHistory}회`, warn: OPERATION_INFO.ipHistory >= 3 },
                  { icon: Shield, label: '도메인 등록기관', value: OPERATION_INFO.registrar },
                  { icon: CheckCircle, label: 'SSL 인증서', value: OPERATION_INFO.sslStatus === 'valid' ? '유효' : '만료/미확인' },
                  { icon: Phone, label: '고객센터', value: OPERATION_INFO.customerService },
                  { icon: Clock, label: '운영 시간', value: OPERATION_INFO.operationHours },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-body" />
                      <span className="text-body-sm text-body">{item.label}</span>
                    </div>
                    <span className={`text-body-sm font-medium text-right max-w-[50%] truncate ${item.warn ? 'text-amber-600' : 'text-heading'}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-body mt-4">* 검증 시점 기준이며, 실제 현황과 다를 수 있습니다.</p>
            </div>

            {/* 제보 추이 (최근 6개월) */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-h4 text-heading">제보 추이 (6개월)</h3>
                <span className={`px-3 py-1 rounded-full text-label font-semibold text-xs ${
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
              
              {/* 바 차트 */}
              <div className="flex items-end gap-1.5 h-24 mb-4">
                {REPORT_TREND.map((m, i) => {
                  const maxCount = Math.max(...REPORT_TREND.map(r => r.count), 1)
                  const height = m.count === 0 ? 3 : (m.count / maxCount) * 100
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                      {m.count > 0 && <span className="text-xs text-heading font-semibold">{m.count}</span>}
                      <div 
                        className={`w-full rounded-t ${
                          m.count === 0 ? 'bg-slate-200' :
                          m.count >= 2 ? 'bg-red-400' : 'bg-amber-400'
                        }`}
                        style={{ height: `${height}%`, minHeight: '3px' }}
                      />
                      <span className="text-xs text-body">{m.month.split('.')[1]}월</span>
                    </div>
                  )
                })}
              </div>
              
              {/* 요약 메시지 */}
              <div className={`p-3 rounded-lg ${
                REPORT_TREND.reduce((sum, m) => sum + m.count, 0) === 0 
                  ? 'bg-green-50 border border-green-200'
                  : REPORT_TREND.reduce((sum, m) => sum + m.count, 0) >= 5
                  ? 'bg-red-50 border border-red-200'
                  : 'bg-amber-50 border border-amber-200'
              }`}>
                <p className={`text-body-sm font-medium ${
                  REPORT_TREND.reduce((sum, m) => sum + m.count, 0) === 0 
                    ? 'text-green-700'
                    : REPORT_TREND.reduce((sum, m) => sum + m.count, 0) >= 5
                    ? 'text-red-700'
                    : 'text-amber-700'
                }`}>
                  {REPORT_TREND.reduce((sum, m) => sum + m.count, 0) === 0 
                    ? '최근 6개월간 제보가 없습니다.'
                    : REPORT_TREND.reduce((sum, m) => sum + m.count, 0) >= 5
                    ? '반복 제보가 확인되었습니다. 주의가 필요합니다.'
                    : '일부 제보가 확인되었습니다. 이용 전 확인을 권장합니다.'}
                </p>
              </div>

              {/* 월별 상세 */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-body-sm text-body mb-2">월별 제보 현황</p>
                <div className="flex flex-wrap gap-2">
                  {REPORT_TREND.map((m, i) => (
                    <span key={i} className={`px-2 py-1 rounded text-xs font-medium ${
                      m.count === 0 ? 'bg-slate-100 text-slate-600' :
                      m.count >= 2 ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {m.month.split('.')[1]}월: {m.count}건
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: 사용자 후기 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-h2 text-heading">사용자 후기</h2>
          </div>

          {/* 제보 유형 분포 */}
          <div className="p-6 rounded-xl bg-background border-2 border-border mb-6">
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
                <div key={i} className="text-center p-4 rounded-lg bg-secondary">
                  <p className="text-h3 text-heading font-bold">{stat.count}건</p>
                  <p className="text-body-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <p className="text-xs text-muted mt-4">
              {SITE_DATA.totalReports === 0 
                ? '현재까지 접수된 제보가 없���니다. 이는 긍정적 신호입니다.'
                : SITE_DATA.totalReports >= 5
                ? '반복 제보가 확인되었습니다. 이용에 각별한 주의가 필요합니다.'
                : '일부 제보가 확인되었습니다. 이용 전 확인을 권장합니다.'}
            </p>
          </div>

          {/* 제보 리스트 */}
          <div className="space-y-4 mb-8">
            {USER_REVIEWS.map((review, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border-2 border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      review.type === '환전 지연' ? 'bg-red-100 text-red-700' :
                      review.type === '추가 입금 요구' ? 'bg-amber-100 text-amber-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {review.type}
                    </span>
                    <span className="text-label text-muted">{review.date}</span>
                  </div>
                  {review.verified && (
                    <span className="text-xs text-green-600 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      확인됨
                    </span>
                  )}
                </div>
                <p className="text-body text-body">{review.summary}</p>
              </div>
            ))}
          </div>

          {/* 증빙 자료 갤러리 */}
          <div className="p-6 rounded-xl bg-background border-2 border-border">
            <h3 className="text-h4 text-heading mb-4">증빙 자료</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="aspect-video rounded-lg bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center">
                  <span className="text-label text-muted">증빙 #{n}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-4">* 제보자 개인정보 보호를 위해 일부 정보가 가려질 수 있습니다.</p>
          </div>
        </div>
      </section>

      {/* ── H2: 먹튀 의심 신호 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-6 h-6 text-primary" />
            <h2 className="text-h2 text-heading">먹튀 의심 신호</h2>
          </div>

          <div className="p-6 rounded-xl bg-amber-50 border-2 border-amber-200 mb-8">
            <p className="text-body text-amber-800" style={{ wordBreak: 'keep-all' }}>
              <strong>총 {totalSignals}개 위험 신호 중 {detectedSignals}개가 감지되었습니다.</strong> 이는 이용에 주의가 필요함을 의미합니다.
            </p>
          </div>

          <div className="space-y-4">
            {WARNING_SIGNALS.map((item, i) => (
              <div key={i} className={`p-5 rounded-xl border-2 ${
                item.detected ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.detected ? 'bg-red-100' : 'bg-green-100'
                  }`}>
                    {item.detected ? (
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-body font-semibold text-heading mb-1">{item.signal}</h3>
                    <p className="text-body-sm text-body">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2: 신고 방법 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="w-6 h-6 text-primary" />
            <h2 className="text-h2 text-heading">신고 방법</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: '제보 접수', desc: '안심고고 텔레그램 채널 또는 제보 페이지를 통해 피해 사실을 접수합니다.' },
              { step: '2', title: '증빙 자료 제출', desc: '대화 내역, 입출금 내역, 스크린샷 등 증빙 자료를 함께 제출합니다.' },
              { step: '3', title: '검토 및 반영', desc: '안심고고 검증팀이 제보를 검토하고 확인 후 해당 페이지에 반영합니다.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-background border-2 border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-h4 text-primary font-bold">{item.step}</span>
                </div>
                <h3 className="text-h4 text-heading mb-2">{item.title}</h3>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <SectionFAQ 
        items={FAQ_ITEMS} 
        description="먹튀폴리스 검증에 관한 자주 묻는 질문입니다."
      />

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-accent border-b border-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-h2 text-heading mb-6">피해를 예방하세요</h2>
          <p className="text-body-lg text-body max-w-2xl mx-auto mb-10" style={{ wordBreak: 'keep-all' }}>
            안심고고의 가이드와 검증 정보를 활용하여 안전하게 이용하세요.
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
              <MessageSquare className="w-4 h-4" />
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
