import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/main/home/home.component';
import { ContactComponent } from 'src/app/main/contact/contact.component';
import { AboutComponent } from 'src/app/main/about/about.component';
import { FeaturesComponent } from 'src/app/main/features/features.component';
import { AppCalculatorComponent } from 'src/app/main/app-calculator/app-calculator.component';
import { BlogsComponent } from 'src/app/main/blogs/blogs.component';




export const LANDING_LAYOUTS_ROUTES: Routes = [

  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'app-calculator', component: AppCalculatorComponent },


];
