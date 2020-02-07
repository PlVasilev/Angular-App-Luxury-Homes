import { TestBed } from '@angular/core/testing';

import { UserServiceLH} from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserServiceLH = TestBed.get(UserServiceLH);
    expect(service).toBeTruthy();
  });
});
