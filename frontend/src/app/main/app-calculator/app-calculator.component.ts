import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';
import { IAppFeature } from 'src/app/_interfaces/IAppFeature';

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

  constructor(private mainService: MainService) { }

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

    console.log(this.appCalculateModel);

  }

  onFeatureClick(color, id) {
    this.featureIndex = id;
    this.featureColor = color;
    // add feature to Model

    this.appCalculateModel.features.push({subCategoryId: id});
  }
}
