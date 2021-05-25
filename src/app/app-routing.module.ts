import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InitialComponent } from './views/initial.component';
import { PatientListComponent } from './views/patient-list/patient-list.component';
import { LocationsComponent } from './views/locations/locations.component';
import { ReportsComponent } from './views/reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: '/initial', pathMatch: 'full'},
  { path: 'initial', component: InitialComponent },
  { path: 'patient-list', component: PatientListComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'reports', component: ReportsComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
