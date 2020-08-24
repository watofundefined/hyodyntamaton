import api from 'lib/api'
import storage from 'lib/client/storage'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState, FocusEvent } from 'react'
import { useDispatch } from 'react-redux'
import { UserActions } from 'state'
import { Dictionary } from 'lib/types'

interface AccountState {
  languages: [string, string][]
  languagesMap: Dictionary<string>
  understandsLangs: string[]
  preferredLang: string
}

function Account(): JSX.Element {
  const dispatch = useDispatch()
  const router = useRouter()
  const [state, setState] = useState<AccountState>({
    languages: storage.get<[string, string][]>('languages') || [],
    languagesMap: storage.get<Dictionary<string>>('languagMap') || {},
    understandsLangs: storage.get<string[]>('understandsLangs') || [],
    preferredLang: storage.get<string>('preferredLang') || '',
  })

  useEffect(() => {
    api.translation.languages().then(({ data, error }) => {
      // FIXME: handle error
      if (error) {
        console.error(error)
        return
      }

      const { languagesMap } = data

      setState({
        ...state,
        languages: Object.keys(languagesMap).map((code) => [code, languagesMap[code]]),
        languagesMap,
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function onUnderstandsLangsChanged(event: FocusEvent<HTMLSelectElement>) {
    const selected = Array.from(event.target.options)
      .filter((o) => o.selected)
      .map((o) => o.value)

    const preferred = selected.find((s) => s === state.preferredLang) || ''

    setState({ ...state, understandsLangs: selected, preferredLang: preferred })
    storage.set('understandsLangs', selected)
    storage.set('preferredLang', preferred)
  }

  function onPrimaryLanguageChanged(event: FocusEvent<HTMLSelectElement>) {
    setState({ ...state, preferredLang: event.target.value })
    storage.set('preferredLang', event.target.value)
  }

  return (
    <>
      <Head>
        <title>Hyödyntämätön | Account</title>
      </Head>
      <div className="stack">
        <h1>Account</h1>

        <div>
          <label className="line-break" htmlFor="understands-langs">
            I understand these languages:
          </label>
          <select
            id="understands-langs"
            multiple
            onBlur={onUnderstandsLangsChanged}
            value={state.understandsLangs}
          >
            {state.languages.map(([code, lang]) => (
              <option key={code} value={code}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="line-break" htmlFor="primary-lang">
            Translate to:
          </label>
          <select
            id="primary-lang"
            onBlur={onPrimaryLanguageChanged}
            value={state.preferredLang}
          >
            {state.understandsLangs.map((l) => (
              <option key={l} value={l}>
                {state.languagesMap[l]}
              </option>
            ))}
          </select>
        </div>

        <button
          className="btn btn-warning"
          onClick={() => dispatch(UserActions.logOut())}
        >
          Log out
        </button>
        <button className="btn" onClick={() => router.push('/')}>
          Back to menu
        </button>
      </div>
    </>
  )
}

export default Account
