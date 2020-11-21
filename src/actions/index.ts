import { Dispatch } from 'react'
import { Action } from '../reducers/index'

const API_URI =
    process.env.NODE_ENV === 'production'
        ? 'https://transltr-api.herokuapp.com'
        : 'http://localhost:5000'

export const getAvailableTranslations = () => async (
    dispatch: Dispatch<Action>
) => {
    dispatch({ type: 'LOADING_LANGS' })
    try {
        const queryURL =
            API_URI +
            '/translation/lang?' +
            new URLSearchParams({
                apiKey: 'myapikey',
                domain: window.location.hostname
            })

        const response = await fetch(queryURL)
        const langs = await response.json()
        dispatch({ type: 'LANGS_LOADED', payload: { langs } })
    } catch (error) {
        console.error(error)
    }
}
