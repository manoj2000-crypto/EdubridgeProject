import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { response } from 'express';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  userId:any;

  constructor(private service:UserServiceService, private router:Router) { }

  user:any;
  saveUser(userName:any, dob:any, userEmail:any, userPassword:any, userRePassword:any, about:any)
  {
    if(userPassword == userRePassword)
    {
      this.user = new User(this.userId, userName, userPassword, userEmail, dob, about, 'USER');
      console.log(this.user);
      this.service.signUP(this.user).subscribe(response =>{
        console.log(response);
        alert('Sign-Up successful !!!');
        this.router.navigate(['/signin']);
      });
    }
    else{
      alert('Password does not match !');
      window.location.reload();
    }
  }
}
