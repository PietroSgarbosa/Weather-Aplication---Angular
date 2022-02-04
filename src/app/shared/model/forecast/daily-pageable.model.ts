import { DailyResponse } from "./daily-response.model";
import { DailyWeather } from "./daily-weather.modal";

// A classe DailyPageable foi desenvolvida para mapear todo o retorno da API de previsão por 7
// dias. Para buscar a cidade nesta API é necessário passar a latitude e longitude da mesma,
// as duas variaveis de lat e lon foram pensadas agora para transferir as coordenadas que vem
// da API de previsão atual, para esta
export class DailyPageable {
  lat!: number; // não é original da API
  lon!: number; // não é original da API
  timezone!: String;
  timezone_offset!: number;
  current!: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: DailyWeather[]
    rain: {
      '1h': number;
    }
  }
    minutely!: any[] // Não usado
    hourly!: any[] // Não usado
    daily!: DailyResponse[] // Array dos 7 dias de previsão
    alerts!: any[] // Não usado
}
