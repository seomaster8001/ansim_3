import { SectionHero } from '@/components/section-hero'
import { SectionCategories } from '@/components/section-categories'
import { Shield, AlertTriangle, Eye, Lock } from 'lucide-react'

export default function YouthPage() {
  return (
    &lt;main className="min-h-screen bg-background font-sans"&gt;
      {/* ── HERO SECTION ── */}
      &lt;SectionHero
        label="Youth Protection Policy"
        title="청소년보호정책"
        description="안심고고는 청소년이 유해 정보에 노출되지 않도록 접근 제한 정책을 운영합니다."
        icon={Shield}
        variant="accent"
      /&gt;

      {/* ── 정책 목적 ── */}
      &lt;section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50"&gt;
        &lt;div className="max-w-3xl mx-auto"&gt;
          &lt;h2 className="text-h2 text-heading mb-6"&gt;정책 목적&lt;/h2&gt;
          &lt;div className="space-y-4"&gt;
            &lt;p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}&gt;
              안심고고는 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 및 「청소년 보호법」에 따라 청소년이 유해 정보에 접근하지 않도록 보호 정책을 운영합니다.
            &lt;/p&gt;
            &lt;p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}&gt;
              안심고고는 토토·카지노 niche 사이트를 검증하고 조회하는 정보 제공 플랫폼이며, 해당 정보는 성인 사용자만을 대상으로 합니다.
            &lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* ── 청소년 유해 매체물 표시 ── */}
      &lt;section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50"&gt;
        &lt;div className="max-w-3xl mx-auto"&gt;
          &lt;h2 className="text-h2 text-heading mb-6"&gt;청소년 유해 매체물 표시&lt;/h2&gt;
          &lt;div className="space-y-4"&gt;
            &lt;p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}&gt;
              안심고고는 사이트 전체를 청소년 유해 매체물로 분류하며, 19세 미만 청소년의 이용을 금지합니다.
            &lt;/p&gt;
            &lt;div className="p-6 rounded-xl bg-destructive/10 border border-destructive/20"&gt;
              &lt;div className="flex items-center gap-3 mb-3"&gt;
                &lt;AlertTriangle className="w-6 h-6 text-destructive" /&gt;
                &lt;span className="text-h4 text-destructive font-bold"&gt;19세 미만 이용 불가&lt;/span&gt;
              &lt;/div&gt;
              &lt;p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}&gt;
                본 사이트는 청소년 보호법에 따라 19세 미만 청소년의 접근이 제한됩니다.
              &lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* ── 접근 제한 조치 ── */}
      &lt;section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50"&gt;
        &lt;div className="max-w-3xl mx-auto"&gt;
          &lt;h2 className="text-h2 text-heading mb-6"&gt;접근 제한 조치&lt;/h2&gt;
          &lt;p className="text-body text-body leading-relaxed mb-8" style={{ wordBreak: 'keep-all' }}&gt;
            안심고고는 청소년 보호를 위해 다음과 같은 조치를 시행합니다.
          &lt;/p&gt;
          &lt;div className="space-y-4"&gt;
            {[
              {
                icon: Eye,
                title: '성인 인증',
                desc: '사이트 접속 시 성인 인증 절차를 통해 19세 미만 사용자의 접근을 차단합니다.',
              },
              {
                icon: Lock,
                title: '유해 정보 차단',
                desc: '청소년에게 유해할 수 있는 콘텐츠에 대해 접근 제한 조치를 적용합니다.',
              },
              {
                icon: Shield,
                title: '보호 정책 고지',
                desc: '청소년보호정책을 사이트 하단에 상시 노출하여 정책 내용을 고지합니다.',
              },
            ].map((item, i) =&gt; (
              &lt;div key={i} className="p-5 rounded-xl bg-secondary border border-border/50 flex items-start gap-4"&gt;
                &lt;div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"&gt;
                  &lt;item.icon className="w-5 h-5 text-primary" /&gt;
                &lt;/div&gt;
                &lt;div className="flex-1 min-w-0"&gt;
                  &lt;h3 className="text-h4 text-heading mb-1"&gt;{item.title}&lt;/h3&gt;
                  &lt;p className="text-body-sm text-body" style={{ wordBreak: 'keep-all' }}&gt;{item.desc}&lt;/p&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* ── 청소년보호책임자 ── */}
      &lt;section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50"&gt;
        &lt;div className="max-w-3xl mx-auto"&gt;
          &lt;h2 className="text-h2 text-heading mb-6"&gt;청소년보호책임자&lt;/h2&gt;
          &lt;p className="text-body text-body leading-relaxed mb-8" style={{ wordBreak: 'keep-all' }}&gt;
            안심고고는 청소년 보호를 위해 청소년보호책임자를 지정하여 운영합니다.
          &lt;/p&gt;
          &lt;div className="p-6 rounded-xl bg-background border border-border/50"&gt;
            &lt;div className="grid md:grid-cols-2 gap-4"&gt;
              &lt;div&gt;
                &lt;p className="text-body-sm text-subtle mb-1"&gt;직책&lt;/p&gt;
                &lt;p className="text-body text-heading font-medium"&gt;청소년보호책임자&lt;/p&gt;
              &lt;/div&gt;
              &lt;div&gt;
                &lt;p className="text-body-sm text-subtle mb-1"&gt;담당자&lt;/p&gt;
                &lt;p className="text-body text-heading font-medium"&gt;편집부 대표&lt;/p&gt;
              &lt;/div&gt;
              &lt;div&gt;
                &lt;p className="text-body-sm text-subtle mb-1"&gt;연락처&lt;/p&gt;
                &lt;p className="text-body text-heading font-medium"&gt;텔레그램: @ansimgogo&lt;/p&gt;
              &lt;/div&gt;
              &lt;div&gt;
                &lt;p className="text-body-sm text-subtle mb-1"&gt;이메일&lt;/p&gt;
                &lt;p className="text-body text-heading font-medium"&gt;support@ansim.net&lt;/p&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* ── 신고 및 문의 ── */}
      &lt;section className="py-24 md:py-32 px-6 md:px-20 bg-background border-b border-border/50"&gt;
        &lt;div className="max-w-3xl mx-auto"&gt;
          &lt;h2 className="text-h2 text-heading mb-6"&gt;신고 및 문의&lt;/h2&gt;
          &lt;div className="space-y-4"&gt;
            &lt;p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}&gt;
              청소년 유해 정보 발견 시 또는 청소년보호정책 관련 문의는 아래 채널로 연락해 주시기 바랍니다.
            &lt;/p&gt;
            &lt;ul className="space-y-2"&gt;
              &lt;li className="flex items-start gap-2"&gt;
                &lt;span className="text-primary"&gt;•&lt;/span&gt;
                &lt;span className="text-body text-body"&gt;텔레그램: &lt;a href="https://t.me/ansimgogo" className="text-primary hover:underline"&gt;@ansimgogo&lt;/a&gt;&lt;/span&gt;
              &lt;/li&gt;
              &lt;li className="flex items-start gap-2"&gt;
                &lt;span className="text-primary"&gt;•&lt;/span&gt;
                &lt;span className="text-body text-body"&gt;이메일: &lt;a href="mailto:support@ansim.net" className="text-primary hover:underline"&gt;support@ansim.net&lt;/a&gt;&lt;/span&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
            &lt;p className="text-body-sm text-subtle mt-6" style={{ wordBreak: 'keep-all' }}&gt;
              접수된 신고는 영업일 기준 24시간 이내 확인 후 조치됩니다.
            &lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* ── 정책 변경 ── */}
      &lt;section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-b border-border/50"&gt;
        &lt;div className="max-w-3xl mx-auto"&gt;
          &lt;h2 className="text-h2 text-heading mb-6"&gt;정책 변경&lt;/h2&gt;
          &lt;div className="space-y-4"&gt;
            &lt;p className="text-body text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}&gt;
              본 청소년보호정책은 관련 법령 개정 또는 내부 정책 변경 시 수정될 수 있으며, 변경 시 사이트 공지사항을 통해 고지합니다.
            &lt;/p&gt;
            &lt;div className="p-5 rounded-xl bg-accent border border-border/50"&gt;
              &lt;p className="text-body-sm text-body"&gt;
                &lt;strong&gt;시행일:&lt;/strong&gt; 2025년 1월 1일
              &lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* ── RELATED CATEGORIES ── */}
      &lt;SectionCategories currentPage="youth" /&gt;
    &lt;/main&gt;
  )
}
