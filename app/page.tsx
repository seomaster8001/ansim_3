import { Search, Check, AlertCircle, Minus, Shield, TrendingUp, Database, Users, Calendar, Globe, FileText, MessageSquare, ExternalLink, ArrowRight, Clock, AlertTriangle, BookOpen, ChevronRight, CheckCircle, BarChart3, ShieldCheck, Layers, Send, ClipboardList, Filter, CheckSquare, XCircle, Lock, ScrollText } from 'lucide-react'

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

const CRITERIA_TITLE = '검증 기준은 근거 중심으로 정리합니다'
const CRITERIA_INTRO =
  '안심고고는 특정 사이트를 감정적으로 단정하지 않습니다. 최근 확인일, 주소 변경 이력, 운영 정보 일치 여부, 사용자 제보 내용, 공개 신고 가능 경로를 함께 검토해 검증 통과·확인 필요·데이터 부족 같은 중립 라벨로 분류하며, 모든 항목은 자체 갱신 데이터에 근거합니다.'
const CRITERIA_P1 =
  '검증 기준은 크게 다섯 가지입니다. 첫째는 최근 확인일입니다. 마지막 확인일이 오래되었거나 접속 상태가 반복적으로 바뀌면 추가 확인이 필요합니다. 둘째는 주소 변경 이력입니다. 짧은 기간에 도메인이 여러 번 바뀌거나 유사 주소가 반복되면 피싱 또는 추적 회피 가능성을 함께 봅니다. 셋째는 운영 정보 일치 여부입니다. 사이트명, 안내 문구, 고객센터 정보, 공지 내용이 서로 맞지 않으면 확인 필요 신호로 분류합니다.'
const CRITERIA_P2 =
  '넷째는 사용자 제보 패턴입니다. 단일 제보만으로 단정하지 않고, 환전 지연·추가 입금 요구·고객센터 응답 중단·주소 변경 안내 누락 같은 유사한 제보가 반복되는지 확인합니다. 다섯째는 공개 신고·보안 경로입니다. 피해 신고와 보안 확인이 필요한 경우 KISA, 금융감독원, 더치트 같은 공공·신뢰 출처의 공개 자료를 참고할 수 있도록 안내합니다.'
const CRITERIA_DISCLAIMER =
  '안심고고는 공식기관이 아니며, 위 출처들과 어떠한 협력·소속 관계도 없습니다. 자체 확인 항목과 외부 신고 경로를 구분해 표시하며, 단정적인 결론 표현 대신 "확인 필요·데이터 부족·검증 기준 통과"처럼 사용자가 근거를 보고 판단할 수 있는 중립 표현을 사용합니다.'

const REPORT_TITLE = '최신 리포트와 제보 이력을 확인하세요'
const REPORT_P1 =
  '먹튀검증 리포트는 제보가 접수된 사건을 단순 나열하지 않고, 어떤 신호가 반복되었는지 중심으로 정리합니다. 환전 지연, 주소 변경, 추가 입금 요구, 운영 정보 불일치, 유사 도메인 사용 여부를 확인해 이용자가 같은 유형의 피해를 피할 수 있도록 돕습니다.'
const REPORT_P2 =
  '각 리포트에는 사건 개요, 접수된 제보 유형, 확인된 위험 신호, 관련 사이트, 이용자 체크포인트가 포함됩니다. 제보 내용에 개인정보가 포함된 경우에는 공개하지 않으며, 확인되지 않은 비방성 표현도 반영하지 않습니다.'
const REPORT_P3 =
  '최근 갱신된 리포트와 확인 필요 사이트는 랜딩 화면에서 바로 확인할 수 있습니다. 사용자는 검색창으로 직접 조회하거나, 최신 리포트·카테고리·피해예방 가이드로 이동해 관련 정보를 이어서 확인할 수 있습니다.'

