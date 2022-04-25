import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  public infos: any[] = [
    {id: 'register', counter: 1, img: '../../../assets/img/application-img1.png',top: 'Search a technician', title: 'Find a high quality technician', description: 'Create your account using your email, password and select your user segment'},
    {id: 'search',counter: 2,img: '../../../assets/img/application-img2.png',top: 'Create an account', title: 'Start section as a business or technician', description: 'Make a request for your specific technical issues and find your perfect technician'},
    {id: 'chat',counter: 3,img: '../../../assets/img/application-img3.png',top: 'Set your contact', title: 'Contact your chosen technician', description: 'Establish your communication throughtout a chat box'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
