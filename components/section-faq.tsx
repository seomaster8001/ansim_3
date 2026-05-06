'use client'

import { useState } from 'react'
import { ChevronDown, Send } from 'lucide-react'

interface FAQItem {
  q: string
  a: string
}

interface SectionFAQProps {
  items: FAQItem[]
  title?: string
  description?: string
}

export function SectionFAQ({ 
  items, 
  title = '자주 묻는 질문',
  description = '자주 묻는 질문을 정리했습니다. 추가 문의는 제보 페이지를 이용하세요.'
}: SectionFAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-32 md:py-40 px-6 md:px-20 bg-secondary border-t-2 border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left: Heading + CTA */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-label text-primary font-semibold mb-4">FAQ</p>
              <h2 className="text-h2 text-heading leading-tight mb-8">
                {title}
              </h2>
              <p className="text-body text-body mb-10 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                {description}
              </p>
              <a
                href="/support/contact/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white text-body-sm font-semibold hover:bg-primary/90 hover:shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                문의하기
              </a>
            </div>
          </div>

          {/* Right: FAQ List */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border-2 transition-all ${
                    openFaq === i 
                      ? 'bg-background border-primary shadow-md' 
                      : 'bg-background border-transparent hover:border-primary/30 hover:shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start gap-4 p-6 text-left"
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-all ${
                      openFaq === i 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {i + 1}
                    </span>
                    <span className="flex-1 text-body font-semibold text-heading pt-0.5" style={{ wordBreak: 'keep-all' }}>
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform mt-0.5 ${
                        openFaq === i ? 'rotate-180 text-primary' : 'text-body'
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 pl-16 border-t border-border/30">
                      <p className="text-body text-body leading-relaxed pt-6" style={{ wordBreak: 'keep-all' }}>
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
