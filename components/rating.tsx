export interface RatingProps {
  /*
   * Number between 0 and 5 and divisible by 0.25
   */
  score: number
}

export default function Rating({ score }: RatingProps) {
  // 1.5 ~> [1, 0.5, 0, 0, 0]
  //   3 ~> [1,   1, 1, 0, 0]
  const scoreParts = Array.from({ length: 5 }).map((_, i) => {
    return Math.min(1, 5 - (5 - score + i))
  })

  return (
    <span className="rating" aria-label={`Rating: ${score} out of 5`}>
      {scoreParts.map((d, i) => Circle(d, i))}
    </span>
  )
}

function Circle(value: number, index: number) {
  return (
    <span className="circle-container" aria-hidden="true" key={index}>
      {value == 1 && <span data-testid="full-circle" className="circle"></span>}
      {value == 0.75 && (
        <span
          data-testid="three-quarter-circle"
          className="circle three-quarter-circle"
        ></span>
      )}
      {value == 0.5 && (
        <span data-testid="half-circle" className="circle half-circle"></span>
      )}
      {value == 0.25 && (
        <span data-testid="quarter-circle" className="circle quarter-circle"></span>
      )}
      {value != 1 && <span className="circle-outline"></span>}
    </span>
  )
}
