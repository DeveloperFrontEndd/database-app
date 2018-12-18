import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryCardComponent } from './recovery-card.component';

describe('RecoveryCardComponent', () => {
  let component: RecoveryCardComponent;
  let fixture: ComponentFixture<RecoveryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
