/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BenefitsService } from './benefits.service';

describe('Service: Benefits', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BenefitsService]
    });
  });

  it('should ...', inject([BenefitsService], (service: BenefitsService) => {
    expect(service).toBeTruthy();
  }));
});
