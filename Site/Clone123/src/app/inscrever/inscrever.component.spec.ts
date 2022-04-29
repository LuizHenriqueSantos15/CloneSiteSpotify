/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InscreverComponent } from './inscrever.component';

describe('InscreverComponent', () => {
  let component: InscreverComponent;
  let fixture: ComponentFixture<InscreverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscreverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscreverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
