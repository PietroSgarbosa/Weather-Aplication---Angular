import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherdataService } from 'src/app/services/weatherdata.service';
import { Weather } from 'src/app/shared/model/weather/weather.modal';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css'],
})
export class SelectionComponent implements OnInit {
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>();
  weather: Weather = new Weather();
  city: String = '';
  actualData = new Date(); // Fpi uma tentativa de adicionar data atual na primeira posição
                           // do array de dias e incrementa-la, ainda não funcional

  constructor(private weatherData: WeatherdataService) {}

  ngOnInit(): void {}

  // É por meio do submit que o onSelection emit os valores de Weather que são armazenados
  // pelo retorno da API que recebe o nome da cidade como parâmetro. Este valor é emitido
  // para o componente de lista
  submit() {
    this.weatherData.load(this.city).subscribe((data) => {
      this.weather.city = data['name'];
      this.weather.conditions = data['weather'][0]['main'];
      this.weather.temperature = Math.round(
        (data['main']['temp'] - 273.15) * 1.8 + 32
      );
      this.weather.icon = this.weatherData.getIconUrl(
        data['weather'][0]['icon']
      );
      // Capturando as coordenadas da api padrão de busca por cidade
      this.weather.lon = data['coord']['lon'];
      this.weather.lat = data['coord']['lat'];
      this.weather.date = this.actualData.getDay();
      console.log(
        `Coordenadas sendo consumidas da API pública: ${this.weather.lat} & ${this.weather.lon}`
      );
      console.log();
      this.onSelection.emit(this.weather);
    });
  }
}
