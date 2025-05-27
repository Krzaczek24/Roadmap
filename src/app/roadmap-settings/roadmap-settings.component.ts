import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { RoadmapModel } from '../../models/roadmap.model'
import { RoadmapService } from '../../services/roadmap.service'

@Component({
    selector: 'app-roadmap-settings',
    imports: [],
    templateUrl: './roadmap-settings.component.html',
    styleUrl: './roadmap-settings.component.css'
})
export class RoadmapSettingsComponent implements OnInit {
    public roadmap!: RoadmapModel
    
    constructor(
        private roadmapService: RoadmapService,
        private route: ActivatedRoute,
        public router: Router
    ) {

    }
    
    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        if (!id)
            throw new Error(`Id parameter has been not found`)

        const roadmap = this.roadmapService.get(id)
        if (!roadmap)
            throw new Error(`No roadmap with [${id}] id has been found`)

        this.roadmap = roadmap
    }

    public removeRoadmap() {
        this.roadmapService.remove(this.roadmap.id)
        this.router.navigate([''])
    }
}
