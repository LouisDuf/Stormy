import { TestBed } from '@angular/core/testing';

import { ServicetaskModelService } from '../services/service-taskModel.service';

describe('ServiceTodolistService', () => {
  let service: ServicetaskModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicetaskModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
