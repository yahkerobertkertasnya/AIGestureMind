import { Dispatch, SetStateAction } from "react";

export default class SubtitleSingleton {
    static instance: SubtitleSingleton | undefined;
    setSubtitle: Dispatch<SetStateAction<string>> | undefined;

    constructor() {}

    static getInstance() {
        if (!SubtitleSingleton.instance) {
            SubtitleSingleton.instance = new SubtitleSingleton();
        }
        return SubtitleSingleton.instance;
    }
}
