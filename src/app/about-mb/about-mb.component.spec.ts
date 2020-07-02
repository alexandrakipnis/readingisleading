import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMbComponent } from './about-mb.component';

describe('AboutMbComponent', () => {
  let component: AboutMbComponent;
  let fixture: ComponentFixture<AboutMbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
