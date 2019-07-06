import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUIModule } from './shared-ui/shared-ui.module';
import { HomeModule } from './home/home.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { AppCalculatorComponent } from './app-calculator/app-calculator.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedUIModule,
    HomeModule,
    FormsModule,
  ],

  declarations: [
    AboutComponent,
    ContactComponent,
    FeaturesComponent,
    AppCalculatorComponent,
    BlogsComponent
  ]
})
export class MainModule { }
