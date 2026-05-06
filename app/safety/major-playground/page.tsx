'use client'

import { useState } from 'react'
import {
  Shield, CheckCircle, AlertCircle, AlertTriangle, ChevronRight,
  Calendar, ExternalLink, FileText, BarChart3, Check, X,
  ArrowRight, BookOpen, Users, Clock, Globe, Siren, ChevronDown
} from 'lucide-react'

/* ─── 데이터 ───────────────────────────────── */

const HERO_LABEL = '안심고고 GOLD Tier 점검 데이터'
const HERO_TITLE = '메이저 놀이터 — 안심고고 검증 가이드'
const HERO_SUBTITLE = '메이저 놀이터 개념 정의와 5가지 식별 신호 안내'
const LAST_CHECKED = '2026-Q2 (2026-04-30 기준)'
const NEXT_CHECK = '2026-Q3'

const TRUST_STATS = [
  { icon: BarChart3, value: '46건', label: '분기 점검 분석' },
  { icon: Users,     value: '5사이트', label: '분기 점검 사례' },
  { icon: Globe,     value: '6종', label: '외부 등재 채널' },
  { icon: Calendar,  value: '분기 4회', label: '정기 점검 빈도' },
]

const SITES = [
  { name: '페가수스',   tier: 'GOLD', externalList: '외부 등재 5종 우세',             negMention: '거의 없음',         status: 'safe' },
  { name: '판도라',     tier: 'GOLD', externalList: 'mtpolice 3억 + ttcs-1 보증 코드',  negMention: '슈어맨 단발 1건',   status: 'caution' },
  { name: '도깨비',     tier: 'GOLD', externalList: 'mtpolice + 토토핫 등재',           negMention: '슈어맨 단발 1건',   status: 'caution' },
  { name: '손오공',     tier: 'GOLD', externalList: '외부 안전 카테고리 4종',           negMention: '먹튀갤 단발',       status: 'caution' },
  { name: '마카오',     tier: 'GOLD', externalList: '양면 카테고리 등재',               negMention: '먹튀갤 누적',       status: 'warn' },
]

const MAJOR_SIGNALS = [
  { n: '01', title: '카지노+토토+슬롯+미니게임 4종 동시 운영', desc: '단일 게임만 운영하는 사이트는 종합 메이저로 분류하지 않습니다. 최소 3종 이상을 동시에 운영해야 메이저 후보군 진입 조건이 됩니다.' },
  { n: '02', title: '운영 정보 외부 일치', desc: '사이트명·도메인·연락처가 외부 공시 자료와 일치해야 합니다. 불일치가 확인되면 라벨 변동 후보로 분류됩니다.' },
  { n: '03', title: '사용자 제보 누적 부재', desc: '환전 지연·추가 입금 요구 등 반복 제보가 없어야 합니다. 단일 제보만으로 판단하지 않으며 패턴 반복 여부를 봅니다.' },
  { n: '04', title: '보증금 공시 일치', desc: '사이트 측 명시 금액과 실제 입점 기록이 일치해야 합니다. 수치 불일치가 확인되면 즉시 재점검 대상이 됩니다.' },
  { n: '05', title: '도메인 안정성', desc: '월 단위 잦은 도메인 변경이 없어야 합니다. 짧은 기간 반복 변경은 추적 회피 신호로 분류됩니다.' },
]

const FAIL_SIGNALS = [
  { label: '운영 정보 외부 표기 불일치', detail: '사업자명·도메인·연락처가 공시 자료와 어긋남' },
  { label: '보증금 미공시 또는 수치 불일치', detail: '사이트 측 명시 금액과 실제 입점 기록이 다름' },
  { label: '환전 처리 지연 누적', detail: '24시간 이상 처리 사례가 다수 보고됨' },
  { label: '추가 입금 요구 사례 발생', detail: '환전 시점 새 조건이 통보됨' },
  { label: '월 단위 잦은 도메인 변경', detail: '안정성이 일정 수준 미만으로 기록됨' },
]

const USER_CHECK = [
  { label: '마지막 확인일', detail: '분기 단위 갱신, 본 사이트 등록 후 최신 시점' },
  { label: '외부 표기 일치', detail: '사업자명·도메인·연락처 공시 자료 대조' },
  { label: '본인 거래 이력', detail: '환전 처리 시간이 24시간 이내인지 본인 기록으로 확인' },
  { label: '추가 조건 통보 여부', detail: '환전 시점 새 입금 요구가 있었는지 점검' },
]

