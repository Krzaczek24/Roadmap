import { Component, Input } from '@angular/core'
import { TrackModel } from '../../models/track.model'
import { ItemComponent } from '../item/item.component'
import { ColumnModel } from '../../models/column.model'
import { ItemModel } from '../../models/item.model'

@Component({
    selector: 'app-track',
    imports: [ItemComponent],
    templateUrl: './track.component.html',
    styleUrl: './track.component.css'
})
export class TrackComponent {
    @Input({ required: true, alias: 'data' })
    public track!: TrackModel

    @Input({ required: true })
    public columns!: Array<ColumnModel>

    @Input({ required: true })
    public rowHeight!: number

    private get totalWidth(): number {
        return this.columns.reduce((acc, val) => acc + val.width, 0)
    }

    public columnPositionX(index: number): number {
        let position = 0
        for (let i = 0; i < index; i++) {
            position += this.columns[i].width
        }
        return position * 100 / this.totalWidth
    }

    public get titleColumnWidth(): number {
        return this.columns[0].width * 100 / this.totalWidth
    }

    public contentColumnWidth(index: number): number {
        return this.columns[index].width * 100 / (this.totalWidth - this.columns[0].width)
    }

    public itemPositionX(item: ItemModel): number {
        let position = 0
        for (let i = 0; i < item.startPoint.columnIndex; i++) {
            position += this.columns[i].width
        }
        position += item.startPoint.percent * this.columns[item.startPoint.columnIndex].width / 100
        return position
    }
}