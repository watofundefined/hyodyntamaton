export interface RatingProps {
  score: number
}

export default function Rating({ score }: RatingProps) {
  const scoreParts = new Array(Math.floor(score)).fill(1)
  if (score % 1 != 0) {
    scoreParts.push(score % 1)
  }
  return (
    <span className="rating" aria-label={`Rating: ${score} out of 5`}>
      {scoreParts.map((d, i) => Circle(d, i))}
    </span>
  )
}

function Circle(value: number, index: number) {
  return (
    <span className="circle-container" aria-hidden="true" key={index}>
      {value == 1 && <span className="full-circle"></span>}
      {(value == 0.25 || value == 0.75) && <span className="quarter-circle"></span>}
      {(value == 0.5 || value == 0.75) && <span className="half-circle"></span>}
    </span>
  )
}
