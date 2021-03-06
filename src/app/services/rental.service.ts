import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private apiUrl: string = 'https://localhost:44347/api/rentals/getall';
  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<RentalResponseModel> {
    return this.httpClient
    .get<RentalResponseModel>(this.apiUrl);
  }
}
