import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import ContainedButtons from './atoms/button'

ReactDOM.render(
  <React.StrictMode>
    <ContainedButtons text="test" color="primary" />
  </React.StrictMode>,
  document.getElementById('root')
)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
