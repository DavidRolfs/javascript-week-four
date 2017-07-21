import { TestBed, inject } from '@angular/core/testing';

import { GeoCodeApiService } from './geo-code-api.service';

describe('GeoCodeApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoCodeApiService]
    });
  });

  it('should ...', inject([GeoCodeApiService], (service: GeoCodeApiService) => {
    expect(service).toBeTruthy();
  }));
});
