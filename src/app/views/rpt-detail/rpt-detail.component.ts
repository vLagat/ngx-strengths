import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rpt-detail',
  templateUrl: './rpt-detail.component.html',
  styleUrls: ['./rpt-detail.component.css']
})
export class RptDetailComponent implements OnInit {
  public month: string;
  public loc: number;
  public cat: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.month = this.route.snapshot.paramMap.get['month'];
    this.loc = this.route.snapshot.paramMap.get['loc'];
    this.cat = this.route.snapshot.paramMap.get['cat'];
  }

}