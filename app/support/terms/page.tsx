import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'
import { AlertCircle } from 'lucide-react'

const FAQ_ITEMS = [
  {
    q: '안심고고는 정부기관이나 법적 처리 권한이 있나요?',
    a: '아닙니다. 안심고고는 민간 운영 정보 디렉토리이며 공공기관이 아닙니다. 신고 처리 권한이 없으며, 본 약관의 "관련 신고 경로 안내" 섹션에서 공개된 자료를 참고해 안내할 뿐입니다.',
  },
  {
    q: '사이트 거래 중 피해가 발생했을 때 안심고고에 책임을 물을 수 있나요?',
    a: '안심고고는 자립적 정보 디렉토리이므로 외부 사이트 운영 결과나 사용자 직접 거래 결과에 대한 직접 책임을 지지 않습니다. 다만 디렉토리 정보의 사실 일치성에 대해서는 편집부가 직접 책임을 지는 정책으로 운영됩니다.',
  },
  {
    q: '약관이 변경되면 어떻게 알 수 있나요?',
    a: '약관 변경 시 본 페이지 하단의 "개정 이력" 표에 변경 일자와 주요 사항이 기록되며, 텔레그램 공식 채널에서도 안내됩니다. 변경 후 30일 이내에 이의 제기가 없으면 새 약관에 동의한 것으로 간주됩니다.',
  },
  {
    q: '개인정보는 어떻게 처리되나요?',
    a: '회원 등록 절차 없이 모든 기능을 익명으로 이용 가능하며, 회원 정보를 별도 수집하지 않습니다. 자세한 내용은 별도의 개인정보 처리방침 문서를 참고하시기 바랍니다.',
  },
]

