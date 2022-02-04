import { DailyPageable } from '../shared/model/forecast/daily-pageable.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

let dayForecastUrl: String = 'https://api.openweathermap.org/data/2.5/onecall';
let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather';
let apiKey: String = '00dce057124b58d04e79db37719e937b';

@Injectable({
  providedIn: 'root',
})
export class WeatherdataService {
  constructor(private http: HttpClient) {}

  // Método que retorna a requisição GET da previsão atual por nome de cidade
  // A API também retorna as coordenadas de latitude e longitude da cidade submetida
  load(city: String): Observable<any> {
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey);
  }

  // Latitude e Longitude obtidas da cidade escolhida são transferidas para o retorno desta
  // segunda API, obtendo assim 7 dias de previsão (na falta de uma API privada do site)
  // o retorno é limitado para excluir informações que este APP nao irá utilizar, e converte
  // os dados do sistema Imperial para Métrico
  loadForecast(lat: String, lon: String): Observable<DailyPageable> {
    return this.http.get<DailyPageable>(
      dayForecastUrl +
        '?lat=' +
        lat +
        '&lon=' +
        lon +
        '&units=metric' +
        '&exclude=minutely,alerts' +
        '&APPID=' +
        apiKey
    );
  }

  // Método que retorna a imagem de Icone de previsão, ele recebe como parâmetro o código de
  // um ícone (como "01d", que na API significa ensolarado), então é retornada a imagem
  // equivalente
  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/' + icon + '.png';
  }
}
