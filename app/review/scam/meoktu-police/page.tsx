'use client'

import { AlertTriangle, Shield, Clock, FileText, AlertCircle, CheckCircle, ChevronRight, Users, TrendingDown } from 'lucide-react'
import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

const FAQ_ITEMS = [
  {
    q: '먹튀폴리스 먹튀란?',
    a: '먹튀폴리스 먹튀는 해당 사이트에서 환전 지연, 추가 입금 요구, 계정 차단 등 사용자 피해 사례가 제보된 상태를 의미합니다. 안심고고는 누적 제보와 자체 점검 데이터를 기반으로 위험 신호를 분류하며, 단정적 판단이 아닌 사실 기반 정보만 제공합니다.',
  },
  {
    q: '어떻게 검증하나요?',
    a: '안심고고는 5단계 자체 검증 프로세스를 통해 운영 이력, 보증 상태, 사용자 제보 누적, 환전 처리 패턴, 고객 응대 이력을 종합 분석합니다. 분기 단위로 재점검하며, 누적 제보가 임계치를 초과하면 분류 등급이 변동됩니다.',
  },
  {
    q: '위험 신호는?',
    a: '주요 위험 신호로는 환전 지연(48시간 초과), 추가 입금 요구, 갑작스러운 도메인 변경, 고객센터 불통, 약관 미비 등이 있습니다. 이 중 2개 이상 해당 시 [주의 필요] 분류, 4개 이상 해당 시 [확인 불가] 분류로 강등됩니다.',
  },
]

