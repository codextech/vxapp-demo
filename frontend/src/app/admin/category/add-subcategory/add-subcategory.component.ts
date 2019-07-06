import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import { ISubCategory } from 'src/app/_interfaces/ISubCategory';
import { MainService } from 'src/app/_services/main.service';
import { ICategory } from 'src/app/_interfaces/ICategory';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

  categories: ICategory[] = [];
  subCategoryModel: ISubCategory = {categoryId: '', subCategoryName: '', color: '' };
  constructor(private adminService: AdminService, private mainService: MainService) { }

  ngOnInit() {
    this.getCategrories();
  }

  addSubCategory() {
    console.log(this.subCategoryModel);

    this.adminService.addSubCategory(this.subCategoryModel).subscribe( res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  getCategrories() {
    this.mainService.getCategrories().subscribe( res => {
      this.categories = res.data;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}
