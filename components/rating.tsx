export interface RatingProps {
  /*
   * Floating number between 0.0 and 5.0
   */
  score: number
  className?: string
}

export default function Rating({ score, className }: RatingProps) {
  // 1.5 ~> [1, 0.5, 0, 0, 0]
  //   3 ~> [1,   1, 1, 0, 0]
  const scoreParts = Array.from({ length: 5 }).map((_, i) => {
    return Math.min(1, 5 - (5 - score + i))
  })

  return (
    <span
      className={getFullClassName(className)}
      title={`Rating: ${score} out of 5`}
      aria-label={`Rating: ${score} out of 5`}
    >
      {scoreParts.map((d, i) => Circle(d, i))}
    </span>
  )
}

function getFullClassName(className: string): string {
  if (!className) return 'rating'
  return `rating ${className}`
}

function Circle(value: number, index: number) {
  return (
    <span className="circle-container" aria-hidden="true" key={index}>
      <span
        data-testid="circle"
        className="circle"
        style={{ clipPath: `inset(${(1 - value) * 100}% 0 0 0)` }}
      ></span>
      {value != 1 && <span className="circle-outline"></span>}
    </span>
  )
}
