import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  scrolledPassedFirstInput = false;

  constructor(private router: Router){ }

  ngOnInit(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if((<NavigationEnd>event).url === '/'){
          window.addEventListener('scroll',()=>{
            if(window.pageYOffset > 385){
              this.scrolledPassedFirstInput = true;
            }
            else{
              this.scrolledPassedFirstInput = false;
            }
          }), true;
        }
      }
      else{
        window.removeEventListener('scroll',()=>{
          if(window.pageYOffset > 385){
            this.scrolledPassedFirstInput = true;
          }
          else{
            this.scrolledPassedFirstInput = false;
          }
          console.log('running');
        }), false;
      }
    });
  }
}
