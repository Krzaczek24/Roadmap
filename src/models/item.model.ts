import { CoordinateModel } from "./coordinate.model"
import { SectionModel } from "./section.model"

export type ItemModel = {
    text: string
    color: string
    startPoint: CoordinateModel
    sections: Array<SectionModel>
}