import api from 'lib/api'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppState, UserState } from 'state'

export interface BeerDetailsProps {
  id: number
}

export default function BeerDetails({ id }: BeerDetailsProps) {
  const { token } = useSelector<AppState, UserState>((state) => state.user)

  useEffect(() => {
    if (!token) return

    // eslint-disable-next-line no-console
    api.beer.info(id, token).then((res) => console.log(res))
  }, [id, token])

  return <div className="beer-details">{id}</div>
}
