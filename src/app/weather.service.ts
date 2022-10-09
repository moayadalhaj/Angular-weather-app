import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RootObject } from './models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherData(cityName: string): Observable<RootObject> {
    return this.http.get<RootObject>(environment.weatherBaseUrl, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIKeyLabel, environment.XRapidAPIKey
        )
        .set(
          environment.XRapidAPIHostLabel, environment.XRapidAPIHost
        ),
      params: new HttpParams()
        .set('q', cityName)
        .set('days', 1)
    })
  }
}
