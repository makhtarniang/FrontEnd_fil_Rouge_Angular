import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatProfilSortieComponent } from './updat-profil-sortie.component';

describe('UpdatProfilSortieComponent', () => {
  let component: UpdatProfilSortieComponent;
  let fixture: ComponentFixture<UpdatProfilSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatProfilSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatProfilSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