const CASE_NOTES = [
  {
    site: '페가수스',
    tag: '안정 사례',
    tagColor: 'bg-emerald-100 text-emerald-700',
    desc: '외부 등재 5종 우세 + 부정 언급이 거의 없는 패턴이 분기 점검에서 확인됩니다. 종합 운영(카지노+토토+슬롯+미니) 사이트 분류 후보의 참고 사례입니다.',
  },
  {
    site: '도깨비',
    tag: '출처 충돌 사례',
    tagColor: 'bg-amber-100 text-amber-700',
    desc: 'mtpolice 보증금 + 토토핫 safety 카테고리 등재가 슈어맨 단발 게시물 1건과 동시에 누적된 출처 비대칭 사례. 메이저 라벨이라도 출처 충돌이 검토 대상으로 남는 점을 함께 볼 수 있습니다.',
  },
]

const RELATED_LINKS = [
  { label: '메이저 놀이터 순위', sub: '등급 분류 체계와 평가 항목', href: '/safety/' },
  { label: '메이저 사이트 추천', sub: '추천 절차와 거절 사유', href: '/safety/' },
  { label: '사례 검증 리포트', sub: '누적 사용자 제보 정리', href: '/review/' },
  { label: '사이트 조회 디렉토리', sub: '등록 사이트 개별 페이지', href: '/safety/' },
]

const REPORT_CHANNELS = [
  { label: '경찰청 사이버범죄 신고시스템 ECRM', sub: '도박 사이트·사기 신고', href: 'https://ecrm.police.go.kr' },
  { label: 'KISA 인터넷침해대응센터 보호나라', sub: '불법 사이트·개인정보 침해 (118)', href: 'https://www.boho.or.kr' },
  { label: '금융감독원 1332', sub: '불법 환전·금융 사기 상담', href: 'https://www.fss.or.kr' },
]

const FAQ_ITEMS = [
  {
    q: '메이저 놀이터란 무엇을 가리키나요?',
    a: '안심고고에서는 운영 정보 일관성, 보증금 명시, 환전 처리 기록, 누적 제보 부재, 도메인 안정성 다섯 가지 신호를 충족하는 사이트를 메이저 놀이터로 분류합니다. 어디까지나 점검 시점 기준의 상대 분류이며 사고 면책을 의미하지 않습니다. 분기 점검 자료 46건 분석 결과, 단일 신호 미달은 즉시 제외 사유는 아니지만 라벨 변동 후보로 둡니다. 두 항목 이상 동시 미달일 때 메이저 라벨이 해제됩니다.',
  },
  {
    q: '메이저 라벨은 한 번 받으면 유지되나요?',
    a: '아닙니다. 메이저 라벨은 분기마다 재측정되는 동적 분류입니다. 5신호 중 한 개만 어긋나도 다음 분기에 라벨이 한 단계 내려갈 수 있습니다. 점검 시점 이후 운영 변동이 발생할 수 있으므로 마지막 확인일을 반드시 함께 확인하시기 바랍니다.',
  },
  {
    q: '외부 등재 사실이 사고 시 환급을 보장하나요?',
    a: '보장하지 않습니다. 외부 등재 사실은 분기 점검 시점의 신호 충족 비율 평가이며, 사고 면책이나 환급 보증이 아닙니다. 실제 피해 신고는 경찰청 ECRM, 금융감독원 같은 공식 채널을 이용하시기 바랍니다. 안심고고는 공식 기관이 아니며 사이트 정보·피해예방 가이드만 제공합니다.',
  },
]

/* ─── 컴포넌트 ─────────────────────────────── */

