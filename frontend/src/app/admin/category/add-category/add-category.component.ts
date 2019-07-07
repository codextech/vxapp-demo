import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/_interfaces/ICategory';
import { AdminService } from 'src/app/_services/admin.service';
import { ConfigService } from 'src/app/_services/config-datatable';
import { MainService } from 'src/app/_services/main.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryModel: ICategory = {categoryId: '', categoryName: '', color: ''};
  categories: ICategory[] = [];

  configuration = ConfigService.config;
  columns = [

    {
      key: 'Category',
      title: 'Category'
    },
    {
      key: 'Color',
      title: 'Color'
    },
    {
      key: 'actions', title: ''
    }
  ];


  constructor(private adminService: AdminService, private mainService: MainService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getCategories();
  }

  addCategory() {
    this.adminService.addCategory(this.categoryModel).subscribe( res => {

      this.categoryModel.categoryId = res.data.categoryId;
      this.categories.push(this.categoryModel);
    this.toastr.success('Added');

    }, err => {
      console.log(err);
    });
  }

  deleteCategory(id) {
    this.adminService.deleteCategory(id).subscribe( res => {
    this.toastr.success('Deleted');
    }, err => {
      console.log(err);
    });
  }

  getCategories() {
    this.mainService.getCategrories().subscribe( res => {
      this.categories = res.data;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
