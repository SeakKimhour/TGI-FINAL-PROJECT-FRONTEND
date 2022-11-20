import { TestBed } from '@angular/core/testing';

import { LoginRouteGuardGuard } from './login-route-guard.guard';

describe('LoginRouteGuardGuard', () => {
  let guard: LoginRouteGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginRouteGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
