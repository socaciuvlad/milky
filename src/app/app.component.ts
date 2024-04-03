import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxBarComponent } from '../../../ng-components/projects/box-bar/src/public-api';
import { WidgetsComponent } from '@ngxw/widgets';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoxBarComponent, WidgetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo-project2';
}
