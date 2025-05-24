import { Component } from '@angular/core'
import { v4 as uuidv4 } from 'uuid'
import { RoadmapService } from '../../services/roadmap.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-roadmap-addition',
    imports: [],
    templateUrl: './roadmap-addition.component.html',
    styleUrl: './roadmap-addition.component.css'
})
export class RoadmapAdditionComponent {
    public id: string = uuidv4()
    public name: string = ''
    public message: string = ' '

    constructor(
        private roadmapService: RoadmapService,
        public router: Router
    ) {

    }

    public verifyName(event: Event) {
        const value = (event.target as HTMLInputElement).value.trim()

        if (value.length === 0) {
            this.message = 'Please enter name'
            return
        }

        if (this.roadmapService.getList().some(x => x.name === value)) {
            this.message = 'Provided name is already used'
            return
        }

        this.name = value
        this.message = ''
    }

    public addNewRoadmap() {
        if (this.message.length !== 0)
            return

        this.roadmapService.add({
            id: this.id,
            name: this.name
        })

        this.router.navigate([''])
    }
}
