import { TestBed } from '@angular/core/testing';

import { StvService } from './stv.service';

describe('StvService', () => {
  let service: StvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
