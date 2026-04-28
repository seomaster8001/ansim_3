import { ShieldCheck, FileText, BarChart3, BookOpen, Database, ChevronRight } from 'lucide-react'

const ALL_CATEGORIES = [
  { key: 'safety', icon: ShieldCheck, title: '보증업체', desc: '검증 기준을 통과한 사이트 정보', href: '/safety/' },
  { key: 'review', icon: FileText, title: '먹튀검증 리포트', desc: '제보 이력과 주소 변경 사건별 기록', href: '/review/' },
  { key: 'picks', icon: BarChart3, title: '스포츠 분석', desc: 'KBO·MLB·EPL 경기 데이터와 라이브스코어', href: '/picks/' },
  { key: 'guide', icon: BookOpen, title: '피해예방 가이드', desc: '환전 지연, 피싱 주소, 주소 변경 리스크 체크', href: '/guide/' },
  { key: 'data', icon: Database, title: '데이터센터', desc: '변경 이력, 검증 현황, 카테고리별 흐름 요약', href: '/data/' },
]

interface SectionCategoriesProps {
  currentPage?: string
  title?: string
  description?: string
}

export function SectionCategories({ 
  currentPage,
  title = '관련 카테고리',
  description = '안심고고의 다른 카테고리도 확인해보세요.'
}: SectionCategoriesProps) {
  const categories = currentPage 
    ? ALL_CATEGORIES.filter(cat => cat.key !== currentPage)
    : ALL_CATEGORIES

  return (
    <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-label text-primary mb-4">Categories</p>
          <h2 className="text-h2 text-heading leading-tight mb-6">
            {title}
          </h2>
          <p className="text-body-lg text-body max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <a
              key={i}
              href={cat.href}
              className="group flex flex-col p-5 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <cat.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-h4 text-heading mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
              <p className="text-body-sm text-body flex-1" style={{ wordBreak: 'keep-all' }}>{cat.desc}</p>
              <div className="flex items-center gap-1 mt-4 text-body-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                바로가기
                <ChevronRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
