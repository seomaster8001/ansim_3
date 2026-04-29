import { Shield, Clock, Banknote, Calendar, CheckCircle, AlertTriangle, ChevronRight, FileText, TrendingUp, AlertCircle } from 'lucide-react'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

export const metadata = {
  title: '윈벳 — Bronze Tier 보증업체 상세 | 안심고고',
  description: '윈벳의 보증금·운영 연차·마지막 검증일·변경 이력을 한눈에 확인하세요.',
}

const FAQ_ITEMS = [
  {
    q: '윈벳의 Bronze Tier 등급은 어떤 기준으로 부여됐나요?',
    a: '보증금 하위권(1억 원 미만), 운영 연차 1년 미만 또는 제보 건수 2건 이하 중 하나에 해당하여 Bronze Tier로 분류되었습니다. 분기마다 재점검을 진행하며, Silver/Gold Tier 조건 충족 시 등급이 상향될 수 있습니다.',
  },
  {
    q: '윈벳의 보증금 정보는 어떻게 확인되나요?',
    a: '안심고고는 자체 검증 프로세스를 통해 보증금 정보를 수집하며, 운영사 공시 자료와 사용자 제보를 교차 검증합니다. 정확한 금액은 변동될 수 있으므로 마지막 검증일을 함께 확인하세요.',
  },
  {
    q: '윈벳에 문제가 발생하면 어떻게 제보하나요?',
    a: '안심고고 제보 폼을 통해 사이트명, 발생 일시, 금액, 증빙 자료를 제출할 수 있습니다. 제보 내용은 편집부 검토 후 변경 이력에 반영됩니다.',
  },
]

