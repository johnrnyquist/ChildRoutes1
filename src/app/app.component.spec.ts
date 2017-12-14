import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {By} from '@angular/platform-browser';
import {RouterLinkWithHref, RouterOutlet} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should have a link to OneComponent', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => de.attributes['routerLink'] === '/one');
    expect(index).toBeGreaterThan(-1);
  }));
  it('should have a link to TwoComponent', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => de.attributes['routerLink'] === '/two');
    expect(index).toBeGreaterThan(-1);
  }));
  it('should have a router outlet', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBe(null);
  }));
});
