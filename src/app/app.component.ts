import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  scrolledPassedFirstInput = false;

  constructor(){ }

  ngOnInit(){
    window.addEventListener('scroll',()=>{
      if(window.pageYOffset > 385){
        this.scrolledPassedFirstInput = true;
      }
      else{
        this.scrolledPassedFirstInput = false;
      }
    });
  } 
}