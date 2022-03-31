import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCookiesComponent } from './banner-cookies.component';

describe('BannerCookiesComponent', () => {
  let component: BannerCookiesComponent;
  let fixture: ComponentFixture<BannerCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCookiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
