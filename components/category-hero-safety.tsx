import { ShieldCheck } from 'lucide-react'

const tiers = [
  {
    name: 'Gold',
    count: 12,
    lastVerified: '2025-Q1',
    bg: 'bg-amber-50',
    border: 'border-amber-300',
    badge: 'bg-amber-400 text-white',
    size: 'text-2xl',
    ring: 'ring-amber-300',
  },
  {
    name: 'Silver',
    count: 28,
    lastVerified: '2025-Q1',
    bg: 'bg-slate-50',
    border: 'border-slate-300',
    badge: 'bg-slate-400 text-white',
    size: 'text-xl',
    ring: 'ring-slate-200',
  },
  {
    name: 'Bronze',
    count: 41,
    lastVerified: '2025-Q1',
    bg: 'bg-orange-50',
    border: 'border-orange-300',
    badge: 'bg-orange-500 text-white',
    size: 'text-lg',
    ring: 'ring-orange-200',
  },
]

export function CategoryHeroSafety() {
  return (
    <div className="w-full max-w-sm">
      {/* 헤더 */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
        </div>
        <span className="text-label text-emerald-600">보증업체 Tier 등급표</span>
      </div>

      {/* Tier 카드 */}
      <div className="space-y-2.5">
        {tiers.map((tier, i) => (
          <div
            key={tier.name}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 ${tier.bg} ${tier.border} ring-1 ${tier.ring}`}
            style={{ transform: `scale(${1 - i * 0.025})`, transformOrigin: 'top center' }}
          >
            {/* 배지 */}
            <span className={`inline-flex items-center justify-center w-16 rounded-md py-1 text-body-sm font-bold ${tier.badge} flex-shrink-0`}>
              {tier.name}
            </span>
            {/* 카운트 */}
            <div className="flex-1 min-w-0">
              <span className={`font-bold text-heading ${tier.size}`}>{tier.count}</span>
              <span className="text-body-sm text-body ml-1">개 사이트</span>
            </div>
            {/* 검증일 */}
            <span className="text-caption text-subtle flex-shrink-0">검증 {tier.lastVerified}</span>
          </div>
        ))}
      </div>

      {/* 메시지 */}
      <p className="mt-4 text-caption text-subtle text-center">
        분기 재점검 — 시점 데이터 기반 상대 분류
      </p>
    </div>
  )
}
