import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcCodeComponent } from './src-code.component';

describe('SrcCodeComponent', () => {
  let component: SrcCodeComponent;
  let fixture: ComponentFixture<SrcCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrcCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
