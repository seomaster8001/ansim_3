import { 
  BarChart3, TrendingUp, Users, Clock, Calendar, 
  CheckCircle, AlertCircle, AlertTriangle, Shield,
  ChevronRight, Target, Activity, Zap, FileText
} from 'lucide-react'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

// ═══════════════════════════════════════════════════════════════════
// 데이터 영역 — 템플릿 재사용 시 이 부분만 수정
// ═══════════════════════════════════════════════════════════════════

const MATCH_DATA = {
  // 기본 정보
  homeTeam: '맨체스터 유나이티드',
  awayTeam: '리버풀',
  date: '2026-05-03',
  time: '21:00',
  stadium: '올드 트래포드',
  league: 'EPL',
  
  // SEO/메타
  h1: '맨유 vs 리버풀 2026-05-03 — 경기 흐름 분석 + 전력 비교 + 라인업 변수',
  subtitle: '올드 트래포드 / 21시 / 양 팀 최근 5경기 + 예상 라인업 + 부상자 명단 / 정보 제공 목적',
  openingAnswer: '맨체스터 유나이티드-리버풀 2026-05-03 EPL 매치업 정보를 Premier League Stats와 스포츠동아 같은 외부 출처 인라인 표기와 안심고고 자체 정리 형식으로 함께 안내하는 정보 제공 목적의 객관 분석입니다.',
  
  // 마지막 갱신
  lastUpdated: '2026-05-02 18:00',
}

// 양 팀 최근 폼
const TEAM_FORM = {
  home: {
    name: '맨유',
    fullName: '맨체스터 유나이티드',
    recent5: ['W', 'D', 'W', 'L', 'W'], // 최근 5경기 결과
    wins: 3,
    draws: 1,
    losses: 1,
    goalsScored: 9, // 최근 5경기 득점
    goalsConceded: 5, // 최근 5경기 실점
    avgScored: 1.8,
    avgConceded: 1.0,
    homeRecord: '10-3-2', // 홈 성적 (승-무-패)
    streak: 'W2', // 연속 기록
    leaguePosition: 4,
  },
  away: {
    name: '리버풀',
    fullName: '리버풀 FC',
    recent5: ['W', 'W', 'W', 'D', 'W'],
    wins: 4,
    draws: 1,
    losses: 0,
    goalsScored: 12,
    goalsConceded: 3,
    avgScored: 2.4,
    avgConceded: 0.6,
    awayRecord: '9-4-2', // 원정 성적
    streak: 'W3',
    leaguePosition: 2,
  },
}

// 주요 선수 매치업
const KEY_PLAYERS = {
  home: {
    player1: {
      name: '브루노 페르난데스',
      position: 'MF',
      goals: 10,
      assists: 8,
      appearances: 32,
      rating: 7.5,
    },
    player2: {
      name: '라쉬포드',
      position: 'FW',
      goals: 14,
      assists: 5,
      appearances: 30,
      rating: 7.2,
    },
    player3: {
      name: '카세미루',
      position: 'MF',
      goals: 3,
      assists: 2,
      appearances: 28,
      rating: 7.0,
    },
  },
  away: {
    player1: {
      name: '살라',
      position: 'FW',
      goals: 22,
      assists: 10,
      appearances: 33,
      rating: 8.2,
    },
    player2: {
      name: '누네스',
      position: 'FW',
      goals: 15,
      assists: 6,
      appearances: 31,
      rating: 7.4,
    },
    player3: {
      name: '맥앨리스터',
      position: 'MF',
      goals: 5,
      assists: 7,
      appearances: 32,
      rating: 7.3,
    },
  },
}

// 헤드투헤드 (시즌 상대전적)
const HEAD_TO_HEAD = {
  homeWins: 1,
  awayWins: 2,
  draws: 1,
  totalGames: 4,
  recentMeetings: [
    { date: '03.10', homeScore: 2, awayScore: 2, winner: '무승부', competition: 'EPL' },
    { date: '12.17', homeScore: 0, awayScore: 2, winner: '리버풀', competition: 'EPL' },
    { date: '10.05', homeScore: 3, awayScore: 1, winner: '맨유', competition: 'FA컵' },
    { date: '08.20', homeScore: 1, awayScore: 2, winner: '리버풀', competition: 'EPL' },
  ],
}

