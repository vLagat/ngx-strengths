import { Component, OnInit } from '@angular/core';
import { Reports } from '../../_model/reports';
import { ReportService } from '../../_services/report.service'
import { Routes, RouterModule } from '@angular/router'

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: Reports[] = [];
  name: any;

  constructor(public rs: ReportService) { }

  ngOnInit(): void {
    this.rs.getReports().subscribe((response) => {
      this.reports=response;
    })
  }

}
