import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryItemComponent } from './recovery-item.component';

describe('RecoveryItemComponent', () => {
  let component: RecoveryItemComponent;
  let fixture: ComponentFixture<RecoveryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
