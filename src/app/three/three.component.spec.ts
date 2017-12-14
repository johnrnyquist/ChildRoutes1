import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThreeComponent} from './three.component';
import {RouterLinkWithHref, RouterOutlet} from '@angular/router';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

describe('ThreeComponent', () => {
  let component: ThreeComponent;
  let fixture: ComponentFixture<ThreeComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ThreeComponent]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a link to FourComponent', async(() => {
    fixture = TestBed.createComponent(ThreeComponent);
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => de.attributes['routerLink'] === '/three/four');
    expect(index).toBeGreaterThan(-1);
  }));
  it('should have a router outlet', async(() => {
    fixture = TestBed.createComponent(ThreeComponent);
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBe(null);
  }));
});
