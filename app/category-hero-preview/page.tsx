import { CategoryHeroSafety } from '@/components/category-hero-safety'
import { CategoryHeroReview } from '@/components/category-hero-review'
import { CategoryHeroGuide } from '@/components/category-hero-guide'
import { CategoryHeroData } from '@/components/category-hero-data'
import { CategoryHeroPicks } from '@/components/category-hero-picks'

const previews = [
  {
    id: 'safety',
    label: 'Safety · 보증업체',
    color: 'bg-emerald-50 border-emerald-200',
    component: <CategoryHeroSafety />,
  },
  {
    id: 'review',
    label: 'Review · 먹튀검증',
    color: 'bg-amber-50 border-amber-200',
    component: <CategoryHeroReview />,
  },
  {
    id: 'guide',
    label: 'Guide · 안전 가이드',
    color: 'bg-indigo-50 border-indigo-200',
    component: <CategoryHeroGuide />,
  },
  {
    id: 'data',
    label: 'Data · 데이터센터',
    color: 'bg-violet-50 border-violet-200',
    component: <CategoryHeroData />,
  },
  {
    id: 'picks',
    label: 'Picks · 스포츠 정보',
    color: 'bg-sky-50 border-sky-200',
    component: <CategoryHeroPicks />,
  },
]

export default function CategoryHeroPreviewPage() {
  return (
    <main className="bg-background min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-label text-primary mb-4">Component Preview</p>
          <h1 className="text-h1 text-heading mb-6">CategoryHero 5종</h1>
          <p className="text-body-lg text-body max-w-2xl mx-auto">
            각 카테고리 Hero 섹션 우측에 배치될 시각 컴포넌트입니다. 실제 적용 시 SectionHero의 우측 컬럼에 삽입하면 됩니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {previews.map((preview) => (
            <div key={preview.id} className={`rounded-2xl border-2 p-8 ${preview.color}`}>
              <p className="text-label text-body mb-6">{preview.label}</p>
              {preview.component}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
