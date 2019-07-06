import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/_interfaces/ICategory';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryModel: ICategory = {categoryId: '', categoryName: '', color: ''};
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  addCategory() {
    this.adminService.addCategory(this.categoryModel).subscribe( res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
