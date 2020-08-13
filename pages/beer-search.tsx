import axios, { CancelTokenSource } from 'axios'
import BeerDetails from 'components/beer-details'
import api from 'lib/api'
import debounce from 'lib/client/debounce'
import { rootDimensions } from 'lib/client/dimensions'
import usePreviousNonNull from 'lib/client/usePreviousNonNull'
import { UtBeerSearchResponseBeer } from 'lib/endpoints/untappd/beer-search.types'
import { Dictionary } from 'lib/types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import Modal, { Styles } from 'react-modal'
import { useSelector } from 'react-redux'
import { AppState, UserState } from 'state'

let source: CancelTokenSource

export default function BeerSearch() {
  const router = useRouter()
  const { token } = useSelector<AppState, UserState>((state) => state.user)

  const [beers, setBeers] = useState<UtBeerSearchResponseBeer[]>([])
  const [query, setQuery] = useState('')
  const [modalStyles, setModalStyles] = useState(getInitialModalStyles())

  const cache = useRef<Dictionary<UtBeerSearchResponseBeer[]>>({})

  useEffect(() => {
    function updateModalStyles() {
      const { top, height } = rootDimensions()
      const { width, left } = document.querySelector('main').getBoundingClientRect()

      document.documentElement.style.setProperty(
        '--beer-details-modal-width',
        width + 'px'
      )

      setModalStyles(({ content, overlay }) => ({
        overlay,
        content: { ...content, top, left, width, height },
      }))
    }

    updateModalStyles()
    window.addEventListener('resize', updateModalStyles)
    return () => window.removeEventListener('resize', updateModalStyles)
  }, [])

  const previousSelectedBeer = usePreviousNonNull(+router.query.id)

  function _fetchBeers(q: string): void {
    if (!q) setBeers([])
    else if (cache[q]) setBeers(cache[q])
    else {
      source = axios.CancelToken.source()
      api.beer
        .search({ params: { access_token: token, q }, cancelToken: source.token })
        .then(({ data }) => {
          if (data) {
            cache[q] = data.response.beers.items
            setBeers(data.response.beers.items)
          }
          // FIXME: handle errors
        })
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchBeers = useCallback(debounce(_fetchBeers, 300), [])

  function onInputChanged(q: string): void {
    // canel in-flight request if any (worst case no-op)
    if (source) source.cancel()

    setQuery(q)
    fetchBeers(q)
  }

  function onSeeCheckins(id: number): void {
    router.push(`/beer-search?id=${id}`)
  }

  function closeModal() {
    router.back()
  }

  return (
    <>
      <Head>
        <title>Hyödyntämätön | Beer Search</title>
      </Head>
      <main className="cover beer-search-page">
        <h1 className="beer-search-page__heading">Beer Search</h1>
        <form>
          <input
            type="text"
            value={query}
            onChange={(e) => onInputChanged(e.target.value)}
          />
        </form>
        <section className="beer-search-page__main">
          <ul>{beers.map((b) => beerListItemMarkup(b, onSeeCheckins))}</ul>
        </section>
        <footer className="beer-search-page__footer">
          <button className="btn" onClick={() => router.push('/')}>
            Back to menu
          </button>
        </footer>
      </main>
      <Modal
        isOpen={!!router.query.id}
        closeTimeoutMS={500}
        style={modalStyles}
        contentLabel="Beer details"
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div className="beer-details-modal">
          {/* Keep passing in the old value until modal closes --> */}
          <BeerDetails id={+router.query.id || previousSelectedBeer} />
          <div className="beer-details-close-button-container">
            <button className="btn close-modal" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

function beerListItemMarkup(
  b: UtBeerSearchResponseBeer,
  onClick: (id: number) => void
): JSX.Element {
  return (
    <li key={b.beer.bid} className="beer-list-item">
      <span className="beer-list-item__name">
        {b.beer.beer_name} - {b.beer.beer_abv} %
      </span>
      <span className="beer-list-item__checkin-count">{b.checkin_count} checkins</span>
      <span className="beer-list-item__style">{b.beer.beer_style}</span>
      <span className="beer-list-item__ibu">IBU {b.beer.beer_ibu}</span>
      <button
        className="btn btn-secondary beer-list-item__see-more"
        onClick={() => onClick(b.beer.bid)}
      >
        See checkins
      </button>
    </li>
  )
}

function getInitialModalStyles(): Styles {
  return {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    },
    content: {
      pointerEvents: 'initial',
      overflowX: 'hidden',
      backgroundColor: 'transparent',
      position: 'absolute',
      padding: 0,
    },
  }
}
