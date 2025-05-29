import { Component, OnInit } from '@angular/core'
import { DatePipe } from '@angular/common'
import { RoadmapService } from '../../services/roadmap.service'
import { ActivatedRoute, Router } from '@angular/router'
import { RoadmapModel } from '../../models/roadmap.model'
import { TrackComponent } from '../track/track.component'

@Component({
    selector: 'app-roadmap',
    imports: [DatePipe, TrackComponent],
    templateUrl: './roadmap.component.html',
    styleUrl: './roadmap.component.css'
})
export class RoadmapComponent implements OnInit {
    public roadmap!: RoadmapModel

    public get widthSum(): number {
        return this.roadmap.columns.reduce((acc, val) => acc + val.width, 0)
    }

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
}
