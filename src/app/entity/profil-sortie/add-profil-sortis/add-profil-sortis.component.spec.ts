import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfilSortisComponent } from './add-profil-sortis.component';

describe('AddProfilSortisComponent', () => {
  let component: AddProfilSortisComponent;
  let fixture: ComponentFixture<AddProfilSortisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfilSortisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfilSortisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
