import { ChevronRight, Trophy, Award, Medal, TrendingUp, Calendar, Shield, BarChart3 } from 'lucide-react'
import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

const FAQ_ITEMS = [
  {
    q: 'Tier 등급은 어떻게 결정되나요?',
    a: '5단계 검증(운영 정보 일치, 보증금 확인, 제보 패턴, 변경 이력, 재점검 준수)을 모두 통과한 사이트에 Gold·Silver·Bronze Tier가 부여됩니다. 운영 기간, 보증금 규모, 환전 지연 제보 건수 등을 종합해 등급이 산정됩니다.',
  },
  {
    q: '랭킹은 얼마나 자주 갱신되나요?',
    a: '랭킹은 분기 단위로 재점검 결과를 반영해 갱신됩니다. 분기 중 중대한 변동(환전 지연 다발, 주소 변경 등)이 발생하면 즉시 반영될 수 있습니다.',
  },
  {
    q: '랭킹에서 제외되는 경우는 언제인가요?',
    a: '분기 점검에서 기준 미달 시 Tier 강등 또는 디렉토리 제외 조치가 이뤄집니다. 환전 지연 제보 누적 5건 이상, 주소 변경 후 운영 정보 불일치 등이 주요 사유입니다.',
  },
]

export default function RankingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <SectionHero
        label="Tier Ranking"
        title="보증업체 Tier 랭킹 — 등급별 순위와 변동 현황"
        description="검증 통과 사이트의 Tier 등급별 랭킹을 확인하세요. 분기마다 재점검 결과를 반영해 갱신됩니다."
        icon={Trophy}
        variant="accent"
      />

      {/* TIER OVERVIEW */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">Tier 등급 구조</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              안심고고 보증업체는 5단계 검증을 통과한 후 운영 기간, 보증금 규모, 제보 이력에 따라 3개 Tier로 분류됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Trophy,
                name: 'Gold',
                label: '최상위 등급',
                criteria: '보증금 상위 + 운영 3년 이상 + 환전 지연 제보 0건',
                bg: 'bg-amber-50',
                border: 'border-amber-200',
                iconBg: 'bg-gradient-to-br from-amber-400 to-yellow-500',
              },
              {
                icon: Award,
                name: 'Silver',
                label: '중간 등급',
                criteria: '보증금 중위 + 운영 1~3년 + 환전 처리 정상',
                bg: 'bg-slate-50',
                border: 'border-slate-200',
                iconBg: 'bg-gradient-to-br from-slate-400 to-slate-500',
              },
              {
                icon: Medal,
                name: 'Bronze',
                label: '입점 초기',
                criteria: '입점 1년 미만 + 분기 점검 통과 (관찰 단계)',
                bg: 'bg-orange-50',
                border: 'border-orange-200',
                iconBg: 'bg-gradient-to-br from-orange-500 to-amber-600',
              },
            ].map((tier, i) => (
              <div key={i} className={`p-6 rounded-xl ${tier.bg} border ${tier.border} hover:shadow-md transition-all`}>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${tier.iconBg} mb-5 shadow-sm`}>
                  <tier.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-label text-body mb-2">{tier.label}</p>
                <h3 className="text-h3 text-heading mb-3">{tier.name}</h3>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                  {tier.criteria}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RANKING CRITERIA */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">랭킹 산정 기준</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              동일 Tier 내 순위는 다음 4가지 기준을 종합해 산정됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Calendar,
                title: '운영 기간',
                desc: '운영 시작일 기준 연속 운영 기간',
              },
              {
                icon: Shield,
                title: '보증금 규모',
                desc: '사이트 측 공시 보증금 수치',
              },
              {
                icon: TrendingUp,
                title: '제보 이력',
                desc: '환전 지연·추가 입금 요구 제보 건수',
              },
              {
                icon: BarChart3,
                title: '변경 이력',
                desc: '주소 변경 빈도, 운영 정보 변동 횟수',
              },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-h4 text-heading mb-1">{item.title}</h3>
                    <p className="text-body-sm text-body">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPDATE CYCLE */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">갱신 주기와 변동 정책</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              랭킹은 분기 재점검 결과를 반영해 갱신되며, 변동 사유는 데이터센터 분기 리포트에 공개됩니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { title: '분기 재점검', desc: '5단계 검증 항목 전체 재확인 후 랭킹 반영' },
              { title: 'Tier 승격', desc: '기준 충족 시 다음 분기부터 상위 Tier 적용' },
              { title: 'Tier 강등', desc: '기준 미달 시 Tier 강등 또는 디렉토리 제외' },
              { title: '변동 이력 공개', desc: '모든 Tier 변동은 사유와 함께 데이터센터에 기록' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-secondary border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-body-sm">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-body font-medium text-heading mb-1">{item.title}</h3>
                    <p className="text-body-sm text-body">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <SectionFAQ
        items={FAQ_ITEMS}
        description="보증업체 Tier 랭킹에 대한 자주 묻는 질문을 정리했습니다."
      />

      {/* RELATED CATEGORIES */}
      <SectionCategories currentPage="data" />
    </main>
  )
}
