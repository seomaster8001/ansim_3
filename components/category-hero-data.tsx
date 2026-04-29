import { BarChart3, TrendingUp, TrendingDown, Minus } from 'lucide-react'

const stats = [
  {
    label: '등록 사이트',
    value: '81',
    unit: '개',
    trend: 'up',
    change: '+12%',
    sub: '전 분기 대비',
  },
  {
    label: '점검 통과율',
    value: '74',
    unit: '%',
    trend: 'down',
    change: '-3%',
    sub: '전 분기 대비',
  },
  {
    label: '신규 제보',
    value: '143',
    unit: '건',
    trend: 'flat',
    change: '→',
    sub: '이번 분기',
  },
  {
    label: '강등·제외',
    value: '9',
    unit: '건',
    trend: 'up',
    change: '+2건',
    sub: '전 분기 대비',
  },
]

const TrendIcon = ({ trend }: { trend: string }) => {
  if (trend === 'up') return <TrendingUp className="w-3 h-3 text-emerald-500" />
  if (trend === 'down') return <TrendingDown className="w-3 h-3 text-red-500" />
  return <Minus className="w-3 h-3 text-slate-400" />
}

const trendColor = (trend: string) => {
  if (trend === 'up') return 'text-emerald-600'
  if (trend === 'down') return 'text-red-500'
  return 'text-slate-500'
}

export function CategoryHeroData() {
  return (
    <div className="w-full max-w-sm">
      {/* 헤더 */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
          <BarChart3 className="w-4 h-4 text-violet-600" />
        </div>
        <span className="text-label text-violet-600">분기 통계 대시보드</span>
      </div>

      {/* 4-tile 통계 */}
      <div className="grid grid-cols-2 gap-2.5">
        {stats.map((stat) => (
          <div key={stat.label} className="p-3 rounded-xl bg-violet-50 border border-violet-100">
            <p className="text-caption text-subtle mb-1">{stat.label}</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-h3 text-heading font-bold leading-none">{stat.value}</span>
              <span className="text-body-sm text-body mb-0.5">{stat.unit}</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendIcon trend={stat.trend} />
              <span className={`text-caption font-semibold ${trendColor(stat.trend)}`}>{stat.change}</span>
              <span className="text-caption text-subtle">{stat.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 메시지 */}
      <p className="mt-3 text-caption text-subtle text-center">
        분기 단위 누적 통계
      </p>
    </div>
  )
}
