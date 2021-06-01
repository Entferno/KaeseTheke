import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaeseKaufenComponent } from './kaese-kaufen.component';

describe('KaeseKaufenComponent', () => {
  let component: KaeseKaufenComponent;
  let fixture: ComponentFixture<KaeseKaufenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaeseKaufenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaeseKaufenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
