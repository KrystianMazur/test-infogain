import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { worker } from './mocks/mock-browser'

const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

worker
  .start({
    onUnhandledRequest(req, print) {
      if (/static/.test(req.url)) return;
      print.warning()
    },
  })
  .then(renderApp)
  .catch((error) => {
    console.error(error)
  })
