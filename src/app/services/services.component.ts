import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public services: Array<string> = ['Business', 'Technician'];
  public businessServices: Array<string> = [
    '3 Types of Subscriptions',
    'Wide Technician Coverage',
    'Agile Communication',
    'Better Organization Activities'
  ];
  public technicianServices: Array<string> = [
    'Free Access',
    'Visualization of New Projects',
    'Quick Contact with Business'
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public list(): void{

  }

}
