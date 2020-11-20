export type LANG = 'fr' | 'en' | 'es' | 'de'

export type Action =
    | { type: 'LOADING_LANGS' }
    | { type: 'ERROR'; payload: { error: Error } }
    | { type: 'LANGS_LOADED'; payload: { langs: LANG[] } }
    | { type: 'LOADING_TRANSLATIONS'; payload: { lang: LANG } }
    | { type: 'TRANSLATIONS_LOADED' }

export type State = {
    loading: boolean
    langs: LANG[]
    lang: LANG
    error: Error | null
}

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'LOADING_LANGS':
            return {
                ...state,
                loading: true
            }
        case 'LANGS_LOADED':
            return {
                ...state,
                loading: false,
                langs: action.payload.langs
            }
        case 'ERROR':
            return {
                ...state,
                error: action.payload.error
            }
        case 'LOADING_TRANSLATIONS':
            return {
                ...state,
                loading: true,
                lang: action.payload.lang
            }
        case 'TRANSLATIONS_LOADED':
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
