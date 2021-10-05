import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { AddonInfo, MinecraftVersionInfo, ModloaderBasicInfo, ModloaderInfo } from './types';

const CURSEFORGE_API_URL = 'https://addons-ecs.forgesvc.net/api/v2';

const curseforgeInterface = axios.create({
  baseURL: CURSEFORGE_API_URL,
  timeout: 10000,
});

const getAxiosData = <T>(response: AxiosResponse<T>): T => response.data;

const curseforge = <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> =>
  curseforgeInterface.get<T>(endpoint, config).then(getAxiosData);

const MINECRAFT_GAME_ID = 432;
const SECTIONS = {
  MODPACK: 4471,
  MOD: 6,
};

const SEARCH_BASE_PARAMS = {
  categoryId: 0,
  gameId: MINECRAFT_GAME_ID,
  index: 0,
  pageSize: 4,
  sort: 0,
};

const api = {
  MinecraftVersionList: () => {
    return curseforge<MinecraftVersionInfo[]>('/minecraft/version');
  },
  MinecraftVersionInfo: (mcVersion: string) => {
    return curseforge<MinecraftVersionInfo>(`/minecraft/version/${mcVersion}`);
  },
  MinecraftModSearch: (gameVersion: string, searchFilter: string) => {
    return curseforge<AddonInfo[]>('/addon/search', {
      params: {
        ...SEARCH_BASE_PARAMS,
        gameVersion,
        searchFilter,
        sectionId: SECTIONS.MOD,
      },
    });
  },
  MinecraftModpackSearch: (gameVersion: string, searchFilter: string) => {
    return curseforge<AddonInfo>('/addon/search', {
      params: {
        ...SEARCH_BASE_PARAMS,
        gameVersion,
        searchFilter,
        sectionId: SECTIONS.MODPACK,
      },
    });
  },
  ModloaderList: () => {
    return curseforge<ModloaderBasicInfo[]>('/minecraft/modloader');
  },
  ModloaderInfo: (loaderVersion: string) => {
    return curseforge<ModloaderInfo>(`/minecraft/modloader/${loaderVersion}`);
  },
  AddonInfo: (addonId: string | number) => {
    return curseforge<AddonInfo>(`/addon/${addonId}`);
  },
  AddonFilesInfo: (addonId: string | number) => {
    return curseforge(`/addon/${addonId}/files`);
  },
};

export { api };
export * from './types';
