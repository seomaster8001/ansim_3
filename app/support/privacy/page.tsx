import { ChevronRight, Eye, Lock, Trash2, FileText, Shield } from 'lucide-react'
import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

const faqItems = [
  {
    q: '회원 등록 없이 정말 모든 서비스를 이용할 수 있나요?',
    a: '네. 안심고고는 회원 등록 절차가 없으므로 이름, 이메일, 전화번호 등 신원 정보를 일절 수집하지 않습니다. 사이트 조회와 익명 제보는 회원 가입 없이 바로 이용할 수 있으며, 이메일 문의가 필요한 경우에만 이메일 주소를 선택적으로 입력할 수 있습니다.',
  },
  {
    q: '제보한 정보가 외부에 노출되지 않나요?',
    a: '제보 정보는 안심고고 내부에서만 검토되며, 분기 리포트에 사례로 노출될 때도 모든 신원 정보가 마스킹·익명화 처리됩니다. 이메일은 첫 글자만, 사이트명과 환전 지연 금액은 분포 통계로만 공개되어 개별 제보자 신원이 식별되지 않습니다.',
  },
  {
    q: '내 정보를 즉시 삭제해달라고 요청할 수 있나요?',
    a: '가능합니다. 이메일 문의 채널을 통해 삭제 요청을 하면 보관 기간과 무관하게 즉시 폐기 처리됩니다. 요청 후 영업일 3-5일 이내에 처리 결과가 통보되며, 삭제 완료 후에는 제출하신 정보가 남아있지 않습니다.',
  },
  {
    q: '서버 로그에 접속 IP가 저장되나요?',
    a: '네, 서버 보안 목적으로 접속 IP와 브라우저 정보, 접속 시각이 자동 수집되어 서버 로그에 기록됩니다. 다만 이 정보는 3개월 후 자동 폐기되며 외부에 공개되지 않습니다.',
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      {/* ── HERO SECTION ── */}
      <SectionHero
        label="Privacy Policy"
        title="개인정보 처리방침 — 수집·보관·마스킹·폐기 정책"
        description="안심고고가 어떤 개인정보를 어떻게 처리하는지 한 페이지에서 안내합니다."
        icon={Shield}
        variant="accent"
      />

      {/* ── PURPOSE SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">처리방침 목적</h2>
          <p className="text-body text-body leading-relaxed mb-4" style={{ wordBreak: 'keep-all' }}>
            본 처리방침은 안심고고가 사용자로부터 수집·보관·이용·폐기하는 개인정보의 항목과 절차를 명확히 공개하기 위한 문서이며, 안심고고는 회원 등록 절차 없이 익명 이용을 기본으로 운영하므로 수집 항목 자체를 최소화하는 정책을 채택합니다.
          </p>
          <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
            상세 신고 경로는 <a href="/support/terms/" className="text-primary hover:text-primary/90 underline">이용약관</a> 페이지의 "관련 신고 경로 안내" 섹션에서 별도 안내됩니다.
          </p>
        </div>
      </section>

      {/* ── COLLECTION ITEMS SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">수집 항목과 수집 시점</h2>
          <p className="text-body text-body leading-relaxed mb-8" style={{ wordBreak: 'keep-all' }}>
            안심고고가 수집하는 개인정보 항목은 사용자 행동 시점별로 다음과 같이 분리되어 있으며, 모든 항목은 사용자가 직접 입력하는 자율 제출 정보로 운영됩니다. 자동 수집 정보는 별도 분리 표기되어 사용자가 어떤 시점에 어떤 정보가 수집되는지 직접 확인할 수 있습니다.
          </p>

          <div className="space-y-3">
            {[
              {
                icon: FileText,
                title: '제보 폼 입력 시',
                desc: '사이트명, 환전 지연 일자·금액, 증빙 자료 (선택: 이메일)',
              },
              {
                icon: FileText,
                title: '입점 신청 시',
                desc: '사이트 운영 정보, 보증금 증빙, 운영자 연락처',
              },
              {
                icon: FileText,
                title: '이메일 문의 시',
                desc: '이메일 주소, 문의 내용',
              },
              {
                icon: Eye,
                title: '자동 수집',
                desc: '접속 IP, 브라우저 종류, 접속 시각 (서버 로그)',
              },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border border-border/50">
                <div className="flex items-start gap-3 mb-2">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="text-h4 text-heading">{item.title}</h3>
                </div>
                <p className="text-body-sm text-body pl-8" style={{ wordBreak: 'keep-all' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-body-sm text-body mt-8" style={{ wordBreak: 'keep-all' }}>
            회원 등록 절차가 없으므로 이름·주민번호·전화번호는 일절 수집하지 않습니다.
          </p>
        </div>
      </section>

      {/* ── RETENTION PERIOD SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">보관 기간</h2>
          <p className="text-body text-body leading-relaxed mb-8" style={{ wordBreak: 'keep-all' }}>
            수집된 개인정보의 보관 기간은 수집 항목별로 다음과 같이 분리 운영되며, 보관 기간 만료 후 자동 폐기 시스템이 작동해 사용자 별도 신청 절차 없이 자동 폐기됩니다. 분기 점검 시 폐기 처리 결과가 <a href="/support/author/" className="text-primary hover:text-primary/90 underline">편집부</a> 내부 로그에 함께 기록되도록 운영됩니다.
          </p>

          <div className="space-y-3">
            {[
              { period: '12개월', title: '제보 자료', desc: '분기 리포트 발행 후 (사례 추적 목적)' },
              { period: '24개월', title: '입점 신청 자료', desc: '입점 결과 통보 후 (재검증 대비)' },
              { period: '6개월', title: '이메일 문의', desc: '응답 완료 후' },
              { period: '3개월', title: '서버 로그', desc: '자동 수집일로부터' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-secondary border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-h4 font-bold text-primary">{item.period}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-h4 text-heading mb-1">{item.title}</h3>
                    <p className="text-body-sm text-body">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-body-sm text-body mt-8" style={{ wordBreak: 'keep-all' }}>
            만료된 자료는 자동 폐기되며 사용자 요청 시 만료 전 즉시 폐기도 가능합니다.
          </p>
        </div>
      </section>

      {/* ── MASKING POLICY SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">마스킹·익명화 정책</h2>
          <p className="text-body text-body leading-relaxed mb-8" style={{ wordBreak: 'keep-all' }}>
            안심고고는 외부 공개 시 모든 개인정보를 마스킹·익명화 처리해 사용자 신원이 외부에 노출되지 않도록 운영합니다. 분기 리포트 발행 시 사례 분석에 사용되는 자료도 동일 정책이 일관 적용되어 사용자 보호가 본문 작성·외부 공개 모든 단계에서 유지됩니다.
          </p>

          <div className="space-y-3">
            {[
              { icon: Lock, title: '이메일', desc: '외부 노출 시 첫 글자만 노출 (예: a***@****.com)' },
              { icon: Lock, title: '사이트명', desc: '제보 자료에서 사이트명 외 운영자 정보는 비공개' },
              { icon: Lock, title: '금액·일자', desc: '분기 리포트에 분포 통계로만 노출 (개별 사례 X)' },
              { icon: Lock, title: '신원 정보', desc: '이름·전화번호 수집 X (애초에 수집하지 않음)' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border border-border/50 flex items-start gap-3">
                <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-h4 text-heading mb-1">{item.title}</h3>
                  <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USER RIGHTS SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">사용자 권리</h2>
          <p className="text-body text-body leading-relaxed mb-8" style={{ wordBreak: 'keep-all' }}>
            사용자는 본인이 제출한 개인정보에 대해 다음 4가지 권리를 행사할 수 있으며, <a href="/support/contact/" className="text-primary hover:text-primary/90 underline">이메일 문의</a> 채널로 권리 행사를 직접 요청할 수 있습니다. 응답은 영업일 3-5일 이내에 발송되며 처리 결과는 사용자에게 별도 통보되도록 정책이 운영됩니다.
          </p>

          <div className="space-y-3">
            {[
              { icon: Eye, title: '열람 요청', desc: '본인 제출 자료 확인' },
              { icon: FileText, title: '정정 요청', desc: '사실 오류 정정' },
              { icon: Trash2, title: '삭제 요청', desc: '즉시 폐기 (보관 기간 만료 전)' },
              { icon: Shield, title: '이의 제기', desc: '처리방침 변경 시 이의 제기' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-secondary border border-border/50">
                <div className="flex items-start gap-3 mb-2">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="text-h4 text-heading">{item.title}</h3>
                </div>
                <p className="text-body-sm text-body pl-8" style={{ wordBreak: 'keep-all' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POLICY CHANGE SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-heading mb-6">처리방침 변경 정책</h2>
          <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            본 처리방침은 분기 단위로 검토하며 변경 시 본 페이지 하단 개정 이력에 변경 일자와 주요 변경 사항이 함께 기록됩니다. 중요한 변경 시 텔레그램 공식 채널로 사전 공지가 발송되며 사용자가 변경 사항을 확인한 후에 안심고고 이용을 결정할 수 있도록 안내됩니다.
          </p>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <SectionFAQ 
        items={faqItems} 
        description="개인정보 처리에 관한 자주 묻는 질문을 정리했습니다."
      />

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="privacy" />
    </main>
  )
}
