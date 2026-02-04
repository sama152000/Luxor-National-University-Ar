/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeansWordComponent } from './deans-word.component';

describe('DeansWordComponent', () => {
  let component: DeansWordComponent;
  let fixture: ComponentFixture<DeansWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeansWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeansWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
