import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  BoxBarComponent,
  WidgetsComponent,
} from '../../../ng-components/projects/ngxw/widgets/src/public-api';
// import { WidgetsComponent } from '@ngxw/widgets';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WidgetsComponent, BoxBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo-project2';
}
