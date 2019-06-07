import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('buyLink') buyLink;
  @ViewChild('buyLinkDropdown') buyLinkDropdown;
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
    console.log(document.querySelectorAll('a.dropdownLink'));
    console.log(document.querySelectorAll('div.linkDropdown'));
    const dropdownLinks = document.querySelectorAll('a.dropdownLink');
    const linkDropdowns = document.querySelectorAll('div.linkDropdown');

    for (let i = 0; i < dropdownLinks.length; i++) {
      let link = dropdownLinks[i];
      for (let index = 0; index < linkDropdowns.length; index++) {
        let dropdown:any = linkDropdowns[i];
        link.addEventListener('mouseover',()=>{
          dropdown.style.display = 'flex';
        });
        link.addEventListener('mouseout',()=>{
          dropdown.style.display = 'none';
        });
      }
    }


    let buyLink = this.buyLink.nativeElement;
    buyLink.addEventListener('mouseover',()=>{
      setTimeout(() => {
        this.buyLinkDropdown.nativeElement.style.display = 'flex';
      }, 400);
    });
    buyLink.addEventListener('mouseout',()=>{
      setTimeout(() => {
        this.buyLinkDropdown.nativeElement.style.display = 'none';
      }, 400);
    });
  }
}