import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { RoadmapService } from '../../services/roadmap.service'

@Component({
    selector: 'app-roadmap-addition',
    imports: [],
    templateUrl: './roadmap-addition.component.html',
    styleUrl: './roadmap-addition.component.css'
})
export class RoadmapAdditionComponent {
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

        const id = this.roadmapService.add({
            createdBy: 'Krzaq',
            name: this.name
        })

        this.router.navigate(['/roadmap', id])
    }
}
