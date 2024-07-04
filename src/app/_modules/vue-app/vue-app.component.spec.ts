/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VueAppComponent } from './vue-app.component';

describe('VueAppComponent', () => {
  let component: VueAppComponent;
  let fixture: ComponentFixture<VueAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
