'use client'

import { useState } from 'react'
import { Search, Check, AlertCircle, Minus, Shield, TrendingUp, Database, Users, Calendar, Globe, FileText, MessageSquare, ExternalLink, ArrowRight, Clock, AlertTriangle, BookOpen, ChevronRight, CheckCircle, BarChart3, ShieldCheck, Layers, Send, ClipboardList, Filter, CheckSquare, XCircle, Lock, ScrollText, Link2, Banknote, PhoneOff, Eye, Archive, Siren, ChevronDown } from 'lucide-react'

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
  '최근 갱신된 리포트와 확인 필요 사이트는 랜딩 화면에서 바로 확인할 수 있습니다. 사용자는 검색창으로 직접 조회하거나, 최신 리포트·카테��리·피해예방 가이드로 이동해 관련 정보를 이어서 확인할 수 있습니다.'

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
  '제보 절차는 네 단계로 진행됩니다. 첫째는 접수입니다. 사용자가 사이트명, 현재 주소, 제보 유형, 상세 내용을 입력합니다. 둘째는 검토입니다. 접수된 내용에서 개인정보와 민감 정보가 포함되어 있는지 확인하고 필요한 경우 마스킹합니다. 셋째는 분류입니다. 주소 변경·환전 지연·추가 입금 요구·접속 불가·운영 정보 불일치 등 유형별로 묶습니다. 넷째는 반영입니다. 확인 가능한 항목만 사이트 상세 페이지, 검증 리포�����, 변경 이력에 반영합니다.'
const SUBMIT_P2 =
  '제보 내용이 부족하거나 사실 확인이 어려운 경우에는 공개하지 않거나 데이터 부족 상태로 보류합니다. 동일한 사이트에 비슷한 제보가 반복되면 확인 필요 항목으로 분류할 수 있지만, 단일 제보만으로 특정 사이트를 단정하지 않습니다. 허위 제보, 경쟁 사이트 비방, 개인정보 노출, 확인되지 않은 주장성 문구는 반영 대상에서 제외됩니다.'
const SUBMIT_P3 =
  '개인정보가 포함된 내용은 마스킹 기준에 따라 처리되며, 데이터 처리 기준과 이용자의 권리는 이용약관과 개인정보처리방침에서 확인할 수 있습니다.'

const GUIDE_TITLE = '피해예방 가이드를 함께 확인하세요'
const GUIDE_P1 =
  '먹튀 의심 사이트는 대부분 한 가지 신호만으로 드러나지 않습니다. 주소가 반복적으로 바뀌거나, 환전 지연 후 추가 입금을 요구하거나, 고객센터 응답이 갑자기 중단되는 등 여러 신호가 동시에 나타나는 경우가 많아, 단일 정보보다 신호 패턴을 함께 확인해야 정확한 판단이 가능합니다.'
const GUIDE_P2 =
  '안심고고는 사이트 조회 결과와 함께 관련 피해예방 가이드를 연결합니다. 주소 변경 시 확인해야 할 체크포인트, 피싱 사이트 구별법, 환전 지연 대응법, 추가 입금 요구 대처법을 함께 보면 단순 조회보다 더 안전하게 판단할 수 있습니다.'
const GUIDE_P3 =
  '처음 확인하는 사이트라면 사이트 상세 정보만 보지 말고, 관련 리포트와 가이드까지 함께 확인하는 것이 좋습니다. 특히 금전 피해가 의심되는 경우에는 추가 입금을 중단하고, 대화 기록·입금 내역·주소 변경 내역을 보관한 뒤 공공 신고 경로를 확인해야 합니다.'

