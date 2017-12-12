import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectListBoxComponent } from './multiple-select-list-box.component';

describe('MultipleSelectListBoxComponent', () => {
  let component: MultipleSelectListBoxComponent;
  let fixture: ComponentFixture<MultipleSelectListBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleSelectListBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSelectListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
