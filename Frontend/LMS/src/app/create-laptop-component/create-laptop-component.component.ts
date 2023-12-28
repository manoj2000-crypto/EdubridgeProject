import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-create-laptop-component',
  templateUrl: './create-laptop-component.component.html',
  styleUrl: './create-laptop-component.component.css'
})
export class CreateLaptopComponentComponent implements OnInit {
  
  laptop: Laptop = new Laptop();
  
  constructor(private laptopService: LaptopService, private router: Router){ }

  ngOnInit(): void {
    
  }

  savelaptop()
  {
    this.laptopService.createLaptop(this.laptop).subscribe( data => {
      console.log(data);
      this.goTolaptopList();
    },
    error => console.log(error));
  }

  goTolaptopList()
  {
    this.router.navigate(['laptops']); //If we get error we have to change this.
  }

  onSubmit()
  {
    console.log(this.laptop);
    this.savelaptop();
  }
}