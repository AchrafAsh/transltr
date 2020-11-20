import React from 'react'
import './index.css'
import Widget from './widget'
import { LangProvider } from './providers/index'

const Module: React.FC<{ id: string }> = ({ id }) => {
    return (
        <LangProvider>
            <Widget />
        </LangProvider>
    )
}

export default Module
