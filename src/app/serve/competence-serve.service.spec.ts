import { TestBed } from '@angular/core/testing';

import { CompetenceServeService } from './competence-serve.service';

describe('CompetenceServeService', () => {
  let service: CompetenceServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetenceServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
