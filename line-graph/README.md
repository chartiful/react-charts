## Line Graph

**[NPM package](https://www.npmjs.com/package/@chartiful/react-line-graph)**

<img src="https://seanwatters.io/images/@chartiful-react-native-line-graph.png" height="275px" alt="bar graph image">

### Installation

```bash
npm i @chartiful/react-chart-builder @chartiful/react-line-graph
```

### Example

```jsx
import LineGraph from '@chartiful/react-line-graph'

<LineGraph
  data={[10, 15, 7, 20, 14, 12, 10, 20]}
  width={500}
  height={300}
  lineColor='#347975'
  dotColor='#347975'
  lineWidth={3}
  isBezier
  hasDots={true}
  baseConfig={{
    startAtZero: false,
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      prefix: '$',
      offset: 0
    }
  }}
  style={{
    marginBottom: 30,
    padding: 10,
    paddingTop: 20,
    borderRadius: 20,
    width: 500,
    backgroundColor: `#dbf0ef`
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

- `hasDots`?: boolean  (defaults to `true`)

- `dotColor`?: string  (defaults to `'#000000'`)

- `dotSize`?: number (defaults to `5`)

- `isBezier`?: boolean  (defaults to `false`)

- `hasShadow`?: boolean  (defaults to `false`)

- `style`?: `ReactNative.StyleSheet`

- `baseConfig`?: `BaseChartConfig` (found here: [link](https://github.com/chartiful/react-native-charts#readme))
