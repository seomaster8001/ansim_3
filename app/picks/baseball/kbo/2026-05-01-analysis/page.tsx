import { 
  BarChart3, TrendingUp, Users, Clock, Calendar, 
  CheckCircle, AlertCircle, AlertTriangle, Shield,
  ChevronRight, Target, Activity, Zap
} from 'lucide-react'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

// ═══════════════════════════════════════════════════════════════════
// 📊 데이터 영역 — 템플릿 재사용 시 이 부분만 수정
// ═══════════════════════════════════════════════════════════════════

const MATCH_DATA = {
  // 기본 정보
  homeTeam: '두산',
  awayTeam: 'LG',
  date: '2026-05-01',
  time: '18:30',
  stadium: '잠실',
  league: 'KBO',
  
  // SEO/메타
  h1: '두산 vs LG 2026-05-01 — 경기 흐름 분석 + 전력 비교 + 라인업 변수',
  subtitle: '잠실 / 18시 30분 / 양 팀 최근 5경기 + 선발 매치업 + 라인업 변수 / 정보 제공 목적',
  openingAnswer: '두산-LG 2026-05-01 KBO 매치업 정보를 KBO Stats와 스포츠동아 같은 외부 출처 인라인 표기와 안심고고 자체 정리 형식으로 함께 안내하는 정보 제공 목적의 객관 분석입니다.',
  
  // 마지막 갱신
  lastUpdated: '2026-04-30 22:00',
}

// 양 팀 최근 폼
const TEAM_FORM = {
  home: {
    name: '두산',
    recent5: ['W', 'W', 'L', 'W', 'L'], // 최근 5경기 결과
    wins: 3,
    losses: 2,
    runsScored: 28, // 최근 5경기 득점
    runsAllowed: 22, // 최근 5경기 실점
    avgScored: 5.6,
    avgAllowed: 4.4,
    homeRecord: '12-5', // 홈 성적
    streak: 'W1', // 연속 기록
  },
  away: {
    name: 'LG',
    recent5: ['W', 'L', 'W', 'W', 'L'],
    wins: 3,
    losses: 2,
    runsScored: 25,
    runsAllowed: 20,
    avgScored: 5.0,
    avgAllowed: 4.0,
    awayRecord: '10-8', // 원정 성적
    streak: 'L1',
  },
}

// 선발 투수 매치업
const PITCHERS = {
  home: {
    name: '곽빈',
    era: '3.45',
    wins: 4,
    losses: 2,
    innings: '52.1',
    strikeouts: 48,
    whip: '1.21',
    recentGames: [
      { date: '04.25', opponent: '삼성', result: 'W', innings: '6.0', runs: 2 },
      { date: '04.18', opponent: 'KT', result: 'L', innings: '5.0', runs: 4 },
      { date: '04.11', opponent: 'NC', result: 'W', innings: '7.0', runs: 1 },
    ],
  },
  away: {
    name: '켈리',
    era: '3.12',
    wins: 5,
    losses: 1,
    innings: '57.2',
    strikeouts: 55,
    whip: '1.08',
    recentGames: [
      { date: '04.26', opponent: '한화', result: 'W', innings: '6.2', runs: 2 },
      { date: '04.19', opponent: 'SSG', result: 'W', innings: '7.0', runs: 1 },
      { date: '04.12', opponent: '삼성', result: 'W', innings: '6.1', runs: 3 },
    ],
  },
}

// 헤드투헤드 (시즌 상대전적)
const HEAD_TO_HEAD = {
  homeWins: 3,
  awayWins: 2,
  totalGames: 5,
  recentMeetings: [
    { date: '04.15', homeScore: 5, awayScore: 3, winner: '두산' },
    { date: '04.02', homeScore: 2, awayScore: 6, winner: 'LG' },
    { date: '03.28', homeScore: 4, awayScore: 4, winner: '무승부' },
    { date: '03.15', homeScore: 7, awayScore: 3, winner: '두산' },
    { date: '03.08', homeScore: 1, awayScore: 5, winner: 'LG' },
  ],
}

