import * as React from 'react'
import Widget from './widget'
import { LangProvider } from './providers/index'

const TransltrWidget = () => (
    <LangProvider>
        <Widget />
    </LangProvider>
)

export default TransltrWidget