export default function TermsPage() {
  return (
    <main className="bg-background font-sans">
      {/* ── HERO SECTION ── */}
      <SectionHero
        label="Terms of Service"
        title="이용약관 — 안심고고 서비스 이용 조항 + 관련 신고 경로 안내"
        description="안심고고 서비스 이용 조건 / 운영 책임 범위 / 관련 신고 경로 한 곳에서 안내"
        icon={AlertCircle}
        variant="accent"
      />

      {/* ── PURPOSE SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-h2 text-heading mb-6">약관 목적</h2>
            <div className="space-y-4">
              <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                본 약관은 안심고고가 운영하는 토토·카지노 사이트 정보 디렉토리 서비스의 이용 조건과 권리·의무 관계를 명확히 규정하기 위한 문서이며, 사용자가 안심고고에 접속·검색·제보하는 시점에 본 약관에 동의한 것으로 간주되도록 운영됩니다.
              </p>
              <p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                안심고고는 사이트 권유나 이용 안내 채널이 아닌 자립적 정보 디렉토리이므로, 본 약관도 정보 조회·제보·열람에 한정된 조항으로 구성됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE SCOPE SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-h2 text-heading mb-6">서비스 이용 범위</h2>
            <p className="text-body text-body mb-8 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              안심고고 서비스에서 사용자가 무료로 이용할 수 있는 기능과 이용할 수 없는 기능을 다음과 같이 명확히 분리해 안내합니다. 회원 등록 절차 없이 모든 기능이 익명 이용 가능하도록 운영되며, 회원 정보를 별도 수집하지 않는 정책이 일관 적용됩니다.
            </p>

            <div className="space-y-3">
              {[
                { label: '이용 가능', items: ['사이트 조회', '보증업체 디렉토리', '먹튀 의심 사이트 조회', '분기 리포트 다운로드'] },
                { label: '제보 채널', items: ['제보 폼 익명 제보', '입점 신청 별도 폼'] },
                { label: '이용 불가', items: ['도박 운영', '도박 결과 처리', '환전 처리', '사이트 이용 알선'] },
                { label: '수수료', items: ['정보 조회·제보 모두 무료', '입점 신청만 별도 안내'] },
              ].map((group, i) => (
                <div key={i} className="p-5 rounded-xl bg-background border border-border/50">
                  <p className="text-h4 text-heading mb-3">{group.label}</p>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-body-sm text-body flex items-start gap-2">
                        <span className="text-primary font-bold flex-shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSIBILITY SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-h2 text-heading mb-6">운영 책임 범위</h2>
            <p className="text-body text-body mb-8 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              안심고고는 자립적 정보 디렉토리이므로 외부 사이트 운영 결과나 사용자 직접 거래 결과에 대한 직접 책임을 일절 지지 않습니다. 다만 디렉토리 정보의 사실 일치성과 분기 점검 정확성에 대해서는 편집부가 직접 책임을 지는 정책으로 운영됩니다.
            </p>

            <div className="space-y-3">
              {[
                { title: '직접 책임', items: ['디렉토리 정보 사실 일치성', '분기 점검 정확성', '본문 표현 정확성'] },
                { title: '간접 책임 X', items: ['외부 사이트 운영 결과', '사용자 직접 거래 결과'] },
                { title: '공식기관 X', items: ['안심고고는 공공기관이 아님', '신고 처리 권한 없음'] },
                { title: '변경 이력', items: ['정책 변경 시 분기마다 본 페이지 하단에 갱신일 표기'] },
              ].map((group, i) => (
                <div key={i} className="p-5 rounded-xl bg-secondary border border-border/50">
                  <p className="text-h4 text-heading mb-3">{group.title}</p>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-body-sm text-body flex items-start gap-2">
                        <span className="text-primary font-bold flex-shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REPORT PATHS SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-h2 text-heading mb-6">관련 신고 경로 안내</h2>
            <div className="mb-10 p-5 rounded-xl bg-accent border border-border/50">
              <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                <strong>안심고고는 아래 기관·조회처와 어떠한 협력·소속·제휴 관계가 일절 없으며, 공공기관도 아닙니다.</strong> 공개된 자료를 참고해 신고 경로를 단순 안내할 뿐이며, 각 기관의 처리 결과나 권한 행사에는 안심고고가 일절 관여할 수 없습니다.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-h4 text-heading mb-4">공공기관 3종</h3>
                <div className="space-y-3">
                  {[
                    { name: '사이버범죄 신고', org: '경찰청 ECRM', url: 'https://ecrm.police.go.kr/' },
                    { name: '인터넷 침해 신고', org: 'KISA', url: 'https://www.kisa.or.kr/' },
                    { name: '금융 사기 신고', org: '금융감독원', url: 'https://www.fss.or.kr/' },
                  ].map((agency, i) => (
                    <a
                      key={i}
                      href={agency.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg bg-background border border-border/50 hover:border-primary/50 hover:bg-accent transition-all"
                    >
                      <p className="text-body font-medium text-heading mb-1">{agency.name}</p>
                      <p className="text-body-sm text-body">{agency.org} (공공기관)</p>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-h4 text-heading mb-4">민간 피해조회 참고처 1종</h3>
                <a
                  href="https://thecheat.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-background border border-border/50 hover:border-primary/50 hover:bg-accent transition-all"
                >
                  <p className="text-body font-medium text-heading mb-1">사기 이력 조회</p>
                  <p className="text-body-sm text-body">더치트 (민간 운영, 공공기관 X)</p>
                </a>
              </div>

              <div className="p-5 rounded-xl bg-background border border-border/50 text-left">
                <p className="text-body-sm text-body italic" style={{ wordBreak: 'keep-all' }}>
                  위 4종은 본문에서 본 약관 페이지의 본 섹션 한 곳에서만 다루며, 안심고고의 다른 페이지(랜딩 검증 기준 인라인 1회 제외) 본문에는 박지 않습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMENDMENT POLICY SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-h2 text-heading mb-6">약관 변경 정책</h2>
            <p className="text-body text-body mb-8 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              본 약관은 분기 단위로 정기 검토하며 변경 시 개정 이력 표에 변경 일자, 변경 조항, 주요 변경 사항이 함께 기록됩니다. 변경 후 30일 이내에 사용자가 별도로 이의 제기를 하지 않으면 변경된 약관에 동의한 것으로 간주되도록 정책이 운영됩니다.
            </p>

            <div className="space-y-3">
              {[
                { label: '개정 주기', value: '분기 단위 검토' },
                { label: '공지 채널', value: '본 페이지 + 텔레그램 공식 채널' },
                { label: '이의 제기', value: '이메일 (영업일 3-5일 응답)' },
                { label: '개인정보 별도', value: '개인정보 처리방침 별도 문서' },
              ].map((policy, i) => (
                <div key={i} className="p-4 rounded-lg bg-secondary border border-border/50 flex items-start gap-4">
                  <p className="text-body font-medium text-heading min-w-24 flex-shrink-0">{policy.label}</p>
                  <p className="text-body text-body">{policy.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <SectionFAQ 
        items={FAQ_ITEMS} 
        description="이용약관과 서비스 정책에 관한 자주 묻는 질문을 정리했습니다."
      />

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="terms" />
    </main>
  )
}
