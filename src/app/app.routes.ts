import { Routes } from '@angular/router'
import { RoadmapComponent } from './roadmap/roadmap.component'
import { RoadmapSelectorComponent } from './roadmap-selector/roadmap-selector.component'
import { RoadmapAdditionComponent } from './roadmap-addition/roadmap-addition.component'
import { RoadmapSettingsComponent } from './roadmap-settings/roadmap-settings.component'

export const routes: Routes = [
    { path: '', component: RoadmapSelectorComponent },
    { path: 'roadmap/:id/settings', component: RoadmapSettingsComponent },
    { path: 'roadmap/:id', component: RoadmapComponent },
    { path: 'new-roadmap', component: RoadmapAdditionComponent }
]
