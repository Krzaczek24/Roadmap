import { ColumnModel } from "./column.model"
import { TrackModel } from "./track.model"

export type RoadmapModel = {
    id: string
    createdAt: Date
    createdBy: string
    name: string
    columns: Array<ColumnModel>
    tracks: Array<TrackModel>
}