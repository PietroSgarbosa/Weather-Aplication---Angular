import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { WeatherdataService } from './services/weatherdata.service';
import { SelectionComponent } from './components/selection/selection.component';
import { FormsModule } from '@angular/forms';
import { ForecastListComponent } from './components/forecast-list/forecast-list.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ForecastDetailsComponent } from './components/forecast-details/forecast-details.component';
import { RouterModule } from '@angular/router';
import { DataService } from './services/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SelectionComponent,
    ForecastListComponent,
    TopBarComponent,
    ForecastDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'dailyForecast/:daytime', component: ForecastDetailsComponent},
      { path: 'list', component: ForecastDetailsComponent}
    ]),
  ],
  providers: [WeatherdataService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
