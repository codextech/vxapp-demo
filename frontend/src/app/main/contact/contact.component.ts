import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';
import { IContact } from 'src/app/_interfaces/IContact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contactModel: IContact = {
    name: '',
    message: '',
    email: '',
    phone: '',
    country: '',
    terms: false,
    isRead: false
  };
  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

  postRequest() {
      this.mainService.addUserRequest(this.contactModel).subscribe( res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }


}
