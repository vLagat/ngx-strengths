import { Component, OnInit } from '@angular/core';
import { Patients } from '../../_model/patients';
import { PatientService } from '../../_services/patient.service'

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patients[] = [];
  name: any;
  p:number = 1;
  constructor(public rs: PatientService){

  }

  ngOnInit(): void {
    this.rs.getPatients().subscribe((response) => {
      this.patients=response;
    })
  }

  Search(){
    if(this.name == ""){
      this.ngOnInit();
    } else{
      this.patients = this.patients.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

}
