'use client'

import { useState, useEffect } from 'react'
import { Shield, Search, Menu, X, ChevronDown, Send } from 'lucide-react'

const NAV_ITEMS = [
  {
    label: '보증업체',
    href: '/safety/',
    sub: [
      { label: 'GOLD 등급', href: '/safety/gold/' },
      { label: 'SILVER 등급', href: '/safety/silver/' },
      { label: 'BRONZE 등급', href: '/safety/bronze/' },
      { label: '검증 기준 안내', href: '/safety/criteria/' },
    ],
  },
  {
    label: '먹튀검증',
    href: '/review/',
    sub: [
      { label: '최신 리포트', href: '/review/latest/' },
      { label: '제보 이력', href: '/review/history/' },
      { label: '확인 필요 목록', href: '/review/caution/' },
    ],
  },
  {
    label: '스포츠 분석',
    href: '/picks/',
    sub: [
      { label: 'KBO', href: '/picks/kbo/' },
      { label: 'MLB', href: '/picks/mlb/' },
      { label: 'EPL', href: '/picks/epl/' },
      { label: '라이브스코어', href: '/picks/livescore/' },
    ],
  },
  {
    label: '안전 가이드',
    href: '/guide/',
    sub: [
      { label: '피해예방 체크리스트', href: '/guide/checklist/' },
      { label: '피싱 사이트 구별법', href: '/guide/phishing/' },
      { label: '환전 지연 대응법', href: '/guide/withdrawal/' },
      { label: '공공 신고 경로', href: '/guide/report/' },
    ],
  },
  {
    label: '데이터센터',
    href: '/data/',
    sub: [
      { label: '변경 이력', href: '/data/history/' },
      { label: '검증 현황', href: '/data/status/' },
      { label: '카테고리 흐름', href: '/data/trends/' },
    ],
  },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_12px_rgba(0,0,0,0.08)] border-b border-neutral-100'
            : 'bg-white border-b border-neutral-100'
        }`}
        style={{ height: '64px' }}
      >
        <div className="h-full max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-[15px] font-bold text-neutral-900 tracking-tight">안심고고</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" onMouseLeave={() => setActiveDropdown(null)}>
            {NAV_ITEMS.map((item, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setActiveDropdown(i)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                    activeDropdown === i
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === i ? 'rotate-180' : ''}`} />
                </a>

                {/* Dropdown */}
                {activeDropdown === i && (
                  <div className="absolute top-full left-0 mt-1.5 w-44 bg-white rounded-xl border border-neutral-100 shadow-lg shadow-neutral-900/10 py-1.5 z-50">
                    {item.sub.map((sub, si) => (
                      <a
                        key={si}
                        href={sub.href}
                        className="flex items-center px-4 py-2 text-[13px] text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="검색"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Telegram */}
            <a
              href="https://t.me/ansimgogo"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#229ED9] hover:bg-[#1a8bc7] transition-colors text-white text-[13px] font-medium"
            >
              <Send className="w-3.5 h-3.5" />
              텔레그램
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-100 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="메뉴 열기"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-white rounded-2xl border border-neutral-200 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-100">
              <Search className="w-5 h-5 text-neutral-400 flex-shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="사이트명 또는 주소를 입력하세요"
                className="flex-1 bg-transparent outline-none text-sm text-neutral-900 placeholder:text-neutral-400"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="px-5 py-3">
              <p className="text-xs text-neutral-400">사이트명, 도메인 주소를 입력하면 검증 정보를 확인할 수 있습니다.</p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile slide-in menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          {/* Slide panel */}
          <div className="relative w-72 max-w-[85vw] h-full bg-white shadow-2xl flex flex-col">
            {/* Panel header */}
            <div className="flex items-center justify-between px-5 border-b border-neutral-100" style={{ height: '56px' }}>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-[14px] font-bold text-neutral-900">안심고고</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-400 hover:bg-neutral-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 overflow-y-auto py-3 px-3">
              {NAV_ITEMS.map((item, i) => (
                <div key={i}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-[14px] font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
                    onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${mobileExpanded === i ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExpanded === i && (
                    <div className="ml-3 mb-1 border-l-2 border-neutral-100 pl-3 space-y-0.5">
                      {item.sub.map((sub, si) => (
                        <a
                          key={si}
                          href={sub.href}
                          className="block px-2 py-2 text-[13px] text-neutral-500 hover:text-neutral-900 rounded-md hover:bg-neutral-50 transition-colors"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Panel footer */}
            <div className="px-4 py-4 border-t border-neutral-100">
              <a
                href="https://t.me/ansimgogo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#229ED9]/10 text-[#229ED9] text-[13px] font-medium hover:bg-[#229ED9]/20 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                텔레그램 채널
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
