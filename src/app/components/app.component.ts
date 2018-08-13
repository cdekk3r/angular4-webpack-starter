import { Component, Input } from '@angular/core';

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.css" ]
})
export class AppComponent {
    readonly name = "Angular 4 Weather App";

    // @Input() inputValue: string;
}
