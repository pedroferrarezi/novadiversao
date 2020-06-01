import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BobesponjaPage } from './bobesponja.page';

describe('BobesponjaPage', () => {
  let component: BobesponjaPage;
  let fixture: ComponentFixture<BobesponjaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobesponjaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BobesponjaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
