'use client'

import { useState } from 'react'
import { SearchIcon, CheckCircle2, AlertCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

export default function Home() {
  const [variant, setVariant] = useState<'v1' | 'v2' | 'v3'>('v1')

  return (
    <div className="min-h-screen bg-background">
      {/* Variant Selector */}
      <div className="fixed top-4 right-4 flex gap-2 z-50">
        <Button
          variant={variant === 'v1' ? 'default' : 'outline'}
          onClick={() => setVariant('v1')}
          size="sm"
        >
          V1
        </Button>
        <Button
          variant={variant === 'v2' ? 'default' : 'outline'}
          onClick={() => setVariant('v2')}
          size="sm"
        >
          V2
        </Button>
        <Button
          variant={variant === 'v3' ? 'default' : 'outline'}
          onClick={() => setVariant('v3')}
          size="sm"
        >
          V3
        </Button>
      </div>

      {/* Variant 1: Clean Minimal with Prominent Search */}
      {variant === 'v1' && <VariantOne />}

      {/* Variant 2: Trust-Focused with Verification Highlights */}
      {variant === 'v2' && <VariantTwo />}

      {/* Variant 3: Data-Driven with Stats Emphasis */}
      {variant === 'v3' && <VariantThree />}
    </div>
  )
}

function VariantOne() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900" style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>
            사이트 조회로 먼저 확인하세요
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed" style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>
            안심고고는 한국 토토·카지노 사이트 정보를 조회하고 사용자 제보를 확인할 수 있는 검증 정보 플랫폼입니다. 2022년부터 자체 갱신 데이터를 정리해 왔으며, 편집부 5명이 실명·사진·경력을 공개한 채 운영하고 있습니다.
          </p>

          {/* Search Box */}
          <div className="mb-12">
            <div className="flex gap-2 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Input
                  placeholder="사이트명 또는 주소를 입력하세요"
                  className="w-full h-12 px-4 rounded-lg border border-gray-200"
                />
                <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <Button className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white">
                검색
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Card className="p-4 text-left">
              <Clock className="w-6 h-6 mb-2 text-gray-400" />
              <p className="text-sm font-medium text-gray-900">마지막 확인일</p>
              <p className="text-xs text-gray-500 mt-1">최근 정보 여부 확인</p>
            </Card>
            <Card className="p-4 text-left">
              <AlertCircle className="w-6 h-6 mb-2 text-gray-400" />
              <p className="text-sm font-medium text-gray-900">주소 변경 이력</p>
              <p className="text-xs text-gray-500 mt-1">반복된 주소 변경 확인</p>
            </Card>
            <Card className="p-4 text-left">
              <CheckCircle2 className="w-6 h-6 mb-2 text-gray-400" />
              <p className="text-sm font-medium text-gray-900">사용자 제보</p>
              <p className="text-xs text-gray-500 mt-1">접수된 제보 현황 확인</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Search Features Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900" style={{ wordBreak: 'keep-all' }}>
            검색 결과에서 확인할 수 있는 것
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="font-bold text-blue-600">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-900" style={{ wordBreak: 'keep-all' }}>사이트명과 현재 상태</p>
                <p className="text-sm text-gray-500 mt-1" style={{ wordBreak: 'keep-all' }}>등록된 정보와 최근 확인일</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <span className="font-bold text-teal-600">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-900" style={{ wordBreak: 'keep-all' }}>주소 변경 흔적</p>
                <p className="text-sm text-gray-500 mt-1" style={{ wordBreak: 'keep-all' }}>운영 안정성 판단 자료</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="font-bold text-amber-600">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-900" style={{ wordBreak: 'keep-all' }}>사용자 제보 및 관련 리포트</p>
                <p className="text-sm text-gray-500 mt-1" style={{ wordBreak: 'keep-all' }}>실제 사용자 경험과 검증 자료</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function VariantTwo() {
  return (
    <div className="w-full">
      {/* Hero Section with Trust Focus */}
      <section className="px-4 py-16 md:py-28 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-gray-900" style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>
                신뢰할 수 있는 정보, 한 번에 확인하세요
              </h1>
              <p className="text-base text-gray-600 mb-4 leading-relaxed" style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>
                사이트를 이용하기 전, 안심고고에서 현황을 확인하세요. 최근 정보, 주소 변경 이력, 사용자 제보를 토대로 판단할 수 있습니다.
              </p>
              <div className="flex gap-3 mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  지금 검색하기
                </Button>
                <Button variant="outline" className="px-6">
                  서비스 소개
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <Card className="p-4 border-l-4 border-l-blue-600">
                <p className="text-2xl font-bold text-gray-900 mb-1">2022년</p>
                <p className="text-sm text-gray-600" style={{ wordBreak: 'keep-all' }}>서비스 운영 시작</p>
              </Card>
              <Card className="p-4 border-l-4 border-l-teal-600">
                <p className="text-2xl font-bold text-gray-900 mb-1">5명</p>
                <p className="text-sm text-gray-600" style={{ wordBreak: 'keep-all' }}>실명·사진·경력 공개 편집부</p>
              </Card>
              <Card className="p-4 border-l-4 border-l-amber-600">
                <p className="text-2xl font-bold text-gray-900 mb-1">5단계</p>
                <p className="text-sm text-gray-600" style={{ wordBreak: 'keep-all' }}>자체 검증 프로세스</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="px-4 py-16 md:py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-gray-900" style={{ wordBreak: 'keep-all' }}>
            사이트 조회로 먼저 확인하세요
          </h2>
          <p className="text-center text-gray-600 mb-8" style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>
            사이트명이나 현재 주소를 입력해 등록된 정보를 한 화면에서 확인하세요
          </p>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Input
                  placeholder="사이트명 또는 주소"
                  className="w-full h-12 px-4"
                />
                <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
                검색
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-teal-600" />
                <p className="text-sm font-medium text-gray-900">마지막 확인일</p>
              </div>
              <div className="text-center">
                <AlertCircle className="w-6 h-6 mx-auto mb-2 text-amber-600" />
                <p className="text-sm font-medium text-gray-900">주소 변경 이력</p>
              </div>
              <div className="text-center">
                <Clock className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-medium text-gray-900">사용자 제보</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function VariantThree() {
  return (
    <div className="w-full">
      {/* Hero Section with Stats */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900" style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>
              검증 정보 플랫폼, 안심고고
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto" style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>
              사이트 조회와 사용자 제보를 통해 접속 전 위험 신호를 확인할 수 있습니다
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <Card className="p-6 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">4년</p>
              <p className="text-sm text-gray-600" style={{ wordBreak: 'keep-all' }}>누적 운영 기간</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-3xl font-bold text-teal-600 mb-2">5명</p>
              <p className="text-sm text-gray-600" style={{ wordBreak: 'keep-all' }}>편집부 인원</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-3xl font-bold text-amber-600 mb-2">100%</p>
              <p className="text-sm text-gray-600" style={{ wordBreak: 'keep-all' }}>실명 공개</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-3xl font-bold text-red-600 mb-2">분기</p>
              <p className="text-sm text-gray-600" style={{ wordBreak: 'keep-all' }}>리포트 갱신</p>
            </Card>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8 border border-blue-200 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ wordBreak: 'keep-all' }}>
              지금 바로 사이트를 조회해 보세요
            </h2>
            <div className="flex gap-2 max-w-xl mx-auto">
              <div className="flex-1 relative">
                <Input
                  placeholder="사이트명 또는 주소"
                  className="w-full h-12 px-4"
                />
                <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
                검색
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="px-4 py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900" style={{ wordBreak: 'keep-all' }}>
            어떤 정보를 확인할 수 있나요?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2" style={{ wordBreak: 'keep-all' }}>마지막 확인일</p>
                  <p className="text-sm text-gray-600" style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>등록된 정보가 최근에 확인되었는지 판단</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2" style={{ wordBreak: 'keep-all' }}>주소 변경 흔적</p>
                  <p className="text-sm text-gray-600" style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>반복된 주소 변경으로 운영 안정성 판단</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2" style={{ wordBreak: 'keep-all' }}>사용자 제보 현황</p>
                  <p className="text-sm text-gray-600" style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>실제 사용자가 접수한 제보 내용 확인</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                  <SearchIcon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2" style={{ wordBreak: 'keep-all' }}>관련 검증 리포트</p>
                  <p className="text-sm text-gray-600" style={{ wordBreak: 'keep-all', letterSpacing: '-0.01em' }}>안심고고의 5단계 검증 기준 상세 정보</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
