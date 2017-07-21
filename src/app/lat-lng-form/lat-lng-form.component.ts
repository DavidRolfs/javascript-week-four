import { Component } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { GeoCodeApiService } from '../geo-code-api.service';
import { GeoCodeResult } from '../geo-code-result.model';

@Component({
  selector: 'app-lat-lng-form',
  templateUrl: './lat-lng-form.component.html',
  styleUrls: ['./lat-lng-form.component.css'],
  providers: [ GeoCodeApiService ]
})

export class LatLngFormComponent {
   GeoCodeResults: string=null;

  constructor(private geoCodeApiService: GeoCodeApiService) { }

  getGeoCode(lat: string, lng: string) {
      this.geoCodeApiService.getByLatAndLng(lat, lng).subscribe(response =>{
          this.GeoCodeResults = response.json().results[0].formatted_address;
          console.log(this.GeoCodeResults);
      });
    }


}
