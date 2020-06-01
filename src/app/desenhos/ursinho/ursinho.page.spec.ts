import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrsinhoPage } from './ursinho.page';

describe('UrsinhoPage', () => {
  let component: UrsinhoPage;
  let fixture: ComponentFixture<UrsinhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrsinhoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrsinhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
