import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseDataComponent } from './database-data.component';

describe('DatabaseDataComponent', () => {
  let component: DatabaseDataComponent;
  let fixture: ComponentFixture<DatabaseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
