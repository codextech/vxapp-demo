import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingLayoutModule } from './layout/landing-layout/landing-layout.module';
import { MainModule } from './main/main.module';
import { AdminLayoutModule } from './layout/admin-layout/admin-layout.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderConfig, SPINNER, NgxUiLoaderModule } from 'ngx-ui-loader';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 25,
  acceptedFiles: 'image/*'
};


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#ffff',
  fgsSize: 40,
  overlayColor: '#253a60',
  fgsType: SPINNER.squareLoader,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LandingLayoutModule,
    AdminLayoutModule,
    MainModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),

  ],
  providers: [
    {provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
