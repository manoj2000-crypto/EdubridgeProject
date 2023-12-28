import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { ActivatedRoute } from '@angular/router';
import { LaptopService } from '../laptop.service';
@Component({
  selector: 'app-laptop-details-component',
  templateUrl: './laptop-details-component.component.html',
  styleUrl: './laptop-details-component.component.css'
})
export class LaptopDetailsComponentComponent implements OnInit {
  laptopId!: number;
  laptop: Laptop = new Laptop;

  constructor(private route: ActivatedRoute, private laptopService: LaptopService) { }

  ngOnInit(): void {
    this.laptopId = this.route.snapshot.params['id'];
    this.laptop = new Laptop();
    this.laptopService.getLaptopById(this.laptopId).subscribe( data => { 
      this.laptop = data;
    });
  }

}
