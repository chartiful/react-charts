export interface BaseChartConfig {
  data: number[]
  labels?: string[]

  startAtZero?: boolean

  height: number
  width: number

  hasXAxisLabels?: boolean
  hasYAxisLabels?: boolean

  xAxisLabelCount?: number
  yAxisLabelCount?: number

  xAxisLabelStyle?: {
    fontFamily?: string
    fontSize?: number
    fontWeight?: number
    color?: string
    rotation?: number
    xOffset?: number
    yOffset?: number
    prefix?: string
    suffix?: string
    position?: string
    width?: number
    height?: number
    decimals?: number
  }
  yAxisLabelStyle?: {
    fontFamily?: string
    fontSize?: number
    fontWeight?: number
    color?: string
    rotation?: number
    xOffset?: number
    yOffset?: number
    position?: string
    height?: number
    width?: number
  }

  hasXAxisBackgroundLines?: boolean
  hasYAxisBackgroundLines?: boolean

  xAxisBackgroundLineStyle?: {
    strokeWidth?: number
    color?: string
  }
  yAxisBackgroundLineStyle?: {
    strokeWidth?: number
    color?: string
  }
}

export interface HorizontalBarGraphConfig {
  data: number[]
  labels?: string[]
  height: number
  width: number
  barRadius?: number
  barWidthPercentage?: number
  barColor?: string
  style?: any
  baseConfig?: BaseChartConfig
}

export interface VerticalBarGraphConfig {
  data: number[]
  labels?: string[]
  height: number
  width: number
  barRadius?: number
  barWidthPercentage?: number
  barColor?: string
  style?: any
  baseConfig?: BaseChartConfig
}

export interface LineGraphConfig {
  data: number[]
  height: number
  width: number
  hasLine: boolean
  lineWidth: number
  lineColor: string
  isBezier: boolean
  hasShadow: boolean
  hasDots: boolean
  dotColor: string
  dotSize: number
  style?: any,
  baseConfig?: BaseChartConfig
}

export interface PieChartConfig {
  data: {
    volume: number
    color: string
    label: string
  }[],
  height: number,
  width: number,
  center?: number,
  hasLegend?: boolean
  legendWidth?: number,
  legendHeight?: number,
  style?: any
}

export interface LegendConfig {
  data: {
    volume: number
    color: string
    label: string
  }[]
  height: number
  width: number
  dotSize: number
  fontFamily: string
  fontSize: number
  fontWeight: number
  xOffset: number
}
