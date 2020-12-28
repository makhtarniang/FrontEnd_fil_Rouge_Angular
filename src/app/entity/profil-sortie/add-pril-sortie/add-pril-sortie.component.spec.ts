import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrilSortieComponent } from './add-pril-sortie.component';

describe('AddPrilSortieComponent', () => {
  let component: AddPrilSortieComponent;
  let fixture: ComponentFixture<AddPrilSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrilSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrilSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
