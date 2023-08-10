import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CduCardComponent } from './cdu-card.component';

describe('CduCardComponent', () => {
  let component: CduCardComponent;
  let fixture: ComponentFixture<CduCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CduCardComponent]
    });
    fixture = TestBed.createComponent(CduCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
