import api from 'lib/api'
import { pageHeights, rootDimensions } from 'lib/client/dimensions'
import { Venue } from 'lib/types'
import { useCallback, useEffect, useState } from 'react'
import Modal, { Styles } from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, UserState, VenuesActions } from 'state'
import BeerDetails from './beer-details'
import VenueDetailsCheckins from './venue-details-checkins'
import storage from 'lib/client/storage'

export interface VenueDetailsProps {
  venueFsId: string
}

export default function VenueDetails({ venueFsId }: VenueDetailsProps): JSX.Element {
  const { token } = useSelector<AppState, UserState>((state) => state.user)
  const venue = useSelector<AppState, Venue>((state) =>
    state.venues.items.find((i) => i.ids.foursquareId === venueFsId)
  )

  const [apiError, setApiError] = useState<string>(null)
  const [isFetchingCheckins, setIsFetchingCheckins] = useState(false)
  const [checkinsMaxHeight, setCheckinsMaxHeight] = useState('400px')
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [modalStyles, setModalStyles] = useState(getInitialModalStyles())
  const [selectedBeerId, setSelectedBeerId] = useState<number>()

  const dispatch = useDispatch()

  const { ids, checkins, name, categories } = venue
  const { foursquareId, untappedId } = ids

  useEffect(() => {
    if (untappedId) return

    api.venues.foursquareIdToUntappdId(foursquareId, token).then((res) => {
      const { error, data } = res

      if (error) setApiError(error.message)
      else dispatch(VenuesActions.addUntappdId(data))
    })
  }, [untappedId, foursquareId, token, dispatch])

  useEffect(() => {
    // run just once before any checkins are loaded, then the let the user load more
    if (!untappedId || checkins.length) return

    setIsFetchingCheckins(true)

    api.venues.info(untappedId, token).then((res) => {
      const { error, data } = res

      setIsFetchingCheckins(false)

      if (error) setApiError(error.message)
      else {
        dispatch(VenuesActions.addVenueInfo(data.response.venue))

        const checkinsWithComment = data.response.venue.checkins.items.filter(
          (i) => i.checkin_comment
        )

        if (!storage.get('preferredLang')) return

        api.translation
          .translate(
            checkinsWithComment.map((c) => c.checkin_comment),
            storage.get('understandsLangs'),
            storage.get('preferredLang')
          )
          .then(({ error: translationError, data: translationData }) => {
            // FIXME: handle error
            if (translationError) {
              console.error(translationError)
              return
            }

            dispatch(
              VenuesActions.updateVenueCheckins({
                venueUntappdId: data.response.venue.venue_id,
                translations: translationData.data.map((item, index) => ({
                  translatedText: item.text,
                  checkinId: checkinsWithComment[index].checkin_id,
                })),
              })
            )
          })
      }
    })
  }, [untappedId, checkins, token, dispatch])

  useEffect(() => {
    const update = () =>
      setCheckinsMaxHeight(calculateVenueCheckinsHeight().toString() + 'px')
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const memoizedFetchMoreCheckins = useCallback(() => {
    setIsFetchingCheckins(true)
    const maxId = checkins[checkins.length - 1].checkin_id

    api.venues
      .checkins(untappedId, { access_token: token, max_id: maxId })
      .then((res) => {
        const { error, data } = res

        setIsFetchingCheckins(false)

        if (error) setApiError(error.message)
        else
          dispatch(
            VenuesActions.addCheckins({
              utId: untappedId,
              checkins: data.response.checkins.items,
            })
          )
      })
  }, [untappedId, dispatch, token, checkins])

  useEffect(() => {
    function updateModalStyles() {
      const { top, height } = rootDimensions()
      const { footer } = pageHeights()
      const { width, left } = document
        .querySelector('.gmap-container')
        .getBoundingClientRect()

      document.documentElement.style.setProperty(
        '--beer-details-modal-width',
        width + 'px'
      )

      setModalStyles(({ content, overlay }) => ({
        overlay,
        content: { ...content, top, left, width, height: height - footer },
      }))
    }

    updateModalStyles()
    window.addEventListener('resize', updateModalStyles)
    return () => window.removeEventListener('resize', updateModalStyles)
  }, [])

  function closeModal() {
    setIsModalOpened(false)
  }

  function showBeerDetails(id: number) {
    setSelectedBeerId(id)
    setIsModalOpened(true)
  }

  return (
    <div className="venue-details">
      <h2 className="venue-name">
        {name}
        <span className="venue-category">{categories.map((c) => c.name).join(', ')}</span>
      </h2>
      {apiError && <span>Error: {apiError}</span>}
      {venue && (
        <VenueDetailsCheckins
          loading={isFetchingCheckins}
          checkins={checkins}
          onFetchMoreClicked={memoizedFetchMoreCheckins}
          maxHeight={checkinsMaxHeight}
          onShowBeerDetails={showBeerDetails}
        />
      )}
      <Modal
        isOpen={isModalOpened}
        closeTimeoutMS={500}
        style={modalStyles}
        contentLabel="Beer details"
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div className="beer-details-modal">
          <BeerDetails id={selectedBeerId} />
          <div className="beer-details-close-button-container">
            <button className="btn close-modal" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

function calculateVenueCheckinsHeight(): number {
  if (typeof window == 'undefined') return 500

  const { height } = document.querySelector('.venue-details').getBoundingClientRect()

  // FIXME - calculate based on paddings and close button height
  return height - 115
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
