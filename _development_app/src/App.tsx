import React from 'react'
import './App.css'
import LineGraph from '../../line-graph/src/index'

const App = () => {
  return (
    <div>
      <LineGraph
        data={[0, 20, 10, 20, 30]}
        width={500}
        height={425}
        lineColor={'black'}
        lineWidth={5}
        dotColor={'black'}
        dotSize={10}
        isBezier
        hasDots={true}
        hasLine={true}
        hasShadow={true}
        baseConfig={{
          startAtZero: false,
          hasXAxisLabels: true,
          hasYAxisLabels: true,
          hasXAxisBackgroundLines: false,
          data: [0, 20, 10, 20, 30],
          height: 425,
          width: 500
        }}
        style={{
          marginBottom: 60
        }}
      />
    </div>
  )
}

export default App
