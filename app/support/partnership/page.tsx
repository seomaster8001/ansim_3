'use client'

import { ChevronRight, FileText, CheckCircle, Clock, AlertCircle, Shield } from 'lucide-react'
import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

const faqItems = [
  {
    q: '입점료가 검증 결과에 영향을 주나요?',
    a: '입점료는 검증 결과나 Tier 분류에 영향을 주지 않습니다. 안심고고는 입점 심사와 검증 결과를 분리 운영해 편집부가 5단계 점검 항목을 동일 기준으로 적용하며, 입점료 납부 여부는 분기 점검에서도 동일하게 분리 처리됩니다. 이해 충돌이 발생하면 본문에 명시 공개되어 사용자가 직접 확인할 수 있도록 안내됩니다.',
  },
  {
    q: '입점 신청 후 결과는 언제 알 수 있나요?',
    a: '1차 검토 결과는 영업일 7일 이내에 발송되며, 5단계 검증 완료까지 평균 분기 단위 (3개월) 소요됩니다. 자료 미비 시 보완 요청이 발송되며 보완 자료 수신일 기준으로 처리 기간이 다시 계산됩니다. 최종 결과 통보 시 통과·미달·보완 요청 분류와 사유가 함께 안내되어 운영자가 다음 단계를 직접 결정할 수 있도록 안내됩니다.',
  },
]

export default function PartnershipPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      {/* ── HERO SECTION ── */}
      <SectionHero
        label="Partnership"
        title="입점 신청 — 보증업체 5단계 검증 절차 안내"
        description="보증업체 입점을 원하는 사이트 운영자가 어떤 절차로 신청하는지 / 어떤 자료가 필요한지 안내"
        icon={FileText}
        variant="accent"
      />

      {/* ── ABOUT APPLICATION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">입점 신청 안내</h2>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              입점 신청은 토토·카지노 사이트 운영자가 안심고고 <a href="/safety/" className="text-primary hover:underline font-medium">보증업체 디렉토리</a>에 등록을 신청하는 채널이며, 입점료가 검증 결과나 Tier 분류 산정에 영향을 주지 않도록 입점 심사와 검증 결과 산정 절차가 일관 분리 운영되도록 정책이 운영됩니다.
            </p>
            <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              일반 사용자 제보 채널과 별도로 분리되어 있어 입점 문의가 사용자 제보와 섞이지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── REQUIRED DOCUMENTS ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">입점 신청 시 필요 자료</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              입점 신청 시 사이트 운영자가 안심고고에 제출해야 하는 기본 자료 목록이며, 자료 미비 시 1차 검토 단계에서 운영자에게 보완 요청이 별도 발송됩니다.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto mb-6">
            <p className="text-body-sm text-body italic" style={{ wordBreak: 'keep-all' }}>
              모든 자료는 안심고고 내부 검증용으로만 사용되며 외부 공개 시 익명 마스킹 처리되어 운영됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: FileText,
                title: '사이트 기본 정보',
                desc: '사이트명·도메인·운영 시작일·사업자 정보',
              },
              {
                icon: CheckCircle,
                title: '보증금 증빙',
                desc: '보증금 수치 + 입금 증빙 자료',
              },
              {
                icon: Shield,
                title: '운영 정책',
                desc: '환전 처리 시간·약관·이용 정책 문서',
              },
              {
                icon: Clock,
                title: '연락 채널',
                desc: '사용자 응대 채널 (텔레그램·이메일·전화)',
              },
            ].map((doc, i) => (
              <div key={i} className="p-6 rounded-xl bg-secondary border border-border/50 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <doc.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-h4 text-heading pt-0.5">{doc.title}</h3>
                </div>
                <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                  {doc.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 rounded-xl bg-accent border border-border/50">
            <p className="text-body-sm text-body flex items-start gap-2" style={{ wordBreak: 'keep-all' }}>
              <span className="text-primary font-bold flex-shrink-0 mt-0.5">•</span>
              <span><strong>운영 이력</strong> — 최근 6개월 환전 처리 통계 (가능한 경우)</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── 5-STEP VERIFICATION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">5단계 검증 절차</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              입점 신청 접수 후 안심고고 편집부가 진행하는 5단계 검증 절차이며, 모든 단계 통과 후에만 디렉토리에 등록되고 Tier 라벨이 부여됩니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  n: '1',
                  title: '운영 정보 일치 점검',
                  desc: '제출 자료와 외부 표기 일치 여부 (영업일 7일)',
                },
                {
                  n: '2',
                  title: '보증금 확인',
                  desc: '보증금 수치와 증빙 자료 교차 검증',
                },
                {
                  n: '3',
                  title: '사용자 제보 패턴 분석',
                  desc: '누적 제보 데이터에서 사이트별 패턴 확인',
                },
                {
                  n: '4',
                  title: '변경 이력 추적',
                  desc: '주소 변경 빈도·운영 정보 ��동 분석',
                },
                {
                  n: '5',
                  title: '분기 점검 합류',
                  desc: '통과 시 디렉토리 등록 + 다음 분기부터 재점검 사이클',
                },
              ].map((step, i) => (
                <div key={i} className="p-5 rounded-xl bg-background border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-h4">
                      {step.n}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-h4 text-heading mb-1">{step.title}</h3>
                      <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-accent border border-border/50">
              <p className="text-body text-body" style={{ wordBreak: 'keep-all' }}>
                전체 절차 완료까지 평균 <strong>분기 단위</strong>가 소요됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── POST-ENTRY QUARTERLY CHECK ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">입점 후 분기 점검 정책</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              입점 후 사이트는 다른 보증업체와 동일한 기준으로 분기마다 5단계 항목을 재점검받으며, 항목 미달 시 Tier 강등 또는 디렉토리 제외 처리됩니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {[
                {
                  icon: Clock,
                  title: '분기 재점검',
                  desc: '5단계 검증 항목 전체 재확인',
                },
                {
                  icon: AlertTriangle,
                  title: '미달 시 조치',
                  desc: 'Tier 강등 또는 디렉토리 제외',
                },
                {
                  icon: FileText,
                  title: '변경 이력 누적',
                  desc: '데이터센터 분기 리포트에 통계 노출',
                },
                {
                  icon: CheckCircle,
                  title: 'Tier 변동',
                  desc: '변경 사유 함께 기록',
                },
              ].map((policy, i) => (
                <div key={i} className="p-5 rounded-xl bg-secondary border border-border/50 flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <policy.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-body font-medium text-heading mb-0.5">{policy.title}</h3>
                    <p className="text-body-sm text-body">{policy.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-accent border border-border/50">
              <p className="text-body text-body" style={{ wordBreak: 'keep-all' }}>
                입점료 납부 여부는 점검 결과와 Tier 산정에 영향을 일절 주지 않도록 분리 운영됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <SectionFAQ 
        items={faqItems} 
        description="입점 신청 및 검증 절차에 대한 궁금증을 정리했습니다."
      />

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="partnership" />
    </main>
  )
}
