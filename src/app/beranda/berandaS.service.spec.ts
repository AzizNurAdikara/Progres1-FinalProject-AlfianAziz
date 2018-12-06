/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BerandaSService } from './berandaS.service';

describe('Service: BerandaS', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BerandaSService]
    });
  });

  it('should ...', inject([BerandaSService], (service: BerandaSService) => {
    expect(service).toBeTruthy();
  }));
});
