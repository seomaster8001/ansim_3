export default function PicksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div data-category="picks">
      {children}
    </div>
  )
}
