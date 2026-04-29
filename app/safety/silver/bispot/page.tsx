import { Shield, Clock, Banknote, Calendar, CheckCircle, AlertTriangle, ChevronRight, FileText, TrendingUp } from 'lucide-react'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

export const metadata = {
  title: '비스팟 — Silver Tier 보증업체 상세 | 안심고고',
  description: '비스팟의 보증금·운영 연차·마지막 검증일·변경 이력을 한눈에 확인하세요.',
}

const FAQ_ITEMS = [
  {
    q: '비스팟의 Silver Tier 등급은 어떤 기준으로 부여됐나요?',
    a: '보증금 중위권(1억~5억 원), 운영 연차 1~3년, 환전 처리 정상을 충족하여 Silver Tier로 분류되었습니다. 분기마다 재점검을 진행하며, Gold Tier 조건 충족 시 등급이 상향될 수 있습니다.',
  },
  {
    q: '비스팟의 보증금 정보는 어떻게 확인되나요?',
    a: '안심고고는 자체 검증 프로세스를 통해 보증금 정보를 수집하며, 운영사 공시 자료와 사용자 제보를 교차 검증합니다. 정확한 금액은 변동될 수 있으므로 마지막 검증일을 함께 확인하세요.',
  },
  {
    q: '비스팟에 문제가 발생하면 어떻게 제보하나요?',
    a: '안심고고 제보 폼을 통해 사이트명, 발생 일시, 금액, 증빙 자료를 제출할 수 있습니다. 제보 내용은 편집부 검토 후 변경 이력에 반영됩니다.',
  },
]

