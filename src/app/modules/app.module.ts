// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from '../components/app.component';
import { WeatherComponent } from '../components/weather/weather.component';
import { SearchComponent } from '../components/search/search.component';

// Routes
const appRoutes : Routes = [
];

@NgModule({
  declarations: [
      AppComponent,
      WeatherComponent,
      SearchComponent],
  imports: [
      BrowserModule,
      FormsModule,
      NgPipesModule,
      RouterModule.forRoot(appRoutes, {useHash: true})
    ],
  bootstrap: [
    AppComponent ]
})
export class AppModule { }
