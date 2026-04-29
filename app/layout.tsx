import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Noto_Sans_KR } from 'next/font/google'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import './globals.css'

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: '안심고고 | 사이트 조회 및 검증 정보',
  description: '한국 토토·카지노 사이트 조회와 검증 정보 플랫폼. 마지막 확인일, 주소 변경 이력, 사용자 제보를 한 번에 확인하세요.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="bg-white">
      <body className={`${notoSansKr.className} font-sans antialiased text-gray-900 bg-white`}>
        <SiteHeader />
        <div className="pt-16">
          {children}
        </div>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