// 라인업/일정 변수
const VARIABLES = [
  { 
    type: 'injury', 
    label: '맨유 부상자: 바란(햄스트링), 쇼(무릎)',
    detail: '수비 라인 약화 우려, 린델로프 선발 예상',
    status: 'away'
  },
  { 
    type: 'injury', 
    label: '리버풀 부상자: 조타(발목)',
    detail: '공격 옵션 감소, 가크포 선발 예상',
    status: 'home'
  },
  { 
    type: 'schedule', 
    label: '맨유: 주중 유로파리그 경기 소화',
    detail: '체력 부담 있음, 로테이션 가능성',
    status: 'away'
  },
  { 
    type: 'weather', 
    label: '맑음, 기온 15도',
    detail: '경기 진행에 영향 없음',
    status: 'neutral'
  },
]

// FAQ
const FAQ_DATA = [
  {
    question: '본 페이지 분석은 이용 권유 자료인가요?',
    answer: '아니요. 본 페이지는 순수 정보 제공 목적의 객관적 데이터 분석 자료입니다. 어떠한 이용이나 결정을 권유하지 않으며, 모든 판단과 책임은 사용자 본인에게 있습니다.',
  },
  {
    question: '분석에 사용된 외부 데이터 출처는 무엇인가요?',
    answer: 'Premier League Stats, Opta, 스포츠동아 등 공신력 있는 외부 출처의 데이터를 활용하며, 각 데이터 옆에 출처를 인라인으로 표기합니다.',
  },
  {
    question: '매치업 흐름이 경기 직전에 변경되면 본 페이지는 어떻게 갱신되나요?',
    answer: '라인업 확정, 부상자 변동 등 주요 변경 사항 발생 시 가능한 빠르게 갱신합니다. 페이지 상단의 "마지막 갱신" 시간을 확인하세요.',
  },
]

// 데이터 출처
const SOURCES = [
  { name: 'Premier League Stats', url: 'https://www.premierleague.com/stats' },
  { name: 'Opta', url: 'https://www.optasports.com' },
  { name: '스포츠동아', url: 'https://sports.donga.com' },
]

// ═══════════════════════════════════════════════════════════════════
// 페이지 컴포넌트
// ═══════════════════════════════════════════════════════════════════

