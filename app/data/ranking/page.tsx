import { ChevronRight, Trophy, Award, Medal, TrendingUp, Calendar, Shield, BarChart3 } from 'lucide-react'
import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

const FAQ_ITEMS = [
  {
    q: '보증업체 랭킹 1위가 가장 안전하다고 볼 수 있나요?',
    a: '랭킹 1위는 4 항목 합산 결과의 상대 분류 결과이며 절대적 안전 순위가 아닙니다. 안심고고는 안전을 단정하는 라벨을 사용하지 않고 점검 시점 데이터와 마지막 검증일을 함께 표기하므로, 사용자는 랭킹과 함께 마지막 검증일·누적 제보 건수·변경 이력을 함께 확인한 뒤에 판단하는 것이 권장됩니다.',
  },
  {
    q: '분기 변동에 강등 사례가 있다는 것은 무엇을 의미하나요?',
    a: '분기 변동은 5단계 검증 항목 중 하나라도 미충족된 사이트가 발생했다는 자연스러운 운영 결과이며, 강등이나 디렉토리 제외 사례 자체가 안심고고 검증 시스템이 분기마다 동일 기준으로 작동한다는 시그널입니다. 강등·제외 사유는 분기 리포트 페이지의 사유 카테고리별 통계로 함께 공개되어 사용자가 직접 비교 확인할 수 있습니다.',
  },
  {
    q: '데이터셋을 외부 매체나 보고서에 인용해도 되나요?',
    a: '안심고고 데이터셋은 출처 표기를 조건으로 누구나 인용할 수 있으며, 안심고고 분기 리포트와 갱신 일시를 함께 표기하면 외부 매체·학술 보고서·정책 자료 등에서 자유롭게 사용할 수 있습니다. 다만 데이터셋 무단 변형 사용은 권장되지 않으며 인용 시 원본 데이터 시점을 명시하는 것이 권장됩니다.',
  },
]

export default function RankingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <SectionHero
        label="Tier Ranking"
        title="보증업체 랭킹 — Tier별 + 분기 변동 통계"
        description="Gold·Silver·Bronze Tier별 / 정렬 기준 4종 / 분기 변동 / CSV 데이터셋 다운로드 안내"
        icon={Trophy}
        variant="accent"
      />

      {/* WHAT IS RANKING */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-h2 text-heading mb-6">보증업체 랭킹은 어떻게 산정되나요</h2>
            <div className="space-y-4">
              <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                보증업체 랭킹은 안심고고가 데이터센터 분기 점검에서 산정한 검증 통과 사이트 내부 상대 분류 라벨이며, 절대적인 안전 순위가 아니라 누적 운영 연차·보증금 규모·환전 처리 이력·누적 제보 건수 4 항목을 합산해 산정한 시점별 분류 결과입니다.
              </p>
              <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                분기마다 동일 기준을 재적용해 변동 사항이 표에 반영되고 변경 사유가 함께 기록됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SORTING CRITERIA */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">정렬 기준 4종</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              랭킹 표에서 사용자가 직접 정렬 순서를 변경할 수 있는 4가지 핵심 기준이며, 각 기준은 안심고고 분기 점검 항목과 동일하게 운영되어 사용자가 본인 관심 기준으로 사이트를 직접 비교 확인할 수 있도록 본 페이지 랭킹 표 헤더에 일관 표기됩니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                title: '운영 연차',
                desc: '운영 시작일 기준 누적 기간 (오래 운영된 순)',
              },
              {
                title: '보증금 규모',
                desc: '입점 시 확인 + 분기 재확인된 수치 (높은 순)',
              },
              {
                title: '환전 처리 이력',
                desc: '환전 지연 누적 제보 비율 (낮은 순)',
              },
              {
                title: '누적 제보 건수',
                desc: '5건 이상 공개 정책 기준 (적은 순)',
              },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border border-border/50">
                <h3 className="text-h4 text-heading mb-2"><strong>{item.title}</strong></h3>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUARTERLY CHANGES */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">분기 변동 통계</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              분기마다 자동 갱신되는 랭킹 변동 통계이며, Tier 강등·승급·디렉토리 제외 사례가 분기별 사유 카테고리와 함께 기록되어 사용자가 어떤 사이트가 어느 시점에 어떻게 변동됐는지 본 페이지에서 직접 비교 확인할 수 있도록 운영됩니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                title: 'Tier 강등',
                desc: '분기별 [N]건 / 강등 사유 분포',
              },
              {
                title: 'Tier 승급',
                desc: '분기별 [N]건 / 승급 항목 분포',
              },
              {
                title: '디렉토리 제외',
                desc: '분기별 [N]건 / 제외 사유 분포',
              },
              {
                title: '신규 입점',
                desc: '입점 신청 통과 후 등록 [N]건',
              },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-secondary border border-border/50">
                <h3 className="text-h4 text-heading mb-2"><strong>{item.title}</strong></h3>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-body-sm text-body text-center mt-8" style={{ wordBreak: 'keep-all' }}>
            분기별 변동은 분기 리포트 페이지에서 누적 통계와 함께 공개됩니다.
          </p>
        </div>
      </section>

      {/* DATASET DOWNLOAD */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">데이터셋 다운로드 안내</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              보증업체 랭킹 데이터셋은 PDF·CSV 형태로 안심고고 데이터센터에서 누구나 직접 다운받을 수 있도록 공개되며, 데이터 출처·라이선스 정보·갱신 일시가 함께 표기되어 사용자가 비교 분석·인용·외부 자료 제작에 자유롭게 사용할 수 있습니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                title: 'PDF 리포트',
                desc: '분기별 종합 리포트 + 시각화 차트',
              },
              {
                title: 'CSV 데이터셋',
                desc: 'Tier·운영 연차·보증금·제보 건수 원자료',
              },
              {
                title: '라이선스 표기',
                desc: '출처 표기 필수 / 무단 변형 사용 권장 X',
              },
              {
                title: '갱신 주기',
                desc: '분기마다 갱신 일시 함께 표기',
              },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border border-border/50">
                <h3 className="text-h4 text-heading mb-2"><strong>{item.title}</strong></h3>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{item.desc}</p>
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
