import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlatformComponent } from './user-platform.component';

describe('UserPlatformComponent', () => {
  let component: UserPlatformComponent;
  let fixture: ComponentFixture<UserPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
