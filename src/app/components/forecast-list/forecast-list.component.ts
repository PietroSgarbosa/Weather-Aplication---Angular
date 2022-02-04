import { DailyResponse } from 'src/app/shared/model/forecast/daily-response.model';
import { weekDays } from 'src/app/shared/enum/weekDays';
import { Component, Input, OnInit } from '@angular/core';import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.css']
})
export class ForecastListComponent implements OnInit {
  @Input() forecast!: DailyResponse[]
  @Input() actualData = new Date()
  weekDay: weekDays = this.actualData.getDay()

  constructor(private dataService: DataService) { }

  // O ngOnInit deste componente tem apenas como objetivo testar o ENUM que verfica o dia atual
  ngOnInit(): void {
    console.log("Verificação do dia da semana:")
    console.log(weekDays[this.weekDay])
  }

  // Método que verifica o código de dia selecionado uma vez clicado
  showDaytime(dt: number) {
    console.log(`Código de Daytime: ${dt}`)
  }

  // Método para setar
  saveData(day: DailyResponse) {
    this.dataService.setDay(day)
  }

}


