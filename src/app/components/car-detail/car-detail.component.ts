import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carImages: CarImage[];
  path: string = 'https://localhost:44347/';
  constructor(
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarImagesByCar(params['carId']);
      } else {
        this.getCarImagesByCar(0);
      }
    });
  }

  getCarImagesByCar(carId: number) {
    this.carImageService.GetCarImagesByCar(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }
  getCarImagePathByCar(carImage: CarImage) {
    return this.path + carImage.imagePath;
  }
}
