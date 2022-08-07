import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedcardComponent } from './selectedcard.component';

describe('SelectedcardComponent', () => {
  let component: SelectedcardComponent;
  let fixture: ComponentFixture<SelectedcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
