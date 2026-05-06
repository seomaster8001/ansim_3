'use client'

import { AlertTriangle, Shield, Clock, TrendingDown, BarChart3, FileText } from 'lucide-react'
import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

const FAQ_ITEMS = [
  {
    q: '먹튀폴리스 후기에 [확인 필요] 라벨이 붙은 의미는 무엇인가요',
    a: '[확인 필요] 라벨은 안심고고 자체 분류 3단계 중 중간 단계 표기이며, 먹튀폴리스가 위험하다고 단정하는 표현이 아니라 사용자 제보 누적과 자체 점검 결과 사이에 보강 데이터가 더 필요한 상태를 사용자에게 명시한 분류 라벨입니다. 다음 분기 재점검 시점에 추가 데이터가 누적되면 [검증 통과] 또는 [확인 불가]로 분류 변동될 수 있으며, 누적 제보가 강등 임계를 넘으면 디렉토리 제외 처리되는 동적 분류 정책으로 운영됩니다.',
  },
  {
    q: '먹튀폴리스 이용 중 환전 지연을 직접 겪었으면 어디로 알려야 하나요',
    a: '먹튀폴리스 이용 중 환전 지연이나 운영 정보 불일치 같은 문제를 직접 겪으셨다면 안심고고 제보 폼(/support/contact/)으로 즉시 알려 주시기 바랍니다. 같은 사이트에 누적 제보가 강등 임계를 넘으면 다음 분기 점검에서 [확인 불가] 강등 또는 디렉토리 제외 처리 여부가 우선 검토되며, 사용자 보호를 위해 피해예방 가이드(/guide/) 항목도 함께 확인하시는 것이 권장됩니다.',
  },
  {
    q: '안심고고는 외부 신고 기관과 어떻게 다른가요',
    a: '안심고고는 외부 공공·신뢰 출처 기관과 별개로 운영되는 자체 정보 디렉토리이며, 외부 기관의 신고나 처리 결과를 인용하는 대신 자체 데이터와 사용자 제보 누적치만으로 분류 라벨을 부여합니다. 외부 신고가 필요한 사례는 안심고고 약관(/support/terms/) 페이지에 안내된 신고 경로로 별도 진행하시면 되며, 안심고고 분류는 외부 처리와 독립적으로 분기 단위로 일관 운영되어 사용자가 두 채널을 함께 활용할 수 있도록 구성됩니다.',
  },
]

