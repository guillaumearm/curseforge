curseforge / [Exports](modules.md)

# Curserforge API bindings

This is the non-official Javascript/Typescript bindings for the [Curseforge API](https://curseforgeapi.docs.apiary.io/)

### Full documentation

**Warning: This is WIP project, not all bindings are supported.**

[**Link to the latest documentation**](https://github.com/guillaumearm/curseforge/blob/master/docs/modules.md)

### Installation

```bash
npm install --save curseforge
```

or

```bash
yarn add -D curseforge
```

### Usage

```ts
import * as curseforge from 'curseforge';
import type { MinecraftVersionInfo } from 'curseforge';

curseforge.fetch.MinecraftVersionInfo('1.16.5').then((mcInfo: MinecraftVersionInfo) => {
  console.log('=>', mcInfo);
});
```

### Other informations

API url: [https://addons-ecs.forgesvc.net/api/v2](https://addons-ecs.forgesvc.net/api/v2)

API official documentation: [https://curseforgeapi.docs.apiary.io/](https://curseforgeapi.docs.apiary.io/)
