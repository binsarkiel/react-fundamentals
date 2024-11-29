import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducers } from './store/index.js'

const store = createStore(reducers);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <NextUIProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </NextUIProvider>
        </Provider>
    </StrictMode>,
)
