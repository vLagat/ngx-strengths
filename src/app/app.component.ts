import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-strengths';
  logo = '../assets/icons/logo.png';
  avatar = '../assets/images/avatar.jpg';

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    // this.month = this.route.snapshot.queryParams['month'];
    // this.loc = this.route.snapshot.queryParams['loc'];
    // this.cat = this.route.snapshot.queryParams['cat']
  }
}
