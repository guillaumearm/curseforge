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

export const fetchMinecraftVersionList = () => {
  return curseforge<MinecraftVersionInfo[]>('/minecraft/version');
};

export const fetchMinecraftVersionInfo = (mcVersion: string) => {
  return curseforge<MinecraftVersionInfo>(`/minecraft/version/${mcVersion}`);
};

export const fetchMinecraftModSearch = (gameVersion: string, searchFilter: string) => {
  return curseforge<AddonInfo[]>('/addon/search', {
    params: {
      ...SEARCH_BASE_PARAMS,
      gameVersion,
      searchFilter,
      sectionId: SECTIONS.MOD,
    },
  });
};

export const fetchMinecraftModpackSearch = (gameVersion: string, searchFilter: string) => {
  return curseforge<AddonInfo>('/addon/search', {
    params: {
      ...SEARCH_BASE_PARAMS,
      gameVersion,
      searchFilter,
      sectionId: SECTIONS.MODPACK,
    },
  });
};

export const fetchModloaderList = () => {
  return curseforge<ModloaderBasicInfo[]>('/minecraft/modloader');
};

export const fetchModloaderInfo = (loaderVersion: string) => {
  return curseforge<ModloaderInfo>(`/minecraft/modloader/${loaderVersion}`);
};

export const fetchAddonInfo = (addonId: string | number) => {
  return curseforge<AddonInfo>(`/addon/${addonId}`);
};

export const fetchAddonFilesInfo = (addonId: string | number) => {
  return curseforge(`/addon/${addonId}/files`);
};

export * from './types';
