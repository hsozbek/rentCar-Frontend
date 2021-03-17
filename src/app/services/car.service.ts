import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl: string = 'https://localhost:44347/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<CarResponseModel> {
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<CarResponseModel>(newPath);
  }
  GetCarsByBrand(brandId: number): Observable<CarResponseModel> {
    let newPath = this.apiUrl + 'cars/getcarsbybrandid?id=' + brandId;
    return this.httpClient.get<CarResponseModel>(newPath);
  }

  GetCarsByColor(colorId: number): Observable<CarResponseModel> {
    let newPath = this.apiUrl + 'cars/getcarsbycolorid?id=' + colorId;
    return this.httpClient.get<CarResponseModel>(newPath);
  }


}
