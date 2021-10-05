# a Curserforge user-friendly API wrapper

Warning: This is a WIP project for now, so the implementation and the documentation are not completed yet.

### Installation

```bash
npm install --save curseforge
```

### Usage

```ts
import * as curseforge from 'curseforge';
import type { MinecraftVersionInfo } from 'curseforge';

curseforge.api.MinecraftVersionInfo('1.16.5').then((mcInfo: MinecraftVersionInfo) => {
  console.log('=>', mcInfo);
});
```
