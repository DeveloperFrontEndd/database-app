import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryDataComponent } from './recovery-data.component';

describe('RecoveryDataComponent', () => {
  let component: RecoveryDataComponent;
  let fixture: ComponentFixture<RecoveryDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
