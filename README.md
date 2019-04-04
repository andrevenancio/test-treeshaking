# About

This repo was written to compare tree shaking across 3 javascript bundlers ([parcel.js](https://parceljs.org/), [rollup.js](https://rollupjs.org/guide/en) and [webpack.js](https://webpack.js.org/)) with [three.js](https://threejs.org/).

Meant to support this [issue](https://github.com/mrdoob/three.js/issues/16059) on Github.

## Testing
I've created 3 folders each one for each bundler. all have similar npm scripts to run and compile.

`npm start` (should run the development version with HMR for the selected module).

`npm run build` (should build and compile the final source file where we should in theory observe the tree shaking had taken place).
