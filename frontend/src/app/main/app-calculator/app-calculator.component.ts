import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';
import { IAppFeature } from 'src/app/_interfaces/IAppFeature';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-app-calculator',
  templateUrl: './app-calculator.component.html',
  styleUrls: ['./app-calculator.component.css']
})
export class AppCalculatorComponent implements OnInit {

  appFeatures: any[] = [];
  featureColor: string;
  featureIndex: any;

  appCalculateModel: IAppFeature = {name: '', title: '', phone: '', company: '',
    description: '', email: '', features: []};

  constructor(private mainService: MainService,
     private router: Router,
     private toastr: ToastrService) { }

  ngOnInit() {
    this.getAppFeatures();
  }

  getAppFeatures() {
    this.mainService.getCategrories().subscribe( res => {
      this.appFeatures = res.data;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  appEstimation() {

    this.mainService.appEstimation(this.appCalculateModel).subscribe( res => {
      console.log(res);
      this.router.navigateByUrl('/');
      this.toastr.success('Thank you! Our team will cotanct you soon');

    }, err => {
      console.log(err);
    });
  }

  onFeatureClick(color, id) {
    this.featureIndex = id;
    this.featureColor = color;
    // add feature to Model

    this.appCalculateModel.features.push(id);
  }
}
