import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingLayoutModule } from './layout/landing-layout/landing-layout.module';
import { MainModule } from './main/main.module';
import { AdminLayoutModule } from './layout/admin-layout/admin-layout.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxUiLoaderConfig, SPINNER, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ApiInterceptor } from './_services/api-interceptor';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 25,
  acceptedFiles: 'image/*'
};


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#efa858',
  fgsSize: 50,
  overlayColor: '#253a60',
  fgsType: SPINNER.circle,
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
    ToastrModule.forRoot(), // ToastrModule added
    BrowserAnimationsModule, // required animations ToastrModule module


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
    {provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