export default function MeoktuPoliceReviewPage() {
  return (
    <main>
      <SectionHero
        label="먹튀검증"
        title="먹튀폴리스 후기 — 객관 분석"
        description="안심고고 분류 [확인 필요] / 누적 제보 [N]건 / 마지막 확인일 2026-04-28 / 위험 신호 5종 추적"
        icon={AlertTriangle}
        variant="accent"
      />

      {/* ── 한 줄 결론 ── */}
      <section className="py-32 md:py-40 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-8">먹튀폴리스 후기 한 줄 결론</h2>
          <div className="space-y-5">
            <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              먹튀폴리스에 대해 안심고고가 자체 데이터와 사용자 제보 누적치를 기반으로 분석한 후기 정보이며, 운영 정보 일치 여부와 환전 지연 패턴 항목에서 보강 데이터가 누적돼 [확인 필요] 분류로 표기된 사이트로, 본 페이지는 단정 라벨 대신 시점·수치·패턴 형태로 사실 정보를 정리합니다.
            </p>
            <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              본 페이지의 모든 수치는 안심고고 자체 점검과 사용자 제보 데이터이며 외부 출처 인용은 하지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 분류 결과 ── */}
      <section className="py-32 md:py-40 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">안심고고 분류 결과 (확인 필요로 분류된 이유)</h2>
          <p className="text-body-lg text-body leading-relaxed mb-10" style={{ wordBreak: 'keep-all' }}>
            먹튀폴리스가 [확인 필요] 분류에 등록된 이유는 5단계 점검 중 일부 항목에서 사용자 제보 누적 패턴과 자체 점검 결과 사이에 차이가 확인됐기 때문이며, 안심고고 <a href="/review/" className="text-primary hover:underline font-semibold">먹튀검증</a> 디렉토리 안에서 다음 분기 재점검 시점에 추가 데이터가 모이면 분류가 변경되거나 디렉토리 제외 처리되도록 정책이 운영됩니다.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { label: '분류 라벨', value: '[확인 필요] (검증 통과·확인 불가·확인 필요 3분류 중 중간 단계)' },
              { label: '분류 근거', value: '사용자 제보 누적 [N]건 + 운영 정보 일부 변동 확인' },
              { label: '분류 시점', value: '2026-Q1 점검부터 적용 / 다음 재점검 [N]일 후' },
              { label: '변동 가능성', value: '추가 제보 [N]건 누적 시 [확인 불가] 강등 검토' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-background border-2 border-transparent hover:border-primary/50 hover:shadow-md transition-all">
                <p className="text-label text-primary font-semibold mb-2">{item.label}</p>
                <p className="text-body text-heading font-medium" style={{ wordBreak: 'keep-all' }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 누적 제보 시간 흐름 ── */}
      <section className="py-32 md:py-40 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">누적 제보 시간 흐름 패턴</h2>
          <p className="text-body-lg text-body leading-relaxed mb-10" style={{ wordBreak: 'keep-all' }}>
            먹튀폴리스에 대해 안심고고가 받은 사용자 제보가 시점별로 어떤 분포로 누적됐는지 시간 흐름 순으로 정리한 데이터이며, 단일 시점 집중인지 분산 누적인지에 따라 위험 패턴 해석이 달라지므로 사용자가 직접 비교 확인할 수 있도록 분기별 수치를 표기합니다.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { period: '2026-Q1', value: '[N]건 (전체 누적의 [N]%)', icon: BarChart3 },
              { period: '2025-Q4', value: '[N]건 (이전 분기 대비 [증가/감소])', icon: TrendingDown },
              { period: '2025-Q3', value: '[N]건 (분류 시점 분기)', icon: Clock },
              { period: '누적 합계', value: '[N]건 (5건 이상 / 개별 사례 익명 분류 후 분기 리포트 반영)', icon: FileText },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-secondary border-2 border-transparent hover:border-primary/50 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-body font-semibold text-heading mb-1">{item.period}</p>
                  <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 반복 키워드 ── */}
      <section className="py-32 md:py-40 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">사용자 후기에서 반복되는 키워드</h2>
          <p className="text-body-lg text-body leading-relaxed mb-10" style={{ wordBreak: 'keep-all' }}>
            먹튀폴리스 후기 제보에서 반복적으로 등장하는 키워드를 안심고고 편집부가 익명 분류한 결과이며, 개별 작성자나 사이트별 단정 라벨 대신 키워드 출현 빈도 형태로 정리해 사용자가 어떤 측면에 주의가 필요한지 직접 비교 확인할 수 있도록 일관 구성합니다.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { keyword: '환전 지연', desc: '출금 처리 지연 또는 추가 인증 요구 패턴 ([N]건)' },
              { keyword: '운영 정보 변동', desc: '주소·고객센터·운영자 정보 변경 ([N]건)' },
              { keyword: '광고 행태', desc: '외부 채널 권유 안내 또는 이용 유도 패턴 ([N]건)' },
              { keyword: '추가 송금 요구', desc: '초기 입금 외 추가 입금 요청 패턴 ([N]건)' },
              { keyword: '기타 항목', desc: '위 4종 외 분류 어려운 사례 ([N]건 / 분기 리포트 별도 분류)' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-background border-2 border-transparent hover:border-primary/50 hover:shadow-md transition-all">
                <p className="text-h4 text-heading font-semibold mb-2">{item.keyword}</p>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 위험 신호 5종 ── */}
      <section className="py-32 md:py-40 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">위험 신호 5종 패턴 분석</h2>
          <p className="text-body-lg text-body leading-relaxed mb-10" style={{ wordBreak: 'keep-all' }}>
            안심고고가 [확인 필요] 분류 사이트에서 공통적으로 추적하는 위험 신호 5종이며, 먹튀폴리스 사례에서 어떤 패턴이 어떤 강도로 관찰됐는지 항목별로 비교해 사용자가 사이트 이용 전 직접 점검 항목으로 활용할 수 있도록 일관 정리합니다.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { n: '1', title: '출금 지연 패턴', desc: '안심고고 자체 데이터 기준 [관찰됨/관찰되지 않음]' },
              { n: '2', title: '운영 정보 변동', desc: '분기 점검에서 [N]회 확인' },
              { n: '3', title: '광고·권유 행태', desc: '외부 채널에서 [관찰됨/관찰되지 않음]' },
              { n: '4', title: '추가 송금 요구', desc: '사용자 제보 [N]건' },
              { n: '5', title: '고객센터 응답 변동', desc: '응답 시간 [관찰됨/관찰되지 않음]' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-secondary border-2 border-transparent hover:border-primary/50 hover:shadow-md transition-all">
                <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-body-sm font-bold shadow-sm">
                  {item.n}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-body font-semibold text-heading mb-1">{item.title}</p>
                  <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 비슷한 패턴 사이트 비교 ── */}
      <section className="py-32 md:py-40 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">비슷한 패턴 사이트 비교</h2>
          <p className="text-body-lg text-body leading-relaxed mb-10" style={{ wordBreak: 'keep-all' }}>
            먹튀폴리스와 유사한 분류 패턴을 보이는 사이트가 안심고고 <a href="/review/" className="text-primary hover:underline font-semibold">먹튀검증</a> 디렉토리 안에 어떤 분포로 등록돼 있는지 비교 정보이며, 사용자가 단일 사이트가 아닌 디렉토리 흐름 안에서 본 사이트의 상대 위치를 직접 확인할 수 있도록 구성됩니다.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { label: '유사 분류 사이트 수', value: '[N]개 (확인 필요 분류 전체 [N]개 중)' },
              { label: '유사 키워드 패턴', value: '환전 지연 + 운영 정보 변동 동시 관찰 사이트 [N]개' },
              { label: '분기 변동', value: '[N]개가 [확인 불가]로 강등 / [N]개가 디렉토리 제외 처리' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-background border-2 border-transparent hover:border-primary/50 hover:shadow-md transition-all">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-body font-semibold text-heading mb-1">{item.label}</p>
                  <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionFAQ
        title="자주 묻는 질문"
        description="먹튀폴리스 후기 관련 자주 묻는 질문입니다."
        items={FAQ_ITEMS}
      />

      <SectionCategories
        title="관련 페이지"
        description="안심고고 먹튀검증 디렉토리의 관련 페이지를 확인하세요."
        currentPath="/review/scam/meoktu-police/review/"
      />
    </main>
  )
}
