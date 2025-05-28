import { Component, Input } from '@angular/core'
import { TrackModel } from '../../models/track.model'
import { ItemComponent } from '../item/item.component'

@Component({
    selector: 'app-track',
    imports: [ItemComponent],
    templateUrl: './track.component.html',
    styleUrl: './track.component.css'
})
export class TrackComponent {
    @Input({ required: true, alias: 'data' })
    public track!: TrackModel
}