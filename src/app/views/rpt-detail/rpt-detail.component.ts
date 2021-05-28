import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rpt-detail',
  templateUrl: './rpt-detail.component.html',
  styleUrls: ['./rpt-detail.component.css']
})
export class RptDetailComponent implements OnInit {
  public month: any;
  public loc: number;
  public cat: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.month = this.route.snapshot.queryParams['month'];
    this.loc = this.route.snapshot.queryParams['loc'];
    this.cat = this.route.snapshot.queryParams['cat'];
  }

}