import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseMessageComponent } from './database-message.component';

describe('DatabaseMessageComponent', () => {
  let component: DatabaseMessageComponent;
  let fixture: ComponentFixture<DatabaseMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
