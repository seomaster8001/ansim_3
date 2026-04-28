import { LucideIcon } from 'lucide-react'

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
}

export function SectionHero({
  label,
  title,
  description,
  icon: Icon,
  variant = 'default',
  cta,
}: SectionHeroProps) {
  const bgClass = variant === 'accent' ? 'bg-accent' : 'bg-background'
  const borderClass = variant === 'accent' ? 'border-accent' : 'border-border/50'

  return (
    <section className={`${bgClass} border-b ${borderClass} py-24 md:py-32 px-6 md:px-20`}>
      <div className="max-w-5xl mx-auto">
        {/* Icon + Label */}
        <div className="flex items-center gap-3 mb-6">
          {Icon && (
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
          )}
          <p className="text-label text-primary">{label}</p>
        </div>

        {/* Title */}
        <h1 className="text-h1 text-heading mb-6" style={{ wordBreak: 'keep-all' }}>
          {title}
        </h1>

        {/* Description */}
        <p className="text-body-lg text-body max-w-2xl" style={{ wordBreak: 'keep-all' }}>
          {description}
        </p>

        {/* CTA */}
        {cta && (
          <div className="mt-8">
            <a
              href={cta.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-body-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
