import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerCookiesComponent } from './banner-cookies/banner-cookies.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerCookiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
