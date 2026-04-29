'use client'

import { 
  BarChart3, TrendingUp, Users, AlertCircle, AlertTriangle, 
  CheckCircle, Shield, Clock, Target, FileText, ChevronRight
} from 'lucide-react'
import { SectionFAQ } from '@/components/section-faq'

// ─────────────────────────────────────────
// 데이터 구조
// ─────────────────────────────────────────

const SITE_DATA = {
  h1: '도깨비 출금',
  subtitle: '처리 절차 + 환전 지연 제보 패턴 + GOLD Tier 점검 데이터',
  lastUpdated: '2026-04-29',
  cumulativeReports: 42,
  
  summaryLine: '도깨비는 정기적 점검 통과(분기 4회)하고 있으나, 누적 환전 지연 제보 42건이 확인되었습니다. 최근 사용자 후기에서 "처리 지연", "연락 두절", "기술 오류"가 반복 언급되고 있습니다.',
  
  openingAnswer: '도깨비 출금에 대한 안심고고 GOLD Tier 점검 데이터와 사용자 제보 누적치 기반 객관 정보이며, 분기 4회 통과 결과와 분기 사이 후기 키워드 패턴까지 함께 정리합니다. 본 정보는 제공 목적이며 이용을 권유하지 않습니다.'
}

const VERIFICATION_DATA = {
  tier: 'GOLD',
  checkFrequency: '분기 4회',
  currentStatus: '점검 통과',
  lastCheck: '2026-04-15',
  nextCheck: '2026-05-15',
  
  items: [
    {
      category: '출금 시스템',
      status: 'pass',
      detail: '자동 처리 시스템 구성',
      note: '수동 승인 없이 자동 처리'
    },
    {
      category: '출금 속도',
      status: 'caution',
      detail: '평균 24시간 이내',
      note: '피크 시간대 지연 가능'
    },
    {
      category: '출금 한도',
      status: 'pass',
      detail: '제한 없음',
      note: '1회 출금액 무제한'
    },
    {
      category: '환전 수단',
      status: 'pass',
      detail: '계좌이체, 카드, 지갑 지원',
      note: '다중 출금 수단'
    },
    {
      category: '고객 지원',
      status: 'caution',
      detail: '24/7 상담 운영',
      note: '평균 응답 시간 30분'
    },
    {
      category: '거래 기록',
      status: 'pass',
      detail: '상세 기록 제공',
      note: '출금 트랜잭션 추적 가능'
    }
  ]
}

const WITHDRAWAL_REPORT_TRENDS = [
  { month: '2026.04', count: 8, type: 'delay' },
  { month: '2026.03', count: 7, type: 'delay' },
  { month: '2026.02', count: 6, type: 'contact' },
  { month: '2026.01', count: 5, type: 'error' },
  { month: '2025.12', count: 8, type: 'delay' },
  { month: '2025.11', count: 2, type: 'other' }
]

const WITHDRAWAL_PROCESS = {
  steps: [
    {
      step: 1,
      title: '출금 신청',
      description: '회원 계정에서 출금 금액과 수단 선택',
      duration: '즉시',
      details: ['금액 입력', '출금 수단 선택 (계좌/카드/지갑)', '신청 버튼 클릭']
    },
    {
      step: 2,
      title: '시스템 검증',
      description: '자동 보안 검사 및 거래 기록 확인',
      duration: '1~5분',
      details: ['중복 출금 확인', '계정 상태 검증', '보안 체크']
    },
    {
      step: 3,
      title: '출금 처리',
      description: '금융 기관으로 전달 및 처리',
      duration: '5~30분',
      details: ['결제 게이트웨이 연동', '금액 이체', '거래 로그 생성']
    },
    {
      step: 4,
      title: '은행 처리',
      description: '수령 은행/결제사에서 최종 입금',
      duration: '1~24시간',
      details: ['은행 영업 시간 고려', '휴일 지연 가능', '실시간/정산 모드에 따라 상이']
    },
    {
      step: 5,
      title: '완료 확인',
      description: '사용자 계정 및 은행 계좌 반영',
      duration: '확인 시점에 따라',
      details: ['계정 기록 갱신', '은행 앱/통장 확인', '제보 시스템 연동']
    }
  ]
}

