import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../model/Car';
import { Observable } from 'rxjs';
import axios from 'axios'

@Injectable()
export class UserService {


  private usersUrl: string;
  private recordsUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users'; 
    this.recordsUrl = 'http://localhost:8080/records';
  }

  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.recordsUrl);
  }

  public save(user: Car) {
    return this.http.put<Car>(this.usersUrl, user, { headers: { 'Content-Type': 'application/json' } });
    // axios.get(this.url).then(res => console.log(res))
    // return axios({url:this.usersUrl,data: JSON.stringify(user),method:"POST",headers:{'Content-Type': 'application/json'}})
  }
  delete(car: Car): any {
    return this.http.delete<Car>('http://localhost:8080/delete/' + car.id)
  }
}
