'use client'

import { ChevronRight, AlertTriangle, Shield, FileText, Clock, ExternalLink } from 'lucide-react'
import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

const FAQ_ITEMS = [
  {
    q: '먹튀폴리스 추천이 안심고고 검증과 다른 이유는 무엇인가요?',
    a: '먹튀폴리스는 사이트 리스트를 "추천" 형태로 제공하지만 안심고고는 추천이라는 표현을 사용하지 않습니다. 안심고고는 5단계 검증을 통과한 사이트에 Tier 라벨만 부여하고 마지막 검증일과 변경 이력을 함께 표기하므로 사용자가 직접 비교 확인한 뒤에 판단하도록 유도합니다. 특정 사이트를 권유하거나 보장하지 않고 점검 시점 데이터를 투명하게 공개하는 구조입니다.',
  },
  {
    q: '먹튀폴리스 보증업체가 안심고고에서 다른 Tier를 받을 수 있나요?',
    a: '네. 먹튀폴리스 리스트에 등록된 사이트가 안심고고 5단계 검증을 신청하면 별도 점검이 진행됩니다. 검증 결과에 따라 Gold·Silver·Bronze Tier가 산정되거나 기준 미달 시 디렉토리에 등록되지 않을 수 있습니다. 외부 추천 리스트 등록 여부와 안심고고 Tier는 연동되지 않고 각 플랫폼 기준이 다르기 때문에 동일 사이트라도 결과가 달라질 수 있습니다.',
  },
  {
    q: '먹튀폴리스에서 확인한 사이트를 안심고고에서 다시 조회하는 이유가 있나요?',
    a: '두 플랫폼의 점검 시점과 항목이 다르기 때문입니다. 안심고고는 운영 정보 일치·보증금 확인·제보 패턴·변경 이력·분기 재점검 5단계를 분기마다 동일 기준으로 반복 점검하고 마지막 검증일을 표기하므로 다른 플랫폼에서 확인한 사이트도 안심고고에서 재조회하면 최근 변경 이력과 누적 제보 데이터를 추가로 확인할 수 있습니다.',
  },
]

export default function MeoktuPoliceReviewPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <SectionHero
        label="검증 사이트 리뷰"
        title="먹튀폴리스 리뷰 — 안심고고 검증 비교"
        description="먹튀폴리스 구조 요약 / 안심고고와 운영 방식 차이 / 사용자가 두 플랫폼을 함께 활용하는 방법"
        icon={Shield}
        variant="accent"
      />

      {/* INTRO */}
      <section className="py-32 md:py-40 px-6 md:px-20 bg-background border-b-2 border-border/50">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-h2 text-heading mb-6">먹튀폴리스는 어떤 사이트인가요</h2>
            <div className="space-y-4">
              <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                먹튀폴리스는 토토 사이트 정보와 먹튀 사례를 수집해 사용자에게 제공하는 검증 커뮤니티 형태의 플랫폼이며, 보증업체 리스트와 먹튀 신고 게시판을 운영하고 있습니다.
              </p>
              <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                안심고고가 먹튀폴리스를 리뷰하는 이유는 두 플랫폼의 운영 방식과 검증 기준이 다르기 때문이며, 사용자가 두 플랫폼을 함께 활용할 때 어떤 차이를 인지해야 하는지 안내하기 위함입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-32 md:py-40 px-6 md:px-20 bg-secondary border-b-2 border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-heading mb-6">운영 방식 비교</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              먹튀폴리스와 안심고고의 검증 방식과 정보 제공 구조를 비교합니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                title: '검증 기준',
                meoktu: '자체 기준 보증업체 선정',
                ansim: '5단계 검증 (운영 정보·보증금·제보·이력·재점검)',
              },
              {
                title: '라벨 표기',
                meoktu: '"추천" 형태 리스트',
                ansim: 'Tier 라벨 (Gold/Silver/Bronze) + 마지막 검증일',
              },
              {
                title: '갱신 주기',
                meoktu: '수시 업데이트',
                ansim: '분기 단위 전체 재점검',
              },
              {
                title: '변경 이력',
                meoktu: '제한적 공개',
                ansim: '주소 변경·운영 정보 변동 타임라인 공개',
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-background border-2 border-transparent hover:border-primary/50 hover:shadow-md transition-all">
                <h3 className="text-h4 text-heading mb-4 font-semibold">{item.title}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-secondary">
                    <p className="text-label text-body mb-2">먹튀폴리스</p>
                    <p className="text-body-sm text-body">{item.meoktu}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/10">
                    <p className="text-label text-primary mb-2">안심고고</p>
                    <p className="text-body-sm text-body">{item.ansim}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="py-32 md:py-40 px-6 md:px-20 bg-background border-b-2 border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-heading mb-6">두 플랫폼 함께 활용하는 방법</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              먹튀폴리스와 안심고고를 함께 활용하면 더 넓은 범위의 정보를 교차 확인할 수 있습니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                n: '1',
                title: '1차 조회',
                desc: '먹튀폴리스에서 관심 사이트 기본 정보 확인',
              },
              {
                n: '2',
                title: '2차 검증',
                desc: '안심고고에서 동일 사이트 검색 → Tier·마지막 검증일·변경 이력 확인',
              },
              {
                n: '3',
                title: '제보 데이터 비교',
                desc: '두 플랫폼의 누적 제보 건수와 패턴 교차 확인',
              },
              {
                n: '4',
                title: '최종 판단',
                desc: '두 플랫폼 데이터를 종합해 사용자 본인이 직접 판단',
              },
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-xl bg-secondary border-2 border-transparent hover:border-primary/50 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-body-sm shadow-sm">
                    {step.n}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-h4 text-heading mb-2 font-semibold">{step.title}</h3>
                    <p className="text-body-sm text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-7 rounded-xl bg-accent border-2 border-border/50 shadow-sm max-w-3xl mx-auto">
            <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              안심고고는 먹튀폴리스를 포함한 다른 검증 플랫폼의 결과를 부정하거나 대체하지 않습니다. 사용자가 여러 플랫폼 데이터를 교차 확인하도록 안내하는 것이 안심고고의 역할입니다.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <SectionFAQ
        title="먹튀폴리스 리뷰 FAQ"
        description="먹튀폴리스와 안심고고 비교에 관한 자주 묻는 질문"
        items={FAQ_ITEMS}
      />

      {/* CATEGORIES */}
      <SectionCategories
        title="관련 카테고리"
        description="함께 확인하면 좋은 페이지"
      />
    </main>
  )
}
