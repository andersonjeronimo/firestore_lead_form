import { TestBed, inject } from '@angular/core/testing';

import { RouteGuard } from './route.guard';

describe('RouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteGuard]
    });
  });

  it('should be created', inject([RouteGuard], (service: RouteGuard) => {
    expect(service).toBeTruthy();
  }));
});
