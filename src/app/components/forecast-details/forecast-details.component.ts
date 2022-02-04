import { DailyWeather } from '../../shared/model/forecast/daily-weather.modal';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service.service';
import { DailyResponse } from 'src/app/shared/model/forecast/daily-response.model';
import { WeatherdataService } from 'src/app/services/weatherdata.service';

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.css'],
})
export class ForecastDetailsComponent implements OnInit, OnChanges {
  routeForecast: DailyResponse | undefined;
  dailyForecast!: DailyResponse[];
  dailyWeather: DailyWeather[] | undefined;
  daytime!: Number;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private router: Router,
    private weatherService: WeatherdataService
  ) {}

  ngOnInit(): void {
    // Setando o array de Forecast por meio do dataService
    this.dailyForecast = this.data.getForecast()
    this.ngOnChanges()
  }

  ngOnChanges(): void {
    // Pegando os parâmetros passados pela rota do Activated Route
    const routeParams = this.route.snapshot.paramMap;
    const daytimeFromRoute = Number(routeParams.get('daytime'));
    console.log('Código de DayTime: ', daytimeFromRoute);
    this.daytime = daytimeFromRoute;
    // Comparando o código de daytime com os objetos no array para setar o dia da rota
    // selecionada
    this.routeForecast = this.dailyForecast.find((day) =>
      day.dt === daytimeFromRoute
    )
    // Setando o array de clima para o dia que foi selecionado
    this.dailyWeather = this.routeForecast?.weather
    this.dailyWeather?.map((data) => {
      data.icon = this.weatherService.getIconUrl(data['icon'])
    }
    )
    // Verificação do recebimento do array
    console.log("Forecast recebido pela rota do DAYTIME: ", this.routeForecast)
  }

  backToList() {
    this.router.navigateByUrl('list')
  }

}
