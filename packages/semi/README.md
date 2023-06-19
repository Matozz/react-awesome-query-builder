# @react-awesome-query-builder/semi

[![npm](https://img.shields.io/npm/v/@react-awesome-query-builder/semi.svg)](https://www.npmjs.com/package/@react-awesome-query-builder/semi)

This packages provides [Semi Design](https://semi.design) widgets

## Installation

Peer dependencies that needs to be installed:
```
npm i @douyinfe/semi-ui @douyinfe/semi-icons --save
```

Install:
```
npm i @react-awesome-query-builder/semi --save
```

## Usage

Use `SemiConfig`. 

See [minimal example in readme](https://github.com/ukrbublik/react-awesome-query-builder#usage) with modifications at top:
```js
// >>>
import type { JsonGroup, Config, ImmutableTree, BuilderProps } from '@react-awesome-query-builder/semi'; // for TS example
import { Query, Builder, Utils as QbUtils } from '@react-awesome-query-builder/semi';
import { SemiConfig, SemiWidgets } from '@react-awesome-query-builder/semi';
import '@react-awesome-query-builder/semi/css/styles.css';
const InitialConfig = SemiConfig;
// <<<
```