export default function BronzeWinbetPage() {
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
      <section className="bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100 border-b-4 border-orange-300 py-32 md:py-40 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Tier Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                <circle cx="20" cy="18" r="12" fill="white" opacity="0.9"/>
                <circle cx="20" cy="18" r="8" fill="white" opacity="0.3"/>
                <path d="M20 12v4m0 4h.01" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.95"/>
                <rect x="16" y="30" width="8" height="4" rx="1" fill="white" opacity="0.9"/>
                <rect x="14" y="34" width="12" height="2" rx="1" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-orange-200 text-orange-800 text-label font-bold">Bronze Tier</span>
          </div>

          {/* Title */}
          <h1 className="text-h1 text-heading mb-6 leading-tight" style={{ wordBreak: 'keep-all' }}>
            윈벳 — Bronze Tier 보증업체 상세
          </h1>

          {/* Subtitle */}
          <p className="text-body-lg text-body max-w-3xl mb-10 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            윈벳의 보증금·운영 연차·마지막 검증일·변경 이력을 한눈에 확인하세요.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/80 border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <Banknote className="w-4 h-4 text-orange-600" />
                <span className="text-label text-orange-700">보증금</span>
              </div>
              <p className="text-h3 text-heading font-bold">8천만 원</p>
            </div>
            <div className="p-4 rounded-xl bg-white/80 border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-orange-600" />
                <span className="text-label text-orange-700">운영 연차</span>
              </div>
              <p className="text-h3 text-heading font-bold">9개월</p>
            </div>
            <div className="p-4 rounded-xl bg-white/80 border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-orange-600" />
                <span className="text-label text-orange-700">마지막 검증</span>
              </div>
              <p className="text-h3 text-heading font-bold">2025.04.10</p>
            </div>
            <div className="p-4 rounded-xl bg-white/80 border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-orange-600" />
                <span className="text-label text-orange-700">제보 건수</span>
              </div>
              <p className="text-h3 text-heading font-bold">2건</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAUTION NOTICE ── */}
      <section className="py-8 px-6 md:px-20 bg-orange-50 border-b-2 border-orange-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
            <p className="text-body-sm text-orange-800" style={{ wordBreak: 'keep-all' }}>
              Bronze Tier는 검증 조건을 최소 충족한 등급입니다. 이용 전 운영 이력과 제보 내역을 충분히 확인하시기 바랍니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── OPENING ANSWER ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl bg-orange-50 border-2 border-orange-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-orange-700" />
              </div>
              <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                윈벳은 2024년 7월 운영을 시작해 9개월 운영 중인 신생 사이트입니다. 보증금 8천만 원을 유지하고 있으며, 환전 지연 제보 2건이 접수되어 Bronze Tier 등급으로 분류되었습니다. 두 건 모두 48시간 내 처리되었으나, 운영 연차가 1년 미만이므로 추가 모니터링이 필요한 상태입니다.
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
                alt="윈벳 메인 화면" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-h3 text-heading mb-4">윈벳 (WinBet)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-body text-body">스포츠 베팅 전문</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-body text-body">오후 2시~밤 10시 고객센터 운영</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-body text-body">평균 환전 처리 시간: 30분~1시간</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-body text-body">모바일 최적화 미완료</span>
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
          <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 border-2 border-orange-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                  <circle cx="20" cy="18" r="12" fill="white" opacity="0.9"/>
                  <circle cx="20" cy="18" r="8" fill="white" opacity="0.3"/>
                  <path d="M20 12v4m0 4h.01" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.95"/>
                </svg>
              </div>
              <div>
                <h3 className="text-h3 text-heading">Bronze Tier</h3>
                <p className="text-body-sm text-orange-700">최소 검증 통과 등급</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white/80">
                <p className="text-label text-orange-700 mb-1">보증금 조건</p>
                <p className="text-body font-semibold text-heading">1억 원 미만</p>
              </div>
              <div className="p-4 rounded-lg bg-white/80">
                <p className="text-label text-orange-700 mb-1">운영 연차 조건</p>
                <p className="text-body font-semibold text-heading">1년 미만</p>
              </div>
              <div className="p-4 rounded-lg bg-white/80">
                <p className="text-label text-orange-700 mb-1">제보 건수 조건</p>
                <p className="text-body font-semibold text-heading">2건 이하 허용</p>
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
              { date: '2025.04.10', type: '정기 검증', desc: '분기 정기 검증 완료 — Bronze Tier 유지' },
              { date: '2025.03.15', type: '제보 접수', desc: '환전 지연 제보 2건차 — 48시간 내 처리 완료' },
              { date: '2025.02.01', type: '제보 접수', desc: '환전 지연 제보 1건차 — 36시간 내 처리 완료' },
              { date: '2025.01.05', type: '정기 검증', desc: '분기 정기 검증 완료 — 운영 정보 변동 없음' },
              { date: '2024.10.01', type: '신규 등록', desc: 'Bronze Tier로 신규 등록 (보증금 8천만 원 확인)' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-label text-orange-700">{item.date}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      item.type === '제보 접수' 
                        ? 'bg-red-100 text-red-700' 
                        : item.type === '신규 등록'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-orange-100 text-orange-700'
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
            <div className="p-6 rounded-xl bg-amber-50 border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                <h3 className="text-h4 text-heading">모니터링 중</h3>
              </div>
              <p className="text-body text-body" style={{ wordBreak: 'keep-all' }}>
                운영 연차 1년 미만으로 추가 모니터링이 진행 중입니다. 제보 건수 누적 시 등급 재검토 대상입니다.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-red-50 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-h4 text-heading">제보 이력</h3>
              </div>
              <p className="text-body text-body" style={{ wordBreak: 'keep-all' }}>
                환전 지연 제보 2건이 접수되었습니다. 3건 이상 누적 시 검증 재검토 및 등급 제외 대상이 됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <SectionFAQ 
        items={FAQ_ITEMS} 
        title="자주 묻는 질문"
        description="윈벳 보증업체 정보에 관한 자주 묻는 질문입니다."
      />

      {/* ── CTA SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-orange-50 border-b border-orange-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-h2 text-heading mb-6">다른 보증업체도 확인하세요</h2>
          <p className="text-body-lg text-body max-w-2xl mx-auto mb-10" style={{ wordBreak: 'keep-all' }}>
            Gold·Silver·Bronze Tier 보증업체 전체 목록을 확인하거나, 문제 발생 시 제보할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/safety/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 text-white text-body-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              <Shield className="w-4 h-4" />
              보증업체 전체 목록
            </a>
            <a
              href="/review/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border-2 border-orange-300 text-orange-700 text-body-sm font-semibold hover:border-orange-400 transition-colors"
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
