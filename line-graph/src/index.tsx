import * as React from 'react'

import type { LineGraphConfig } from '../../types'
import ChartBuilder from '@chartiful/react-chart-builder'

const LineChart = ({
  data = [0,0,0,0],
  height,
  width,
  hasLine = true,
  lineWidth = 3,
  lineColor = '#000000',
  isBezier,
  hasShadow,
  hasDots = true,
  dotColor = '#000000',
  dotSize = 5,
  style = {},
  baseConfig
}: LineGraphConfig) => {
  const heightAdjustment = (dotSize > lineWidth ? dotSize : lineWidth)

  const chartBuilder = new ChartBuilder({
    data,
    height: height - heightAdjustment * 2,
    width,
    ...baseConfig
  })

  const widthAdjustments = (hasDots ? chartBuilder.xAxisLabelPosition === 'right' ? dotSize : -dotSize : 0.01)
  const baseHeight = chartBuilder.baseHeight + (heightAdjustment / 2) - chartBuilder.yAxisLabelHeight

  const calcXPosition = (val: number): number => val
    * (width - chartBuilder.xAxisLabelWidth)
    / (data.length - 1)
    + chartBuilder.leftAlignedXAxisLabelWidth
    + widthAdjustments
  const calcYPosition = (val: number): number => baseHeight
    - chartBuilder.calcDataPointHeight(val)
    + (heightAdjustment / 2)

  const shadowStart = calcXPosition(data.length - 1)
  const shadowEnd = calcXPosition(0)

  const renderDots = () => {
    return data.map((d, i) => {
      return (
        <circle
          key={Math.random()}
          cx={calcXPosition(i)}
          cy={calcYPosition(d)}
          fill={dotColor}
          r={dotSize}
        />
      )
    })
  }

  const getLinePoints = (): string => {
    return data.map((d, i) => {
      return `${calcXPosition(i)},${calcYPosition(d)}`
    }).join(' ')
  }

  const getBezierLinePath = (): string => {
    if (data.length === 0) { return 'M0,0' }

    const points = data.slice(0, data.length - 1)

    const paths = points.map((_, i) => {
      const xMid = (calcXPosition(i) + calcXPosition(i + 1)) / 2
      const yMid = (calcYPosition(data[i]) + calcYPosition(data[i + 1])) / 2
      const cpX1 = (xMid + calcXPosition(i)) / 2
      const cpX2 = (xMid + calcXPosition(i + 1)) / 2
      return (
        `Q ${cpX1}, ${calcYPosition(data[i])}, ${xMid}, ${yMid}` +
        ` Q ${cpX2}, ${calcYPosition(data[i + 1])}, ${calcXPosition(i + 1)}, ${calcYPosition(data[i + 1])}`
      )
    })

    return [`M${calcXPosition(0)},${calcYPosition(data[0])}`].concat(paths).join(' ')
  }

  const renderLine = () => {
    const points = getLinePoints()
    return (
      <polyline
        key={Math.random()}
        points={points}
        fill='none'
        stroke={lineColor}
        strokeWidth={lineWidth}
      />
    )
  }

  const renderBezierLine = () => {
    const d = getBezierLinePath()
    return (
      <path
        key={Math.random()}
        d={d}
        fill='none'
        stroke={lineColor}
        strokeWidth={lineWidth}
      />
    )
  }

  const renderShadow = () => {
    const points = getLinePoints() + ` ${shadowStart},${baseHeight} ${shadowEnd},${baseHeight}`
    return (
      <polygon
        key={Math.random()}
        points={points}
        fill='url(#shadow)'
        strokeWidth={0}
      />
    )
  }

  const renderBezierShadow = () => {
    const d = getBezierLinePath() + ` L${shadowStart},${baseHeight} L${shadowEnd},${baseHeight} Z`
    return (
      <path
        key={Math.random()}
        d={d}
        fill='url(#shadow)'
        strokeWidth={0}
      />
    )
  }

  return (
    <div style={style}>
      <svg height={height} width={width}>
          <linearGradient
            id='shadow'
            x1={0}
            x2={0}
            y1={0}
            y2={height}
          >
            <stop
              offset='0'
              stopColor={lineColor}
              stopOpacity={0.1}
            />
            <stop
              offset='1'
              stopColor={lineColor}
              stopOpacity={0}
            />
          </linearGradient>
          <g>
            {chartBuilder.hasXAxisBackgroundLines !== false ? chartBuilder.renderXAxisLines() : null}
          </g>
          <g>
            {chartBuilder.hasXAxisLabels !== false ? chartBuilder.renderXAxisLabels() : null}
          </g>
          <g>
            {chartBuilder.hasYAxisLabels !== false ? chartBuilder.renderYAxisLabels() : null}
          </g>
          <g>
            {hasLine ?
              isBezier ? renderBezierLine() : renderLine()
              : null
            }
          </g>
          <g>
            {hasShadow ?
              isBezier ? renderBezierShadow() : renderShadow()
              : null}
          </g>
          <g>
            {hasDots ? renderDots() : null}
          </g>
      </svg>
    </div>
  )
}

export default LineChart
