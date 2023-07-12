import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./style.css"
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/store.ts';
import { Provider } from 'react-redux';
import { OpenCartProvider } from "./context/OpenCartContext.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <OpenCartProvider>
          <App />
        </OpenCartProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
)
