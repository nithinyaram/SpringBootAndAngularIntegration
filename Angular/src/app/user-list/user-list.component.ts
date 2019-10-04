import { Component, OnInit } from '@angular/core';
import { Car } from '../model/Car';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  cars: Car[];

  constructor(private userService: UserService,private router:Router,private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.cars = data;
      console.log(this.cars);
    });
  }

  delete(car: Car) {
    console.log("Delete ");
    this.userService.delete(car).subscribe(records => {
      this.cars = this.cars.filter(x => x !== car)
    });
  }

  update(car:Car){
    console.log("Update"+car.id)
    // this.userService.save(car);
     
    this.router.navigateByUrl('/adduser');
  }
}
