import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantusComponent } from './contantus.component';

describe('ContantusComponent', () => {
  let component: ContantusComponent;
  let fixture: ComponentFixture<ContantusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContantusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContantusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
