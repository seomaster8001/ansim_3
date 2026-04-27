import { Search, Check, AlertCircle, Minus, Shield, TrendingUp, Database, Users } from 'lucide-react'

/* ─── 원문 텍스트 ─────────────────────────── */
const HERO_TITLE = '먹튀검증, 사이트 조회와 제보 확인까지 한 번에'
const HERO_BODY =
  '안심고고는 사이트명이나 주소를 입력해 최근 확인일, 주소 변경 이력, 제보 현황, 확인 필요 여부를 살펴볼 수 있는 검증 정보 플랫폼입니다. 2022년 운영을 시작해 4년 동안 자체 갱신 데이터를 정리해 왔으며, 편집부 5명이 실명·사진·경력을 공개한 채 운영하고 있습니다. 가입이나 이용을 유도하지 않으며, 접속 전 확인해야 할 위험 신호와 공개 신고 경로를 정리합니다.'

const SEARCH_TITLE = '사이트 조회로 먼저 확인하세요'
const SEARCH_P1 =
  '사이트명이나 현재 주소를 검색하면 등록된 정보, 마지막 확인일, 주소 변경 흔적, 제보 접수 여부를 한 화면에서 확인할 수 있습니다. 동일 사이트에 반복 제보가 들어오거나 주소 변경이 잦은 경우에는 확인 필요 항목으로 분류해 관련 리포트와 연결합니다.'
const SEARCH_P2 =
  '먹튀 의심 여부는 한 가지 신호만으로 판단하지 않습니다. 최근 확인일이 오래되었는지, 주소가 자주 바뀌었는지, 운영 정보가 일치하는지, 환전 지연이나 추가 입금 요구 같은 제보가 반복되는지를 함께 봅니다. 안심고고는 이러한 신호를 모아 사용자가 접속 전 확인할 수 있도록 정리합니다.'
const SEARCH_P3 =
  '검색 결과에는 사이트명, 현재 상태, 마지막 확인일, 주소 변경 이력, 관련 제보, 연결된 가이드가 함께 표시됩니다. 확인 가능한 정보가 충분하지 않은 경우에는 단정하지 않고 데이터 부족 또는 확인 필요 상태로 표시합니다.'

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">

      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        {/* Left accent bar */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-400" />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-8 md:px-20 py-7 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-neutral-900 tracking-tight">안심고고</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-500">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              운영중
            </span>
            <span className="w-px h-4 bg-neutral-200" />
            <span>Since 2022</span>
            <span className="w-px h-4 bg-neutral-200" />
            <span>편집부 5명 실명 공개</span>
          </div>
        </nav>

        {/* Hero Content — center aligned */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-73px)] px-6 py-20 text-center">
          <div className="w-full max-w-4xl mx-auto">

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-10">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-blue-700 text-sm font-medium tracking-wide">검증 정보 플랫폼</span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-[68px] font-bold text-neutral-900 leading-[1.12] tracking-tight mb-8"
              style={{ wordBreak: 'keep-all', letterSpacing: '-0.02em' }}
            >
              {HERO_TITLE}
            </h1>

            {/* Body */}
            <p
              className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl mx-auto mb-12"
              style={{ wordBreak: 'keep-all' }}
            >
              {HERO_BODY}
            </p>

            {/* Search bar */}
            <div className="flex items-center gap-2 max-w-xl mx-auto mb-16 p-1.5 bg-white rounded-2xl border border-neutral-200 shadow-md shadow-neutral-100">
              <div className="flex flex-1 items-center gap-3 px-4">
                <Search className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="사이트명 또는 주소를 입력하세요"
                  className="flex-1 bg-transparent py-3 outline-none text-sm text-neutral-900 placeholder:text-neutral-400"
                />
              </div>
              <button className="px-6 py-3 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 active:scale-95 transition-all whitespace-nowrap">
                조회하기
              </button>
            </div>

            {/* Trust stats */}
            <div className="inline-flex items-center gap-10 md:gap-16 px-8 py-5 rounded-2xl bg-white border border-neutral-100 shadow-sm">
              {[
                { icon: TrendingUp, value: '4년', label: '운영 경력' },
                { icon: Users,      value: '5명', label: '실명 편집부' },
                { icon: Database,   value: '자체', label: '데이터 축적' },
                { icon: Shield,     value: '무료', label: '이용료 없음' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <item.icon className="w-5 h-5 text-blue-500" />
                  <span className="text-base font-bold text-neutral-900 leading-none">{item.value}</span>
                  <span className="text-xs text-neutral-500">{item.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── SEARCH INFO SECTION ── */}
      <section className="py-28 md:py-36 px-6 md:px-20 bg-white border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="grid lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-widest text-blue-500 uppercase mb-4">Site Lookup</p>
              <h2
                className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight"
                style={{ wordBreak: 'keep-all', letterSpacing: '-0.02em' }}
              >
                {SEARCH_TITLE}
              </h2>
            </div>
            <div className="lg:col-span-8 flex items-end">
              <p className="text-base md:text-lg text-neutral-500 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {SEARCH_P1}
              </p>
            </div>
          </div>

          {/* Content: text left, cards right */}
          <div className="grid lg:grid-cols-12 gap-10">

            {/* Left — numbered text blocks */}
            <div className="lg:col-span-5 space-y-12">
              {[
                { n: '01', title: '다중 신호 분석', body: SEARCH_P2 },
                { n: '02', title: '투명한 결과 표시', body: SEARCH_P3 },
              ].map((item) => (
                <div key={item.n} className="flex gap-5">
                  <span className="text-xs font-mono font-semibold text-blue-400 mt-1 leading-none w-6 flex-shrink-0">
                    {item.n}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — result status cards */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  status: '확인완료',
                  icon: Check,
                  bg: 'bg-emerald-50',
                  border: 'border-emerald-200',
                  bar: 'bg-emerald-500',
                  iconColor: 'text-emerald-600',
                  text: 'text-emerald-900',
                  sub: '주소 변경 없음 · 최근 확인: 2025.03.15',
                },
                {
                  status: '확인필요',
                  icon: AlertCircle,
                  bg: 'bg-amber-50',
                  border: 'border-amber-200',
                  bar: 'bg-amber-500',
                  iconColor: 'text-amber-600',
                  text: 'text-amber-900',
                  sub: '반복 제보 2건 · 주소 변경 이력 있음',
                },
                {
                  status: '데이터부족',
                  icon: Minus,
                  bg: 'bg-neutral-50',
                  border: 'border-neutral-200',
                  bar: 'bg-neutral-400',
                  iconColor: 'text-neutral-500',
                  text: 'text-neutral-700',
                  sub: '등록 정보 부족 · 추가 확인 권장',
                },
              ].map((item) => (
                <div
                  key={item.status}
                  className={`flex items-start gap-5 p-6 rounded-xl border ${item.bg} ${item.border}`}
                >
                  <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${item.bar}`} />
                  <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-base ${item.text}`}>{item.status}</p>
                    <p className={`text-sm mt-1 ${item.text} opacity-60`}>{item.sub}</p>
                  </div>
                </div>
              ))}

              <p className="text-xs text-neutral-400 pt-2 pl-1">
                * 결과 표시 예시입니다. 실제 결과는 검색 후 확인됩니다.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
