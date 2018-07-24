import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMissionResultComponent } from './search-mission-result.component';

describe('SearchMissionResultComponent', () => {
  let component: SearchMissionResultComponent;
  let fixture: ComponentFixture<SearchMissionResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMissionResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMissionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
