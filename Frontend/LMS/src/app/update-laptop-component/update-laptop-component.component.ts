import { Component, OnInit} from '@angular/core';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop';
import { ActivatedRoute, Router } from '@angular/router'; 
import { error } from 'console';

@Component({
  selector: 'app-update-laptop-component',
  templateUrl: './update-laptop-component.component.html',
  styleUrl: './update-laptop-component.component.css'
})
export class UpdateLaptopComponentComponent implements OnInit {

  laptopId!: number;
  laptop: Laptop = new Laptop();
  constructor(private laptopService: LaptopService, private route: ActivatedRoute, private router: Router)
  { }

  ngOnInit(): void {
    this.laptopId = this.route.snapshot.params['id'];
    this.laptopService.getLaptopById(this.laptopId).subscribe(data => {
      this.laptop = data;
      console.log(this.laptop.laptopPrice);
    });
    // this.laptopService.getLaptopById(this.laptopId).subscribe(data => {
    //   this.laptop = data;
    //   console.log(this.laptop.laptopPrice);
    // },
    // error => console.log(error));
  }

  onSubmit()
  {
    this.laptopService.updateLaptop(this.laptopId, this.laptop).subscribe( data => { 
      this.goToLaptopList();
    });
    // error => console.log(error));
  }

  goToLaptopList()
  {
    this.router.navigate(['/laptops']);
  }
}
