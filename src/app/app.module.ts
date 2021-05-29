import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { InitialComponent } from './views/initial.component';
import { PatientListComponent } from './views/patient-list/patient-list.component';
import { LocationsComponent } from './views/locations/locations.component';
import { ReportsComponent } from './views/reports/reports.component';
import { AppRoutingModule } from './app-routing.module';
import { RptDetailComponent } from './views/rpt-detail/rpt-detail.component';
import { SplashComponent } from './views/splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    PatientListComponent,
    LocationsComponent,
    ReportsComponent,
    RptDetailComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    Ng2SearchPipeModule,OrderModule,NgxPaginationModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
