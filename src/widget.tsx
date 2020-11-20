import React, { useEffect } from 'react'
import fr from './images/fr.png'
import es from './images/es.png'
import en from './images/en.png'
import de from './images/de.png'

import { useLangState, useLangDispatch } from './providers/index'
import { LANG } from './reducers/index'

const API_URI = 'https://transltr.herokuapp.com'

interface TranslationType {
    id: number
    selector: string
    text: string
}

const getFlags = (country: string): string => {
    switch (country) {
        case 'fr':
            return fr

        case 'de':
            return de

        case 'es':
            return es

        case 'en':
            return en

        default:
            return ''
    }
}

const Container: React.FC = () => {
    const dispatch = useLangDispatch()

    const translatePage = async (lang: LANG) => {
        dispatch({ type: 'LOADING_TRANSLATIONS', payload: { lang } })

        try {
            const response = await fetch(
                API_URI +
                    '/translation/?' +
                    new URLSearchParams({
                        apiKey: 'myapikey',
                        domain: window.location.hostname,
                        pathname: window.location.pathname,
                        lang: lang
                    })
            )
            const translations: TranslationType[] = await response.json()

            // translate page content
            translations.forEach((element) => {
                let HTMLElement = document.querySelector(element.selector)
                if (HTMLElement) {
                    HTMLElement.textContent = element.text
                }
            })
        } catch (error) {
            throw error
        }

        setTimeout(() => {
            dispatch({ type: 'TRANSLATIONS_LOADED' })
        }, 1000)
    }

    const handleLanguageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        let lang = event.currentTarget.value

        if (lang === 'en') translatePage('en')
        if (lang === 'fr') translatePage('fr')
        if (lang === 'de') translatePage('de')
        if (lang === 'es') translatePage('es')
    }

    useEffect(() => {
        // get available languages
        const getAvailableLanguages = async () => {
            try {
                const response = await fetch(
                    API_URI +
                        '/translation/lang?' +
                        new URLSearchParams({
                            apiKey: 'myapikey',
                            domain: window.location.hostname
                        })
                )
                const langs = await response.json()
                return langs
            } catch (error) {
                throw error
            }
        }

        dispatch({ type: 'LOADING_LANGS' })
        getAvailableLanguages().then((langs) =>
            dispatch({ type: 'LANGS_LOADED', payload: { langs } })
        )
    })

    return <Widget onChange={handleLanguageChange} />
}

const Widget: React.FC<{
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}> = ({ onChange }) => {
    const { lang, loading } = useLangState()

    return (
        <div className='widget-container'>
            <div className='flag-wrapper'>
                <div
                    id='flag'
                    style={{
                        backgroundImage: `url(${getFlags(lang)})`
                    }}
                    title='France'
                />
            </div>
            <div className='toggle-container'>
                <div className='selector-container'>
                    <div className='selector-wrapper'>
                        <select
                            value={lang}
                            name='language'
                            onChange={onChange}
                            id='language-selector'
                        >
                            <option value='fr'>Francais</option>
                            <option value='en'>English</option>
                            <option value='es'>Spanish</option>
                            <option value='de'>German</option>
                        </select>
                    </div>
                </div>
                <div className='brand-wrapper'>
                    <small>⚡ by transltr</small>
                </div>
            </div>
            {loading && (
                <div className='loader-container' id='loading'>
                    <div className='loader'></div>
                </div>
            )}
        </div>
    )
}

export default Container
