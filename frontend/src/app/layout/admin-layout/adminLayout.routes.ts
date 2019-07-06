import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { AddBlogComponent } from 'src/app/admin/add-blog/add-blog.component';
import { ContactRequestsComponent } from 'src/app/admin/contact-requests/contact-requests.component';
import { AddCategoryComponent } from 'src/app/admin/category/add-category/add-category.component';
import { AddSubcategoryComponent } from 'src/app/admin/category/add-subcategory/add-subcategory.component';

export const ADMIN_LAYOUTS_ROUTES: Routes = [

  {
    path: 'admin',
  children: [
      {
          path: 'dashboard',
          component: DashboardComponent
      },

      {
        path: 'add-blog',
        component: AddBlogComponent
    },
     {
      path: 'contact-requests',
      component: ContactRequestsComponent
  },

  {
    path: 'add-category',
    component: AddCategoryComponent
},
{
  path: 'add-sub-category',
  component: AddSubcategoryComponent
},
    ]
  }

];
