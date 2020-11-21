import React, { useEffect } from 'react'
import { useLangState, useLangDispatch } from './providers/index'
import { LANG } from './reducers/index'
import { getAvailableTranslations } from './actions'

import styles from './styles.css'

const API_URI = 'https://transltr-api.herokuapp.com'

interface TranslationType {
    id: number
    selector: string
    text: string
}

type CountryCode = 'fr' | 'es' | 'de' | 'en'

const countryCodeToName = (code: CountryCode) => {
    switch (code) {
        case 'fr':
            return 'Français'
        case 'es':
            return 'Español'
        case 'en':
            return 'English'
        case 'de':
            return 'Deutsch'
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
                const HTMLElement = document.querySelector(element.selector)
                if (HTMLElement) {
                    HTMLElement.textContent = element.text
                }
            })
        } catch (error) {
            console.log(error)
        }

        setTimeout(() => {
            dispatch({ type: 'TRANSLATIONS_LOADED' })
        }, 1000)
    }

    const handleLanguageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const lang = event.currentTarget.value

        if (lang === 'en') translatePage('en')
        if (lang === 'fr') translatePage('fr')
        if (lang === 'de') translatePage('de')
        if (lang === 'es') translatePage('es')
    }

    useEffect(() => {
        // get available languages
        getAvailableTranslations()(dispatch)
    })

    return <Widget onChange={handleLanguageChange} />
}

const Widget: React.FC<{
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}> = ({ onChange }) => {
    const { lang, langs, loading } = useLangState()

    return (
        <div className={styles.widget_container}>
            <div className={styles.flag_wrapper}>
                <div
                    className={styles.flag_img}
                    style={{
                        backgroundImage: `url(${API_URI}/flags/${lang}.png)`
                    }}
                    title='France'
                />
            </div>
            <div className={styles.toggle_container}>
                <div className={styles.selector_container}>
                    <div className={styles.selector_wrapper}>
                        <select
                            value={lang}
                            name='language'
                            onChange={onChange}
                            id='language-selector'
                        >
                            {langs &&
                                langs.map((country, idx) => (
                                    <option key={idx} value={country}>
                                        {countryCodeToName(country)}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>
                <div className={styles.brand_wrapper}>
                    <small>⚡ by transltr</small>
                </div>
            </div>
            {loading && (
                <div className={styles.loader_container} id='loading'>
                    <div className={styles.loader} />
                </div>
            )}
        </div>
    )
}

export default Container
