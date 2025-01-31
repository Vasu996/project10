import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiesComponent } from './servies.component';

describe('ServiesComponent', () => {
  let component: ServiesComponent;
  let fixture: ComponentFixture<ServiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
