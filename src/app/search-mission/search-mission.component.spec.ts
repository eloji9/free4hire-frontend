import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMissionComponent } from './search-mission.component';

describe('SearchMissionComponent', () => {
  let component: SearchMissionComponent;
  let fixture: ComponentFixture<SearchMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
