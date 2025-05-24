import { Routes } from '@angular/router'
import { RoadmapComponent } from './roadmap/roadmap.component'
import { RoadmapSelectorComponent } from './roadmap-selector/roadmap-selector.component'
import { RoadmapAdditionComponent } from './roadmap-addition/roadmap-addition.component'

export const routes: Routes = [
    { path: '', component: RoadmapSelectorComponent },
    { path: 'roadmap/:id', component: RoadmapComponent },
    { path: 'new-roadmap', component: RoadmapAdditionComponent }
]
