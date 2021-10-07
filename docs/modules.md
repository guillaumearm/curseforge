[curseforge](README.md) / Exports

# curseforge

## Table of contents

### Interfaces

- [AddonAttachmentInfo](interfaces/AddonAttachmentInfo.md)
- [AddonAuthorInfo](interfaces/AddonAuthorInfo.md)
- [AddonCategoryInfo](interfaces/AddonCategoryInfo.md)
- [AddonGameVersionLatestFile](interfaces/AddonGameVersionLatestFile.md)
- [AddonInfo](interfaces/AddonInfo.md)
- [AddonLatestFileInfo](interfaces/AddonLatestFileInfo.md)
- [MinecraftVersionInfo](interfaces/MinecraftVersionInfo.md)
- [ModloaderBasicInfo](interfaces/ModloaderBasicInfo.md)
- [ModloaderInfo](interfaces/ModloaderInfo.md)

### Functions

- [fetchAddonFilesInfo](modules.md#fetchaddonfilesinfo)
- [fetchAddonInfo](modules.md#fetchaddoninfo)
- [fetchMinecraftModSearch](modules.md#fetchminecraftmodsearch)
- [fetchMinecraftModpackSearch](modules.md#fetchminecraftmodpacksearch)
- [fetchMinecraftVersionInfo](modules.md#fetchminecraftversioninfo)
- [fetchMinecraftVersionList](modules.md#fetchminecraftversionlist)
- [fetchModloaderInfo](modules.md#fetchmodloaderinfo)
- [fetchModloaderList](modules.md#fetchmodloaderlist)

## Functions

### fetchAddonFilesInfo

▸ `Const` **fetchAddonFilesInfo**(`addonId`): `Promise`<`unknown`\>

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `addonId` | `string` \| `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[index.ts:72](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/index.ts#L72)

---

### fetchAddonInfo

▸ `Const` **fetchAddonInfo**(`addonId`): `Promise`<[`AddonInfo`](interfaces/AddonInfo.md)\>

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `addonId` | `string` \| `number` |

#### Returns

`Promise`<[`AddonInfo`](interfaces/AddonInfo.md)\>

#### Defined in

[index.ts:68](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/index.ts#L68)

---

### fetchMinecraftModSearch

▸ `Const` **fetchMinecraftModSearch**(`gameVersion`, `searchFilter`): `Promise`<[`AddonInfo`](interfaces/AddonInfo.md)[]\>

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `gameVersion`  | `string` |
| `searchFilter` | `string` |

#### Returns

`Promise`<[`AddonInfo`](interfaces/AddonInfo.md)[]\>

#### Defined in

[index.ts:38](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/index.ts#L38)

---

### fetchMinecraftModpackSearch

▸ `Const` **fetchMinecraftModpackSearch**(`gameVersion`, `searchFilter`): `Promise`<[`AddonInfo`](interfaces/AddonInfo.md)\>

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `gameVersion`  | `string` |
| `searchFilter` | `string` |

#### Returns

`Promise`<[`AddonInfo`](interfaces/AddonInfo.md)\>

#### Defined in

[index.ts:49](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/index.ts#L49)

---

### fetchMinecraftVersionInfo

▸ `Const` **fetchMinecraftVersionInfo**(`mcVersion`): `Promise`<[`MinecraftVersionInfo`](interfaces/MinecraftVersionInfo.md)\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `mcVersion` | `string` |

#### Returns

`Promise`<[`MinecraftVersionInfo`](interfaces/MinecraftVersionInfo.md)\>

#### Defined in

[index.ts:34](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/index.ts#L34)

---

### fetchMinecraftVersionList

▸ `Const` **fetchMinecraftVersionList**(): `Promise`<[`MinecraftVersionInfo`](interfaces/MinecraftVersionInfo.md)[]\>

#### Returns

`Promise`<[`MinecraftVersionInfo`](interfaces/MinecraftVersionInfo.md)[]\>

#### Defined in

[index.ts:30](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/index.ts#L30)

---

### fetchModloaderInfo

▸ `Const` **fetchModloaderInfo**(`loaderVersion`): `Promise`<[`ModloaderInfo`](interfaces/ModloaderInfo.md)\>

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `loaderVersion` | `string` |

#### Returns

`Promise`<[`ModloaderInfo`](interfaces/ModloaderInfo.md)\>

#### Defined in

[index.ts:64](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/index.ts#L64)

---

### fetchModloaderList

▸ `Const` **fetchModloaderList**(): `Promise`<[`ModloaderBasicInfo`](interfaces/ModloaderBasicInfo.md)[]\>

#### Returns

`Promise`<[`ModloaderBasicInfo`](interfaces/ModloaderBasicInfo.md)[]\>

#### Defined in

[index.ts:60](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/index.ts#L60)
