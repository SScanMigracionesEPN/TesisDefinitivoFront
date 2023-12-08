import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixPriorityComponent } from './matrix-priority.component';

describe('MatrixPriorityComponent', () => {
  let component: MatrixPriorityComponent;
  let fixture: ComponentFixture<MatrixPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrixPriorityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatrixPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
