import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = "http://localhost:8081/laptopmanagementsystem.com";
  router: any;

  constructor(private httpClient: HttpClient) { }

  signUP(user: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    return this.httpClient.post(`${this.baseUrl}/signup`, body, { headers });
  }

  idUserLoggedIn() {
    let status = sessionStorage.getItem('loginStatus');
    return !(status === null);
  }

  signIN(userEmail: any, userPassword: any): Observable<any> {
    const params = new HttpParams().set('userEmail', userEmail).set('userPassword', userPassword);
    return this.httpClient.get(`${this.baseUrl}/login`, { params });
  }

  logOut() {
    sessionStorage.removeItem('loginStatus');
    this.router.navigate(['/signin']);
  }
}
