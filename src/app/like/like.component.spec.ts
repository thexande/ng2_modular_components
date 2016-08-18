/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { LikeComponent } from './like.component';

describe('Component: Like', () => {
  it('should create an instance', () => {
    let component = new LikeComponent();
    expect(component).toBeTruthy();
  });
});
