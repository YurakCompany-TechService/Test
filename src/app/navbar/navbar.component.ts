@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public links: Array<string> = ['home', 'about us', 'services', 'application', 'contact'].reverse();
  public isCollapse: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  public linkSection(info: string): string{
    if(info === 'about us'){
      return `#aboutUs`
    }
    return `#${info}`
  }
  public navResponsive(): void{
      let nav: any = document.querySelector(".nav-items")
      if (nav.style.visibility === 'visible'){
        this.isCollapse = true;
        return;
      }
      this.isCollapse = !this.isCollapse;
      this.links.reverse();

  }

  public revise(): void{
    console.log(screen.availWidth);
    console.log(document.documentElement.scrollWidth);
    if (window.innerWidth >= 890){

      this.isCollapse = true;
    }
  }

}

import { Component, OnInit } from '@angular/core';