export default function MajorPlaygroundPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background font-sans">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 py-24 text-center">
          <div className="max-w-5xl mx-auto">

            {/* 라벨 */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-accent mb-8">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span className="text-accent-foreground text-body-sm font-medium tracking-wide">{HERO_LABEL}</span>
            </div>

            <h1 className="text-h1 text-heading mb-4" style={{ wordBreak: 'keep-all' }}>
              {HERO_TITLE}
            </h1>
            <p className="text-body-lg text-body max-w-2xl mx-auto mb-4" style={{ wordBreak: 'keep-all' }}>
              {HERO_SUBTITLE}
            </p>
            <p className="text-body-sm text-body mb-12">
              외부 보증업체 채널 등재 기준 분기 점검 분류 · 사고 면책 분류가 아님 · 마지막 점검: {LAST_CHECKED}
            </p>

            {/* Trust Stats */}
            <div className="inline-flex flex-wrap items-center justify-center gap-8 md:gap-14 px-8 py-5 rounded-2xl bg-white border border-border/50 shadow-sm">
              {TRUST_STATS.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-h4 text-heading leading-none">{item.value}</span>
                  <span className="text-xs text-body">{item.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 메이저 놀이터란 ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-white border-t border-border/50">
        <div className="max-w-5xl mx-auto">

          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-4">
              <p className="text-label text-primary mb-4">Definition</p>
              <h2 className="text-h2 text-heading mb-6" style={{ wordBreak: 'keep-all' }}>메이저 놀이터란</h2>
            </div>
            <div className="lg:col-span-8 flex items-end">
              <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                메이저 놀이터를 찾으실 때는 카지노+토토+슬롯+미니게임 4종을 함께 운영하는 사이트인지 먼저 보세요. 단일 게임만 운영하는 사이트는 종합 메이저로 보기 어렵습니다.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-10">
              {[
                { n: '01', title: '용어 정의', body: '메이저 놀이터라는 단어는 종합 운영 + 운영 정보 외부 일치 + 사용자 제보 누적 패턴 세 축을 일정 수준 이상 충족한 사이트를 가리키는 분류 용어입니다. 한국어 베팅 커뮤니티에서 자생한 표현이라 공식 사전 정의가 없습니다.' },
                { n: '02', title: '안심고고 분류 기준', body: '안심고고는 종합 운영 여부를 1차 필터로 보고, 그 위에 다섯 가지 신호를 측정하여 네 개 이상을 충족하는 사이트만 메이저 후보군으로 분류합니다. 단일 게임 특화 사이트는 메이저 토토 사이트 같은 별도 카테고리로 보냅니다.' },
              ].map((item) => (
                <div key={item.n} className="flex gap-5">
                  <span className="text-xs font-mono font-semibold text-primary/70 mt-1 leading-none w-6 flex-shrink-0">{item.n}</span>
                  <div>
                    <h3 className="text-h4 text-heading mb-3">{item.title}</h3>
                    <p className="text-body-sm text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 신호 충족 라벨 카드 */}
            <div className="lg:col-span-7 space-y-4">
              {[
                { label: '5개 충족', sublabel: 'Gold 후보군', bg: 'bg-amber-50', border: 'border-amber-200', bar: 'bg-amber-400', icon: CheckCircle, iconColor: 'text-amber-600', text: 'text-amber-900' },
                { label: '4개 충족', sublabel: 'Silver 후보군', bg: 'bg-slate-50', border: 'border-slate-200', bar: 'bg-slate-400', icon: CheckCircle, iconColor: 'text-slate-500', text: 'text-slate-700' },
                { label: '2개 이하', sublabel: '라벨 변동 후보', bg: 'bg-warning', border: 'border-warning-foreground/30', bar: 'bg-warning-foreground', icon: AlertCircle, iconColor: 'text-warning-foreground', text: 'text-warning-foreground' },
              ].map((item) => (
                <div key={item.label} className={`flex items-start gap-5 p-6 rounded-xl border ${item.bg} ${item.border}`}>
                  <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${item.bar}`} />
                  <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-h4 ${item.text}`}>{item.label}</p>
                    <p className={`text-body-sm mt-1 ${item.text} opacity-60`}>{item.sublabel}</p>
                  </div>
                </div>
              ))}
              <p className="text-xs text-body pt-2 pl-1">* 절대 등급이 아닌 분기 점검 시점의 상대 비교입니다.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 메이저로 분류되는 5가지 신호 ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-t border-border/50">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-label text-primary mb-4">5 Signals</p>
            <h2 className="text-h2 text-heading mb-6" style={{ wordBreak: 'keep-all' }}>메이저로 분류되는 5가지 신호</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              다섯 신호 가운데 네 개 이상이 동시에 충족될 때 메이저 후보군으로 분류되며, 두 개 이하 충족 시 라벨 변동 후보로 둡니다.
            </p>
          </div>

          <div className="space-y-3 mb-10">
            {MAJOR_SIGNALS.map((s) => (
              <div key={s.n} className="flex items-start gap-5 p-5 rounded-xl bg-white border border-border/50">
                <span className="text-xs font-mono font-semibold text-primary/70 mt-0.5 leading-none w-6 flex-shrink-0">{s.n}</span>
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-body font-semibold text-heading mb-1" style={{ wordBreak: 'keep-all' }}>{s.title}</p>
                  <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-amber-50 border border-amber-200">
            <p className="text-body-sm text-amber-800 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              <strong>핵심:</strong> 이 5신호 중 한 개만 어긋나도 다음 분기에 라벨이 한 단계 내려갈 수 있습니다. 메이저 라벨은 한 번 받으면 끝이 아니라 분기마다 재측정되는 동적 분류입니다.
            </p>
          </div>

        </div>
      </section>

      {/* ── 메이저 미달 신호 ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-white border-t border-border/50">
        <div className="max-w-5xl mx-auto">

          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-4">
              <p className="text-label text-primary mb-4">Disqualifiers</p>
              <h2 className="text-h2 text-heading" style={{ wordBreak: 'keep-all' }}>메이저 미달 신호</h2>
            </div>
            <div className="lg:col-span-8 flex items-end">
              <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                다음 항목 가운데 하나라도 확인되면 메이저 분류에서 제외되거나 재점검 대상으로 분류됩니다. 단정 표현 없이 사례 누적 기준으로만 표기합니다.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {FAIL_SIGNALS.map((s, i) => (
              <div key={i} className="flex items-start gap-5 p-5 rounded-xl bg-red-50 border border-red-100">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 flex-shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-red-600" />
                </div>
                <div>
                  <p className="text-body font-semibold text-heading mb-0.5" style={{ wordBreak: 'keep-all' }}>{s.label}</p>
                  <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-secondary border border-border/50">
            <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
              위 신호는 <a href="/review/" className="text-primary underline underline-offset-2">먹튀 의심 신호 7종 페이지</a>에서 상세 사례와 함께 확인할 수 있습니다.
            </p>
          </div>

        </div>
      </section>

      {/* ── 사용자 직접 점검 절차 ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-t border-border/50">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-label text-primary mb-4">User Checklist</p>
            <h2 className="text-h2 text-heading mb-4" style={{ wordBreak: 'keep-all' }}>사용자 직접 점검 절차</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              메이저 분류는 안심고고 측 판정만으로 결정되지 않습니다. 사용자 본인이 다음 항목을 함께 확인하시기 바랍니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {USER_CHECK.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-border/50">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-mono font-semibold text-primary">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <p className="text-body font-semibold text-heading mb-1" style={{ wordBreak: 'keep-all' }}>{item.label}</p>
                  <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 외부 등재 사이트 디렉토리 ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-white border-t border-border/50">
        <div className="max-w-5xl mx-auto">

          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-4">
              <p className="text-label text-primary mb-4">Directory</p>
              <h2 className="text-h2 text-heading" style={{ wordBreak: 'keep-all' }}>외부 등재 사이트 안내</h2>
            </div>
            <div className="lg:col-span-8 flex items-end">
              <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                분기 점검 사례 5사이트 — 모두 카지노+토토+슬롯+미니게임 가운데 최소 3종 이상을 동시에 운영하면서, 외부 보증업체 채널에 등재되어 있고, 운영 정보 표기가 외부 공시와 일치합니다.
              </p>
            </div>
          </div>

          {/* 사이트 테이블 */}
          <div className="overflow-x-auto rounded-xl border border-border/50 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary border-b border-border/50">
                  <th className="text-left px-5 py-3 text-body-sm text-body font-semibold">사이트</th>
                  <th className="text-left px-5 py-3 text-body-sm text-body font-semibold">점검 등급</th>
                  <th className="text-left px-5 py-3 text-body-sm text-body font-semibold">외부 등재</th>
                  <th className="text-left px-5 py-3 text-body-sm text-body font-semibold">부정 언급</th>
                  <th className="text-left px-5 py-3 text-body-sm text-body font-semibold">점검 시점</th>
                </tr>
              </thead>
              <tbody>
                {SITES.map((s, i) => (
                  <tr key={i} className="border-b border-border/30 last:border-0 hover:bg-secondary/50 transition-colors">
                    <td className="px-5 py-4 font-semibold text-heading">{s.name}</td>
                    <td className="px-5 py-4">
                      <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-700">{s.tier}</span>
                    </td>
                    <td className="px-5 py-4 text-body-sm text-body">{s.externalList}</td>
                    <td className="px-5 py-4">
                      <span className={`text-body-sm font-medium ${s.status === 'safe' ? 'text-emerald-600' : s.status === 'warn' ? 'text-red-600' : 'text-amber-600'}`}>
                        {s.negMention}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-body-sm text-body">2026-Q2</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 분기 점검 사례 */}
          <h3 className="text-h4 text-heading mb-5">분기 점검 사례 — 도깨비/페가수스 인용</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {CASE_NOTES.map((c, i) => (
              <div key={i} className="p-6 rounded-xl bg-secondary border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-body font-bold text-heading">{c.site}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${c.tagColor}`}>{c.tag}</span>
                </div>
                <p className="text-body-sm text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-secondary border border-border/50">
            <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
              전체 등재 사이트 목록은 <a href="/safety/" className="text-primary underline underline-offset-2">사이트 조회 디렉토리</a>에서 확인하실 수 있으며, 외부 등재 사실이 사고 시 환급을 보장하지 않습니다.
            </p>
          </div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-t border-border/50">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-label text-primary mb-4">FAQ</p>
            <h2 className="text-h2 text-heading">자주 묻는 질문</h2>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="rounded-xl bg-white border border-border/50 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-body font-semibold text-heading" style={{ wordBreak: 'keep-all' }}>{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-body flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-border/50">
                    <p className="text-body-sm text-body leading-relaxed pt-4" style={{ wordBreak: 'keep-all' }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 md:px-20 bg-white border-t border-border/50">
        <div className="max-w-5xl mx-auto">

          <div className="grid lg:grid-cols-3 gap-5">
            <a href="/guide/" className="group flex items-start gap-4 p-6 rounded-xl bg-secondary border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-body font-semibold text-heading mb-1">사용자 보호 가이드</p>
                <p className="text-body-sm text-body">환전 지연·추가 입금 요구 상황별 대응 절차</p>
              </div>
              <ArrowRight className="w-4 h-4 text-body ml-auto mt-1 group-hover:text-primary transition-colors flex-shrink-0" />
            </a>
            <a href="/support/faq/" className="group flex items-start gap-4 p-6 rounded-xl bg-secondary border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-body font-semibold text-heading mb-1">자주 묻는 질문</p>
                <p className="text-body-sm text-body">메이저 사이트 기준·위험 신호·신고 채널 안내</p>
              </div>
              <ArrowRight className="w-4 h-4 text-body ml-auto mt-1 group-hover:text-primary transition-colors flex-shrink-0" />
            </a>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-6 rounded-xl bg-secondary border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ExternalLink className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-body font-semibold text-heading mb-1">텔레그램 채널</p>
                <p className="text-body-sm text-body">분기 점검 결과·갱신 알림 채널 안내</p>
              </div>
              <ArrowRight className="w-4 h-4 text-body ml-auto mt-1 group-hover:text-primary transition-colors flex-shrink-0" />
            </a>
          </div>

        </div>
      </section>

      {/* ── 관련 페이지 ── */}
      <section className="py-16 px-6 md:px-20 bg-secondary border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-h4 text-heading mb-6">관련 페이지</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {RELATED_LINKS.map((link, i) => (
              <a key={i} href={link.href} className="flex items-center justify-between gap-3 p-4 rounded-xl bg-white border border-border/50 hover:border-primary/30 transition-colors group">
                <div>
                  <p className="text-body-sm font-semibold text-heading group-hover:text-primary transition-colors" style={{ wordBreak: 'keep-all' }}>{link.label}</p>
                  <p className="text-xs text-body mt-0.5" style={{ wordBreak: 'keep-all' }}>{link.sub}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-body flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 외부 신고 채널 ── */}
      <section className="py-14 px-6 md:px-20 bg-white border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-3 mb-6">
            <Siren className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <h3 className="text-h4 text-heading">외부 출처·신고 채널</h3>
          </div>
          <p className="text-body-sm text-body mb-5" style={{ wordBreak: 'keep-all' }}>
            본 페이지는 정보 제공 페이지이며 공식 기관이 아닙니다. 실제 피해 신고는 아래 공식 채널을 이용하시기 바랍니다.
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {REPORT_CHANNELS.map((ch, i) => (
              <a key={i} href={ch.href} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 rounded-xl bg-secondary border border-border/50 hover:border-red-200 transition-colors group">
                <ExternalLink className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-body-sm font-semibold text-heading group-hover:text-red-600 transition-colors" style={{ wordBreak: 'keep-all' }}>{ch.label}</p>
                  <p className="text-xs text-body mt-0.5">{ch.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 유의사항 ── */}
      <section className="py-10 px-6 md:px-20 bg-secondary border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            본 페이지의 분류는 분기 단위 점검 자료에 기반한 상대 분류이며 사고 시 환급을 보장하지 않습니다. 점검 시점 이후 운영 변동이 발생할 수 있으므로 마지막 확인일을 함께 확인하시기 바랍니다. 안심고고는 공식 기관이 아니며 사이트 정보·피해예방 가이드만 제공합니다. 다음 정기 점검: {NEXT_CHECK}.
          </p>
        </div>
      </section>

    </main>
  )
}
