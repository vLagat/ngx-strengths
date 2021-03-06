import { Component, OnInit } from '@angular/core';
import { Patients } from '../_model/patients';
import { PatientService } from '../_services/patient.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {
  patients: Patients[] = [];
  name: any;
  p:number = 1;
  url_key: any = '';
  searchRes: boolean;
  endSearch: boolean;

  constructor(public rs: PatientService, private route: ActivatedRoute) { }

  ngOnInit(): void {

   this.searchRes = false;
   this.endSearch = false;
    this.rs.getPatients().subscribe((response) => {
      this.patients=response;
    })
    if(this.route.snapshot.url[0].path = "initial" ){
      this.url_key = 'initial';
    } else if(this.route.snapshot.url[0].path = "patient-list") {
      this.url_key = 'patient-list';
    } else if(this.route.snapshot.url[0].path = "locations") {
      this.url_key = 'locations';
    } else if(this.route.snapshot.url[0].path = "reports") {
      this.url_key = 'reports';
    }else{
      this.url_key = 'initial';
    }

  }
  Search(){
    if(this.name == ""){
      this.ngOnInit();
    } else{
      this.patients = this.patients.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });      
      this.endSearch = false;
    }
  }
  Reset(){
      this.ngOnInit();
  }
}
