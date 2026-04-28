import { Mail, Send, MessageSquare, FileText, Clock, ChevronRight, CheckCircle } from 'lucide-react'
import { SectionHero } from '@/components/section-hero'
import { SectionFAQ } from '@/components/section-faq'
import { SectionCategories } from '@/components/section-categories'

const FAQ_ITEMS = [
  {
    q: '제보 후 결과가 즉시 공개되지 않는 이유는 무엇인가요',
    a: '안심고고는 사실 일치성 점검과 동일 패턴 누적 확인을 거친 후에만 분류 결과를 외부에 공개하는 정책을 운영합니다. 즉시 공개 시 명예훼손 위험과 사용자 오인 위험이 함께 커지며, 단일 제보만으로 사이트를 부정 분류하면 검증 신뢰성이 약해지므로 분기 점검 주기에 맞춘 단계적 공개 절차를 채택하고 있습니다.',
  },
  {
    q: '텔레그램에서 1:1 문의도 받나요',
    a: '텔레그램 채널은 공식 공지와 분기 리포트 발행 알림 발송 전용으로 운영되며 1:1 문의는 별도 받지 않습니다. 사이트 정보 제보는 제보 폼, 약관·개인정보 문의는 이메일, 입점 신청은 별도 폼으로 채널이 분리되어 있어 사용자가 본인 목적에 맞는 채널을 선택해 사용하는 것이 권장됩니다.',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      {/* ── HERO SECTION ── */}
      <SectionHero
        label="Contact"
        title="연락처 — 제보 폼·텔레그램·이메일 안내"
        description="안심고고에 어떤 채널로 연락할 수 있는지 / 어떻게 처리되는지 한 페이지 안내"
        variant="accent"
      />

      {/* ── CONTACT CHANNELS SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">연락 채널 4종</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              안심고고는 사용자 유형과 문의 목적에 따라 4가지 연락 채널을 분리 운영하며, 채널별로 처리 절차와 평균 응답 시간이 서로 다르므로 본인 목적에 맞는 채널을 선택해 사용하는 것이 권장됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: MessageSquare,
                title: '제보 폼',
                desc: '사이트 정보 제보·환전 지연 신고',
                tag: '메인 채널',
              },
              {
                icon: Send,
                title: '텔레그램 채널',
                desc: '실시간 공지·분기 리포트 발행 알림',
                tag: '@ansimgogo',
              },
              {
                icon: Mail,
                title: '이메일',
                desc: '약관·개인정보·법적 문의',
                tag: 'hello@ansimgogo.com',
              },
              {
                icon: FileText,
                title: '입점 신청 폼',
                desc: '보증업체 입점 신청 별도 채널',
                tag: '별도 신청',
              },
            ].map((channel, i) => (
              <div key={i} className="p-6 rounded-xl bg-accent border border-border/50 hover:border-primary/50 hover:shadow-md transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <channel.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-h4 text-heading">{channel.title}</h3>
                      <span className="inline-block px-2 py-1 rounded text-label text-primary bg-primary/10 text-xs font-medium">
                        {channel.tag}
                      </span>
                    </div>
                    <p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}>
                      {channel.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPORT FORM PROCESS SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">제보 폼 처리 절차</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              제보 폼은 안심고고 메인 연락 채널이며, 모든 사이트 정보 제보는 본 폼을 통해 접수되어 다음 4단계 절차로 처리됩니다. 즉시 공개 정책은 사용하지 않으며 편집부 사실 일치성 점검과 동일 패턴 누적 확인 후에만 분류 결과가 본문에 반영됩니다.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                n: '1',
                title: '접수',
                desc: '제보 폼 입력 후 자동 수신 확인 (24시간 이내 발송)',
              },
              {
                n: '2',
                title: '검토',
                desc: '편집부 5명이 사실 일치성과 동일 패턴 누적 여부 점검',
              },
              {
                n: '3',
                title: '분류',
                desc: '"확인 필요 / 데이터 부족 / 검증 통과" 중립 라벨 부여',
              },
              {
                n: '4',
                title: '반영',
                desc: '분기 단위로 디렉토리 카드와 분기 리포트에 결과 반영',
              },
            ].map((step, i) => (
              <div key={i} className="p-5 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-body">
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

          <p className="text-body-sm text-body mt-6 p-4 rounded-lg bg-muted border border-border/50" style={{ wordBreak: 'keep-all' }}>
            평균 처리 기간은 분기 단위 (3개월) 이며, 누적 5건 이상 시점부터 외부 공개 대상이 됩니다.
          </p>
        </div>
      </section>

      {/* ── RESPONSE TIME SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-h2 text-heading mb-6">채널별 평균 응답 시간</h2>
            <p className="text-body-lg text-body max-w-2xl mx-auto" style={{ wordBreak: 'keep-all' }}>
              채널별 응답 시간은 안심고고가 분기 단위로 자체 측정해 외부 공개하는 운영 지표이며, 응답 시간이 변동되면 본 페이지 하단 갱신일에 함께 표기되어 사용자가 직접 비교 확인할 수 있도록 함께 안내합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                channel: '제보 폼',
                times: ['자동 수신 확인 24시간', '분류 결과 분기 단위'],
              },
              {
                channel: '텔레그램',
                times: ['공지 발송 즉시', '1:1 응답 X (공식 채널만)'],
              },
              {
                channel: '이메일',
                times: ['영업일 3-5일', '(법적 문의는 추가 검토)'],
              },
              {
                channel: '입점 신청',
                times: ['1차 검토 영업일 7일', '5단계 검증 완료 분기 단위'],
              },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-secondary border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="text-h4 text-heading">{item.channel}</h3>
                </div>
                <ul className="space-y-2">
                  {item.times.map((time, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-body-sm text-body">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <SectionFAQ 
        items={FAQ_ITEMS} 
        description="연락처와 처리 절차에 관한 자주 묻는 질문입니다."
      />

      {/* ── RELATED CATEGORIES ── */}
      <SectionCategories currentPage="contact" />
    </main>
  )
}
