## Horizontal Bar Graph

**[NPM package](https://www.npmjs.com/package/@chartiful/react-horizontal-bar-graph)**

<img src="https://seanwatters.io/images/@chartiful-react-native-horizontal-bar-graph.png" height="275px" alt="bar graph image">

### Installation

```bash
npm i @chartiful/react-chart-builder @chartiful/react-horizontal-bar-graph
```

### Example

```jsx
import HorizontalBarGraph from '@chartiful/react-horizontal-bar-graph'

<HorizontalBarGraph
  data={[125, 100, 50, 75, 100, 125]}
  labels={['Q1, 2019', 'Q2, 2019', 'Q3, 2019', 'Q4, 2019', 'Q1, 2020', 'Q2, 2020']}
  width={500}
  height={300}
  barRadius={7}
  barColor='#82d551'
  baseConfig={{
    hasYAxisBackgroundLines: false,
    xAxisLabelStyle: {
      rotation: 0,
      fontSize: 11,
      width: 60,
      yOffset: 4,
      xOffset: -12
    },
    yAxisLabelStyle: {
      rotation: 30,
      fontSize: 13,
      prefix: '$',
      position: 'bottom',
      xOffset: 15,
      yOffset: -10,
      decimals: 2,
      height: 50
    }
  }}
  style={{
    marginBottom: 30,
    padding: 10,
    paddingTop: 20,
    borderRadius: 20,
    width: 500,
    backgroundColor: `#e1f5d6`
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

- `baseConfig`?: `BaseChartConfig` (found here: [link](https://github.com/chartiful/react-charts#readme))
