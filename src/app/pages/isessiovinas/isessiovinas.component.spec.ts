import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsessiovinasComponent } from './isessiovinas.component';

describe('IsessiovinasComponent', () => {
  let component: IsessiovinasComponent;
  let fixture: ComponentFixture<IsessiovinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsessiovinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsessiovinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