export default function EPLAnalysisPage() {
  return (
    <main className="min-h-screen bg-background">
      
      {/* ── HERO SECTION ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          {/* 브레드크럼 */}
          <nav className="flex items-center gap-2 text-body-sm text-body mb-8">
            <a href="/" className="hover:text-primary transition-colors">홈</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/picks/" className="hover:text-primary transition-colors">스포츠분석</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/picks/football/" className="hover:text-primary transition-colors">축구</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-heading font-medium">EPL</span>
          </nav>

          {/* H1 */}
          <h1 className="text-h1 text-heading mb-6" style={{ wordBreak: 'keep-all' }}>
            {MATCH_DATA.h1}
          </h1>
          
          {/* Subtitle */}
          <p className="text-body-lg text-body max-w-3xl mb-8" style={{ wordBreak: 'keep-all' }}>
            {MATCH_DATA.subtitle}
          </p>

          {/* 메타 정보 */}
          <div className="flex flex-wrap items-center gap-4 text-body-sm text-body">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {MATCH_DATA.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              마지막 갱신: {MATCH_DATA.lastUpdated}
            </span>
            <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
              {MATCH_DATA.league}
            </span>
          </div>
        </div>
      </section>

      {/* ── 편집자 의견 ── */}
      <section className="py-10 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="p-6 rounded-xl border-2 border-border bg-secondary">
            <div className="flex items-start gap-4">
              {/* 아이콘 */}
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <FileText className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1">
                {/* 헤더 */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-body font-bold text-heading">편집자 의견</span>
                    <span className="ml-2 px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">분석 노트</span>
                  </div>
                  <span className="text-xs text-body">안심고고 분석팀 · {MATCH_DATA.lastUpdated}</span>
                </div>

                {/* 본문 */}
                <p className="text-body text-body leading-relaxed mb-4" style={{ wordBreak: 'keep-all' }}>
                  이번 매치의 핵심은 <strong className="text-heading">홈팀 맨체스터 시티의 최근 수비 불안</strong>과 <strong className="text-heading">아스널의 원정 강세</strong>가 충돌하는 구도입니다.
                  시티는 최근 3경기 연속 실점(총 7실점)으로 수비 조직이 흔들리고 있는 반면, 아스날은 원정 최근 5경기 중 4승으로 원정 성적이 뛰어납니다.
                </p>
                <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                  선발 라인업 확정 전까지 핵심 변수는 <strong className="text-heading">하랄드 노르드베이트의 부상 여부</strong>입니다.
                  해당 정보는 경기 당일 공식 라인업 발표 시점에 갱신됩니다. 본 의견은 데이터 기반의 정보 제공 목적이며 결과를 예측하거나 이용을 권유하는 자료가 아닙니다.
                </p>

                {/* 면책 태그 */}
                <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-body" />
                  <span className="text-xs text-body">정보 제공 목적 · 이용 권유 아님 · KGAB 톤앤매너 준수</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: 매치업 개요 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-border">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-h2 text-heading">매치업 개요</h2>
          </div>

          <div className="p-6 rounded-xl bg-secondary border-2 border-border mb-8">
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
              <p className="text-body-sm text-body">킥오프</p>
            </div>
            <div className="p-5 rounded-xl bg-background border-2 border-border">
              <div className="flex items-center justify-between mb-3">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <p className="text-h4 text-heading font-bold mb-1">{HEAD_TO_HEAD.homeWins}-{HEAD_TO_HEAD.draws}-{HEAD_TO_HEAD.awayWins}</p>
              <p className="text-body-sm text-body">시즌 상대전적</p>
            </div>
            <div className="p-5 rounded-xl bg-background border-2 border-border">
              <div className="flex items-center justify-between mb-3">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <p className="text-h4 text-heading font-bold mb-1">{TEAM_FORM.home.leaguePosition}위 vs {TEAM_FORM.away.leaguePosition}위</p>
              <p className="text-body-sm text-body">리그 순위</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: 양 팀 최근 폼 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-border">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-h2 text-heading">양 팀 최근 폼 (최근 5경기)</h2>
          </div>

          {/* 2칼럼 레이아웃 */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* 홈팀 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{TEAM_FORM.home.name[0]}</span>
                  </div>
                  <h3 className="text-h4 text-heading">{TEAM_FORM.home.fullName} (홈)</h3>
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
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{TEAM_FORM.home.wins}-{TEAM_FORM.home.draws}-{TEAM_FORM.home.losses}</p>
                  <p className="text-xs text-body">승-무-패</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{TEAM_FORM.home.goalsScored}</p>
                  <p className="text-xs text-body">득점</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{TEAM_FORM.home.goalsConceded}</p>
                  <p className="text-xs text-body">실점</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 text-center">
                <p className="text-body-sm text-body">홈 성적: <span className="font-semibold text-heading">{TEAM_FORM.home.homeRecord}</span></p>
              </div>
            </div>

            {/* 원정팀 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-lg font-bold text-slate-600">{TEAM_FORM.away.name[0]}</span>
                  </div>
                  <h3 className="text-h4 text-heading">{TEAM_FORM.away.fullName} (원정)</h3>
                </div>
                <span className="px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700">
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
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{TEAM_FORM.away.wins}-{TEAM_FORM.away.draws}-{TEAM_FORM.away.losses}</p>
                  <p className="text-xs text-body">승-무-패</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{TEAM_FORM.away.goalsScored}</p>
                  <p className="text-xs text-body">득점</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{TEAM_FORM.away.goalsConceded}</p>
                  <p className="text-xs text-body">실점</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 text-center">
                <p className="text-body-sm text-body">원정 성적: <span className="font-semibold text-heading">{TEAM_FORM.away.awayRecord}</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: 주요 선수 매치업 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-border">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-h2 text-heading">주요 선수 매치업</h2>
          </div>

          {/* 2칼럼 레이아웃 */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* 홈팀 주요 선수 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-4 pb-3 border-b border-border/50">{TEAM_FORM.home.fullName} 주요 선수</h3>
              <div className="space-y-3">
                {Object.values(KEY_PLAYERS.home).map((player, i) => (
                  <div key={i} className="p-4 rounded-lg bg-secondary">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-body font-semibold text-heading">{player.name}</span>
                        <span className="px-1.5 py-0.5 rounded text-xs bg-primary/10 text-primary">{player.position}</span>
                      </div>
                      <span className="text-body-sm text-body">평점 {player.rating}</span>
                    </div>
                    <div className="flex gap-4 text-xs text-body">
                      <span>{player.goals}골</span>
                      <span>{player.assists}어시</span>
                      <span>{player.appearances}경기</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 원정팀 주요 선수 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-4 pb-3 border-b border-border/50">{TEAM_FORM.away.fullName} 주요 선수</h3>
              <div className="space-y-3">
                {Object.values(KEY_PLAYERS.away).map((player, i) => (
                  <div key={i} className="p-4 rounded-lg bg-secondary">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-body font-semibold text-heading">{player.name}</span>
                        <span className="px-1.5 py-0.5 rounded text-xs bg-slate-200 text-slate-600">{player.position}</span>
                      </div>
                      <span className="text-body-sm text-body">평점 {player.rating}</span>
                    </div>
                    <div className="flex gap-4 text-xs text-body">
                      <span>{player.goals}골</span>
                      <span>{player.assists}어시</span>
                      <span>{player.appearances}경기</span>
                    </div>
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
          <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-border">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-h2 text-heading">헤드투헤드 (시즌 상대전적)</h2>
          </div>

          {/* 2칼럼 레이아웃 */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* 상대 전적 요약 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-6 pb-3 border-b border-border/50">시즌 맞대결 요약</h3>
              
              {/* 전적 바 */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-body-sm text-primary font-medium">{TEAM_FORM.home.name} {HEAD_TO_HEAD.homeWins}승</span>
                  <span className="text-body-sm text-slate-500 font-medium">무 {HEAD_TO_HEAD.draws}</span>
                  <span className="text-body-sm text-slate-600 font-medium">{TEAM_FORM.away.name} {HEAD_TO_HEAD.awayWins}승</span>
                </div>
                <div className="h-4 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-primary" 
                    style={{ width: `${(HEAD_TO_HEAD.homeWins / HEAD_TO_HEAD.totalGames) * 100}%` }} 
                  />
                  <div 
                    className="bg-slate-300" 
                    style={{ width: `${(HEAD_TO_HEAD.draws / HEAD_TO_HEAD.totalGames) * 100}%` }} 
                  />
                  <div 
                    className="bg-slate-500" 
                    style={{ width: `${(HEAD_TO_HEAD.awayWins / HEAD_TO_HEAD.totalGames) * 100}%` }} 
                  />
                </div>
              </div>

              {/* 통계 */}
              <div className="grid grid-cols-4 gap-2">
                <div className="p-3 rounded-lg bg-secondary text-center">
                  <p className="text-h4 text-heading font-bold">{HEAD_TO_HEAD.totalGames}</p>
                  <p className="text-xs text-body">총 경기</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/10 text-center">
                  <p className="text-h4 text-primary font-bold">{HEAD_TO_HEAD.homeWins}</p>
                  <p className="text-xs text-body">{TEAM_FORM.home.name}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-100 text-center">
                  <p className="text-h4 text-slate-500 font-bold">{HEAD_TO_HEAD.draws}</p>
                  <p className="text-xs text-body">무승부</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-200 text-center">
                  <p className="text-h4 text-slate-600 font-bold">{HEAD_TO_HEAD.awayWins}</p>
                  <p className="text-xs text-body">{TEAM_FORM.away.name}</p>
                </div>
              </div>
            </div>

            {/* 최근 맞대결 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-4 pb-3 border-b border-border/50">최근 맞대결</h3>
              <div className="space-y-2">
                {HEAD_TO_HEAD.recentMeetings.map((m, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                    <div className="flex items-center gap-2">
                      <span className="text-body-sm text-body">{m.date}</span>
                      <span className="text-xs text-body px-1.5 py-0.5 rounded bg-slate-100">{m.competition}</span>
                    </div>
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
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {m.winner === '무승부' ? 'D' : m.winner}
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
          <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-border">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
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
                      v.type === 'injury' ? 'bg-red-100' :
                      v.type === 'weather' ? 'bg-green-100' :
                      'bg-amber-100'
                    }`}>
                      {v.type === 'injury' ? <AlertTriangle className="w-4 h-4 text-red-600" /> :
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
          <div className="mt-6 p-4 rounded-xl bg-amber-50 border-2 border-amber-200">
            <p className="text-body-sm text-amber-700 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span style={{ wordBreak: 'keep-all' }}>
                라인업 및 부상자 명단은 경기 직전 변경될 수 있습니다. 킥오프 1시간 전 공식 라인업을 확인하세요.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── H2: FAQ ── */}
      <SectionFAQ items={FAQ_DATA} />

      {/* ── CTA SECTION ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
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
      <section className="py-12 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-body font-semibold text-heading mb-4">데이터 출처</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {SOURCES.map((s, i) => (
              <a 
                key={i} 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-body-sm text-body hover:border-primary/50 transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
          
          <div className="p-4 rounded-xl bg-slate-50 border border-border">
            <p className="text-xs text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              <strong>면책 조항:</strong> 본 페이지는 순수 정보 제공 목적으로 작성되었으며, 어떠한 이용이나 결정을 권유하지 않습니다. 
              모든 데이터는 외부 출처에서 수집되었으며, 정확성을 보장하지 않습니다. 
              본 자료를 참고한 모든 판단과 결정에 대한 책임은 사용자 본인에게 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 카테고리 섹션 ── */}
      <SectionCategories />

    </main>
  )
}
