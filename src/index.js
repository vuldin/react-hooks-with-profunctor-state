import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import useProfunctorState from '@staltz/use-profunctor-state'

import { fToC, cToF } from './utils'
import TempBar from './tempbar'

// state is in fahrenheit for this component
function App() {
  const initialState = { fahrenheit: 70 }
  const { promap } = useProfunctorState(initialState)

  // converts to celsius for child
  const celsiusProf = promap(
    ({ fahrenheit }) => fahrenheit,
    fahrenheit => ({ fahrenheit })
  ).promap(fToC, cToF)

  return (
    <Fragment>
      <TempBar {...celsiusProf} />
      <TempBar {...celsiusProf} />
    </Fragment>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