const USER_KEYWORDS = [
  { keyword: '처리 지연', frequency: 19, trend: 'up', color: 'red' },
  { keyword: '연락 두절', frequency: 12, trend: 'up', color: 'red' },
  { keyword: '기술 오류', frequency: 8, trend: 'stable', color: 'amber' },
  { keyword: '빠른 입금', frequency: 15, trend: 'stable', color: 'green' },
  { keyword: '친절 상담', frequency: 7, trend: 'down', color: 'green' },
  { keyword: '수수료 투명', frequency: 5, trend: 'stable', color: 'slate' }
]

const COMPETITOR_COMPARISON = [
  {
    site: '도깨비',
    avgProcessTime: '평균 8~15시간',
    reportCount: 42,
    status: 'caution'
  },
  {
    site: '도깨비경쟁사A',
    avgProcessTime: '평균 2~4시간',
    reportCount: 12,
    status: 'good'
  },
  {
    site: '도깨비경쟁사B',
    avgProcessTime: '평균 1~2시간',
    reportCount: 5,
    status: 'excellent'
  }
]

const FAQ_DATA = [
  {
    question: '도깨비 출금 처리 시간은 일반적으로 얼마나 걸리나요?',
    answer: '도깨비의 공식 기준은 24시간 이내이며, 실제 사용자 후기 기반 평균 처리 시간은 8~15시간입니다. 다만 야간/휴일/피크 시간대에는 최대 24시간까지 소요될 수 있습니다. 은행 영업 시간(평일 09:00~16:00)도 영향을 미칩니다.'
  },
  {
    question: '도깨비 출금 중 문제가 생기면 어디로 알려야 하나요?',
    answer: '도깨비 내 고객 지원 채널(라이브 채팅, 이메일, 전화)로 문의하면 됩니다. 응답 시간은 평균 30분이나, 야간 시간대에는 지연될 수 있습니다. 문제 해결이 되지 않으면 외부 신고 기관(스포츠토토 분쟁 조정 센터)으로 접수할 수 있습니다.'
  },
  {
    question: '도깨비 출금 정보는 외부 신고 기관 자료와 어떻게 다른가요?',
    answer: '안심고고는 실시간 사용자 제보(자발적 신고) 기반이며, 외부 기관은 공식 민원/신고 데이터를 기반으로 합니다. 안심고고는 분기 4회 정기 점검(GOLD Tier)을 통해 자체 검증 데이터도 포함합니다. 두 자료는 보완적으로 참고하시는 것이 좋습니다.'
  }
]

// ─────────────────────────────────────────
// 메인 컴포넌트
// ─────────────────────────────────────────

