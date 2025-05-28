import { Component, Input } from '@angular/core'
import { ItemModel } from '../../models/item.model'

@Component({
    selector: 'app-item',
    imports: [],
    templateUrl: './item.component.html',
    styleUrl: './item.component.css'
})
export class ItemComponent {
    @Input({ required: true, alias: 'data' })
    public item!: ItemModel
}
