import { Component, Input } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.css" ]
})
export class AppComponent {
    name = "Angular 4 Weather App";

    apiKey = "1cb1f0b1ae3f81fc2f002e3243fe3995";
    private apiUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=";


}
