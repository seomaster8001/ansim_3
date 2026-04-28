import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'
import { Database, Users, BookOpen, Shield, Eye, Zap, AlertCircle, Lock } from 'lucide-react'

const FAQ_ITEMS = [
  {
    q: '안심고고는 사이트를 권유하거나 이용을 안내하나요',
    a: '안심고고는 사이트 권유나 이용 유도 자료를 어떤 페이지에서도 다루지 않으며 검증 통과 보증업체 디렉토리, 먹튀 의심 사이트 조회, 분기 리포트 같은 정보 자료만 제공합니다. 사용자가 직접 비교 확인할 수 있도록 안내 톤만 유지하며 권유 채널이나 마케팅 채널 역할은 일절 수행하지 않습니다.',
  },
  {
    q: '안심고고는 공공기관과 협력 관계가 있나요',
    a: '안심고고는 공공기관이 아니며 어떤 공공기관·민간 조회처와도 협력·소속·제휴 관계가 일절 없습니다. 신고 경로 안내가 필요한 경우 공개된 자료를 참고할 수 있도록 이용약관 페이지의 "관련 신고 경로 안내" 섹션 한 곳에서만 외부 신고 경로를 안내하며, 그 외 페이지 본문에는 외부 출처를 박지 않습니다.',
  },
  {
    q: '안심고고에 정보 갱신이나 제보를 하려면 어떻게 하나요',
    a: '사이트 정보 변경이나 사용자 제보는 제보 폼으로 직접 접수할 수 있으며 익명 제보도 정상적으로 처리됩니다. 누적 제보가 5건 이상 모이면 분기 리포트에 사례별로 분류 결과가 외부 공개되며, 5건 미만 시점에는 비공개 상태로 다른 사이트별 운영 시그널과 함께 분기 점검 시 종합 판단됩니다.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      {/* ── HERO SECTION ── */}
      <SectionHero
        label="About"
        title="안심고고 소개 — 자립적 정보 디렉토리 + 5단계 검증 프로세스"
        description="안심고고가 어떤 사이트인지 / 어떻게 운영되는지 / 누가 운영하는지 한 페이지에서 안내합니다."
        variant="accent"
      />

      {/* ── ABOUT ANSIMGOGO SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">안심고고는 어떤 사이트인가요</h2>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              안심고고는 토토·카지노 사이트의 현재 상태, 변경 이력, 사용자 제보를 한 곳에서 조회하도록 운영되는 자립적 정보 디렉토리이며, 도박 운영자나 사이트 권유 채널이 아니라 사용자가 사이트명·도메인을 검색해 직접 정보를 비교 확인하는 정보 허브 역할만 수행합니다.
            </p>
            <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              신고 플랫폼이 아니므로 외부 권위에 기대지 않고, 자체 데이터·사용자 제보·운영 시그널만으로 정보를 분류해 디렉토리에 등록해 운영합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5-STEP VERIFICATION PROCESS ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">5단계 검증 프로세스</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              모든 보증업체는 다음 5단계 검증을 거쳐 Tier 등급을 부여받으며, 분기마다 전 항목을 재점검합니다.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-10 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/30 md:transform md:-translate-x-1/2" />

            <div className="space-y-6 md:space-y-12">
              {[
                {
                  n: '1',
                  title: '운영 정보 일치',
                  desc: '사이트명·도메인·운영 시작일·사업자 정보 외부 표기 일치',
                },
                {
                  n: '2',
                  title: '보증금 확인',
                  desc: '사이트 측 공시 보증금과 입점 확인 수치 일치 (보증업체만)',
                },
                {
                  n: '3',
                  title: '사용자 제보 패턴',
                  desc: '누적 제보 건수, 환전 지연 비율, 추가 송금 요구 사례',
                },
                {
                  n: '4',
                  title: '변경 이력 추적',
                  desc: '주소 변경 빈도, 운영 정보 변동 타임라인',
                },
                {
                  n: '5',
                  title: '재점검 주기 준수',
                  desc: '분기 시점 모든 항목 재확인 + 분기 리포트 공개',
                },
              ].map((step, i) => (
                <div key={i} className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div className={`flex items-start gap-4 mb-4 md:mb-0 ${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-h4 relative z-10 shadow-md">
                      {step.n}
                    </div>
                    <div className="flex-1 p-4 rounded-xl bg-accent border border-border/50">
                      <h3 className="text-h4 text-heading mb-2">{step.title}</h3>
                      <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OPERATING SIGNALS SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">운영 시그널</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              안심고고는 외부 공공기관 인용에 기대지 않고 다음 4종 자체 운영 시그널로 신뢰성을 나타내며, 모든 페이지에서 일관되게 노출됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Database,
                title: '운영 4년차',
                desc: '2022년 운영 시작, 분기 점검 정기 수행',
              },
              {
                icon: Users,
                title: '편집부 5명',
                desc: '실명·사진·경력 공개, 익명 작성자 X',
              },
              {
                icon: BookOpen,
                title: '자체 데이터',
                desc: '사용자 제보 누적, 변경 이력 추적, 분기 리포트',
              },
              {
                icon: Shield,
                title: '이용료 없음',
                desc: '사용자 정보 조회·제보에 별도 이용료 청구 X',
              },
            ].map((signal, i) => (
              <div key={i} className="p-6 rounded-xl bg-accent border border-border/50 hover:shadow-md transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <signal.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-h4 text-heading pt-0.5">{signal.title}</h3>
                </div>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                  {signal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPERATING PRINCIPLES SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">운영 원칙</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              안심고고는 사용자 행동을 강요하지 않고 정보를 안내하는 톤만 일관 유지합니다. 다음 4가지 원칙은 모든 페이지의 본문 표현 기준입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Eye,
                title: '조회',
                desc: '사이트 정보를 빠르게 확인할 수 있도록 검색·필터 제공',
              },
              {
                icon: BookOpen,
                title: '가이드',
                desc: '피해 없이 안전하게 이용하는 방법을 단계별 안내',
              },
              {
                icon: Zap,
                title: '추적',
                desc: '주소 변경, 문제 발생 시 변경 이력과 알림 기록 공개',
              },
              {
                icon: Lock,
                title: '보호',
                desc: '제보 익명 보호, 누적 데이터 기반 위험 신호 분류',
              },
            ].map((principle, i) => (
              <div key={i} className="p-6 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-h4 text-heading pt-0.5">{principle.title}</h3>
                </div>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <SectionFAQ 
        items={FAQ_ITEMS} 
        description="안심고고의 운영 방식과 정보 제공에 관한 자주 묻는 질문을 정리했습니다."
      />

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="about" />
    </main>
  )
}
