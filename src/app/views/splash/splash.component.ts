import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SplashAnimationType } from './splash-animation-type';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  windowWith: string;
  showSplash: boolean = true;
  opacityChange: number = 1;
  splashTransition: string;

  @Input() animationDuration: number = 0.5;
  @Input() duration: number = 2;
  @Input() animationType: SplashAnimationType = SplashAnimationType.SlideLeft

  constructor() { }
  mini_logo = '../assets/img/logo.png';
  ug_website = "https://www.uasingishu.go.ke/"
  logo = '../../assets/icons/logo.png';

  ngOnInit(): void {

    setTimeout(() => {

      let transitionStyle = '';

      switch(this.animationType) {
        case SplashAnimationType.SlideLeft:
          this.windowWith = '-' + window.innerWidth + 'px';
          transitionStyle = 'left ' + this.animationDuration + 's';
          break;

        case SplashAnimationType.SlideRight:
          this.windowWith = window.innerWidth + 'px';
          transitionStyle = 'left ' + this.animationDuration + 's';
          break;

        case SplashAnimationType.FadeOut:
          transitionStyle = 'opacity ' + this.animationDuration + 's';
          this.opacityChange = 0;
          break;

        default:
          this.windowWith = '-' + window.innerWidth + 'px';
          transitionStyle = 'left ' + this.animationDuration + 's';
          break;

      }
      
      this.splashTransition = transitionStyle;

      setTimeout(() => {
        
      this.showSplash = false;
      }, this.animationDuration * 1000);
    }, this.duration * 1000);
  }

}
