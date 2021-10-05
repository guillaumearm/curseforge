export type MinecraftVersionInfo = {
  id: number;
  gameVersionId: number;
  versionString: string;
  jarDownloadUrl: string;
  jsonDownloadUrl: string;
  approved: boolean;
  dateModified: string;
  gameVersionTypeId: number;
  gameVersionStatus: number;
  gameVersionTypeStatus: number;
};

export type ModloaderBasicInfo = {
  name: string;
  gameVersion: string;
  latest: boolean;
  recommended: boolean;
  dateModified: string;
};

export type ModloaderInfo = {
  id: number;
  gameVersionId: number;
  minecraftGameVersionId: number;
  forgeVersion?: string;
  name: string;
  type: number;
  downloadUrl: string;
  filename: string;
  installMethod: number;
  latest: boolean;
  recommended: boolean;
  approved: boolean;
  dateModified: string;
};

export type AddonAuthorInfo = {
  name: string;
  url: string;
  projectId: number;
  id: number;
  projectTitleId: 2;
  projectTitleTitle: 'Author';
  userId: number;
  twitchId: number;
};

export type AddonAttachmentInfo = {
  id: number;
  projectId: number;
  description: string;
  isDefault: boolean;
  thumbnailUrl: string;
  title: string;
  url: string;
  status: number;
};

export type AddonLatestFileInfo = {
  id: number;
  displayName: string;
  fileName: string;
  fileDate: string;
  fileLength: number;
  releaseType: number;
  fileStatus: number;
  downloadUrl: string;
  isAlternate: boolean;
  alternateFileId: number;
  dependencies: unknown[];
  isAvailable: boolean;
  modules: { foldername: string; fingerprint: number; type: number }[];
  packageFingerprint: number;
  gameVersion: string[];
  sortableGameVersion: {
    gameVersionPadded: string;
    gameVersion: string;
    gameVersionReleaseDate: string;
    gameVersionName: string;
    gameVersionTypeId: number;
  }[];
  installMetadata: null | unknown; // TODO
  changelog: null | unknown; // TODO
  hasInstallScript: boolean;
  isCompatibleWithClient: boolean;
  categorySectionPackageType: number;
  restrictProjectFileAccess: number;
  projectStatus: number;
  renderCacheId: number;
  fileLegacyMappingId: null | unknown; // TODO
  projectId: number;
  parentProjectFileId: null | unknown; // TODO
  parentFileLegacyMappingId: null | unknown; // TODO
  fileTypeId: null | unknown; // TODO
  exposeAsAlternative: null | unknown; // TODO
  packageFingerprintId: number;
  gameVersionDateReleased: string;
  gameVersionMappingId: number;
  gameVersionId: number;
  gameId: number;
  isServerPack: boolean;
  serverPackFileId: number;
  gameVersionFlavor: null | unknown; // TODO
  hashes: { algorithm: 1; value: 'fa2b42a52a1d1164749fa367dac981418733f69b' }[];
  downloadCount: number;
};

export type AddonGameVersionLatestFile = {
  gameVersion: string;
  projectFileId: number;
  projectFileName: string;
  fileType: number;
  gameVersionFlavor: null | unknown; // TODO
  gameVersionTypeId: number;
};

export type AddonCategoryInfo = {
  categoryId: number;
  name: string;
  url: string;
  avatarUrl: string;
  parentId: number;
  rootId: number;
  projectId: number;
  avatarId: number;
  gameId: number;
  slug: string;
  dateModified: string;
};

export type AddonInfo = {
  id: number;
  name: string;
  authors: AddonAuthorInfo[];
  attachments: AddonAttachmentInfo[];
  issueTrackerUrl?: string;
  wikiUrl?: string;
  websiteUrl?: string;
  gameId: number;
  summary: string;
  defaultFileId: number;
  downloadCount: number;
  latestFiles: AddonLatestFileInfo[];
  categories: AddonCategoryInfo[];
  status: number;
  primaryCategoryId: number;
  categorySection: {
    id: number;
    gameId: number;
    name: string; // e.g. Modpacks
    packageType: number;
    path: string;
    initialInclusionPattern: string;
    extraIncludePattern: string | null;
    gameCategoryId: number;
  };
  slug: string;
  gameVersionLatestFiles: AddonGameVersionLatestFile[];
  isFeatured: boolean;
  popularityScore: number;
  gamePopularityRank: number;
  primaryLanguage: string;
  gameSlug: string;
  modLoaders?: string[];
  gameName: string;
  portalName: string;
  dateModified: string;
  dateCreated: string;
  dateReleased: string;
  isAvailable: boolean;
  isExperiemental: boolean;
};
