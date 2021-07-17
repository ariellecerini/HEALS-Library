# HEALS-Library

## Using the Library

Install the library via npm:

```shell
npm install -S git+https://github.com/stouffers/HEALS-Library.git
```

Import and use components:

```vue
<template>
  <div>
    <InfoModule :title="title"/>
  </div>
</template>
<script>
import { InfoModule } from 'heals-library'

export default {
  components: {
    InfoModule
  },
  data () {
    return {
      title: "Hi! I'm an info module"
    }
  }
}
</script>
```

## Accessing the storybook

The storybook can be viewed [on chromatic](https://60ef0e86e068fa003967c0c4-brzwzrfjth.chromatic.com).

### Composing the library storybook in your own storybook

Install storybook for your application:

```shell
npx sb init
```

Edit `.storybook/main.js` to reference the chromatic storybook.

```js
module.exports = {
  // ...
  refs: {
    'design-system': {
      title: 'HEALS Library',
      //👇 The url provided by Chromatic when it was deployed
      url: 'https://60ef0e86e068fa003967c0c4-brzwzrfjth.chromatic.com',
    },
  },
  // ...
}
```

Run storybook and the HEALS components will now be included.

```shell
npm run storybook
```

## Dev Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

To run Storybook use npm run storybook

## Publishing to storybook

Documentation [here](https://www.chromatic.com/docs/setup)
