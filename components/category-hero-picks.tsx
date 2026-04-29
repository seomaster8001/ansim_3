import { Calendar } from 'lucide-react'

const matches = [
  {
    league: 'KBO',
    leagueColor: 'bg-sky-100 text-sky-700',
    home: 'LG 트윈스',
    away: 'SSG 랜더스',
    date: '05.02 (금) 18:30',
  },
  {
    league: 'MLB',
    leagueColor: 'bg-slate-100 text-slate-700',
    home: 'NYY',
    away: 'BOS',
    date: '05.02 (금) 09:05',
  },
  {
    league: 'EPL',
    leagueColor: 'bg-violet-100 text-violet-700',
    home: 'Arsenal',
    away: 'Chelsea',
    date: '05.04 (일) 22:00',
  },
  {
    league: 'K리그',
    leagueColor: 'bg-emerald-100 text-emerald-700',
    home: '전북',
    away: '울산',
    date: '05.03 (토) 19:00',
  },
]

export function CategoryHeroPicks() {
  return (
    <div className="w-full max-w-sm">
      {/* 헤더 */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
          <Calendar className="w-4 h-4 text-sky-600" />
        </div>
        <span className="text-label text-sky-600">경기 일정 보드</span>
      </div>

      {/* 경기 카드 */}
      <div className="space-y-2">
        {matches.map((match, i) => (
          <div key={i} className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-secondary border border-border/70">
            {/* 리그 배지 */}
            <span className={`text-caption font-bold px-2 py-0.5 rounded-md flex-shrink-0 ${match.leagueColor}`}>
              {match.league}
            </span>
            {/* 팀명 */}
            <div className="flex-1 min-w-0">
              <p className="text-body-sm font-semibold text-heading truncate">
                {match.home} <span className="text-subtle font-normal">vs</span> {match.away}
              </p>
            </div>
            {/* 날짜 */}
            <span className="text-caption text-subtle flex-shrink-0 text-right">{match.date}</span>
          </div>
        ))}
      </div>

      {/* 메시지 */}
      <p className="mt-3 text-caption text-subtle text-center">
        일정·기록 정보 (예측 X)
      </p>
    </div>
  )
}
