import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptContactComponent } from './dept-contact.component';

describe('DeptContactComponent', () => {
  let component: DeptContactComponent;
  let fixture: ComponentFixture<DeptContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeptContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
