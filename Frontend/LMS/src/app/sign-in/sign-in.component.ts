import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginStatus: any;

  constructor(
    private service: UserServiceService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    // Check if running on the browser before accessing sessionStorage
    if (isPlatformBrowser(this.platformId)) {
      this.loginStatus = sessionStorage.getItem("loginStatus");
    }
  }

  signIN(userEmail: any, userPassword: any) {
    this.service.signIN(userEmail, userPassword).subscribe(response => {
      console.log(response);
      alert('Login Successful');
      // Check if running on the browser before accessing sessionStorage
      if (isPlatformBrowser(this.platformId)) {
        sessionStorage.setItem("loginStatus", "active");
        sessionStorage.setItem("userId", response.userId);
        sessionStorage.setItem("userRole", response.userRole);
      }
      this.goTo();
    },
      () => { alert('Wrong Email-ID or Password!'); });
  }

  signUP() {
    this.router.navigate(['signup']);
  }

  goTo() {
    this.router.navigate(['see-all-laptops']);
  }
}
