[curseforge](README.md) / Exports

# curseforge

## Table of contents

### Type aliases

- [AddonAttachmentInfo](modules.md#addonattachmentinfo)
- [AddonAuthorInfo](modules.md#addonauthorinfo)
- [AddonCategoryInfo](modules.md#addoncategoryinfo)
- [AddonGameVersionLatestFile](modules.md#addongameversionlatestfile)
- [AddonInfo](modules.md#addoninfo)
- [AddonLatestFileInfo](modules.md#addonlatestfileinfo)
- [MinecraftVersionInfo](modules.md#minecraftversioninfo)
- [ModloaderBasicInfo](modules.md#modloaderbasicinfo)
- [ModloaderInfo](modules.md#modloaderinfo)

### Functions

- [fetchAddonFilesInfo](modules.md#fetchaddonfilesinfo)
- [fetchAddonInfo](modules.md#fetchaddoninfo)
- [fetchMinecraftModSearch](modules.md#fetchminecraftmodsearch)
- [fetchMinecraftModpackSearch](modules.md#fetchminecraftmodpacksearch)
- [fetchMinecraftVersionInfo](modules.md#fetchminecraftversioninfo)
- [fetchMinecraftVersionList](modules.md#fetchminecraftversionlist)
- [fetchModloaderInfo](modules.md#fetchmodloaderinfo)
- [fetchModloaderList](modules.md#fetchmodloaderlist)

## Type aliases

### AddonAttachmentInfo

Ƭ **AddonAttachmentInfo**: `Object`

#### Type declaration

| Name           | Type      |
| :------------- | :-------- |
| `description`  | `string`  |
| `id`           | `number`  |
| `isDefault`    | `boolean` |
| `projectId`    | `number`  |
| `status`       | `number`  |
| `thumbnailUrl` | `string`  |
| `title`        | `string`  |
| `url`          | `string`  |

#### Defined in

[types.ts:49](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/types.ts#L49)

---

### AddonAuthorInfo

Ƭ **AddonAuthorInfo**: `Object`

#### Type declaration

| Name                | Type       |
| :------------------ | :--------- |
| `id`                | `number`   |
| `name`              | `string`   |
| `projectId`         | `number`   |
| `projectTitleId`    | `2`        |
| `projectTitleTitle` | `"Author"` |
| `twitchId`          | `number`   |
| `url`               | `string`   |
| `userId`            | `number`   |

#### Defined in

[types.ts:38](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/types.ts#L38)

---

### AddonCategoryInfo

Ƭ **AddonCategoryInfo**: `Object`

#### Type declaration

| Name           | Type     |
| :------------- | :------- |
| `avatarId`     | `number` |
| `avatarUrl`    | `string` |
| `categoryId`   | `number` |
| `dateModified` | `string` |
| `gameId`       | `number` |
| `name`         | `string` |
| `parentId`     | `number` |
| `projectId`    | `number` |
| `rootId`       | `number` |
| `slug`         | `string` |
| `url`          | `string` |

#### Defined in

[types.ts:118](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/types.ts#L118)

---

### AddonGameVersionLatestFile

Ƭ **AddonGameVersionLatestFile**: `Object`

#### Type declaration

| Name                | Type                |
| :------------------ | :------------------ |
| `fileType`          | `number`            |
| `gameVersion`       | `string`            |
| `gameVersionFlavor` | `null` \| `unknown` |
| `gameVersionTypeId` | `number`            |
| `projectFileId`     | `number`            |
| `projectFileName`   | `string`            |

#### Defined in

[types.ts:109](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/types.ts#L109)

---

### AddonInfo

Ƭ **AddonInfo**: `Object`

#### Type declaration

| Name                                      | Type                                                                    |
| :---------------------------------------- | :---------------------------------------------------------------------- |
| `attachments`                             | [`AddonAttachmentInfo`](modules.md#addonattachmentinfo)[]               |
| `authors`                                 | [`AddonAuthorInfo`](modules.md#addonauthorinfo)[]                       |
| `categories`                              | [`AddonCategoryInfo`](modules.md#addoncategoryinfo)[]                   |
| `categorySection`                         | `Object`                                                                |
| `categorySection.extraIncludePattern`     | `string` \| `null`                                                      |
| `categorySection.gameCategoryId`          | `number`                                                                |
| `categorySection.gameId`                  | `number`                                                                |
| `categorySection.id`                      | `number`                                                                |
| `categorySection.initialInclusionPattern` | `string`                                                                |
| `categorySection.name`                    | `string`                                                                |
| `categorySection.packageType`             | `number`                                                                |
| `categorySection.path`                    | `string`                                                                |
| `dateCreated`                             | `string`                                                                |
| `dateModified`                            | `string`                                                                |
| `dateReleased`                            | `string`                                                                |
| `defaultFileId`                           | `number`                                                                |
| `downloadCount`                           | `number`                                                                |
| `gameId`                                  | `number`                                                                |
| `gameName`                                | `string`                                                                |
| `gamePopularityRank`                      | `number`                                                                |
| `gameSlug`                                | `string`                                                                |
| `gameVersionLatestFiles`                  | [`AddonGameVersionLatestFile`](modules.md#addongameversionlatestfile)[] |
| `id`                                      | `number`                                                                |
| `isAvailable`                             | `boolean`                                                               |
| `isExperiemental`                         | `boolean`                                                               |
| `isFeatured`                              | `boolean`                                                               |
| `issueTrackerUrl?`                        | `string`                                                                |
| `latestFiles`                             | [`AddonLatestFileInfo`](modules.md#addonlatestfileinfo)[]               |
| `modLoaders?`                             | `string`[]                                                              |
| `name`                                    | `string`                                                                |
| `popularityScore`                         | `number`                                                                |
| `portalName`                              | `string`                                                                |
| `primaryCategoryId`                       | `number`                                                                |
| `primaryLanguage`                         | `string`                                                                |
| `slug`                                    | `string`                                                                |
| `status`                                  | `number`                                                                |
| `summary`                                 | `string`                                                                |
| `websiteUrl?`                             | `string`                                                                |
| `wikiUrl?`                                | `string`                                                                |

#### Defined in

[types.ts:132](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/types.ts#L132)

---

### AddonLatestFileInfo

Ƭ **AddonLatestFileInfo**: `Object`

#### Type declaration

| Name                         | Type                                                                                                                                                             |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `alternateFileId`            | `number`                                                                                                                                                         |
| `categorySectionPackageType` | `number`                                                                                                                                                         |
| `changelog`                  | `null` \| `unknown`                                                                                                                                              |
| `dependencies`               | `unknown`[]                                                                                                                                                      |
| `displayName`                | `string`                                                                                                                                                         |
| `downloadCount`              | `number`                                                                                                                                                         |
| `downloadUrl`                | `string`                                                                                                                                                         |
| `exposeAsAlternative`        | `null` \| `unknown`                                                                                                                                              |
| `fileDate`                   | `string`                                                                                                                                                         |
| `fileLegacyMappingId`        | `null` \| `unknown`                                                                                                                                              |
| `fileLength`                 | `number`                                                                                                                                                         |
| `fileName`                   | `string`                                                                                                                                                         |
| `fileStatus`                 | `number`                                                                                                                                                         |
| `fileTypeId`                 | `null` \| `unknown`                                                                                                                                              |
| `gameId`                     | `number`                                                                                                                                                         |
| `gameVersion`                | `string`[]                                                                                                                                                       |
| `gameVersionDateReleased`    | `string`                                                                                                                                                         |
| `gameVersionFlavor`          | `null` \| `unknown`                                                                                                                                              |
| `gameVersionId`              | `number`                                                                                                                                                         |
| `gameVersionMappingId`       | `number`                                                                                                                                                         |
| `hasInstallScript`           | `boolean`                                                                                                                                                        |
| `hashes`                     | { `algorithm`: `1` ; `value`: `"fa2b42a52a1d1164749fa367dac981418733f69b"` }[]                                                                                   |
| `id`                         | `number`                                                                                                                                                         |
| `installMetadata`            | `null` \| `unknown`                                                                                                                                              |
| `isAlternate`                | `boolean`                                                                                                                                                        |
| `isAvailable`                | `boolean`                                                                                                                                                        |
| `isCompatibleWithClient`     | `boolean`                                                                                                                                                        |
| `isServerPack`               | `boolean`                                                                                                                                                        |
| `modules`                    | { `fingerprint`: `number` ; `foldername`: `string` ; `type`: `number` }[]                                                                                        |
| `packageFingerprint`         | `number`                                                                                                                                                         |
| `packageFingerprintId`       | `number`                                                                                                                                                         |
| `parentFileLegacyMappingId`  | `null` \| `unknown`                                                                                                                                              |
| `parentProjectFileId`        | `null` \| `unknown`                                                                                                                                              |
| `projectId`                  | `number`                                                                                                                                                         |
| `projectStatus`              | `number`                                                                                                                                                         |
| `releaseType`                | `number`                                                                                                                                                         |
| `renderCacheId`              | `number`                                                                                                                                                         |
| `restrictProjectFileAccess`  | `number`                                                                                                                                                         |
| `serverPackFileId`           | `number`                                                                                                                                                         |
| `sortableGameVersion`        | { `gameVersion`: `string` ; `gameVersionName`: `string` ; `gameVersionPadded`: `string` ; `gameVersionReleaseDate`: `string` ; `gameVersionTypeId`: `number` }[] |

#### Defined in

[types.ts:60](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/types.ts#L60)

---

### MinecraftVersionInfo

Ƭ **MinecraftVersionInfo**: `Object`

#### Type declaration

| Name                    | Type      |
| :---------------------- | :-------- |
| `approved`              | `boolean` |
| `dateModified`          | `string`  |
| `gameVersionId`         | `number`  |
| `gameVersionStatus`     | `number`  |
| `gameVersionTypeId`     | `number`  |
| `gameVersionTypeStatus` | `number`  |
| `id`                    | `number`  |
| `jarDownloadUrl`        | `string`  |
| `jsonDownloadUrl`       | `string`  |
| `versionString`         | `string`  |

#### Defined in

[types.ts:1](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/types.ts#L1)

---

### ModloaderBasicInfo

Ƭ **ModloaderBasicInfo**: `Object`

#### Type declaration

| Name           | Type      |
| :------------- | :-------- |
| `dateModified` | `string`  |
| `gameVersion`  | `string`  |
| `latest`       | `boolean` |
| `name`         | `string`  |
| `recommended`  | `boolean` |

#### Defined in

[types.ts:14](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/types.ts#L14)

---

### ModloaderInfo

Ƭ **ModloaderInfo**: `Object`

#### Type declaration

| Name                     | Type      |
| :----------------------- | :-------- |
| `approved`               | `boolean` |
| `dateModified`           | `string`  |
| `downloadUrl`            | `string`  |
| `filename`               | `string`  |
| `forgeVersion?`          | `string`  |
| `gameVersionId`          | `number`  |
| `id`                     | `number`  |
| `installMethod`          | `number`  |
| `latest`                 | `boolean` |
| `minecraftGameVersionId` | `number`  |
| `name`                   | `string`  |
| `recommended`            | `boolean` |
| `type`                   | `number`  |

#### Defined in

[types.ts:22](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/types.ts#L22)

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

[index.ts:72](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/index.ts#L72)

---

### fetchAddonInfo

▸ `Const` **fetchAddonInfo**(`addonId`): `Promise`<[`AddonInfo`](modules.md#addoninfo)\>

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `addonId` | `string` \| `number` |

#### Returns

`Promise`<[`AddonInfo`](modules.md#addoninfo)\>

#### Defined in

[index.ts:68](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/index.ts#L68)

---

### fetchMinecraftModSearch

▸ `Const` **fetchMinecraftModSearch**(`gameVersion`, `searchFilter`): `Promise`<[`AddonInfo`](modules.md#addoninfo)[]\>

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `gameVersion`  | `string` |
| `searchFilter` | `string` |

#### Returns

`Promise`<[`AddonInfo`](modules.md#addoninfo)[]\>

#### Defined in

[index.ts:38](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/index.ts#L38)

---

### fetchMinecraftModpackSearch

▸ `Const` **fetchMinecraftModpackSearch**(`gameVersion`, `searchFilter`): `Promise`<[`AddonInfo`](modules.md#addoninfo)\>

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `gameVersion`  | `string` |
| `searchFilter` | `string` |

#### Returns

`Promise`<[`AddonInfo`](modules.md#addoninfo)\>

#### Defined in

[index.ts:49](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/index.ts#L49)

---

### fetchMinecraftVersionInfo

▸ `Const` **fetchMinecraftVersionInfo**(`mcVersion`): `Promise`<[`MinecraftVersionInfo`](modules.md#minecraftversioninfo)\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `mcVersion` | `string` |

#### Returns

`Promise`<[`MinecraftVersionInfo`](modules.md#minecraftversioninfo)\>

#### Defined in

[index.ts:34](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/index.ts#L34)

---

### fetchMinecraftVersionList

▸ `Const` **fetchMinecraftVersionList**(): `Promise`<[`MinecraftVersionInfo`](modules.md#minecraftversioninfo)[]\>

#### Returns

`Promise`<[`MinecraftVersionInfo`](modules.md#minecraftversioninfo)[]\>

#### Defined in

[index.ts:30](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/index.ts#L30)

---

### fetchModloaderInfo

▸ `Const` **fetchModloaderInfo**(`loaderVersion`): `Promise`<[`ModloaderInfo`](modules.md#modloaderinfo)\>

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `loaderVersion` | `string` |

#### Returns

`Promise`<[`ModloaderInfo`](modules.md#modloaderinfo)\>

#### Defined in

[index.ts:64](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/index.ts#L64)

---

### fetchModloaderList

▸ `Const` **fetchModloaderList**(): `Promise`<[`ModloaderBasicInfo`](modules.md#modloaderbasicinfo)[]\>

#### Returns

`Promise`<[`ModloaderBasicInfo`](modules.md#modloaderbasicinfo)[]\>

#### Defined in

[index.ts:60](https://github.com/guillaumearm/curseforge/blob/731d4a2/src/index.ts#L60)
