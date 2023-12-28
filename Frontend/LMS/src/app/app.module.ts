import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaptopListComponentComponent } from './laptop-list-component/laptop-list-component.component';
import { FormsModule } from '@angular/forms';
import { CreateLaptopComponentComponent } from './create-laptop-component/create-laptop-component.component';
import { UpdateLaptopComponentComponent } from './update-laptop-component/update-laptop-component.component';
import { LaptopDetailsComponentComponent } from './laptop-details-component/laptop-details-component.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LaptopListComponentComponent,
    CreateLaptopComponentComponent,
    UpdateLaptopComponentComponent,
    LaptopDetailsComponentComponent,
    ContactUsPageComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
