import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRefeferencielComponent } from './add-refeferenciel.component';

describe('AddRefeferencielComponent', () => {
  let component: AddRefeferencielComponent;
  let fixture: ComponentFixture<AddRefeferencielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRefeferencielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRefeferencielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
