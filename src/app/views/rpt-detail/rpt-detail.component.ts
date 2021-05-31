import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patients } from '../../_model/patients';
import { PatientService } from '../../_services/patient.service'

@Component({
  selector: 'app-rpt-detail',
  templateUrl: './rpt-detail.component.html',
  styleUrls: ['./rpt-detail.component.css']
})
export class RptDetailComponent implements OnInit {
  patients: Patients[] = [];
  data: any;

  params: string = ''

  locationData: any = [];
  monthlyData: any = [];

  p:number = 1;
  
  public month: string;
  public loc: number;
  public cat: string;



  constructor(private route: ActivatedRoute, public rs: PatientService) { }

  ngOnInit(): void {

    
    this.month = this.route.snapshot.queryParams['month'];
    this.loc = this.route.snapshot.queryParams['loc'];
    this.cat = this.route.snapshot.queryParams['cat'];

   this.getPatientList(this.loc, this.month, this.params);
    
  }

  getPatientList( loc: number, month: string, cat: string){
      this.rs.getPatients().subscribe((response) => {
      this.locationData = response.filter(res => {
      return (res.location_id.toString().match(loc.toString()) && 
              (res.encounter_datetime_min.toString().match(month)));              
      });
      if(this.cat == "NH"){
        this.patients = this.locationData.filter(function(v, i) {
          return v.htn_status == "New Hypertensive";
        });
      } else if(this.cat == "KH"){
        this.patients = this.locationData.filter(function(v, i) {
          return v.htn_status == "Known Hypertensive";
        });
      } else if(this.cat == "ND"){
        this.patients = this.locationData.filter(function(v, i) {
          return v.dm_status == "New Diabetic";
        });
      } else if(this.cat == "KD"){
        this.patients = this.locationData.filter(function(v, i) {
          return v.dm_status == "Known Diabetic";
        });
      } else if(this.cat == "HD"){
        this.patients = this.locationData.filter(function(v, i) {
          return ((v.htn_status == "New Hypertensive" || v.htn_status == "Known Hypertensive") && (v.dm_status == "New Diabetic" || v.dm_status == "Known Diabetic"));
        }); //Represents both Hypertensive & Diabetic
      }
    });    
  };
}