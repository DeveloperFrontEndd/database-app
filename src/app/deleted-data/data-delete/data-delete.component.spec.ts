import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryDeleteComponent } from './recovery-delete.component';

describe('RecoveryDeleteComponent', () => {
  let component: RecoveryDeleteComponent;
  let fixture: ComponentFixture<RecoveryDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
