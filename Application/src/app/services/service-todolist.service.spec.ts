import { TestBed } from '@angular/core/testing';

import { ServiceTodolistService } from './service-todolist.service';

describe('ServiceTodolistService', () => {
  let service: ServiceTodolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTodolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
