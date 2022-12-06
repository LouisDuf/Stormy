import { TestBed } from '@angular/core/testing';

import { ScreenHandlerService } from './screen-handler.service';

describe('ScreenHandlerService', () => {
  let service: ScreenHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
