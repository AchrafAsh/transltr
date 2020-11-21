import React, { useReducer, useContext, createContext } from 'react'
import { Action, State, reducer } from '../reducers/index'

const initialState: State = {
    loading: true,
    error: null,
    langs: [],
    lang: 'fr'
}

export const LangDispatchContext = createContext<
    React.Dispatch<Action> | undefined
>(undefined)

export const LangStateContext = createContext<State | undefined>(undefined)

export const LangProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <LangDispatchContext.Provider value={dispatch}>
            <LangStateContext.Provider value={state}>
                {children}
            </LangStateContext.Provider>
        </LangDispatchContext.Provider>
    )
}

export function useLangState() {
    const context = useContext(LangStateContext)
    if (context === undefined) {
        throw new Error('useLangState must be used within a LangProvider')
    }
    return context
}
export function useLangDispatch() {
    const context = useContext(LangDispatchContext)
    if (context === undefined) {
        throw new Error('useLangDispatch must be used within a LangProvider')
    }
    return context
}
