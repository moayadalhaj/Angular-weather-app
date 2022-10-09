import { Component, OnInit } from '@angular/core';
import { RootObject } from './models/weather.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public weatherData?: RootObject;
  public cityName: string = "Amman";
  constructor(private weatherService: WeatherService) { }
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (data) => {
        this.weatherData = data;
      }
    });
  }
}
