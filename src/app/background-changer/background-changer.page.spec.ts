import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackgroundChangerPage } from './background-changer.page';

describe('BackgroundChangerPage', () => {
  let component: BackgroundChangerPage;
  let fixture: ComponentFixture<BackgroundChangerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundChangerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackgroundChangerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
