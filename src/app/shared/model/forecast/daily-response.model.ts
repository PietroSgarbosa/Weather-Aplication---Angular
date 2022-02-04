import { DailyWeather } from './daily-weather.modal';

// Classe de tipagem referente ao array de 7 dias previstos. São esses dados que são apresentados
// no componente de detalhes, e o DT (daytime) é o dado usado como ID, pois cada dia tem um
// daytime diferente
export class DailyResponse {
  dt!: number;
  sunrise!: number;
  sunset!: number;
  moonrise!: number;
  moonset!: number;
  moon_phase!: number;
  temp!: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like!: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure!: number;
  humidity!: number;
  dew_point!: number;
  wind_speed!: number;
  wind_deg!: number;
  weather!: DailyWeather[]; // Array de previsão de clima diário
  clouds!: number;
  pop!: number;
  rain!: number;
  uvi!: number;
}