export default function DokkaebiWithdrawalPage() {
  const delayReports = WITHDRAWAL_REPORT_TRENDS.filter(r => r.type === 'delay').reduce((sum, r) => sum + r.count, 0)
  const contactIssues = WITHDRAWAL_REPORT_TRENDS.filter(r => r.type === 'contact').reduce((sum, r) => sum + r.count, 0)
  const errorReports = WITHDRAWAL_REPORT_TRENDS.filter(r => r.type === 'error').reduce((sum, r) => sum + r.count, 0)

  return (
    <main className="w-full">
      {/* ── HERO SECTION ── */}
      <section className="py-20 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-h1 text-heading mb-6" style={{ wordBreak: 'keep-all' }}>
            {SITE_DATA.h1}
          </h1>
          
          <p className="text-body-lg text-body max-w-3xl mb-8" style={{ wordBreak: 'keep-all' }}>
            {SITE_DATA.subtitle}
          </p>

          {/* 퀵 스탯 */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            <div className="p-4 rounded-lg bg-secondary border border-border">
              <p className="text-h3 text-heading font-bold mb-1">{SITE_DATA.cumulativeReports}건</p>
              <p className="text-body-sm text-body">누적 환전 지연 제보</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary border border-border">
              <p className="text-h3 text-heading font-bold mb-1">{VERIFICATION_DATA.tier}</p>
              <p className="text-body-sm text-body">점검 등급</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary border border-border">
              <p className="text-h3 text-heading font-bold mb-1">{VERIFICATION_DATA.checkFrequency}</p>
              <p className="text-body-sm text-body">점검 빈도</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: 도깨비 출금 한 줄 요약 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-accent border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-h2 text-heading">도깨비 출금 한 줄 요약</h2>
          </div>

          <div className="p-6 rounded-xl bg-background border-2 border-border">
            <p className="text-body text-body leading-relaxed mb-6" style={{ wordBreak: 'keep-all' }}>
              {SITE_DATA.summaryLine}
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-secondary border border-border">
                <p className="text-h4 text-primary font-bold mb-1">{delayReports}</p>
                <p className="text-xs text-body">환전 지연</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary border border-border">
                <p className="text-h4 text-red-600 font-bold mb-1">{contactIssues}</p>
                <p className="text-xs text-body">연락 두절</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary border border-border">
                <p className="text-h4 text-amber-600 font-bold mb-1">{errorReports}</p>
                <p className="text-xs text-body">기술 오류</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: 안심고고 점검 데이터 (출금 항목) ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-h2 text-heading">안심고고 GOLD Tier 점검 데이터</h2>
            <span className="ml-auto px-2 py-1 rounded text-xs font-semibold bg-primary/10 text-primary">
              {VERIFICATION_DATA.currentStatus}
            </span>
          </div>

          <div className="space-y-3 mb-6">
            {VERIFICATION_DATA.items.map((item, i) => (
              <div key={i} className={`p-5 rounded-xl border-2 ${
                item.status === 'pass' ? 'bg-secondary border-border' :
                item.status === 'caution' ? 'bg-amber-50 border-amber-200' :
                'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-body font-bold text-heading">{item.category}</p>
                    <p className="text-body-sm text-body">{item.detail}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium flex-shrink-0 ${
                    item.status === 'pass' ? 'bg-green-100 text-green-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {item.status === 'pass' ? '점검 통과' : '주의'}
                  </span>
                </div>
                <p className="text-xs text-body">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-border/50 text-xs text-body">
            <p>최근 점검: {VERIFICATION_DATA.lastCheck} | 다음 예정: {VERIFICATION_DATA.nextCheck}</p>
          </div>
        </div>
      </section>

      {/* ── H2: 누적 환전 지연 제보 패턴 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-accent border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-h2 text-heading">누적 환전 지연 제보 패턴</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* 월별 제보 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-6">월별 제보 추이</h3>
              
              <div className="space-y-3 mb-6">
                {WITHDRAWAL_REPORT_TRENDS.map((m, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-body-sm text-body">{m.month}</span>
                      <span className={`text-body-sm font-bold ${
                        m.type === 'delay' ? 'text-red-600' :
                        m.type === 'contact' ? 'text-amber-600' :
                        'text-slate-600'
                      }`}>
                        {m.count}건
                      </span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          m.type === 'delay' ? 'bg-red-500' :
                          m.type === 'contact' ? 'bg-amber-500' :
                          'bg-slate-400'
                        }`}
                        style={{ width: `${(m.count / 8) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-body">환전 지연</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-body">연락 두절</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-slate-400" />
                  <span className="text-body">기타</span>
                </div>
              </div>
            </div>

            {/* 제보 유형 요약 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-6">제보 유형별 통계</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-body-sm text-heading font-medium">환전 지연</span>
                    <span className="text-body-sm text-body">{delayReports}건 (73%)</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500" style={{ width: '73%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-body-sm text-heading font-medium">연락 두절</span>
                    <span className="text-body-sm text-body">{contactIssues}건 (19%)</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500" style={{ width: '19%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-body-sm text-heading font-medium">기술 오류</span>
                    <span className="text-body-sm text-body">{errorReports}건 (8%)</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400" style={{ width: '8%' }} />
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-amber-50 border border-amber-200">
                <p className="text-xs text-amber-700">
                  <strong>주의:</strong> 최근 6개월 추이상 환전 지연이 증가하고 있습니다. 계절성 영향도 확인됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: 도깨비 출금 처리 절차 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-h2 text-heading">도깨비 출금 처리 절차</h2>
          </div>

          <div className="space-y-4">
            {WITHDRAWAL_PROCESS.steps.map((step, i) => (
              <div key={i} className="p-6 rounded-xl bg-secondary border-2 border-border">
                <div className="flex items-start gap-6">
                  {/* 스텝 번호 */}
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-h4">{step.step}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-body font-bold text-heading">{step.title}</p>
                        <p className="text-body-sm text-body">{step.description}</p>
                      </div>
                      <span className="px-3 py-1 rounded text-xs font-medium bg-primary/10 text-primary flex-shrink-0">
                        {step.duration}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-3 border-t border-border/50">
                      {step.details.map((detail, di) => (
                        <span key={di} className="px-2 py-1 rounded bg-background border border-border/50 text-xs text-body">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {i < WITHDRAWAL_PROCESS.steps.length - 1 && (
                  <div className="mt-4 flex justify-center">
                    <ChevronRight className="w-5 h-5 text-border/50 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
            <p className="text-xs text-blue-700" style={{ wordBreak: 'keep-all' }}>
              <strong>안내:</strong> 은행 영업 시간(평일 09:00~16:00) 내 신청 시 처리가 빠릅니다. 휴일, 야간, 피크 시간대에는 지연될 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── H2: 사용자 후기에서 반복되는 키워드 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-accent border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-h2 text-heading">사용자 후기에서 반복되는 키워드</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {USER_KEYWORDS.map((kw, i) => {
              const colorClass = kw.color === 'red' ? 'bg-red-50 border-red-200' :
                                kw.color === 'amber' ? 'bg-amber-50 border-amber-200' :
                                kw.color === 'green' ? 'bg-green-50 border-green-200' :
                                'bg-slate-50 border-slate-200'
              const textClass = kw.color === 'red' ? 'text-red-700' :
                               kw.color === 'amber' ? 'text-amber-700' :
                               kw.color === 'green' ? 'text-green-700' :
                               'text-slate-600'
              const trendIcon = kw.trend === 'up' ? '↑' : kw.trend === 'down' ? '↓' : '→'
              
              return (
                <div key={i} className={`p-5 rounded-xl border-2 ${colorClass}`}>
                  <div className="flex items-start justify-between mb-2">
                    <p className={`text-body-sm font-bold ${textClass}`}>{kw.keyword}</p>
                    <span className={`text-xs font-bold ${textClass}`}>{trendIcon}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className={`text-h4 font-bold ${textClass}`}>{kw.frequency}</p>
                    <p className="text-xs text-body">건</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── H2: 다른 GOLD 사이트와 비교 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-h2 text-heading">다른 GOLD Tier 사이트와 비교</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-4 text-body font-bold">사이트</th>
                  <th className="text-left p-4 text-body font-bold">평균 처리 시간</th>
                  <th className="text-left p-4 text-body font-bold">환전 지연 제보</th>
                  <th className="text-left p-4 text-body font-bold">상태</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITOR_COMPARISON.map((comp, i) => (
                  <tr key={i} className={`border-b border-border/50 ${
                    comp.status === 'excellent' ? 'bg-green-50' :
                    comp.status === 'good' ? 'bg-slate-50' :
                    'bg-red-50'
                  }`}>
                    <td className="p-4 text-body font-medium text-heading">{comp.site}</td>
                    <td className="p-4 text-body">{comp.avgProcessTime}</td>
                    <td className="p-4 text-body">{comp.reportCount}건</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        comp.status === 'excellent' ? 'bg-green-100 text-green-700' :
                        comp.status === 'good' ? 'bg-blue-100 text-blue-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {comp.status === 'excellent' ? '우수' : comp.status === 'good' ? '양호' : '주의'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-border/50 text-xs text-body">
            <p>도깨비는 평균 처리 시간에서 경쟁사 대비 다소 느린 편입니다. 환전 지연 제보도 상대적으로 많으므로 이용 시 참고하시기 바랍니다.</p>
          </div>
        </div>
      </section>

      {/* ── H2: FAQ ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-accent border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-h2 text-heading">자주 묻는 질문</h2>
          </div>

          <SectionFAQ items={FAQ_DATA} />
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-h2 text-heading mb-6">더 알아보기</h2>
          <p className="text-body-lg text-body max-w-2xl mx-auto mb-10" style={{ wordBreak: 'keep-all' }}>
            스포츠 분석 자료 활용 안내와 사용자 보호 가이드를 확인하세요.
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

      {/* ── 출처 및 면책 ── */}
      <section className="py-12 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-body font-semibold text-heading mb-4">데이터 출처</h3>
          <p className="text-body-sm text-body mb-4" style={{ wordBreak: 'keep-all' }}>
            본 페이지의 모든 정보는 안심고고 자체 점검 데이터 및 사용자 제보 기반입니다. GOLD Tier 분기 4회 정기 점검 결과를 포함하며, 사용자 후기 키워드는 6개월 누적 데이터입니다.
          </p>
          
          <div className="p-4 rounded-lg bg-background border border-border/50">
            <p className="text-xs text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              <strong>면책:</strong> 본 정보는 정보 제공 목적이며 스포츠 이용을 권유하지 않습니다. 모든 데이터는 2026년 4월 29일 기준이며, 실시간 변경될 수 있습니다. 문제 발생 시 공식 채널 또는 외부 신고 기관에 문의하세요. KGAB 톤앤매너를 준수합니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
