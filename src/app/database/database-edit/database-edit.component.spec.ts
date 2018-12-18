import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseEditComponent } from './database-edit.component';

describe('DatabaseEditComponent', () => {
  let component: DatabaseEditComponent;
  let fixture: ComponentFixture<DatabaseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
