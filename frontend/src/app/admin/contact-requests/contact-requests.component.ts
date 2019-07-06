import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/_interfaces/IContact';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-contact-requests',
  templateUrl: './contact-requests.component.html',
  styleUrls: ['./contact-requests.component.css']
})
export class ContactRequestsComponent implements OnInit {

  contacts: IContact[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  getRequests() {
    this.adminService.getUnReadRequests().subscribe( res => {
      this.contacts.push(res);
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
