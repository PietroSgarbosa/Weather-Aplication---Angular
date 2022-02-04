import { Injectable } from '@angular/core';
import { DailyResponse } from '../shared/model/forecast/daily-response.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private day!: DailyResponse
  private forecast!: DailyResponse[]

  constructor() { }

  // Armazena o retorno da API, o dia selecionado no ngFor
  setDay(day: DailyResponse) {
    this.day = day
  }

  // Armazena o array de Forecast recebido pela API
  setForecast(forecast: DailyResponse[]) {
    this.forecast = forecast
  }

  getDay() {
    return this.day;
  }

  getForecast() {
    return this.forecast
  }

}
