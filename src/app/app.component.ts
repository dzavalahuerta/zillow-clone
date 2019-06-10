import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewInit {
  scrolledPassedFirstInput = false;

  constructor(){ }

  ngOnInit(){
    window.addEventListener('scroll',()=>{
      if(window.pageYOffset > 385){
        this.scrolledPassedFirstInput = true;
      }
      else{
        this.scrolledPassedFirstInput = false;
        this.ngAfterViewInit();
      }
    });
  }
  
  ngAfterViewInit(){
    const dropdownLinks = document.querySelectorAll('a.dropdownLink');
    const linkDropdowns = document.querySelectorAll('div.linkDropdown');
    let mouseoverDropdown = false;

    for (let i = 0; i < dropdownLinks.length; i++) {
      let link = dropdownLinks[i];
      for (let index = 0; index < linkDropdowns.length; index++) {
        let dropdown:any = linkDropdowns[i];
        dropdown.addEventListener('mouseenter',()=>{
          mouseoverDropdown = true;
        });
        dropdown.addEventListener('mouseleave',()=>{
          mouseoverDropdown = false;
          dropdown.style.display = 'none';
        });
        link.addEventListener('mouseenter',()=>{
          setTimeout(() => {
            dropdown.style.display = 'flex';
          }, 500);
        });
        link.addEventListener('mouseleave',()=>{
          setTimeout(() => {
            if(mouseoverDropdown === false){
              dropdown.style.display = 'none';
            }
          }, 500);
        });
      }
    }
  }
}