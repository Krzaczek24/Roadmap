import { Injectable } from "@angular/core"
import { LocalStorageService } from "./localstorage.service"
import { RoadmapModel } from "../models/roadmap.model"
import defaultRoadmaps from '../data/roadmaps.default.json'

const roadmapListKey = 'KEY_ROADMAP_LIST'

@Injectable({ providedIn: 'root' })
export class RoadmapService {
    constructor(private localStorageService: LocalStorageService) {

    }

    public get(id: string) {
        return this.getList().find(x => x.id === id)
    }

    public getList() {
        let roadmapList = this.localStorageService.getItem<RoadmapModel[]>(roadmapListKey)
        if (Array.isArray(roadmapList))
            return roadmapList
        if (Array.isArray(roadmapList = defaultRoadmaps))
            roadmapList.sort((a, b) => a.name.localeCompare(b.name))
        this.localStorageService.setItem(roadmapListKey, roadmapList)
        return defaultRoadmaps
    }

    public add(roadmap: RoadmapModel) {
        const list = this.getList()
        if (list.some(x => x.name === roadmap.name))
            throw new Error(`Roadmap named [${roadmap.name}] already exists`)
        list.push(roadmap)
        list.sort((a, b) => a.name.localeCompare(b.name))
        this.localStorageService.setItem(roadmapListKey, list)
    }

    public remove(id: string) {
        const newList = this.getList().filter(x => x.id !== id)
        this.localStorageService.setItem(roadmapListKey, newList)
    }
}