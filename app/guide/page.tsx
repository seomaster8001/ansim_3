'use client'

import { ChevronRight, BookOpen, CheckCircle, AlertCircle, ClipboardList, Lightbulb, Eye, Shield } from 'lucide-react'
import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

const GUIDE_FAQ = [
  {
    q: '토토를 처음 접하는데 어디부터 보면 되나요',
    a: '처음 접하는 사용자는 안심고고 가이드 1단계 기초 개념 페이지부터 시작해 용어와 사이트 종류 분류를 먼저 익히고, 2단계 룰 안내, 3단계 사이트 보는 법, 4단계 피해예방 체크리스트 순서로 진행하는 것이 권장됩니다. 각 단계는 분기마다 갱신되며 다음 단계 자료로 자연스럽게 이어지도록 카드 순서가 고정되어 있습니다.',
  },
  {
    q: '안심고고 가이드는 이용을 권유하나요',
    a: '안심고고 가이드는 사이트 이용을 권유하지 않으며 입문자가 토토·카지노 niche 용어와 룰, 사이트 차이를 이해하도록 정보 자료만 안내합니다. 권유·유도·결과 보증 표현은 본문에 일절 사용하지 않고 안심고고는 검증·이력·보호 톤만 일관 유지하며 객관적 자료 디렉토리 역할만 수행합니다.',
  },
  {
    q: '가이드 자료는 얼마나 자주 갱신되나요',
    a: '가이드 자료는 분기 단위로 사용자 피드백과 누적 제보 데이터를 반영해 갱신되며, 갱신된 페이지에는 마지막 갱신일과 이전 버전 링크가 함께 표기됩니다. 중요한 변경 사항은 안심고고 분기 리포트에 함께 공개되어 사용자가 어느 항목이 언제 갱신됐는지 직접 비교 확인할 수 있도록 안내됩니다.',
  },
]

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      {/* ── HERO SECTION ── */}
      <SectionHero
        label="안전 가이드"
        title="안전 가이드 — 입문자 학습 경로 + 피해예방 체크리스트"
        description="안전 가이드 종합 hub — 토토 기초 / 룰 안내 / 피해예방 체크리스트 / 단계별 학습 경로"
        icon={BookOpen}
        variant="accent"
      />

      {/* ── ABOUT GUIDE SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {/* What is the guide */}
            <div>
              <h2 className="text-h2 text-heading mb-6">안전 가이드는 어떤 정보를 다루나요</h2>
              <div className="space-y-4">
                <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                  안전 가이드는 안심고고가 토토·카지노 niche 입문자에게 필요한 기초 개념, 종목별 룰, 피해예방 체크포인트를 단계별로 정리한 학습 경로형 카테고리이며, 이용 권유 자료는 일절 다루지 않고 토토 가이드 디렉토리에 입문자 단계별 학습 자료만 등록해 운영합니다.
                </p>
                <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                  자료는 안심고고 편집부 5명이 자체 정리한 결과이며 외부 권위 출처에 의존하지 않습니다.
                </p>
              </div>
            </div>

            {/* Learning path */}
            <div>
              <h2 className="text-h2 text-heading mb-8">입문자 학습 경로 (단계별)</h2>
              <p className="text-body-lg text-body mb-8 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                안심고고 가이드는 토토 niche를 처음 접하는 일반 사용자를 기준으로 4단계 학습 경로를 운영하며, 각 단계는 분기 단위로 갱신되고 다음 단계 자료로 자연스럽게 이어지도록 디렉토리 카드 순서가 고정 운영됩니다.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    n: '01',
                    title: '기초 개념',
                    desc: '토토·카지노 niche 용어 + 사이트 종류 분류',
                  },
                  {
                    n: '02',
                    title: '룰 안내',
                    desc: '종목별 게임 방식 룰 (정보 안내, 행동 권유 X)',
                  },
                  {
                    n: '03',
                    title: '사이트 보는 법',
                    desc: '보증업체·먹튀 사이트 차이와 조회 방법',
                  },
                  {
                    n: '04',
                    title: '피해예방',
                    desc: '환전 지연·추가 입금 요구 발생 시 대응 절차',
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl bg-secondary border border-border/50 hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-h4 font-bold flex-shrink-0">
                        {step.n}
                      </span>
                      <h3 className="text-h4 text-heading pt-0.5">{step.title}</h3>
                    </div>
                    <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-body text-body mt-8 italic" style={{ wordBreak: 'keep-all' }}>
                학습 경로는 분기마다 사용자 피드백을 반영해 갱신됩니다.
              </p>
            </div>

            {/* Safety checklist */}
            <div>
              <h2 className="text-h2 text-heading mb-8">피해예방 체크리스트</h2>
              <p className="text-body-lg text-body mb-8 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                피해예방은 안심고고가 누적한 사용자 제보 데이터에서 가장 많이 반복된 패턴을 기반으로 작성된 체크리스트이며, 사용자가 사이트 이용 전과 이용 중에 점검할 수 있는 구체 항목을 피해예방 체크리스트 페이지에 단계별로 정리해 공개합니다.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: Eye,
                    title: '이용 전',
                    items: ['사이트 운영 정보 일치', '마지막 검증일 확인'],
                  },
                  {
                    icon: ClipboardList,
                    title: '이용 중',
                    items: ['환전 처리 시간', '추가 송금 요구 유무 점검'],
                  },
                  {
                    icon: Shield,
                    title: '이용 후',
                    items: ['누적 거래 내역', '운영 정보 변동 모니터링'],
                  },
                  {
                    icon: AlertCircle,
                    title: '문제 발생 시',
                    items: ['안심고고 제보 폼', '정책 페이지 신고 경로 확인'],
                  },
                ].map((section, i) => (
                  <div key={i} className="p-5 rounded-xl bg-secondary border border-border/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-h4 text-heading">{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-body-sm text-body">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="text-body-sm text-body mt-6" style={{ wordBreak: 'keep-all' }}>
                각 항목은 사용자 행동 가이드로만 사용됩니다.
              </p>
            </div>

            {/* Guide scope */}
            <div className="p-6 rounded-xl bg-accent border border-border/50">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-h3 text-heading mb-4">가이드 활용 범위 안내</h3>
                  <p className="text-body text-body leading-relaxed mb-4" style={{ wordBreak: 'keep-all' }}>
                    안심고고 가이드는 토토·카지노 niche 사용자가 사이트를 보는 눈을 키우도록 정보를 안내하는 자료이며, 사이트 권유나 결과 보증 표현은 어떤 페이지에서도 다루지 않고 안심고고 정체성에 맞춘 검증·이력·보호 톤만 일관 유지합니다.
                  </p>
                  <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                    가이드 카테고리에서 다루는 자료는 용어 사전·FAQ 페이지와 함께 활용하면 입문자 이해도가 높아집니다. 학습 후 보증업체 또는 먹튀 사례를 직접 조회해 보는 것이 권장 흐름입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <SectionFAQ 
        items={GUIDE_FAQ} 
        description="안전 가이드 활용 및 학습 경로에 대한 궁금증을 정리했습니다."
      />

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="guide" />
    </main>
  )
}
