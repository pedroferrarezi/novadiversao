import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimpsonsPage } from './simpsons.page';

describe('SimpsonsPage', () => {
  let component: SimpsonsPage;
  let fixture: ComponentFixture<SimpsonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpsonsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimpsonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
