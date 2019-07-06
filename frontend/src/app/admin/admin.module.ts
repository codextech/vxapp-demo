import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSharedUIModule } from './admin-shared-ui/admin-shared-ui.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { FormsModule } from '@angular/forms';
import { ContactRequestsComponent } from './contact-requests/contact-requests.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { AddSubcategoryComponent } from './category/add-subcategory/add-subcategory.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AdminSharedUIModule,
    DropzoneModule,

  ],
  declarations: [
    DashboardComponent,
    AddBlogComponent,
    ContactRequestsComponent,
    AddCategoryComponent,
    AddSubcategoryComponent
  ]
})
export class AdminModule { }
