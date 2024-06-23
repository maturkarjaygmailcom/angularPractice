import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmartComponent } from './dmart.component';

describe('DmartComponent', () => {
  let component: DmartComponent;
  let fixture: ComponentFixture<DmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DmartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
