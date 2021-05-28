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
  name: any;
  p:number = 1;
  
  public month: string;
  public loc: number;
  public cat: string;

  constructor(private route: ActivatedRoute, public rs: PatientService) { }

  ngOnInit(): void {
    this.month = this.route.snapshot.queryParams['month'];
    this.loc = this.route.snapshot.queryParams['loc'];
    this.cat = this.route.snapshot.queryParams['cat'];

    this.rs.getPatients().subscribe((response) => {
      this.patients=response;
    })
  }

}