import React, { Fragment } from 'react'
import { gradient } from './utils'

export default function TempBar({ state, setState }) {
  const onLess = () => setState(prev => (prev > 4 ? prev - 5 : 0))
  const onMore = () => setState(prev => (prev < 96 ? prev + 5 : 100))

  return (
    <Fragment>
      <div>
        <button onClick={onLess}>Less</button>
        <button onClick={onMore}>More</button>
      </div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            backgroundColor: gradient.rgbAt(state * 0.01),
            width: `${state}%`,
            height: '20px',
          }}
        />
        <div style={{ width: `${100 - state}%` }} />
      </div>
    </Fragment>
  )
}
