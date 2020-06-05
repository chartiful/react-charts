import * as React from 'react'

import ChartBuilder from '@chartiful/react-chart-builder'
import { VerticalBarGraphConfig } from '../../types'

const BarChart = ({
  data,
  labels,
  height,
  width,
  barRadius = 0,
  barWidthPercentage = 0.7,
  barColor,
  style = {},
  baseConfig = {
    data,
    height,
    width,
  }
}: VerticalBarGraphConfig) => {
  const chartBuilder = new ChartBuilder({
    data,
    labels,
    height,
    width,
    ...baseConfig
  })

  const baseHeight: number = height - chartBuilder.yAxisLabelHeight
  const barWidth: number = chartBuilder.yLabelSlotWidth * barWidthPercentage
  const slotGap: number = chartBuilder.yLabelSlotWidth - barWidth

  const renderBars = () => {
    return data.map((val: number, i: number) => {
      const barHeight: number = chartBuilder.calcDataPointHeight(val)

      return (
        <rect
          key={Math.random()}
          x={(i * chartBuilder.yLabelSlotWidth) + (slotGap / 2) + chartBuilder.leftAlignedXAxisLabelWidth}
          y={baseHeight - barHeight}
          rx={barRadius}
          width={barWidth}
          height={barHeight < 0 ? 0 : barHeight}
          fill={barColor}
        />
      )
    })
  }

  return (
    <div style={style} >
      <svg height={height} width={width}>
        <g>
          {baseConfig.hasXAxisBackgroundLines !== false ? chartBuilder.renderXAxisLines() : null}
        </g>
        <g>
          {baseConfig.hasXAxisLabels !== false ? chartBuilder.renderXAxisLabels() : null}
        </g>
        <g>
          {baseConfig.hasYAxisLabels !== false ? chartBuilder.renderYAxisLabels() : null}
        </g>
        <g>
          {renderBars()}
        </g>
      </svg>
    </div>
  )
}

export default BarChart
