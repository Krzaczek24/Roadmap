import { Component } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { RoadmapModel } from '../../models/roadmap.model'
import { RoadmapService } from '../../services/roadmap.service'

@Component({
    selector: 'app-roadmap-selector',
    imports: [RouterLink],
    templateUrl: './roadmap-selector.component.html',
    styleUrl: './roadmap-selector.component.css'
})
export class RoadmapSelectorComponent {
    public roadmapList: RoadmapModel[]

    constructor(
        roadmapService: RoadmapService,
        private router: Router
    ) {
        this.roadmapList = roadmapService.getList()
    }

    public selectRoadmap(event: Event) {
        const value = (event.target as HTMLInputElement).value
        this.router.navigate(['/roadmap', value])
    }
}
