## Vertical Bar Graph

**[NPM package](https://www.npmjs.com/package/@chartiful/react-native-vertical-bar-graph)**

<img src="https://seanwatters.io/images/@chartiful-react-native-vertical-bar-graph.png" height="400px" alt="bar graph image">

### Installation

```bash
npm i @chartiful/react-native-chart-builder @chartiful/react-native-vertical-bar-graph
```

### Example

```jsx
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph'

<VerticalBarGraph
  data={[20, 45, 28, 80, 99, 43, 50]}
  labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
  width={Dimensions.get('window').width - 35}
  height={Dimensions.get('window').width / 7 + 225}
  barRadius={5}
  barWidthPercentage={0.65}
  baseConfig={{
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      position: 'right',
      prefix: '$'
    }
  }}
  style={{
    paddingVertical: 10
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
