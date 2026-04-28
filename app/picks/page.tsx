import { ChevronRight, BarChart3, TrendingUp, Clock, Users, BookOpen, AlertCircle, CheckCircle } from 'lucide-react'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'
import { SectionHero } from '@/components/section-hero'

export default function PicksPage() {

  const sports = [
    {
      icon: BarChart3,
      title: 'KBO',
      subtitle: '국내 야구',
      desc: '정규시즌·포스트시즌 일정 + 팀별 통계',
      href: '/picks/kbo/',
    },
    {
      icon: TrendingUp,
      title: 'MLB',
      subtitle: '메이저리그',
      desc: '일정 + 팀 전력 비교 + 한국 선수 기록',
      href: '/picks/mlb/',
    },
    {
      icon: Users,
      title: 'EPL',
      subtitle: '프리미어리그',
      desc: '일정 + 순위 + 최근 폼',
      href: '/picks/epl/',
    },
    {
      icon: BookOpen,
      title: 'UEFA · 기타',
      subtitle: '챔피언스리그',
      desc: '경기 일정·통계',
      href: '/picks/uefa/',
    },
  ]

  const faqItems = [
    {
      q: '분석 자료가 경기 결과를 예측해 주나요',
      a: '스포츠 분석 자료는 결과 예측이나 적중 단정을 다루지 않으며 종목별 누적 통계, 최근 경기 흐름, 팀 전력 비교 자료만 정보 디렉토리 형태로 제공합니다. 사용자가 직접 자료를 비교해 판단할 수 있도록 보조 역할만 하며, 안심고고는 결과 단정 표현을 사용하지 않고 통계 출처와 갱신 일시만 함께 표기합니다.',
    },
    {
      q: '라이브스코어 데이터는 얼마나 자주 갱신되나요',
      a: '라이브스코어 페이지는 종목별 공개 통계 API를 참조해 경기 진행 중 실시간 갱신되며, 갱신 주기와 데이터 출처는 페이지 하단에 함께 표기됩니다. API 응답 지연이나 일시 장애 발생 시 표기 시각이 함께 갱신되어 사용자가 데이터 신선도를 직접 비교 확인할 수 있도록 합니다.',
    },
    {
      q: 'KBO·MLB 외 다른 종목도 다루나요',
      a: '현재 KBO·MLB·EPL·UEFA 챔피언스리그를 기본 종목으로 운영하며 사용자 제보와 분기 트래픽을 기준으로 종목 확장 여부를 분기 단위로 검토합니다. 추가 종목은 안심고고 분기 리포트에 검토 결과를 공개한 뒤 단계적으로 등록됩니다.',
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      {/* ── HERO SECTION ── */}
      <SectionHero
        label="스포츠 분석"
        title="KBO · MLB · EPL 라이브 + 일정 + 통계 hub"
        description="스포츠 분석 종합 hub — 종목별 경기 데이터 / 라이브스코어 / 일정 / 통계 자료 디렉토리"
        icon={BarChart3}
      />

      {/* ── INTRODUCTION SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-h2 text-heading mb-6">스포츠 분석은 어떤 정보를 다루나요</h2>
            <p className="text-body text-body leading-relaxed mb-6" style={{ wordBreak: 'keep-all' }}>
              스포츠 분석은 안심고고가 종목별 경기 데이터, 일정, 라이브 스코어, 팀 전력 통계를 정보 디렉토리 형태로 모아 안내하는 카테고리이며, 결과 예측이나 적중 단정 자료는 다루지 않고 경기 흐름 분석 자료와 통계 표를 사용자 비교용 형태로 제공합니다.
            </p>
            <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              분석 자료는 안심고고 편집부 5명이 종목별 공개 통계를 정리한 결과로, 사용자 의사 결정 보조용으로만 활용됩니다.
            </p>
          </div>

          {/* Key features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, label: '경기 흐름', desc: '최근 5경기 결과 + 득점·실점 평균' },
              { icon: BarChart3, label: '전력 비교', desc: '팀별 누적 통계 + 홈/원정 분포' },
              { icon: Users, label: '선수 통계', desc: '주요 선수 시즌 기록 (공개 자료 기반)' },
              { icon: Clock, label: '일정 알림', desc: '시작 시각 + 종목별 분류' },
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-secondary border border-border/50">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-body-sm font-medium text-heading mb-1">{feature.label}</p>
                  <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPORTS SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">종목별 데이터 구성</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto">
              안심고고가 분석 카테고리에 다루는 종목은 KBO·MLB·EPL·UEFA 챔피언스리그 등 주요 리그이며, 종목별로 경기 일정·팀별 통계·최근 5경기 흐름·홈/원정 분포를 별도 페이지로 분리합니다.
            </p>
          </div>

          {/* Sports cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {sports.map((sport, i) => (
              <a
                key={i}
                href={sport.href}
                className="group flex flex-col p-6 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <sport.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-label text-primary mb-2">{sport.subtitle}</p>
                <h3 className="text-h3 text-heading mb-3 group-hover:text-primary transition-colors">{sport.title}</h3>
                <p className="text-body-sm text-body flex-1" style={{ wordBreak: 'keep-all' }}>{sport.desc}</p>
              </a>
            ))}
          </div>

          {/* Note */}
          <div className="p-5 rounded-xl bg-background border border-border/50">
            <p className="text-body-sm text-body flex items-start gap-3">
              <span className="text-primary mt-0.5">•</span>
              <span style={{ wordBreak: 'keep-all' }}>종목 추가는 분기 단위로 검토합니다. 사용자 제보와 분기 트래픽을 기준으로 확장 여부를 결정하고, 추가 종목은 분기 리포트를 통해 공개됩니다.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── LIVE DATA SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">라이브 데이터와 경기 일정</h2>
          <div className="space-y-6 mb-10">
            <div className="p-6 rounded-xl bg-secondary border border-border/50">
              <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                안심고고 라이브스코어 페이지는 진행 중 경기의 실시간 점수와 진행 시간, 일정 페이지는 향후 7일 경기 일정과 시작 시각, 종목별 페이지는 팀 전력 비교 자료를 함께 노출해 분석에 필요한 정보를 한 화면에서 빠르게 확인할 수 있도록 구성됩니다.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-secondary border border-border/50">
              <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                라이브 페이지는 종목별 통계 API를 인용 표기하며, 데이터 출처와 갱신 주기가 페이지 하단에 함께 표기됩니다. 스포츠 통계 페이지에서 누적 통계도 확인할 수 있습니다.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="/picks/livescore/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-body-sm font-medium hover:bg-primary/90 transition-colors">
              <Clock className="w-4 h-4" />
              라이브스코어 보기
            </a>
            <a href="/picks/calendar/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-heading text-body-sm font-medium hover:bg-secondary/80 transition-colors">
              경기 일정 확인
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── USAGE GUIDELINES SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-10">분석 자료 활용 안내</h2>

          {/* Guidelines grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              {
                icon: AlertCircle,
                title: '결과 단정 없음',
                desc: '경기 결과 예측이나 적중 약속 자료가 아닌 통계 제공만 함',
              },
              {
                icon: CheckCircle,
                title: '투명한 출처',
                desc: '모든 데이터의 출처와 갱신 일시를 함께 표기',
              },
              {
                icon: BarChart3,
                title: '비교용 정보',
                desc: '사용자 의사결정 보조용 자료로만 활용',
              },
              {
                icon: Users,
                title: '편집부 정리',
                desc: '안심고고 편집부 5명이 공개 통계 기반 정리',
              },
            ].map((guideline, i) => (
              <div key={i} className="p-6 rounded-xl bg-background border border-border/50">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <guideline.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-h4 text-heading mb-3">{guideline.title}</h3>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{guideline.desc}</p>
              </div>
            ))}
          </div>

          {/* Important note */}
          <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/20">
            <p className="text-body-sm text-destructive flex items-start gap-3">
              <span className="mt-0.5">⚠</span>
              <span style={{ wordBreak: 'keep-all' }}>
                스포츠 분석 자료는 결과를 단정하거나 적중을 약속하는 자료가 아닙니다. 자료의 정확성을 보장할 수 없으며, 사용자의 판단에 따른 결과에 대해 안심고고는 책임을 지지 않습니다.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <SectionFAQ 
        items={faqItems} 
        description="스포츠 분석에 관한 자주 묻는 질문을 정리했습니다."
      />

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="picks" />
    </main>
  )
}
