'use client'

import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'
import { BookOpen } from 'lucide-react'

const FAQ_ITEMS = [
  {
    q: '기초 개념부터 배워야 하나요?',
    a: '네, 기초 개념 섹션부터 시작하는 것이 권장됩니다. 용어와 분류를 먼저 이해하면 이후 섹션들을 더 쉽게 따라갈 수 있습니다.',
  },
  {
    q: '각 단계별 학습 시간은 얼마나 걸리나요?',
    a: '각 단계는 평균 20~30분 정도 소요되며, 개인의 학습 속도에 따라 달라질 수 있습니다. 분기 단위로 새로운 자료가 추가됩니다.',
  },
  {
    q: '가이드 자료는 정기적으로 업데이트되나요?',
    a: '네, 분기 단위로 모든 자료를 검토하고 갱신합니다. 사용자 피드백과 시장 변화를 반영해 내용을 개선합니다.',
  },
]

const CATEGORIES = [
  {
    title: '기초 개념',
    desc: '토토·카지노 niche 용어와 사이트 분류',
    href: '/guide/',
    icon: BookOpen,
  },
  {
    title: '룰 안내',
    desc: '종목별 게임 방식과 규칙',
    href: '/guide/',
    icon: BookOpen,
  },
  {
    title: '사이트 보기',
    desc: '보증업체와 먹튀 사이트 구분',
    href: '/guide/',
    icon: BookOpen,
  },
  {
    title: '피해예방',
    desc: '환전 지연 대응 절차',
    href: '/guide/',
    icon: BookOpen,
  },
]

export default function GuideFAQPage() {
  return (
    <main>
      <SectionHero
        label="Guide FAQ"
        title="안전 가이드 자주 묻는 질문"
        description="안전 가이드 학습에 관한 자주 묻는 질문들을 모았습니다."
        icon={BookOpen}
        variant="default"
      />

      <SectionFAQ
        title="가이드 관련 질문"
        description="학습 순서, 업데이트, 활용 방법 등에 관한 질문"
        items={FAQ_ITEMS}
      />

      <SectionCategories
        title="안전 가이드 섹션"
        description="4단계 학습 경로로 돌아가기"
        categories={CATEGORIES}
      />
    </main>
  )
}
