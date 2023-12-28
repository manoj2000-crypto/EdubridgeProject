import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopListComponentComponent } from './laptop-list-component/laptop-list-component.component';
import { CreateLaptopComponentComponent } from './create-laptop-component/create-laptop-component.component';
import { UpdateLaptopComponentComponent } from './update-laptop-component/update-laptop-component.component';
import { LaptopDetailsComponentComponent } from './laptop-details-component/laptop-details-component.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: 'laptops', component: LaptopListComponentComponent},
  {path: 'create-laptop', component: CreateLaptopComponentComponent},
  {path: '', redirectTo: 'laptops', pathMatch: 'full'},
  {path: 'update-laptop/:id', component: UpdateLaptopComponentComponent},
  {path: 'update-laptop', component: UpdateLaptopComponentComponent},
  {path: 'laptop-details/:id', component: LaptopDetailsComponentComponent},
  {path: 'laptop-details', component: LaptopDetailsComponentComponent},
  {path: 'contact-us-page', component: ContactUsPageComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
