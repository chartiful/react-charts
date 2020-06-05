## Horizontal Bar Graph

**[NPM package](https://www.npmjs.com/package/@chartiful/react-native-horizontal-bar-graph)**

<img src="https://seanwatters.io/images/@chartiful-react-native-horizontal-bar-graph.png" height="400px" alt="bar graph image">

### Installation

```bash
npm i @chartiful/react-native-chart-builder @chartiful/react-native-horizontal-bar-graph
```

### Example

```jsx
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph'

<HorizontalBarGraph
  data={[125, 100, 50, 75, 100, 125]}
  labels={['Q1, 2019', 'Q2, 2019', 'Q3, 2019', 'Q4, 2019', 'Q1, 2020', 'Q2, 2020']}
  width={375}
  height={350}
  barRadius={15}
  baseConfig={{
    hasYAxisBackgroundLines: false,
    xAxisLabelStyle: {
      rotation: 0,
      fontSize: 12,
      width: 70,
      yOffset: 4,
      xOffset: -15
    },
    yAxisLabelStyle: {
      rotation: 30,
      fontSize: 13,
      prefix: '$',
      position: 'bottom',
      xOffset: 15,
      decimals: 2,
      height: 100
    }
  }}
/>
```

### Interface

- `height`: number

- `width`: number

- `data`: `<Array>number`

- `labels`?: `<Array>string`  (defaults to `[1, 2, 3, ...]`)

- `barRadius`?: number  (defaults to `0`)

- `barWidthPercentage`?: number  (defaults to `0.7`)

- `barColor`?: string  (defaults to `#000000`)

- `style`?: `ReactNative.StyleSheet`

- `baseConfig`?: `BaseChartConfig` (found here: [link](https://github.com/chartiful/react-native-charts#readme))
