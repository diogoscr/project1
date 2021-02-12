import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningsListComponent } from './warnings-list.component';

describe('WarningsListComponent', () => {
  let component: WarningsListComponent;
  let fixture: ComponentFixture<WarningsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
