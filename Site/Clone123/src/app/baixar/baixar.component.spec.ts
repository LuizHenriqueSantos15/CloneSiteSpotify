/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BaixarComponent } from './baixar.component';

describe('BaixarComponent', () => {
  let component: BaixarComponent;
  let fixture: ComponentFixture<BaixarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaixarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaixarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
