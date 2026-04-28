import { Shield, Send, Mail, TrendingUp, Users, Database, ExternalLink } from 'lucide-react'

const YEAR = new Date().getFullYear()
const LAST_MOD = new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\. /g, '.').replace(/\.$/, '')

export default function SiteFooter() {
  return (
    <footer className="bg-neutral-950 text-white">

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">

          {/* Col 1 — 회사 */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-[15px] font-bold tracking-tight">안심고고</span>
            </div>
            <p className="text-[13px] text-neutral-400 leading-relaxed mb-6" style={{ wordBreak: 'keep-all' }}>
              사이트 조회, 검증 이력, 제보 확인까지 한 번에. 감정 없이, 근거 중심으로.
            </p>
            <div className="space-y-2.5">
              {[
                { icon: TrendingUp, label: '4년 운영', desc: 'Since 2022' },
                { icon: Users, label: '편집부 5명', desc: '실명·경력 공개' },
                { icon: Database, label: '자체 데이터', desc: '자체 갱신' },
                { icon: Shield, label: '이용료 없음', desc: '완전 무료' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-[13px] font-medium text-neutral-200">{item.label}</span>
                    <span className="text-[12px] text-neutral-500">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 — 카테고리 */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest text-neutral-500 uppercase mb-5">카테고리</h4>
            <nav className="space-y-1">
              {[
                { label: 'SAFETY — 보증업체', href: '/safety/' },
                { label: 'REVIEW — 먹튀검증', href: '/review/' },
                { label: 'PICKS — 스포츠 분석', href: '/picks/' },
                { label: 'GUIDE — 안전 가이드', href: '/guide/' },
                { label: 'DATA — 데이터센터', href: '/data/' },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="flex items-center gap-2 px-0 py-1.5 text-[13px] text-neutral-400 hover:text-white transition-colors group"
                >
                  <span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-blue-400 transition-colors" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — 지원 · 정책 */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest text-neutral-500 uppercase mb-5">지원 · 정책</h4>
            <nav className="space-y-1">
              {[
                { label: 'About', href: '/about/' },
                { label: '편집부', href: '/about/team/' },
                { label: '연락처', href: '/support/contact/' },
                { label: 'FAQ', href: '/support/faq/' },
                { label: '입점 문의', href: '/support/listing/' },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="flex items-center gap-2 py-1.5 text-[13px] text-neutral-400 hover:text-white transition-colors group"
                >
                  <span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-blue-400 transition-colors" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 4 — 채널 */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest text-neutral-500 uppercase mb-5">채널</h4>
            <div className="space-y-3">
              <a
                href="https://t.me/ansimgogo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#229ED9]/10 border border-[#229ED9]/20 hover:bg-[#229ED9]/20 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#229ED9]/20 flex items-center justify-center">
                  <Send className="w-4 h-4 text-[#229ED9]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-white">텔레그램 채널</p>
                  <p className="text-[11px] text-neutral-500">@ansimgogo</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 ml-auto group-hover:text-[#229ED9] transition-colors" />
              </a>
              <a
                href="mailto:hello@ansimgogo.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-neutral-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-white">이메일</p>
                  <p className="text-[11px] text-neutral-500">hello@ansimgogo.com</p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.07] pt-7">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div>
              <p className="text-[12px] text-neutral-600 mb-4">
                &copy; {YEAR} 안심고고. All rights reserved.
              </p>
              <p className="text-[11px] text-neutral-700 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                안심고고는 공식기관이 아니며 사이트 검증 정보·피해예방 가이드를 제공합니다. 제공 정보는 법적 효력이 없으며, 실제 피해 신고는 관련 공공기관을 통해 진행하세요.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <p className="text-[12px] text-neutral-600 mb-4">
                마지막 갱신: <span className="text-neutral-500">{LAST_MOD}</span>
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: '이용약관', href: '/support/terms/' },
                  { label: '개인정보처리방침', href: '/support/privacy/' },
                  { label: '청소년보호정책', href: '/support/youth/' },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="text-[12px] text-neutral-500 hover:text-neutral-300 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
