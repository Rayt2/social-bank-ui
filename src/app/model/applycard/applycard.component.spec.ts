import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplycardComponent } from './applycard.component';

describe('ApplycardComponent', () => {
  let component: ApplycardComponent;
  let fixture: ComponentFixture<ApplycardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplycardComponent]
    });
    fixture = TestBed.createComponent(ApplycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
