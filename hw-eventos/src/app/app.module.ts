import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { HomeComponent } from './features/home/home.component';
import { MainComponent } from './features/main/main.component';
import { WhoComponent } from './features/who/who.component';
import { SharedModule } from './shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoComponent,
    ContactUsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    NgxMatSelectSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
