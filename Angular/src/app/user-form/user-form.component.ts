import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Car } from '../model/Car';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  car: Car;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.car = new Car();
  }
  res:any;

  onSubmit() {
    this.userService.save(this.car).subscribe(result =>{console.log(result);});
    // this.userService.save(this.user).then(res=> {this.res=res.data});
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
