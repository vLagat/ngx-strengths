import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router,NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'ngx-strengths';
  logo = '../assets/icons/logo.png';
  avatar = '../assets/images/avatar.jpg';
  active_r: string = '';

  event$

  constructor(private route: ActivatedRoute, private router: Router) {        
    this.event$
      =this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if(event instanceof NavigationStart) {
                this.active_r = event.url;
              }
            });
  }
  
  ngOnInit(): void {
    // this.month = this.route.snapshot.queryParams['month'];
    // this.loc = this.route.snapshot.queryParams['loc'];
    // this.cat = this.route.snapshot.queryParams['cat']
  } 

  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}
