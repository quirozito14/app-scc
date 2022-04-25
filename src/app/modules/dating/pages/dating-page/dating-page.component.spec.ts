import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatingPageComponent } from './dating-page.component';

describe('DatingPageComponent', () => {
  let component: DatingPageComponent;
  let fixture: ComponentFixture<DatingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
