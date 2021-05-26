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
  constructor(public rs: PatientService){

  }

  ngOnInit(): void {
    this.rs.getPatients().subscribe((response) => {
      this.patients=response;
    })
  }

}
