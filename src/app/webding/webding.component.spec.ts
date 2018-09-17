import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdingComponent } from './webding.component';

describe('WebdingComponent', () => {
  let component: WebdingComponent;
  let fixture: ComponentFixture<WebdingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebdingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