const CATEGORY_TITLE = '카테고리별로 필요한 정보만 빠르게 찾습니다'
const CATEGORY_INTRO =
  '안심고고는 사용자의 검색 목적에 맞춰 정보를 5개 카테고리로 분리합니다. 카테고리 간 분류 기준이 명확해 정보가 겹치지 않으며, 보증업체에서는 검증 기준을 통과한 사이트 정보를, 먹튀검증 리포트에서는 제보 이력과 주소 변경 흔적을 중심으로 사건별 기록을 볼 수 있습니다.'
const CATEGORY_P1 =
  '스포츠 분석은 KBO·MLB·EPL 같은 주요 리그의 경기 데이터와 라이브스코어를 다루며, 사용자가 도박과 분리해 경기 흐름과 통계를 참고할 수 있도록 정리합니다. 피해예방 가이드는 환전 지연, 추가 입금 요구, 피싱 주소 구별법, 주소 변경 리스크처럼 접속 전 확인해야 할 체크포인트를 다루며, 데이터센터에서는 최근 변경 이력, 검증 현황, 카테고리별 흐름을 표와 요약 형태로 볼 수 있습니다.'
const CATEGORY_P2 =
  '랜딩페이지는 단순 소개 페이지가 아니라 검색·조회·제보·가이드·카테고리로 이동하는 허브입니다. 처음 방문한 사용자는 검색창에서 바로 확인하고, 반복 방문 사용자는 최신 리포트와 변경 이력부터 확인할 수 있어야 합니다.'

const SUBMIT_TITLE = '제보는 검토 후 반영됩니다'
const SUBMIT_INTRO =
  '주소 변경, 접속 불가, 환전 지연, 추가 입금 요구, 운영 정보 불일치가 의심되는 경우 제보 페이지를 통해 내용을 보낼 수 있습니다. 제보는 익명으로 접수할 수 있으며, 접수된 내용은 즉시 공개되지 않고 검토 절차를 거친 뒤 확인 가능한 항목만 반영됩니다.'
const SUBMIT_P1 =
  '제보 절차는 네 단계로 진행됩니다. 첫째는 접수입니다. 사용자가 사이트명, 현재 주소, 제보 유형, 상세 내용을 입력합니다. 둘째는 검토입니다. 접수된 내용에서 개인정보와 민감 정보가 포함되어 있는지 확인하고 필요한 경우 마스킹합니다. 셋째는 분류입니다. 주소 변경·환전 지연·추가 입금 요구·접속 불가·운영 정보 불일치 등 유형별로 묶습니다. 넷째는 반영입니다. 확인 가능한 항목만 사이트 상세 페이지, 검증 리포트, 변경 이력에 반영합니다.'
const SUBMIT_P2 =
  '제보 내용이 부족하거나 사실 확인이 어려운 경우에는 공개하지 않거나 데이터 부족 상태로 보류합니다. 동일한 사이트에 비슷한 제보가 반복되면 확인 필요 항목으로 분류할 수 있지만, 단일 제보만으로 특정 사이트를 단정하지 않습니다. 허위 제보, 경쟁 사이트 비방, 개인정보 노출, 확인되지 않은 주장성 문구는 반영 대상에서 제외됩니다.'