export default function MeoktuPolicePage() {
  return (
    <main 
      data-category="review" 
      style={{
        '--primary': '#f59e0b',
        '--primary-foreground': '#ffffff',
        '--accent': '#fffbeb',
        '--accent-foreground': '#b45309',
      } as React.CSSProperties}
      className="min-h-screen bg-background font-sans"
    >
      <SectionHero
        label="먹튀검증"
        title="먹튀폴리스 — 먹튀 이력 + 보증 분석 + 사용자 후기"
        description="먹튀폴리스 먹튀 검증 — 운영 이력 + 보증 분석 + 사용자 후기"
        icon={AlertTriangle}
        variant="accent"
      />

      {/* ── OPENING ANSWER ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-body-lg text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            먹튀폴리스 먹튀는 운영 이력과 사용자 후기를 기반으로 검증한 결과입니다. 먹튀 의심 사례와 위험 신호를 명시합니다. 본 페이지의 모든 정보는 안심고고 자체 데이터와 사용자 제보에 기반하며, 외부 출처 인용은 하지 않습니다.
          </p>
        </div>
      </section>

      {/* ── 1. 운영 이력 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-h2 text-heading">운영 이력</h2>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-4">기본 정보</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between py-3 border-b border-border/50">
                  <span className="text-body-sm text-muted">운영 시작</span>
                  <span className="text-body-sm text-heading font-medium">2021년 3월 (약 4년)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border/50">
                  <span className="text-body-sm text-muted">도메인 변경</span>
                  <span className="text-body-sm text-heading font-medium">2회 (최근: 2024.08)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border/50">
                  <span className="text-body-sm text-muted">마지막 점검일</span>
                  <span className="text-body-sm text-heading font-medium">2025.04.15</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border/50">
                  <span className="text-body-sm text-muted">현재 분류</span>
                  <span className="text-body-sm text-amber-600 font-semibold">[주의 필요]</span>
                </div>
              </div>
            </div>

            {/* 타임라인 */}
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-6">변경 이력 타임라인</h3>
              <div className="space-y-4">
                {[
                  { date: '2025.04', event: '분기 재점검 완료', status: 'warn', detail: '누적 제보 증가로 [주의 필요] 분류 유지' },
                  { date: '2024.08', event: '도메인 변경', status: 'alert', detail: '기존 도메인에서 신규 도메인으로 이전' },
                  { date: '2024.01', event: '분류 변동', status: 'warn', detail: '[확인 필요] → [주의 필요] 강등' },
                  { date: '2023.06', event: '첫 제보 접수', status: 'info', detail: '환전 지연 관련 제보 1건 접수' },
                  { date: '2021.03', event: '운영 시작', status: 'info', detail: '먹튀폴리스 최초 운영 확인' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === 'alert' ? 'bg-red-500' :
                        item.status === 'warn' ? 'bg-amber-500' : 'bg-slate-400'
                      }`} />
                      {i < 4 && <div className="w-0.5 h-full bg-border mt-1" />}
                    </div>
                    <div className="pb-6">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-label text-muted">{item.date}</span>
                        <span className="text-body font-medium text-heading">{item.event}</span>
                      </div>
                      <p className="text-body-sm text-body">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. 보증 상태 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-h2 text-heading">보증 상태</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-red-50 border-2 border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="text-label text-red-700">미확인</span>
              </div>
              <h3 className="text-h4 text-heading mb-2">보증금 예치</h3>
              <p className="text-body-sm text-body">보증금 예치 여부를 확인할 수 없습니다.</p>
            </div>
            <div className="p-6 rounded-xl bg-amber-50 border-2 border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <span className="text-label text-amber-700">불안정</span>
              </div>
              <h3 className="text-h4 text-heading mb-2">운영 안정성</h3>
              <p className="text-body-sm text-body">도메인 변경 2회, 운영 정보 불일치 이력</p>
            </div>
            <div className="p-6 rounded-xl bg-amber-50 border-2 border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <span className="text-label text-amber-700">지연 이력</span>
              </div>
              <h3 className="text-h4 text-heading mb-2">환전 처리</h3>
              <p className="text-body-sm text-body">평균 처리 시간 불명, 지연 제보 3건</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 사용자 후기 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-h2 text-heading">사용자 후기</h2>
          </div>
          
          <div className="p-6 rounded-xl bg-background border-2 border-border mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-h4 text-heading">누적 제보 현황</h3>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-label font-semibold">총 7건</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-secondary">
                <p className="text-h3 text-heading font-bold">3건</p>
                <p className="text-body-sm text-muted">환전 지연</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary">
                <p className="text-h3 text-heading font-bold">2건</p>
                <p className="text-body-sm text-muted">추가 입금 요구</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary">
                <p className="text-h3 text-heading font-bold">2건</p>
                <p className="text-body-sm text-muted">고객센터 불통</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { date: '2025.03', type: '환전 지연', summary: '48시간 이상 환전 미처리 후 연락 두절' },
              { date: '2025.01', type: '추가 입금', summary: '출금 시 추가 보증금 요구' },
              { date: '2024.11', type: '환전 지연', summary: '환전 신청 후 72시간 지연, 이후 처리' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-background border-2 border-border flex items-start gap-4">
                <div className="px-2 py-1 rounded bg-amber-100 text-amber-700 text-label whitespace-nowrap">{item.date}</div>
                <div>
                  <span className="text-body font-medium text-heading">{item.type}</span>
                  <p className="text-body-sm text-body mt-1">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. 먹튀 의심 신호 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-h2 text-heading">먹튀 의심 신호</h2>
          </div>
          
          <p className="text-body-lg text-body max-w-2xl mb-8 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            아래 항목은 먹튀폴리스에서 확인된 위험 신호입니다. 5개 중 3개 이상 해당 시 이용에 각별한 주의가 필요합니다.
          </p>

          <div className="space-y-4">
            {[
              { signal: '환전 지연 (48시간 초과)', detected: true },
              { signal: '추가 입금 요구', detected: true },
              { signal: '도메인 변경 (2회 이상)', detected: true },
              { signal: '고객센터 불통', detected: false },
              { signal: '약관 미비 또는 변경', detected: false },
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border-2 ${
                item.detected 
                  ? 'bg-red-50 border-red-200' 
                  : 'bg-background border-border'
              }`}>
                {item.detected ? (
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                ) : (
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                )}
                <span className={`text-body font-medium ${item.detected ? 'text-red-700' : 'text-heading'}`}>
                  {item.signal}
                </span>
                <span className={`ml-auto text-label font-semibold ${item.detected ? 'text-red-600' : 'text-green-600'}`}>
                  {item.detected ? '감지됨' : '미감지'}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-amber-50 border-2 border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-body-sm text-amber-800" style={{ wordBreak: 'keep-all' }}>
                <strong>주의:</strong> 5개 신호 중 3개가 감지되었습니다. 이용 전 충분한 확인이 필요하며, 피해 발생 시 즉시 제보해 주시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. 신고 방법 ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <FileText className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-h2 text-heading">신고 방법</h2>
          </div>
          
          <p className="text-body-lg text-body max-w-2xl mb-8 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            먹튀폴리스 이용 중 피해를 경험하셨다면 아래 경로로 제보해 주시기 바랍니다. 누적 제보는 분기별 재검증에 반영됩니다.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-4">안심고고 제보</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-body-sm text-body">제보 폼: /support/contact/</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-body-sm text-body">필요 정보: 사이트명, 피해 일자, 금액, 증빙 자료</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-body-sm text-body">익명 제보 가능, 신원 정보 마스킹 처리</span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="text-h4 text-heading mb-4">제보 후 처리 과정</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-label font-semibold flex items-center justify-center flex-shrink-0">1</span>
                  <span className="text-body-sm text-body">제보 접수 및 사실 확인</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-label font-semibold flex items-center justify-center flex-shrink-0">2</span>
                  <span className="text-body-sm text-body">동일 패턴 누적 여부 확인</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-label font-semibold flex items-center justify-center flex-shrink-0">3</span>
                  <span className="text-body-sm text-body">분기 점검 시 분류 반영</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <SectionFAQ 
        items={FAQ_ITEMS} 
        description="먹튀폴리스 먹튀 검증에 관한 자주 묻는 질문입니다."
      />

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-accent border-b border-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-h2 text-heading mb-6">피해 예방을 위해</h2>
          <p className="text-body-lg text-body max-w-2xl mx-auto mb-10" style={{ wordBreak: 'keep-all' }}>
            안심고고의 사용자 보호 가이드와 FAQ를 확인하여 피해를 예방하세요.
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

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="review" />
    </main>
  )
}
