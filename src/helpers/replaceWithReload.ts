import {getDomain} from "../config";

export const replaceWithReload = (url: string) => {
    window.location.replace(getDomain() + url)
    window.location.reload();
}