const SUBMIT_P3 =
  '개인정보가 포함된 내용은 마스킹 기준에 따라 처리되며, 데이터 처리 기준과 이용자의 권리는 이용약관과 개인정보처리방침에서 확인할 수 있습니다.'

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

      {/* ── VERIFICATION CRITERIA SECTION ── */}
      <section className="py-28 md:py-36 px-6 md:px-20 bg-slate-50 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-4">Verification Criteria</p>
            <h2
              className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight mb-8"
              style={{ wordBreak: 'keep-all', letterSpacing: '-0.02em' }}
            >
              {CRITERIA_TITLE}
            </h2>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              {CRITERIA_INTRO}
            </p>
          </div>

          {/* 5 Criteria Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {[
              { n: '01', icon: Calendar, title: '최근 확인일', desc: '마지막 확인일이 오래되었거나 접속 상태가 반복적으로 바뀌면 추가 확인이 필요합니다.' },
              { n: '02', icon: Globe, title: '주소 변경 이력', desc: '짧은 기간에 도메인이 여러 번 바뀌거나 유사 주소가 반복되면 피싱 또는 추적 회피 가능성을 함께 봅니다.' },
              { n: '03', icon: FileText, title: '운영 정보 일치 여부', desc: '사이트명, 안내 문구, 고객센터 정보, 공지 내용이 서로 맞지 않으면 확인 필요 신호로 분류합니다.' },
              { n: '04', icon: MessageSquare, title: '사용자 제보 패턴', desc: '단일 제보만으로 단정하지 않고, 환전 지연·추가 입금 요구·고객센터 응답 중단 같은 유사 제보가 반복되는지 확인합니다.' },
              { n: '05', icon: ExternalLink, title: '공개 신고·보안 경로', desc: '피해 신고와 보안 확인이 필요한 경우 KISA, 금융감독원, 더치트 같은 공공·신뢰 출처를 안내합니다.' },
            ].map((item) => (
              <div
                key={item.n}
                className="group p-6 rounded-2xl bg-white border border-neutral-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-50 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 mt-1">{item.n}</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed paragraphs */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-xl bg-white border border-neutral-200">
              <p className="text-sm text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {CRITERIA_P1}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-neutral-200">
              <p className="text-sm text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {CRITERIA_P2}
              </p>
            </div>
          </div>

          {/* External links */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { name: 'KISA', url: 'https://www.kisa.or.kr/' },
              { name: '금융감독원', url: 'https://www.fss.or.kr/' },
              { name: '더치트', url: 'https://thecheat.co.kr/' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-neutral-200 text-sm text-neutral-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {link.name}
              </a>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="p-6 rounded-xl bg-neutral-100 border border-neutral-200">
            <p className="text-sm text-neutral-500 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              {CRITERIA_DISCLAIMER}
            </p>
          </div>

        </div>
      </section>

      {/* ── REPORTS SECTION ── */}
      <section className="py-28 md:py-36 px-6 md:px-20 bg-white border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-widest text-amber-600 uppercase mb-4">Reports & History</p>
              <h2
                className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6"
                style={{ wordBreak: 'keep-all', letterSpacing: '-0.02em' }}
              >
                {REPORT_TITLE}
              </h2>
              <p className="text-base md:text-lg text-neutral-500 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {REPORT_P1}
              </p>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <div className="w-full p-6 rounded-2xl bg-amber-50 border border-amber-100">
                <p className="text-sm text-amber-800 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                  {REPORT_P2}
                </p>
              </div>
            </div>
          </div>

          {/* Report preview cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {[
              {
                type: '환전지연',
                title: '○○벳 환전 지연 제보 분석',
                date: '2025.04.18',
                signal: '환전 48시간 이상 지연',
                status: 'warning',
              },
              {
                type: '주소변경',
                title: '△△게임 도메인 변경 이력',
                date: '2025.04.12',
                signal: '3개월 내 주소 3회 변경',
                status: 'warning',
              },
              {
                type: '정보불일치',
                title: '□□카지노 운영정보 확인',
                date: '2025.04.05',
                signal: '고객센터 정보 불일치',
                status: 'caution',
              },
            ].map((report, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white border border-neutral-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-50 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    report.status === 'warning' 
                      ? 'bg-red-50 text-red-600 border border-red-100' 
                      : 'bg-amber-50 text-amber-600 border border-amber-100'
                  }`}>
                    {report.type}
                  </span>
                  <span className="text-xs text-neutral-400">{report.date}</span>
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {report.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>{report.signal}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">리포트 보기</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          {/* Report structure info */}
          <div className="grid md:grid-cols-5 gap-4 mb-16">
            {[
              { icon: FileText, label: '사건 개요' },
              { icon: MessageSquare, label: '제보 유형' },
              { icon: AlertTriangle, label: '위험 신호' },
              { icon: Globe, label: '관련 사이트' },
              { icon: BookOpen, label: '체크포인트' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-neutral-50 border border-neutral-100"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-sm font-medium text-neutral-700">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Navigation links */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-white font-semibold text-lg mb-2" style={{ wordBreak: 'keep-all' }}>
                  {REPORT_P3}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: '최신 리포트', icon: Clock },
                  { label: '카테고리', icon: FileText },
                  { label: '피해예방 가이드', icon: BookOpen },
                ].map((link, i) => (
                  <button
                    key={i}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CATEGORIES SECTION ── */}
      <section className="py-28 md:py-36 px-6 md:px-20 bg-slate-50 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-20">
            <p className="text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-4">Categories</p>
            <h2
              className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6 max-w-3xl mx-auto"
              style={{ wordBreak: 'keep-all', letterSpacing: '-0.02em' }}
            >
              {CATEGORY_TITLE}
            </h2>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-3xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              {CATEGORY_INTRO}
            </p>
          </div>

          {/* Category cards - 5 columns */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {[
              {
                icon: ShieldCheck,
                title: '보증업체',
                desc: '검증 기준을 통과한 사이트 정보',
                href: '/safety/',
                color: 'emerald',
              },
              {
                icon: FileText,
                title: '먹튀검증 리포트',
                desc: '제보 이력과 주소 변경 사건별 기록',
                href: '/review/',
                color: 'red',
              },
              {
                icon: BarChart3,
                title: '스포츠 분석',
                desc: 'KBO·MLB·EPL 경기 데이터와 라이브스코어',
                href: '/picks/',
                color: 'blue',
              },
              {
                icon: BookOpen,
                title: '피해예방 가이드',
                desc: '환전 지연, 피싱 주소, 주소 변경 리스크 체크',
                href: '/guide/',
                color: 'amber',
              },
              {
                icon: Database,
                title: '데이터센터',
                desc: '변경 이력, 검증 현황, 카테고리별 흐름 요약',
                href: '/data/',
                color: 'indigo',
              },
            ].map((cat, i) => {
              const colorMap: Record<string, { bg: string; border: string; iconBg: string; iconBorder: string; iconColor: string; hoverBorder: string }> = {
                emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', iconBg: 'bg-emerald-100', iconBorder: 'border-emerald-200', iconColor: 'text-emerald-600', hoverBorder: 'hover:border-emerald-300' },
                red: { bg: 'bg-red-50', border: 'border-red-100', iconBg: 'bg-red-100', iconBorder: 'border-red-200', iconColor: 'text-red-600', hoverBorder: 'hover:border-red-300' },
                blue: { bg: 'bg-blue-50', border: 'border-blue-100', iconBg: 'bg-blue-100', iconBorder: 'border-blue-200', iconColor: 'text-blue-600', hoverBorder: 'hover:border-blue-300' },
                amber: { bg: 'bg-amber-50', border: 'border-amber-100', iconBg: 'bg-amber-100', iconBorder: 'border-amber-200', iconColor: 'text-amber-600', hoverBorder: 'hover:border-amber-300' },
                indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', iconBg: 'bg-indigo-100', iconBorder: 'border-indigo-200', iconColor: 'text-indigo-600', hoverBorder: 'hover:border-indigo-300' },
              }
              const c = colorMap[cat.color]
              return (
                <a
                  key={i}
                  href={cat.href}
                  className={`group flex flex-col p-5 rounded-2xl bg-white border border-neutral-200 ${c.hoverBorder} hover:shadow-lg transition-all`}
                >
                  <div className={`w-12 h-12 rounded-xl ${c.iconBg} border ${c.iconBorder} flex items-center justify-center mb-4`}>
                    <cat.icon className={`w-6 h-6 ${c.iconColor}`} />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">{cat.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed flex-1" style={{ wordBreak: 'keep-all' }}>
                    {cat.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs text-neutral-400">바로가기</span>
                    <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              )
            })}
          </div>

          {/* Detailed paragraphs */}
          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-white border border-neutral-200">
              <p className="text-sm text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {CATEGORY_P1}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-neutral-200">
              <p className="text-sm text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {CATEGORY_P2}
              </p>
            </div>
          </div>

          {/* Hub CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-center">
            <Layers className="w-10 h-10 text-white/80 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">안심고고�� 검색·조회·제보·가이드로 이동하는 허브입니다</h3>
            <p className="text-sm text-white/70 mb-6 max-w-xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              처음 방문한 사용자는 검색창에서 바로 확인하고, 반복 방문 사용자는 최신 리포트와 변경 이력부터 확인할 수 있습니다.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-indigo-700 text-sm font-semibold hover:bg-indigo-50 transition-colors">
                <Search className="w-4 h-4" />
                사이트 조회
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-colors">
                <FileText className="w-4 h-4" />
                최신 리포트
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── SUBMIT REPORT SECTION ── */}
      <section className="py-28 md:py-36 px-6 md:px-20 bg-white border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-widest text-rose-600 uppercase mb-4">Report Submission</p>
              <h2
                className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6"
                style={{ wordBreak: 'keep-all', letterSpacing: '-0.02em' }}
              >
                {SUBMIT_TITLE}
              </h2>
              <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8" style={{ wordBreak: 'keep-all' }}>
                {SUBMIT_INTRO}
              </p>
              <a
                href="/support/contact/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700 transition-colors"
              >
                <Send className="w-4 h-4" />
                제보 페이지로 이동
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="lg:col-span-7">
              {/* 4 Steps Process */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    n: '01',
                    icon: ClipboardList,
                    title: '접수',
                    desc: '사용자가 사이트명, 현재 주소, 제보 유형, 상세 내용을 입력합니다.',
                  },
                  {
                    n: '02',
                    icon: Filter,
                    title: '검토',
                    desc: '접수된 내용에서 개인정보와 민감 정보가 포함되어 있는지 확인하고 필요한 경우 마스킹합니다.',
                  },
                  {
                    n: '03',
                    icon: Layers,
                    title: '분류',
                    desc: '주소 변경·환전 지연·추가 입금 요구·접속 불가·운영 정보 불일치 등 유형별로 묶습니다.',
                  },
                  {
                    n: '04',
                    icon: CheckSquare,
                    title: '반영',
                    desc: '확인 가능한 항목만 사이트 상세 페이지, 검증 리포트, 변경 이력에 반영합니다.',
                  },
                ].map((step) => (
                  <div
                    key={step.n}
                    className="group p-5 rounded-2xl bg-slate-50 border border-neutral-100 hover:border-rose-200 hover:bg-rose-50/50 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center group-hover:border-rose-200 transition-colors">
                        <step.icon className="w-5 h-5 text-rose-500" />
                      </div>
                      <span className="text-xs font-mono font-bold text-rose-400">{step.n}</span>
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Exclusions and info */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-slate-50 border border-neutral-100">
              <p className="text-sm text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {SUBMIT_P1}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-neutral-100">
              <p className="text-sm text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {SUBMIT_P2}
              </p>
            </div>
          </div>

          {/* Exclusion list */}
          <div className="p-6 rounded-xl bg-red-50 border border-red-100 mb-12">
            <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              반영 제외 대상
            </h4>
            <div className="flex flex-wrap gap-2">
              {['허위 제보', '경쟁 사이트 비방', '개인정보 노출', '확인되지 않은 주장성 문구'].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-white border border-red-100 text-sm text-red-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Privacy notice */}
          <div className="p-6 rounded-xl bg-neutral-100 border border-neutral-200">
            <div className="flex items-start gap-4">
              <Lock className="w-5 h-5 text-neutral-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3" style={{ wordBreak: 'keep-all' }}>
                  {SUBMIT_P3}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/support/terms/"
                    className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-blue-600 transition-colors"
                  >
                    <ScrollText className="w-4 h-4" />
                    이용약관
                  </a>
                  <a
                    href="/support/privacy/"
                    className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-blue-600 transition-colors"
                  >
                    <Lock className="w-4 h-4" />
                    개인정보처리방침
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