const FAQ_TITLE = '자주 묻는 질문'
const FAQ_ITEMS = [
  {
    q: '먹튀 의심 사이트는 어떻게 확인하나요?',
    a: '사이트명이나 주소를 검색한 뒤 최근 확인일, 주소 변경 이력, 제보 접수 여부, 관련 리포트 연결 여부를 함께 확인하세요. 하나의 신호만으로 단정하지 말고 여러 항목이 반복되는지 살펴야 하며, 검증 기준 다섯 가지(최근 확인일·주소 변경·운영 정보 일치·제보 패턴·공개 신고 경로)를 단계별로 점검하면 더 안전한 판단이 가능합니다.',
  },
  {
    q: '제보가 들어오면 ���로 공개되나요?',
    a: '아니요. 안심고고는 접수된 제보를 즉시 공개하지 않습니다. 접수 → 검토 → 분류 → 반영 4단계를 거치며, 개인정보 마스킹과 사실 확인이 가능한 항목만 중립 표현으로 반영합니다. 부족하거나 확인이 어려운 제보는 데이터 부족 상태로 보류되며, 동일 사이트에 비슷한 제보가 반복되는 경우에만 확인 필요로 분류합니다.',
  },
  {
    q: '어떤 제보가 반영될 가능성이 높나요?',
    a: '사이트명, 접속 주소, 발생 날짜, 변경 전후 주소, 고객센터 응답 여부, 환전 지연 또는 추가 입금 요구 내용처럼 확인 가능한 정보가 포함된 제보가 우선 검토됩니다. 입금 내역이나 대화 캡처 같은 보조 자료가 함께 첨부되면 검토가 빨라지며, 개인정보 노출이나 감정적 비방만 있는 제보는 반영하기 어렵습니다.',
  },
  {
    q: '주소가 자주 바뀌는 사이트는 왜 확인이 필요한가요?',
    a: '주소 변경이 반복되면 운영 정보 추적이 어려워지고, 피싱 주소나 유사 도메인으로 연결될 가능성이 생깁니다. 짧은 기간에 도메인이 여러 번 바뀌거나 안내 없이 주소가 교체되는 경우 추적 회피 신호로 분류됩니다. 최근 변경 이력, 공식 안내 여부, 제보 패턴을 함께 확인하는 것이 중요합니다.',
  },
  {
    q: '보증업체 정보는 어떤 기준으로 분류하나요?',
    a: '운영 정보 일치 여부, 최근 확인일, 제보 이력, 검증 절차 통과 여부를 기준으로 분류합니다. 검증 통과 항목은 홍보 문구가 아니라 운영 기간·정보 일치성·제보 누적 같은 확인 가능한 데이터로 표시되며, GOLD·SILVER·BRONZE 3개 등급으로 세분화해 사용자가 검증 깊이를 한눈에 알 수 있도록 합니다.',
  },
  {
    q: '피해를 입었다면 어디에 신고해야 하나요?',
    a: '피해 정황이 있다면 추가 입금을 즉시 중단하고 대화 기록, 입금 내역, 사이트 주소, 고객센터 응답 내용을 보관하세요. 이후 경찰청 ECRM, 금융감독원, KISA 같은 공공 신고·상담 경로의 공개 안내를 참고할 수 있습니다. 안심고고 제보는 사이트 정보 반영용이며, 법적 신고를 대체하지 않습니다.',
  },
  {
    q: '안심고고 제보가 법적 신고를 대체하나요?',
    a: '아니요. 안심고고 제보는 사이트 정보 반영과 이용자 참고를 위한 자료이며, 법적 효력이 있는 신고가 아닙니다. 실제 피해 신고나 법적 조치는 경찰청 ECRM, 금융감독원 같은 관련 기관의 공식 절차를 따라야 하며, 안심고고는 공개된 신고 경로를 안내할 뿐 사용자의 신고를 대신 처리하거나 법적 결론을 내리지 않습니다.',
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <main className="min-h-screen bg-white font-sans">

      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        {/* Left accent bar */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500" />

        {/* Hero Content — center aligned */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center">
          <div className="w-full max-w-4xl mx-auto">

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-10">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-blue-700 text-body-sm font-medium tracking-wide">검증 정보 플랫폼</span>
            </div>

            {/* Headline */}
            <h1 className="text-h1 text-neutral-900 mb-8">
              {HERO_TITLE}
            </h1>

            {/* Body */}
            <p className="text-body-lg text-neutral-500 max-w-2xl mx-auto mb-12">
              {HERO_BODY}
            </p>

            {/* Search bar */}
            <div className="flex items-center gap-2 max-w-xl mx-auto mb-16 p-1.5 bg-white rounded-2xl border border-neutral-200 shadow-md shadow-neutral-100">
              <div className="flex flex-1 items-center gap-3 px-4">
                <Search className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="사이트명 또는 주소를 입력하세요"
                  className="flex-1 bg-transparent py-3 outline-none text-body-sm text-neutral-900 placeholder:text-neutral-400"
                />
              </div>
              <button className="px-6 py-3 rounded-xl bg-neutral-900 text-white text-body-sm font-semibold hover:bg-neutral-800 active:scale-95 transition-all whitespace-nowrap">
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
                  <span className="text-h4 text-neutral-900 leading-none">{item.value}</span>
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
              <p className="text-label text-blue-500 mb-4">Site Lookup</p>
              <h2 className="text-h2 text-neutral-900 mb-6">
                {SEARCH_TITLE}
              </h2>
            </div>
            <div className="lg:col-span-8 flex items-end">
              <p className="text-body-lg text-neutral-500">
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
                    <h3 className="text-h4 text-neutral-900 mb-3">{item.title}</h3>
                    <p className="text-body-sm text-neutral-500">
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
                    <p className={`text-h4 ${item.text}`}>{item.status}</p>
                    <p className={`text-body-sm mt-1 ${item.text} opacity-60`}>{item.sub}</p>
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
      <section className="py-24 md:py-32 px-6 md:px-20 bg-white border-t border-neutral-100">
        <div className="max-w-5xl mx-auto">

          {/* Section heading - centered */}
          <div className="text-center mb-16">
            <p className="text-label text-blue-500 mb-4">Verification Criteria</p>
            <h2 className="text-h2 text-neutral-900 leading-tight mb-6">
              {CRITERIA_TITLE}
            </h2>
            <p className="text-body-lg text-neutral-500 max-w-2xl mx-auto">
              {CRITERIA_INTRO}
            </p>
          </div>

          {/* 5 Criteria - Numbered list style */}
          <div className="space-y-4 mb-16">
            {[
              { n: '1', title: '최근 확인일', desc: '마지막 확인일이 오래되었거나 접속 상태가 반복적으로 바뀌면 추가 확인이 필요합니다.' },
              { n: '2', title: '주소 변경 이력', desc: '짧은 기간에 도메인이 여러 번 바뀌거나 유사 주소가 반복되면 피싱 또는 추적 회피 가능성을 함께 봅니다.' },
              { n: '3', title: '운영 정보 일치 여부', desc: '사이트명, 안내 문구, 고객센터 정보, 공지 내용이 서로 맞지 않으면 확인 필요 신호로 분류합니다.' },
              { n: '4', title: '사용자 제보 패턴', desc: '단일 제보만으로 단정하지 않고, 환전 지연·추가 입금 요구·고객센터 응답 중단·주소 변경 안내 누락 같은 유사한 제보가 반복되는지 확인합니다.' },
              { n: '5', title: '공개 신고·보안 경로', desc: '피해 신고와 보안 확인이 필요한 경우 KISA, 금융감독원, 더치트 같은 공공·신뢰 출처의 공개 자료를 참고할 수 있도록 안내합니다.' },
            ].map((item) => (
              <div
                key={item.n}
                className="flex gap-5 p-5 rounded-xl bg-slate-50 border border-neutral-100"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-body-sm font-bold">
                  {item.n}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-h4 text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-body-sm text-neutral-500" style={{ wordBreak: 'keep-all' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* External links - inline with text */}
          <div className="p-6 rounded-xl bg-slate-50 border border-neutral-100 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-body-sm text-neutral-600">공개 신고 경로:</span>
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-neutral-200 text-body-sm text-neutral-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-body-sm text-neutral-400 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            {CRITERIA_DISCLAIMER}
          </p>

        </div>
      </section>

      {/* ── REPORTS SECTION ── */}
      <section className="py-28 md:py-36 px-6 md:px-20 bg-white border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <p className="text-label text-blue-500 mb-4">Report Submission</p>
              <h2 className="text-h2 text-neutral-900 leading-tight mb-6">
                {REPORT_TITLE}
              </h2>
              <p className="text-body-lg text-neutral-500 mb-8">
                {REPORT_P1}
              </p>
            </div>
            <div className="lg:col-span-7 flex items-end">
            <div className="w-full p-6 rounded-2xl bg-slate-50 border border-neutral-200">
              <p className="text-body-sm text-neutral-700 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
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
                className="group p-6 rounded-2xl bg-white border border-neutral-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all cursor-pointer"
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
                <h3 className="text-h4 text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {report.title}
                </h3>
                <div className="flex items-center gap-2 text-body-sm text-neutral-500">
                  <AlertTriangle className="w-4 h-4 text-neutral-400" />
                  <span>{report.signal}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">리포트 보기</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
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
                  <item.icon className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-body-sm font-medium text-neutral-700">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Navigation links */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-body-lg text-white font-semibold mb-2" style={{ wordBreak: 'keep-all' }}>
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-body-sm font-medium transition-colors"
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
      <section className="py-24 md:py-32 px-6 md:px-20 bg-slate-50 border-t border-neutral-100">
        <div className="max-w-5xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-14">
            <p className="text-label text-blue-500 mb-4">Categories</p>
            <h2 className="text-h2 text-neutral-900 leading-tight mb-6">
              {CATEGORY_TITLE}
            </h2>
            <p className="text-body-lg text-neutral-500 max-w-2xl mx-auto">
              {CATEGORY_INTRO}
            </p>
          </div>

          {/* Category navigation - horizontal scroll on mobile, grid on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-14">
            {[
              { icon: ShieldCheck, title: '보증업체', href: '/safety/' },
              { icon: FileText, title: '먹튀검증 리포트', href: '/review/' },
              { icon: BarChart3, title: '스포츠 분석', href: '/picks/' },
              { icon: BookOpen, title: '피해예방 가이드', href: '/guide/' },
              { icon: Database, title: '데이터센터', href: '/data/' },
            ].map((cat, i) => (
              <a
                key={i}
                href={cat.href}
                className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-neutral-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <cat.icon className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-body-sm font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">{cat.title}</span>
              </a>
            ))}
          </div>

          {/* Category descriptions */}
          <div className="space-y-4 mb-14">
            <div className="p-5 rounded-xl bg-white border border-neutral-200">
              <p className="text-body-sm text-neutral-600" style={{ wordBreak: 'keep-all' }}>
                {CATEGORY_P1}
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-neutral-200">
              <p className="text-body-sm text-neutral-600" style={{ wordBreak: 'keep-all' }}>
                {CATEGORY_P2}
              </p>
            </div>
          </div>

          {/* Hub message - simplified */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-neutral-900">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <p className="text-body-sm text-white" style={{ wordBreak: 'keep-all' }}>
                처음 방문한 사용자는 검색창에서 바로 확인하고, 반복 방문 사용자는 최신 리포트와 변경 이력부터 확인할 수 있습니다.
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <a href="/" className="px-4 py-2 rounded-lg bg-white text-neutral-900 text-body-sm font-medium hover:bg-neutral-100 transition-colors">
                사이트 조회
              </a>
              <a href="/review/" className="px-4 py-2 rounded-lg bg-white/10 text-white text-body-sm font-medium hover:bg-white/20 transition-colors">
                최신 리포트
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── SUBMIT REPORT SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-white border-t border-neutral-100">
        <div className="max-w-5xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-14">
            <p className="text-label text-blue-500 mb-4">Report Submission</p>
            <h2 className="text-h2 text-neutral-900 leading-tight mb-6">
              {SUBMIT_TITLE}
            </h2>
            <p className="text-body-lg text-neutral-500 max-w-2xl mx-auto">
              {SUBMIT_INTRO}
            </p>
          </div>

          {/* 4 Steps - horizontal flow */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { n: '1', title: '접수', desc: '사이트명, 주소, 제보 유형, 상세 내용 입력' },
              { n: '2', title: '검토', desc: '개인정보·민감정보 확인 및 마스킹' },
              { n: '3', title: '분류', desc: '주소 변경·환전 지연 등 유형별 분류' },
              { n: '4', title: '반영', desc: '확인 가능한 항목만 리포트에 반영' },
            ].map((step) => (
              <div key={step.n} className="text-center p-5 rounded-xl bg-slate-50 border border-neutral-100">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 text-body-sm font-bold">
                  {step.n}
                </div>
                <h3 className="text-h4 text-neutral-900 mb-1">{step.title}</h3>
                <p className="text-body-sm text-neutral-500" style={{ wordBreak: 'keep-all' }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Important notes - 2 cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="p-5 rounded-xl bg-slate-50 border border-neutral-100">
              <h4 className="text-h4 text-neutral-900 mb-2">제보 처리 기준</h4>
              <p className="text-body-sm text-neutral-500" style={{ wordBreak: 'keep-all' }}>
                제보 내용이 부족하거나 사실 확인이 어려운 경우 데이터 부족 상태로 보류합니다. 동일 사이트에 비슷한 제보가 반복되면 확인 필요로 분류하지만, 단일 제보만으로 단정하지 않습니다.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-red-50 border border-red-100">
              <h4 className="text-h4 text-red-800 mb-2 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                반영 제외 대상
              </h4>
              <div className="flex flex-wrap gap-2">
                {['허위 제보', '경쟁 사이트 비방', '개인정보 노출', '확인되지 않은 주장'].map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded-md bg-white border border-red-100 text-body-sm text-red-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Privacy + CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-5 rounded-xl bg-neutral-100 border border-neutral-200">
            <div className="flex items-center gap-3 text-body-sm text-neutral-500">
              <Lock className="w-4 h-4 flex-shrink-0" />
              <span style={{ wordBreak: 'keep-all' }}>개인정보는 마스킹 처리됩니다.</span>
              <a href="/support/terms/" className="underline hover:text-blue-600">이용약관</a>
              <a href="/support/privacy/" className="underline hover:text-blue-600">개인정보처리방침</a>
            </div>
            <a
              href="/support/contact/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-body-sm font-medium hover:bg-blue-700 transition-colors flex-shrink-0"
            >
              <Send className="w-4 h-4" />
              제보하기
            </a>
          </div>

        </div>
      </section>

      {/* ── PREVENTION GUIDE SECTION ── */}
      <section className="py-28 md:py-36 px-6 md:px-20 bg-slate-50 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-16">
            <p className="text-label text-blue-500 mb-4">Prevention Guide</p>
            <h2 className="text-h2 text-neutral-900 leading-tight mb-6 max-w-3xl mx-auto">
              {GUIDE_TITLE}
            </h2>
            <p className="text-body-lg text-neutral-500 max-w-3xl mx-auto">
              {GUIDE_P1}
            </p>
          </div>

          {/* Warning signals grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              { icon: Globe, label: '주소가 반복적으로 변경', color: 'amber' },
              { icon: Banknote, label: '환전 지연 후 추가 입금 요구', color: 'red' },
              { icon: PhoneOff, label: '고객센터 응답 갑자기 중단', color: 'red' },
              { icon: Link2, label: '피싱 유사 주소 사용', color: 'amber' },
              { icon: FileText, label: '운영 정보 불일��', color: 'amber' },
              { icon: Clock, label: '최근 확인일 오래됨', color: 'neutral' },
            ].map((signal, i) => {
              const colorMap: Record<string, string> = {
                amber: 'bg-amber-50 border-amber-200 text-amber-700',
                red: 'bg-red-50 border-red-200 text-red-700',

                neutral: 'bg-neutral-100 border-neutral-200 text-neutral-700',
              }
              const iconColorMap: Record<string, string> = {
                amber: 'text-amber-500',
                red: 'text-red-500',

                neutral: 'text-neutral-500',
              }
              return (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-5 rounded-xl border ${colorMap[signal.color]}`}
                >
                  <signal.icon className={`w-5 h-5 flex-shrink-0 ${iconColorMap[signal.color]}`} />
                  <span className="text-body-sm font-medium" style={{ wordBreak: 'keep-all' }}>{signal.label}</span>
                </div>
              )
            })}
          </div>

          {/* Guide cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Globe, title: '주소 변경 체크포인트', desc: '주소 변경 시 확인해야 할 항목' },
              { icon: Eye, title: '피싱 사이트 구별법', desc: '유사 도메인과 원본 구분 방법' },
              { icon: Clock, title: '환전 지연 대응법', desc: '환전 지연 시 확인할 절차' },
              { icon: Banknote, title: '추가 입금 요구 대처', desc: '추가 입금 요구 시 대응 방법' },
            ].map((guide, i) => (
              <a
                key={i}
                href="/guide/"
                className="group p-6 rounded-2xl bg-white border border-neutral-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <guide.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-h4 text-neutral-900 mb-2 group-hover:text-blue-700 transition-colors">{guide.title}</h3>
                <p className="text-body-sm text-neutral-500" style={{ wordBreak: 'keep-all' }}>{guide.desc}</p>
              </a>
            ))}
          </div>

          {/* Content paragraphs */}
          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-white border border-neutral-200">
              <p className="text-body-sm text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {GUIDE_P2}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-neutral-200">
              <p className="text-body-sm text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {GUIDE_P3}
              </p>
            </div>
          </div>

          {/* Emergency action box */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-red-600 to-red-500">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Siren className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-h4 text-white mb-1">금전 피해가 의심되는 경우</h3>
                  <p className="text-body-sm text-white/80" style={{ wordBreak: 'keep-all' }}>
                    추가 입금을 즉시 중단하세요
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-wrap gap-2 md:justify-end">
                {[
                  { icon: MessageSquare, label: '대화 기록 보관' },
                  { icon: Banknote, label: '입금 내역 보관' },
                  { icon: Archive, label: '주소 변경 내역 보관' },
                  { icon: ExternalLink, label: '공공 신고 경로 확인' },
                ].map((action, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-body-sm text-white"
                  >
                    <action.icon className="w-4 h-4" />
                    {action.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ��─ FAQ SECTION ── */}
      <section className="py-28 md:py-36 px-6 md:px-20 bg-white border-t border-neutral-100">
        <div className="max-w-4xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-16">
            <p className="text-label text-blue-500 mb-4">FAQ</p>
            <h2 className="text-h2 text-neutral-900 leading-tight">
              {FAQ_TITLE}
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="border border-neutral-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-neutral-50 transition-colors active:bg-neutral-100"
                >
                  <span className="text-h4 text-neutral-900" style={{ wordBreak: 'keep-all' }}>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 py-5 border-t border-neutral-100 bg-neutral-50">
                    <p className="text-body-sm text-neutral-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-blue-50 border border-blue-100 text-center">
            <p className="text-body-sm text-neutral-600 mb-4" style={{ wordBreak: 'keep-all' }}>
              더 궁금한 점이 있으신가요?
            </p>
            <a
              href="/support/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-body-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              <Send className="w-4 h-4" />
              제보 또는 문의하기
            </a>
          </div>

        </div>
      </section>



    </main>
  )
}
