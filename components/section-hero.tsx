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
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-label text-primary mb-4">{label}</p>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          {Icon && (
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          )}
          <h1 className="text-h1 text-heading" style={{ wordBreak: 'keep-all' }}>
            {title}
          </h1>
        </div>

        <p className="text-body-lg text-body max-w-3xl mx-auto mb-8" style={{ wordBreak: 'keep-all' }}>
          {description}
        </p>

        {cta && (
          <a
            href={cta.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-body-sm font-medium hover:bg-primary/90 transition-colors"
          >
            {cta.label}
          </a>
        )}
      </div>
    </section>
  )
}
