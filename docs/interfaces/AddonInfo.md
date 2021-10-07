[curseforge](../README.md) / [Exports](../modules.md) / AddonInfo

# Interface: AddonInfo

## Table of contents

### Properties

- [attachments](AddonInfo.md#attachments)
- [authors](AddonInfo.md#authors)
- [categories](AddonInfo.md#categories)
- [categorySection](AddonInfo.md#categorysection)
- [dateCreated](AddonInfo.md#datecreated)
- [dateModified](AddonInfo.md#datemodified)
- [dateReleased](AddonInfo.md#datereleased)
- [defaultFileId](AddonInfo.md#defaultfileid)
- [downloadCount](AddonInfo.md#downloadcount)
- [gameId](AddonInfo.md#gameid)
- [gameName](AddonInfo.md#gamename)
- [gamePopularityRank](AddonInfo.md#gamepopularityrank)
- [gameSlug](AddonInfo.md#gameslug)
- [gameVersionLatestFiles](AddonInfo.md#gameversionlatestfiles)
- [id](AddonInfo.md#id)
- [isAvailable](AddonInfo.md#isavailable)
- [isExperiemental](AddonInfo.md#isexperiemental)
- [isFeatured](AddonInfo.md#isfeatured)
- [issueTrackerUrl](AddonInfo.md#issuetrackerurl)
- [latestFiles](AddonInfo.md#latestfiles)
- [modLoaders](AddonInfo.md#modloaders)
- [name](AddonInfo.md#name)
- [popularityScore](AddonInfo.md#popularityscore)
- [portalName](AddonInfo.md#portalname)
- [primaryCategoryId](AddonInfo.md#primarycategoryid)
- [primaryLanguage](AddonInfo.md#primarylanguage)
- [slug](AddonInfo.md#slug)
- [status](AddonInfo.md#status)
- [summary](AddonInfo.md#summary)
- [websiteUrl](AddonInfo.md#websiteurl)
- [wikiUrl](AddonInfo.md#wikiurl)

## Properties

### attachments

• **attachments**: [`AddonAttachmentInfo`](AddonAttachmentInfo.md)[]

#### Defined in

[types.ts:136](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L136)

---

### authors

• **authors**: [`AddonAuthorInfo`](AddonAuthorInfo.md)[]

#### Defined in

[types.ts:135](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L135)

---

### categories

• **categories**: [`AddonCategoryInfo`](AddonCategoryInfo.md)[]

#### Defined in

[types.ts:145](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L145)

---

### categorySection

• **categorySection**: `Object`

#### Type declaration

| Name                      | Type               |
| :------------------------ | :----------------- |
| `extraIncludePattern`     | `null` \| `string` |
| `gameCategoryId`          | `number`           |
| `gameId`                  | `number`           |
| `id`                      | `number`           |
| `initialInclusionPattern` | `string`           |
| `name`                    | `string`           |
| `packageType`             | `number`           |
| `path`                    | `string`           |

#### Defined in

[types.ts:148](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L148)

---

### dateCreated

• **dateCreated**: `string`

#### Defined in

[types.ts:169](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L169)

---

### dateModified

• **dateModified**: `string`

#### Defined in

[types.ts:168](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L168)

---

### dateReleased

• **dateReleased**: `string`

#### Defined in

[types.ts:170](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L170)

---

### defaultFileId

• **defaultFileId**: `number`

#### Defined in

[types.ts:142](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L142)

---

### downloadCount

• **downloadCount**: `number`

#### Defined in

[types.ts:143](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L143)

---

### gameId

• **gameId**: `number`

#### Defined in

[types.ts:140](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L140)

---

### gameName

• **gameName**: `string`

#### Defined in

[types.ts:166](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L166)

---

### gamePopularityRank

• **gamePopularityRank**: `number`

#### Defined in

[types.ts:162](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L162)

---

### gameSlug

• **gameSlug**: `string`

#### Defined in

[types.ts:164](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L164)

---

### gameVersionLatestFiles

• **gameVersionLatestFiles**: [`AddonGameVersionLatestFile`](AddonGameVersionLatestFile.md)[]

#### Defined in

[types.ts:159](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L159)

---

### id

• **id**: `number`

#### Defined in

[types.ts:133](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L133)

---

### isAvailable

• **isAvailable**: `boolean`

#### Defined in

[types.ts:171](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L171)

---

### isExperiemental

• **isExperiemental**: `boolean`

#### Defined in

[types.ts:172](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L172)

---

### isFeatured

• **isFeatured**: `boolean`

#### Defined in

[types.ts:160](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L160)

---

### issueTrackerUrl

• `Optional` **issueTrackerUrl**: `string`

#### Defined in

[types.ts:137](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L137)

---

### latestFiles

• **latestFiles**: [`AddonLatestFileInfo`](AddonLatestFileInfo.md)[]

#### Defined in

[types.ts:144](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L144)

---

### modLoaders

• `Optional` **modLoaders**: `string`[]

#### Defined in

[types.ts:165](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L165)

---

### name

• **name**: `string`

#### Defined in

[types.ts:134](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L134)

---

### popularityScore

• **popularityScore**: `number`

#### Defined in

[types.ts:161](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L161)

---

### portalName

• **portalName**: `string`

#### Defined in

[types.ts:167](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L167)

---

### primaryCategoryId

• **primaryCategoryId**: `number`

#### Defined in

[types.ts:147](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L147)

---

### primaryLanguage

• **primaryLanguage**: `string`

#### Defined in

[types.ts:163](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L163)

---

### slug

• **slug**: `string`

#### Defined in

[types.ts:158](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L158)

---

### status

• **status**: `number`

#### Defined in

[types.ts:146](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L146)

---

### summary

• **summary**: `string`

#### Defined in

[types.ts:141](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L141)

---

### websiteUrl

• `Optional` **websiteUrl**: `string`

#### Defined in

[types.ts:139](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L139)

---

### wikiUrl

• `Optional` **wikiUrl**: `string`

#### Defined in

[types.ts:138](https://github.com/guillaumearm/curseforge/blob/f1ebf4c/src/types.ts#L138)
