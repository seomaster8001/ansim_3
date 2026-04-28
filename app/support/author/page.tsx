'use client'

import { ChevronRight, Check, Shield, Eye, BookOpen, BarChart3, AlertCircle } from 'lucide-react'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'
import { SectionHero } from '@/components/section-hero'

const FAQ_ITEMS = [
  {
    q: '편집부 실명을 공개하는 이유는 무엇인가요',
    a: '안심고고는 토토·카지노 niche의 정보 디렉토리이므로 작성자 신뢰성이 검증 결과의 신뢰성을 결정합니다. 익명 작성자가 작성한 검증 결과는 사용자가 어떤 근거로 분류됐는지 추적할 수 없어 명예훼손 위험과 사용자 오인 위험이 함께 커지므로 편집부 5명 모두 실명·사진·경력을 공개하는 정책을 운영합니다.',
  },
  {
    q: '편집부 외부 기고나 게스트 작성도 가능한가요',
    a: '외부 기고는 받지 않으며 모든 본문은 편집부 5명 중 1명이 1차 작성하고 다른 1명이 2차 교차 검토한 뒤에만 외부 공개됩니다. 외부 기고를 허용하면 편집부 검증 절차의 일관성이 깨지고 작성자 신뢰성 시그널이 약해지므로 안심고고는 외부 기고 정책을 운영하지 않으며 사용자 제보만 별도 절차로 받고 있습니다.',
  },
]

const EDITORS = [
  {
    name: '에디터 A',
    category: 'SAFETY',
    categoryName: '보증업체 디렉토리',
    detail: 'Tier 등급 점검',
    year: '담당 4년차',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    name: '에디터 B',
    category: 'REVIEW',
    categoryName: '먹튀 사이트 조회',
    detail: '위험 신호 패턴',
    year: '담당 4년차',
    color: 'from-slate-400 to-slate-500',
  },
  {
    name: '에디터 C',
    category: 'PICKS',
    categoryName: '스포츠 데이터',
    detail: '라이브 통계',
    year: '담당 3년차',
    color: 'from-orange-500 to-amber-600',
  },
  {
    name: '에디터 D',
    category: 'GUIDE',
    categoryName: '입문 학습 자료',
    detail: '피해예방 체크리스트',
    year: '담당 3년차',
    color: 'from-blue-400 to-blue-500',
  },
  {
    name: '에디터 E',
    category: 'DATA',
    categoryName: '분기 리포트',
    detail: '통계 데이터셋',
    year: '담당 2년차',
    color: 'from-purple-400 to-purple-500',
  },
]

export default function AuthorPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      {/* ── HERO SECTION ── */}
      <SectionHero
        label="Editorial Team"
        title="편집부 — 실명·경력 공개 5명 검증 에디터"
        description="안심고고를 누가 운영하는지 / 어떤 경력을 가졌는지 / 어느 카테고리를 담당하는지 공개"
        icon={Users}
        variant="accent"
      />

      {/* ── EDITORIAL POLICY SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">편집부 공개 정책</h2>
          <div className="space-y-4 max-w-3xl">
            <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              안심고고 편집부는 5명 모두 실명·프로필 사진·경력을 본 페이지에 공개하며 익명 작성자 정책을 운영하지 않습니다. 모든 본문 페이지의 작성자 표기와 본 페이지의 편집부 프로필이 동일 인물로 일대일 매칭되도록 운영해 사용자가 어떤 에디터의 검증 결과인지 직접 확인할 수 있습니다.
            </p>
            <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              E-E-A-T 신뢰성 기준에 맞춘 운영이며 편집부 공개는 안심고고 정체성의 핵심입니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── CATEGORY ASSIGNMENT SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">편집부 5명 담당 카테고리</h2>
          <p className="text-body-lg text-body mb-10 leading-relaxed max-w-3xl" style={{ wordBreak: 'keep-all' }}>
            각 에디터는 안심고고 카테고리 5종 중 1-2개 영역을 전담해 분기 단위로 담당 사이트 정보를 직접 점검하고 본문을 갱신하며, 담당 외 카테고리 사이트 정보는 다른 에디터의 교차 검토를 거친 뒤에만 본문에 반영되도록 일관 분리 운영됩니다.
          </p>

          <div className="space-y-3">
            {EDITORS.map((editor, i) => (
              <a
                key={i}
                href={`/${editor.category.toLowerCase()}/`}
                className="block p-6 rounded-xl bg-background border border-border/50 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`inline-block px-3 py-1 rounded-md bg-gradient-to-r ${editor.color} text-white text-label font-bold`}>
                        {editor.category}
                      </div>
                      <p className="text-body-sm text-primary font-medium">{editor.year}</p>
                    </div>
                    <h3 className="text-h4 text-heading mb-1">{editor.name}</h3>
                    <p className="text-body-sm text-body">{editor.categoryName} + {editor.detail}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-subtle flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── VERIFICATION PROCESS SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">편집부 검증 절차</h2>
          <p className="text-body-lg text-body mb-10 leading-relaxed max-w-3xl" style={{ wordBreak: 'keep-all' }}>
            에디터가 사이트 정보를 본문에 반영할 때 거치는 내부 검증 절차이며, 1차 작성자와 2차 검토자가 분리 운영되어 명예훼손 위험과 단정 표현 위험을 함께 줄이는 방향으로 모든 본문 페이지에 일관 적용되며 결과는 분기 점검에서도 다시 확인됩니다.
          </p>

          <div className="space-y-4">
            {[
              { n: '1', title: '1차 작성', desc: '담당 에디터가 자체 데이터·사용자 제보를 근거로 본문 작성' },
              { n: '2', title: '2차 교차 검토', desc: '다른 에디터 1명이 사실 일치성·금지 표현 점검' },
              { n: '3', title: '3차 분기 점검', desc: '분기마다 본문 자가 채점 + 변동 사항 재확인' },
            ].map((step, i) => (
              <div key={i} className="p-5 rounded-xl bg-secondary border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {step.n}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 text-heading mb-1">{step.title}</h3>
                    <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-body-sm text-body mt-6" style={{ wordBreak: 'keep-all' }}>
            3단계 모두 통과한 본문만 외부 공개되며 통과 일자는 페이지 하단에 표기됩니다.
          </p>
        </div>
      </section>

      {/* ── ETHICS POLICY SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">편집부 윤리 정책</h2>
          <p className="text-body-lg text-body mb-10 leading-relaxed max-w-3xl" style={{ wordBreak: 'keep-all' }}>
            편집부는 어떠한 사이트 운영자로부터 금전·물품·광고 비용을 수취하지 않으며, 보증업체 입점 신청 시에도 입점료가 검증 결과·Tier 분류에 영향을 주지 않도록 입점 심사 절차와 검증 결과 산정을 분리 운영하는 정책을 채택하고 있습니다.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Shield, title: '광고 수취 X', desc: '사이트 운영자로부터 직접 광고 수취 X' },
              { icon: AlertCircle, title: '권유 보상 X', desc: '권유·이용 유도 기반 보상 일절 X' },
              { icon: Eye, title: '검증 분리', desc: '입점료가 검증 결과·Tier 분류에 영향 주지 않음' },
              { icon: Check, title: '이해 충돌 공시', desc: '발생 시 본문에 명시' },
            ].map((policy, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border border-border/50">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <policy.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-h4 text-heading">{policy.title}</h3>
                </div>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                  {policy.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <SectionFAQ 
        items={FAQ_ITEMS} 
        description="편집부 운영 정책과 검증 절차에 대한 자주 묻는 질문입니다."
      />

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="author" />
    </main>
  )
}

import { Users } from 'lucide-react'
