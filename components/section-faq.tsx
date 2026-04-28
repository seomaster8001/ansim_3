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
    <section className="py-24 md:py-32 px-6 md:px-20 bg-secondary border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Heading + CTA */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="text-label text-primary mb-4">FAQ</p>
              <h2 className="text-h2 text-heading leading-tight mb-6">
                {title}
              </h2>
              <p className="text-body-sm text-body mb-8" style={{ wordBreak: 'keep-all' }}>
                {description}
              </p>
              <a
                href="/support/contact/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-body-sm font-medium hover:bg-primary/90 transition-colors"
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
                  className={`rounded-xl transition-all ${
                    openFaq === i 
                      ? 'bg-background ring-1 ring-primary/30 shadow-sm' 
                      : 'bg-background hover:ring-1 hover:ring-border'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start gap-4 p-5 text-left"
                  >
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                      openFaq === i 
                        ? 'bg-primary text-white' 
                        : 'bg-muted text-body'
                    }`}>
                      {i + 1}
                    </span>
                    <span className="flex-1 text-body-sm font-medium text-heading pt-0.5" style={{ wordBreak: 'keep-all' }}>
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform mt-0.5 ${
                        openFaq === i ? 'rotate-180 text-primary' : 'text-body'
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 pl-16">
                      <p className="text-body-sm text-body leading-relaxed" style={{ wordBreak: 'keep-all' }}>
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