export default function SilverBispotPage() {
  return (
    <main 
      data-category="safety" 
      style={{
        '--primary': '#14b8a6',
        '--primary-foreground': '#ffffff',
        '--accent': '#f0fdfa',
        '--accent-foreground': '#0f766e',
      } as React.CSSProperties}
      className="min-h-screen bg-background font-sans"
    >
      {/* ── HERO SECTION ── */}
      <section className="bg-gradient-to-br from-slate-100 via-slate-50 to-gray-100 border-b-4 border-slate-300 py-32 md:py-40 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Tier Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                <path d="M20 4L8 9v10c0 7 5.5 12.5 12 14.5C27.5 31.5 33 26 33 19V9L20 4z" fill="white" opacity="0.9"/>
                <path d="M20 8L11 12v8c0 5 3.8 9 9 10.5C25.2 29 29 25 29 20v-8L20 8z" fill="white" opacity="0.3"/>
                <path d="M14 20l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"/>
              </svg>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-slate-200 text-slate-700 text-label font-bold">Silver Tier</span>
          </div>

          {/* Title */}
          <h1 className="text-h1 text-heading mb-6 leading-tight" style={{ wordBreak: 'keep-all' }}>
            비스팟 — Silver Tier 보증업체 상세
          </h1>

          {/* Subtitle */}
          <p className="text-body-lg text-body max-w-3xl mb-10 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            비스팟의 보증금·운영 연차·마지막 검증일·변경 이력을 한눈에 확인하세요.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/80 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Banknote className="w-4 h-4 text-slate-600" />
                <span className="text-label text-slate-600">보증금</span>
              </div>
              <p className="text-h3 text-heading font-bold">2억 원</p>
            </div>
            <div className="p-4 rounded-xl bg-white/80 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-slate-600" />
                <span className="text-label text-slate-600">운영 연차</span>
              </div>
              <p className="text-h3 text-heading font-bold">2년 1개월</p>
            </div>
            <div className="p-4 rounded-xl bg-white/80 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-slate-600" />
                <span className="text-label text-slate-600">마지막 검증</span>
              </div>
              <p className="text-h3 text-heading font-bold">2025.04.12</p>
            </div>
            <div className="p-4 rounded-xl bg-white/80 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-slate-600" />
                <span className="text-label text-slate-600">제보 건수</span>
              </div>
              <p className="text-h3 text-heading font-bold">1건</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPENING ANSWER ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl bg-slate-50 border-2 border-slate-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-slate-600" />
              </div>
              <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                비스팟은 2023년 3월 운영을 시작해 2년 이상 운영 중인 사이트입니다. 보증금 2억 원을 유지하고 있으며, 환전 지연 제보 1건이 접수되었으나 24시간 내 처리 완료되어 Silver Tier 등급을 유지하고 있습니다. 마지막 검증일 기준 운영 정보 변동 없이 정상 운영 상태입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SITE IMAGE ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-8">사이트 개요</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-xl bg-muted border-2 border-border overflow-hidden">
              <img 
                src="/placeholder.svg?height=400&width=600" 
                alt="비스팟 메인 화면" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-h3 text-heading mb-4">비스팟 (BiSpot)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                  <span className="text-body text-body">스포츠 베팅 중심 운영</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                  <span className="text-body text-body">오전 9시~자정 고객센터 ��영</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                  <span className="text-body text-body">평균 환전 처리 시간: 10분 이내</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                  <span className="text-body text-body">모바일 앱 미제공 (웹 전용)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIER INFO ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-8">Tier 등급 정보</h2>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-100 to-gray-100 border-2 border-slate-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                  <path d="M20 4L8 9v10c0 7 5.5 12.5 12 14.5C27.5 31.5 33 26 33 19V9L20 4z" fill="white" opacity="0.9"/>
                  <path d="M14 20l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"/>
                </svg>
              </div>
              <div>
                <h3 className="text-h3 text-heading">Silver Tier</h3>
                <p className="text-body-sm text-slate-600">중간 등급 보증업체</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white/80">
                <p className="text-label text-slate-600 mb-1">보증금 조건</p>
                <p className="text-body font-semibold text-heading">1~5억 원 충족</p>
              </div>
              <div className="p-4 rounded-lg bg-white/80">
                <p className="text-label text-slate-600 mb-1">운영 연차 조건</p>
                <p className="text-body font-semibold text-heading">1~3년 충족</p>
              </div>
              <div className="p-4 rounded-lg bg-white/80">
                <p className="text-label text-slate-600 mb-1">환전 처리 조건</p>
                <p className="text-body font-semibold text-heading">정상 처리 확인</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHANGE HISTORY ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-8">변경 이력</h2>
          <div className="space-y-4">
            {[
              { date: '2025.04.12', type: '정기 검증', desc: '분기 정기 검증 완료 — 운영 정보 변동 없음' },
              { date: '2025.02.20', type: '제보 접수', desc: '환전 지연 제보 1건 — 24시간 내 처리 완료 확인' },
              { date: '2025.01.08', type: '정기 검증', desc: '분기 정기 검증 완료 — Silver Tier 유지' },
              { date: '2024.10.15', type: '신규 등록', desc: 'Silver Tier로 신규 등록 (보증금 2억 원 확인)' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-slate-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-label text-slate-600">{item.date}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      item.type === '제보 접수' 
                        ? 'bg-amber-100 text-amber-700' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>{item.type}</span>
                  </div>
                  <p className="text-body text-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VERIFICATION STATUS ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-8">검증 상태</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-green-50 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-h4 text-heading">검증 통과</h3>
              </div>
              <p className="text-body text-body" style={{ wordBreak: 'keep-all' }}>
                2025년 2분기 정기 검증을 통과했습니다. 다음 검증 예정일은 2025년 7월입니다.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-amber-50 border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                <h3 className="text-h4 text-heading">제보 이력</h3>
              </div>
              <p className="text-body text-body" style={{ wordBreak: 'keep-all' }}>
                환전 지연 제보 1건이 접수되었으나 24시간 내 정상 처리되어 등급 유지 중입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VERIFICATION ITEMS ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-8">검증 항목별 통과 현황</h2>
          <p className="text-body-lg text-body max-w-2xl mb-10 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            비스팟은 안심고고의 5단계 검증 프로세스의 주요 항목을 충족하여 Silver Tier로 분류되었습니다.
          </p>
          <div className="space-y-4">
            {[
              { title: '운영 안정성', desc: '2년 이상 운영 중 + 1건 누적 제보', status: 'pass' },
              { title: '자본금 검증', desc: '보증금 2억 원 확인 + 운영사 공시 자료 일치', status: 'pass' },
              { title: '입출금 속도', desc: '평균 환전 처리 10분 이내 + 지연 1건', status: 'partial' },
              { title: '고객 응대', desc: '오전 9시~자정 운영 + 기본 응대 충족', status: 'pass' },
              { title: '보증금 예치', desc: '독립 은행 예치 확인 + 월 1회 재검증', status: 'pass' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-background border-2 border-slate-200">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.status === 'pass' 
                    ? 'bg-green-100' 
                    : 'bg-amber-100'
                }`}>
                  {item.status === 'pass' ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-body font-semibold text-heading mb-2">{item.title}</h3>
                  <p className="text-body-sm text-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <SectionFAQ 
        items={FAQ_ITEMS} 
        title="자주 묻는 질문"
        description="비스팟 보증업체 정보에 관한 자주 묻는 질문입니다."
      />

      {/* ── CTA SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-slate-100 border-b border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-h2 text-heading mb-6">다른 보증업체도 확인하세요</h2>
          <p className="text-body-lg text-body max-w-2xl mx-auto mb-10" style={{ wordBreak: 'keep-all' }}>
            Gold·Silver·Bronze Tier 보증업체 전체 목록을 확인하거나, 문제 발생 시 제보할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/safety/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-600 text-white text-body-sm font-semibold hover:bg-slate-700 transition-colors"
            >
              <Shield className="w-4 h-4" />
              보증업체 전체 목록
            </a>
            <a
              href="/review/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border-2 border-slate-300 text-slate-700 text-body-sm font-semibold hover:border-slate-400 transition-colors"
            >
              <AlertTriangle className="w-4 h-4" />
              먹튀검증 제보
            </a>
          </div>
        </div>
      </section>

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="safety" />
    </main>
  )
}
