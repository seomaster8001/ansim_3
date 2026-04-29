import { BarChart3, TrendingUp, Calendar, Download, CheckCircle, Database, AlertCircle } from 'lucide-react'
import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'
import { CategoryHeroData } from '@/components/category-hero-data'

const FAQ_ITEMS = [
  {
    q: '보증업체 랭킹은 어떤 기준으로 정렬되나요',
    a: '보증업체 랭킹은 누적 운영 연차, 보증금 규모, 환전 처리 이력, 누적 제보 건수 네 항목을 합산해 산정한 분기 점검 결과의 상대 분류 라벨이며, 절대적인 안전 순위가 아닙니다. 분기마다 동일 기준으로 재점검해 변동 사항이 표에 반영되고 변경 사유가 함께 기록되어 사용자가 직접 비교 확인할 수 있도록 안내합니다.',
  },
  {
    q: '분기 리포트 데이터셋은 누구나 다운받을 수 있나요',
    a: '분기 리포트 데이터셋은 PDF·CSV 형태로 안심고고 데이터센터에서 누구나 다운받을 수 있도록 공개되며, 데이터 출처와 라이선스 정보가 함께 표기되어 사용자가 비교 분석이나 인용에 사용할 수 있습니다. 안심고고는 데이터셋의 무단 변형 사용을 권장하지 않으며 출처 표기와 갱신 일시 명시를 함께 안내합니다.',
  },
  {
    q: '데이터센터 자료는 결과를 단정해 주나요',
    a: '데이터센터 자료는 결과를 단정하지 않으며 관련 약속·보증 표현은 어떤 페이지에서도 사용하지 않습니다. 자료는 사용자가 사이트 안전 정보, 종목 일정, 분기별 변동 이력을 직접 비교할 때 보조 정보로 활용하는 용도이며, 안심고고는 검증·이력·보호 톤만 일관 유지하는 자체 분기 리포트 발행 디렉토리 역할만 수행합니다.',
  },
]

export default function DataPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      {/* ── HERO SECTION ── */}
      <SectionHero
        label="Data Center"
        title="데이터센터 — 보증업체 랭킹 + 분기 리포트 + 데이터셋"
        description="데이터센터 종합 hub — Tier 랭킹 / 분기 통계 / 경기 일정 / 인포그래픽 데이터셋"
        icon={BarChart3}
        variant="accent"
        widget={<CategoryHeroData />}
      />

      {/* ── ABOUT DATA CENTER SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">데이터센터는 어떤 자료를 다루나요</h2>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              데이터센터는 안심고고가 분기 단위로 자체 집계한 통계 자료를 데이터셋·랭킹·인포그래픽 형태로 정리해 공개하는 카테고리이며, 외부 권위 출처에 기대지 않고 안심고고 데이터 페이지에 자체 분기 리포트를 단일 출처 형태로 등록해 사용자가 데이터 시점과 갱신 일자를 직접 비교 확인할 수 있도록 운영합니다.
            </p>
            <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              다루는 자료는 사용자 의사 결정 보조용이며 결과 단정·적중 약속 자료는 다루지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── TIER RANKING SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">보증업체 Tier 랭킹</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              안심고고 디렉토리에 등록된 검증 통과 사이트를 Gold·Silver·Bronze Tier로 분류해 누적 운영 연차, 보증금 규모, 환전 처리 이력, 누적 제보 건수를 표 형태로 비교 노출합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              {
                tier: 'Gold',
                desc: '보증금 상위 + 운영 3년 이상 + 환전 지연 누적 0건',
                color: 'from-amber-400 to-yellow-500',
                textColor: 'text-amber-900',
              },
              {
                tier: 'Silver',
                desc: '보증금 중위 + 운영 1~3년 + 환전 정상 처리',
                color: 'from-slate-400 to-slate-500',
                textColor: 'text-slate-800',
              },
              {
                tier: 'Bronze',
                desc: '입점 1년 미만 + 분기 통과 (관찰 단계)',
                color: 'from-orange-500 to-amber-600',
                textColor: 'text-orange-900',
              },
            ].map((tier, i) => (
              <div key={i} className="p-6 rounded-xl bg-background border border-border/50 hover:shadow-md transition-all">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${tier.color} mb-4`}>
                  <span className="text-white font-bold text-h4">{tier.tier[0]}</span>
                </div>
                <h3 className="text-h4 text-heading mb-3">{tier.tier}</h3>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-accent border border-border/50">
            <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
              랭킹은 분기 점검 시점에 갱신되며 변경 사유가 함께 기록됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUARTERLY REPORT SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">분기 리포트와 데이터셋</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              누적 제보 건수, 환전 지연 패턴 비율, 주소 변경 빈도, Tier 변동 사례를 분기별로 정리해 공개하며, 데이터셋은 PDF·CSV 형태로 배포됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              {
                icon: TrendingUp,
                title: '누적 제보 통계',
                desc: '분기별 건수 + 사이트별 분포',
              },
              {
                icon: AlertCircle,
                title: '환전 지연 패턴',
                desc: '평균 지연 시간 + 분기 변화율',
              },
              {
                icon: CheckCircle,
                title: 'Tier 변동',
                desc: '강등·승급·디렉토리 제외 사례',
              },
              {
                icon: Database,
                title: '주소 변경',
                desc: '분기별 변경 빈도 분포',
              },
            ].map((item, i) => (
              <a
                key={i}
                href="/data/quarterly/"
                className="group flex items-start gap-4 p-5 rounded-xl bg-secondary border border-border/50 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-h4 text-heading mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-body-sm text-body">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-accent border border-border/50 flex items-center gap-4">
            <Download className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <h4 className="text-h4 text-heading mb-1">CSV 다운로드</h4>
              <p className="text-body-sm text-body">분기 리포트 페이지에서 직접 가능합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPORTS CALENDAR SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">경기 일정 데이터</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              스포츠 분석 카테고리에서 사용되는 경기 일정·라이브 통계는 경기 일정 데이터셋 형태로 등록되며, 데이터 출처와 갱신 주기가 페이지 하단에 표기됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'KBO·MLB·EPL',
                desc: '종목별 일정 분기 단위 갱신',
              },
              {
                title: '시작 시각',
                desc: '한국 시간 기준 표기',
              },
              {
                title: '팀 정보',
                desc: '홈/원정 분류 + 최근 폼',
              },
              {
                title: '갱신 주기',
                desc: '종목별 API 응답 기준',
              },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="text-h4 text-heading">{item.title}</h3>
                </div>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <SectionFAQ 
        items={FAQ_ITEMS} 
        description="데이터센터와 리포트에 대한 자주 묻는 질문입니다."
      />

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="data" />
    </main>
  )
}
