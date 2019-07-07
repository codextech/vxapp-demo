import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/_services/config-datatable';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-customers-app',
  templateUrl: './customers-app.component.html',
  styleUrls: ['./customers-app.component.css']
})
export class CustomersAppComponent implements OnInit {


  customerAppRequests: any[] = [];
  appDetailByCustomer: any[] = []

  configuration = ConfigService.config;
  columns = [

    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'email',
      title: 'Email'
    },

    {
      key: 'phone',
      title: 'Phone'
    },

    {
      key: 'company',
      title: 'Company'
    },

    {
      key: 'date',
      title: 'Starting Date'
    },

    {
      key: 'actions', title: ''
    }
  ];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getAppRequests();
  }

  getAppRequests() {
    this.adminService.getAppRequests().subscribe( res => {
      this.customerAppRequests = res.data;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }


  customerAppDetail(id) {
   const customer =  this.customerAppRequests.find(item => item.appEstimateId === id);

   this.customerAppDetail = customer.subCategories;
  }
}