// 라인업/일정 변수
const VARIABLES = [
  { type: 'lineup', label: '주요 타자 컨디션', detail: '두산 양의지 출장 예정 / LG 오지환 최근 4경기 10안타', status: 'neutral' },
  { type: 'lineup', label: '불펜 가동률', detail: '두산 불펜 전일 3이닝 소화 / LG 불펜 2일 휴식', status: 'away' },
  { type: 'weather', label: '기상 조건', detail: '맑음 / 기온 18°C / 습도 45% / 바람 약함', status: 'neutral' },
  { type: 'schedule', label: '일정 피로도', detail: '두산 3연전 마지막 / LG 2연전 첫 경기', status: 'away' },
]

// 출처 정보
const SOURCES = [
  { name: 'KBO Stats API', url: 'https://www.koreabaseball.com' },
  { name: '스포츠동아', url: 'https://sports.donga.com' },
]

// FAQ
const FAQ_ITEMS = [
  {
    q: '본 페이지 분석은 이용 권유 자료인가요',
    a: '본 페이지는 KBO 경기 데이터와 통계를 정보 제공 목적으로 정리한 자료이며, 특정 결과를 예측하거나 이용을 권유하는 자료가 아닙니다. 모든 데이터는 외부 출처를 인라인 표기하고 있으며, 사용자가 직접 비교 판단할 수 있도록 보조 역할만 합니다.',
  },
  {
    q: '분석에 사용된 외부 데이터 출처는 무엇인가요',
    a: '본 페이지는 KBO Stats API와 스포츠동아 등 공개된 외부 통계 자료를 참조하며, 각 데이터 항목에 출처를 인라인 표기합니다. 안심고고 편집부가 해당 자료를 정리하여 제공하며, 원본 데이터의 정확성은 출처 기관에 귀속됩니다.',
  },
  {
    q: '매치업 흐름이 경기 직전에 변경되면 본 페이지는 어떻게 갱신되나요',
    a: '선발 투수 변경, 라인업 확정, 기상 조건 변화 등 주요 변수가 발생하면 경기 시작 1시간 전까지 페이지를 갱신합니다. 갱신 일시는 페이지 상단에 표기되며, 실시간 변동 사항은 라이브스코어 페이지에서 확인할 수 있습니다.',
  },
]

export const metadata = {
  title: `${MATCH_DATA.homeTeam} vs ${MATCH_DATA.awayTeam} ${MATCH_DATA.date} 경기 분석 — 안심고고`,
  description: MATCH_DATA.subtitle,
}

// ═══════════════════════════════════════════════════════════════════
// 🎨 컴포넌트 영역
// ═══════════════════════════════════════════════════════════════════

