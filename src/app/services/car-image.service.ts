import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImageResponseModel } from '../models/carImageResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl:string= 'https://localhost:44347/api/carImages/getbycarid?carid=';
  constructor(private httpClient: HttpClient) {}

  GetCarImagesByCar(carId: number): Observable<CarImageResponseModel> {
    let newPath = this.apiUrl + carId;
    return this.httpClient.get<CarImageResponseModel>(newPath);
  }
}
