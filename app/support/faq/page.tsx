'use client'

import { ChevronRight, HelpCircle } from 'lucide-react'
import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'
import { useState } from 'react'

const FAQ_DATA = [
  {
    category: '사이트 사용',
    description: '안심고고 사이트 자체에 대한 기본 질문 카테고리이며, 안심고고 정체성과 이용 비용 정책을 한 곳에 정리합니다.',
    items: [
      {
        q: '안심고고는 어떤 사이트인가요',
        a: '안심고고는 토토·카지노 사이트의 현재 상태, 변경 이력, 사용자 제보를 한 곳에서 조회하도록 운영되는 자립적 정보 디렉토리이며, 도박 운영자가 아니고 권유 채널도 아닌 정보 허브 역할만 수행합니다. 사이트명·도메인을 검색하면 마지막 확인일과 누적 제보 건수를 직접 비교 확인할 수 있도록 안내합니다.',
      },
      {
        q: '안심고고 이용에 비용이 드나요',
        a: '안심고고는 일반 사용자의 정보 조회와 제보에 별도 이용료를 일절 청구하지 않습니다. 보증업체 입점 신청 시 입점 절차 비용이 별도로 안내되지만, 일반 사용자가 사이트를 조회하거나 제보를 등록하는 모든 기능은 영구히 무료로 제공되어 누구나 회원 등록 없이 자유롭게 사용할 수 있습니다.',
      },
    ],
  },
  {
    category: '제보·검증',
    description: '사용자 제보 절차와 검증 결과 분류 정책 카테고리이며, 익명 제보·처리 시간·결과 공개 시점과 같이 자주 들어오는 운영 질문을 모아 두었습니다.',
    items: [
      {
        q: '익명으로 제보해도 처리되나요',
        a: '익명 제보도 정상 접수되며 사이트명·환전 지연 일자·금액·증빙 자료만 있으면 검토에 포함됩니다. 신원 정보는 안심고고 내부에서 마스킹 처리되어 외부에 노출되지 않으며, 제보자 보호가 우선이므로 익명·실명 여부는 검토 결과나 처리 우선순위에 영향을 일절 주지 않도록 운영됩니다.',
      },
      {
        q: '제보 후 결과는 언제 공개되나요',
        a: '제보는 분기 단위 점검 주기에 맞춰 검토되며, 동일 사이트에 누적 제보가 5건 이상 모이면 분기 리포트에 사례별로 분류 결과가 외부 공개됩니다. 즉시 공개 정책은 사용하지 않으며 사실 일치성 점검과 동일 패턴 누적 확인 후에만 분류해야 명예훼손 위험과 사용자 오인 위험을 모두 함께 낮출 수 있습니다.',
      },
    ],
  },
  {
    category: '편집부',
    description: '안심고고를 운영하는 편집부 5명에 대한 질문 카테고리이며, 실명 공개 정책과 외부 광고·보상 정책처럼 신뢰성 시그널 관련 질문을 모아 두었습니다.',
    items: [
      {
        q: '편집부 실명을 공개하는 이유는 무엇인가요',
        a: '안심고고는 검증 결과의 신뢰성을 결정하는 핵심이 작성자 신뢰성이라 판단해 편집부 5명 모두 실명·사진·경력을 공개하는 정책을 운영합니다. 익명 작성자가 작성한 검증 결과는 사용자가 어떤 근거로 분류됐는지 추적할 수 없어 명예훼손 위험과 사용자 오인 위험이 함께 커지므로 익명 정책을 사용하지 않습니다.',
      },
      {
        q: '외부 광고나 권유 보상을 받나요',
        a: '편집부는 어떠한 사이트 운영자로부터 광고비·권유 보상·금전·물품을 수취하지 않으며, 보증업체 입점 시에도 입점료가 검증 결과에 영향을 주지 않도록 입점 심사와 검증 결과를 분리 운영합니다. 이해 충돌이 발생하면 본문에 명시 공개되며 분기 리포트에 사례가 함께 기록되어 사용자가 직접 비교 확인할 수 있도록 안내됩니다.',
      },
    ],
  },
  {
    category: '약관·개인정보',
    description: '이용약관과 개인정보 처리방침 관련 질문 카테고리이며, 외부 신고 경로 안내 위치와 개인정보 마스킹 정책처럼 정책 페이지를 보완하는 질문을 모아 두었습니다.',
    items: [
      {
        q: '외부 신고 경로는 어디서 안내받을 수 있나요',
        a: '안심고고는 신고 플랫폼이 아니므로 본문 페이지에 외부 신고 경로를 박지 않으며, 공공기관과 민간 피해조회처의 공개된 신고 경로 안내는 이용약관 페이지의 "관련 신고 경로 안내" 섹션 한 곳에서만 다룹니다. 안심고고는 해당 기관·조회처와 어떠한 협력·소속·제휴 관계도 일절 없습니다.',
      },
      {
        q: '개인정보는 어떻게 처리되나요',
        a: '제보 폼이나 입점 신청 시 사용자가 입력하는 정보는 안심고고 내부에서만 사용되며 외부 공개 시 익명 마스킹 처리됩니다. 수집 항목·보관 기간·마스킹 정책 상세 내용은 개인정보 처리방침 페이지에서 조항별로 직접 확인할 수 있으며, 보관 기간 만료 후 자동 폐기되도록 정책이 일관 운영됩니다.',
      },
    ],
  },
]

export default function FAQPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('사이트 사용')

  const allFaqItems = FAQ_DATA.flatMap(cat => cat.items)

  return (
    <main className="min-h-screen bg-background font-sans">
      {/* ── HERO SECTION ── */}
      <SectionHero
        label="FAQ"
        title="자주 묻는 질문 — 사이트 사용·제보·편집부·약관"
        description="안심고고 사용·제보 절차·검증 정책·개인정보 처리 관련 자주 받는 질문을 카테고리별로 정리했습니다."
        icon={HelpCircle}
        variant="accent"
      />

      {/* ── CATEGORY OVERVIEW SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">FAQ 카테고리</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              안심고고에서 자주 받는 질문을 4가지 카테고리로 정리했습니다.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((cat, i) => (
              <button
                key={i}
                onClick={() => setExpandedCategory(expandedCategory === cat.category ? null : cat.category)}
                className={`w-full text-left p-6 rounded-xl border transition-all ${
                  expandedCategory === cat.category
                    ? 'bg-accent border-primary/50 ring-1 ring-primary/30'
                    : 'bg-background border-border/50 hover:border-primary/30'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-h4 text-heading mb-2">{cat.category}</h3>
                    <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                      {cat.description}
                    </p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-primary flex-shrink-0 mt-1 transition-transform ${
                      expandedCategory === cat.category ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {expandedCategory === cat.category && (
                  <div className="mt-6 space-y-4 pt-6 border-t border-border/30">
                    {cat.items.map((item, j) => (
                      <div key={j} className="space-y-2">
                        <p className="text-body-sm font-medium text-heading" style={{ wordBreak: 'keep-all' }}>
                          Q. {item.q}
                        </p>
                        <p className="text-body-sm text-body pl-4 border-l-2 border-primary/30" style={{ wordBreak: 'keep-all' }}>
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL FAQ SECTION (Accordion) ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">전체 FAQ</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              모든 자주 묻는 질문을 한 곳에서 확인할 수 있습니다.
            </p>
          </div>

          <SectionFAQ 
            items={allFaqItems}
          />
        </div>
      </section>

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="faq" />
    </main>
  )
}
