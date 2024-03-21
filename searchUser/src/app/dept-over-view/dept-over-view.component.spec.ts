import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptOverViewComponent } from './dept-over-view.component';

describe('DeptOverViewComponent', () => {
  let component: DeptOverViewComponent;
  let fixture: ComponentFixture<DeptOverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptOverViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeptOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
