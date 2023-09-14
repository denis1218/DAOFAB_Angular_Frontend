import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTableComponent } from './child-table.component';

describe('ChildTableComponent', () => {
  let component: ChildTableComponent;
  let fixture: ComponentFixture<ChildTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildTableComponent]
    });
    fixture = TestBed.createComponent(ChildTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
