import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjavaComponent } from './ajava.component';

describe('AjavaComponent', () => {
  let component: AjavaComponent;
  let fixture: ComponentFixture<AjavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
