import { AlertTriangle, ChevronRight } from 'lucide-react'

const steps = [
  { label: '조회', desc: '사이트명·도메인', time: '즉시' },
  { label: '제보', desc: '환전지연·증빙 입력', time: '즉시' },
  { label: '검토', desc: '편집부 패턴 점검', time: '~7일' },
  { label: '분류', desc: '중립 라벨 부여', time: '분기 반영' },
]

const labels = ['확인 필요', '데이터 부족', '검증 통과']
const labelColors = [
  'bg-amber-100 text-amber-700 border border-amber-300',
  'bg-slate-100 text-slate-600 border border-slate-300',
  'bg-emerald-100 text-emerald-700 border border-emerald-300',
]

export function CategoryHeroReview() {
  return (
    <div className="w-full max-w-sm">
      {/* 헤더 */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
        </div>
        <span className="text-label text-amber-600">제보 처리 4단계</span>
      </div>

      {/* 단계 다이어그램 */}
      <div className="flex items-stretch gap-1">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-1 flex-1 min-w-0">
            <div className="flex-1 min-w-0 bg-secondary border-2 border-border/50 rounded-xl p-3 text-center">
              <div className="w-6 h-6 rounded-full bg-amber-500 text-white text-caption font-bold flex items-center justify-center mx-auto mb-1.5">
                {i + 1}
              </div>
              <p className="text-body-sm font-semibold text-heading">{step.label}</p>
              <p className="text-caption text-subtle mt-0.5 leading-tight">{step.desc}</p>
              <p className="text-caption text-amber-600 font-semibold mt-1">{step.time}</p>
            </div>
            {i < steps.length - 1 && (
              <ChevronRight className="w-3 h-3 text-subtle flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* 분류 라벨 예시 */}
      <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200">
        <p className="text-caption text-subtle mb-2">분류 라벨 예시</p>
        <div className="flex flex-wrap gap-1.5">
          {labels.map((label, i) => (
            <span key={label} className={`text-caption px-2 py-0.5 rounded-full font-medium ${labelColors[i]}`}>
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* 메시지 */}
      <p className="mt-3 text-caption text-subtle text-center">
        즉시 공개 X · 분기 단위 반영
      </p>
    </div>
  )
}
