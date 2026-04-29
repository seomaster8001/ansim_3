import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface SectionHeroProps {
  label: string
  title: string
  description: string
  icon?: LucideIcon
  variant?: 'accent' | 'default'
  cta?: {
    label: string
    href: string
  }
  widget?: ReactNode
}

export function SectionHero({
  label,
  title,
  description,
  icon: Icon,
  variant = 'default',
  cta,
  widget,
}: SectionHeroProps) {
  const bgClass = variant === 'accent' ? 'bg-accent' : 'bg-background'
  const borderClass = variant === 'accent' ? 'border-accent' : 'border-border/50'

  return (
    <section className={`${bgClass} border-b-2 ${borderClass} py-32 md:py-40 px-6 md:px-20`}>
      <div className="max-w-5xl mx-auto">
        <div className={`flex flex-col ${widget ? 'lg:flex-row lg:items-center lg:gap-16' : ''}`}>
          {/* Left: Text */}
          <div className="flex-1 min-w-0">
            {/* Icon + Label */}
            <div className="flex items-center gap-3 mb-8">
              {Icon && (
                <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              )}
              <p className="text-label text-primary font-semibold">{label}</p>
            </div>

            {/* Title */}
            <h1 className="text-h1 text-heading mb-8 leading-tight" style={{ wordBreak: 'keep-all' }}>
              {title}
            </h1>

            {/* Description */}
            <p className={`text-body-lg text-body mb-10 leading-relaxed ${widget ? 'max-w-xl' : 'max-w-3xl'}`} style={{ wordBreak: 'keep-all' }}>
              {description}
            </p>

            {/* CTA */}
            {cta && (
              <a
                href={cta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground text-body-sm font-semibold hover:bg-primary/90 hover:shadow-md transition-all"
              >
                {cta.label}
              </a>
            )}
          </div>

          {/* Right: Widget */}
          {widget && (
            <div className="mt-12 lg:mt-0 lg:flex-shrink-0 flex justify-center lg:justify-end">
              {widget}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
