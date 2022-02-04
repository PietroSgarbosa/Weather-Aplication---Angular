import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { WeatherdataService } from 'src/app/services/weatherdata.service';
import { DailyResponse } from 'src/app/shared/model/forecast/daily-response.model';
import { Weather } from 'src/app/shared/model/weather/weather.modal';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  dailyForecast!: DailyResponse[];

  constructor(
    private weatherService: WeatherdataService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {}

  // Instancia de Weather que mostra em tela alguns dados padrões antes do form
  // ser enviado no component selection
  weather: Weather = {
    city: 'No city',
    countryCod: 'No code',
    conditions: '-',
    temperature: 0,
    icon: '',
    lat: '',
    lon: '',
    date: 0,
  };

  // Método que popula a instancia de Weather por meio do evento emitido, e transfere as
  // coordenadas obtidas da primeira API para o retorno da segunda
  update(weather: Weather) {
    this.weather = weather;
    this.getForecast(weather.lat, weather.lon);
  }

  //Método padrão para consumir a API e setar o retorno no dataService
  getForecast(lat: String, lon: String) {
    this.weatherService.loadForecast(lat, lon).subscribe((data) => {
      this.dailyForecast = data.daily;
      this.dataService.setForecast(data.daily)
      console.log(this.dailyForecast);
    });
  }
}