export default function KBOAnalysisPage() {
  return (
    <main 
      data-category="picks" 
      style={{
        '--primary': '#ef4444',
        '--primary-foreground': '#ffffff',
        '--accent': '#fef2f2',
        '--accent-foreground': '#b91c1c',
      } as React.CSSProperties}
      className="min-h-screen bg-background font-sans"
    >
      {/* ── HERO SECTION ── */}
      <section className="relative py-20 md:py-28 px-6 md:px-20 bg-gradient-to-b from-red-50 to-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          {/* 상단 배지 */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-label font-semibold">
              {MATCH_DATA.league}
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary text-heading text-label font-medium">
              {MATCH_DATA.stadium}
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary text-heading text-label font-medium flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {MATCH_DATA.time}
            </span>
          </div>
          
          <h1 className="text-display text-heading mb-6" style={{ wordBreak: 'keep-all' }}>
            {MATCH_DATA.h1}
          </h1>
          <p className="text-body-lg text-body mb-8 max-w-3xl leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            {MATCH_DATA.subtitle}
          </p>

          {/* 매치업 카드 */}
          <div className="p-6 rounded-xl bg-background border-2 border-border shadow-sm">
            <div className="flex items-center justify-between gap-4">
              {/* 홈팀 */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">{TEAM_FORM.home.name[0]}</span>
                </div>
                <p className="text-h3 text-heading font-bold">{TEAM_FORM.home.name}</p>
                <p className="text-body-sm text-body">홈 {TEAM_FORM.home.homeRecord}</p>
              </div>
              
              {/* VS */}
              <div className="flex flex-col items-center px-6">
                <span className="text-h2 text-primary font-bold">VS</span>
                <span className="text-body-sm text-body mt-1">{MATCH_DATA.date}</span>
              </div>
              
              {/* 원정팀 */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-slate-600">{TEAM_FORM.away.name[0]}</span>
                </div>
                <p className="text-h3 text-heading font-bold">{TEAM_FORM.away.name}</p>
                <p className="text-body-sm text-body">원정 {TEAM_FORM.away.awayRecord}</p>
              </div>
            </div>
          </div>

          {/* 갱신 일시 */}
          <p className="text-xs text-body mt-4 flex items-center gap-2">
            <Clock className="w-3 h-3" />
            마지막 갱신: {MATCH_DATA.lastUpdated}
          </p>
        </div>
      </section>

      {/* ── H2: 매치업 개요 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-6 h-6 text-primary" />
            <h2 className="text-h2 text-heading">매치업 개요</h2>
          </div>

          <div className="p-6 rounded-xl bg-secondary border border-border/50 mb-8">
            <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              {MATCH_DATA.openingAnswer}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-background border-2 border-border">
              <div className="flex items-center justify-between mb-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">{MATCH_DATA.league}</span>
              </div>
              <p className="text-h4 text-heading font-bold mb-1">{MATCH_DATA.date}</p>
              <p className="text-body-sm text-body">경기 일자</p>
            </div>
            <div className="p-5 rounded-xl bg-background border-2 border-border">
              <div className="flex items-center justify-between mb-3">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <p className="text-h4 text-heading font-bold mb-1">{MATCH_DATA.time}</p>
              <p className="text-body-sm text-body">경기 시작</p>
            </div>
            <div className="p-5 rounded-xl bg-background border-2 border-border">
              <div className="flex items-center justify-between mb-3">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <p className="text-h4 text-heading font-bold mb-1">{HEAD_TO_HEAD.homeWins}-{HEAD_TO_HEAD.awayWins}</p>
              <p className="text-body-sm text-body">시즌 상대전적</p>
            </div>
            <div className="p-5 rounded-xl bg-background border-2 border-border">
              <div className="flex items-center justify-between mb-3">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <p className="text-h4 text-heading font-bold mb-1">{HEAD_TO_HEAD.totalGames}경기</p>
              <p className="text-body-sm text-body">시즌 맞대결</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: 양 팀 최근 폼 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-h2 text-heading">양 팀 최근 폼 (최근 5경기)</h2>
          </div>

          {/* 2칼럼 레이아웃 */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* 홈팀 */}
            <div className="p-6 rounded-xl bg-background border-2 border-primary/30">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{TEAM_FORM.home.name[0]}</span>
                  </div>
                  <h3 className="text-h4 text-heading">{TEAM_FORM.home.name} (홈)</h3>
                </div>
                <span className="px-2 py-1 rounded text-xs font-semibold bg-primary/10 text-primary">
                  {TEAM_FORM.home.streak}
                </span>
              </div>

              {/* 최근 5경기 */}
              <div className="flex gap-2 mb-6">
                {TEAM_FORM.home.recent5.map((r, i) => (
                  <span key={i} className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                    r === 'W' ? 'bg-green-100 text-green-700' : 
                    r === 'L' ? 'bg-red-100 text-red-700' : 
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {r}
                  </span>
                ))}
              </div>

              {/* 통계 */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{TEAM_FORM.home.avgScored}</p>
                  <p className="text-xs text-body">평균 득점</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{TEAM_FORM.home.avgAllowed}</p>
                  <p className="text-xs text-body">평균 실점</p>
                </div>
              </div>
            </div>

            {/* 원정팀 */}
            <div className="p-6 rounded-xl bg-background border-2 border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <span className="text-lg font-bold text-slate-600">{TEAM_FORM.away.name[0]}</span>
                  </div>
                  <h3 className="text-h4 text-heading">{TEAM_FORM.away.name} (원정)</h3>
                </div>
                <span className="px-2 py-1 rounded text-xs font-semibold bg-slate-100 text-slate-600">
                  {TEAM_FORM.away.streak}
                </span>
              </div>

              {/* 최근 5경기 */}
              <div className="flex gap-2 mb-6">
                {TEAM_FORM.away.recent5.map((r, i) => (
                  <span key={i} className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                    r === 'W' ? 'bg-green-100 text-green-700' : 
                    r === 'L' ? 'bg-red-100 text-red-700' : 
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {r}
                  </span>
                ))}
              </div>

              {/* 통계 */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{TEAM_FORM.away.avgScored}</p>
                  <p className="text-xs text-body">평균 득점</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{TEAM_FORM.away.avgAllowed}</p>
                  <p className="text-xs text-body">평균 실점</p>
                </div>
              </div>
            </div>
          </div>

          {/* 출처 표기 */}
          <p className="text-xs text-body mt-4">
            * 데이터 출처: KBO Stats API (2026.04.30 기준)
          </p>
        </div>
      </section>

      {/* ── H2: 선발 투수 매치업 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-primary" />
            <h2 className="text-h2 text-heading">선발 투수 매치업</h2>
          </div>

          {/* 2칼럼 레이아웃 */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* 홈팀 선발 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{PITCHERS.home.name[0]}</span>
                </div>
                <div>
                  <p className="text-h4 text-heading font-bold">{PITCHERS.home.name}</p>
                  <p className="text-body-sm text-body">{TEAM_FORM.home.name} 선발</p>
                </div>
              </div>

              {/* 주요 지표 */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{PITCHERS.home.era}</p>
                  <p className="text-xs text-body">ERA</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{PITCHERS.home.wins}-{PITCHERS.home.losses}</p>
                  <p className="text-xs text-body">승-패</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{PITCHERS.home.whip}</p>
                  <p className="text-xs text-body">WHIP</p>
                </div>
              </div>

              {/* 최근 등판 */}
              <p className="text-body-sm text-body font-medium mb-3">최근 등판</p>
              <div className="space-y-2">
                {PITCHERS.home.recentGames.map((g, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-50 text-xs">
                    <span className="text-body">{g.date} vs {g.opponent}</span>
                    <span className={`font-medium ${g.result === 'W' ? 'text-green-600' : 'text-red-600'}`}>
                      {g.result} / {g.innings}이닝 {g.runs}실점
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 원정팀 선발 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <span className="text-lg font-bold text-slate-600">{PITCHERS.away.name[0]}</span>
                </div>
                <div>
                  <p className="text-h4 text-heading font-bold">{PITCHERS.away.name}</p>
                  <p className="text-body-sm text-body">{TEAM_FORM.away.name} 선발</p>
                </div>
              </div>

              {/* 주요 지표 */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{PITCHERS.away.era}</p>
                  <p className="text-xs text-body">ERA</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{PITCHERS.away.wins}-{PITCHERS.away.losses}</p>
                  <p className="text-xs text-body">승-패</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{PITCHERS.away.whip}</p>
                  <p className="text-xs text-body">WHIP</p>
                </div>
              </div>

              {/* 최근 등판 */}
              <p className="text-body-sm text-body font-medium mb-3">최근 등판</p>
              <div className="space-y-2">
                {PITCHERS.away.recentGames.map((g, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-50 text-xs">
                    <span className="text-body">{g.date} vs {g.opponent}</span>
                    <span className={`font-medium ${g.result === 'W' ? 'text-green-600' : 'text-red-600'}`}>
                      {g.result} / {g.innings}이닝 {g.runs}실점
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: 헤드투헤드 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Activity className="w-6 h-6 text-primary" />
            <h2 className="text-h2 text-heading">헤드투헤드 (시즌 상대전적)</h2>
          </div>

          {/* 2칼럼 레이아웃 */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* 상대 전적 요약 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-6">시즌 맞대결 요약</h3>
              
              {/* 전적 바 */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-body-sm text-primary font-medium">{TEAM_FORM.home.name} {HEAD_TO_HEAD.homeWins}승</span>
                  <span className="text-body-sm text-slate-600 font-medium">{TEAM_FORM.away.name} {HEAD_TO_HEAD.awayWins}승</span>
                </div>
                <div className="h-4 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-primary" 
                    style={{ width: `${(HEAD_TO_HEAD.homeWins / HEAD_TO_HEAD.totalGames) * 100}%` }} 
                  />
                  <div 
                    className="bg-slate-400" 
                    style={{ width: `${(HEAD_TO_HEAD.awayWins / HEAD_TO_HEAD.totalGames) * 100}%` }} 
                  />
                </div>
              </div>

              {/* 통계 */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{HEAD_TO_HEAD.totalGames}</p>
                  <p className="text-xs text-body">총 경기</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/10 text-center">
                  <p className="text-h4 text-primary font-bold">{HEAD_TO_HEAD.homeWins}</p>
                  <p className="text-xs text-body">{TEAM_FORM.home.name} 승</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-100 text-center">
                  <p className="text-h4 text-slate-600 font-bold">{HEAD_TO_HEAD.awayWins}</p>
                  <p className="text-xs text-body">{TEAM_FORM.away.name} 승</p>
                </div>
              </div>
            </div>

            {/* 최근 맞대결 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-4">최근 맞대결</h3>
              <div className="space-y-2">
                {HEAD_TO_HEAD.recentMeetings.map((m, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                    <span className="text-body-sm text-body">{m.date}</span>
                    <div className="flex items-center gap-3">
                      <span className={`text-body-sm font-bold ${m.winner === TEAM_FORM.home.name ? 'text-primary' : 'text-heading'}`}>
                        {m.homeScore}
                      </span>
                      <span className="text-body-sm text-body">:</span>
                      <span className={`text-body-sm font-bold ${m.winner === TEAM_FORM.away.name ? 'text-slate-600' : 'text-heading'}`}>
                        {m.awayScore}
                      </span>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      m.winner === TEAM_FORM.home.name 
                        ? 'bg-primary/10 text-primary' 
                        : m.winner === TEAM_FORM.away.name
                        ? 'bg-slate-100 text-slate-600'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {m.winner}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: 라인업/일정 변수 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="w-6 h-6 text-primary" />
            <h2 className="text-h2 text-heading">라인업/일정 변수</h2>
          </div>

          <div className="space-y-4">
            {VARIABLES.map((v, i) => (
              <div key={i} className={`p-5 rounded-xl border-2 ${
                v.status === 'home' ? 'bg-primary/5 border-primary/30' :
                v.status === 'away' ? 'bg-slate-50 border-slate-200' :
                'bg-background border-border'
              }`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      v.type === 'lineup' ? 'bg-blue-100' :
                      v.type === 'weather' ? 'bg-green-100' :
                      'bg-amber-100'
                    }`}>
                      {v.type === 'lineup' ? <Users className="w-4 h-4 text-blue-600" /> :
                       v.type === 'weather' ? <Activity className="w-4 h-4 text-green-600" /> :
                       <Calendar className="w-4 h-4 text-amber-600" />}
                    </div>
                    <div>
                      <p className="text-body font-medium text-heading mb-1">{v.label}</p>
                      <p className="text-body-sm text-body">{v.detail}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium flex-shrink-0 ${
                    v.status === 'home' ? 'bg-primary/10 text-primary' :
                    v.status === 'away' ? 'bg-slate-100 text-slate-600' :
                    'bg-slate-100 text-slate-500'
                  }`}>
                    {v.status === 'home' ? TEAM_FORM.home.name + ' 유리' :
                     v.status === 'away' ? TEAM_FORM.away.name + ' 유리' :
                     '중립'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 주의 문구 */}
          <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <p className="text-body-sm text-amber-700 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span style={{ wordBreak: 'keep-all' }}>
                라인업 및 일정 변수는 경기 시작 전 변경될 수 있습니다. 경기 직전 공식 라인업을 확인하세요.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <SectionFAQ 
        items={FAQ_ITEMS} 
        description="본 경기 분석 페이지에 관한 자주 묻는 질문을 정리했습니다."
      />

      {/* ── CTA SECTION ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-accent border-b border-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-h2 text-heading mb-6">더 알아보기</h2>
          <p className="text-body-lg text-body max-w-2xl mx-auto mb-10" style={{ wordBreak: 'keep-all' }}>
            스포츠 분석 자료 활용 안내와 사용자 보호 가이드를 확인하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/guide/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-body-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <Shield className="w-4 h-4" />
              사용자 보호 가이드
            </a>
            <a
              href="/support/faq/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-background border-2 border-border text-heading text-body-sm font-semibold hover:border-primary/50 transition-colors"
            >
              <AlertCircle className="w-4 h-4" />
              자주 묻는 질문
            </a>
          </div>
        </div>
      </section>

      {/* ── 출처 및 면책 ── */}
      <section className="py-12 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-body font-semibold text-heading mb-4">데이터 출처</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {SOURCES.map((s, i) => (
              <a 
                key={i} 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-background border border-border text-body-sm text-body hover:border-primary/50 transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
          <p className="text-xs text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            본 페이지는 KBO 경기 데이터와 통계를 정보 제공 목적으로 정리한 자료입니다. 특정 결과를 예측하거나 이용을 권유하는 자료가 아니며, 데이터의 정확성은 출처 기관에 귀속됩니다. 안심고고는 본 자료를 근거로 한 사용자의 판단에 대해 책임을 지지 않습니다.
          </p>
        </div>
      </section>

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="picks" />
    </main>
  )
}
