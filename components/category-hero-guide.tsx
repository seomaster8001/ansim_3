import { ClipboardCheck } from 'lucide-react'

const checklist = [
  { label: '사이트 운영 정보 일치 여부 확인', checked: true },
  { label: '마지막 검증일 확인 (분기 기준)', checked: true },
  { label: '환전 처리 시간 직접 확인', checked: true },
  { label: '추가 입금 요구 발생 시 즉시 제보', checked: false },
  { label: '누적 제보 이력 조회 후 이용 결정', checked: false },
]

const progress = 60 // 3/5 완료

export function CategoryHeroGuide() {
  return (
    <div className="w-full max-w-sm">
      {/* 헤더 */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
          <ClipboardCheck className="w-4 h-4 text-indigo-600" />
        </div>
        <span className="text-label text-indigo-600">피해예방 체크리스트</span>
      </div>

      {/* 체크리스트 */}
      <div className="space-y-2 mb-4">
        {checklist.map((item, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border-2 ${
              item.checked
                ? 'bg-indigo-600 border-indigo-600'
                : 'bg-background border-border'
            }`}>
              {item.checked && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className={`text-body-sm leading-tight ${item.checked ? 'text-heading font-medium' : 'text-subtle'}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* 진행도 */}
      <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-caption text-indigo-600 font-semibold">학습 진행도</span>
          <span className="text-caption font-bold text-indigo-700">{progress}%</span>
        </div>
        <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-caption text-subtle mt-1.5">5개 항목 중 3개 완료</p>
      </div>

      {/* 메시지 */}
      <p className="mt-3 text-caption text-subtle text-center">
        단계별 학습 + 체크리스트
      </p>
    </div>
  )
}
