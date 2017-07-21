import { Component, Input } from '@angular/core';
import { GeoCodeApiService } from '../geo-code-api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [ GeoCodeApiService ]
})
export class ResultComponent {
  @Input() childResults;

  constructor() { }

}
