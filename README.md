# vue-dash

A vue-js plugin that adds all lodash methods as filters. No longer map a lodash method to a vue filter individually

## Component

### Installation

```bash
$ npm i -S vue-dash-filters
```

### Usage

```javascript
import Vue from 'vue';
import VueDash from 'vue-dash-filters';

Vue.use(VueDash);

export default new Vue({
    name: 'app',
    template: '<span>{{ 'hello world!' | startCase }}</span>' // <span>Hello World!</span>
})
```

```html
<span>{{ someArray | map(({ name }) => name) }}</span> <!-- [ 'hi', 'bye', 'foo', 'bar' ] -->
```


### Props

Property|Type|Default|Description
---|---|---|---

### Other

## Development

### Setup

```bash
$ npm i
```

### Developing

```bash
$ npm run dev
```

* [http://localhost:9572]()

### Watch

```bash
$ npm run watch
```


### Release

```bash
$ npm run release
```
