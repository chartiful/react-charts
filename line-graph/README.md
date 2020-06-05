## Line Graph

**[package](https://www.npmjs.com/package/@chartiful/react-native-line-graph)**

<img src="https://seanwatters.io/images/@chartiful-react-native-line-graph.png" height="400px" alt="bar graph image">

### Installation

```bash
npm i @chartiful/react-native-chart-builder @chartiful/react-native-line-graph
```

### Example

```jsx
import LineGraph from '@chartiful/react-native-line-graph'

<LineGraph
  data={[10, 15, 7, 20, 14, 12, 10, 20]}
  width={375}
  height={300}
  isBezier
  hasShadow
  baseConfig={{
    startAtZero: false,
    hasXAxisBackgroundLines: false
  }}
  style={{
    marginTop: 30
  }}
/>
```

### Interface

- `height`: number

- `width`: number

- `data`: `<Array>number`

- `labels`?: `<Array>string`  (defaults to `[1, 2, 3, ...]`)

- `hasLine`?: boolean  (defaults to `true`)

- `lineColor`?: string  (defaults to `'#000000'`)

- `lineWidth`?: number (defaults to `3`)

- `hasDots`?: boolean  (defaulst to `true`)

- `dotColor`?: string  (defaults to `'#000000'`)

- `dotSize`?: number (defaulse to `5`)

- `isBezier`?: boolean  (defaults to `false`)

- `hasShadow`?: boolean  (defaults to `false`)

- `style`?: `ReactNative.StyleSheet`

- `baseConfig`?: `BaseChartConfig` (found here: [link](https://github.com/chartiful/react-native-charts#readme))
