import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerCookiesComponent } from './banner-cookies/banner-cookies.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerCookiesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
