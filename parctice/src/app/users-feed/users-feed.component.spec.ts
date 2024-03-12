import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFeedComponent } from './users-feed.component';

describe('UsersFeedComponent', () => {
  let component: UsersFeedComponent;
  let fixture: ComponentFixture<UsersFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
