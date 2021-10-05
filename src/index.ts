import axios, { AxiosResponse } from 'axios';
import { AddonInfo, MinecraftVersionInfo, ModloaderBasicInfo, ModloaderInfo } from './types';

const CURSEFORGE_API_URL = 'https://addons-ecs.forgesvc.net/api/v2';

const curseforgeInterface = axios.create({
  baseURL: CURSEFORGE_API_URL,
  timeout: 10000,
});

const getAxiosData = <T>(response: AxiosResponse<T>): T => response.data;

const curseforge = <T>(endpoint: string): Promise<T> => curseforgeInterface.get<T>(endpoint).then(getAxiosData);

const api = {
  MinecraftVersionList: () => {
    return curseforge<MinecraftVersionInfo[]>('/minecraft/version');
  },
  MinecraftVersionInfo: (mcVersion: string) => {
    return curseforge<MinecraftVersionInfo>(`/minecraft/version/${mcVersion}`);
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
