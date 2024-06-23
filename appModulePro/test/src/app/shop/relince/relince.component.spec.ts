import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelinceComponent } from './relince.component';

describe('RelinceComponent', () => {
  let component: RelinceComponent;
  let fixture: ComponentFixture<RelinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelinceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
