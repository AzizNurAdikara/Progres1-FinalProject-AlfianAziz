/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BerandaService } from './beranda.service';

describe('Service: Beranda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BerandaService]
    });
  });

  it('should ...', inject([BerandaService], (service: BerandaService) => {
    expect(service).toBeTruthy();
  }));
});
